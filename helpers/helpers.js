export function textTruncate(str, length, ending) {
	if (length == null) {
		length = 45;
	}
	if (ending == null) {
		ending = '...';
	}
	// if (str.length > length) {
	//   return str.substring(0, length - ending.length) + ending;
	// } else {
	//   return str;
	// }
	return str.length > length ? str.slice(0, length - 1) + '…' : str;
}
