/**
 * Case-insensitive version of String.prototype.indexOf()
 *
 * Find the index of the first appearance of needle in a string after converting both to lowercase for case-insensitivity
 *
 * @function indexOfIgnoreCase
 * @export String.prototype
 * @category String
 * @param string needle the string to find
 * @return int the index of the first appearance of needle. FALSE if needle wasn't found.
 * @throws {InvalidArgumentException} Throws an error for empty arguments
 */
String.prototype.indexOfIgnoreCase = function(needle){
	if(needle===undefined||needle=="") throw new TypeError("needle cannot be empty");
	return this.toLowerCase().indexOf(String(needle).toLowerCase());
}