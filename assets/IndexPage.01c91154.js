import{c as g,e as c,f as t,a as i,h as d,j as h,D as f,g as m,_ as y,I as x,J as _,K as v,L as C,S as $}from"./index.102dd097.js";import{h as P}from"./render.6cd55eb8.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=m(),e=c(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(f,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=i(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:u.value,style:r.value},P(o.default))}}),F="/assets/quasar-logo-vertical.55e9c854.svg";const q=x({name:"IndexPage"}),B=$("img",{alt:"Quasar logo",src:F,style:{width:"200px",height:"200px"}},null,-1);function I(n,o,s,e,l,r){return _(),v(Q,{class:"flex flex-center"},{default:C(()=>[B]),_:1})}var b=y(q,[["render",I]]);export{b as default};