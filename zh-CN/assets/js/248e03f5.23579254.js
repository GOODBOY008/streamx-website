(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8932],{2711:function(e){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=(i(n(1)),n(6)),a=i(r),l=i(n(7)),c=i(n(8)),u=i(n(9)),s=i(n(10)),d=i(n(11)),m=i(n(14)),f=[],p=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return f=(0,d.default)(f,g),(0,s.default)(f,g.once),f},v=function(){f=(0,m.default)(),b()},h=function(){f.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},k=function(e){g=o(g,e),f=(0,m.default)();var t=document.all&&!window.atob;return y(g.disable)||t?h():(g.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),"DOMContentLoaded"===g.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===g.startEvent?window.addEventListener(g.startEvent,(function(){b(!0)})):document.addEventListener(g.startEvent,(function(){b(!0)})),window.addEventListener("resize",(0,l.default)(b,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(b,g.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,s.default)(f,g.once)}),g.throttleDelay)),g.disableMutationObserver||c.default.ready("[data-aos]",v),f)};e.exports={init:k,refresh:b,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=g,i=b;return g=b=void 0,j=t,h=e.apply(i,n)}function r(e){return j=e,y=setTimeout(s,t),O?i(e):h}function a(e){var n=t-(e-k);return _?x(n,v-(e-j)):n}function c(e){var n=e-k;return void 0===k||n>=t||n<0||_&&e-j>=v}function s(){var e=U();return c(e)?d(e):void(y=setTimeout(s,a(e)))}function d(e){return y=void 0,E&&g?i(e):(g=b=void 0,h)}function m(){void 0!==y&&clearTimeout(y),j=0,g=k=b=y=void 0}function f(){return void 0===y?h:d(U())}function p(){var e=U(),n=c(e);if(g=arguments,b=this,k=e,n){if(void 0===y)return r(k);if(_)return y=setTimeout(s,t),i(k)}return void 0===y&&(y=setTimeout(s,t)),h}var g,b,v,h,y,k,j=0,O=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(u);return t=l(t)||0,o(n)&&(O=!!n.leading,v=(_="maxWait"in n)?w(l(n.maxWait)||0,t):v,E="trailing"in n?!!n.trailing:E),p.cancel=m,p.flush=f,p}function i(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return o(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function o(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function a(e){return"symbol"==(void 0===e?"undefined":c(e))||r(e)&&k.call(e)==d}function l(e){if("number"==typeof e)return e;if(a(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=p.test(e);return n||g.test(e)?b(e.slice(2),n?2:8):f.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",s=NaN,d="[object Symbol]",m=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=v||h||Function("return this")(),k=Object.prototype.toString,w=Math.max,x=Math.min,U=function(){return y.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=g,i=b;return g=b=void 0,j=t,h=e.apply(i,n)}function r(e){return j=e,y=setTimeout(s,t),O?o(e):h}function l(e){var n=t-(e-U);return _?w(n,v-(e-j)):n}function u(e){var n=e-U;return void 0===U||n>=t||n<0||_&&e-j>=v}function s(){var e=x();return u(e)?d(e):void(y=setTimeout(s,l(e)))}function d(e){return y=void 0,E&&g?o(e):(g=b=void 0,h)}function m(){void 0!==y&&clearTimeout(y),j=0,g=U=b=y=void 0}function f(){return void 0===y?h:d(x())}function p(){var e=x(),n=u(e);if(g=arguments,b=this,U=e,n){if(void 0===y)return r(U);if(_)return y=setTimeout(s,t),o(U)}return void 0===y&&(y=setTimeout(s,t)),h}var g,b,v,h,y,U,j=0,O=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,i(n)&&(O=!!n.leading,v=(_="maxWait"in n)?k(a(n.maxWait)||0,t):v,E="trailing"in n?!!n.trailing:E),p.cancel=m,p.flush=f,p}function i(e){var t=void 0===e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==(void 0===e?"undefined":l(e))}function r(e){return"symbol"==(void 0===e?"undefined":l(e))||o(e)&&y.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||p.test(e)?g(e.slice(2),n?2:8):m.test(e)?u:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,b="object"==(void 0===t?"undefined":l(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,h=b||v||Function("return this")(),y=Object.prototype.toString,k=Math.max,w=Math.min,x=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function r(e,t){var n=window.document,o=new(i())(a);l=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return l()}))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){};t.default={isSupported:o,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=i();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!l.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,r){n(e,o+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(12)),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(13)),r=function(e,t){var n=0,i=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(i=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(i=t),n+i};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(7294),o=n(2389);function r(e){let{children:t,fallback:n}=e;return(0,o.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},3808:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var i=n(7294),o=n(1262),r=n(2389),a=n(4996);const l=JSON.parse('{"zh-CN":{"common":{"ourUsers":"\u6211\u4eec\u7684\u7528\u6237","tip":"\u8bf8\u591a\u516c\u53f8\u548c\u7ec4\u7ec7\u5c06 StreamPark \u7528\u4e8e\u7814\u7a76\u3001\u751f\u4ea7\u548c\u5546\u4e1a\u4ea7\u54c1\u4e2d<br/> \u5982\u679c\u60a8\u4e5f\u5728\u4f7f\u7528 ? <a href=\\"https://github.com/apache/incubator-streampark/issues/163\\" target=\\"_blank\\" rel=\\"noopener\\"><u>\u53ef\u4ee5\u5728\u8fd9\u91cc\u6dfb\u52a0</u></a>"}},"en":{"common":{"ourUsers":"Our Users","tip":"Various companies and organizations use StreamPark for research, production and commercial products.<br/> Are you using this project ? <a href=\\"https://github.com/apache/incubator-streampark/issues/163\\" target=\\"_blank\\" rel=\\"noopener\\"><u>you can add your company</u></a>"}}}'),c=JSON.parse('[{"imgUrl":"tencent.png","linkid":"1221793407"},{"imgUrl":"baidu.png","linkid":"919051523"},{"imgUrl":"china-unicon.png","linkid":"1110504908"},{"imgUrl":"yto.png","linkid":"1139312118"},{"imgUrl":"zto.png","linkid":"1698698427"},{"imgUrl":"ziroom.png","linkid":"1139258870"},{"imgUrl":"inmobi.png","linkid":"925543512"},{"imgUrl":"ctyun.png","linkid":"1200959475"},{"imgUrl":"apollo.png","linkid":"1099889737"},{"imgUrl":"yonghui.png","linkid":"1200950246"},{"imgUrl":"grow.png","linkid":"1439373911"},{"imgUrl":"longping.png","linkid":"1702009279"},{"imgUrl":"gigacloud_technology.png","linkid":"1201920672"},{"imgUrl":"shunwang.png","linkid":"1209045211"},{"imgUrl":"joy_u.png","linkid":"1288722017"},{"imgUrl":"wondersgroup.png","linkid":"1439405452"},{"imgUrl":"lydigi.png","linkid":"1621433984"},{"imgUrl":"china_entercom.jpg","linkid":"1627571263"},{"imgUrl":"changan.png","linkid":"1519024880"},{"imgUrl":"zhengzhou.png","linkid":"1702043138"},{"imgUrl":"doctorglasses.png","linkid":"1139380442"},{"imgUrl":"kcbebank.png","linkid":"1436777947"},{"imgUrl":"itcast.png","linkid":"1202869920"},{"imgUrl":"dtsclouds.png","linkid":"1060163177"},{"imgUrl":"dustess.png","linkid":"1053560178"},{"imgUrl":"bondex.png","linkid":"1209046845"},{"imgUrl":"relx.png","linkid":"1190134660"},{"imgUrl":"shudui.png","linkid":"1699279960"},{"imgUrl":"atguigu.png","linkid":"1072426004"},{"imgUrl":"yunlizhi.png","linkid":"902445724"},{"imgUrl":"zoomlion.png","linkid":"1053940469"},{"imgUrl":"zehoo.png","linkid":"1080401301"},{"imgUrl":"deepway.png","linkid":"1226705335"},{"imgUrl":"lccomputing.png","linkid":"1490021808"},{"imgUrl":"belle.png","linkid":"981537659"},{"imgUrl":"fy-data.png","linkid":"845603591"},{"imgUrl":"haibo.png","linkid":"919246964"},{"imgUrl":"hopson.png","linkid":"919802000"},{"imgUrl":"joyme.png","linkid":"976162112"},{"imgUrl":"sobot.png","linkid":"1099833774"},{"imgUrl":"yipage.png","linkid":"1241823645"},{"imgUrl":"yucun.png","linkid":"1080345217"},{"imgUrl":"banggood.png","linkid":"1177373719"},{"imgUrl":"esign.png","linkid":"1436652912"},{"imgUrl":"vixtel.png","linkid":"1441115997"},{"imgUrl":"supcon.png","linkid":"1463391398"},{"imgUrl":"vphonor.png","linkid":"1003334729"},{"imgUrl":"hrfax.png","linkid":"1436669048"},{"imgUrl":"alpha.png","linkid":"1439634257"},{"imgUrl":"cloudview.png","linkid":"1439378199"},{"imgUrl":"idataway.png","linkid":"1288498554"},{"imgUrl":"tenclass.png","linkid":"1439391850"},{"imgUrl":"yingzi.png","linkid":"1370407899"}]');var u=n(5924),s=n(2711),d=n.n(s);function m(){const e=(0,r.Z)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",t=l?.[e];return i.createElement(o.Z,null,(()=>(d().init({offset:80,duration:500,easing:"ease-out-quad",once:!0}),window.addEventListener("load",d().refresh),i.createElement(u.Z,null,i.createElement("div",{className:"block user_page"},i.createElement("div",{className:"user-main",style:{padding:"10px 0 30px"}},i.createElement("h3",{className:"fs-2 mb-4 fw-bold text-center"},t.common.ourUsers),i.createElement("hr",{className:"divider my-4 mx-auto",style:{maxWidth:"10rem"}}),i.createElement("div",{className:"desc",dangerouslySetInnerHTML:{__html:t.common.tip}}),i.createElement("div",{className:"user_case home_block"},c.map(((e,t)=>i.createElement("div",{key:t,index:t,"data-aos":"fade-up","data-aos-delay":50*t},i.createElement("a",{href:"https://github.com/apache/incubator-streampark/issues/163#issuecomment-".concat(e.linkid),target:"_blank"},i.createElement("div",{className:"case_item case_hover"},i.createElement("img",{src:(0,a.Z)("/user/"+e.imgUrl),alt:"name"})))))))))))))}}}]);