const Util = (function() {
	let isValidObject = function(inputObject) {
		return (undefined != inputObject && null != inputObject);
	},
	isValidString = function(inputValue) {
		if ( !isValidObject(inputValue) ) return false;
		return (inputValue.length > 0);
	},
	isValidInput = function(inputValue) {
		if ('' == inputValue || 'null' == inputValue || 0 == inputValue || 0 == inputValue.length) {
			return false;
		}
		return true;
	},
	isValidNumber = function(inputValue) {
		if (!isValidInput(inputValue) ) return false;
		if ( isNaN(inputValue) ) return false;
		let regex = /[0-9]|\./;
		if( !regex.test(inputValue) ) return false;
		return true;
	},
	toFirstLetterLowerCase = function(string) {
		if ( !isValidString(string) ) {
			return string;
		}
		return string.charAt(0).toLowerCase() + string.slice(1);
	},
	capitalizeFirstLetter = function(string) {
		if ( !isValidString(string) ) {
			return string;
		}
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	},
	isValidArray = function(inputArray) {
		if ( !isValidObject(inputArray) ) return false;
		return (inputArray.length > 0);
	},
	isValidObjectKey = function(inputObject, key) {
		if ( !isValidObject(inputObject) || !isValidObject(key) ) {
			return false;
		}
		return inputObject.hasOwnProperty(key);
	},
	isValidObjectValue = function(inputObject, key) {
		if ( !isValidObjectKey(inputObject, key) ) {
			return false;
		}
		return isValidString(inputObject[key]);
	},
	getJsonString = function(jsonObject) {
		let jsonString;
		if ( isValidObject(jsonObject) ) {
			try {
				jsonString = JSON.stringify(jsonObject);
			} catch (_error) {}
		}
		return jsonString;
	},
	getJsonObject = function(jsonString) {
		let data;
		if ( isValidObject(jsonString) ) {
			try {
				data = JSON.parse(jsonString);
			} catch (_error) {}
		}
		return data;
	},
	setLocalStorageData = function(key, value) {
		if (window.localStorage) {
			localStorage.setItem(key, JSON.stringify(value) );
		} else {
			alert('localStorage does not support!');
		}
	},
	getLocalStorageData = function(key) {
		if (window.localStorage) {
			return JSON.parse(localStorage.getItem(key));
		}
		return null;
	},
	removeLocalStorageData = function(key) {
		if (window.localStorage) {
			localStorage.removeItem(key);
		}
	},
	toInputValueFloat = function(inputValue) {
		let inputValueStr = inputValue + ''; // Convert to String
		inputValueStr = inputValueStr.replace(/,/g, '').replace(' ', ''); // replace all coma(,) from value
		let inputValueFloat = parseFloat(inputValueStr);
		return inputValueFloat;
	},
	toNumberFormat = function(inputValue) {
		let inputValueFloat = toInputValueFloat(inputValue);
		let inputValueNumber = Number(Number(inputValueFloat).toFixed(2)).valueOf();
		return inputValueNumber;
	},
	toMoneyFormat = function(inputValue) {
		let result = '';
		let inputValueNumber = toNumberFormat(inputValue);
		let inputValueFloat = toInputValueFloat(inputValue);
		let inputFormatNumber = inputValueNumber.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		if (inputValueFloat < 0) {
			result = inputFormatNumber.substring(0, 1) + '$' + inputFormatNumber.substring(1);
		} else {
			result = '$' + inputFormatNumber;
		}
		return result;
	},
	isValidEmail = function(value) {
		let isValid = false;
		if ( isValidString(value) ) {
			var regex = /\S+@\S+\.\S+/;
			if ( regex.test(value) ) {
				isValid = true;
			}
		}
		return isValid;
	};
	return {
		isValidObject : isValidObject,
		isValidString : isValidString,
		isValidInput : isValidInput,
		isValidNumber : isValidNumber,
		isValidArray : isValidArray,
		isValidObjectKey : isValidObjectKey,
		isValidObjectValue : isValidObjectValue,
		setLocalStorageData : setLocalStorageData,
		getLocalStorageData : getLocalStorageData,
		capitalizeFirstLetter : capitalizeFirstLetter,
		toFirstLetterLowerCase : toFirstLetterLowerCase,
		removeLocalStorageData : removeLocalStorageData,
		toNumberFormat : toNumberFormat,
		toMoneyFormat : toMoneyFormat,
		isValidEmail : isValidEmail
	};
})();
