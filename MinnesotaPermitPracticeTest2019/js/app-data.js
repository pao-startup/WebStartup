const AppData = (function() {
	const Q_TYPE_TEXT = "text",
		Q_TYPE_PICTURE = "picture",
		QUESTION_IMAGE_PATH = "images/",
		Q_STORE_ANSWERS = "mytestresult",
		Q_IMG_SRC_BLANK = "sign_blank.png";
	let practices = [
		{"p1" : AppPracticeOne.getPractice() },
		{"p2" : AppPracticeTwo.getPractice() },
		{"p3" : AppPracticeThree.getPractice() },
		{"p4" : AppPracticeFour.getPractice() }
	],
	khPractices = [
		{"p1" : AppKhPracticeOne.getPractice() },
		{"p2" : AppPracticeTwo.getPractice() },
		{"p3" : AppPracticeThree.getPractice() },
		{"p4" : AppPracticeFour.getPractice() }
	],
	results = [{"p1" : []}, {"p2" : []}, {"p3" : []}, {"p4" : []}],
	khNumbers = ['០','១','២','៣','៤','៥','៦','៧','៨','៩'],
	myData = {
		'en' : {
			'appTitle' : 'Minnesota DVS Permit Practice Test 2019 | MN',
			'pTitle' : 'MN DVS Practice Test ',
			'qCorrect' : 'Correct',
			'qWrong' : 'Wrong',
			'backQuestion' : 'Back Question',
			'nextQuestion' : 'Next Question',
			'practices' : practices
		},
		'kh' : {
			'appTitle' : 'រៀនកាប្រលងទ្រីស្តីសាកល្បងរបស់រដ្ធមិនីសុតាឆ្នាំ២០១៩',
			'pTitle' : 'រៀនកាប្រលងទ្រីស្តីសាកល្បងរបស់រដ្ធមិនីសុតាទី ',
			'qCorrect' : 'ចម្លើយត្រូវ',
			'qWrong' : 'ចម្លើយខុស',
			'backQuestion' : 'សំនួរមុន',
			'nextQuestion' : 'សំនួរបន្ទាប់',
			'practices' : khPractices
		}
	};

	let getResults = function() {
		return results;
	},
	getPractices = function() {
		return practices;
	},
	getMyData = function() {
		return myData;
	},
	getKhmerNumbers = function() {
		return khNumbers;
	};
	return {
		Q_TYPE_TEXT : Q_TYPE_TEXT,
		Q_TYPE_PICTURE : Q_TYPE_PICTURE,
		Q_STORE_ANSWERS : Q_STORE_ANSWERS,
		QUESTION_IMAGE_PATH : QUESTION_IMAGE_PATH,
		Q_IMG_SRC_BLANK : Q_IMG_SRC_BLANK,
		getMyData : getMyData,
		getResults : getResults,
		getPractices : getPractices,
		getKhmerNumbers : getKhmerNumbers
	};
})();
