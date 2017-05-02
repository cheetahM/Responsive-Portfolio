var h,k=this,m=function(a,b){a=a.split(".");var c=k;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.G=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];
return b.prototype[c].apply(a,d)}};var p=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,p);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};n(p,Error);var ba=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},q=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},r=function(a,b){return a<b?-1:a>b?1:0};var t=function(a,b){b.unshift(a);p.call(this,ba.apply(null,b));b.shift()};n(t,p);var u=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new t(""+e,f||[]);},v=function(a,b,c){a||u("",null,b,Array.prototype.slice.call(arguments,2))},w=function(a,b,c){"number"==typeof a||u("Expected number but got %s: %s.",[aa(a),a],b,Array.prototype.slice.call(arguments,2));return a};var x=function(a){return Array.prototype.concat.apply([],arguments)},ca=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var z;a:{var A=k.navigator;if(A){var B=A.userAgent;if(B){z=B;break a}}z=""}var C=function(a){return-1!=z.indexOf(a)};var ea=function(a,b){var c=da;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var fa=C("Opera"),D=C("Trident")||C("MSIE"),ga=C("Edge"),F=C("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),G=-1!=z.toLowerCase().indexOf("webkit")&&!C("Edge"),ha=G&&C("Mobile"),H=function(){var a=k.document;return a?a.documentMode:void 0},I;
a:{var J="",K=function(){var a=z;if(F)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ga)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(G)return/WebKit\/(\S+)/.exec(a);if(fa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();K&&(J=K?K[1]:"");if(D){var L=H();if(null!=L&&L>parseFloat(J)){I=String(L);break a}}I=J}
var ia=I,da={},ja=function(a){ea(a,function(){for(var b=0,c=q(String(ia)).split("."),d=q(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=r(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||r(0==g[2].length,0==l[2].length)||r(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})},ka;var la=k.document;
ka=la&&D?H()||("CSS1Compat"==la.compatMode?parseInt(ia,10):5):void 0;var M;if(!(M=!F&&!D)){var N;if(N=D)N=9<=Number(ka);M=N}M||F&&ja("1.9.1");D&&ja("9");var ma=C("Safari")&&!((C("Chrome")||C("CriOS"))&&!C("Edge")||C("Coast")||C("Opera")||C("Edge")||C("Silk")||C("Android"))&&!(C("iPhone")&&!C("iPod")&&!C("iPad")||C("iPad")||C("iPod"));var oa=function(a){var b=window;if(ha&&ma&&a){a.focus();var c=0,d=null,d=a.setInterval(function(){b.closed||5==c?(a.clearInterval(d),na(b)):(b.close(),c++)},150)}else b.close(),na(b)},na=function(a){if(!a.closed&&a.document&&a.document.body)if(a=a.document.body,v(null!=a,"goog.dom.setTextContent expects a non-null value for node"),"textContent"in a)a.textContent="Please close this window.";else if(3==a.nodeType)a.data="Please close this window.";else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=
a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data="Please close this window."}else{for(var b;b=a.firstChild;)a.removeChild(b);v(a,"Node cannot be null or undefined.");a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode("Please close this window."))}};var qa="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},O=function(){};O.prototype.next=function(){throw qa;};O.prototype.D=function(){return this};var Q=function(a,b){this.i={};this.c=[];this.B=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};Q.prototype.j=function(){R(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.i[this.c[b]]);return a};Q.prototype.s=function(){R(this);return this.c.concat()};Q.prototype.m=function(a){return S(this.i,a)};
Q.prototype.remove=function(a){return S(this.i,a)?(delete this.i[a],this.b--,this.B++,this.c.length>2*this.b&&R(this),!0):!1};var R=function(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];S(a.i,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],S(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};h=Q.prototype;h.get=function(a,b){return S(this.i,a)?this.i[a]:b};
h.set=function(a,b){S(this.i,a)||(this.b++,this.c.push(a),this.B++);this.i[a]=b};h.addAll=function(a){var b;if(a instanceof Q)b=a.s(),a=a.j();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};h.forEach=function(a,b){for(var c=this.s(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Q(this)};
h.D=function(a){R(this);var b=0,c=this.B,d=this,e=new O;e.next=function(){if(c!=d.B)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw qa;var e=d.c[b++];return a?e:d.i[e]};return e};var S=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ra=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,sa=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var T=function(a,b){this.o=this.A=this.l="";this.w=null;this.u=this.v="";this.g=this.F=!1;var c;a instanceof T?(this.g=void 0!==b?b:a.g,ta(this,a.l),c=a.A,U(this),this.A=c,c=a.o,U(this),this.o=c,ua(this,a.w),c=a.v,U(this),this.v=c,va(this,a.h.clone()),a=a.u,U(this),this.u=a):a&&(c=String(a).match(ra))?(this.g=!!b,ta(this,c[1]||"",!0),a=c[2]||"",U(this),this.A=V(a),a=c[3]||"",U(this),this.o=V(a,!0),ua(this,c[4]),a=c[5]||"",U(this),this.v=V(a,!0),va(this,c[6]||"",!0),a=c[7]||"",U(this),this.u=V(a)):
(this.g=!!b,this.h=new W(null,0,this.g))};T.prototype.toString=function(){var a=[],b=this.l;b&&a.push(X(b,wa,!0),":");var c=this.o;if(c||"file"==b)a.push("//"),(b=this.A)&&a.push(X(b,wa,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.w,null!=c&&a.push(":",String(c));if(c=this.v)this.o&&"/"!=c.charAt(0)&&a.push("/"),a.push(X(c,"/"==c.charAt(0)?xa:ya,!0));(c=this.h.toString())&&a.push("?",c);(c=this.u)&&a.push("#",X(c,za));return a.join("")};
T.prototype.clone=function(){return new T(this)};var ta=function(a,b,c){U(a);a.l=c?V(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))},ua=function(a,b){U(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.w=b}else a.w=null},va=function(a,b,c){U(a);b instanceof W?(a.h=b,a.h.C(a.g)):(c||(b=X(b,Aa)),a.h=new W(b,0,a.g))};T.prototype.removeParameter=function(a){U(this);this.h.remove(a);return this};var U=function(a){if(a.F)throw Error("Tried to modify a read-only Uri");};
T.prototype.C=function(a){this.g=a;this.h&&this.h.C(a);return this};
var V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},X=function(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,Ba),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ba=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},wa=/[#\/\?@]/g,ya=/[\#\?:]/g,xa=/[\#\?]/g,Aa=/[\#\?@]/g,za=/#/g,W=function(a,b,c){this.b=this.a=null;this.f=a||null;this.g=!!c},Y=function(a){a.a||(a.a=new Q,a.b=0,a.f&&sa(a.f,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,
" ")),c)}))};h=W.prototype;h.add=function(a,b){Y(this);this.f=null;a=Z(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b=w(this.b)+1;return this};h.remove=function(a){Y(this);a=Z(this,a);return this.a.m(a)?(this.f=null,this.b=w(this.b)-this.a.get(a).length,this.a.remove(a)):!1};h.m=function(a){Y(this);a=Z(this,a);return this.a.m(a)};h.s=function(){Y(this);for(var a=this.a.j(),b=this.a.s(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.j=function(a){Y(this);var b=[];if("string"==typeof a)this.m(a)&&(b=x(b,this.a.get(Z(this,a))));else{a=this.a.j();for(var c=0;c<a.length;c++)b=x(b,a[c])}return b};h.set=function(a,b){Y(this);this.f=null;a=Z(this,a);this.m(a)&&(this.b=w(this.b)-this.a.get(a).length);this.a.set(a,[b]);this.b=w(this.b)+1;return this};h.get=function(a,b){a=a?this.j(a):[];return 0<a.length?String(a[0]):b};
h.toString=function(){if(this.f)return this.f;if(!this.a)return"";for(var a=[],b=this.a.s(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.j(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.f=a.join("&")};h.clone=function(){var a=new W;a.f=this.f;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};var Z=function(a,b){b=String(b);a.g&&(b=b.toLowerCase());return b};
W.prototype.C=function(a){a&&!this.g&&(Y(this),this.f=null,this.a.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),this.remove(b),0<a.length&&(this.f=null,this.a.set(Z(this,b),ca(a)),this.b=w(this.b)+a.length))},this));this.g=a};var Ca=function(a){a=new T(a);var b="&"+window.name;U(a);a.h.set(b,!0);b=a.h.j("parent");a.removeParameter("parent");1==b.length&&(b=gadgets.rpc.getOrigin(String(b[0])),U(a),a.h.set("parent",b));a.removeParameter("&"+window.name);return a.toString()},Da=function(a,b,c,d,e,f,g){if(!d||!d.document.domain)return!1;var l=Ca(String(d.document.location.href));if(l.substr(0,c.length)!=c)return!1;c=gadgets.util.getUrlParameters(l);if(!b||!c.parent||b!=gadgets.rpc.getOrigin(String(c.parent)))return!1;if(!e)return m("oauth2callbackUrl",
a),d.oauth2verify.call(d,String(window.name),g)?!0:!1;d.oauth2callback.call(d,a);try{f()}catch(y){}return!0},Ea=function(){try{return window.parent!=window}catch(a){}return!0},Fa=function(){try{return!!window.opener}catch(a){}return!0},Ha=function(a,b,c,d,e){try{var f=Ea(),g=!f&&Fa(),l=!0,y=null,P=function(){l&&oa(y)};if(!f&&!g)return;var l=(g||!f)&&"keep_open"!==e,y=g?window.opener:window.parent,pa=Ca(b);try{var E;if(d&&(E=y.frames[d],Da(a,c,pa,E,!g,P,e)))return;for(b=0;b<y.frames.length;++b)if(E=
y.frames[b],Da(a,c,pa,E,!g,P,e)){l=!1;break}}catch(Ga){}}catch(Ga){}P()};
m("postmessage.onLoad",function(){var a="true"==document.getElementById("error").value,b=document.getElementById("origin").value,c=document.getElementById("response-form-encoded").value,d=document.getElementById("relay-endpoint").value,e=null,f=document.getElementById("proxy");f&&f.value&&(e=f.value);var g=document.getElementById("after-redirect"),f=null;g&&g.value&&(f=g.value);window.name="pmh"+String(2147483647*shindig.random()|0);g=document.createElement("div");b=gadgets.rpc.getOrigin(b);a=b+(a?
"?":"#")+c;c=null;e&&(c=e);e=void 0;f&&(e=f);g.appendChild(document.createTextNode(a));g.setAttribute("id","postmessage-hello");Ha(a,d,b,c,e)});m("postmessage.closePopup",function(){var a=null;try{var b=Ea(),c=!b&&Fa();if(!b&&!c)return;a=c?window.opener:window.parent}catch(d){}oa(a)});
