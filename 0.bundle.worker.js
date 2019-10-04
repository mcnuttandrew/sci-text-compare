!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i=n(2),r=n(1);addEventListener("message",function(t){for(var e=t.data.nodes,n=t.data.links,o=(0,i.forceSimulation)(e).force("link",(0,i.forceLink)().distance(10).links(n).id(function(t){return t.sentenceIdx})).force("center",(0,i.forceCenter)(r.WAFFLE_WIDTH/2,r.WAFFLE_HEIGHT/2)).force("collide",(0,i.forceCollide)().radius(function(t){return 8}).iterations(2)).force("charge",(0,i.forceManyBody)().strength(-30)).stop(),a=0,l=Math.ceil(Math.log(o.alphaMin())/Math.log(1-o.alphaDecay()));a<l;++a)postMessage({type:"tick",progress:a/l}),o.tick();postMessage({type:"end",nodes:e,links:n})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.files=[{name:"Goethe",filePrefix:"Goethe"},{name:"De Candolle 1 (DC1)",filePrefix:"DC1"},{name:"De Candolle 2 (DC2)",filePrefix:"DC2"},{name:"De Candolle 3 (DC3)",filePrefix:"DC3"}],e.COLORS=Object.entries({Romantic:"#62ACFF",Classical:"#00B318",Empirical:"#FFFF03",Inductive:"#BA00B4",Deductive:"#80FF00","Rational/Speculative":"#FFA2E1","Rational, Speculative":"#FFA2E1","Rational-Speculative":"#FFA2E1",Analogical:"#FF0011",Methodological:"#A9FFD2","Historical/Descriptive":"#1100FF","Historical, Descriptive":"#1100FF","Historical, descriptive":"#1100FF",Historical:"#1100FF","Philosophical, epistemological":"#CC99FF","Philosophical definition":"#CC99FF",Philosophical:"#CC99FF","Metaphorical/Visual":"#FFAE5C","metaphorical, visual":"#FFAE5C",Metaphorical:"#FFAE5C","Metaphorical-Agency to nature":"#9F5103","Metaphors attributing agency to nature":"#9F5103","agency to nature":"#9F5103","Future/Utility":"#FF007F","Future, Utility":"#FF007F","Future-Utility":"#FF007F","Classificatory/definition":"#666600","Classificatory definition":"#666600",Classificatory:"#666600",Numerical:"#000000","Writing aim/direction":"#808080","Writing aim, direction":"#808080","Writing direction":"#808080","Blank statement":"#FFFFFF",Blank:"#FFFFFF"}).reduce(function(t,e){var n=i(e,2),r=n[0],o=n[1];return t[r.toLowerCase()]=o,t},{}),e.COLORS_FOR_LEGEND=[{label:"Romantic",tag:"(Rom)",color:"#62ACFF"},{label:"Classical",tag:"(Clas)",color:"#00B318"},{label:"Empirical",tag:"(Emp)",color:"#FFFF03"},{label:"Inductive",tag:"(Induc)",color:"#BA00B4"},{label:"Deductive",tag:"(Deduc)",color:"#80FF00"},{label:"Rational/Speculative",tag:"(Ratio)",color:"#FFA2E1"},{label:"Analogical",tag:"(Anlg)",color:"#FF0011"},{label:"Methodological",tag:"(Method)",color:"#A9FFD2"},{label:"Historical/Descriptive",tag:"(Hist)",color:"#1100FF"},{label:"Philosophical definition",tag:"(Phil)",color:"#CC99FF"},{label:"Metaphorical/Visual",tag:"(Metaph)",color:"#FFAE5C"},{label:"Metaphors attributing agency to nature",tag:"(Agncy)",color:"#9F5103"},{label:"Future/Utility",tag:"(Fut)",color:"#FF007F"},{label:"Classificatory",tag:"(Clsf)",color:"#666600"},{label:"Numerical",tag:"(Num)",color:"#000000"},{label:"Writing aim/direction",tag:"(Wr)",color:"#808080"},{label:"Blank statement",tag:"(Bl)",color:"#FFFFFF"}],e.categoryRelationships=[{cat:"Empirical",superCat:"Descriptive"},{cat:"Historical",superCat:"Descriptive"},{cat:"Classificatory",superCat:"Descriptive"},{cat:"Numerical",superCat:"Descriptive"},{cat:"Philosophical",superCat:"Characterizing"},{cat:"Methodological",superCat:"Characterizing"},{cat:"Classical",superCat:"Characterizing"},{cat:"Romantic",superCat:"Characterizing"},{cat:"Rational-Speculative",superCat:"Logical"},{cat:"Inductive",superCat:"Logical"},{cat:"Deductive",superCat:"Logical"},{cat:"Analogical",superCat:"Logical"},{cat:"Metaphorical",superCat:"Decorative"},{cat:"Metaphorical-Agency to nature",superCat:"Decorative"},{cat:"Future-Utility",superCat:"Persuasive"},{cat:"Writing direction",superCat:"Persuasive"},{cat:"Blank",superCat:"NA"}].map(function(t){return{cat:t.cat,superCat:""}}),e.DESCRIPTIONS={Goethe:{fullName:"Goethe, Metamorphosis of Plants",description:"This work was originally published in 1790, but was translated into French only in 1829. After the famous public debate between the two leading French naturalists Georges Cuvier and Étienne Geoffroy Saint-Hilaire on the theories of animal structures and the methods and philosophies behind them, Goethe’s work was put in the spotlight, and was published in a French-German edition in 1831.\n    In this work, Goethe described plant growth in terms of serial homology, where a plant organ went through transformations (cotyledons, stem leaves, calyx, corolla, stamen, fruit, etc.) by alternately contracting and expanding its form. Goethe designated the leaf as the protean organ, or the Archetype of all the variations of plant forms. (The image to the right: the Archetypal plant as imagined by P. J. F. Turpin, 1837.) He considered these potential forms as equal in value—there was no hierarchy between the “regular” and “irregular” forms, which was a main disagreement between Goethe and De Candolle."},DC1:{fullName:"De Candolle, Essai sur les propriétés médicales des plantes (1804)",description:"De Candolle’s goal in this work was to assert his Theory of Analogy, which argued that there was continuity between plant forms and properties. However, this theory asked one to look beyond the immediately visible plant forms because analogous plants could produce various effects while some non-analogous plants could produce similar effects on human. Instead, one had to distinguish which plant properties and structures were normative or accidental, as well as consider the modes in which plants produced their effects.\n    De Candolle promised that this theory would help get rid of the apparent anomalies and re-classify them correctly according to the natural order, which would benefit the practical uses of plant medicines, especially in the colonial world.\n    Although he argued that the environment could modify plant forms and properties and create the apparent anomalies, De Candolle remained silent, unlike Goethe or Saint-Hilaire, on the historical and evolutionary implications that these anomalies could offer."},DC2:{fullName:"De Candolle, Essai élémentaire de géographie botanique (1820)",description:"The topic of this text is “botanical geography,” which De Candolle defined as the “methodical study of facts relating to the distribution of plants on the globe,” and of the “general laws that can be deduced from them.” De Candolle made a firm distinction between “habitation (countries in which plants grow)” and “station (topographic nature of localities in which plants usually grow)” because he viewed the confusion between the two has prevented botanists from making the correct, natural classification of plants.\n    This text is filled with empirical observations and statistical information to support De Candolle’s point that certain external factors (ex. amount of light, soil type, competition with local plants, etc.) and combinations of these factors have determined the distribution of plant species. As for the question of from where and how plants have originally spread throughout the world, he speculated that an ancient deluge must have occurred to transport species to unlikely regions, thereby implying his rejection of the idea of plant evolution from earlier species."},DC3:{fullName:"De Candolle, Organographie végétale, Book V, Chapter II (1827)",description:"This is the most important text for the comparison between Goethe’s and De Candolle’s botany because it explains the key concepts of the primitive type and symmetry, which are similar to Goethe’s morphological concepts. In fact, Goethe considered this chapter important enough that he translated it into German himself.\n    Unlike other two texts by De Candolle, this text hardly contains empirical information because it focuses on the concepts and the methodology, philosophy, and history behind them. His concept of symmetry, or the “non-geometrical regularity of organized bodies,” was roughly equivalent to Goethe’s concept of plant type, and served as the normative form that could undergo modifications, or “degenerations” (the term which Goethe disliked,) resulting in diverse plant forms in the present world.\n    De Candolle strongly identified with René-Just Haüy’s method for crystallography. He also mentioned and acknowledged the similarity between Goethe’s and his own morphological views, but criticized Goethe’s ideas as being too general without enough facts."}},e.TARGET_WIDTH=10,e.WAFFLE_WIDTH=600,e.WAFFLE_HEIGHT=450},function(t,e,n){"use strict";n.r(e);var i=function(t,e){var n;function i(){var i,r,o=n.length,a=0,l=0;for(i=0;i<o;++i)a+=(r=n[i]).x,l+=r.y;for(a=a/o-t,l=l/o-e,i=0;i<o;++i)(r=n[i]).x-=a,r.y-=l}return null==t&&(t=0),null==e&&(e=0),i.initialize=function(t){n=t},i.x=function(e){return arguments.length?(t=+e,i):t},i.y=function(t){return arguments.length?(e=+t,i):e},i};function r(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,o,a,l,s,u,c,h,f,d=t._root,p={data:i},y=t._x0,g=t._y0,v=t._x1,m=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((u=e>=(o=(y+v)/2))?y=o:v=o,(c=n>=(a=(g+m)/2))?g=a:m=a,r=d,!(d=d[h=c<<1|u]))return r[h]=p,t;if(l=+t._x.call(null,d.data),s=+t._y.call(null,d.data),e===l&&n===s)return p.next=d,r?r[h]=p:t._root=p,t;do{r=r?r[h]=new Array(4):t._root=new Array(4),(u=e>=(o=(y+v)/2))?y=o:v=o,(c=n>=(a=(g+m)/2))?g=a:m=a}while((h=c<<1|u)==(f=(s>=a)<<1|l>=o));return r[f]=d,r[h]=p,t}var o=function(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r};function a(t){return t[0]}function l(t){return t[1]}function s(t,e,n){var i=new u(null==e?a:e,null==n?l:n,NaN,NaN,NaN,NaN);return null==t?i:i.addAll(t)}function u(t,e,n,i,r,o){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function c(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var h=s.prototype=u.prototype;h.copy=function(){var t,e,n=new u(this._x,this._y,this._x0,this._y0,this._x1,this._y1),i=this._root;if(!i)return n;if(!i.length)return n._root=c(i),n;for(t=[{source:i,target:n._root=new Array(4)}];i=t.pop();)for(var r=0;r<4;++r)(e=i.source[r])&&(e.length?t.push({source:e,target:i.target[r]=new Array(4)}):i.target[r]=c(e));return n},h.add=function(t){var e=+this._x.call(null,t),n=+this._y.call(null,t);return r(this.cover(e,n),e,n,t)},h.addAll=function(t){var e,n,i,o,a=t.length,l=new Array(a),s=new Array(a),u=1/0,c=1/0,h=-1/0,f=-1/0;for(n=0;n<a;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(l[n]=i,s[n]=o,i<u&&(u=i),i>h&&(h=i),o<c&&(c=o),o>f&&(f=o));if(u>h||c>f)return this;for(this.cover(u,c).cover(h,f),n=0;n<a;++n)r(this,l[n],s[n],t[n]);return this},h.cover=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,o=(i=Math.floor(e))+1;else{for(var a,l,s=r-n,u=this._root;n>t||t>=r||i>e||e>=o;)switch(l=(e<i)<<1|t<n,(a=new Array(4))[l]=u,u=a,s*=2,l){case 0:r=n+s,o=i+s;break;case 1:n=r-s,o=i+s;break;case 2:r=n+s,i=o-s;break;case 3:n=r-s,i=o-s}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=i,this._x1=r,this._y1=o,this},h.data=function(){var t=[];return this.visit(function(e){if(!e.length)do{t.push(e.data)}while(e=e.next)}),t},h.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},h.find=function(t,e,n){var i,r,a,l,s,u,c,h=this._x0,f=this._y0,d=this._x1,p=this._y1,y=[],g=this._root;for(g&&y.push(new o(g,h,f,d,p)),null==n?n=1/0:(h=t-n,f=e-n,d=t+n,p=e+n,n*=n);u=y.pop();)if(!(!(g=u.node)||(r=u.x0)>d||(a=u.y0)>p||(l=u.x1)<h||(s=u.y1)<f))if(g.length){var v=(r+l)/2,m=(a+s)/2;y.push(new o(g[3],v,m,l,s),new o(g[2],r,m,v,s),new o(g[1],v,a,l,m),new o(g[0],r,a,v,m)),(c=(e>=m)<<1|t>=v)&&(u=y[y.length-1],y[y.length-1]=y[y.length-1-c],y[y.length-1-c]=u)}else{var x=t-+this._x.call(null,g.data),w=e-+this._y.call(null,g.data),_=x*x+w*w;if(_<n){var F=Math.sqrt(n=_);h=t-F,f=e-F,d=t+F,p=e+F,i=g.data}}return i},h.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var e,n,i,r,o,a,l,s,u,c,h,f,d=this._root,p=this._x0,y=this._y0,g=this._x1,v=this._y1;if(!d)return this;if(d.length)for(;;){if((u=o>=(l=(p+g)/2))?p=l:g=l,(c=a>=(s=(y+v)/2))?y=s:v=s,e=d,!(d=d[h=c<<1|u]))return this;if(!d.length)break;(e[h+1&3]||e[h+2&3]||e[h+3&3])&&(n=e,f=h)}for(;d.data!==t;)if(i=d,!(d=d.next))return this;return(r=d.next)&&delete d.next,i?(r?i.next=r:delete i.next,this):e?(r?e[h]=r:delete e[h],(d=e[0]||e[1]||e[2]||e[3])&&d===(e[3]||e[2]||e[1]||e[0])&&!d.length&&(n?n[f]=d:this._root=d),this):(this._root=r,this)},h.removeAll=function(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this},h.root=function(){return this._root},h.size=function(){var t=0;return this.visit(function(e){if(!e.length)do{++t}while(e=e.next)}),t},h.visit=function(t){var e,n,i,r,a,l,s=[],u=this._root;for(u&&s.push(new o(u,this._x0,this._y0,this._x1,this._y1));e=s.pop();)if(!t(u=e.node,i=e.x0,r=e.y0,a=e.x1,l=e.y1)&&u.length){var c=(i+a)/2,h=(r+l)/2;(n=u[3])&&s.push(new o(n,c,h,a,l)),(n=u[2])&&s.push(new o(n,i,h,c,l)),(n=u[1])&&s.push(new o(n,c,r,a,h)),(n=u[0])&&s.push(new o(n,i,r,c,h))}return this},h.visitAfter=function(t){var e,n=[],i=[];for(this._root&&n.push(new o(this._root,this._x0,this._y0,this._x1,this._y1));e=n.pop();){var r=e.node;if(r.length){var a,l=e.x0,s=e.y0,u=e.x1,c=e.y1,h=(l+u)/2,f=(s+c)/2;(a=r[0])&&n.push(new o(a,l,s,h,f)),(a=r[1])&&n.push(new o(a,h,s,u,f)),(a=r[2])&&n.push(new o(a,l,f,h,c)),(a=r[3])&&n.push(new o(a,h,f,u,c))}i.push(e)}for(;e=i.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this},h.x=function(t){return arguments.length?(this._x=t,this):this._x},h.y=function(t){return arguments.length?(this._y=t,this):this._y};var f=function(t){return function(){return t}},d=function(){return 1e-6*(Math.random()-.5)};function p(t){return t.x+t.vx}function y(t){return t.y+t.vy}var g=function(t){var e,n,i=1,r=1;function o(){for(var t,o,l,u,c,h,f,g=e.length,v=0;v<r;++v)for(o=s(e,p,y).visitAfter(a),t=0;t<g;++t)l=e[t],h=n[l.index],f=h*h,u=l.x+l.vx,c=l.y+l.vy,o.visit(m);function m(t,e,n,r,o){var a=t.data,s=t.r,p=h+s;if(!a)return e>u+p||r<u-p||n>c+p||o<c-p;if(a.index>l.index){var y=u-a.x-a.vx,g=c-a.y-a.vy,v=y*y+g*g;v<p*p&&(0===y&&(v+=(y=d())*y),0===g&&(v+=(g=d())*g),v=(p-(v=Math.sqrt(v)))/v*i,l.vx+=(y*=v)*(p=(s*=s)/(f+s)),l.vy+=(g*=v)*p,a.vx-=y*(p=1-p),a.vy-=g*p)}}}function a(t){if(t.data)return t.r=n[t.data.index];for(var e=t.r=0;e<4;++e)t[e]&&t[e].r>t.r&&(t.r=t[e].r)}function l(){if(e){var i,r,o=e.length;for(n=new Array(o),i=0;i<o;++i)r=e[i],n[r.index]=+t(r,i,e)}}return"function"!=typeof t&&(t=f(null==t?1:+t)),o.initialize=function(t){e=t,l()},o.iterations=function(t){return arguments.length?(r=+t,o):r},o.strength=function(t){return arguments.length?(i=+t,o):i},o.radius=function(e){return arguments.length?(t="function"==typeof e?e:f(+e),l(),o):t},o};function v(t){return t.index}function m(t,e){var n=t.get(e);if(!n)throw new Error("missing: "+e);return n}var x=function(t){var e,n,i,r,o,a=v,l=function(t){return 1/Math.min(r[t.source.index],r[t.target.index])},s=f(30),u=1;function c(i){for(var r=0,a=t.length;r<u;++r)for(var l,s,c,h,f,p,y,g=0;g<a;++g)s=(l=t[g]).source,h=(c=l.target).x+c.vx-s.x-s.vx||d(),f=c.y+c.vy-s.y-s.vy||d(),h*=p=((p=Math.sqrt(h*h+f*f))-n[g])/p*i*e[g],f*=p,c.vx-=h*(y=o[g]),c.vy-=f*y,s.vx+=h*(y=1-y),s.vy+=f*y}function h(){if(i){var l,s,u=i.length,c=t.length,h=new Map(i.map((t,e)=>[a(t,e,i),t]));for(l=0,r=new Array(u);l<c;++l)(s=t[l]).index=l,"object"!=typeof s.source&&(s.source=m(h,s.source)),"object"!=typeof s.target&&(s.target=m(h,s.target)),r[s.source.index]=(r[s.source.index]||0)+1,r[s.target.index]=(r[s.target.index]||0)+1;for(l=0,o=new Array(c);l<c;++l)s=t[l],o[l]=r[s.source.index]/(r[s.source.index]+r[s.target.index]);e=new Array(c),p(),n=new Array(c),y()}}function p(){if(i)for(var n=0,r=t.length;n<r;++n)e[n]=+l(t[n],n,t)}function y(){if(i)for(var e=0,r=t.length;e<r;++e)n[e]=+s(t[e],e,t)}return null==t&&(t=[]),c.initialize=function(t){i=t,h()},c.links=function(e){return arguments.length?(t=e,h(),c):t},c.id=function(t){return arguments.length?(a=t,c):a},c.iterations=function(t){return arguments.length?(u=+t,c):u},c.strength=function(t){return arguments.length?(l="function"==typeof t?t:f(+t),p(),c):l},c.distance=function(t){return arguments.length?(s="function"==typeof t?t:f(+t),y(),c):s},c},w={value:function(){}};function _(){for(var t,e=0,n=arguments.length,i={};e<n;++e){if(!(t=arguments[e]+"")||t in i)throw new Error("illegal type: "+t);i[t]=[]}return new F(i)}function F(t){this._=t}function b(t,e){for(var n,i=0,r=t.length;i<r;++i)if((n=t[i]).name===e)return n.value}function C(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=w,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}F.prototype=_.prototype={constructor:F,on:function(t,e){var n,i=this._,r=function(t,e){return t.trim().split(/^|\s+/).map(function(t){var n="",i=t.indexOf(".");if(i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}(t+"",i),o=-1,a=r.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++o<a;)if(n=(t=r[o]).type)i[n]=C(i[n],t.name,e);else if(null==e)for(n in i)i[n]=C(i[n],t.name,null);return this}for(;++o<a;)if((n=(t=r[o]).type)&&(n=b(i[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new F(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,i,r=new Array(n),o=0;o<n;++o)r[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,n=(i=this._[t]).length;o<n;++o)i[o].value.apply(e,r)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};var A,N,M=_,D=0,k=0,E=0,P=1e3,G=0,T=0,H=0,I="object"==typeof performance&&performance.now?performance:Date,O="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function S(){return T||(O(R),T=I.now()+H)}function R(){T=0}function q(){this._call=this._time=this._next=null}function z(t,e,n){var i=new q;return i.restart(t,e,n),i}function j(){T=(G=I.now())+H,D=k=0;try{!function(){S(),++D;for(var t,e=A;e;)(t=T-e._time)>=0&&e._call.call(null,t),e=e._next;--D}()}finally{D=0,function(){var t,e,n=A,i=1/0;for(;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:A=e);N=t,B(i)}(),T=0}}function L(){var t=I.now(),e=t-G;e>P&&(H-=e,G=t)}function B(t){D||(k&&(k=clearTimeout(k)),t-T>24?(t<1/0&&(k=setTimeout(j,t-I.now()-H)),E&&(E=clearInterval(E))):(E||(G=I.now(),E=setInterval(L,P)),D=1,O(j)))}q.prototype=z.prototype={constructor:q,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?S():+n)+(null==e?0:+e),this._next||N===this||(N?N._next=this:A=this,N=this),this._call=t,this._time=n,B()},stop:function(){this._call&&(this._call=null,this._time=1/0,B())}};function W(t){return t.x}function U(t){return t.y}var V=10,J=Math.PI*(3-Math.sqrt(5)),X=function(t){var e,n=1,i=.001,r=1-Math.pow(i,1/300),o=0,a=.6,l=new Map,s=z(c),u=M("tick","end");function c(){h(),u.call("tick",e),n<i&&(s.stop(),u.call("end",e))}function h(i){var s,u,c=t.length;void 0===i&&(i=1);for(var h=0;h<i;++h)for(n+=(o-n)*r,l.forEach(function(t){t(n)}),s=0;s<c;++s)null==(u=t[s]).fx?u.x+=u.vx*=a:(u.x=u.fx,u.vx=0),null==u.fy?u.y+=u.vy*=a:(u.y=u.fy,u.vy=0);return e}function f(){for(var e,n=0,i=t.length;n<i;++n){if((e=t[n]).index=n,null!=e.fx&&(e.x=e.fx),null!=e.fy&&(e.y=e.fy),isNaN(e.x)||isNaN(e.y)){var r=V*Math.sqrt(n),o=n*J;e.x=r*Math.cos(o),e.y=r*Math.sin(o)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}function d(e){return e.initialize&&e.initialize(t),e}return null==t&&(t=[]),f(),e={tick:h,restart:function(){return s.restart(c),e},stop:function(){return s.stop(),e},nodes:function(n){return arguments.length?(t=n,f(),l.forEach(d),e):t},alpha:function(t){return arguments.length?(n=+t,e):n},alphaMin:function(t){return arguments.length?(i=+t,e):i},alphaDecay:function(t){return arguments.length?(r=+t,e):+r},alphaTarget:function(t){return arguments.length?(o=+t,e):o},velocityDecay:function(t){return arguments.length?(a=1-t,e):1-a},force:function(t,n){return arguments.length>1?(null==n?l.delete(t):l.set(t,d(n)),e):l.get(t)},find:function(e,n,i){var r,o,a,l,s,u=0,c=t.length;for(null==i?i=1/0:i*=i,u=0;u<c;++u)(a=(r=e-(l=t[u]).x)*r+(o=n-l.y)*o)<i&&(s=l,i=a);return s},on:function(t,n){return arguments.length>1?(u.on(t,n),e):u.on(t)}}},Y=function(){var t,e,n,i,r=f(-30),o=1,a=1/0,l=.81;function u(i){var r,o=t.length,a=s(t,W,U).visitAfter(h);for(n=i,r=0;r<o;++r)e=t[r],a.visit(p)}function c(){if(t){var e,n,o=t.length;for(i=new Array(o),e=0;e<o;++e)n=t[e],i[n.index]=+r(n,e,t)}}function h(t){var e,n,r,o,a,l=0,s=0;if(t.length){for(r=o=a=0;a<4;++a)(e=t[a])&&(n=Math.abs(e.value))&&(l+=e.value,s+=n,r+=n*e.x,o+=n*e.y);t.x=r/s,t.y=o/s}else{(e=t).x=e.data.x,e.y=e.data.y;do{l+=i[e.data.index]}while(e=e.next)}t.value=l}function p(t,r,s,u){if(!t.value)return!0;var c=t.x-e.x,h=t.y-e.y,f=u-r,p=c*c+h*h;if(f*f/l<p)return p<a&&(0===c&&(p+=(c=d())*c),0===h&&(p+=(h=d())*h),p<o&&(p=Math.sqrt(o*p)),e.vx+=c*t.value*n/p,e.vy+=h*t.value*n/p),!0;if(!(t.length||p>=a)){(t.data!==e||t.next)&&(0===c&&(p+=(c=d())*c),0===h&&(p+=(h=d())*h),p<o&&(p=Math.sqrt(o*p)));do{t.data!==e&&(f=i[t.data.index]*n/p,e.vx+=c*f,e.vy+=h*f)}while(t=t.next)}}return u.initialize=function(e){t=e,c()},u.strength=function(t){return arguments.length?(r="function"==typeof t?t:f(+t),c(),u):r},u.distanceMin=function(t){return arguments.length?(o=t*t,u):Math.sqrt(o)},u.distanceMax=function(t){return arguments.length?(a=t*t,u):Math.sqrt(a)},u.theta=function(t){return arguments.length?(l=t*t,u):Math.sqrt(l)},u},K=function(t,e,n){var i,r,o,a=f(.1);function l(t){for(var a=0,l=i.length;a<l;++a){var s=i[a],u=s.x-e||1e-6,c=s.y-n||1e-6,h=Math.sqrt(u*u+c*c),f=(o[a]-h)*r[a]*t/h;s.vx+=u*f,s.vy+=c*f}}function s(){if(i){var e,n=i.length;for(r=new Array(n),o=new Array(n),e=0;e<n;++e)o[e]=+t(i[e],e,i),r[e]=isNaN(o[e])?0:+a(i[e],e,i)}}return"function"!=typeof t&&(t=f(+t)),null==e&&(e=0),null==n&&(n=0),l.initialize=function(t){i=t,s()},l.strength=function(t){return arguments.length?(a="function"==typeof t?t:f(+t),s(),l):a},l.radius=function(e){return arguments.length?(t="function"==typeof e?e:f(+e),s(),l):t},l.x=function(t){return arguments.length?(e=+t,l):e},l.y=function(t){return arguments.length?(n=+t,l):n},l},Q=function(t){var e,n,i,r=f(.1);function o(t){for(var r,o=0,a=e.length;o<a;++o)(r=e[o]).vx+=(i[o]-r.x)*n[o]*t}function a(){if(e){var o,a=e.length;for(n=new Array(a),i=new Array(a),o=0;o<a;++o)n[o]=isNaN(i[o]=+t(e[o],o,e))?0:+r(e[o],o,e)}}return"function"!=typeof t&&(t=f(null==t?0:+t)),o.initialize=function(t){e=t,a()},o.strength=function(t){return arguments.length?(r="function"==typeof t?t:f(+t),a(),o):r},o.x=function(e){return arguments.length?(t="function"==typeof e?e:f(+e),a(),o):t},o},Z=function(t){var e,n,i,r=f(.1);function o(t){for(var r,o=0,a=e.length;o<a;++o)(r=e[o]).vy+=(i[o]-r.y)*n[o]*t}function a(){if(e){var o,a=e.length;for(n=new Array(a),i=new Array(a),o=0;o<a;++o)n[o]=isNaN(i[o]=+t(e[o],o,e))?0:+r(e[o],o,e)}}return"function"!=typeof t&&(t=f(null==t?0:+t)),o.initialize=function(t){e=t,a()},o.strength=function(t){return arguments.length?(r="function"==typeof t?t:f(+t),a(),o):r},o.y=function(e){return arguments.length?(t="function"==typeof e?e:f(+e),a(),o):t},o};n.d(e,"forceCenter",function(){return i}),n.d(e,"forceCollide",function(){return g}),n.d(e,"forceLink",function(){return x}),n.d(e,"forceManyBody",function(){return Y}),n.d(e,"forceRadial",function(){return K}),n.d(e,"forceSimulation",function(){return X}),n.d(e,"forceX",function(){return Q}),n.d(e,"forceY",function(){return Z})}]);