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
						practiceIndex = parseInt(pTitle.replace(AppData.PRACTICE_TITLE, '')) - 1;
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
	displayPracticeTest = function(practiceIndex, questionIndex) {
		let practices = AppData.getPractices();
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
			let btnSelector = '<button id="q_' + q + '" type="button" class="btn ' + btnClass + ' btn-sm">'+ q +'</button>';
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
		if (questionIndex == 0) $('#backQuestion').removeClass('disabled').addClass('disabled');
		$('#nextQuestion').removeClass('disabled').addClass('disabled');
		$('#qHint').removeClass('practice-test-hide').addClass('practice-test-show');
		$('#qResult').removeClass('practice-test-show').addClass('practice-test-hide');
		$('#pTitle').html(AppData.PRACTICE_TITLE + practiceNumber);//practice's title
		$('#qBlog').data('q', questionNumber);//question's number
		$('#qTitle').html(questionNumber + '). ' + question.title);//question's title
		$('#qHint').html(question.hint);
		$('#qResult').html(question.result);
		$('#qWrong').html(qWrong);
		$('#qCorrect').html(qCorrect);
		if (AppData.Q_IMG_SRC_BLANK == question.src) {
			$('#qImgBlog').removeClass('practice-test-show').addClass('practice-test-hide');
		} else {
			$('#qImgBlog').removeClass('practice-test-hide').addClass('practice-test-show');
		}
		$('#qImage').prop('src', AppData.QUESTION_IMAGE_PATH + question.src).prop('alt', question.hint);
		displayQuestionChoices(question, qResults[questionIndex]);
	},
	init = function() {
		displayPracticeTest(0, 0);
	},
	clickOnTitle = function(selector) {
		let pTitle = selector.html(),
			practiceIndex = parseInt(pTitle.replace(AppData.PRACTICE_TITLE, '')) - 1;
		if (practiceIndex <= -1) practiceIndex = 0;
		displayPracticeTest(practiceIndex, 0);
	},
	clickOnBackBtn = function() {
		let pTitle = $('#pTitle').html(),
			questionIndex = parseInt($('#qBlog').data('q')),
			practiceIndex = parseInt(pTitle.replace(AppData.PRACTICE_TITLE, '')) - 1;
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
			practiceIndex = parseInt(pTitle.replace(AppData.PRACTICE_TITLE, '')) - 1;
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
		clickOnBackBtn : clickOnBackBtn,
		clickOnNextBtn : clickOnNextBtn
	};
})();
