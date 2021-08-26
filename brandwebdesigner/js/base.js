
$('.footer').load('/template/footer.html');
$('header').load('/template/header.html');




if (document.querySelector('.note')) {
    document.querySelector('.note span').addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
}




window.onload = function () {


    var left = (screen.width / 2) - (800 / 2);
    var top = (screen.height / 2) - (600 / 2);

    document.querySelectorAll('.weareonline').forEach((el) => {
        el.addEventListener('click', () => {
            if (window.innerWidth > 800) {
                window.open('https://web.whatsapp.com/send?phone=+917068513356', 'popup', `width=800,height=600,top=${top},left=${left}`); return false;
            } else {
                window.open('https://api.whatsapp.com/send?phone=+917068513356')
            }
        })
    })

    if (document.querySelector('.share')) {
        document.querySelector('.share').addEventListener('click', () => {
            var urll=window.location.href;
            var whatsappshare=`https://web.whatsapp.com/send?text=${urll}`
            var linktext = document.head.title;
            if (navigator.share) {
                navigator.share({
                    title: 'Brand Web Designer',
                    text: linktext,
                    url: urll,
                })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            } else {

                window.open(whatsappshare, 'popup', `width=800,height=600,top=${top},left=${left}`); return false;
            }
        })
    }

}







let div = document.querySelector('.service-box')
for (i = 0; i <= 3; i++) {
    div.innerHTML += div.innerHTML
}