import{h as D,s as F,i as G,e as T,g as E}from"./index-f1ec7306.js";import{S as y}from"./index-250e29b6.js";import{_ as L}from"./index-53fb70f4.js";import{f as U,e as v,bv as q,bE as A,bw as r,D as I,b2 as c,b3 as _,bb as i,bc as o,b7 as n,b8 as h,b9 as f,ba as a,ao as m,b6 as k,au as R,by as K,bK as P,bl as W,b5 as j}from"./index-54bb0693.js";import{d as H,a as J,N as O}from"./index-6089fc5d.js";import"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"h-full"},X={class:"p-2"},Y={class:"overflow-auto w-full mt-[20px] bg-slate-200 dark:bg-zinc-900 rounded-xl",style:{height:"calc(100% - 65px)"}},Z={class:"flex items-center"},ee={class:"mr-[10px]"},se={class:"ml-auto"},le={class:"ml-[10px]"},de=U({__name:"index",setup(te){const x=v(null),p=q(),S=A(),u=v(!1),w={title:"",icon:"material-symbols:folder-outline",sort:9999},t=v({show:!1,editStatus:1,model:w,rules:{title:[{required:!0,trigger:"blur",message:r("form.required")}]}}),d=v([]);function C(){t.value.show=!t.value.show}function z(s){t.value.show=!0,t.value.model=s,t.value.editStatus=2}function N(){u.value=!0}function $(){const s=[];for(let e=0;e<d.value.length;e++){const l=d.value[e];s.push({id:l.id,sort:e+1})}F(s).then(({code:e,msg:l})=>{e===0?(p.success(r("common.saveSuccess")),u.value=!1):p.error(`${r("common.saveFail")}:${l}`)})}function M(s){S.warning({title:r("common.warning"),content:r("apps.itemGroupManage.deleteWarnText",{name:s.title}),positiveText:r("common.confirm"),negativeText:r("common.cancel"),onPositiveClick:()=>{s.id&&G([s.id]).then(({code:e,msg:l})=>{e!==0?p.error(r("common.deleteFail")):g()})}})}function V(){var s;(s=x.value)==null||s.validate(e=>{e?console.log(e):T(t.value.model).then(({code:l,msg:b})=>{l!==0&&p.error(b),g(),t.value.show=!1,t.value.model={...w}})})}function g(){E().then(({code:s,data:e})=>{d.value=e.list})}return I(()=>{g()}),(s,e)=>(c(),_("div",Q,[i("div",X,[o(a(m),{type:"success",size:"small",style:{"margin-right":"10px"},onClick:C},{default:n(()=>[h(f(s.$t("common.add")),1)]),_:1}),u.value?(c(),k(a(m),{key:1,type:"warning",size:"small",onClick:$},{default:n(()=>[h(f(s.$t("common.saveSort")),1)]),_:1})):(c(),k(a(m),{key:0,size:"small",onClick:N},{default:n(()=>[h(f(s.$t("common.sort")),1)]),_:1}))]),i("div",Y,[o(a(D),{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),"item-key":"sort",animation:300,style:j({padding:u.value?"20px":"10px"}),disabled:!u.value},{default:n(()=>[(c(!0),_(R,null,K(d.value,(l,b)=>(c(),_("div",{key:b,class:"w-full"},[o(a(P),{size:"small",style:{"border-radius":"10px","margin-bottom":"10px"}},{default:n(()=>[i("div",{class:W(["flex",u.value?"cursor-move":""])},[i("div",Z,[i("span",ee,[o(a(y),{class:"text-[20px]",icon:"material-symbols:ad-group-outline-rounded"})]),i("span",null,f(l.title),1)]),i("div",se,[i("span",null,[o(a(m),{strong:"",secondary:"",type:"success",size:"small",onClick:B=>z(l)},{icon:n(()=>[o(a(y),{icon:"basil:edit-solid"})]),_:2},1032,["onClick"])]),i("span",le,[o(a(m),{strong:"",secondary:"",type:"error",size:"small",class:"ml-[10px]",onClick:B=>M(l)},{icon:n(()=>[o(a(y),{icon:"material-symbols:delete"})]),_:2},1032,["onClick"])])])],2)]),_:2},1024)]))),128))]),_:1},8,["modelValue","style","disabled"])]),o(a(L),{show:t.value.show,"onUpdate:show":e[2]||(e[2]=l=>t.value.show=l),size:"small",type:"small",title:t.value.editStatus===1?"添加":"编辑",style:{width:"400px"}},{footer:n(()=>[o(a(m),{type:"success",size:"small",class:"float-right",onClick:V},{default:n(()=>[h(f(s.$t("common.confirm")),1)]),_:1})]),default:n(()=>[o(a(H),{ref_key:"formRef",ref:x,model:t.value.model,rules:t.value.rules},{default:n(()=>[o(a(J),{path:"title",label:s.$t("apps.itemGroupManage.groupName")},{default:n(()=>[o(a(O),{value:t.value.model.title,"onUpdate:value":e[1]||(e[1]=l=>t.value.model.title=l),type:"text",maxlength:20,"show-count":""},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["show","title"])]))}});export{de as default};
