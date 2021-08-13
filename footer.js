let canonical = window.location.href;
document.head.innerHTML+=`
<link rel="canonical" href="${canonical}"/>

<meta name="robots" content="index, follow, all" />
  <meta http-equiv=”content-language” content=”en”>
  <meta name="geo.placename" content="United States" />
  <meta name="geo.region" content="usa" />
  <meta name="revisit-after" content="3 days">
  
`;

