(function(e){function n(n){for(var c,a,o=n[0],i=n[1],h=n[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(d.length)d.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(c=!1)}c&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},u={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2c1b519c":"f2fcb520","chunk-2d0a3381":"1a6692f5","chunk-2d0a38e7":"73562d97","chunk-2d0b2cf6":"eb630b6e","chunk-2d0c9177":"d9136428","chunk-2d0cf6f4":"edd36ce4","chunk-2d0d7249":"689540c7","chunk-2d0e1b22":"8b373613","chunk-2d0e1f80":"4496dcf9","chunk-2d0e4ad9":"bb8cd014","chunk-2d0e6507":"3fa99c5c","chunk-2d20ff33":"583ce721","chunk-2d217668":"f0cb38a9","chunk-2d2221f7":"0ef24951","chunk-2d22b955":"2c7ad5c5","chunk-2d22ce59":"95616a55","chunk-2d23051f":"1fbf137e","chunk-2d238608":"e2caa9fc","chunk-3a5efbcd":"1c9307a3","chunk-784cb9b9":"ebcf3958","chunk-8aedb640":"343e35bd","chunk-daa409ca":"33a20d8f","chunk-fb1810e0":"8e685e2f"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-8aedb640":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2c1b519c":"31d6cfe0","chunk-2d0a3381":"31d6cfe0","chunk-2d0a38e7":"31d6cfe0","chunk-2d0b2cf6":"31d6cfe0","chunk-2d0c9177":"31d6cfe0","chunk-2d0cf6f4":"31d6cfe0","chunk-2d0d7249":"31d6cfe0","chunk-2d0e1b22":"31d6cfe0","chunk-2d0e1f80":"31d6cfe0","chunk-2d0e4ad9":"31d6cfe0","chunk-2d0e6507":"31d6cfe0","chunk-2d20ff33":"31d6cfe0","chunk-2d217668":"31d6cfe0","chunk-2d2221f7":"31d6cfe0","chunk-2d22b955":"31d6cfe0","chunk-2d22ce59":"31d6cfe0","chunk-2d23051f":"31d6cfe0","chunk-2d238608":"31d6cfe0","chunk-3a5efbcd":"31d6cfe0","chunk-784cb9b9":"31d6cfe0","chunk-8aedb640":"6727a74a","chunk-daa409ca":"31d6cfe0","chunk-fb1810e0":"31d6cfe0"}[e]+".css",u=i.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],f=h.getAttribute("data-href");if(f===c||f===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],l.parentNode.removeChild(l),t(r)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=r);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var d=new Error;h=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,t[1](d)}u[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var l=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("85ec"),a=t.n(c);a.a},"2e0d":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]})],1)},u=[],r={name:"App",components:{}},o=r,i=(t("034f"),t("2877")),h=Object(i["a"])(o,a,u,!1,null,null,null),f=h.exports,d=(t("2e0d"),t("76a0")),l=t.n(d),p=(t("aa35"),t("8c4f"));c["default"].use(p["a"]);var s=p["a"].prototype.push;p["a"].prototype.push=function(e){return s.call(this,e).catch((function(e){return e}))};var m=[{path:"/",name:"home",component:function(e){return t.e("chunk-daa409ca").then(function(){var n=[t("37f9")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"贵州文化和旅游志愿服务"}},{path:"/activityNews",name:"activityNews",component:function(e){return t.e("chunk-2d0e4ad9").then(function(){var n=[t("90f2")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"活动快讯"}},{path:"/activityNewsDetail",name:"activityNewsDetail",component:function(e){return t.e("chunk-2d0e6507").then(function(){var n=[t("97e8")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"活动快讯"}},{path:"/recruitFile",name:"recruitFile",component:function(e){return t.e("chunk-2d238608").then(function(){var n=[t("feb5")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"政策文件"}},{path:"/recruitFileDetail",name:"recruitFileDetail",component:function(e){return t.e("chunk-2d0e1b22").then(function(){var n=[t("7c11")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"活动快讯"}},{path:"/mine",name:"mine",component:function(e){return t.e("chunk-fb1810e0").then(function(){var n=[t("98cf")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"我的"}},{path:"/login",name:"login",component:function(e){return t.e("chunk-2d23051f").then(function(){var n=[t("ec7b")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"登录"}},{path:"/forgetPsw",name:"forgetPsw",component:function(e){return t.e("chunk-2d22b955").then(function(){var n=[t("f01f")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"忘记密码"}},{path:"/register",name:"register",component:function(e){return t.e("chunk-2d217668").then(function(){var n=[t("c720")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"忘记密码"}},{path:"/setting",name:"setting",component:function(e){return t.e("chunk-2c1b519c").then(function(){var n=[t("f675")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"设置"}},{path:"/changeEmail",name:"changeEmail",component:function(e){return t.e("chunk-2d20ff33").then(function(){var n=[t("b68a")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"更换邮箱号码"}},{path:"/changeNum",name:"changeNum",component:function(e){return t.e("chunk-2d0a38e7").then(function(){var n=[t("034b")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"更换手机绑定"}},{path:"/modifyPsw",name:"modifyPsw",component:function(e){return t.e("chunk-2d0e1f80").then(function(){var n=[t("7d63")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"修改密码"}},{path:"/question",name:"question",component:function(e){return t.e("chunk-2d0d7249").then(function(){var n=[t("760d")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"常见问答"}},{path:"/advice",name:"advice",component:function(e){return t.e("chunk-2d0b2cf6").then(function(){var n=[t("2662")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"意见反馈"}},{path:"/search",name:"search",component:function(e){return t.e("chunk-2d0a3381").then(function(){var n=[t("00f1")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"搜索"}},{path:"/recruit",name:"recruit",component:function(e){return t.e("chunk-2d2221f7").then(function(){var n=[t("ccef")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"活动招募"}},{path:"/recruitDetail",name:"recruitDetail",component:function(e){return t.e("chunk-2d22ce59").then(function(){var n=[t("f4d9")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"活动招募"}},{path:"/userNotice",name:"userNotice",component:function(e){return t.e("chunk-2d0cf6f4").then(function(){var n=[t("6466")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"志愿服务须知"}},{path:"/infoConfirm",name:"infoConfirm",component:function(e){return t.e("chunk-8aedb640").then(function(){var n=[t("9324")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"确认信息"}},{path:"/rankingList",name:"rankingList",component:function(e){return t.e("chunk-2d0c9177").then(function(){var n=[t("5853")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"志愿排行"}},{path:"/footermark",name:"footermark",component:function(e){return t.e("chunk-784cb9b9").then(function(){var n=[t("5ac0")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"足迹"}},{path:"/footermarkAdd",name:"footermarkAdd",component:function(e){return t.e("chunk-3a5efbcd").then(function(){var n=[t("cd1d")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"发布"}}],b=new p["a"]({mode:"hash",base:"demo/zyz-h5",routes:m}),k=b,v=t("7876"),y=t.n(v),g=t("b970");t("157a");c["default"].use(g["a"]),c["default"].use(y.a),c["default"].use(l.a),c["default"].config.productionTip=!1,new c["default"]({router:k,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.a33dcf3d.js.map