(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1Sln":function(e,n,t){e.exports=t.p+"assets/2tsjJYK.mp3"},DDHu:function(e,n,t){"use strict";t.r(n);var o=t("mrSG"),r=t("m4NB");function s(){var e=this;Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"Rf4s")).then(function(n){return o.a(e,void 0,void 0,function(){var e,s,a,i,c,u;return o.c(this,function(f){switch(f.label){case 0:if(!(e=document.getElementById("game")))return alert("Could not find container element!"),[2];if(s=n.default,a=new s(e),i=t("TnRn"),c=t("lpzp"),!("FontFace"in window))return[3,4];u=[{family:"pixel-emulator",source:"url("+c+") format('woff2'), url("+i+") format('woff')"}],f.label=1;case 1:return f.trys.push([1,3,,4]),[4,Promise.all(u.map(function(e){return new FontFace(e.family,e.source).load()}))];case 2:return f.sent(),[3,4];case 3:return f.sent(),[3,4];case 4:return[4,Object(r.b)(a,function(e){var n=document.querySelector(".loading-percent");n&&(n.textContent=Math.floor(100*e)+"%")})];case 5:return f.sent(),a.run(),(d=document.getElementById("splash"))&&document.body.removeChild(d),function(){o.a(this,void 0,void 0,function(){var e,n,t;return o.c(this,function(o){switch(o.label){case 0:if(void 0===navigator.serviceWorker)return[2];e=function(){},n=function(){},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,navigator.serviceWorker.register("../service-worker.js")];case 2:return(t=o.sent()).onupdatefound=function(){var o=t.installing;o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?e():n())})},[3,4];case 3:return o.sent(),[3,4];case 4:return[2]}})})}(),[2]}var d})})})}"complete"===document.readyState?s():document.onreadystatechange=function(){"complete"===document.readyState&&s()}},Rixx:function(e,n,t){e.exports=t.p+"assets/2DS0232.webp"},SZUF:function(e,n,t){e.exports=t.p+"assets/3ibqfsp.png"},Sow9:function(e,n,t){e.exports=t.p+"assets/1NuvHN8.png"},TnRn:function(e,n,t){e.exports=t.p+"assets/Rzw3fep.woff"},Wbo4:function(e,n,t){e.exports=t.p+"assets/U4JC5j8.webp"},hC9s:function(e,n,t){e.exports=t.p+"assets/27z98Bm.jpg"},"i/gC":function(e,n,t){e.exports=t.p+"assets/1Ty9ZzX.webp"},iWnD:function(e,n,t){e.exports=t.p+"assets/3Qtr7jP.png"},lpzp:function(e,n,t){e.exports=t.p+"assets/1UB-Qs0.woff2"},m4NB:function(e,n,t){"use strict";var o=t("mrSG"),r=t("IqKQ"),s={basic:"data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",lossless:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="};function a(e){return void 0===e&&(e=!1),o.a(this,void 0,void 0,function(){return o.c(this,function(n){return[2,new Promise(function(n){var t=document.createElement("img");t.onload=function(){n(2===t.width&&1===t.height)},t.onerror=function(){n(!1)},t.src=s[e?"lossless":"basic"]})]})})}var i=t("vRyN"),c=t.n(i),u=t("hC9s"),f=t.n(u),d=t("Wbo4"),l=t.n(d),p=t("Sow9"),m=t.n(p),v=t("i/gC"),A=t.n(v),h=t("iWnD"),b=t.n(h),g=t("Rixx"),w=t.n(g),x=t("SZUF"),S=t.n(x),R=t("1Sln"),y=t.n(R);t.d(n,"b",function(){return B});var E={};n.a=E;function B(e,n){return o.a(this,void 0,void 0,function(){var t,s,i;return o.c(this,function(o){switch(o.label){case 0:return[4,a()];case 1:return t=o.sent(),["mp3"].forEach(function(e){r.e.setExtensionLoadType(e,r.e.LOAD_TYPE.XHR),r.e.setExtensionXhrType(e,r.e.XHR_RESPONSE_TYPE.BLOB)}),s=r.d.shared,n&&s.onProgress.add(function(e){n(e.progress/100)}),s.add("stage",c.a).add("ui",S.a).add("sfx",y.a).add("room",t?l.a:f.a).add("screen",t?A.a:m.a).add("onScreenControls",t?w.a:b.a),[4,new Promise(function(e){s.load(function(n,t){e(t)})})];case 2:return i=o.sent(),Object.entries(i).forEach(function(e){var n=e[0],t=e[1];E[n]=t}),["stage","ui"].forEach(function(e){E[e].texture.baseTexture.scaleMode=r.h.NEAREST}),e.sound.setSoundBlobs({sfxSprites:{src:[URL.createObjectURL(E.sfx.data)],format:["mp3"],sprite:{beep:[0,1023],level:[1123,1938],line:[3161,1728],over:[4989,2042],pause:[7131,1311],rotate:[8542,1232],tetris:[9875,1598],united:[11572,1102]}}}),[2]}})})}},vRyN:function(e,n,t){e.exports=t.p+"assets/TtbRPec.png"}},[["DDHu",3,0]]]);