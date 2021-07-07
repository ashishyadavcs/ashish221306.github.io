function changemode(){
  
    var darkmode= document.getElementById('darkmode');
    if(darkmode.checked==true ){
        document.querySelector('main').style.background="#000";
        document.querySelector('body').style.transition="background 0.6s ease-in";
        localStorage.setItem('darkmode',darkmode.checked);
        
    }
    // else if(darkmode.checked===false){
    //     document.querySelector('body').style.background="inherit";
    //     localStorage.removeItem('darkmode')
    // }
    else{
       document.querySelector('main').style.background="inherit";
       localStorage.removeItem('darkmode')
   
    }
  
   }


   document.querySelector('.mobilenavicon').onclick=function(){
     document.querySelector('nav').classList.toggle('show-nav');
   }


//breadcrumb

const host='https://'+window.location.host;
const currenturl=window.location.pathname;
const patharray =currenturl.split('/').filter(function (el) {return el != "";});
var bdschemaitem='';
var pathname=''
for(path in patharray){
if(path==patharray.length-1){
  pathname+=patharray[path];
}else{
  pathname+=patharray[path]+'/';
}
 bdschemaitem+=`
 , {
    "@type": "ListItem", 
    "position": ${parseInt(path)+2}, 
    "name": "${patharray[path]}",
    "item": "${host}/${pathname}"  
  } `
}
const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = `
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "home",
    "item": "${host}"  
  }${bdschemaitem}]
}
`;
document.head.appendChild(script);


$(document.body).append('<div class="footer"></a>')
$('.footer').load('./footer.html')



 
    
