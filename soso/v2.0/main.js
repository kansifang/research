
window.soso = window.soso || {};
soso.maps = soso.maps || {};
(function() {
   function getScript(src) {
		document.write('<' + 'script src="' + src + '"' +' type="text/javascript\"><' + '/script>');
   }
   soso.maps.__load = function(apiLoad){
		delete soso.maps.__load;
		apiLoad(["v2.0/src/","v2.100","",(new Date()).getTime(), /*部署OR调试*/1]);
   };
   getScript("v2.0/src/v2/100/mods/main.js");
})();