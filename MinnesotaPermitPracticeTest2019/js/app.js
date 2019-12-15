const App = (function() {
	let displayQuestionChoices = function(question, qResult) {
		let choices = question.choices;
		if (!Util.isValidArray(choices)) {
			alert('No Choice for this Question!');
			return;
		}
		$('#qBody').html('');
		if (Util.isValidObjectKey(question, 'orderedChoice') && question.orderedChoice == 0) {
			choices.reverse();
		}
		for (let c in choices) {
			let divSelector = '<div class="input-group mb-3">';
			divSelector = divSelector + '<div class="input-group-prepend">';
			divSelector = divSelector + '<div class="input-group-text">';
			divSelector = divSelector + '<input type="checkbox" value="' + choices[c].a + '" data-c="' + choices[c].q + '">';
			divSelector = divSelector + '</div>';
			divSelector = divSelector + '</div>';
			divSelector = divSelector + '<label class="form-control">' + choices[c].q + '</label>';
			divSelector = divSelector + '</div>';
			$( divSelector ).appendTo( '#qBody' );
		}
		(function() {
			let isExistingChoice = 0;
			if (Util.isValidObjectKey(qResult, 'choice')) {
				if (qResult.choice.a == 0) {//Not correct
					for (let x = 0; x < choices.length; x++) {
						let choiceSelector = $( "input:checkbox:eq(" + x + ")" );
						if (qResult.choice.q == choiceSelector.data('c') && 0 == choiceSelector.val()) {//find wrong answer
							choiceSelector.parent().parent().siblings().addClass('practice-test-wrong');
							isExistingChoice = 1;
						} else if (qResult.choice.q != choiceSelector.data('c') && 1 == choiceSelector.val()) {//find correct answer
							choiceSelector.prop("checked", true);
							isExistingChoice = 1;
						}
					}
				} else {//Correct
					for (let x = 0; x < choices.length; x++) {
						let choiceSelector = $( "input:checkbox:eq(" + x + ")" );
						if (qResult.choice.q == choiceSelector.data('c') && 1 == choiceSelector.val()) {
							choiceSelector.prop("checked", true);
							isExistingChoice = 1;
							break;
						}
					}
				}
			}
			if (isExistingChoice) {
				$('#qBody').data('q', 1);
				$('#nextQuestion').removeClass('disabled');
				$('input:checkbox').prop("disabled", true);
				//$('#qHint').removeClass('practice-test-show').addClass('practice-test-hide');
				//$('#qResult').removeClass('practice-test-hide').addClass('practice-test-show');
			}
			$("input[type=checkbox]").click(function() {
				let checked = $(this).prop("checked");
				$('input:checkbox').prop('checked', false);
				if (checked) {
					let pTitle = $('#pTitle').html(),
						questionIndex = parseInt($('#qBlog').data('q')) - 1,
						practiceIndex = parseInt($('#qTitle').data('q')) - 1;
					if (practiceIndex <= -1) practiceIndex = 0;
					if (questionIndex <= -1) questionIndex = 0;
					let results = AppData.getResults(),
						result = results[practiceIndex],
						practices = AppData.getPractices(),
						practice = practices[practiceIndex],
						practiceNumber = (practiceIndex + 1),
						practicePropertyName = "p" + practiceNumber,
						qResults = result[practicePropertyName],
						questions = practice[practicePropertyName];
					let question = questions[questionIndex],
						choice = {"q" : $(this).data('c'), "a" : $(this).val()},
						qResult = {"title" : question.title, "choice" : choice};
					if (!Util.isValidArray(qResults)) {
						qResults.push(qResult);
					} else {
						let oldQuestion = qResults[questionIndex];
						if (Util.isValidObjectKey(oldQuestion, "title") && oldQuestion.title == qResult.title) {
							qResults[questionIndex].choice = choice;
						} else {
							qResults.push(qResult);
						}
					}
					$('#qBody').data('q', 1);
					$('#nextQuestion').removeClass('disabled');
					$('input:checkbox').prop("disabled", true);
					$('#qHint').removeClass('practice-test-show').addClass('practice-test-hide');
					$('#qResult').removeClass('practice-test-hide').addClass('practice-test-show');
					if (1 == $(this).val()) {
						$(this).prop("checked", checked);
					} else {
						$(this).parent().parent().siblings().addClass('practice-test-wrong');
						for (let x = 0; x < 4; x++) {//find correct answer
							let choiceSelector = $( "input:checkbox:eq(" + x + ")" );
							if ($(this).data('c') != choiceSelector.data('c') && 1 == choiceSelector.val()) {
								choiceSelector.prop("checked", checked);
								break;
							}
						}
					}
				} else {
					$('#nextQuestion').removeClass('disabled').addClass('disabled');
					$('input:checkbox').prop("disabled", false);
					$('#qBody').data('q', 0);
					$('#qHint').removeClass('practice-test-hide').addClass('practice-test-show');
					$('#qResult').removeClass('practice-test-show').addClass('practice-test-hide');
				}
			});
		})();
	},
	getNumberInKhmer = function(khNumbers, enNumber) {
		if (enNumber < 10) return khNumbers[enNumber];
		if (enNumber % 10 == 0) {
			let r = enNumber / 10;
			return khNumbers[r] + '' + khNumbers[0];
		} else {
			let r = enNumber / 10,
				re = r + '',
				arr = re.split('.');
			return khNumbers[arr[0]] + '' + khNumbers[arr[1]];
		}
	},
	displayPracticeTest = function(practiceIndex, questionIndex) {
		let myData = AppData.getMyData(),
			lang = $('#appMenuItem').data('q'),
			practices = AppData.getPractices(),
			khNumbers = AppData.getKhmerNumbers(),
			myApp = (lang == 'en') ? myData.en : myData.kh;
		if (!Util.isValidArray(practices)) {
			alert('No Practice Test!');
			return;
		}
		let practice = practices[practiceIndex],
			practiceNumber = (practiceIndex + 1),
			questionNumber = (questionIndex + 1),
			practicePropertyName = "p" + practiceNumber;
		if (!Util.isValidObjectKey(practice, practicePropertyName)) {
			console.log('There is no ' + practicePropertyName + ' property!');
			alert('No Practice Test!');
			return;
		}
		let questions = practice[practicePropertyName];
		if (!Util.isValidArray(questions)) {
			alert('No Question for this Practice Test!');
			return;
		}
		$('#qNumbers').html('');
		let question = questions[questionIndex];
		for (let q = 1; q < questions.length + 1; q++) {
			let btnClass = (questionNumber == q) ? 'btn-outline-info' : 'btn-light';
			let dq = (lang == 'en') ? q : getNumberInKhmer(khNumbers, q);
			let btnSelector = '<button id="q_' + q + '" type="button" class="btn ' + btnClass + ' btn-sm">'+ dq +'</button>';
			$( btnSelector ).appendTo( '#qNumbers' );
		}
		let qWrong = 0,
			qCorrect = 0,
			results = AppData.getResults(),
			result = results[practiceIndex],
			qResults = result[practicePropertyName];
		if (Util.isValidArray(qResults)) {
			for (let q = 0; q < qResults.length; q++) {
				let qResult = qResults[q];
				if (Util.isValidObjectKey(qResult, 'choice')) {
					if (qResult.choice.a == 0) {//Not correct
						$('#q_' + (q + 1)).removeClass('btn-light').removeClass('btn-info').removeClass('btn-outline-info').addClass('btn-danger');
						qWrong++;
					} else {//Correct
						$('#q_' + (q + 1)).removeClass('btn-light').removeClass('btn-danger').removeClass('btn-outline-info').addClass('btn-info');
						qCorrect++;
					}
				}
			}
		}
		//console.log('practiceIndex: ' + practiceIndex + ', questionIndex: ' + questionIndex + ', questionNumber: ' + questionNumber);
		$('#qBody').data('q', 0);
		$('#qTitle').data('q', practiceNumber);
		if (questionIndex == 0) $('#backQuestion').removeClass('disabled').addClass('disabled');
		$('#nextQuestion').removeClass('disabled').addClass('disabled');
		$('#qHint').removeClass('practice-test-hide').addClass('practice-test-show');
		$('#qResult').removeClass('practice-test-show').addClass('practice-test-hide');
		practiceNumber = (lang == 'en') ? practiceNumber : khNumbers[practiceNumber];
		let dq = (lang == 'en') ? questionNumber : getNumberInKhmer(khNumbers, questionNumber);
		$('#pTitle').html(myApp.pTitle + practiceNumber);//practice's title
		$('#qBlog').data('q', questionNumber);//question's number
		$('#qTitle').html(dq + '). ' + question.title);//question's title
		$('#qHint').html(question.hint);
		$('#qResult').html(question.result);
		$('#qWrong').html('');
		$('#qCorrect').html('');
		qWrong =  (lang == 'en') ? qWrong : getNumberInKhmer(khNumbers, qWrong);
		qCorrect =  (lang == 'en') ? qCorrect : getNumberInKhmer(khNumbers, qCorrect);
		let wrongSelector = myApp.qWrong + ' <span class="badge badge-danger">' + qWrong + '</span>';
		let correctSelector = myApp.qCorrect + ' <span class="badge badge-light">' + qCorrect + '</span>';
		$('#qWrong').html(wrongSelector);
		$('#qCorrect').html(correctSelector);
		if (AppData.Q_IMG_SRC_BLANK == question.src) {
			$('#qImgBlog').removeClass('practice-test-show').addClass('practice-test-hide');
		} else {
			$('#qImgBlog').removeClass('practice-test-hide').addClass('practice-test-show');
		}
		$('#qImage').prop('src', AppData.QUESTION_IMAGE_PATH + question.src).prop('alt', question.hint);
		$('#backQuestion').html(myApp.backQuestion);
		$('#nextQuestion').html(myApp.nextQuestion);
		displayQuestionChoices(question, qResults[questionIndex]);
	},
	clickOnMenuItem = function() {
		let myApp = {},
			myData = AppData.getMyData(),
			q = $('#appMenuItem').data('q'),
			khSelector1 = '<span><img src="images/km_kh.png" alt="kh" title="Khmer"><span> Khmer</span><span> (ភាសាខ្មែរ)</span></span>',
			khSelector2 = '<span><img src="images/km_kh.png" alt="kh" title="Khmer"><span> ភាសាខ្មែរ</span><span> (Khmer)</span></span>',
			enSelector = '<span><img src="images/en_us.png" alt="en" title="English"><span> English</span><span> (English)</span></span>';
		if (q == 'en') {//Khmer
			$('#appMenuItem').html('');
			$('.dropdown-toggle').html('');
			$('#appMenuItem').data('q', 'kh');
			$( enSelector ).appendTo( '#appMenuItem' );
			let menuSelector = khSelector2 + '<span class="caret"></span>';
			$( menuSelector ).appendTo( '.dropdown-toggle' );
			//$('#appFont').prop('href', 'https://fonts.googleapis.com/css?family=Battambang&display=swap');
			$('#khCss').prop('href', 'css/khCss.css');
			myApp = myData.kh;
		} else {//English
			$('#appMenuItem').html('');
			$('.dropdown-toggle').html('');
			$('#appMenuItem').data('q', 'en');
			$( khSelector1 ).appendTo( '#appMenuItem' );
			let menuSelector = enSelector + '<span class="caret"></span>';
			$( menuSelector ).appendTo( '.dropdown-toggle' );
			//$('#appFont').prop('href', 'https://fonts.googleapis.com/css?family=Playfair+Display:700,900');
			$('#khCss').prop('href', '');
			myApp = myData.en;
		}
		$('#appTitle').html(myApp.appTitle);
		displayPracticeTest(0, 0);
	},
	init = function() {
		clickOnMenuItem();
	},
	clickOnTitle = function(selector) {
		let pTitle = selector.html(),
			practiceIndex = parseInt($('#qTitle').data('q')) - 1;
		if (practiceIndex <= -1) practiceIndex = 0;
		displayPracticeTest(practiceIndex, 0);
	},
	clickOnBackBtn = function() {
		let pTitle = $('#pTitle').html(),
			questionIndex = parseInt($('#qBlog').data('q')),
			practiceIndex = parseInt($('#qTitle').data('q')) - 1;
		if (practiceIndex <= -1) practiceIndex = 0;
		if (questionIndex > 1) {
			questionIndex = questionIndex - 2;
		}
		displayPracticeTest(practiceIndex, questionIndex);
	},
	clickOnNextBtn = function() {
		let pTitle = $('#pTitle').html(),
			questionIndex = parseInt($('#qBlog').data('q')),
			isChecked = parseInt($('#qBody').data('q')) > 0,
			practiceIndex = parseInt($('#qTitle').data('q')) - 1;
		if (!isChecked) {
			alert('Try again!');
			return;
		}
		if (practiceIndex <= -1) practiceIndex = 0;
		let results = AppData.getResults(),
			result = results[practiceIndex],
			practices = AppData.getPractices(),
			practice = practices[practiceIndex],
			practiceNumber = (practiceIndex + 1),
			practicePropertyName = "p" + practiceNumber,
			qResults = result[practicePropertyName],
			questions = practice[practicePropertyName];
		if (questionIndex >= questions.length) {
			questionIndex = 0;
			practiceIndex = practiceIndex + 1;//next practice test
			let qWrong = 0,
				qCorrect = 0;
			if (Util.isValidArray(qResults)) {
				for (let q = 0; q < qResults.length; q++) {
					let qResult = qResults[q];
					if (Util.isValidObjectKey(qResult, 'choice')) {
						if (qResult.choice.a == 0) {//Not correct
							qWrong++;
						} else {//Correct
							qCorrect++;
						}
					}
				}
			}
			if (qCorrect >= 32) {
				alert('congratulation!');
			} else {
				console.log('Try again!');
			}
		}
		displayPracticeTest(practiceIndex, questionIndex);
		$('#backQuestion').removeClass('disabled');
		$('#backQuestion').removeClass('practice-test-hide').addClass('practice-test-show');
	};
	return {
		init : init,
		clickOnTitle : clickOnTitle,
		clickOnMenuItem : clickOnMenuItem,
		clickOnBackBtn : clickOnBackBtn,
		clickOnNextBtn : clickOnNextBtn
	};
})();
