<?PHP
if(!isset($_GET["args"])) {
	http_response_code(400);
	die;
}
$packages = (strpos($_GET["args"]," ") === false ? array($_GET["args"]) : explode(" ",$_GET["args"]));
header('Content-Type:application/javascript');
if(in_array("array",$packages)||in_array("full",$packages)) include(__DIR__."/array.js");
if(in_array("string",$packages)||in_array("full",$packages)) include(__DIR__."/string.js");
if(in_array("forms",$packages)||in_array("full",$packages)) include(__DIR__."/forms.js");
?>