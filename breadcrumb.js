
    const host='https://ashish221306.github.io';
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
  
  