import{F as y}from"./index.dd0d4244.js";import{P as F}from"./index.3f3c7397.js";import{c as L,e as J,u as K}from"./use-translate.b8dd01c6.js";import{b as X,t as O,m as I,n as W,w as Z}from"./with-install.b43d27ad.js";import{H as q}from"./constant.80c6de18.js";import{T as G,a as Q}from"./index.856b8d55.js";import{I as S}from"./index.a6ba9341.js";import{z as U,C as N,x as T,e as s,L as Y,q as $,D as g,B as M,r as R,o as _,a as ee,w as C,A as e,d as te,t as le,F as oe}from"./vue-libs.311a0de3.js";import{d as ue}from"./deep-clone.2cf4d1ec.js";import"./index.935763b3.js";import"./use-route.fbe6f823.js";import"./use-expose.a6a25a51.js";import"./index.886fe652.js";import"./useParent.c4a91987.js";import"./interceptor.14c08b72.js";import"./use-touch.41b8a2c4.js";import"./index.e4a9f28d.js";import"./utils.39620306.js";import"./index.2702a97e.js";import"./use-lazy-render.a1d3dbed.js";import"./on-popup-reopen.179515e2.js";import"./index.40018584.js";import"./index.eb7e8095.js";import"./useChildren.9c836bf0.js";import"./use-refs.b90e5fab.js";import"./index.81d770bd.js";function se(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!Y(c)}const[ae,w,ne]=L("cascader"),ie={title:String,options:X(),closeable:O,swipeable:O,closeIcon:I("cross"),modelValue:W,fieldNames:Object,placeholder:String,activeColor:String};var re=U({name:ae,props:ie,emits:["close","change","finish","click-tab","update:modelValue"],setup(c,{slots:u,emit:m}){const n=N([]),p=N(0),{text:f,value:b,children:v}=J({text:"text",value:"value",children:"children"},c.fieldNames),E=(o,i)=>{for(const d of o){if(d[b]===i)return[d];if(d[v]){const a=E(d[v],i);if(a)return[d,...a]}}},V=()=>{const{options:o,modelValue:i}=c;if(i!==void 0){const d=E(o,i);if(d){let a=o;n.value=d.map(h=>{const j={options:a,selected:h},k=a.find(H=>H[b]===h[b]);return k&&(a=k[v]),j}),a&&n.value.push({options:a,selected:null}),$(()=>{p.value=n.value.length-1});return}}n.value=[{options:o,selected:null}]},A=(o,i)=>{if(o.disabled)return;if(n.value[i].selected=o,n.value.length>i+1&&(n.value=n.value.slice(0,i+1)),o[v]){const h={options:o[v],selected:null};n.value[i+1]?n.value[i+1]=h:n.value.push(h),$(()=>{p.value++})}const d=n.value.map(h=>h.selected).filter(Boolean);m("update:modelValue",o[b]);const a={value:o[b],tabIndex:i,selectedOptions:d};m("change",a),o[v]||m("finish",a)},x=()=>m("close"),t=({name:o,title:i})=>m("click-tab",o,i),r=()=>s("div",{class:w("header")},[s("h2",{class:w("title")},[u.title?u.title():c.title]),c.closeable?s(S,{name:c.closeIcon,class:[w("close-icon"),q],onClick:x},null):null]),l=(o,i,d)=>{const a=i&&o[b]===i[b],h=o.color||(a?c.activeColor:void 0),j=u.option?u.option({option:o,selected:a}):s("span",null,[o[f]]);return s("li",{class:[w("option",{selected:a,disabled:o.disabled}),o.className],style:{color:h},onClick:()=>A(o,d)},[j,a?s(S,{name:"success",class:w("selected-icon")},null):null])},D=(o,i,d)=>s("ul",{class:w("options")},[o.map(a=>l(a,i,d))]),P=(o,i)=>{const{options:d,selected:a}=o,h=c.placeholder||ne("select"),j=a?a[f]:h;return s(Q,{title:j,titleClass:w("tab",{unselected:!a})},{default:()=>[u["options-top"]?u["options-top"]({tabIndex:p.value}):null,D(d,a,i)]})},z=()=>{let o;return s(G,{active:p.value,"onUpdate:active":i=>p.value=i,animated:!0,class:w("tabs"),color:c.activeColor,swipeThreshold:0,swipeable:c.swipeable,"onClick-tab":t},se(o=n.value.map(P))?o:{default:()=>[o]})};return V(),T(()=>c.options,V,{deep:!0}),T(()=>c.modelValue,o=>{o!==void 0&&n.value.map(d=>{var a;return(a=d.selected)==null?void 0:a[b]}).includes(o)||V()}),()=>s("div",{class:w()},[r(),z()])}});const B=Z(re);var de=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],pe=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}];const ce={class:"current-level"},He=U({setup(c){const u=K({"zh-CN":{area:"\u5730\u533A",options:de,selectArea:"\u8BF7\u9009\u62E9\u5730\u533A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncOptions:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",asyncOptions1:[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}],asyncOptions2:[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],currentLevel:x=>`\u5F53\u524D\u4E3A\u7B2C ${x} \u7EA7`,customContent:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9",customFieldNames:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},"en-US":{area:"Area",options:pe,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:x=>`Current level is ${x}`,customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),m=g({show:!1,value:"",result:""}),n=g({show:!1,value:null,result:""}),p=g({show:!1,value:null,result:"",options:u("asyncOptions1")}),f=g({show:!1,value:null,result:""}),b={text:"name",value:"code",children:"items"},v=g({show:!1,value:null,result:""}),E=M(()=>{const x=ue(u("options")),t=r=>{"text"in r&&(r.name=r.text,delete r.text),"value"in r&&(r.code=r.value,delete r.value),"children"in r&&(r.items=r.children,delete r.children,r.items.forEach(t))};return x.forEach(t),x}),V=({value:x})=>{x==="330000"&&setTimeout(()=>{p.options[0].children=u("asyncOptions2")},500)},A=(x,{value:t,selectedOptions:r})=>{const l=r.map(D=>D.text||D.name).join("/");x.show=!1,x.value=t,x.result=l};return(x,t)=>{const r=R("demo-block");return _(),ee(oe,null,[s(r,{card:"",title:e(u)("basicUsage")},{default:C(()=>[s(e(y),{modelValue:e(m).result,"onUpdate:modelValue":t[0]||(t[0]=l=>e(m).result=l),"is-link":"",readonly:"",label:e(u)("area"),placeholder:e(u)("selectArea"),onClick:t[1]||(t[1]=l=>e(m).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(F),{show:e(m).show,"onUpdate:show":t[5]||(t[5]=l=>e(m).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[s(e(B),{modelValue:e(m).value,"onUpdate:modelValue":t[2]||(t[2]=l=>e(m).value=l),title:e(u)("selectArea"),options:e(u)("options"),onClose:t[3]||(t[3]=l=>e(m).show=!1),onFinish:t[4]||(t[4]=l=>A(e(m),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(u)("customColor")},{default:C(()=>[s(e(y),{modelValue:e(n).result,"onUpdate:modelValue":t[6]||(t[6]=l=>e(n).result=l),"is-link":"",readonly:"",label:e(u)("area"),placeholder:e(u)("selectArea"),onClick:t[7]||(t[7]=l=>e(n).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(F),{show:e(n).show,"onUpdate:show":t[11]||(t[11]=l=>e(n).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[s(e(B),{modelValue:e(n).value,"onUpdate:modelValue":t[8]||(t[8]=l=>e(n).value=l),title:e(u)("selectArea"),options:e(u)("options"),"active-color":"#1989fa",onClose:t[9]||(t[9]=l=>e(n).show=!1),onFinish:t[10]||(t[10]=l=>A(e(n),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(u)("asyncOptions")},{default:C(()=>[s(e(y),{modelValue:e(p).result,"onUpdate:modelValue":t[12]||(t[12]=l=>e(p).result=l),"is-link":"",readonly:"",label:e(u)("area"),placeholder:e(u)("selectArea"),onClick:t[13]||(t[13]=l=>e(p).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(F),{show:e(p).show,"onUpdate:show":t[17]||(t[17]=l=>e(p).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[s(e(B),{modelValue:e(p).value,"onUpdate:modelValue":t[14]||(t[14]=l=>e(p).value=l),title:e(u)("selectArea"),options:e(p).options,onClose:t[15]||(t[15]=l=>e(p).show=!1),onChange:V,onFinish:t[16]||(t[16]=l=>A(e(p),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(u)("customFieldNames")},{default:C(()=>[s(e(y),{modelValue:e(f).result,"onUpdate:modelValue":t[18]||(t[18]=l=>e(f).result=l),"is-link":"",readonly:"",label:e(u)("area"),placeholder:e(u)("selectArea"),onClick:t[19]||(t[19]=l=>e(f).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(F),{show:e(f).show,"onUpdate:show":t[23]||(t[23]=l=>e(f).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:C(()=>[s(e(B),{modelValue:e(f).value,"onUpdate:modelValue":t[20]||(t[20]=l=>e(f).value=l),title:e(u)("selectArea"),options:e(E),"field-names":b,onClose:t[21]||(t[21]=l=>e(f).show=!1),onFinish:t[22]||(t[22]=l=>A(e(f),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(u)("customContent")},{default:C(()=>[s(e(y),{modelValue:e(v).result,"onUpdate:modelValue":t[24]||(t[24]=l=>e(v).result=l),"is-link":"",readonly:"",label:e(u)("area"),placeholder:e(u)("selectArea"),onClick:t[25]||(t[25]=l=>e(v).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(F),{show:e(v).show,"onUpdate:show":t[29]||(t[29]=l=>e(v).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:C(()=>[s(e(B),{modelValue:e(v).value,"onUpdate:modelValue":t[26]||(t[26]=l=>e(v).value=l),title:e(u)("selectArea"),options:e(E),"field-names":b,onClose:t[27]||(t[27]=l=>e(v).show=!1),onFinish:t[28]||(t[28]=l=>A(e(v),l))},{"options-top":C(({tabIndex:l})=>[te("div",ce,le(e(u)("currentLevel",l)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{He as default};