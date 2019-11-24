const AppData = (function() {
	const QUESTION_IMAGE_PATH = "images/",
			PRACTICE_TITLE = "MN DVS Practice Test ";
	let practices = [
		{"p1" : AppPracticeOne.getPractice() },
		{"p2" : AppPracticeTwo.getPractice() },
		{"p3" : AppPracticeThree.getPractice() },
		{"p4" : AppPracticeFour.getPractice() }
	];

	let getPractices = function() {
		return practices;
	};
	return {
		QUESTION_IMAGE_PATH : QUESTION_IMAGE_PATH,
		PRACTICE_TITLE : PRACTICE_TITLE,
		getPractices : getPractices
	};
})();
