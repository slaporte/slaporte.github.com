function loadPinboard(div) {
	$.getJSON('http://feeds.pinboard.in/json/v1/u:slaporte/?count=25&cb=?', function(data) {
		for (var i = 0; i < data.length; i++) {
			var url = data[i].u;
			var title = data[i].d;
			var desc = data[i].n.replace('.``', '</blockquote>').replace('``', '<blockquote>');
			//var date = data[i].dt.replace('T', ' @ ').replace('Z', '');
			$('#' + div).append('<h2><a href="' + url + '">' + title + '</a></h2><p>' + desc + '</p>');
		};
	});
}

$(document).ready(function(){
	loadPinboard('pin');
})