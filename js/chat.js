
(function(w,d){
function r(){
var s=document.createElement('script');s.async=1;s.type='text/javascript';s.src='https://chatflow.io/static/1.2/chatflow.php';(d.body||d.head).appendChild(s);
s.onload = function () {
var options = {"channels":{"messenger":"ashish.15101997","whatsapp":"+917068513356"},"agentname":"Ashish Kumar","color":"#824FFD","position":"left","ctaText":"want to hire me for your project ?"}
cffunc = new chatflow();
cffunc.loadcf('init', options);
};
}
if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}
})(window, document);
