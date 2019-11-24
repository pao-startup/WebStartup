const AppData = (function() {
	const QUESTION_IMAGE_PATH = "images/",
			PRACTICE_TITLE = "MN DVS Practice Test ";

	let q1 = {
		"type" : "checkbox",
		"title" : "What does this sign indicate?",
		"src" : "sign_school_zone_ahead.svg",
		"choices" : [
			{"q" : "A school zone", "a" : 1},
			{"q" : "A pedestrian crossing", "a" : 0},
			{"q" : "A hospital", "a" : 0},
			{"q" : "A bus stop", "a" : 0},
			],
		"hint" : "This sign indicates a school zone ahead. Schoolchildren may be crossing the road ahead, so slow down and proceed with caution."
		},
		q2 = {
		"type" : "checkbox",
		"title" : "A center lane between opposing lanes of traffic may be designated for",
		"src" : "sign_left_turns_only.svg",
		"choices" : [
			{"q" : "right turns only.", "a" : 0},
			{"q" : "passing", "a" : 0},
			{"q" : "left turns only.", "a" : 1},
			{"q" : "all of the above.", "a" : 0},
			],
		"hint" : "A center lane between lanes of traffic traveling in opposite directions may be designated for left turns only. This type of lane is marked by parallel solid and dashed yellow lines and is sometimes accompanied by white arrows on the pavement."
		};
	let practices = [
		{"p1" : [q1, q2]},
		{"p2" : [q1, q2]}
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