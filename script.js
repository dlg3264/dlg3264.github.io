$(document).on("change", "select.playlist", function() {
	var select = $(this);
	var playlistId = select.val();
	var songID = select.prev(".songId").val();
	
	$.post("includes/handlers/ajax/addToPlaylist.php", { playlistId: playlistId, songId: songId})
	.done(function(error) {
		
		if(error != "") {
			alert(error);
			return;
		}
		
		hideOptionsMenu();
		select.val("");
	});
});

function logout() {
	$.post("includes/handlers/ajax/logout.php",)
}

function openPage(url) {
	
	
	if(timer != null) {
		clearTimeout(timer);
	}
	
	if(url.indexOf("?") == -1) {
		url = url + "+";
	}
	
	var encodeedUrl = encodeUri(url + "&userLoggedIn=" + userLoggedIn);
	console.log(endodedUrl);
	$("#mainContent").load(encodedUrl);
	$("body").scrollTop(0);