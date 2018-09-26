/**
 * Finds elements of a form via a provided Node
 *
 * @function getElementsByForm
 * @export document
 * @category Forms
 * @param Node dom the form's Node
 * @return HTMLCollection a collection of all form elements inside the form. null if there were no form elements inside the form.
 * @throws {InvalidArgumentException} Throws an error for empty or invalid arguments
 */
document.getElementsByForm=function(dom){
	if(!(typeof dom == 'object' && dom.tagName == "FORM")) throw new TypeError('Invalid element given');
	return (dom.elements.length==0 ? null : dom.elements);
}