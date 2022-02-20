export function calculateAge(birthMonth, birthDay, birthYear) {
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth();
	var currentDay = currentDate.getDate();
	var calculatedAge = currentYear - birthYear;

	if (currentMonth < birthMonth - 1) {
		calculatedAge--;
	}
	if (birthMonth - 1 === currentMonth && currentDay < birthDay) {
		calculatedAge--;
	}
	return calculatedAge;
}
