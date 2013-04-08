
window.soso = window.soso || {};
soso.maps = soso.maps || {};
(function() {
   function getScript(src) {
		document.write('<' + 'script src="' + src + '"' +' type="text/javascript\"><' + '/script>');
   }
   soso.maps.__load = function(apiLoad){
		delete soso.maps.__load;
		apiLoad(["http://api.map.soso.com/","v2.100","",(new Date()).getTime(),true]);
   };
   getScript("src/main.js");
})();