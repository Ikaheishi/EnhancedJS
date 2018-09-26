/**
 * Finds elements of a form via a provided name
 *
 * @function getElementsByFormName
 * @export document
 * @category Forms
 * @param string name the form's name
 * @return HTMLCollection a collection of all form elements inside the form. null if there were no form elements inside the form.
 * @throws {InvalidArgumentException} Throws an error for empty arguments
 * @throws {InvalidFormName} Throws an error if no form with the given name exists
 */
document.getElementsByFormName=function(name){
	if(name===undefined||name=="") throw new TypeError("name must be a string and cannot be empty");
	const forms=document.getElementsByTagName("FORM");
	for(let i=0;i<forms.length;i++) if(forms[i].name==name) return (forms[i].elements.length==0 ? null : forms[i].elements);
	throw new Error("Could not find form with name '"+name+"'");
}