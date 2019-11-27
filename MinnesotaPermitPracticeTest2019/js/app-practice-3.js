const AppPracticeThree = (function() {
	let q1 = {
		"type" : "text",
		"title" : "Which of the following statements about freeways is NOT correct?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Freeways are designed to handle higher-speed traffic safely.", "a" : 0},
			{"q" : "While using a freeway, cross a solid line immediately after entering or before exiting.", "a" : 1},
			{"q" : "Enter a freeway smoothly by accelerating on the entrance ramp to match the speed of traffic.", "a" : 0},
			{"q" : "Most freeways have deceleration lanes to assist the driver in exiting.", "a" : 0},
			],
		"hint" : "Do not cross a solid line.",
		"result" : "Freeways and interstate highways are designed to handle higher-speed traffic safely. Do not cross a solid line while entering or exiting a freeway."
		},
		q2 = {
		"type" : "picture",
		"title" : "This sign is",
		"src" : "sign_railroad_crossing_ahead_sign.svg",
		"choices" : [
			{"q" : "a stop sign at a rotary (traffic circle).", "a" : 0},
			{"q" : "a No Passing sign in a work zone.", "a" : 0},
			{"q" : "a railroad crossing sign.", "a" : 1},
			{"q" : "a road repair sign.", "a" : 0},
			],
		"hint" : "The letters \"RR\" provide a clue.",
		"result" : "This sign warns of a railroad crossing ahead. Watch out for warning signals and approaching trains. Slow down and prepare to stop if necessary."
		},
		q3 = {
		"type" : "text",
		"title" : "If you are having vehicle trouble and need to stop, what is the first thing you should do?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Pull off the road and move away from traffic.", "a" : 1},
			{"q" : "Stop your vehicle over a hill or just around a curve for visibility.", "a" : 0},
			{"q" : "Lift the hood to signal an emergency.", "a" : 0},
			{"q" : "Check your driver's manual for help.", "a" : 0},
			],
		"hint" : "Don't risk an accident.",
		"result" : "If your vehicle breaks down on the road, make sure that other drivers can see it. If you are having vehicle trouble and need to stop, perform these steps: Pull off the road, away from all traffic if possible. Turn on your emergency flashers. Lift the hood to signal the emergency and place emergency flares or triangles behind your vehicle."
		},
		q4 = {
		"type" : "text",
		"title" : "When a double solid yellow line is in the center of the roadway, passing is",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "permitted for heavy vehicles.", "a" : 0},
			{"q" : "permitted in one direction.", "a" : 0},
			{"q" : "not permitted in either direction.", "a" : 1},
			{"q" : "permitted in both directions.", "a" : 0},
			],
		"hint" : "Do not cross a solid line.",
		"result" : "Passing is not permitted on either side of a double solid line."
		},
		q5 = {
		"type" : "text",
		"title" : "A flashing yellow light means that you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "come to a complete stop.", "a" : 0},
			{"q" : "speed up to clear the intersection.", "a" : 0},
			{"q" : "make a U-turn.", "a" : 0},
			{"q" : "slow down and proceed with caution.", "a" : 1},
			],
		"hint" : "Proceed with caution.",
		"result" : "A flashing yellow light means that you should slow down and proceed with caution. Flashing yellow lights are positioned at relatively hazardous locations."
		},
		q6 = {
		"type" : "text",
		"title" : "When changing lanes, all of the following are correct maneuvers EXCEPT",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "looking in your rear-view and side mirrors.", "a" : 0},
			{"q" : "turning the steering wheel when you turn your head to check your blind spots.", "a" : 1},
			{"q" : "not taking your eyes off the road ahead for more than an instant.", "a" : 0},
			{"q" : "looking over your shoulder in the direction you plan to move to check your blind spots.", "a" : 0},
			],
		"hint" : "Avoid turning the steering wheel when you turn your head.",
		"result" : "When you turn your head to check your blind spots, keep the steering wheel straight. (People have a natural tendency to turn their arms in the same direction as their head turns.)"
		},
		q7 = {
		"type" : "picture",
		"title" : "What does this sign indicate?",
		"src" : "sign_handicapped_parking_space.svg",
		"choices" : [
			{"q" : "A daycare center", "a" : 0},
			{"q" : "A hospital parking lot", "a" : 0},
			{"q" : "A handicapped parking space", "a" : 1},
			{"q" : "The availability of wheelchairs", "a" : 0},
			],
		"hint" : "Only certain people may park here.",
		"result" : "This sign indicates a handicapped parking space. You cannot park here unless your vehicle is displaying disability license plates or a disability parking permit."
		},
		q8 = {
		"type" : "text",
		"title" : "Following too closely behind a vehicle is also known as",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "tailgating.", "a" : 1},
			{"q" : "aggressive driving.", "a" : 0},
			{"q" : "sidegating.", "a" : 0},
			{"q" : "defensive driving.", "a" : 0},
			],
		"hint" : "Always maintain a safe following distance.",
		"result" : "Keep a safe distance from other vehicles on the road to give you plenty of time to react to the unexpected. Tailgating refers to following too closely behind a vehicle."
		},
		q9 = {
		"type" : "text",
		"title" : "A _________ indicates the outer edge of the traffic lane, and it may be crossed only by traffic moving to or from the shoulder.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "broken yellow line", "a" : 0},
			{"q" : "solid yellow line", "a" : 0},
			{"q" : "broken white line", "a" : 0},
			{"q" : "solid white line", "a" : 1},
			],
		"hint" : "You should not cross a solid white line except in special circumstances.",
		"result" : "The right edges of many roadways are marked with a solid white line. This line indicates the outer edge of the roadway, and it may be crossed only by traffic moving to or from the shoulder."
		},
		q10 = {
		"type" : "text",
		"title" : "Which of the following statements about railroad crossings is FALSE?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "You must yield to crossing trains.", "a" : 0},
			{"q" : "You should check for more than one track before crossing.", "a" : 0},
			{"q" : "Do not start to cross if there is no room for your vehicle on the opposite side.", "a" : 0},
			{"q" : "It is wise to shift gears when crossing railroad tracks.", "a" : 1},
			],
		"hint" : "Cross tracks in one smooth action.",
		"result" : "At a railroad crossing, you must wait until there is room for your vehicle on the opposite side. You must yield to crossing trains. Do not stop on the tracks. It is wise not to shift gears when crossing the tracks, because your vehicle might stall."
		},
		q11 = {
		"type" : "text",
		"title" : "In a roundabout, you must drive in",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "any direction.", "a" : 0},
			{"q" : "a clockwise direction.", "a" : 0},
			{"q" : "the direction of the oncoming vehicles.", "a" : 0},
			{"q" : "a counterclockwise direction.", "a" : 1},
			],
		"hint" : "Enter toward the right.",
		"result" : "A roundabout is a circular intersection in which vehicles travel counterclockwise around a central island."
		},
		q12 = {
		"type" : "text",
		"title" : "When two vehicles meet on a steep mountain road where neither can pass, which vehicle has the right-of-way?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "The vehicle traveling downhill", "a" : 0},
			{"q" : "The vehicle traveling uphill", "a" : 1},
			{"q" : "Both vehicles", "a" : 0},
			{"q" : "The vehicle that comes first", "a" : 0},
			],
		"hint" : "The vehicle going downhill has more control when backing up.",
		"result" : "When two vehicles meet on a steep mountain road where neither can pass, the vehicle traveling downhill must yield the right-of-way by backing up until the vehicle going uphill can pass. The vehicle facing downhill has more control when backing up."
		},
		q13 = {
		"type" : "text",
		"title" : "Which of the following statements about the right-of-way is FALSE?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Drivers must yield to pedestrians at unmarked intersections.", "a" : 0},
			{"q" : "Vehicles turning left must yield to oncoming traffic.", "a" : 0},
			{"q" : "At an uncontrolled T-intersection, the vehicle on the through street must yield to the vehicle on the terminating street.", "a" : 1},
			{"q" : "Vehicles entering or crossing a roadway from a private driveway must yield to all oncoming vehicles.", "a" : 0},
			],
		"hint" : "Look for a FALSE statement!",
		"result" : "This statement is FALSE: "At an uncontrolled T-intersection, the vehicle on the through street must yield to the vehicle on the terminating street." The reverse is true: At an uncontrolled T-intersection, the vehicle on the terminating street must yield to vehicles on the through street."
		},
		q14 = {
		"type" : "text",
		"title" : "A wide white line painted across a traffic lane before an intersection is known as a",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "stop line.", "a" : 1},
			{"q" : "yield line.", "a" : 0},
			{"q" : "merge line.", "a" : 0},
			{"q" : "crosswalk line.", "a" : 0},
			],
		"hint" : "You must stop at this line.",
		"result" : "A stop line is a wide white line painted across a traffic lane before an intersection. If a stop sign or traffic signal requires you to stop, you must stop before the stop line."
		},
		q15 = {
		"type" : "text",
		"title" : "You must use high-beam headlights in all of the following situations, EXCEPT",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "where there may be people alongside the road.", "a" : 0},
			{"q" : "in fog, snow, or heavy rain.", "a" : 1},
			{"q" : "on unfamiliar roads.", "a" : 0},
			{"q" : "in construction areas.", "a" : 0},
			],
		"hint" : "Snow and rain cause glare.",
		"result" : "Use your high beams whenever there are no oncoming vehicles nearby. High beams let you see twice as far as low beams. Be sure to use high beams on unfamiliar roads, in construction areas, or where there may be people alongside the road. Use low beams in fog, snow, or heavy rain. Light from high beams reflects back from such precipitation and causes glare."
		},
		q16 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q17 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q18 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q19 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q20 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q21 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q22 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q23 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q24 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q25 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q26 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q27 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q28 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q29 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q30 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q31 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q32 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q33 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q34 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q35 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q36 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q37 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q38 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q39 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		},
		q40 = {
		"type" : "text",
		"title" : "",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			{"q" : "", "a" : 0},
			],
		"hint" : "",
		"result" : ""
		};
	let practice = [
		q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,
		q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
		q21, q22, q23, q24, q25, q26, q27, q28, q29, q30,
		q31, q32, q33, q34, q35, q36, q37, q38, q39, q40
	];
	let getPractice = function() {
		return practice;
	};
	return {
		getPractice : getPractice
	};
})();
