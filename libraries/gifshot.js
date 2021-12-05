/*Copyrights for code authored by Yahoo Inc. is licensed under the following terms:
MIT License
Copyright  2017 Yahoo Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
!function(e,t,r,i){"use strict";var n,o,a={URL:e.URL||e.webkitURL||e.mozURL||e.msURL,getUserMedia:(o=r.getUserMedia||r.webkitGetUserMedia||r.mozGetUserMedia||r.msGetUserMedia,o?o.bind(r):o),requestAnimFrame:e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame,requestTimeout:function(e,t){if(e=e||a.noop,t=t||0,!a.requestAnimFrame)return setTimeout(e,t);var r=(new Date).getTime(),i=new Object,n=a.requestAnimFrame;return i.value=n(function o(){(new Date).getTime()-r>=t?e.call():i.value=n(o)}),i},Blob:e.Blob||e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,btoa:(n=e.btoa||function(e){for(var t="",r=0,i=e.length,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=void 0,a=void 0,s=void 0,d=void 0,c=void 0,l=void 0,u=void 0;r<i;)d=(o=e.charCodeAt(r++))>>2,c=(3&o)<<4|(a=e.charCodeAt(r++))>>4,l=(15&a)<<2|(s=e.charCodeAt(r++))>>6,u=63&s,isNaN(a)?l=u=64:isNaN(s)&&(u=64),t=t+n.charAt(d)+n.charAt(c)+n.charAt(l)+n.charAt(u);return t},n?n.bind(e):a.noop),isObject:function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){return a.isObject(e)&&!Object.keys(e).length},isArray:function(e){return e&&Array.isArray(e)},isFunction:function(e){return e&&"function"==typeof e},isElement:function(e){return e&&1===e.nodeType},isString:function(e){return"string"==typeof e||"[object String]"===Object.prototype.toString.call(e)},isSupported:{canvas:function(){var e=t.createElement("canvas");return e&&e.getContext&&e.getContext("2d")},webworkers:function(){return e.Worker},blob:function(){return a.Blob},Uint8Array:function(){return e.Uint8Array},Uint32Array:function(){return e.Uint32Array},videoCodecs:function(){var e=t.createElement("video"),r={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{e&&e.canPlayType&&(r.mp4=""!==e.canPlayType('video/mp4; codecs="mp4v.20.8"'),r.h264=""!==(e.canPlayType('video/mp4; codecs="avc1.42E01E"')||e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),r.ogv=""!==e.canPlayType('video/ogg; codecs="theora"'),r.ogg=""!==e.canPlayType('video/ogg; codecs="theora"'),r.webm=-1!==e.canPlayType('video/webm; codecs="vp8, vorbis"'))}catch(e){}return r}()},noop:function(){},each:function(e,t){var r=void 0,i=void 0;if(a.isArray(e))for(r=-1,i=e.length;++r<i&&!1!==t(r,e[r]););else if(a.isObject(e))for(r in e)if(e.hasOwnProperty(r)&&!1===t(r,e[r]))break},mergeOptions:function(e,t){if(a.isObject(e)&&a.isObject(t)&&Object.keys){var r={};return a.each(e,function(t,i){r[t]=e[t]}),a.each(t,function(i,n){var o=t[i];a.isObject(o)&&e[i]?r[i]=a.mergeOptions(e[i],o):r[i]=o}),r}},setCSSAttr:function(e,t,r){a.isElement(e)&&(a.isString(t)&&a.isString(r)?e.style[t]=r:a.isObject(t)&&a.each(t,function(t,r){e.style[t]=r}))},removeElement:function(e){a.isElement(e)&&e.parentNode&&e.parentNode.removeChild(e)},createWebWorker:function(e){if(!a.isString(e))return{};try{var t=new a.Blob([e],{type:"text/javascript"}),r=a.URL.createObjectURL(t);return{objectUrl:r,worker:new Worker(r)}}catch(e){return""+e}},getExtension:function(e){return e.substr(e.lastIndexOf(".")+1,e.length)},getFontSize:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{};if(!t.body||!1===e.resizeFont)return e.fontSize;var r=e.text,n=e.gifWidth,o=parseInt(e.fontSize,10),a=parseInt(e.minFontSize,10),s=t.createElement("div"),d=t.createElement("span");for(s.setAttribute("width",n),s.appendChild(d),d.innerHTML=r,d.style.fontSize=o+"px",d.style.textIndent="-9999px",d.style.visibility="hidden",t.body.appendChild(d);d.offsetWidth>n&&o>=a;)d.style.fontSize=--o+"px";return t.body.removeChild(d),o+"px"},webWorkerError:!1},s=Object.freeze({default:a}),d={validate:function(e){e=a.isObject(e)?e:{};var t={};return a.each(d.validators,function(r,i){var n=i.errorCode;if(!e[n]&&!i.condition)return(t=i).error=!0,!1}),delete t.condition,t},isValid:function(e){var t=!0!==d.validate(e).error;return t},validators:[{condition:a.isFunction(a.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:a.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:a.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:a.isFunction(a.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:a.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:a.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:a.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},c=Object.freeze({default:d}),l=function(){},u={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:l,completeCallback:l,saveRenderingContexts:!1,savedRenderingContexts:[],showFrameText:!0,crossOrigin:"Anonymous",waterMark:null,waterMarkHeight:null,waterMarkWidth:null,waterMarkXCoordinate:1,waterMarkYCoordinate:1},m=Object.freeze({default:u});function f(){return d.isValid()}function g(){var e,t,r,i,n,o=256,a=499,s=491,d=487,c=503,l=3*c,u=o-1,m=4,f=100,g=16,h=1<<g,p=10,v=10,b=h>>v,w=h<<p-v,y=6,C=(o>>3)*(1<<y),k=30,S=1024,x=256,F=1<<18,W=[],O=[],E=[],M=[];function A(e,t,r,i,a){var s,d,c,l,u,m,f;for((c=t-e)<-1&&(c=-1),(l=t+e)>o&&(l=o),s=t+1,d=t-1,m=1;s<l||d>c;){if(u=M[m++],s<l){f=n[s++];try{f[0]-=u*(f[0]-r)/F|0,f[1]-=u*(f[1]-i)/F|0,f[2]-=u*(f[2]-a)/F|0}catch(e){}}if(d>c){f=n[d--];try{f[0]-=u*(f[0]-r)/F|0,f[1]-=u*(f[1]-i)/F|0,f[2]-=u*(f[2]-a)/F|0}catch(e){}}}}function U(e,t,r,i,o){var a=n[t],s=e/S;a[0]-=s*(a[0]-r)|0,a[1]-=s*(a[1]-i)|0,a[2]-=s*(a[2]-o)|0}function R(e,t,r){var i,a,s,d,c,l,u,f,h,y;for(h=f=~(1<<31),u=l=-1,i=0;i<o;i++)(a=(y=n[i])[0]-e)<0&&(a=-a),(s=y[1]-t)<0&&(s=-s),a+=s,(s=y[2]-r)<0&&(s=-s),(a+=s)<f&&(f=a,l=i),(d=a-(O[i]>>g-m))<h&&(h=d,u=i),c=E[i]>>v,E[i]-=c,O[i]+=c<<p;return E[l]+=b,O[l]-=w,u}(function(e,a,s){var d,c;for(t=e,r=a,i=s,n=new Array(o),d=0;d<o;d++)n[d]=new Array(4),(c=n[d])[0]=c[1]=c[2]=(d<<m+8)/o|0,E[d]=h/o|0,O[d]=0}).apply(this,arguments);var T={map:function(e,t,r){var i,a,s,d,c,l,u;for(c=1e3,u=-1,a=(i=W[t])-1;i<o||a>=0;)i<o&&((s=(l=n[i])[1]-t)>=c?i=o:(i++,s<0&&(s=-s),(d=l[0]-e)<0&&(d=-d),(s+=d)<c&&((d=l[2]-r)<0&&(d=-d),(s+=d)<c&&(c=s,u=l[3])))),a>=0&&((s=t-(l=n[a])[1])>=c?a=-1:(a--,s<0&&(s=-s),(d=l[0]-e)<0&&(d=-d),(s+=d)<c&&((d=l[2]-r)<0&&(d=-d),(s+=d)<c&&(c=s,u=l[3]))));return u}};return T.process=function(){return function(){var n,o,u,g,h,p,v,b,w,F,W,O,E,T;for(r<l&&(i=1),e=30+(i-1)/3,O=t,E=0,T=r,F=(W=r/(3*i))/f|0,b=S,(v=(p=C)>>y)<=1&&(v=0),n=0;n<v;n++)M[n]=b*((v*v-n*n)*x/(v*v));for(w=r<l?3:r%a!=0?3*a:r%s!=0?3*s:r%d!=0?3*d:3*c,n=0;n<W;)if(U(b,o=R(u=(255&O[E+0])<<m,g=(255&O[E+1])<<m,h=(255&O[E+2])<<m),u,g,h),0!==v&&A(v,o,u,g,h),(E+=w)>=T&&(E-=r),0===F&&(F=1),++n%F==0)for(b-=b/e,(v=(p-=p/k)>>y)<=1&&(v=0),o=0;o<v;o++)M[o]=b*((v*v-o*o)*x/(v*v))}(),function(){var e;for(e=0;e<o;e++)n[e][0]>>=m,n[e][1]>>=m,n[e][2]>>=m,n[e][3]=e}(),function(){var e,t,r,i,a,s,d,c;for(d=0,c=0,e=0;e<o;e++){for(r=e,i=(a=n[e])[1],t=e+1;t<o;t++)(s=n[t])[1]<i&&(r=t,i=s[1]);if(s=n[r],e!=r&&(t=s[0],s[0]=a[0],a[0]=t,t=s[1],s[1]=a[1],a[1]=t,t=s[2],s[2]=a[2],a[2]=t,t=s[3],s[3]=a[3],a[3]=t),i!=d){for(W[d]=c+e>>1,t=d+1;t<i;t++)W[t]=e;d=i,c=e}}for(W[d]=c+u>>1,t=d+1;t<256;t++)W[t]=u}(),function(){for(var e=[],t=new Array(o),r=0;r<o;r++)t[n[r][3]]=r;for(var i=0,a=0;a<o;a++){var s=t[a];e[i++]=n[s][0],e[i++]=n[s][1],e[i++]=n[s][2]}return e}()},T}function h(){try{this.onmessage=function(t){var r,i=t.data||{};i.gifshot&&(r=e.run(i),postMessage(r))}}catch(e){}var e={dataToRGB:function(e,t,r){for(var i=t*r*4,n=0,o=[];n<i;)o.push(e[n++]),o.push(e[n++]),o.push(e[n++]),n++;return o},componentizedPaletteToArray:function(e){e=e||[];for(var t=[],r=0;r<e.length;r+=3){var i=e[r],n=e[r+1],o=e[r+2];t.push(i<<16|n<<8|o)}return t},processFrameWithQuantizer:function(e,t,r,i){for(var n=this.dataToRGB(e,t,r),o=new g(n,n.length,i),a=o.process(),s=new Uint32Array(this.componentizedPaletteToArray(a)),d=t*r,c=new Uint8Array(d),l=0,u=0;u<d;u++){var m=n[l++],f=n[l++],h=n[l++];c[u]=o.map(m,f,h)}return{pixels:c,palette:s}},run:function(e){var t=e=e||{},r=t.height,i=(t.palette,t.sampleInterval),n=t.width,o=e.data;return this.processFrameWithQuantizer(o,n,r,i)}};return e}function p(e,t,r,n){var o=0,a=(n=n===i?{}:n).loop===i?null:n.loop,s=n.palette===i?null:n.palette;if(t<=0||r<=0||t>65535||r>65535)throw"Width/Height invalid.";e[o++]=71,e[o++]=73,e[o++]=70,e[o++]=56,e[o++]=57,e[o++]=97;if(e[o++]=255&t,e[o++]=t>>8&255,e[o++]=255&r,e[o++]=r>>8&255,e[o++]=0|(null!==s?128:0),e[o++]=0,e[o++]=0,null!==a){if(a<0||a>65535)throw"Loop count invalid.";e[o++]=33,e[o++]=255,e[o++]=11,e[o++]=78,e[o++]=69,e[o++]=84,e[o++]=83,e[o++]=67,e[o++]=65,e[o++]=80,e[o++]=69,e[o++]=50,e[o++]=46,e[o++]=48,e[o++]=3,e[o++]=1,e[o++]=255&a,e[o++]=a>>8&255,e[o++]=0}var d=!1;this.addFrame=function(t,r,n,a,c,l){if(!0===d&&(--o,d=!1),l=l===i?{}:l,t<0||r<0||t>65535||r>65535)throw"x/y invalid.";if(n<=0||a<=0||n>65535||a>65535)throw"Width/Height invalid.";if(c.length<n*a)throw"Not enough pixels for the frame size.";var u=!0,m=l.palette;if(m!==i&&null!==m||(u=!1,m=s),m===i||null===m)throw"Must supply either a local or global palette.";for(var f=function(e){var t=e.length;if(t<2||t>256||t&t-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return t}(m),g=0;f>>=1;)++g;f=1<<g;var h=l.delay===i?0:l.delay,p=l.disposal===i?0:l.disposal;if(p<0||p>3)throw"Disposal out of range.";var v=!1,b=0;if(l.transparent!==i&&null!==l.transparent&&(v=!0,(b=l.transparent)<0||b>=f))throw"Transparent color index.";if((0!==p||v||0!==h)&&(e[o++]=33,e[o++]=249,e[o++]=4,e[o++]=p<<2|(!0===v?1:0),e[o++]=255&h,e[o++]=h>>8&255,e[o++]=b,e[o++]=0),e[o++]=44,e[o++]=255&t,e[o++]=t>>8&255,e[o++]=255&r,e[o++]=r>>8&255,e[o++]=255&n,e[o++]=n>>8&255,e[o++]=255&a,e[o++]=a>>8&255,e[o++]=!0===u?128|g-1:0,!0===u)for(var w=0,y=m.length;w<y;++w){var C=m[w];e[o++]=C>>16&255,e[o++]=C>>8&255,e[o++]=255&C}o=function(e,t,r,n){e[t++]=r;var o=t++,a=1<<r,s=a-1,d=a+1,c=d+1,l=r+1,u=0,m=0;function f(r){for(;u>=r;)e[t++]=255&m,m>>=8,u-=8,t===o+256&&(e[o]=255,o=t++)}function g(e){m|=e<<u,u+=l,f(8)}var h=n[0]&s,p={};g(a);for(var v=1,b=n.length;v<b;++v){var w=n[v]&s,y=h<<8|w,C=p[y];if(C===i){for(m|=h<<u,u+=l;u>=8;)e[t++]=255&m,m>>=8,u-=8,t===o+256&&(e[o]=255,o=t++);4096===c?(g(a),c=d+1,l=r+1,p={}):(c>=1<<l&&++l,p[y]=c++),h=w}else h=C}g(h),g(d),f(1),o+1===t?e[o]=0:(e[o]=t-o-1,e[t++]=0);return t}(e,o,g<2?2:g,c)},this.end=function(){return!1===d&&(e[o++]=59,d=!0),o}}var v=function(){},b=function(e){this.canvas=null,this.ctx=null,this.repeat=null,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=v,this.onRenderProgressCallback=v,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=e,this.initializeWebWorkers(e)};b.prototype={workerMethods:h(),initializeWebWorkers:function(e){var r,i=g.toString()+"("+h.toString()+"());",n=void 0,o=void 0,s=void 0,d=-1,c="";for(r=e.numWorkers;++d<r;)n=a.createWebWorker(i),a.isObject(n)?(o=n.objectUrl,s=n.worker,this.workers.push({worker:s,objectUrl:o}),this.availableWorkers.push(s)):(c=n,a.webWorkerError=!!n);this.workerError=c,this.canvas=t.createElement("canvas"),this.canvas.width=e.gifWidth,this.canvas.height=e.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(e){this.availableWorkers.push(e)},byteMap:function(){for(var e=[],t=0;t<256;t++)e[t]=String.fromCharCode(t);return e}(),bufferToString:function(e){for(var t=e.length,r="",i=-1;++i<t;)r+=this.byteMap[e[i]];return r},onFrameFinished:function(e){var t=this,r=t.frames,i=!!(t.options.images||[]).length,n=r.every(function(e){return!e.beingProcessed&&e.done});t.numRenderedFrames++,i&&e(t.numRenderedFrames/r.length),t.onRenderProgressCallback(.75*t.numRenderedFrames/r.length),n?t.generatingGIF||t.generateGIF(r,t.onRenderCompleteCallback):a.requestTimeout(function(){t.processNextFrame()},1)},processFrame:function(e){var t=this,r=(this.options,this.options),n=r.progressCallback,o=r.sampleInterval,a=this.frames,s=void 0,d=void 0,c=function(){var e=(arguments.length>0&&arguments[0]!==i?arguments[0]:{}).data;delete s.data,s.pixels=Array.prototype.slice.call(e.pixels),s.palette=Array.prototype.slice.call(e.palette),s.done=!0,s.beingProcessed=!1,t.freeWorker(d),t.onFrameFinished(n)};(s=a[e]).beingProcessed||s.done?this.onFrameFinished():(s.sampleInterval=o,s.beingProcessed=!0,s.gifshot=!0,(d=this.getWorker())?(d.onmessage=c,d.postMessage(s)):c({data:t.workerMethods.run(s)}))},startRendering:function(e){this.onRenderCompleteCallback=e;for(var t=0;t<this.options.numWorkers&&t<this.frames.length;t++)this.processFrame(t)},processNextFrame:function(){for(var e=-1,t=0;t<this.frames.length;t++){var r=this.frames[t];if(!r.done&&!r.beingProcessed){e=t;break}}e>=0&&this.processFrame(e)},generateGIF:function(e,t){var r=[],i={loop:this.repeat},n=this.options,o=n.interval,s=n.frameDuration,d=!!n.images.length,c=n.gifHeight,l=n.gifWidth,u=new p(r,l,c,i),m=this.onRenderProgressCallback,f=d?100*o:0,g=void 0;this.generatingGIF=!0,a.each(e,function(t,r){var i=r.palette;m(.75+.25*r.position*1/e.length);for(var n=0;n<s;n++)u.addFrame(0,0,l,c,r.pixels,{palette:i,delay:f})}),u.end(),m(1),this.frames=[],this.generatingGIF=!1,a.isFunction(t)&&(g=this.bufferToString(r),t("data:image/gif;base64,"+a.btoa(g)))},setRepeat:function(e){this.repeat=e},addFrame:function(e,t,r){t=a.isObject(t)?t:{};var i=this.ctx,n=this.options,o=n.gifWidth,s=n.gifHeight,d=a.getFontSize(t),c=t,l=c.filter,u=c.fontColor,m=c.fontFamily,f=c.fontWeight,g=(c.gifHeight,c.gifWidth,c.text),h=c.textAlign,p=c.textBaseline,v=c.waterMark,b=c.waterMarkHeight,w=c.waterMarkWidth,y=c.waterMarkXCoordinate,C=c.waterMarkYCoordinate,k=t.textXCoordinate?t.textXCoordinate:"left"===h?1:"right"===h?o:o/2,S=t.textYCoordinate?t.textYCoordinate:"top"===p?1:"center"===p?s/2:s,x=f+" "+d+" "+m,F=r&&t.showFrameText?r:g,W=void 0;try{i.filter=l,i.drawImage(e,0,0,o,s),F&&(i.font=x,i.fillStyle=u,i.textAlign=h,i.textBaseline=p,i.fillText(F,k,S)),v&&i.drawImage(v,y,C,w,b),W=i.getImageData(0,0,o,s),this.addFrameImageData(W)}catch(e){return""+e}},addFrameImageData:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=this.frames,r=e.data;this.frames.push({data:r,width:e.width,height:e.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:t.length})},onRenderProgress:function(e){this.onRenderProgressCallback=e},isRendering:function(){return this.generatingGIF},getBase64GIF:function(e){var t=this;t.startRendering(function(r){t.destroyWorkers(),a.requestTimeout(function(){e(r)},0)})},destroyWorkers:function(){if(!this.workerError){var e=this.workers;a.each(e,function(e,t){var r=t.worker,i=t.objectUrl;r.terminate(),a.URL.revokeObjectURL(i)})}}};var w=function(){},y={getGIF:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},r=arguments[1];r=a.isFunction(r)?r:w;var n=t.createElement("canvas"),o=void 0,s=!!e.images.length,d=e.cameraStream,c=e.crop,l=e.filter,u=e.fontColor,m=e.fontFamily,f=e.fontWeight,g=e.keepCameraOn,h=(e.numWorkers,e.progressCallback),p=e.saveRenderingContexts,v=e.savedRenderingContexts,y=e.text,C=e.textAlign,k=e.textBaseline,S=e.videoElement,x=e.videoHeight,F=e.videoWidth,W=e.webcamVideoElement,O=e.waterMark,E=e.waterMarkHeight,M=e.waterMarkWidth,A=e.waterMarkXCoordinate,U=e.waterMarkYCoordinate,R=Number(e.gifWidth),T=Number(e.gifHeight),I=Number(e.interval),j=(Number(e.sampleInterval),s?0:1e3*I),V=[],H=v.length?v.length:e.numFrames,z=H,L=new b(e),B=a.getFontSize(e),P=e.textXCoordinate?e.textXCoordinate:"left"===C?1:"right"===C?R:R/2,G=e.textYCoordinate?e.textYCoordinate:"top"===k?1:"center"===k?T/2:T,D=f+" "+B+" "+m,N=c?Math.floor(c.scaledWidth/2):0,q=c?F-c.scaledWidth:0,X=c?Math.floor(c.scaledHeight/2):0,Y=c?x-c.scaledHeight:0;H=H!==i?H:10,I=I!==i?I:.1,n.width=R,n.height=T,o=n.getContext("2d"),function e(){v.length||0!==S.currentTime?function e(){var t=z-1;function i(){var i;p&&V.push(o.getImageData(0,0,R,T)),O&&o.drawImage(O,A,U,M,E),y&&(o.font=D,o.fillStyle=u,o.textAlign=C,o.textBaseline=k,o.fillText(y,P,G)),i=o.getImageData(0,0,R,T),L.addFrameImageData(i),h((H-(z=t))/H),t>0&&a.requestTimeout(e,j),z||L.getBase64GIF(function(e){r({error:!1,errorCode:"",errorMsg:"",image:e,cameraStream:d,videoElement:S,webcamVideoElement:W,savedRenderingContexts:V,keepCameraOn:g})})}v.length?(o.putImageData(v[H-z],0,0),i()):function e(){try{q>F&&(q=F),Y>x&&(Y=x),N<0&&(N=0),X<0&&(X=0),o.filter=l,o.drawImage(S,N,X,q,Y,0,0,R,T),i()}catch(t){if("NS_ERROR_NOT_AVAILABLE"!==t.name)throw t;a.requestTimeout(e,100)}}()}():a.requestTimeout(e,100)}()},getCropDimensions:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=e.videoWidth,r=e.videoHeight,n=e.gifWidth,o=e.gifHeight,a={width:0,height:0,scaledWidth:0,scaledHeight:0};return t>r?(a.width=Math.round(t*(o/r))-n,a.scaledWidth=Math.round(a.width*(r/o))):(a.height=Math.round(r*(n/t))-o,a.scaledHeight=Math.round(a.height*(t/n))),a}},C={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function e(t){e.attempts=e.attempts||0;var r=t.cameraStream,i=t.completedCallback,n=t.videoElement;n&&(n.videoWidth>0&&n.videoHeight>0?(n.removeEventListener("loadeddata",C.findVideoSize),i({videoElement:n,cameraStream:r,videoWidth:n.videoWidth,videoHeight:n.videoHeight})):e.attempts<10?(e.attempts+=1,a.requestTimeout(function(){C.findVideoSize(t)},400)):i({videoElement:n,cameraStream:r,videoWidth:C.defaultVideoDimensions.width,videoHeight:C.defaultVideoDimensions.height}))},onStreamingTimeout:function(e){a.isFunction(e)&&e({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(e){var t=a.isArray(e.existingVideo)?e.existingVideo[0]:e.existingVideo,r=e.cameraStream,i=e.completedCallback,n=e.streamedCallback,o=e.videoElement;if(a.isFunction(n)&&n(),t){if(a.isString(t))o.src=t,o.innerHTML='<source src="'+t+'" type="video/'+a.getExtension(t)+'" />';else if(t instanceof Blob){try{o.src=a.URL.createObjectURL(t)}catch(e){}o.innerHTML='<source src="'+t+'" type="'+t.type+'" />'}}else if(o.mozSrcObject)o.mozSrcObject=r;else if(a.URL)try{o.srcObject=r,o.src=a.URL.createObjectURL(r)}catch(e){o.srcObject=r}o.play(),a.requestTimeout(function e(){e.count=e.count||0,!0===C.loadedData?(C.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}),C.loadedData=!1):(e.count+=1)>10?C.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}):e()},0)},startStreaming:function(e){var r=a.isFunction(e.error)?e.error:a.noop,i=a.isFunction(e.streamed)?e.streamed:a.noop,n=a.isFunction(e.completed)?e.completed:a.noop,o=e.crossOrigin,s=e.existingVideo,d=e.lastCameraStream,c=e.options,l=e.webcamVideoElement,u=a.isElement(s)?s:l||t.createElement("video");o&&(u.crossOrigin=c.crossOrigin),u.autoplay=!0,u.loop=!0,u.muted=!0,u.addEventListener("loadeddata",function(e){C.loadedData=!0,c.offset&&(u.currentTime=c.offset)}),s?C.stream({videoElement:u,existingVideo:s,completedCallback:n}):d?C.stream({videoElement:u,cameraStream:d,streamedCallback:i,completedCallback:n}):a.getUserMedia({video:!0},function(e){C.stream({videoElement:u,cameraStream:e,streamedCallback:i,completedCallback:n})},r)},startVideoStreaming:function(e){var t=arguments.length>1&&arguments[1]!==i?arguments[1]:{},r=t.timeout!==i?t.timeout:0,n=t.callback,o=t.webcamVideoElement,s=void 0;r>0&&(s=a.requestTimeout(function(){C.onStreamingTimeout(n)},1e4)),C.startStreaming({error:function(){n({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(s)},completed:function(){var t=arguments.length>0&&arguments[0]!==i?arguments[0]:{},r=t.cameraStream,n=t.videoElement,o=t.videoHeight,a=t.videoWidth;e({cameraStream:r,videoElement:n,videoHeight:o,videoWidth:a})},lastCameraStream:t.lastCameraStream,webcamVideoElement:o,crossOrigin:t.crossOrigin,options:t})},stopVideoStreaming:function(e){var t=e=a.isObject(e)?e:{},r=t.keepCameraOn,i=t.videoElement,n=t.webcamVideoElement,o=e.cameraStream||{},s=o.getTracks&&o.getTracks()||[],d=!!s.length,c=s[0];!r&&d&&a.isFunction(c.stop)&&c.stop(),a.isElement(i)&&!n&&(i.pause(),a.isFunction(a.URL.revokeObjectURL)&&!a.webWorkerError&&i.src&&a.URL.revokeObjectURL(i.src),a.removeElement(i))}};function k(e){e=a.isObject(e)?e:{},C.stopVideoStreaming(e)}function S(e,r){var i=e.options||{},n=i.images,o=i.video,s=Number(i.gifWidth),d=Number(i.gifHeight),c=(Number(i.numFrames),e.cameraStream),l=e.videoElement,u=e.videoWidth,m=e.videoHeight,f=y.getCropDimensions({videoWidth:u,videoHeight:m,gifHeight:d,gifWidth:s}),g=r;i.crop=f,i.videoElement=l,i.videoWidth=u,i.videoHeight=m,i.cameraStream=c,a.isElement(l)&&(l.width=s+f.width,l.height=d+f.height,i.webcamVideoElement||(a.setCSSAttr(l,{position:"fixed",opacity:"0"}),t.body.appendChild(l)),l.play(),y.getGIF(i,function(e){n&&n.length||o&&o.length||k(e),g(e)}))}function x(e,r){if(r=a.isFunction(e)?e:r,e=a.isObject(e)?e:{},a.isFunction(r)){var n=a.mergeOptions(u,e)||{},o=e.cameraStream,s=n.images,c=s?s.length:0,l=n.video,m=n.webcamVideoElement;n=a.mergeOptions(n,{gifWidth:Math.floor(n.gifWidth),gifHeight:Math.floor(n.gifHeight)}),c?function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},r=e.callback,n=e.images,o=e.options,s=e.imagesLength,c=d.validate({getUserMedia:!0,"window.URL":!0}),l=[],u=0,m=void 0,f=void 0;if(c.error)return r(c);function g(){a.each(l,function(e,t){t&&(t.text?f.addFrame(t.img,o,t.text):f.addFrame(t,o))}),function(e,t){e.getBase64GIF(function(e){t({error:!1,errorCode:"",errorMsg:"",image:e})})}(f,r)}f=new b(o),a.each(n,function(e,i){var n=i;i.src&&(n=n.src),a.isElement(n)?(o.crossOrigin&&(n.crossOrigin=o.crossOrigin),l[e]=n,(u+=1)===s&&g()):a.isString(n)&&(m=new Image,o.crossOrigin&&(m.crossOrigin=o.crossOrigin),function(t){i.text&&(t.text=i.text),t.onerror=function(e){var t=void 0;if(0==--s)return(t={}).error="None of the requested images was capable of being retrieved",r(t)},t.onload=function(r){i.text?l[e]={img:t,text:t.text}:l[e]=t,(u+=1)===s&&g(),a.removeElement(t)},t.src=n}(m),a.setCSSAttr(m,{position:"fixed",opacity:"0"}),t.body.appendChild(m))})}({images:s,imagesLength:c,callback:r,options:n}):l?function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=e.callback,r=e.existingVideo,n=e.options,o=d.validate({getUserMedia:!0,"window.URL":!0}),s=void 0,c=void 0;if(o.error)return t(o);if(a.isElement(r)&&r.src){if(c=r.src,s=a.getExtension(c),!a.isSupported.videoCodecs[s])return t(d.messages.videoCodecs)}else a.isArray(r)&&a.each(r,function(e,t){if(s=t instanceof Blob?t.type.substr(t.type.lastIndexOf("/")+1,t.length):t.substr(t.lastIndexOf(".")+1,t.length),a.isSupported.videoCodecs[s])return r=t,!1});C.startStreaming({completed:function(e){e.options=n||{},S(e,t)},existingVideo:r,crossOrigin:n.crossOrigin,options:n})}({existingVideo:l,callback:r,options:n}):function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=e.callback,r=e.lastCameraStream,n=e.options,o=e.webcamVideoElement;if(!f())return t(d.validate());n.savedRenderingContexts.length?y.getGIF(n,function(e){t(e)}):C.startVideoStreaming(function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{};e.options=n||{},S(e,t)},{lastCameraStream:r,callback:t,webcamVideoElement:o,crossOrigin:n.crossOrigin})}({lastCameraStream:o,callback:r,webcamVideoElement:m,options:n})}}var F={utils:s,error:c,defaultOptions:m,createGIF:x,takeSnapShot:function(e,t){if(t=a.isFunction(e)?e:t,e=a.isObject(e)?e:{},a.isFunction(t)){var r=a.mergeOptions(u,e);x(a.mergeOptions(r,{interval:.1,numFrames:1,gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),t)}},stopVideoStreaming:k,isSupported:function(){return d.isValid()},isWebCamGIFSupported:f,isExistingVideoGIFSupported:function(e){var t=!1;if(a.isArray(e)&&e.length){if(a.each(e,function(e,r){a.isSupported.videoCodecs[r]&&(t=!0)}),!t)return!1}else if(a.isString(e)&&e.length&&!a.isSupported.videoCodecs[e])return!1;return d.isValid({getUserMedia:!0})},isExistingImagesGIFSupported:function(){return d.isValid({getUserMedia:!0})},VERSION:"0.4.5"};"function"==typeof define&&define.amd?define([],function(){return F}):"undefined"!=typeof exports?module.exports=F:e.gifshot=F}("undefined"!=typeof window?window:{},"undefined"!=typeof document?document:{createElement:function(){}},"undefined"!=typeof window?window.navigator:{});