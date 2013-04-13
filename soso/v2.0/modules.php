<?php

require("JavaScriptPacker.php");

$mod = @explode(",", @$_GET['m']);
$files = "";

for($i=0; $i<count($mod); $i++){
	echo "\r\n";
	$file = @file_get_contents("./src/v2/100/mods/".$mod[$i].".js");
	/*
	$file = @eregi_replace("\n", "", $file); 
	$file = @preg_replace ( "/\s(?=\s)/","\\1", $file);
	$file = @eregi_replace("'", "\\'", $file);
	*/
	$packer = new JavaScriptPacker($file, "None");
	$file = $packer->pack();
	//$file = @eregi_replace("'", "\'", $file);
	$file = @addcslashes($file, "\\\'");
	echo "__cjsload && __cjsload('".$mod[$i]."', '".$file."');";
}


/*
//$file = @file_get_contents("../modules/Geometry/Marker.extends.js");
$file = @file_get_contents("../compiled/MarkerModule.js");
$packer = new JavaScriptPacker($file, "None");
$file = $packer->pack();
$file = @eregi_replace("'", "\'", $file);
echo "_jsload_ && _jsload_('marker', '".$file."'); \r\n";
*/
?>