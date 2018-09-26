/**
 * Finds elements of a form via a provided id
 *
 * @function getElementsByFormId
 * @export document
 * @category Forms
 * @param string id the form's id
 * @return HTMLCollection a collection of all form elements inside the form. null if there were no form elements inside the form.
 * @throws {InvalidArgumentException} Throws an error for empty arguments
 * @throws {InvalidFormId} Throws an error if no form with the given id exists
 * @throws {NonFormId} Throws an error if the id belongs to an element that is not a form
 */
document.getElementsByFormId=function(id){
	if(id===undefined||id=="") throw new TypeError("id must be a string and cannot be empty");
	const el=document.getElementById(id);
	if(!el) throw new Error("Could not find element with id '"+id+"'");
	if(el.tagName!="FORM") throw new Error("id does not belong to any form");
	return (el.elements.length==0 ? null : el.elements);
}