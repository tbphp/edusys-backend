import{a as p,y as E,$ as D,w as O,ao as W,d as $,P as a,c as k,f as q,b as w,_ as x,e as B,h as R,F as L}from"./index.961df8a6.js";import{T as F}from"./index.b8c697d7.js";import{c as P}from"./api.2ab6e22f.js";const K=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var i=navigator.userAgent||navigator.vendor||window.opera;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(i==null?void 0:i.substr(0,4)))};function Q(i,e){var l=e||{},o=l.defaultValue,c=l.value,u=c===void 0?p():c,r=typeof i=="function"?i():i;u.value!==void 0&&(r=E(u)),o!==void 0&&(r=typeof o=="function"?o():o);var f=p(r),v=p(r);D(function(){var s=u.value!==void 0?u.value:f.value;e.postState&&(s=e.postState(s)),v.value=s});function b(s){var h=v.value;f.value=s,W(v.value)!==s&&e.onChange&&e.onChange(s,h)}return O(u,function(){f.value=u.value}),[v,b]}function U(i){var e=typeof i=="function"?i():i,l=p(e);function o(c){l.value=c}return[l,o]}var m={adjustX:1,adjustY:1},g=[0,0],H={topLeft:{points:["bl","tl"],overflow:m,offset:[0,-4],targetOffset:g},topCenter:{points:["bc","tc"],overflow:m,offset:[0,-4],targetOffset:g},topRight:{points:["br","tr"],overflow:m,offset:[0,-4],targetOffset:g},bottomLeft:{points:["tl","bl"],overflow:m,offset:[0,4],targetOffset:g},bottomCenter:{points:["tc","bc"],overflow:m,offset:[0,4],targetOffset:g},bottomRight:{points:["tr","br"],overflow:m,offset:[0,4],targetOffset:g}};const X=H;var Y=["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"];const Z=$({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:a.string.def("rc-dropdown"),transitionName:String,overlayClassName:a.string.def(""),openClassName:String,animation:a.any,align:a.object,overlayStyle:{type:Object,default:void 0},placement:a.string.def("bottomLeft"),overlay:a.any,trigger:a.oneOfType([a.string,a.arrayOf(a.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:a.array,hideAction:a.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:a.number.def(.15),mouseLeaveDelay:a.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,l){var o=l.slots,c=l.emit,u=l.expose,r=p(!!e.visible);O(function(){return e.visible},function(n){n!==void 0&&(r.value=n)});var f=p();u({triggerRef:f});var v=function(t){e.visible===void 0&&(r.value=!1),c("overlayClick",t)},b=function(t){e.visible===void 0&&(r.value=t),c("visibleChange",t)},s=function(){var t,d=(t=o.overlay)===null||t===void 0?void 0:t.call(o),y={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:v,getPopupContainer:function(){return f.value.getPopupDomNode()}};return w(L,null,[e.arrow&&w("div",{class:"".concat(e.prefixCls,"-arrow")},null),P(d,y,!1)])},h=k(function(){var n=e.minOverlayWidthMatchTrigger,t=n===void 0?!e.alignPoint:n;return t}),N=function(){var t,d=(t=o.default)===null||t===void 0?void 0:t.call(o);return r.value&&d?P(d[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):d},A=k(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var n=e.prefixCls,t=e.arrow,d=e.showAction,y=e.overlayStyle,C=e.trigger,j=e.placement,z=e.align,_=e.getPopupContainer,T=e.transitionName,V=e.animation,M=e.overlayClassName,S=q(e,Y);return w(F,x(x({},S),{},{prefixCls:n,ref:f,popupClassName:B(M,R({},"".concat(n,"-show-arrow"),t)),popupStyle:y,builtinPlacements:X,action:C,showAction:d,hideAction:A.value||[],popupPlacement:j,popupAlign:z,popupTransitionName:T,popupAnimation:V,popupVisible:r.value,stretch:h.value?"minWidth":"",onPopupVisibleChange:b,getPopupContainer:_}),{popup:s,default:N})}}});export{Z as D,U as a,K as i,Q as u};
