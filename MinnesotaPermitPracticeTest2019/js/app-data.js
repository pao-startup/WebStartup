const AppData = (function() {
	const Q_TYPE_TEXT = "text",
		Q_TYPE_PICTURE = "picture",
		QUESTION_IMAGE_PATH = "images/",
		Q_STORE_ANSWERS = "mytestresult",
		Q_IMG_SRC_BLANK = "sign_blank.png",
		PRACTICE_TITLE = "MN DVS Practice Test ";
	let practices = [
		{"p1" : AppPracticeOne.getPractice() },
		{"p2" : AppPracticeTwo.getPractice() },
		{"p3" : AppPracticeThree.getPractice() },
		{"p4" : AppPracticeFour.getPractice() }
	],
	results = [{"p1" : []}, {"p2" : []}, {"p3" : []}, {"p4" : []}];

	let getResults = function() {
		return results;
	}, getPractices = function() {
		return practices;
	};
	return {
		Q_TYPE_TEXT : Q_TYPE_TEXT,
		Q_TYPE_PICTURE : Q_TYPE_PICTURE,
		Q_STORE_ANSWERS : Q_STORE_ANSWERS,
		QUESTION_IMAGE_PATH : QUESTION_IMAGE_PATH,
		Q_IMG_SRC_BLANK : Q_IMG_SRC_BLANK,
		PRACTICE_TITLE : PRACTICE_TITLE,
		getResults : getResults,
		getPractices : getPractices
	};
})();
