import{d as b,a as h,s as y,n as g,o as N,p as n,q as r,b as e,y as l,t as B,O as F,E as V,B as t,D as K,a_ as M,a$ as U,C as c,H as v}from"./index.961df8a6.js";import{u as j}from"./school.6f70861d.js";import{T as R,B as q}from"./api.2ab6e22f.js";import{M as z,_ as H}from"./index.b8c697d7.js";import"./index.d9b3a8e0.js";import{S as O}from"./Spin.5fd196d4.js";import"./debounce.1a9090d2.js";const $={key:0,class:"flex justify-center items-center mt-20"},A={key:1,class:"h-full flex justify-between items-start"},G={key:2,class:"mt-20"},I=B("span",null,"\u62B1\u6B49\uFF0C\u8BE5\u5B66\u6821\u4E0D\u5B58\u5728~",-1),ee=b({__name:"index",setup(J){const a=h(!0),_=j(),{curSchool:o}=y(_),{setCurSchool:i}=_,S=g();y(S);const m=M(),p=h([m.name]);k(),N(()=>{i(null)});function k(){if(o.value){a.value=!1;return}const d=Number(m.params.id);R.getSchoolDetail(d).then(s=>{i(s)}).finally(()=>a.value=!1)}return(d,s)=>{const x=O,C=v("router-view"),u=v("router-link"),f=H,w=z,D=q,E=U;return a.value?(n(),r("div",$,[e(x)])):l(o)?(n(),r("div",A,[B("div",{class:F(["flex-1 p-5",l(o).is_owner?"pl-[244px]":""])},[e(C)],2),l(o).is_owner?(n(),V(w,{key:0,class:"w-56 h-full absolute left-0 top-0 pt-[48px]",selectedKeys:p.value,"onUpdate:selectedKeys":s[0]||(s[0]=T=>p.value=T)},{default:t(()=>[e(f,{key:"Students"},{default:t(()=>[e(u,{to:{name:"Students"}},{default:t(()=>[c("\u5B66\u751F\u5217\u8868")]),_:1})]),_:1}),e(f,{key:"Teachers"},{default:t(()=>[e(u,{to:{name:"Teachers"}},{default:t(()=>[c("\u6559\u5E08\u5217\u8868")]),_:1})]),_:1})]),_:1},8,["selectedKeys"])):K("",!0)])):(n(),r("div",G,[e(E,null,{description:t(()=>[I]),default:t(()=>[e(D,{type:"primary"},{default:t(()=>[e(u,{to:"/schools",replace:""},{default:t(()=>[c("\u8FD4\u56DE\u5B66\u6821\u5217\u8868")]),_:1})]),_:1})]),_:1})]))}}});export{ee as default};
