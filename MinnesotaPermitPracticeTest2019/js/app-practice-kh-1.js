const AppKhPracticeOne = (function() {
	let q1 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "តើផ្លាកសញ្ញានេះបង្ហាញពីឣ្វី?",
		"src" : "sign_school_zone_ahead.svg",
		"choices" : [
			{"q" : "តំបន់សាលារៀន", "a" : 1},
			{"q" : "កន្លែងឣ្នកថ្មើរជើងឆ្លងកាត់", "a" : 0},
			{"q" : "តំបន់មន្ទីរពេទ្យ", "a" : 0},
			{"q" : "ស្ថានីឡានក្រុងឈប់", "a" : 0},
			],
		"hint" : "ប្រុងប្រៀបដើម្បីបន្ថយល្បឿនហើយនិងឣោយឣតិភាពទៅឣ្នកថ្មើរជើងក្មេងឭ",
		"result" : "ផ្លាកសញ្ញានេះបង្ហាញពីតំបន់សាលារៀននៅខាងមុខ។ សិស្សសាលាឣាចកំពុងឆ្លងកាត់នៅផ្លូវខាងមុខ បន្ថយល្បឿននិងបើកបរដោយការប្រុងប្រយ័ត្ន។"
		},
		q2 = {
		"type" : "picture",
		"orderedChoice" : 1,
		"title" : "A center lane between opposing lanes of traffic may be designated for",
		"src" : "sign_left_turns_only.svg",
		"choices" : [
			{"q" : "right turns only.", "a" : 0},
			{"q" : "passing", "a" : 0},
			{"q" : "left turns only.", "a" : 1},
			{"q" : "all of the above.", "a" : 0},
			],
		"hint" : "Only for turning left.",
		"result" : "A center lane between lanes of traffic traveling in opposite directions may be designated for left turns only. This type of lane is marked by parallel solid and dashed yellow lines and is sometimes accompanied by white arrows on the pavement."
		},
		q3 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_Y_intersection.svg",
		"choices" : [
			{"q" : "A youth hostel ahead", "a" : 0},
			{"q" : "A yield sign ahead", "a" : 0},
			{"q" : "A side road ahead", "a" : 0},
			{"q" : "A Y-intersection ahead", "a" : 1},
			],
		"hint" : "Traffic splitting.",
		"result" : "This sign indicates a Y-intersection. The road ahead splits into two different directions. Be prepared for traffic crossing in your path and prepare to turn in one direction or the other."
		},
		q4 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "While driving a car equipped with airbags, do not place your hands on the steering wheel at __________ positions.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the 10 o'clock and 2 o'clock", "a" : 1},
			{"q" : "the 8 o'clock and 4 o'clock", "a" : 0},
			{"q" : "the 9 o'clock and 3 o'clock", "a" : 0},
			{"q" : "any of the above", "a" : 0},
			],
		"hint" : "You don't want to punch yourself in the nose or forehead.",
		"result" : "While driving a vehicle equipped with airbags, try to maintain at least 10 inches between yourself and the steering wheel. Keep your hands at the 8 and 4 o'clock positions or the 9 and 3 o'clock positions on the steering wheel. Avoid the 10 and 2 o'clock positions. Airbags deploy at very high speed. If your hands are high on the steering wheel, the airbag could drive your hands right into your face or even severely injure your hands."
		},
		q5 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "This hand signal indicates that the driver intends to",
		"src" : "sign_hand_sign_right_turns.svg",
		"choices" : [
			{"q" : "turn left.", "a" : 0},
			{"q" : "turn right.", "a" : 1},
			{"q" : "slow down or stop.", "a" : 0},
			{"q" : "make a U-turn.", "a" : 0},
			],
		"hint" : "Hand signals can communicate the same information as lighted turn and brake signals. They can communicate a driver's intention to turn, slow, or stop.",
		"result" : "In Minnesota during daylight hours, drivers may use hand and arm signals in addition to, or instead of, turn signals. This hand signal indicates that the driver intends to turn right."
		},
		q6 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_T_intersection.svg",
		"choices" : [
			{"q" : "A four-way intersection is ahead; prepare to yield.", "a" : 0},
			{"q" : "A side road is ahead; watch for vehicles entering the roadway.", "a" : 0},
			{"q" : "A T-intersection is ahead; yield to cross traffic.", "a" : 1},
			{"q" : "A tourist information center is ahead; stop if desired.", "a" : 0},
			],
		"hint" : "The black lines show the paths of travel.",
		"result" : "This sign indicates a T-intersection. The road you are traveling on will end soon. Prepare to turn right or left after yielding to cross traffic."
		},
		q7 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When passing another vehicle, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "return to the left side of the road before coming within 200 feet of an oncoming vehicle.", "a" : 0},
			{"q" : "return to the right side of the road before coming within 100 feet of an oncoming vehicle.", "a" : 1},
			{"q" : "return to the left side of the road before coming within 100 feet of an oncoming vehicle.", "a" : 0},
			{"q" : "return to the right side of the road before coming within 200 feet of an oncoming vehicle.", "a" : 0},
			],
		"hint" : "About five or six vehicle lengths.",
		"result" : "When passing another vehicle, you must return to the right side of the road before coming within 100 feet of an oncoming vehicle. (Even that legal minimum distance is cutting it rather close. If your vehicle and the oncoming vehicle are each traveling at 40 mph, the two vehicles will close a 100-foot distance between them in less than one second before they collide head-on.)"
		},
		q8 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If a pedestrian is in a marked or unmarked crosswalk, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "reduce your speed and proceed with caution.", "a" : 0},
			{"q" : "stop and wait until the pedestrian has passed.", "a" : 1},
			{"q" : "increase your speed and cross the crosswalk quickly.", "a" : 0},
			{"q" : "not stop your vehicle.", "a" : 0},
			],
		"hint" : "Yield the right-of-way to pedestrians.",
		"result" : "Yield the right-of-way to pedestrians crossing at intersections and crosswalks. When a pedestrian is in a marked or unmarked crosswalk, you are required to stop and wait until the pedestrian has passed your lane."
		},
		q9 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign indicate?",
		"src" : "sign_workers_performing_maintenance_roadway.svg",
		"choices" : [
			{"q" : "An excavation site", "a" : 0},
			{"q" : "A pedestrian crosswalk", "a" : 0},
			{"q" : "A flag person (flagger) at a work zone", "a" : 0},
			{"q" : "A road crew at work", "a" : 1},
			],
		"hint" : "The sign shows someone working on the ground.",
		"result" : "This sign indicates that workers are performing maintenance on the roadway. Slow down and move into a lane far away from the workers."
		},
		q10 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "A dashed (broken) white line next to your lane means that you can",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "increase your speed.", "a" : 0},
			{"q" : "change lanes.", "a" : 1},
			{"q" : "reduce your speed.", "a" : 0},
			{"q" : "make left turns.", "a" : 0},
			],
		"hint" : "A dashed (broken) line allows passing.",
		"result" : "A dashed (broken) white line next to your lane means that you can cross the line to change lanes."
		},
		q11 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Never pass on a curve or hill where you cannot clearly see the road ahead for",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "at least 500 feet.", "a" : 0},
			{"q" : "at least 100 feet.", "a" : 0},
			{"q" : "at least 300 feet.", "a" : 0},
			{"q" : "at least 700 feet.", "a" : 1},
			],
		"hint" : "Far ahead of you.",
		"result" : "Use extra caution when passing at night, when visibility is poor, and when the road is slippery. You must not pass on a curve or hill where you cannot clearly see the road ahead for at least 700 feet."
		},
		q12 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_railroad_crossing_ahead.svg",
		"choices" : [
			{"q" : "A railroad crossing is ahead.", "a" : 1},
			{"q" : "The railroad ahead is closed for repairs.", "a" : 0},
			{"q" : "The roadway ahead is closed for repairs.", "a" : 0},
			{"q" : "A new railroad is under construction.", "a" : 0},
			],
		"hint" : "Watch for trains.",
		"result" : "This sign warns you that a railroad crossing is ahead. Proceed with caution, look both ways for approaching trains, and prepare to stop if necessary."
		},
		q13 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On urban or town roads, the legal speed limit under ideal driving conditions is _______ unless traffic signs indicate otherwise.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "50 mph", "a" : 0},
			{"q" : "10 mph", "a" : 0},
			{"q" : "30 mph", "a" : 1},
			{"q" : "55 mph", "a" : 0},
			],
		"hint" : "Less than 40 mph.",
		"result" : "On urban or town roads, the legal speed limit under ideal driving conditions is 30 mph unless traffic signs indicate otherwise."
		},
		q14 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When a vehicle is properly parallel parked, its wheels on the curb side must be positioned",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "no more than 12 inches from the curb.", "a" : 1},
			{"q" : "no more than 30 inches from the curb.", "a" : 0},
			{"q" : "no less than 40 inches from the curb.", "a" : 0},
			{"q" : "no less than 12 inches from the curb.", "a" : 0},
			],
		"hint" : "As close to the curb as possible.",
		"result" : "If a vehicle is properly parallel parked, its wheels on the curb side will be positioned no more than 12 inches from the curb."
		},
		q15 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When you wish to change lanes or make a turn, you must _________ to inform other motorists of your intentions.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "signal at least 50 feet in advance", "a" : 0},
			{"q" : "signal at least 100 feet in advance", "a" : 1},
			{"q" : "signal at least 75 feet in advance", "a" : 0},
			{"q" : "signal at least 25 feet in advance", "a" : 0},
			],
		"hint" : "Five or six vehicle lengths.",
		"result" : "If you wish to change lanes or make a turn, you must signal at least 100 feet in advance to inform other motorists of your intentions. (At 40 mph, a vehicle will travel 100 feet in less than two seconds.)"
		},
		q16 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "What must you do when you approach or pass a stopped emergency vehicle with its lights flashing on a road with two lanes in your direction?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Slow down.", "a" : 0},
			{"q" : "Stop", "a" : 0},
			{"q" : "Move into the lane farthest from the emergency vehicle if possible; otherwise, slow down.", "a" : 1},
			{"q" : "Slow down and move into the lane farthest from the emergency vehicle if possible.", "a" : 0},
			],
		"hint" : "Try to give emergency workers as much room as possible to work safely.",
		"result" : "According to MN's Move Over Law, if you approach a stopped emergency vehicle with its lights flashing on a road with two lanes in your direction, move into the lane that is farthest from the stopped emergency vehicle if possible. If this is impossible (perhaps there aren't two or more lanes in your direction), reduce your speed and proceed with caution."
		},
		q17 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "At the end of most entrance ramps on a freeway, you will find _________ that allows you to increase your speed.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "an access ramp", "a" : 0},
			{"q" : "a slow lane", "a" : 0},
			{"q" : "an acceleration lane", "a" : 1},
			{"q" : "a deceleration lane", "a" : 0},
			],
		"hint" : "A lane designed for high speed.",
		"result" : "At the end of most entrance ramps on freeways, you will find an acceleration lane that lets you increase your speed to the speed of highway traffic before you merge."
		},
		q18 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "When you see a reflective triangular sign on the rear of a vehicle, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "adjust your speed or prepare to change lanes.", "a" : 1},
			{"q" : "come to a complete stop.", "a" : 0},
			{"q" : "increase your speed and pass the vehicle.", "a" : 0},
			{"q" : "do any of the above.", "a" : 0},
			],
		"hint" : "Slow down.",
		"result" : "A reflective triangular emblem on the rear of a vehicle identifies it as a slow-moving vehicle, which Minnesota defines as a vehicle that cannot exceed 30 mph. (Such vehicles include horse-drawn vehicles and certain farm equipment.) When you approach one of these vehicles, slow down or prepare to change lanes."
		},
		q19 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Anyone who flees a police officer using a motor vehicle may be sentenced to imprisonment for not more than",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "four years and one day.", "a" : 0},
			{"q" : "three years and one day.", "a" : 1},
			{"q" : "two years and one day.", "a" : 0},
			{"q" : "five years and one day.", "a" : 0},
			],
		"hint" : "You may celebrate your next three birthdays in jail.",
		"result" : "In Minnesota, using a motor vehicle to flee a police officer on official duty is a felony. The penalty is imprisonment for not more than three years and one day, a fine of not more than $5,000, or both."
		},
		q20 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On a level highway, it takes _________ longer to pass a commercial vehicle than to pass a passenger car.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "2 seconds longer", "a" : 0},
			{"q" : "1 second longer", "a" : 0},
			{"q" : "5 to 8 seconds longer", "a" : 0},
			{"q" : "3 to 5 seconds longer", "a" : 1},
			],
		"hint" : "You may have to pass a very long trailer.",
		"result" : "On a level highway, it takes three to five seconds longer to pass a commercial vehicle than to pass a car. Allow enough time to pass the commercial vehicle and return to the right lane before coming within 100 feet of approaching traffic."
		},
		q21 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Backing up is not allowed on freeways or expressways EXCEPT for",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "motorcycles.", "a" : 0},
			{"q" : "slow-moving farm equipment.", "a" : 0},
			{"q" : "emergency vehicles.", "a" : 1},
			{"q" : "large trucks.", "a" : 0},
			],
		"hint" : "In the line of duty.",
		"result" : "Backing up is not allowed on freeways or expressways, except for emergency vehicles in the course of duty. If you back up on a freeway or expressway, you risk getting hit by another vehicle or getting ticketed for careless or reckless driving."
		},
		q22 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "At night, when you are within 1,000 feet of an oncoming vehicle or following another vehicle within 200 feet, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "use high-beam headlights.", "a" : 0},
			{"q" : "not use your headlights.", "a" : 0},
			{"q" : "use emergency lights.", "a" : 0},
			{"q" : "use low-beam headlights.", "a" : 1},
			],
		"hint" : "Don't blind or distract other drivers.",
		"result" : "At night, when you are within 1,000 feet of an oncoming vehicle or following another vehicle within 200 feet, you must dim your headlights. High beams can distract the driver of the vehicle ahead of you because they can reflect off the vehicle's rear-view mirror. High beams can blind the driver of an oncoming vehicle."
		},
		q23 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you are towing a camper or trailer, you must maintain a following distance of at least _________ from other vehicles.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "600 feet", "a" : 0},
			{"q" : "100 feet", "a" : 0},
			{"q" : "200 feet", "a" : 0},
			{"q" : "500 feet", "a" : 1},
			],
		"hint" : "More than 450 feet.",
		"result" : "If you are towing a camper or trailer, you must maintain a following distance of at least 500 feet from other vehicles."
		},
		q24 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_sharp_curve_right_ahead.svg",
		"choices" : [
			{"q" : "Merging traffic ahead; stop and then proceed.", "a" : 0},
			{"q" : "Road turns ahead; slow to a safe speed.", "a" : 1},
			{"q" : "Right lane exits, buses excepted.", "a" : 0},
			{"q" : "Narrow bridge ahead; go slow.", "a" : 0},
			],
		"hint" : "Prepare to turn.",
		"result" : "This sign means that a sharp curve to the right is ahead. Slow down to a safe speed."
		},
		q25 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When making a right turn, look right and left, yield the right-of-way, and turn the steering wheel with",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the single-hand technique.", "a" : 0},
			{"q" : "the double-hand technique.", "a" : 0},
			{"q" : "the hand-over-hand technique.", "a" : 1},
			{"q" : "the hand-off-hand technique.", "a" : 0},
			],
		"hint" : "Use both hands for rotation.",
		"result" : "When making a right turn, look right and left, yield the right-of-way, and turn the steering wheel hand-over-hand to complete the turn in the lane next to the curb."
		},
		q26 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "If you see a steady yellow light as you approach an intersection, you must",
		"src" : "sign_steady_yellow_signal_warns.svg",
		"choices" : [
			{"q" : "increase your speed.", "a" : 0},
			{"q" : "continue at the same speed.", "a" : 0},
			{"q" : "stop if possible.", "a" : 1},
			{"q" : "proceed with caution.", "a" : 0},
			],
		"hint" : "Don't try to run a red light.",
		"result" : "A steady yellow signal warns you that the signal is about to change to red. If you are approaching the intersection, you must stop if you can do so safely. If not, you should proceed with caution."
		},
		q27 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "Which of the following activities is illegal for provisional license holders to perform on their cell phones while driving?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "a) Texting", "a" : 0},
			{"q" : "b) Having a conversation", "a" : 0},
			{"q" : "Both a) and b)", "a" : 1},
			{"q" : "Neither a) nor b)", "a" : 0},
			],
		"hint" : "Novice drivers must avoid distractions as much as possible.",
		"result" : "Provisional license holders may not use a cell phone while driving, not even a hands-free cell phone."
		},
		q28 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When you see a school bus stopped with its red lights flashing and its stop arm extended, you must _________ unless it is stopped on the opposite side of a separated (divided) roadway.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "change lanes and proceed with caution", "a" : 0},
			{"q" : "stop at least 20 feet from the bus", "a" : 1},
			{"q" : "stop at least 40 feet from the bus", "a" : 0},
			{"q" : "slow down and proceed with caution", "a" : 0},
			],
		"hint" : "You must not risk injuring a child.",
		"result" : "If you see a school bus is stopped with its red lights flashing and its stop arm extended, you must stop at least 20 feet from the bus. However, you are not required to stop for a school bus with its red lights flashing if it is on the opposite side of a separated (divided) roadway."
		},
		q29 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "You must maintain a safe distance between your vehicle and the vehicle in front of you by using",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the four-second rule.", "a" : 0},
			{"q" : "the three-second rule.", "a" : 1},
			{"q" : "the two-second rule.", "a" : 0},
			{"q" : "the one-second rule.", "a" : 0},
			],
		"hint" : "Count \"1,001; 1,002; 1,003.\"",
		"result" : "You must maintain a safe distance between your vehicle and the vehicle in front of you. Using the three-second rule will help you maintain a safe following distance. In the three-second rule, at least three seconds must elapse from when the vehicle in front of you passes some fixed object to when your vehicle reaches that same object."
		},
		q30 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "You are in an intersection. An emergency vehicle displaying flashing red lights and sounding a siren or bell is approaching. What should you do?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Pull over to the right in the intersection.", "a" : 0},
			{"q" : "Pull over to the left in the intersection.", "a" : 0},
			{"q" : "Increase your speed and continue on your way.", "a" : 0},
			{"q" : "Proceed through the intersection and then pull over.", "a" : 1},
			],
		"hint" : "Don't block an intersection.",
		"result" : "When an emergency vehicle (ambulance, fire truck, police car, etc.) displaying flashing red lights and sounding a siren or bell approaches your vehicle on a two-way road, you must pull to the right and stop. If you are traveling on a one-way road, you must pull to whichever side is nearest and stop. However, you must not block an intersection even if there is an emergency vehicle approaching. If you are in an intersection, proceed through it and then pull over. Remain stopped until all emergency vehicles have passed."
		},
		q31 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you are driving slower than other traffic on a highway or freeway, stay in the lane",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "nearest to the right side of the road.", "a" : 1},
			{"q" : "nearest to the center of the road.", "a" : 0},
			{"q" : "nearest to the left side of the road.", "a" : 0},
			{"q" : "farthest from the shoulder of the road.", "a" : 0},
			],
		"hint" : "The left lane is used for passing.",
		"result" : "Maintain the same approximate speed as surrounding vehicles when possible, but don't exceed the posted speed limits. If you are driving slower than other traffic, stay in the lane nearest to the right side of the road."
		},
		q32 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When two vehicles reach an intersection at the same time and there is no traffic light or signal there,",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the heavier vehicle has the right-of-way.", "a" : 0},
			{"q" : "the vehicle on the right must yield to the vehicle on the left.", "a" : 0},
			{"q" : "the vehicle that signals first has the right-of-way.", "a" : 0},
			{"q" : "the vehicle on the left must yield to the vehicle on the right.", "a" : 1},
			],
		"hint" : "Yield to your right.",
		"result" : "When two vehicles reach an uncontrolled intersection (i.e., one without signs or signals) at about the same time, the vehicle on the left must yield to the vehicle on the right."
		},
		q33 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Minnesota's basic speed law requires you to drive _________ under existing conditions.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "at a speed faster than is reasonable", "a" : 0},
			{"q" : "at a speed of 70 mph", "a" : 0},
			{"q" : "at a speed no faster than is reasonable", "a" : 1},
			{"q" : "at a speed greater than the posted speed limit", "a" : 0},
			],
		"hint" : "You can be ticketed even if you aren't exceeding the posted speed limit.",
		"result" : "Minnesota's basic speed law requires you to drive at a speed no faster than is reasonable under current conditions. These include weather, traffic, and road conditions. (A number of other states have similar laws.) You can be ticketed for driving too fast for current conditions even if you aren't exceeding the posted speed limit."
		},
		q34 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_slippery_when_wet.svg",
		"choices" : [
			{"q" : "The road is slippery; go slow.", "a" : 1},
			{"q" : "There is a gravel road with sharp curves ahead; proceed with caution.", "a" : 0},
			{"q" : "There is a winding road ahead; follow the signs.", "a" : 0},
			{"q" : "There is a sharp curve near a hill; go slow.", "a" : 0},
			],
		"hint" : "The car on the sign appears to be skidding.",
		"result" : "This sign means that the road is slippery when wet. In wet weather, slow down, increase your following distance, and avoid sudden maneuvers or hard braking. These signs are often posted at bridges and overpasses."
		},
		q35 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_bridge_ahead_narrow.svg",
		"choices" : [
			{"q" : "A snowplow ahead", "a" : 0},
			{"q" : "A divider ahead", "a" : 0},
			{"q" : "A narrow bridge ahead", "a" : 1},
			{"q" : "A construction zone ahead", "a" : 0},
			],
		"hint" : "The figure shows the width of the roadway.",
		"result" : "This sign indicates that the roadway on the bridge ahead is narrow. Slow down and proceed with caution."
		},
		q36 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "An __________ is the connection of a freeway to a road or another freeway through a series of ramps.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "interchange", "a" : 1},
			{"q" : "exit ramp", "a" : 0},
			{"q" : "entrance ramp", "a" : 0},
			{"q" : "acceleration lane", "a" : 0},
			],
		"hint" : "Cloverleaf, diamond, and folded diamond are examples.",
		"result" : "An interchange is a road junction where two or more roads cross over one another (i.e., at different levels) so as not to impede one another's traffic flow. Instead, the roads are connected through a series of connecting ramps. These ramps allow you to leave one road and enter another one safely, without disrupting the flow of traffic. There are diamond, cloverleaf, and folded diamond interchanges, among others."
		},
		q37 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If a blind pedestrian is waiting at a crosswalk with a white cane or a guide dog,",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "use your horn to alert them to your presence.", "a" : 0},
			{"q" : "reduce your speed and proceed slowly.", "a" : 0},
			{"q" : "increase your speed and move quickly.", "a" : 0},
			{"q" : "do not use your horn or rev your engine.", "a" : 1},
			],
		"hint" : "Don't startle either one.",
		"result" : "You must yield the right-of-way to a blind pedestrian. Don't use your horn or rev your engine because it might startle the pedestrian or guide dog."
		},
		q38 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When another driver is trying to pass you, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "stay in your lane and increase your speed.", "a" : 0},
			{"q" : "stay in your own lane and not increase your speed.", "a" : 1},
			{"q" : "move into the adjacent lane and increase your speed.", "a" : 0},
			{"q" : "move into the adjacent lane and reduce your speed.", "a" : 0},
			],
		"hint" : "Let the other driver pass you safely.",
		"result" : "Look behind you to determine whether other drivers are preparing to pass you. When another driver is trying to pass you, stay in your own lane and do not increase your speed."
		},
		q39 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "You are more likely to survive a car crash if you use _________ together.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the lap belt and a helmet", "a" : 0},
			{"q" : "the lap belt and shoulder belt", "a" : 1},
			{"q" : "the shoulder belt and emergency lights", "a" : 0},
			{"q" : "none of the above", "a" : 0},
			],
		"hint" : "Use your safety belts.",
		"result" : "You are more likely to survive a car crash if you use the lap and shoulder belts together. The lap belt should be adjusted to fit snugly across your hipbones or upper thighs. It should never be positioned across the abdomen or the soft part of your stomach. The shoulder belt should be fitted snugly across your chest and the middle of your shoulder."
		},
		q40 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Partial hydroplaning of a typical passenger car can start at speeds as low as",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "55 mph.", "a" : 0},
			{"q" : "45 mph.", "a" : 0},
			{"q" : "35 mph.", "a" : 1},
			{"q" : "65 mph.", "a" : 0},
			],
		"hint" : "The lowest of all listed speeds.",
		"result" : "Hydroplaning occurs when there is standing water on a roadway. At speeds up to 30 mph, most tires will channel water away like the way a windshield wiper cleans the windshield. As your speed increases, however, the tires will not be able to channel the water as well. Your tires may start to lose contact with the road and ride over the water like a set of water skis. In a typical passenger car, partial hydroplaning can start at speeds as low as 35 mph."
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
