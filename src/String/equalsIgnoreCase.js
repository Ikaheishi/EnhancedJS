/**
 * Case-insensitive equality check for strings
 *
 * Compares the string with str after converting both to lowercase for case-insensitivity
 *
 * @function equalsIgnoreCase
 * @export String.prototype
 * @category String
 * @param string str the string to find
 * @return Boolean
 * @throws {InvalidArgumentException} Throws an error for empty arguments
 */
String.prototype.equalsIgnoreCase = function(str) {
	if(str===undefined||str=="") throw new TypeError("str cannot be empty");
	return (this.toLowerCase() == String(str).toLowerCase() ? true : false);
}