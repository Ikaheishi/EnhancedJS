/**
 * Case-insensitive version of Array.prototype.indexOf()
 *
 * Finds the index of the first array element that is equal with needle, converting everything to lowercase for case-insensitivity.
 *
 * @function indexOfIgnoreCase
 * @export Array.prototype
 * @category Array
 * @param string needle the string to find
 * @return int the index of the array element that is equal with needle. FALSE if no element was found.
 * @throws {InvalidArgumentException} Throws an error for empty arguments
 */
Array.prototype.indexOfIgnoreCase = function(needle) {
	if(needle===undefined||needle=="") throw new TypeError("needle cannot be empty");
	for(let i=0;i<this.length;i++) if(typeof this[i] == 'string') {
		if(this[i].toLowerCase() == String(needle).toLowerCase()) return i;
	}
	return false;
}