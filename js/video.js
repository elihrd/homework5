// Add js here.
var mutedVideo = false;
var slider_text_value = document.getElementById("volume")

var playVideo = document.getElementById("play");
var pauseVideo = document.getElementById("pause");
var slowDown = document.getElementById("slower");
var speedUp = document.getElementById("faster");
var skipAhead = document.getElementById("skip");
var videoPlayer = document.getElementById("videoplayer")
var muteVideo = document.getElementById("mute")
var sliderVol = document.getElementById("slider")

window.addEventListener("load", loadTime);
playVideo.addEventListener("click", playVid);
pauseVideo.addEventListener("click", pauseVid);
slowDown.addEventListener("click", slower);
speedUp.addEventListener("click", faster);
skipAhead.addEventListener("click", skip);
muteVideo.addEventListener("click", mutedVid);
sliderVol.addEventListener("change", sliderVolume);

function loadTime()
{
    videoPlayer.load();
}

function playVid() {
    videoPlayer.play();
}

function pauseVid() {
    videoPlayer.pause();
}

function slower()
{
    if (videoPlayer.playbackRate == 2)[videoPlayer.playbackRate = 1]
    else if (videoPlayer.playbackRate == 1)[videoPlayer.playbackRate = 0.5]
    else if (videoPlayer.playbackRate == 0.5)[window.alert("Video is at slowest speed!")]
}

function faster()
{
    if (videoPlayer.playbackRate == 0.5)[videoPlayer.playbackRate = 1]
    else if (videoPlayer.playbackRate == 1)[videoPlayer.playbackRate = 2]
    else if (videoPlayer.playbackRate == 2)[window.alert("Video is at fastest speed!")]
}

function skip()
{
    videoPlayer.currentTime +=15;
    if (videoPlayer.currentTime >= videoPlayer.duration)[videoPlayer.currentTime = 0]

}


function mutedVid()
{
    if (mutedVideo === false)
    [videoPlayer.muted = true,
    mutedVideo = true,
    sliderVol["value"] = 0,
    slider_text_value.innerHTML = ("<span id='volume'>0%</span>")
]

    else (mutedVideo === true)
    [videoPlayer.muted = false,
    mutedVideo = false,
    sliderVol["value"] = 100,
    slider_text_value.innerHTML = ("<span id='volume'>100%</span>")
]
}

function sliderVolume()
{
    videoPlayer.volume = sliderVol.value / 100;
    volumeText = videoPlayer.volume * 100;
    slider_text_value.innerHTML = (`<span id='volume'>${volumeText}%</span>`)
}
