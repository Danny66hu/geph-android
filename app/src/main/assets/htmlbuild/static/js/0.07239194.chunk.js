(window.webpackJsonpgephgui=window.webpackJsonpgephgui||[]).push([[0],{427:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return a}));var r=n(42),a=function(e,t,n,a,i){var o=e.ownerDocument.defaultView;return Object(r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/o.innerWidth;a(t)},onEnd:function(e){var t=e.deltaX,n=o.innerWidth,r=t/n,a=e.velocityX,u=n/2,c=a>=0&&(a>.2||e.deltaX>u),s=(c?1-r:r)*n,d=0;if(s>5){var w=s/Math.abs(a);d=Math.min(w,540)}i(c,r<=0?.01:r,d)}})}}}]);