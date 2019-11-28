const AppPracticeThree = (function() {
	let q1 = {
		"type" : "text",
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
		"title" : "Which of the following statements about the right-of-way is FALSE?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Drivers must yield to pedestrians at unmarked intersections.", "a" : 0},
			{"q" : "Vehicles turning left must yield to oncoming traffic.", "a" : 0},
			{"q" : "At an uncontrolled T-intersection, the vehicle on the through street must yield to the vehicle on the terminating street.", "a" : 1},
			{"q" : "Vehicles entering or crossing a roadway from a private driveway must yield to all oncoming vehicles.", "a" : 0},
			],
		"hint" : "Look for a FALSE statement!",
		"result" : "This statement is FALSE: \"At an uncontrolled T-intersection, the vehicle on the through street must yield to the vehicle on the terminating street.\" The reverse is true: At an uncontrolled T-intersection, the vehicle on the terminating street must yield to vehicles on the through street."
		},
		q14 = {
		"type" : "text",
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
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
		"orderedChoice" : 0,
		"title" : "If a railroad grade crossing has no warning devices or only a crossbuck sign, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "slow down and then proceed with caution.", "a" : 1},
			{"q" : "increase your speed and cross the railroad crossing.", "a" : 0},
			{"q" : "stop within 100 feet of the railroad crossing.", "a" : 0},
			{"q" : "shift gears and proceed through the railroad crossing.", "a" : 0},
			],
		"hint" : "Look and listen for a train before proceeding.",
		"result" : "If a railroad grade crossing has no warning devices or only a crossbuck sign, slow down and look and listen for a train before proceeding. You must yield the right-of-way to any approaching train."
		},
		q17 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign mean?",
		"src" : "sign_steep_descent_ahead.svg",
		"choices" : [
			{"q" : "Slippery when wet; passing a truck is prohibited.", "a" : 0},
			{"q" : "A hill ahead; increase your speed.", "a" : 0},
			{"q" : "A low area ahead; trucks are not allowed.", "a" : 0},
			{"q" : "A steep downgrade ahead; check your brakes.", "a" : 1},
			],
		"hint" : "Which way is the truck on the sign going?",
		"result" : "This sign warns of a steep descent ahead. Check your brakes. Reduce your speed and watch for descending vehicles. Use a low gear (even with an automatic transmission) to reduce the need for braking. Using your brakes too heavily for too long may lead to brake fade (loss of braking effectiveness)."
		},
		q18 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When there is water on the roadway, you must reduce your speed to prevent",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "tailgating.", "a" : 0},
			{"q" : "hydroplaning.", "a" : 1},
			{"q" : "wear and tear.", "a" : 0},
			{"q" : "traction with the surface.", "a" : 0},
			],
		"hint" : "Avoid a condition related to water.",
		"result" : "On a wet road, at speeds of up to 35 mph, modern tires will usually channel water away to maintain contact with the road. However, in deep water at higher speeds, the channeling action of the tires becomes less effective and the tires start to ride on a layer of water like water skis. This is called \"hydroplaning.\" It may result in a loss of braking and steering control. To prevent hydroplaning, slow down."
		},
		q19 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "At an intersection where there are no stop signs or traffic signals, you must yield to",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "vehicles coming from the left.", "a" : 0},
			{"q" : "vehicles coming from the right.", "a" : 1},
			{"q" : "vehicles approaching from behind.", "a" : 0},
			{"q" : "vehicles proceeding straight ahead.", "a" : 0},
			],
		"hint" : "Yield to your right.",
		"result" : "At an uncontrolled intersection (one without signs or signals), the vehicle on the left must yield to the vehicle on the right."
		},
		q20 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If your engine dies as you pull around a corner, you should",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "try to restart the engine on the road.", "a" : 0},
			{"q" : "pull over to the right side of the road and stop.", "a" : 1},
			{"q" : "ease off the gas pedal.", "a" : 0},
			{"q" : "hold your steering wheel tightly and keep your vehicle straight.", "a" : 0},
			],
		"hint" : "The shoulder is for emergencies like this.",
		"result" : "If your engine dies as you pull around a corner, hold the steering wheel with both hands and steer to the right side of the road. (If your car has power steering, loss of engine power will cause loss of power assist, so you will need to exert more force on the steering wheel.) Brake to a stop. (If your car has power brakes, loss of engine power will cause loss of power assist, so you will need to press the brake pedal extra hard.) Shift into park (for an automatic transmission) or neutral (for a manual transmission) and try to restart the engine."
		},
		q21 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "This sign warns drivers that the road is a",
		"src" : "sign_winding_road.svg",
		"choices" : [
			{"q" : "downhill road.", "a" : 0},
			{"q" : "two-way road.", "a" : 0},
			{"q" : "slippery road.", "a" : 0},
			{"q" : "winding road.", "a" : 1},
			],
		"hint" : "The arrow shows the changing direction of travel.",
		"result" : "This warning sign warns drivers of a winding road. Slow down and use caution."
		},
		q22 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When you park and leave your vehicle in the street, you should NOT",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "stop the engine.", "a" : 0},
			{"q" : "set the parking brake.", "a" : 0},
			{"q" : "lock the ignition.", "a" : 0},
			{"q" : "lower the windows.", "a" : 1},
			],
		"hint" : "Take every precaution to discourage thieves.",
		"result" : "When you park and leave your vehicle in the street, you must stop the engine, lock the ignition, remove the key, and set the emergency or parking brake. Also raise the windows shut and lock the doors."
		},
		q23 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When is it legal to use the shoulder of the road to pass the vehicle ahead of you?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "If the vehicle is stopped for an emergency", "a" : 0},
			{"q" : "Never", "a" : 1},
			{"q" : "If the vehicle is making a left turn", "a" : 0},
			{"q" : "If the vehicle is making a right turn", "a" : 0},
			],
		"hint" : "The shoulder is for emergencies only.",
		"result" : "Driving on the shoulder to pass another vehicle is prohibited."
		},
		q24 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "You may make a left turn at a red light if you are turning from",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the right lane of a one-way street onto another one-way street.", "a" : 0},
			{"q" : "the right lane of a one-way street onto a two-way street.", "a" : 0},
			{"q" : "the left lane of a one-way street onto another one-way street.", "a" : 1},
			{"q" : "the left lane of a one-way street onto a two-way street.", "a" : 0},
			],
		"hint" : "In Minnesota, there is only one situation in which you may turn left on a red light.",
		"result" : "In Minnesota, you may make a left turn at a red light if you are turning from the left lane of a one-way street onto another one-way street. You must still come to a complete stop and yield to traffic and pedestrians before turning. Note: The laws on this are different in some other states. A few states (e.g., Michigan) also allow you to turn left from a two-way street onto a one-way street. Still other states (e.g., South Dakota) prohibit left turns on red altogether. When traveling out of Minnesota, always check the local traffic laws."
		},
		q25 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Before passing another vehicle,",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "look ahead for road conditions and traffic.", "a" : 1},
			{"q" : "drive off the paved or main portion of the road.", "a" : 0},
			{"q" : "pass on the left if the driver is signaling a left turn.", "a" : 0},
			{"q" : "do all of the above.", "a" : 0},
			],
		"hint" : "Check road conditions first.",
		"result" : "Before you pass, look ahead for road conditions and traffic that may cause other vehicles to move into your lane. Never drive off the paved portion of the road. Usually, you should pass a vehicle on the left. However, you may pass on the right if the driver is signaling a left turn."
		},
		q26 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "__________ indicate parking spaces for persons with disabilities.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Blue pavement markings", "a" : 1},
			{"q" : "Red pavement markings", "a" : 0},
			{"q" : "White pavement markings", "a" : 0},
			{"q" : "Yellow pavement markings", "a" : 0},
			],
		"hint" : "The handicapped parking symbol is also in a shade of this color.",
		"result" : "Blue pavement markings indicate parking spaces for persons with disabilities."
		},
		q27 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "_________ are areas around trucks or other large vehicles in which other vehicles may disappear into blind spots.",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Slow-Zones", "a" : 0},
			{"q" : "Side-Zones", "a" : 0},
			{"q" : "Blind-Zones", "a" : 0},
			{"q" : "No-Zones", "a" : 1},
			],
		"hint" : "They greatly increase the likelihood of a crash.",
		"result" : "Don't hang out in a No-Zone! No-Zones are large areas around trucks and other large vehicles in which cars may disappear into blind spots or get so close that they restrict the truck driver's ability to stop or maneuver safely. No-Zones greatly increase the likelihood of a crash."
		},
		q28 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When entering or exiting a roundabout, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "keep left.", "a" : 0},
			{"q" : "increase your speed.", "a" : 0},
			{"q" : "change lanes.", "a" : 0},
			{"q" : "keep right.", "a" : 1},
			],
		"hint" : "Keep right of the center island.",
		"result" : "When entering a roundabout, you must keep right of the center island. Do not stop if the way is clear. Never pass another vehicle in a roundabout. Travel around the circle until you reach your desired street. Then use your right-turn signal and exit the roundabout."
		},
		q29 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "A steady red arrow means",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "you must stop, and you cannot go in the direction of the arrow.", "a" : 1},
			{"q" : "you should prepare to stop and yield the right-of-way to oncoming traffic before you turn.", "a" : 0},
			{"q" : "you can safely turn in the direction of the arrow.", "a" : 0},
			{"q" : "you must come to a full stop and then proceed when it is safe to do so.", "a" : 0},
			],
		"hint" : "No entry in the direction of the arrow.",
		"result" : "A red arrow means you must stop, and you cannot go in the direction of the arrow. You may proceed in that direction only when the red arrow goes off and a green arrow or light comes on."
		},
		q30 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Things that can distract you from the road include",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "always checking mirrors.", "a" : 0},
			{"q" : "checking blind spots.", "a" : 0},
			{"q" : "checking the traffic behind you frequently.", "a" : 0},
			{"q" : "text messaging and talking on the phone.", "a" : 1},
			],
		"hint" : "Talking on the phone can distract a driver.",
		"result" : "Anything that draws your attention away from the road can distract you. Some examples of distractions while driving include text messaging, talking on the phone, dealing with children, and lighting a cigarette."
		},
		q31 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "You are traveling on a two-lane road. If a vehicle ahead of you stops for a pedestrian, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "alert the stopped vehicle to take a detour.", "a" : 0},
			{"q" : "change lanes and pass the vehicle quickly.", "a" : 0},
			{"q" : "not pass the stopped vehicle.", "a" : 1},
			{"q" : "reduce your speed and pass the vehicle slowly.", "a" : 0},
			],
		"hint" : "Follow the other vehicle's lead.",
		"result" : "When a vehicle ahead of you stops for a pedestrian, you must not pass the stopped vehicle even if there are two lanes available. This is a frequent hazard for pedestrians."
		},
		q32 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "When turning a corner, turn the steering wheel using",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the two-hand technique.", "a" : 0},
			{"q" : "the hand-to-hand technique.", "a" : 0},
			{"q" : "the hand-over-hand technique.", "a" : 1},
			{"q" : "the single-hand technique.", "a" : 0},
			],
		"hint" : "A continuous grip on the steering wheel is required at all times.",
		"result" : "When turning a corner, turn the steering wheel using the hand-over-hand technique. Do not turn the wheel with just one hand because you might lose control. When you complete the turn, straighten out the steering wheel by hand. Letting it slip through your fingers could be dangerous."
		},
		q33 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Which of the following are signs of road rage?",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "Blowing the horn excessively", "a" : 0},
			{"q" : "Forcing a car off the road", "a" : 0},
			{"q" : "Tailgating", "a" : 0},
			{"q" : "All of the above", "a" : 1},
			],
		"hint" : "There are many manifestations of road rage.",
		"result" : "Cutting off or swerving in front of other vehicles is a sign of road rage. Sounding the horn excessively, forcing a car off the road, and tailgating are also associated with road rage."
		},
		q34 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "At an unmarked crosswalk, you must",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "increase your speed and cross before the pedestrians.", "a" : 0},
			{"q" : "signal your intention and proceed.", "a" : 0},
			{"q" : "stop and ask the pedestrians to cross quickly.", "a" : 0},
			{"q" : "yield the right-of-way to the pedestrians.", "a" : 1},
			],
		"hint" : "Give priority to the pedestrians.",
		"result" : "You must yield the right-of-way to pedestrians in a crosswalk, whether marked or unmarked."
		},
		q35 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "Tailgating is the practice of",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "following too closely.", "a" : 1},
			{"q" : "crossing a railroad crossing gate.", "a" : 0},
			{"q" : "driving in blind spots.", "a" : 0},
			{"q" : "making sharp lane changes.", "a" : 0},
			],
		"hint" : "Always maintain a safe following distance.",
		"result" : "Following too closely is also known as tailgating. Don't do it. On interstate highways, the most common type of collision is the rear-end collision, and the most frequent cause of rear-end collisions is tailgating. The vehicle ahead of the tailgater suddenly slows down and the tailgater doesn't have enough space to avoid colliding with it."
		},
		q36 = {
		"type" : "picture",
		"orderedChoice" : 0,
		"title" : "What does this sign indicate?",
		"src" : "sign_speed_45_zone_ahead.svg",
		"choices" : [
			{"q" : "Vehicles merging ahead; do not increase your speed to 45 mph.", "a" : 0},
			{"q" : "Construction ahead; reduce your speed to 45 mph.", "a" : 0},
			{"q" : "Drive at a speed of 45 mph.", "a" : 0},
			{"q" : "A speed zone is ahead; be prepared to reduce your speed to 45 mph.", "a" : 1},
			],
		"hint" : "The speed limit changes ahead.",
		"result" : "The larger sign tells you that a speed zone is ahead. The smaller sign indicates what the speed limit will be. In this case, the speed limit will decrease to 45 mph ahead. Prepare to slow down so you won't exceed that speed limit."
		},
		q37 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "A two-headed arrow with one head pointing straight ahead and the other pointing left means that you may",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "either proceed straight ahead or turn left.", "a" : 1},
			{"q" : "either proceed straight ahead or merge left.", "a" : 0},
			{"q" : "only turn right.", "a" : 0},
			{"q" : "only turn left.", "a" : 0},
			],
		"hint" : "The arrow shows the directions of traffic.",
		"result" : "A two-headed arrow with one head pointing straight ahead and the other pointing left means that you may either proceed straight ahead or turn left."
		},
		q38 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "If you must park on a roadway, park your vehicle",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "as far away from traffic as possible.", "a" : 1},
			{"q" : "as close to the center of the road as possible.", "a" : 0},
			{"q" : "as far away from the curb as possible.", "a" : 0},
			{"q" : "as far away from the yellow line as possible.", "a" : 0},
			],
		"hint" : "Park away from danger.",
		"result" : "Always park in a designated area if possible. If you must park on a roadway, park your vehicle as far away from traffic as possible. If there is a curb, park as close to it as you can."
		},
		q39 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On a highway with three or more lanes going in one direction, fast-moving vehicles should use",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the left lane.", "a" : 1},
			{"q" : "the middle lane.", "a" : 0},
			{"q" : "the right lane.", "a" : 0},
			{"q" : "the deceleration lane.", "a" : 0},
			],
		"hint" : "Slower vehicles should use the right lane.",
		"result" : "When there are three or more lanes going in one direction, the middle lanes usually offer the smoothest flow of traffic. The left lane is for drivers who want to go faster, pass, or turn left. Slower vehicles and those turning right should use the right lane."
		},
		q40 = {
		"type" : "text",
		"orderedChoice" : 0,
		"title" : "On a four-lane divided roadway or a one-way road, a solid yellow line usually marks",
		"src" : "sign_blank.png",
		"choices" : [
			{"q" : "the right edge of the pavement.", "a" : 0},
			{"q" : "the end of the roadway.", "a" : 0},
			{"q" : "the left edge of the pavement.", "a" : 1},
			{"q" : "the center of the roadway.", "a" : 0},
			],
		"hint" : "A solid white line usually marks the right edge.",
		"result" : "On a four-lane divided roadway or a one-way road, a solid yellow line usually marks the left edge of the pavement."
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
