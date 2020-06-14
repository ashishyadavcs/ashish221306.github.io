function getFullscreen(){
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozfullscreenElement
    || document.msfullscreenElement
}

function toggleFullscreen(){
    if(getFullScreen){
        document.exitFullscreen();
    }else{
        document.querySelector('html').requestFullscreen().catch(console.log);
    }
}

document.addEventListener('dblclick',()=>{
toggleFullscreen();
})