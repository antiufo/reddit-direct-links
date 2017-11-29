// ==UserScript==
// @name        Reddit direct image links
// @description Rewrites redd.it links on reddit as direct links
// @namespace   Shaman
// @version     1.1
// @author      Andrea Martinelli
// @homepageURL https://github.com/antiufo/reddit-direct-links/
// @match       https://*.reddit.com/*
// @grant       none
// ==/UserScript==


document.body.querySelectorAll('a[data-inbound-url]').forEach(x => {
  
  var u = x.parentNode.parentNode.parentNode.parentNode.getAttribute('data-url');
  if(u){
    x.href = u;
    x.setAttribute('data-inbound-url', u);
    x.setAttribute('data-href-url', u);
    
  } 
})

document.body.querySelectorAll('.thumbnail').forEach(x => {
  
  var u = x.parentNode.getAttribute('data-url');
  if(u){
    x.href = u;
    x.setAttribute('data-inbound-url', u);
    x.setAttribute('data-href-url', u);
    
  } 
})


