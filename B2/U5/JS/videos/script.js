function generaHTMLVideos (videos) {
	var htmlVideos='';
	if(videos) for (var i = 0; i < videos.length; i++) {
		htmlVideos+= '<li><video controls data-idx="'+i+'" src="./media/'+videos[i]+'"></video></li>';
	}

	return htmlVideos;
}

function stop_all() {
	var videosInHTML=document.getElementsByTagName('video');
	if(videosInHTML)for (var i = 0; i < videosInHTML.length; i++) {
		videosInHTML[i].pause();
	}
}

function stopPlayVideo (vidIdx) {
	stop_all();
	var videosInHTML=document.getElementsByTagName('video');

	var elVideo=videosInHTML[vidIdx];
	console.log('video:',vidIdx,elVideo);
	if(elVideo) elVideo.play();
}


var d=document;
var mis_videos=['video1.mp4','video2.mp4','video3.mp4'];
var botonPlay=d.getElementById('player');

d.getElementById('lista_videos').innerHTML = generaHTMLVideos(mis_videos);

botonPlay.onclick=function (e) {
	var num_vid=document.getElementById('num_vid').value;
	stopPlayVideo(num_vid>0?num_vid-1:-1);
}