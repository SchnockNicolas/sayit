webpackJsonp([1],{"/QYF":function(t,e){},"J/0g":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=(n("J/0g"),n("u2KI")),r=n.n(o),s=n("puH/")({}),a=n("//Fk"),u=n.n(a),d=n("ifoU"),c=n.n(d),h=n("fZjL"),l=n.n(h);function f(t,e){e||(e={});var n=void 0,i=new u.a(function(i,o){n=new XMLHttpRequest,"function"==typeof e.progress&&n.addEventListener("progress",function(t){t.lengthComputable?e.progress({loaded:t.loaded,total:t.total,percent:t.loaded/t.total,lengthComputable:!0}):e.progress({loaded:t.loaded,lengthComputable:!1})},!1);n.addEventListener("load",function(){if(200===n.status){var r=n.response;"json"===e.responseType&&"string"==typeof r&&(r=JSON.parse(r)),i(r)}else o("Unexpected status code "+n.status+" when calling "+t)},!1),n.addEventListener("error",function(){o("Failed to download "+t)},!1),n.addEventListener("abort",function(){o({cancelled:!0,message:"Cancelled download of "+t})},!1),n.open(e.method||"GET",t),e.responseType&&(n.responseType=e.responseType);e.headers&&l()(e.headers).forEach(function(t){n.setRequestHeader(t,e.headers[t])});"POST"===e.method?n.send(e.body):n.send(null)});return i.cancel=function(){n&&n.abort()},i}var v=n("RvPm");var p=function(t){var e,n=(e=new c.a,["0_z0123456789jqx.json","10_m.json","11_l.json","12_i.json","13_h.json","14_g.json","15_f.json","16_e.json","17_d.json","18_c.json","19_b.json","1_yk.json","20_a.json","2_w.json","3_vo.json","4_u.json","5_t.json","6_s.json","7_r.json","8_p.json","9_n.json"].forEach(function(t){for(var n=t.replace(/^\d\d?_/,"").replace(/\.json$/,""),i=0;i<n.length;++i){var o=n[i];e.set(o,t)}}),e),i=new c.a,o=new c.a,r=[],s=[],a=1,d=new c.a;return f(t+"count.json",{responseType:"json"}).then(function(t){t.forEach(function(t,e){t.forEach(function(t){d.set(t,e+2)})}),a=t.length+2}),{getRelated:function(t){var e=o.get(t.toLocaleLowerCase());return e?u.a.resolve(e):function(t){var e=t[0].toLocaleLowerCase();return i.get(e)?u.a.resolve([]):h(e).then(function(){return o.get(t.toLocaleLowerCase())||[]})}(t)},getSuggestion:function t(e){var n=e[0].toLocaleLowerCase(),o=i.get(n);return o?(o=v.go(e,s,{limit:10}),u.a.resolve(o.map(function(t){return{html:v.highlight(t,"<b>","</b>"),text:t.target}}))):h(n).then(function(){return t(e)})},getSize:function(t){return(d.get(t)||1)/a}};function h(e){var a=t+n.get(e);return console.log("download ",e),f(a,{responseType:"json"}).then(function(t){i.set(e,t),t.forEach(function(t){var e=t[0].toLocaleLowerCase();o.get(e)||(r.push(t[0]),o.set(e,t))}),s=r.map(function(t){return v.prepare(t)})})}}("https://anvaka.github.io/sayit-data/1/");function g(t,e,i){if(t=t&&t.trim()){t=t.toLocaleLowerCase();var o=!1,r=void 0,a=n("T/ob")();a.maxDepth=e;var u=[],d=0;return i.startDownload(),h(t),{dispose:function(){o=!0,r&&(r=null)},graph:a}}function c(){if(!o)if(0!==u.length){var t=u.shift();h(t),i.updateLayout(u.length,t)}else s.fire("graph-ready",a)}function h(t){(r=p.getRelated(t)).then(function(n){return function(t,n){t&&t.length||(t=[n]);i=t,o=i[0],r=a.getNode(o),r||(r=a.addNode(o,{depth:0,size:p.getSize(o)})),i.forEach(function(t,n){if(0!==n)if(a.hasNode(t))a.getLink(t,o)||a.getLink(o,t)||a.addLink(o,t);else{var i=r.data.depth+1;a.addNode(t,{depth:i,size:p.getSize(t)}),a.addLink(o,t),i<e&&u.push(t)}}),setTimeout(c,d);var i,o,r}(n,t)}).catch(function(e){var n="Failed to download "+t+"; Message: "+e;console.error(n),i.downloadError(n),c()})}}var y=n("Zrlr"),m=n.n(y),w=n("wxAW"),b=n.n(w),x=function(){function t(){m()(this,t),this.message="",this.phase="none",this.download={errors:[],remaining:0,currentWord:""},this.layout={iteration:0},this.working=!0}return b()(t,[{key:"startDownload",value:function(){this.phase="download"}},{key:"startLayout",value:function(){this.message="Finished download. Constructing layout...",this.phase="layout"}},{key:"setLayoutCompletion",value:function(t){"layout"===this.phase&&(this.message="Finished download. Constructing layout "+t+"%...")}},{key:"updateLayout",value:function(t,e){this.download.currentWord=e,this.download.remaining=t,this.message="Remaining: "+t+". Downloading "+e}},{key:"done",value:function(){this.working=!1}},{key:"downloadError",value:function(t){this.download.errors.push(t)}},{key:"reset",value:function(){this.phase="none",this.download.errors=[],this.download.remaining=0,this.download.currentWord="",this.layout.iteration=0,this.message="",this.working=!0}}]),t}(),_=n("3zJd")({query:""},{useSearch:!0}),k=void 0,S=_.get(),L={hasGraph:!1,maxDepth:S.maxDepth||2,progress:new x,graph:null,query:S.query};L.query&&E(L.query);var C=L;function E(t){return L.hasGraph=!0,L.progress.reset(),_.set("query",t),k&&k.dispose(),k=g(t,L.maxDepth,L.progress),L.graph=r()(k.graph),k.graph}_.onChange(function(t){L.query=t.query});var N=n("ONsM"),T=n.n(N),D=n("yBIK"),q=n.n(D),P=n("OvRC"),M=n.n(P),z="http://www.w3.org/2000/svg",j="http://www.w3.org/XML/1998/namespace";function F(t,e){"useFastTextMeasure"in(e=e||{})||(e.useFastTextMeasure=!1);var n={},i=M()(null),o="abcdefghijklmnopqrstuvwxyz",r={},s={1:.4951923076923077,.875:.43509615384615385,.833:.41346153846153844,.75:.3701923076923077,.5:.24459134615384615};return function(a,u){u<1&&(u=Math.round(1e3*u)/1e3);var d=a+u,c=n[d];if(c)return c;var h={};n[d]=h;var l=window.document.createElementNS(z,"text");return l.setAttributeNS(null,"font-size",u),l.setAttributeNS(j,"xml:space","preserve"),t.appendChild(l),h.words=a.split(/\s/).map(function(t){return{text:t,width:function(t){return e.useFastTextMeasure?function(t){var e=r[u];if(!e){l.textContent=o;var n=I(l);0==(e=n/o.length)&&(e=s[u]),r[u]=e}return e*t.length}(t):function(t){var e=t+u,n=i[e];if(void 0===n){if(l.textContent=t,0===(n=I(l))&&t.length>0){var o=s[u];if(void 0===o)throw new Error("Font size is not overriden for safari "+u);n=o*t.length}i[e]=n}return n}(t)}(t)}}),h.spaceWidth=(f="space"+u,v=r[f],v||(l.textContent=" ",v=I(l),r[f]=v),v),h.totalWidth=function(t,e){var n=0;return t.forEach(function(t){n+=t.width}),n+=(t.length-1)*e}(h.words,h.spaceWidth),t.removeChild(l),h;var f,v}}function I(t){return t.getBBox().width}var R=function(){function t(e,n){m()(this,t),this.x=e,this.y=n}return b()(t,[{key:"normalize",value:function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);0===t&&(t=1e-4),this.x/=t,this.y/=t}},{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"add",value:function(t){this.x+=t.x,this.y+=t.y}},{key:"sub",value:function(t){this.x-=t.x,this.y-=t.y}},{key:"div",value:function(t){this.x/=t,this.y/=t}},{key:"mult",value:function(t){this.x*=t,this.y*=t}},{key:"limit",value:function(t){var e=this.mag();e>t&&(this.x*=t/e,this.y*=t/e)}},{key:"distanceTo",value:function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}}],[{key:"sub",value:function(e,n){return new t(e.x-n.x,e.y-n.y)}},{key:"dist",value:function(t,e){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}}]),t}(),A=n("Tz9f")(45),W=function(){function t(e){m()(this,t),this.graph=e,this.boids=new c.a,this.neighbors=[]}return b()(t,[{key:"run",value:function(){var t=this,e=this.boids;e.forEach(function(n,i){var o=[];t.graph.forEachLinkedNode(i,function(t){var n=e.get(t.id);n&&o.push(n)}),n.run(o)})}},{key:"addBoid",value:function(t,e){this.boids.set(t,e),this.neighbors.push(e)}},{key:"setDesiredBoidPosition",value:function(t,e){var n=this.boids.get(t);n&&n.setDesiredPosition(e.x,e.y)}}]),t}(),Q=function(){function t(e,n){m()(this,t),this.acceleration=new R(0,0);var i=2*A.nextDouble()*Math.PI;this.velocity=new R(Math.cos(i),Math.sin(i)),this.position=new R(e,n),this.desiredPosition=new R(0,0),this.r=400,this.maxspeed=3,this.maxforce=.08}return b()(t,[{key:"run",value:function(t){this.flock(t),this.borders(),this.update()}},{key:"applyForce",value:function(t,e){t.div(e),this.acceleration.add(t)}},{key:"setDesiredPosition",value:function(t,e){this.desiredPosition.x=t,this.desiredPosition.y=e}},{key:"flock",value:function(t){var e=this.separate(t),n=this.align(t),i=this.cohesion(t),o=t.length||1;this.applyForce(e,o),this.applyForce(n,o),this.applyForce(i,o);var r=R.sub(this.desiredPosition,this.position);r.limit(.091),this.applyForce(r,o)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.velocity.limit(this.maxspeed),this.position.add(this.velocity),this.acceleration.mult(0)}},{key:"seek",value:function(t){var e=R.sub(t,this.position);e.normalize(),e.mult(this.maxspeed);var n=R.sub(e,this.velocity);return n.limit(1*this.maxforce),n}},{key:"borders",value:function(){}},{key:"separate",value:function(t){var e=this,n=new R(0,0,0),i=0;return t.forEach(function(t){var o=e.position.distanceTo(t.position);if(o>0&&o<40){var r=R.sub(e.position,t.position);r.normalize(),r.div(o),n.add(r),i++}}),i>0&&n.div(i),n.mag()>0&&(n.normalize(),n.mult(this.maxspeed),n.sub(this.velocity),n.limit(this.maxforce)),n}},{key:"align",value:function(t){var e=this,n=new R(0,0),i=0;if(t.forEach(function(t){var o=R.dist(e.position,t.position);o>0&&o<300&&(n.add(t.velocity),i++)}),i>0){n.div(i),n.normalize(),n.mult(this.maxspeed);var o=R.sub(n,this.velocity);return o.limit(this.maxforce),o}return new R(0,0)}},{key:"cohesion",value:function(t){var e=this,n=new R(0,0),i=0;return t.forEach(function(t){var o=R.dist(e.position,t.position);o>0&&o<300&&(n.add(t.position),i++)}),i>0?(n.div(i),this.seek(n)):new R(0,0)}}]),t}(),G=n("Tz9f");var H=n("AMV0"),V=n.n(H),$=n("lHA8"),B=n.n($),J=n("c/Tr"),O=n.n(J),U=n("bsNR"),K=n.n(U),Y=n("TbF0"),Z=n("T/ob"),X=n.n(Z);function tt(t,e,n){n.addLink(t,e)}var et=n("T/ob");var nt=n("Tz9f"),it=function t(e,n){m()(this,t),this.from=e,this.to=n};function ot(t,e){var n=[],i=(e=e||{}).canMove||rt,o=e.pullX||!1,r=e.pullY||!1;if(!(t.size<2)){if(2!==t.size){t.forEach(function(t){var e=[t.cx,t.cy];e.id=t.id,n.push(e)});var s=0,a=function(t){var e=Y.a.from(t).triangles,n=X()();t.forEach(function(t){n.addNode(t.id,t)});for(var i=e.length;i;){var o=t[e[--i]],r=t[e[--i]],s=t[e[--i]];tt(o.id,r.id,n),tt(r.id,s.id,n),tt(s.id,o.id,n)}return n}(n);a.forEachLink(function(t){var e=c(t.fromId),n=c(t.toId),i=function(t,e){if(f(t,e)){var n=function(t,e){var n=t.cx-e.cx,i=t.cy-e.cy;return Math.sqrt(n*n+i*i)}(t,e),i=l(t,e);return-(i-1)*n}return function(t,e){if(f(t,e))return 0;var n=0,i=0;t.right<e.left?n=e.right-t.left:e.right<t.left&&(n=t.left-e.right);t.top<e.bottom?i=e.bottom-t.top:e.top<t.bottom&&(i=t.bottom-e.top);return Math.sqrt(n*n+i*i)}(t,e)}(e,n);t.data=i});var u=K()(a,function(t){return t.data}).map(function(t){return new it(c(t.fromId),c(t.toId))});nt.randomIterator(u).shuffle();return u.length>0&&function(t){var e=t.getGraph(),n=new B.a;!function t(i){if(n.has(i))return;n.add(i);var o=c(i);e.forEachLinkedNode(i,function(e){if(!n.has(e.id)){var i=c(e.id);h(o,i),t(e.id)}})}(t.getRootId())}(function(t){var e=et();t.forEach(function(t){e.addLink(t.from.id,t.to.id)});var n=t[0].from.id;return{getGraph:function(){return e},getRootId:function(){return n},get:function(t){return e.gentNode(t)}}}(u)),s}var d=O()(t).map(function(t){return t[1]});h(d[0],d[1])}function c(e){return t.get(e)}function h(t,e){if(f(t,e)){var n=l(t,e),o=e.cx-t.cx,r=e.cy-t.cy;V()(n)||(n=1,o=.001,r=-.001),i(e.id)?(e.cx=t.cx+n*o,e.cy=t.cy+n*r):(t.cx=e.cx-n*o,t.cy=e.cy-n*r),s+=Math.sqrt(n*n*(o*o+r*r))}}function l(t,e){var n=Math.abs(t.cx-e.cx),i=Math.abs(t.cy-e.cy),o=(t.width+e.width)/2,r=(t.height+e.height)/2;return Math.min(o/n,r/i)}function f(t,e){return!!o||(t.left>e.right||e.left>t.right?o:!(t.top>e.bottom||e.top>t.bottom)||r)}}function rt(){return!0}var st=n("woOf"),at=n.n(st),ut=function(){function t(e){if(m()(this,t),at()(this,e),!dt(this.left))throw new Error("Left is wrong");if(!dt(this.top))throw new Error("top is wrong");if(!dt(this.width))throw new Error("width is wrong");if(!dt(this.height))throw new Error("height is wrong")}return b()(t,[{key:"inflate",value:function(t){this.left+=t*this.width/2,this.top+=t*this.height/2,this.width*=t,this.height*=t}},{key:"right",get:function(){return this.left+this.width}},{key:"bottom",get:function(){return this.top+this.height}},{key:"cx",get:function(){return this.left+this.width/2},set:function(t){this.left=t-this.width/2}},{key:"cy",get:function(){return this.top+this.height/2},set:function(t){this.top=t-this.height/2}}]),t}();function dt(t){return!!V()(t)}var ct=n("puH/"),ht=n("a5rm"),lt=1,ft=2,vt=3,pt=4;function gt(t,e){t.maxDepth;var n=ht(t,{springLength:20,springCoeff:.002,gravity:-1.2,theta:.8,dragCoeff:.02,timeStep:14,nodeMass:function(e){var n=t.getLinks(e),i=n?n.length:1,o=t.getNode(e);i*=3*o.data.size;var r=e.length*i;return r||1}}),i=function(t){var e=new c.a,n=G(42),i=new W(t);return{addNode:o,getNodePosition:function(t){var n=e.get(t);return n||(n=o(t)),n.position},setDesiredNodePosition:function(t,e){i.setDesiredBoidPosition(t,e)},step:function(){i.run()}};function o(t){var o={x:1e3*(n.nextDouble()-.5),y:1e3*(n.nextDouble()-.5)},r=new Q(o.x,o.y);return i.addBoid(t,r),e.set(t,r),r}}(t),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=0,o=0;return{step:function(){o+=1},getNodePosition:function(r){i=function(t){return t*(2-t)}(o/n);var s=t.getNodePosition(r),a=e.getNodePosition(r);return{x:s.x*(1-i)+a.x*i,y:s.y*(1-i)+a.y*i}},done:function(){return o>n}}}(i,n),r=!1,s=0,a=0,u=2e3,d=2e3,h=lt,l=new c.a,f=ct({step:function(){if(!r||s<u){h=lt;var c=window.performance.now();i.step();do{n.step(),s+=1}while(window.performance.now()-c<10);(a+=window.performance.now()-c)>d&&(s=u);var l=Math.min(1,Math.max(a/d,s/u));return t.forEachNode(function(t){var e=n.getNodePosition(t.id);i.setDesiredNodePosition(t.id,e)}),e.setLayoutCompletion(Math.round(100*l)),s>=u&&(h=vt),!0}if(h===vt)return function(){var t=v(),e=0,i=0;do{var o=ot(t);i=Math.abs(o-e),e=o}while(i>1);t.forEach(function(t,e){n.setNodePosition(e,t.left-t.dx,t.top-t.dy)})}(),h=ft,!0;if(h===ft)return o.step(),o.done()&&(h=pt,f.fire("ready",f)),!0;return!1},pinNode:function(t){n.pinNode(t,!0)},getNodePosition:function(t){if(h===lt||h===vt)return i.getNodePosition(t);if(h===pt)return n.getNodePosition(t);if(h===ft)return o.getNodePosition(t)},addNode:function(t,e){i.addNode(t,e),l.set(t,e)},setGraphReady:function(){s=0,a=0,r=!0},getGraphReady:function(){return r}});return f;function v(){var t=new c.a;return l.forEach(function(e,i){var o=n.getNodePosition(i),r=e.width,s=e.height,a=new ut({id:i,left:o.x+e.x,top:o.y+e.y,dx:e.x,dy:e.y,width:r,height:s});t.set(i,a)}),t}}var yt=n("1RWG"),mt=n("Tz9f")(42);var wt=n("1RWG");function bt(t){var e=document.querySelector("#scene"),n=e.querySelector("#nodes"),i=e.querySelector("#edges"),o=0,r=0,a=void 0,u=q()(e),d={left:-500,right:500,top:-500,bottom:500};u.showRectangle(d);var h=new c.a,l=void 0,f=void 0,v=0,p=void 0,g=F(e);return s.on("graph-ready",k),{render:function(e){E(),(l=gt(f=e,t)).on("ready",C),h=new c.a,f.forEachNode(P),f.on("changed",L),cancelAnimationFrame(v),v=requestAnimationFrame(S)},dispose:function(){E(),s.off("graph-ready",k)}};function y(t){var e=t.target;if(n.contains(e)){var i=x(e);s.fire("show-subreddit",i),_("hovered"),_("emphasized");var o=h.get(i);o.classList.add("hovered"),o.classList.add("emphasized"),f.forEachLinkedNode(i,function(t,e){var n=h.get(t.id);n.classList.add("hovered"),b(n);var i=p.getLinkInfo(e.id);if(i){var o=i.ui;o.classList.add("hovered"),b(o)}}),b(o)}}function m(t){var e=t.target;n.contains(e)&&(t.stopPropagation(),w(t))}function w(t){var e=t.target;if(n.contains(e)){var i=x(e);i&&(s.fire("new-search",i),u.showRectangle(d))}}function b(t){var e=t.parentNode;e.removeChild(t),e.appendChild(t)}function x(t){for(;t;){if(t.classList.contains("node"))return t.id;t=t.parentNode}}function _(t){var n=e.querySelectorAll("."+t);if(n)for(var i=0;i<n.length;++i)n[i].classList.remove(t)}function k(e){e===f&&(l.setGraphReady(),t.startLayout())}function S(){l.step()&&(v=requestAnimationFrame(S)),h.forEach(function(t,e){var n=M(e);t.attr("transform","translate("+n.x+", "+n.y+")")})}function L(t){t.forEach(function(t){"add"===t.changeType&&t.node&&P(t.node)})}function C(){t.done(),p=function(t,e,n){var i=new c.a,o=new c.a,r=[],s=20,a=t.maxDepth;t.forEachLink(function(t){r.push(t)}),r.sort(function(t,e){return d(t)-d(e)});var u=requestAnimationFrame(function t(){for(;o.size<s&&r.length>0;){var e=r.pop(),n=Math.round(Math.abs(30*mt.gaussian()))+1;o.set(e.id,h(e,n))}o.forEach(function(t,e){t.step(),t.isDone&&o.delete(e)}),(r.length>0||o.size>0)&&(u=requestAnimationFrame(t))});return{getLinkInfo:function(t){return i.get(t)},dispose:function(){u&&(cancelAnimationFrame(u),u=null)}};function d(e){var n=t.getNode(e.fromId).data,i=t.getNode(e.toId).data,o=(n.depth+i.depth)/2;return(a-o)/a}function h(t,o){var r=0,s=e.getNodePosition(t.fromId),a=e.getNodePosition(t.toId),u=d(t),c=8*u+2,h=Math.round(125*(1-u)+75),l={step:function(){var e=function(t){return t*(2-t)}(r/o),u=s.x*(1-e)+a.x*e,d=s.y*(1-e)+a.y*e,f=i.get(t.id),v="M"+s.x+","+s.y+" L"+u+","+d;if(f)f.ui.attr("d",v);else{var p=yt("path",{id:t.id,"stroke-width":c,fill:"black",stroke:"rgb("+h+", "+h+", "+h+")",d:v});n.appendChild(p),i.set(t.id,{ui:p,link:t})}(r+=1)>o&&(l.isDone=!0)},isDone:!1};return l}}(f,l,i),document.addEventListener("click",y),document.addEventListener("dblclick",m,!0),document.addEventListener("touchend",N),u.on("pan",T)}function E(){D(n),D(i),document.removeEventListener("click",y),document.removeEventListener("dblclick",m,!0),document.removeEventListener("touchend",N),u.off("pan",T),l&&l.off("ready",C),f&&f.off("changed",L),p&&p.dispose()}function N(t){var e=new Date,n=e-r,i=e-o;r=e,clearTimeout(a),i<500||(n<300?w(t):a=setTimeout(function(){return y(t)},320))}function T(){o=new Date}function D(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function P(t){var e=1.2*t.data.size,i=M(t.id);0===t.data.depth&&l.pinNode(t);var o=function(t,e){var n=24*e+12,i=g(t,n),o=i.totalWidth+6*i.spaceWidth,r=1.6*n;return{fontSize:n,width:o,height:r,x:-o/2,y:-r/2,rx:15*e+2,ry:15*e+2,px:-o/2+3*i.spaceWidth,py:-r/2+1.1*n,strokeWidth:4*e+1}}(t.id,e);l.addNode(t.id,o);var r={x:o.x,y:o.y,width:o.width,height:o.height,rx:o.rx,ry:o.ry,fill:"white","stroke-width":o.strokeWidth,stroke:"#aaa"},s={"font-size":o.fontSize,x:o.px,y:o.py},a=wt("rect",r),u=wt("text",s);u.text(t.id);var d=wt("g",{class:"node",id:t.id,transform:"translate("+i.x+", "+i.y+")"});d.appendChild(a),d.appendChild(u),n.appendChild(d),h.set(t.id,d)}function M(t){return l.getNodePosition(t)}}var xt={mounted:function(){var t=this;this.closeHandler=function(e){27===e.keyCode&&(e.preventDefault(),t.close())},document.addEventListener("keyup",this.closeHandler)},beforeDestroy:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{close:function(){this.$emit("close")}}},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"background absolute",on:{click:function(e){return e.preventDefault(),t.close(e)}}}),t._v(" "),n("div",{staticClass:"content"},[n("h3",[t._v("\n      Related subreddits\n      "),n("a",{staticClass:"close bold highlight",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("close")])]),t._v(" "),n("p",[t._v("This website shows you a graph of related subreddits for any given one")]),t._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:"https://i.imgur.com/1dJiwRC.png",alt:"Related Subreddits"}}),t._v(" "),n("p",[t._v('\n      The relationship is determined by a metric "users who posted to this subreddit also post to...".\n      Under the hood I\'m using Jaccard Similarity to determine degree of similarity.\n    ')]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("I hope you like it! Please let me know.")]),t._v(" "),t._m(1),t._v(" "),n("a",{staticClass:"large-close bold highlight",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("close")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("\n        Find the source code\n        "),n("a",{staticClass:"highlight",attrs:{href:"http://github.com/anvaka/sayit"}},[t._v("on GitHub.")])]),t._v(" "),n("li",[t._v("\n        Stay tuned for updates on\n        "),n("a",{staticClass:"highlight",attrs:{href:"https://twitter.com/anvaka"}},[t._v("Twitter.")])]),t._v(" "),n("li",[n("a",{staticClass:"highlight",attrs:{href:"https://www.patreon.com/anvaka"}},[t._v("Support me on Patreon")]),t._v(" .\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("With passion,\n      "),e("br"),this._v("Anvaka\n    ")])}]};var kt={props:{readonly:{default:!1},placeholder:{default:"Type here"},getSuggestions:{default:function(t){return t.split()}},query:{default:""},delay:{default:80}},data:function(){return{currentSelected:-1,showSuggestions:!1,showLoading:!1,loadingError:null,suggestions:[],currentQuery:this.query}},watch:{query:function(t){this.currentQuery=t}},methods:{refresh:function(){this.showSuggestions&&this.getSuggestionsInternal()},hideSuggestions:function(){this.showSuggestions=!1,this.showLoading=!1,this.pendingKeyToShow=!0},showIfNeeded:function(t){this.pendingKeyToShow||(this.showSuggestions=t)},focus:function(){this.$refs.input.focus()},pickCurrentText:function(){this.pickSuggestion({text:this.currentQuery})},pickSuggestion:function(t){this.currentQuery=t.text,this.hideSuggestions(),this.$emit("selected",this.currentQuery)},getSuggestionsInternal:function(){var t=this;t.previous&&window.clearTimeout(t.previous),t.currentQuery?t.previous=window.setTimeout(function(){t.previous=null;var e=t.currentQuery,n=t.getSuggestions(e);if(Array.isArray(n))t.suggestions=n.map(function(t){return{selected:!1,text:t.text,html:t.html}}),t.currentSelected=-1,t.showIfNeeded(n&&n.length>0);else{if(!n)throw new Error("Could not parse suggestions response");t.loadingError=null,t.showLoading=!0,n.then(function(e){t.showLoading=!1,e=e||[],t.suggestions=e.map(function(t){return{selected:!1,text:t.text,html:t.html}}),t.currentSelected=-1,t.showIfNeeded(e&&e.length>0)},function(e){t.loadingError=e})}},t.delay):this.showSuggestions=!1},cycleTheList:function(t){var e=this.suggestions,n=this.currentSelected;this.pendingKeyToShow=!1;var i=void 0;if(38===t.which)i=-1;else if(40===t.which)i=1;else{if(13===t.which)return e[n]?this.pickSuggestion(e[n]):this.pickSuggestion({text:this.currentQuery}),void t.preventDefault();27===t.which&&this.hideSuggestions()}i&&0!==e.length&&(t.preventDefault(),n>=0&&(this.suggestions[n].selected=!1),(n+=i)<0&&(n=e.length-1),n>=e.length&&(n=0),this.suggestions[n].selected=!0,this.currentSelected=n)}}},St={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ak-typeahead"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQuery,expression:"currentQuery"}],ref:"input",attrs:{autofocus:"",readonly:t.readonly,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",placeholder:t.placeholder},domProps:{value:t.currentQuery},on:{input:[function(e){e.target.composing||(t.currentQuery=e.target.value)},t.getSuggestionsInternal],keydown:t.cycleTheList}}),t._v(" "),t.currentQuery?n("a",{staticClass:"search-submit",attrs:{type:"submit",href:"#"},on:{click:function(e){return e.preventDefault(),t.pickCurrentText(e)}}},[t._v("Go")]):t._e(),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions"},t._l(t.suggestions,function(e,i){return n("li",{key:i},[n("a",{staticClass:"suggestion",class:{selected:e.selected},attrs:{href:"#"},domProps:{innerHTML:t._s(e.html)},on:{click:function(n){n.preventDefault(),t.pickSuggestion(e)}}})])})):t._e(),t._v(" "),t.showLoading?n("ul",{staticClass:"suggestions"},[n("li",{staticClass:"searching"},[t.loadingError?t._e():n("span",[t._v("Searching...")]),t._v(" "),t.loadingError?n("div",{staticClass:"loading-error"},[n("div",[t._v("Failed to get reddit completions:")]),t._v(" "),n("pre",[t._v(t._s(t.loadingError))])]):t._e()])]):t._e()])},staticRenderFns:[]};var Lt={name:"App",data:function(){return{aboutVisible:!1,subreddit:null,appState:C,tooltip:{text:"",x:"",y:""}}},components:{About:n("VU/8")(xt,_t,!1,function(t){n("/QYF")},null,null).exports,Typeahead:n("VU/8")(kt,St,!1,function(t){n("ZPPh")},null,null).exports,Subreddit:T.a},computed:{isLoading:function(){return C.progress.working}},methods:{doSearch:function(t){C.query=t,this.onSubmit()},getSuggestions:function(t){return p.getSuggestion(t)},onSubmit:function(){if(C.query){E(C.query),this.renderer.render(C.graph);var t=document.querySelector(":focus");t&&t.blur()}},showSubreddit:function(t){this.subreddit=t}},mounted:function(){this.renderer=bt(C.progress),s.on("show-subreddit",this.showSubreddit),s.on("new-search",this.doSearch),C.graph&&this.renderer.render(C.graph)},beforeDestroy:function(){s.off("show-subreddit",this.showSubreddit),s.off("new-search",this.doSearch)}},Ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("form",{staticClass:"search-box",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("typeahead",{attrs:{placeholder:"Enter subreddit name","ref:typeahead":"",query:t.appState.query,"get-suggestions":t.getSuggestions},on:{selected:t.doSearch}})],1),t._v(" "),t.isLoading?t._e():n("div",{staticClass:"help"},[t._v("\n    The graph of related subreddits\n    "),n("a",{staticClass:"highlight",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.aboutVisible=!0}}},[t._v("Learn more.")])]),t._v(" "),t.isLoading?n("div",{staticClass:"help"},[t._v(t._s(t.appState.progress.message))]):t._e(),t._v(" "),n("div",{staticClass:"about-line"},[n("a",{staticClass:"about-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.aboutVisible=!0}}},[t._v("about")]),t._v(" "),n("a",{staticClass:"bold",attrs:{href:"http://github.com/anvaka/say-it"}},[t._v("source code")])]),t._v(" "),t.aboutVisible?n("about",{on:{close:function(e){t.aboutVisible=!1}}}):t._e(),t._v(" "),t.appState.hasGraph?t._e():n("div",{staticClass:"welcome"},[n("h3",[t._v("Welcome!")]),t._v(" "),n("p",[t._v("\n      This website renders graph of related subreddits.\n      "),n("a",{staticClass:"highlight",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.aboutVisible=!0}}},[t._v("Click here")]),t._v(" to learn more, or\n      "),n("a",{staticClass:"highlight",attrs:{href:"?query=math"}},[t._v("try demo")]),t._v(".\n    ")])]),t._v(" "),n("div",{ref:"tooltip",staticClass:"tooltip"},[t._v(t._s(t.tooltip.text))]),t._v(" "),t.subreddit?n("subreddit",{staticClass:"preview",attrs:{name:t.subreddit}}):t._e(),t._v(" "),t.subreddit?n("div",{staticClass:"close-container"},[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.subreddit=null}}},[t._v("close")])]):t._e()],1)},staticRenderFns:[]};var Et=n("VU/8")(Lt,Ct,!1,function(t){n("Ym20")},null,null).exports;i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:Et},template:"<App/>"})},Ym20:function(t,e){},ZPPh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b63d0be4d024c66aa03a.js.map