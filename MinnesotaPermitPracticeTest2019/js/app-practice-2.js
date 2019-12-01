const AppPracticeTwo = (function() {
	let q1 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Work zone or construction zone signs usually have",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "white letters on a yellow background.", "a" : 0},
			{"q" : "white letters on an orange background.", "a" : 0},
			{"q" : "black letters on a yellow background.", "a" : 0},
			{"q" : "black letters on an orange background.", "a" : 1},
			],
		"hint" : "Permanent warning signs usually have a yellow or yellow-green background.",
		"result" : "Construction, maintenance, or emergency operations signs typically have black letters or symbols on an orange background. They warn drivers that people are working on or near the roadway."
		},
		q2 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "When should you switch on your high-beam headlights?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Where there may be people alongside the road", "a" : 0},
			{"q" : "When you drive on unfamiliar roads", "a" : 0},
			{"q" : "When you drive in construction areas", "a" : 0},
			{"q" : "In all of the above situations", "a" : 1},
			],
		"hint" : "Whenever you need to see far.",
		"result" : "Use your high beams on unfamiliar roads, in construction areas, or where there may be people alongside the road and where there are no oncoming vehicles. High beams let you see twice as far as low beams. However, use low beams when driving in fog, rain, or snow because they can reflect the high beams back and cause glare."
		},
		q3 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "A double solid yellow line in the center of the road means that",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "passing is allowed in either direction.", "a" : 0},
			{"q" : "traffic can go in only one direction.", "a" : 0},
			{"q" : "all traffic must stop at the line.", "a" : 0},
			{"q" : "passing is not allowed in either direction.", "a" : 1},
			],
		"hint" : "You may not cross a solid line to pass.",
		"result" : "A double solid yellow line marks the center of a road and separates opposing lanes of traffic. Passing is not allowed in either direction. Drivers may not cross a double solid yellow line unless they are making a left turn onto or off the road."
		},
		q4 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When approaching pedestrians who are walking on or crossing the roadway, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "use your emergency lights.", "a" : 0},
			{"q" : "blow your horn, slow down, and stop.", "a" : 0},
			{"q" : "accelerate and move quickly.", "a" : 0},
			{"q" : "slow down, yield, and be prepared to stop.", "a" : 1},
			],
		"hint" : "Pedestrians have the right-of-way. Be prepared to stop.",
		"result" : "Pedestrians have the right-of-way. When approaching pedestrians who are walking on or crossing the roadway, you must slow down, yield, and be prepared to stop."
		},
		q5 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If a pedestrian is in a marked or unmarked crosswalk, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "stop and wait until the pedestrian has passed.", "a" : 1},
			{"q" : "increase your speed and cross the crosswalk quickly.", "a" : 0},
			{"q" : "reduce your speed and proceed with caution.", "a" : 0},
			{"q" : "not stop.", "a" : 0},
			],
		"hint" : "Yield the right-of-way to pedestrians.",
		"result" : "Yield the right-of-way to pedestrians crossing at intersections and crosswalks. When a pedestrian is in a marked or unmarked crosswalk, you must stop and wait until the pedestrian has passed your lane."
		},
		q6 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Proactively looking ahead, to the sides, and behind your vehicle to anticipate problems ahead is part of",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "aggressive driving.", "a" : 0},
			{"q" : "disciplined driving.", "a" : 0},
			{"q" : "defensive driving.", "a" : 1},
			{"q" : "distracted driving.", "a" : 0},
			],
		"hint" : "Defend yourself from bad drivers and other hazards.",
		"result" : "The National Safety Council defines defensive driving as \"driving to save lives, time, and money, in spite of the conditions around you and the actions of others.\" Defensive driving is about anticipating potentially dangerous situations in advance, including driving conditions and mistakes made by others, and planning how to deal with those situations. To be a defensive driver, you must know what is happening around your vehicle. You must look ahead, to the sides, and behind the vehicle. You owe it to yourself to become a defensive driver."
		},
		q7 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "Diagonal yellow stripes painted on some streets and highways indicate",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "a) the road is narrowing.", "a" : 0},
			{"q" : "b) there is an obstruction on the roadway.", "a" : 0},
			{"q" : "neither a) nor b).", "a" : 0},
			{"q" : "either a) or b).", "a" : 1},
			],
		"hint" : "Diagonal yellow stripes can indicate various hazards.",
		"result" : "Diagonal yellow striping on streets and highways indicates a narrow road or an obstruction ahead."
		},
		q8 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "When you find both a solid and a dashed (broken) yellow line between opposing lanes of traffic, you must NOT pass",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "if the solid yellow line is not on your side.", "a" : 0},
			{"q" : "if the dashed yellow line is on your side.", "a" : 0},
			{"q" : "if the solid yellow line is on your side.", "a" : 1},
			{"q" : "at all.", "a" : 0},
			],
		"hint" : "A dashed (broken) line allows passing.",
		"result" : "Where there are both a solid yellow line and a dashed (broken) yellow line separating opposing lanes, you must not pass if the solid yellow line is on your side."
		},
		q9 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "At railroad crossings that are only marked with a stop sign, you should stop and then proceed only when",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "you determine that there is enough room for your vehicle on the opposite side.", "a" : 0},
			{"q" : "you determine that no train is approaching.", "a" : 0},
			{"q" : "you determine that no pedestrians are approaching.", "a" : 0},
			{"q" : "all of the above are true.", "a" : 1},
			],
		"hint" : "At such crossings, you must watch for trains and other factors.",
		"result" : "At crossings marked with automatic flasher units or automatic crossing gates, you must stop if the lights are flashing or the gates are lowered, and you must remain stopped until the lights stop flashing and the gates are raised. At crossings that are only marked with a stop sign, you must stop and then proceed only when you determine that no train is approaching. Make sure you yield to pedestrians at the crossing and that there is enough room for your vehicle on the opposite side of the crossing."
		},
		q10 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Large flashing or sequencing arrow panels may be used in work zones in both day and night to",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "stop speeders.", "a" : 0},
			{"q" : "guide drivers into certain parking areas.", "a" : 0},
			{"q" : "divert drivers into work zones.", "a" : 0},
			{"q" : "guide drivers into certain traffic lanes.", "a" : 1},
			],
		"hint" : "Drivers may have to change lanes.",
		"result" : "Large flashing or sequencing arrow panels may be used in work zones in both day and night to guide drivers into certain traffic lanes. These panels are placed on the roadway or mounted on vehicles to advise approaching motorists of lane closures. Drivers may have to merge into other lanes."
		},
		q11 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you are driving on a two-lane road, it is safest to drive your vehicle _______ of your lane.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "in the center", "a" : 1},
			{"q" : "in any part", "a" : 0},
			{"q" : "on the left side", "a" : 0},
			{"q" : "on the right side", "a" : 0},
			],
		"hint" : "Avoid hazards on both sides.",
		"result" : "It is safest to drive in the center of your lane. Keep as much space as you can between your vehicle and oncoming vehicles."
		},
		q12 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "A flashing yellow arrow means",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "you may proceed with caution in the direction of the arrow.", "a" : 1},
			{"q" : "you must not proceed in the direction of the arrow.", "a" : 0},
			{"q" : "you may go straight.", "a" : 0},
			{"q" : "you must come to a complete stop in the direction of the arrow.", "a" : 0},
			],
		"hint" : "A flashing yellow light usually means use caution.",
		"result" : "A flashing yellow arrow means you may proceed with caution in the direction of the arrow. Before doing so, however, you must yield the right-of-way to vehicles and pedestrians already in the intersection. If you are turning left, you must first yield the right-of-way to oncoming vehicles."
		},
		q13 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "You may pass another vehicle if there is a _________ on your side.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "dashed (broken) white line", "a" : 1},
			{"q" : "solid white line", "a" : 0},
			{"q" : "solid yellow line", "a" : 0},
			{"q" : "double solid yellow line", "a" : 0},
			],
		"hint" : "You may not cross a solid line to pass.",
		"result" : "You may pass another vehicle if there is a dashed (broken) line on your side."
		},
		q14 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "To guard against glare from the headlights of a vehicle behind you, use __________ and adjust it before you drive.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "a day/night mirror", "a" : 1},
			{"q" : "a lighting filter", "a" : 0},
			{"q" : "a reflective mirror", "a" : 0},
			{"q" : "a dark-colored mirror", "a" : 0},
			],
		"hint" : "Anti-glare mirror.",
		"result" : "To guard against glare from the headlights of a vehicle behind you, use a day/night mirror. Adjust it before you drive."
		},
		q15 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "At night, drivers should use high-beam headlights",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "in the city.", "a" : 0},
			{"q" : "on an expressway.", "a" : 0},
			{"q" : "when they're under the influence of alcohol.", "a" : 0},
			{"q" : "in open country without other vehicles nearby.", "a" : 1},
			],
		"hint" : "Don't blind or distract other drivers.",
		"result" : "Use high beams when driving in open country without other vehicles nearby. However, even high beams don't let you see as far at night as you can in the daytime. Therefore, you should still drive slower at night."
		},
		q16 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On multilane roads, you should avoid driving alongside other vehicles because",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "someone may crowd your lane.", "a" : 1},
			{"q" : "someone may hit you from behind.", "a" : 0},
			{"q" : "you may not see the vehicles following you.", "a" : 0},
			{"q" : "you may not see the vehicles in front of you.", "a" : 0},
			],
		"hint" : "Someone may pull into you.",
		"result" : "On multilane roads, avoid driving next to other vehicles. Someone may crowd your lane or try to change lanes and pull into you."
		},
		q17 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you double your speed on a highway, your braking distance increases by",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "three times.", "a" : 0},
			{"q" : "five times.", "a" : 0},
			{"q" : "four times.", "a" : 1},
			{"q" : "two times.", "a" : 0},
			],
		"hint" : "Two times two",
		"result" : "If you double your speed, your braking distance will be four times as long."
		},
		q18 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_terminating_road_some_T_intersections.svg",
		"choices" : [
			{"q" : "A divided highway ends ahead.", "a" : 0},
			{"q" : "You must yield the right-of-way or stop before turning right or left.", "a" : 1},
			{"q" : "A divided highway starts ahead.", "a" : 0},
			{"q" : "The roadway is closed on both sides.", "a" : 0},
			],
		"hint" : "Come to a complete stop before turning.",
		"result" : "You may see this sign at the terminating road of some T-intersections. It means that you must yield the right-of-way or stop before turning right or left."
		},
		q19 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Before changing lanes, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "check your rear-view and side mirrors.", "a" : 0},
			{"q" : "check your mirrors and look over your shoulder toward the rear.", "a" : 1},
			{"q" : "check behind you and look in your side mirrors.", "a" : 0},
			{"q" : "check your speed and look over your shoulder toward the rear.", "a" : 0},
			],
		"hint" : "Always check your blind spots before you change lanes.",
		"result" : "Before changing lanes, you should check your mirrors and then check your blind spot by looking over your shoulder toward the rear."
		},
		q20 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this device mean?",
		"src" : "sign_railroad_control_systems_warn.svg",
		"choices" : [
			{"q" : "A work zone ahead", "a" : 0},
			{"q" : "A railroad crossing ahead", "a" : 1},
			{"q" : "A tunnel ahead", "a" : 0},
			{"q" : "A crossroad ahead", "a" : 0},
			],
		"hint" : "Heed the words on this sign.",
		"result" : "Active railroad control systems warn drivers of the approach of a train. They employ some combination of signs, signals, lift gates, and bells or other audible warnings. Stop when the bell is ringing or the lights are flashing. Never attempt to go past until the train has passed and the warnings have ceased."
		},
		q21 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this picture illustrate?",
		"src" : "sign_dashed_broken_line_next.svg",
		"choices" : [
			{"q" : "A dashed (broken) white line that allows passing", "a" : 1},
			{"q" : "A dashed (broken) white line that prohibits passing", "a" : 0},
			{"q" : "A car making a U-turn", "a" : 0},
			{"q" : "An accident situation due to reduced following distance", "a" : 0},
			],
		"hint" : "Passing is permitted.",
		"result" : "When there is a dashed (broken) line next to your lane, you may cross it to pass another vehicle if it is safe to do so."
		},
		q22 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you want to change several lanes on a multilane highway,",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "change them at a higher speed.", "a" : 0},
			{"q" : "change them at a lower speed.", "a" : 0},
			{"q" : "change them two at a time.", "a" : 0},
			{"q" : "change them one at a time.", "a" : 1},
			],
		"hint" : "Take it one step at a time.",
		"result" : "If you want to change several lanes, change them one at a time to reduce the risk of an accident."
		},
		q23 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Rumble strips use vibration and sound to alert drowsy or inattentive drivers that they are",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "approaching a freeway.", "a" : 0},
			{"q" : "approaching a school zone.", "a" : 0},
			{"q" : "approaching a parking zone or playground.", "a" : 0},
			{"q" : "approaching a stop sign or signal.", "a" : 1},
			],
		"hint" : "Prepare to stop.",
		"result" : "Rumble strips are a series of indented elements installed on a paved roadway shoulder near the travel lane, on a two-lane roadway near the center line, or in a lane of traffic approaching a stop sign or signal. Rumble strips are intended to alert drowsy or inattentive drivers through vibration and sound that their vehicles have left the travel lane or are approaching a stop sign or signal."
		},
		q24 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On a divided highway, you must _________ unless directed to do otherwise by a sign, traffic control device, or police officer.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "not keep right of the median", "a" : 0},
			{"q" : "keep to the center of the median", "a" : 0},
			{"q" : "keep right of the median", "a" : 1},
			{"q" : "keep left of the median", "a" : 0},
			],
		"hint" : "Keep right.",
		"result" : "On a divided highway, keep right of the median unless directed to do otherwise by a sign, traffic control device, or police officer."
		},
		q25 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When you see a triangular road sign, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "reduce your speed and yield.", "a" : 1},
			{"q" : "come to a complete stop.", "a" : 0},
			{"q" : "increase your speed.", "a" : 0},
			{"q" : "make a right turn.", "a" : 0},
			],
		"hint" : "Slow down.",
		"result" : "A yield sign is triangular in shape. It indicates that you must slow down and yield to other traffic."
		},
		q26 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When entering a main road from a private road, a driveway, or a parking lot, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "come to a complete stop and then yield the right-of-way to pedestrians, bicyclists, and vehicles on the main road.", "a" : 1},
			{"q" : "come to a complete stop and then make a left turn onto the main road.", "a" : 0},
			{"q" : "slow down and then yield the right-of-way to pedestrians, bicyclists, and vehicles on the main road.", "a" : 0},
			{"q" : "come to a complete stop and then make a right turn onto the main road.", "a" : 0},
			],
		"hint" : "Stop and then yield.",
		"result" : "If you are entering a main road from a private road, a driveway, or a parking lot, you must stop and then yield to pedestrians and other vehicles before you may proceed."
		},
		q27 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On interstate highways, slower vehicles should travel _________ except when passing.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "on the shoulder", "a" : 0},
			{"q" : "in the rightmost lane", "a" : 1},
			{"q" : "in the leftmost lane", "a" : 0},
			{"q" : "in the middle lanes", "a" : 0},
			],
		"hint" : "Faster vehicles should use the left lane.",
		"result" : "On interstate highways, slower vehicles should travel in the rightmost lane except when passing."
		},
		q28 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Which of these statements is FALSE?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Some towns and cities do not allow U-turns.", "a" : 0},
			{"q" : "Do not make a U-turn on a curve or near the crest of a hill.", "a" : 0},
			{"q" : "You should only make a U-turn when it is safe.", "a" : 0},
			{"q" : "Make a U-turn at a location that is marked with a \"No U-Turn\" sign.", "a" : 1},
			],
		"hint" : "Look for a FALSE statement!",
		"result" : "You needed to find a FALSE statement. Only make a U-turn where it is safe. Don't make a U-turn on a curve or near the crest of a hill because your vehicle may not be seen by other drivers. Some towns and cities do not allow U-turns. Never make a U-turn at a location that is marked with a \"No U-Turn\" sign or at an intersection controlled by a traffic signal or police officer."
		},
		q29 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "If you see this sign, you should",
		"src" : "sign_slippery_when_wet.svg",
		"choices" : [
			{"q" : "reduce your speed.", "a" : 1},
			{"q" : "maneuver around an upcoming obstacle.", "a" : 0},
			{"q" : "make a turn.", "a" : 0},
			{"q" : "increase your speed.", "a" : 0},
			],
		"hint" : "The car on the sign appears to be skidding.",
		"result" : "This sign means that the road is slippery when wet. In wet weather, slow down, increase your following distance, and avoid sudden maneuvers or hard braking. These signs are often posted at bridges and overpasses."
		},
		q30 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If there are no reduced speed limits posted at work zones, drivers should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "drive at 45 mph.", "a" : 0},
			{"q" : "drive at less than 50 mph.", "a" : 0},
			{"q" : "drive at more than 70 mph.", "a" : 0},
			{"q" : "obey the usual legal speed limit.", "a" : 1},
			],
		"hint" : "Follow the usual rules.",
		"result" : "In many work zones, speed limits may be reduced and lane usage may be restricted for safety purposes. If there are no reduced speed limits posted, obey the usual legal speed limit."
		},
		q31 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "How do you make a left turn onto a divided highway at a reduced conflict intersection?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "You can't. Proceed to the next intersection and then make a U-turn.", "a" : 0},
			{"q" : "Turn right and then make a U-turn.", "a" : 1},
			{"q" : "Enter the intersection and then turn left.", "a" : 0},
			{"q" : "Go straight and then make a U-turn.", "a" : 0},
			],
		"hint" : "You don't make a left turn against oncoming traffic here.",
		"result" : "Reduced conflict intersections are intended to reduce the number of collisions on four-lane divided highways. In a reduced conflict intersection, drivers always make a right turn, followed by a U-turn. Motorists approaching the divided highway from a side street are not allowed to make left turns or cross traffic; instead, they are required to turn right onto the highway and then make a U-turn at a designated median opening."
		},
		q32 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Blind pedestrians may carry _________ canes or use guide dogs.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "red", "a" : 0},
			{"q" : "white", "a" : 1},
			{"q" : "green", "a" : 0},
			{"q" : "black", "a" : 0},
			],
		"hint" : "Visible in the dark.",
		"result" : "Blind pedestrians may carry white canes or use guide dogs."
		},
		q33 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "At the end of most entrance ramps on a freeway, you will find _________ that allows you to increase your speed.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "an access ramp", "a" : 0},
			{"q" : "a slow lane", "a" : 0},
			{"q" : "a deceleration lane", "a" : 0},
			{"q" : "an acceleration lane", "a" : 0},
			],
		"hint" : "A lane designed for high speed.",
		"result" : "At the end of most entrance ramps on freeways, you will find an acceleration lane that lets you increase your speed to the speed of highway traffic before you merge."
		},
		q34 = {
		"type" : "text",
		"orderedChoice" : 1,
		"title" : "If you see an oncoming vehicle in your lane, what should you do?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Flash your headlights.", "a" : 0},
			{"q" : "Veer as far to the right as you safely can.", "a" : 0},
			{"q" : "Slow down and sound your horn.", "a" : 0},
			{"q" : "Do all of the above.", "a" : 1},
			],
		"hint" : "Try all reasonable options to avoid a head-on collision.",
		"result" : "If you see a vehicle coming toward you in your lane, brake hard, sound your horn, flash your headlights, and veer as far to the right as you safely can. Don't try to veer to your left. The other driver may suddenly realize his or her mistake and return to his or her proper lane."
		},
		q35 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Signs with black letters on an orange background provide",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "specific information and directions to drivers in work zones.", "a" : 1},
			{"q" : "traffic laws and regulations.", "a" : 0},
			{"q" : "directions, routes, and distances.", "a" : 0},
			{"q" : "special conditions or hazards ahead.", "a" : 0},
			],
		"hint" : "These signs are usually temporary.",
		"result" : "Signs with black letters and symbols on an orange background are temporary signs that provide specific information and directions to drivers in work zones."
		},
		q36 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When you drive in city traffic, you should try to look at least",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "one block ahead.", "a" : 1},
			{"q" : "four blocks ahead.", "a" : 0},
			{"q" : "two blocks ahead.", "a" : 0},
			{"q" : "three blocks ahead.", "a" : 0},
			],
		"hint" : "At least 10 seconds ahead.",
		"result" : "When you drive in city traffic, you should try to look at least one block ahead. In the city, 10 seconds is about one block."
		},
		q37 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When going down a steep hill, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "increase your speed.", "a" : 0},
			{"q" : "shift into a lower gear.", "a" : 1},
			{"q" : "turn on your emergency hazard flashers.", "a" : 0},
			{"q" : "shift into a higher gear.", "a" : 0},
			],
		"hint" : "On steep descents, use gears more than brakes.",
		"result" : "If you keep applying the brakes to control your speed on a steep descent, the brakes may fade (lose their effectiveness). Instead, release the gas pedal and shift into a lower gear (even with an automatic transmission). This will generate a braking effect to slow the vehicle, known as engine braking. The lower the gear, the greater the engine braking effect. Apply the brakes only when engine braking is insufficient or you want to stop."
		},
		q38 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you are being tailgated, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "move into the left lane and reduce your speed.", "a" : 0},
			{"q" : "move into the left lane and increase your speed.", "a" : 0},
			{"q" : "move into the right lane and reduce your speed.", "a" : 1},
			{"q" : "move into the right lane and stop.", "a" : 0},
			],
		"hint" : "Let the tailgater pass you.",
		"result" : "If you are being tailgated, move into the right lane and reduce your speed. Encourage the tailgater to pass you. You will be safer with the tailgater in front of you than right behind you."
		},
		q39 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you are changing lanes, preparing to pass another vehicle, or entering traffic, signal and check for passing traffic. First, use your mirrors. Then",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "check your vehicle's blind spots.", "a" : 1},
			{"q" : "check the rear of your vehicle.", "a" : 0},
			{"q" : "check the front of your vehicle.", "a" : 0},
			{"q" : "check for oncoming traffic.", "a" : 0},
			],
		"hint" : "Check invisible areas.",
		"result" : "If you are changing lanes, preparing to pass another vehicle, or entering traffic, signal and check for passing traffic by using your mirrors. Once the mirrors reveal safe conditions for the lane change, check your vehicle's blind spots by glancing over your shoulder to the rear in the direction of the lane change."
		},
		q40 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "This sign indicates that",
		"src" : "sign_must_go_to_either_side.svg",
		"choices" : [
			{"q" : "you must go to either side.", "a" : 1},
			{"q" : "you must merge right or left.", "a" : 0},
			{"q" : "a two-lane highway starts at the sign.", "a" : 0},
			{"q" : "two-way traffic starts at the sign.", "a" : 0},
			],
		"hint" : "The road is divided.",
		"result" : "This sign marks a traffic island or obstruction. You must go to either side of it."
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
