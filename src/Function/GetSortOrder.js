export function GetSortOrder(prop, inv = false) {
	return function (a, b) {
		if (a[prop] > b[prop]) {
			return inv ? -1 : 1;
		} else if (a[prop] < b[prop]) {
			return inv ? 1 : -1;
		}
		return 0;
	};
}
