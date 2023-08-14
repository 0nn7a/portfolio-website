import{_ as g,g as k,h as W,o as t,c as s,d as e,t as o,F as i,r as d,p as f,e as v,i as h,j as y,b as C,f as b,k as T,l as x,u as D}from"./index.28278885.js";const B=n=>(f("data-v-2250260e"),n=n(),v(),n),N={class:"add-buy__title"},S={class:"heading-3"},A={class:"description"},V={class:"heading-5"},j=B(()=>e("div",{class:"add-buy__des"},[e("p",null,"ITEM"),e("p",null,"AMOUNT")],-1)),E={class:"normal-text"},M={class:"normal-text"},O={__name:"AddBuy",props:{addData:{type:Object,default:{title:"\u6A19\u984C",des:"\u63CF\u8FF0",content:[]}}},setup(n){const _=n,p=k(null),m=k(null),u=()=>{window.innerWidth>1e3&&(p.value.offsetWidth>=440?m.value.style["column-count"]=2:m.value.style["column-count"]=1)};return W(()=>{u(),window.addEventListener("resize",u)}),(a,c)=>(t(),s("div",{class:"add-buy__container",ref_key:"abDom",ref:p},[e("div",N,[e("h3",S,o(_.addData.title),1),e("p",A,o(_.addData.des),1)]),e("ul",{class:"add-buy__list",ref_key:"listDom",ref:m},[(t(!0),s(i,null,d(_.addData.content,l=>(t(),s("li",{key:l.name,class:"add-buy__item"},[e("h5",V,o(l.name),1),j,(t(!0),s(i,null,d(l.list,(r,P)=>(t(),s("div",{key:P,class:"add-buy__content"},[e("p",E,o(r.item),1),e("p",M,o(r.amount),1)]))),128))]))),128))],512)],512))}},Q=g(O,[["__scopeId","data-v-2250260e"]]);const w=n=>(f("data-v-54d91928"),n=n(),v(),n),q={class:"table__compare"},F=w(()=>e("td",null,null,-1)),L={class:"table__compare__title"},z={class:"heading-4"},R={class:"same__price"},U={class:"description"},G={class:"table__compare__badge"},H={class:"normal-text"},J={key:0,class:"svg-info"},K={class:"popover-up-right"},X={key:0,class:"table__compare__list"},Y={class:"normal-text"},Z={key:2,class:"normal-text"},I={class:"cards__compare"},ee={class:"cards__compare__title"},te={class:"heading-3"},se={class:"cards__compare__badge"},ae={class:"description"},oe={class:"same__price"},ne=w(()=>e("hr",null,null,-1)),ce={class:"heading-4"},_e={class:"cards__compare__block"},le={key:1},ie={key:2,class:"remark-text"},de={__name:"TableCompare",props:{tableData:{type:Object,default:{header:[],content:{}}}},setup(n){const _=n;return(p,m)=>{const u=T;return t(),s(i,null,[e("table",q,[e("thead",null,[e("tr",null,[F,(t(!0),s(i,null,d(_.tableData.header,a=>(t(),s("th",{key:a.id},[e("div",L,[e("h4",z,o(a.title),1),e("p",R,o(a.price),1),e("p",U,o(a.des),1),e("span",G,o(a.badge),1)])]))),128))])]),e("tbody",null,[(t(!0),s(i,null,d(_.tableData.content,(a,c)=>(t(),s("tr",{key:c},[e("td",null,[e("p",H,o(c),1),a.info?(t(),s("a",J,[h(u,{"icon-name":"info-circle","icon-style":{height:"1.6rem",width:"1.6rem",fill:"currentColor"}}),e("span",K,o(a.info),1)])):y("",!0)]),(t(!0),s(i,null,d(_.tableData.header,l=>(t(),s("td",{key:l.id},[a.type==="list"?(t(),s("ul",X,[(t(!0),s(i,null,d(a[l.id],r=>(t(),s("li",{key:r},[e("p",Y,"- "+o(r),1)]))),128))])):a.type==="svg"?(t(),C(u,{key:1,"icon-name":a[l.id],"icon-style":{height:"2rem",width:"2rem",color:"currentColor"}},null,8,["icon-name"])):(t(),s("p",Z,o(a[l.id]),1))]))),128))]))),128))])]),e("ul",I,[(t(!0),s(i,null,d(_.tableData.header,a=>(t(),s("li",{key:a.id,class:"cards__compare__item"},[e("div",ee,[e("h3",te,o(a.title),1),e("span",se,o(a.badge),1)]),e("p",ae,o(a.des),1),e("p",oe,o(a.price),1),ne,(t(!0),s(i,null,d(_.tableData.content,(c,l)=>(t(),s("div",{key:l,class:"cards__compare__content"},[e("h4",ce,[h(u,{"icon-name":"check","icon-style":{height:"2rem",width:"2rem",color:"currentColor"}}),b(o(l),1)]),e("ul",_e,[Array.isArray(c[a.id])?(t(!0),s(i,{key:0},d(c[a.id],r=>(t(),s("li",{key:r}," - "+o(r),1))),128)):c.type!=="svg"?(t(),s("li",le,o(c[a.id]),1)):y("",!0),c.info?(t(),s("span",ie,o(c.info),1)):y("",!0)])]))),128))]))),128))])],64)}}},re=g(de,[["__scopeId","data-v-54d91928"]]);const $=n=>(f("data-v-80e8a1ef"),n=n(),v(),n),ue={class:"quote__container"},pe=$(()=>e("div",{class:"quote__title"},[e("h2",{class:"heading-2"},"\u7DB2\u9801\u8A2D\u8A08\u65B9\u6848"),e("p",{class:"description"},[b(" \u5BA2\u88FD\u5316\u8A2D\u8A08\uFF0C\u50F9\u683C\u6703\u4F9D\u7167\u7248\u9762\u7684\u7D30\u81A9\u7A0B\u5EA6\u800C\u7570"),e("br"),b(" \u53EF\u5148\u63D0\u4F9B\u559C\u6B61\u6216\u9810\u60F3\u4E2D\u7684\u7DB2\u7AD9\u6848\u4F8B\u3001\u7C21\u6613\u7DB2\u7AD9\u67B6\u69CB\u5716\uFF0C\u5831\u50F9\u8A55\u4F30\u6703\u66F4\u7CBE\u78BA\uFF01 ")])],-1)),me=$(()=>e("p",{class:"remark-text"},"\u4EE5\u4E0A\u65B9\u6848\u5747\u70BA\u5BA2\u88FD\u5316\uFF0C\u56E0\u6B64\u7686\u5305\u542B\u300C\u8A2D\u8A08\u8CBB\u7528\u300D",-1)),he=$(()=>e("p",{class:"remark-text"},"\u7E3D\u50F9\u6A19\u793A\u70BA\u672A\u7A05\u50F9\u3001\u4E0D\u5305\u542B\u6BCF\u5E74\u4E3B\u6A5F\u627F\u79DF\u8207\u7DAD\u8B77",-1)),ye={__name:"QuotePage",setup(n){const _=x({header:[{id:"onePage",title:"\u4E00\u9801\u5F0F\u7DB2\u9801",price:"$15,900",des:`\u6240\u6709\u5167\u5BB9\u96C6\u4E2D\u65BC\u4E00\u500B\u9801\u9762
\u8CC7\u8A0A\u4E00\u76EE\u77AD\u7136`,badge:"\u5BA2\u88FD\u5316"},{id:"companyWeb",title:"\u4F01\u696D\u5F62\u8C61\u7DB2\u7AD9",price:"$27,900",des:`\u7DB2\u8DEF\u4E0A\u5C0D\u5916\u7684\u5F62\u8C61\u9580\u9762
\u5C55\u73FE\u516C\u53F8\u7279\u8272\u3001\u6FC0\u767C\u6F5B\u5728\u5BA2\u6236`,badge:"\u5BA2\u88FD\u5316"}],content:{\u57FA\u790E\u5167\u5BB9:{type:"list",onePage:["5 \uFF5E 6 \u500B\u5340\u584A","\u806F\u7D61\u8868\u55AE"],companyWeb:["\u9996\u9801","\u4E00\u822C\u9801\u9762","\u6700\u65B0\u6D88\u606F","\u5546\u54C1\u4ECB\u7D39","\u806F\u7D61\u8868\u55AE","\u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71"]},\u57FA\u790E\u52D5\u6548:{info:`\u5982\u6E38\u6A19\u505C\u7559\u5728\u6309\u9215\u4E0A\u6642\uFF0C\u984F\u8272\u5C07\u8B8A\u5316\u4EE5\u63D0\u793A\u4F7F\u7528\u8005\u53EF\u9EDE\u64CA\u4E92\u52D5\uFF0C
\u6B64\u985E\u57FA\u672C\u52D5\u756B\u589E\u52A0\u6D41\u66A2\u7684\u9AD4\u9A57\u611F\u3002`,type:"svg",onePage:"check",companyWeb:"check"},\u9801\u9762\u9650\u5236:{type:"text",onePage:"\u4E00\u9801",companyWeb:"\u7121\u9650\u5236"},\u88FD\u4F5C\u5929\u6578:{type:"text",onePage:"10 \u500B\u5DE5\u4F5C\u5929\u4EE5\u4E0A",companyWeb:"\u9700\u4F9D\u7167\u5C08\u6848\u8907\u96DC\u5EA6\u8A55\u4F30"},"RWD \u652F\u63F4":{info:`\u8A2D\u8A08\u4E0D\u540C\u87A2\u5E55\u5927\u5C0F\u4E0B\u7684\u5B57\u578B\u3001\u884C\u8DDD\u7B49\u7248\u9762\uFF0C
\u4F7F\u60A8\u7684\u7DB2\u7AD9\u5728\u4F7F\u7528\u4E0D\u540C\u5C3A\u5BF8\u7684\u88DD\u7F6E\u700F\u89BD\u6642\u7686\u6709\u5408\u9069\u7684\u5448\u73FE\u3002`,type:"svg",onePage:"check",companyWeb:"check"},"\u4E3B\u6A5F\u627F\u79DF\u3001\u7DAD\u8B77":{info:`\u670D\u52D9\u5305\u542B\u6280\u8853\u8AEE\u8A62\u3001\u5B89\u5168\u6027\u7DAD\u8B77\u3001\u65E5\u5E38\u5099\u4EFD\u3001\u7CFB\u7D71bug\u79FB\u9664\uFF0C
\u7248\u578B\u90E8\u5206\uFF0C\u63D0\u4F9B\u7C21\u6613\u63DB\u5716\u6587\u6848\u4FEE\u6539\uFF0C\u53E6\u5167\u5BB9\u90E8\u5206\u7686\u6709\u5F8C\u53F0\uFF0C\u53EF\u65BC\u65E5\u5F8C\u81EA\u884C\u65B0\u589E\u522A\u9664\u3002`,type:"text",onePage:"+ NT $4,500 / \u5E74",companyWeb:"+ NT $5,800 / \u5E74"}}}),p=x({title:"\u52A0\u8CFC\u9805\u76EE",des:"\u50F9\u683C\u4F9D\u5BE6\u969B\u5167\u5BB9\u8A55\u4F30\u5F8C\u70BA\u6E96",content:[{name:"\u8FFD\u52A0\u5167\u5BB9",list:[{item:"\u57FA\u790E\u584A",amount:"$ 1,000 \u8D77"},{item:"\u4E00\u822C\u584A",amount:"$ 1,400 \u8D77"},{item:"\u8907\u96DC\u584A",amount:"$ 2,000 \u8D77"},{item:"\u9801\u9762",amount:"$ 2,000 \u8D77 /\u9801"}]},{name:"\u7DB2\u5740\u4EE3\u8CFC",list:[{item:".com",amount:"$ 820 /\u5E74"},{item:".com.tw",amount:"$ 900 /\u5E74"}]},{name:"\u529F\u80FD\u7CFB\u7D71",list:[{item:"\u7559\u8A00\u677F",amount:"$ 1,500 \u8D77"},{item:"\u6703\u54E1",amount:"$ 1,500 \u8D77"},{item:"\u90E8\u843D\u683C",amount:"$ 1,500 \u8D77"}]},{name:"\u5176\u4ED6",list:[{item:"\u6025\u4EF6",amount:"x1.2 \u500D"},{item:"\u591A\u8A9E\u7CFB",amount:"$ 1,200 /\u500B"},{item:"\u914D\u8272",amount:"$ 1,500 /\u500B"},{item:"\u5927\u578B\u52D5\u756B",amount:"$ 1,500 \u8D77"}]}]});return(m,u)=>{const a=re,c=Q;return t(),s("section",ue,[pe,h(a,{"table-data":D(_)},null,8,["table-data"]),me,he,h(c,{"add-data":D(p)},null,8,["add-data"])])}}},ge=g(ye,[["__scopeId","data-v-80e8a1ef"]]);export{ge as default};