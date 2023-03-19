import{d as ue,s as A,n as se,a as l,r as ie,I as y,p as o,q as n,t as S,y as r,E as O,B as s,b as c,O as le,F as V,a_ as re,G as $,C as x,m as P,x as b,D as _,a8 as ce,aP as de,aQ as _e}from"./index.e2c76f91.js";import{u as me}from"./school.816c9426.js";import{T as w,S as k,B as pe}from"./api.6c619aa7.js";import{u as fe}from"./chat.1cdc5011.js";import{_ as ve}from"./index.b05a5e83.js";import{M as he}from"./Modal.5d229f12.js";import{_ as ge}from"./PlusOutlined.dc5a6a60.js";import{_ as ye}from"./index.e926f0d4.js";import{I as ke}from"./Input.2bd320be.js";import{_ as Se,F as Be}from"./Form.aacf39cb.js";import{_ as Ce}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Dropdown.d95ea83c.js";import"./index.40f3feba.js";import"./index.2ff8b4ca.js";import"./styleChecker.246fbcd2.js";import"./index.a02c1863.js";import"./toArray.0de1e11b.js";import"./index.bdfe88c9.js";import"./Spin.6d37f8d4.js";import"./debounce.0814cde8.js";import"./Col.6bbac153.js";const Fe=m=>(de("data-v-7b97d3d4"),m=m(),_e(),m),xe={class:"mb-5"},be={key:1,class:"text-lg font-bold"},we={key:0},Ie={key:1},Ee={key:2,class:"actions"},De=Fe(()=>S("a",{class:"red",href:"#"},"\u79FB\u9664",-1)),Te={key:1},Ne=["onClick"],Ae=["onClick"],Oe=ue({__name:"index",setup(m){const L=re(),I=me(),M=fe(),{curSchool:d}=A(I),{setCurSchool:U}=I,{identity:B,userId:q}=A(se()),C=l([]),p=l(!1),F=l(0),f=l(1),E=10,z=[{title:"ID",dataIndex:"id",key:"id"},{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u90AE\u7BB1",dataIndex:"username",key:"username"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",key:"created_at"},{title:"\u6700\u8FD1\u66F4\u65B0",dataIndex:"updated_at",key:"updated_at"},{title:"\u64CD\u4F5C",dataIndex:"action",key:"action",width:180}],v=l(!1),h=l(!1),i=ie({username:""}),R={username:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B"}]};K(),g();function g(){p.value=!0;const e={page:f.value,per_page:E};B.value==y.Teacher?w.getTeachersOfSchool(d.value.id,e).then(t=>{C.value=t.list,F.value=t.total}).finally(()=>p.value=!1):k.getTeachers(e).then(t=>{C.value=t.list,F.value=t.total}).finally(()=>p.value=!1)}function G(){i.username="",v.value=!0}function Q(){if(!(h.value||!i.username))return new Promise(e=>{h.value=!0,w.inviteTeacher(d.value.id,i).then(()=>{v.value=!1,$.success("\u9080\u8BF7\u6210\u529F"),e(""),f.value=1,g()}).finally(()=>h.value=!1)})}function j(e){f.value=e,g()}function H(e){w.removeTeacher(d.value.id,e).then(()=>{$.success("\u5220\u9664\u6210\u529F"),g()})}function J(e){e.is_followed=!e.is_followed,e.is_followed?k.followTeacher(e.id):k.unfollowTeacher(e.id)}function K(){L.name==="Student"&&!d.value&&k.getSchoolDetail().then(t=>{U(t)})}function W(e){M.openNewSession({identity:y.Teacher,id:e.id,name:e.name})}return(e,t)=>{var T;const X=ge,Y=pe,Z=ye,ee=ve,te=ke,oe=Se,ae=Be,ne=he,D=ce("time");return o(),n(V,null,[S("div",{class:le(r(B)==r(y).Student?"p-5":"")},[S("div",xe,[(T=r(d))!=null&&T.is_owner?(o(),O(Y,{key:0,type:"primary",onClick:G},{icon:s(()=>[c(X)]),default:s(()=>[x(" \u9080\u8BF7\u6559\u5E08 ")]),_:1})):(o(),n("p",be,"\u6559\u5E08\u5217\u8868"))]),c(ee,{dataSource:C.value,columns:z,loading:p.value,pagination:{position:["bottomCenter"],current:f.value,hideOnSinglePage:!0,pageSize:E,total:F.value,onChange:j}},{bodyCell:s(({column:u,record:a})=>[u.key==="created_at"?P((o(),n("span",we,[x(b(a.created_at),1)])),[[D]]):_("",!0),u.key==="updated_at"?P((o(),n("span",Ie,[x(b(a.updated_at),1)])),[[D]]):_("",!0),u.key==="action"?(o(),n("div",Ee,[r(B)==r(y).Teacher?(o(),n(V,{key:0},[a.id!==r(q)?(o(),O(Z,{key:0,title:"\u786E\u5B9A\u8981\u79FB\u9664\u8BE5\u6559\u5E08\u5417?","ok-text":"\u79FB\u9664","cancel-text":"\u53D6\u6D88",onConfirm:N=>H(a.id)},{default:s(()=>[De]),_:2},1032,["onConfirm"])):_("",!0)],64)):(o(),n("span",Te,[S("a",{href:"#",onClick:N=>J(a)},b(a.is_followed?"\u53D6\u6D88\u5173\u6CE8":"\u5173\u6CE8"),9,Ne),a.is_owner?(o(),n("a",{key:0,href:"#",onClick:N=>W(a)},"\u804A\u5929",8,Ae)):_("",!0)]))])):_("",!0)]),_:1},8,["dataSource","loading","pagination"])],2),c(ne,{visible:v.value,"onUpdate:visible":t[1]||(t[1]=u=>v.value=u),title:"\u9080\u8BF7\u6559\u5E08","confirm-loading":h.value,onOk:Q},{default:s(()=>[c(ae,{model:i,rules:R},{default:s(()=>[c(oe,{label:"\u90AE\u7BB1",name:"username"},{default:s(()=>[c(te,{value:i.username,"onUpdate:value":t[0]||(t[0]=u=>i.username=u),valueModifiers:{trim:!0},placeholder:"\u8F93\u5165\u90AE\u7BB1"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","confirm-loading"])],64)}}});const ot=Ce(Oe,[["__scopeId","data-v-7b97d3d4"]]);export{ot as default};
