import{_ as ko}from"./roclean_logo-4f0252f3.js";import{i as D,W as Te,af as Ao,ag as No,m as Ro,ah as Ho,d as $,x as u,ai as _e,B as xe,L as me,q as b,C as N,y as H,G as W,I as ae,l as w,M as de,a2 as Qe,ae as Ke,n as oe,k as V,p as q,H as le,a1 as To,aj as X,S as eo,E as se,D as y,t as U,K as ne,A as De,Z as oo,N as _o,ak as Ko,$ as Ve,o as Ne,f as Oo,b as J,u as Q,r as ce,c as Ge,w as ee,a as Y,e as We,al as Lo,h as $o}from"./index-f32ca084.js";import{h as Bo,p as Eo,a as to,V as Fo,b as Mo,c as jo,m as Do,d as Vo,r as Go,f as Wo,k as pe,N as Uo,e as ro,t as qo,g as Yo,u as Xo}from"./Tooltip-febf7a72.js";import{f as ge}from"./format-length-c9d165c6.js";import{a as ve,o as he,X as Zo,u as be,s as Jo,b as no,N as io,k as Oe}from"./Scrollbar-51a721b8.js";import{c as G}from"./resolve-slot-d41da7ba.js";import{N as Qo}from"./Button-3879c399.js";function Ue(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function et(e){return t=>{t?e.value=t.$el:e.value=null}}function ot(e,t,o){if(!t)return e;const r=D(e.value);let n=null;return Te(e,i=>{n!==null&&window.clearTimeout(n),i===!0?o&&!o.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function tt(e={},t){const o=Ao({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}r!==void 0&&Object.keys(r).forEach(v=>{if(v!==a.key)return;const m=r[v];if(typeof m=="function")m(a);else{const{stop:h=!1,prevent:g=!1}=m;h&&a.stopPropagation(),g&&a.preventDefault(),m.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}n!==void 0&&Object.keys(n).forEach(v=>{if(v!==a.key)return;const m=n[v];if(typeof m=="function")m(a);else{const{stop:h=!1,prevent:g=!1}=m;h&&a.stopPropagation(),g&&a.preventDefault(),m.handler(a)}})},d=()=>{(t===void 0||t.value)&&(he("keydown",document,i),he("keyup",document,l)),t!==void 0&&Te(t,a=>{a?(he("keydown",document,i),he("keyup",document,l)):(ve("keydown",document,i),ve("keyup",document,l))})};return Bo()?(No(d),Ro(()=>{(t===void 0||t.value)&&(ve("keydown",document,i),ve("keyup",document,l))})):d(),Ho(o)}const lo=$({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),rt=$({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function qe(e){return Array.isArray(e)?e:[e]}const Re={STOP:"STOP"};function ao(e,t){const o=t(e);e.children!==void 0&&o!==Re.STOP&&e.children.forEach(r=>ao(r,t))}function nt(e,t={}){const{preserveGroup:o=!1}=t,r=[],n=o?l=>{l.isLeaf||(r.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||r.push(l.key),i(l.children))};function i(l){l.forEach(n)}return i(e),r}function it(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function lt(e){return e.children}function at(e){return e.key}function dt(){return!1}function st(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function ct(e){return e.disabled===!0}function ut(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function ze(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Pe(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function vt(e,t){const o=new Set(e);return t.forEach(r=>{o.has(r)||o.add(r)}),Array.from(o)}function ht(e,t){const o=new Set(e);return t.forEach(r=>{o.has(r)&&o.delete(r)}),Array.from(o)}function ft(e){return(e==null?void 0:e.type)==="group"}class mt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function pt(e,t,o,r){return ye(t.concat(e),o,r,!1)}function gt(e,t){const o=new Set;return e.forEach(r=>{const n=t.treeNodeMap.get(r);if(n!==void 0){let i=n.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function bt(e,t,o,r){const n=ye(t,o,r,!1),i=ye(e,o,r,!0),l=gt(e,o),d=[];return n.forEach(a=>{(i.has(a)||l.has(a))&&d.push(a)}),d.forEach(a=>n.delete(a)),n}function ke(e,t){const{checkedKeys:o,keysToCheck:r,keysToUncheck:n,indeterminateKeys:i,cascade:l,leafOnly:d,checkStrategy:a,allowNotLoaded:v}=e;if(!l)return r!==void 0?{checkedKeys:vt(o,r),indeterminateKeys:Array.from(i)}:n!==void 0?{checkedKeys:ht(o,n),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:m}=t;let h;n!==void 0?h=bt(n,o,t,v):r!==void 0?h=pt(r,o,t,v):h=ye(o,t,v,!1);const g=a==="parent",K=a==="child"||d,P=h,A=new Set,k=Math.max.apply(null,Array.from(m.keys()));for(let T=k;T>=0;T-=1){const j=T===0,F=m.get(T);for(const p of F){if(p.isLeaf)continue;const{key:f,shallowLoaded:z}=p;if(K&&z&&p.children.forEach(s=>{!s.disabled&&!s.isLeaf&&s.shallowLoaded&&P.has(s.key)&&P.delete(s.key)}),p.disabled||!z)continue;let R=!0,S=!1,I=!0;for(const s of p.children){const C=s.key;if(!s.disabled){if(I&&(I=!1),P.has(C))S=!0;else if(A.has(C)){S=!0,R=!1;break}else if(R=!1,S)break}}R&&!I?(g&&p.children.forEach(s=>{!s.disabled&&P.has(s.key)&&P.delete(s.key)}),P.add(f)):S&&A.add(f),j&&K&&P.has(f)&&P.delete(f)}}return{checkedKeys:Array.from(P),indeterminateKeys:Array.from(A)}}function ye(e,t,o,r){const{treeNodeMap:n,getChildren:i}=t,l=new Set,d=new Set(e);return e.forEach(a=>{const v=n.get(a);v!==void 0&&ao(v,m=>{if(m.disabled)return Re.STOP;const{key:h}=m;if(!l.has(h)&&(l.add(h),d.add(h),ut(m.rawNode,i))){if(r)return Re.STOP;if(!o)throw new mt}})}),d}function yt(e,{includeGroup:t=!1,includeSelf:o=!0},r){var n;const i=r.treeNodeMap;let l=e==null?null:(n=i.get(e))!==null&&n!==void 0?n:null;const d={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return d.treeNode=null,d;for(;l;)!l.ignored&&(t||!l.isGroup)&&d.treeNodePath.push(l),l=l.parent;return d.treeNodePath.reverse(),o||d.treeNodePath.pop(),d.keyPath=d.treeNodePath.map(a=>a.key),d}function xt(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Ct(e,t){const o=e.siblings,r=o.length,{index:n}=e;return t?o[(n+1)%r]:n===o.length-1?null:o[n+1]}function Ye(e,t,{loop:o=!1,includeDisabled:r=!1}={}){const n=t==="prev"?wt:Ct,i={reverse:t==="prev"};let l=!1,d=null;function a(v){if(v!==null){if(v===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){d=e;return}}else if((!v.disabled||r)&&!v.ignored&&!v.isGroup){d=v;return}if(v.isGroup){const m=Le(v,i);m!==null?d=m:a(n(v,o))}else{const m=n(v,!1);if(m!==null)a(m);else{const h=St(v);h!=null&&h.isGroup?a(n(h,o)):o&&a(n(v,!0))}}}}return a(e),d}function wt(e,t){const o=e.siblings,r=o.length,{index:n}=e;return t?o[(n-1+r)%r]:n===0?null:o[n-1]}function St(e){return e.parent}function Le(e,t={}){const{reverse:o=!1}=t,{children:r}=e;if(r){const{length:n}=r,i=o?n-1:0,l=o?-1:n,d=o?-1:1;for(let a=i;a!==l;a+=d){const v=r[a];if(!v.disabled&&!v.ignored)if(v.isGroup){const m=Le(v,t);if(m!==null)return m}else return v}}return null}const It={getChild(){return this.ignored?null:Le(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Ye(this,"next",e)},getPrev(e={}){return Ye(this,"prev",e)}};function zt(e,t){const o=t?new Set(t):void 0,r=[];function n(i){i.forEach(l=>{r.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&n(l.children)})}return n(e),r}function Pt(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function so(e,t,o,r,n,i=null,l=0){const d=[];return e.forEach((a,v)=>{var m;const h=Object.create(r);if(h.rawNode=a,h.siblings=d,h.level=l,h.index=v,h.isFirstChild=v===0,h.isLastChild=v+1===e.length,h.parent=i,!h.ignored){const g=n(a);Array.isArray(g)&&(h.children=so(g,t,o,r,n,h,l+1))}d.push(h),t.set(h.key,h),o.has(l)||o.set(l,[]),(m=o.get(l))===null||m===void 0||m.push(h)}),d}function co(e,t={}){var o;const r=new Map,n=new Map,{getDisabled:i=ct,getIgnored:l=dt,getIsGroup:d=ft,getKey:a=at}=t,v=(o=t.getChildren)!==null&&o!==void 0?o:lt,m=t.ignoreEmptyChildren?p=>{const f=v(p);return Array.isArray(f)?f.length?f:null:f}:v,h=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return d(this.rawNode)},get isLeaf(){return it(this.rawNode,m)},get shallowLoaded(){return st(this.rawNode,m)},get ignored(){return l(this.rawNode)},contains(p){return Pt(this,p)}},It),g=so(e,r,n,h,m);function K(p){if(p==null)return null;const f=r.get(p);return f&&!f.isGroup&&!f.ignored?f:null}function P(p){if(p==null)return null;const f=r.get(p);return f&&!f.ignored?f:null}function A(p,f){const z=P(p);return z?z.getPrev(f):null}function k(p,f){const z=P(p);return z?z.getNext(f):null}function T(p){const f=P(p);return f?f.getParent():null}function j(p){const f=P(p);return f?f.getChild():null}const F={treeNodes:g,treeNodeMap:r,levelTreeNodeMap:n,maxLevel:Math.max(...n.keys()),getChildren:m,getFlattenedNodes(p){return zt(g,p)},getNode:K,getPrev:A,getNext:k,getParent:T,getChild:j,getFirstAvailableNode(){return xt(g)},getPath(p,f={}){return yt(p,f,F)},getCheckedKeys(p,f={}){const{cascade:z=!0,leafOnly:R=!1,checkStrategy:S="all",allowNotLoaded:I=!1}=f;return ke({checkedKeys:ze(p),indeterminateKeys:Pe(p),cascade:z,leafOnly:R,checkStrategy:S,allowNotLoaded:I},F)},check(p,f,z={}){const{cascade:R=!0,leafOnly:S=!1,checkStrategy:I="all",allowNotLoaded:s=!1}=z;return ke({checkedKeys:ze(f),indeterminateKeys:Pe(f),keysToCheck:p==null?[]:qe(p),cascade:R,leafOnly:S,checkStrategy:I,allowNotLoaded:s},F)},uncheck(p,f,z={}){const{cascade:R=!0,leafOnly:S=!1,checkStrategy:I="all",allowNotLoaded:s=!1}=z;return ke({checkedKeys:ze(f),indeterminateKeys:Pe(f),keysToUncheck:p==null?[]:qe(p),cascade:R,leafOnly:S,checkStrategy:I,allowNotLoaded:s},F)},getNonLeafKeys(p={}){return nt(g,p)}};return F}const kt={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},At=e=>{const{primaryColor:t,textColor2:o,dividerColor:r,hoverColor:n,popoverColor:i,invertedColor:l,borderRadius:d,fontSizeSmall:a,fontSizeMedium:v,fontSizeLarge:m,fontSizeHuge:h,heightSmall:g,heightMedium:K,heightLarge:P,heightHuge:A,textColor3:k,opacityDisabled:T}=e;return Object.assign(Object.assign({},kt),{optionHeightSmall:g,optionHeightMedium:K,optionHeightLarge:P,optionHeightHuge:A,borderRadius:d,fontSizeSmall:a,fontSizeMedium:v,fontSizeLarge:m,fontSizeHuge:h,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:r,suffixColor:o,prefixColor:o,optionColorHover:n,optionColorActive:me(t,{alpha:.1}),groupHeaderTextColor:k,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:l,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:T})},Nt=_e({name:"Dropdown",common:xe,peers:{Popover:Eo},self:At}),uo=Nt,vo=$({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Rt=e=>{const{textColorBase:t,opacity1:o,opacity2:r,opacity3:n,opacity4:i,opacity5:l}=e;return{color:t,opacity1Depth:o,opacity2Depth:r,opacity3Depth:n,opacity4Depth:i,opacity5Depth:l}},Ht={name:"Icon",common:xe,self:Rt},Tt=Ht,_t=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("color-transition",{transition:"color .3s var(--n-bezier)"}),N("depth",{color:"var(--n-color)"},[H("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),H("svg",{height:"1em",width:"1em"})]),Kt=Object.assign(Object.assign({},W.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Ot=$({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Kt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),r=W("Icon","-icon",_t,Tt,e,t),n=w(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:d},self:a}=r.value;if(l!==void 0){const{color:v,[`opacity${l}Depth`]:m}=a;return{"--n-bezier":d,"--n-color":v,"--n-opacity":m}}return{"--n-bezier":d,"--n-color":"","--n-opacity":""}}),i=o?de("icon",w(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:t,mergedStyle:w(()=>{const{size:l,color:d}=e;return{fontSize:ge(l),color:d}}),cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:r,component:n,onRender:i,themeClass:l}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Qe("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),u("i",Ke(this.$attrs,{role:"img",class:[`${r}-icon`,l,{[`${r}-icon--depth`]:o,[`${r}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?u(n):this.$slots)}}),$e=oe("n-dropdown-menu"),Ce=oe("n-dropdown"),Xe=oe("n-dropdown-option");function He(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Lt(e){return e.type==="group"}function ho(e){return e.type==="divider"}function $t(e){return e.type==="render"}const fo=$({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=V(Ce),{hoverKeyRef:o,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:d,mergedShowRef:a,renderLabelRef:v,renderIconRef:m,labelFieldRef:h,childrenFieldRef:g,renderOptionRef:K,nodePropsRef:P,menuPropsRef:A}=t,k=V(Xe,null),T=V($e),j=V(to),F=w(()=>e.tmNode.rawNode),p=w(()=>{const{value:_}=g;return He(e.tmNode.rawNode,_)}),f=w(()=>{const{disabled:_}=e.tmNode;return _}),z=w(()=>{if(!p.value)return!1;const{key:_,disabled:M}=e.tmNode;if(M)return!1;const{value:Z}=o,{value:te}=r,{value:Ie}=n,{value:re}=i;return Z!==null?re.includes(_):te!==null?re.includes(_)&&re[re.length-1]!==_:Ie!==null?re.includes(_):!1}),R=w(()=>r.value===null&&!d.value),S=ot(z,300,R),I=w(()=>!!(k!=null&&k.enteringSubmenuRef.value)),s=D(!1);q(Xe,{enteringSubmenuRef:s});function C(){s.value=!0}function x(){s.value=!1}function B(){const{parentKey:_,tmNode:M}=e;M.disabled||!a.value||(n.value=_,r.value=null,o.value=M.key)}function L(){const{tmNode:_}=e;_.disabled||!a.value||o.value!==_.key&&B()}function O(_){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:M}=_;M&&!Ue({target:M},"dropdownOption")&&!Ue({target:M},"scrollbarRail")&&(o.value=null)}function c(){const{value:_}=p,{tmNode:M}=e;!a.value||!_&&!M.disabled&&(t.doSelect(M.key,M.rawNode),t.doUpdateShow(!1))}return{labelField:h,renderLabel:v,renderIcon:m,siblingHasIcon:T.showIconRef,siblingHasSubmenu:T.hasSubmenuRef,menuProps:A,popoverBody:j,animated:d,mergedShowSubmenu:w(()=>S.value&&!I.value),rawNode:F,hasSubmenu:p,pending:le(()=>{const{value:_}=i,{key:M}=e.tmNode;return _.includes(M)}),childActive:le(()=>{const{value:_}=l,{key:M}=e.tmNode,Z=_.findIndex(te=>M===te);return Z===-1?!1:Z<_.length-1}),active:le(()=>{const{value:_}=l,{key:M}=e.tmNode,Z=_.findIndex(te=>M===te);return Z===-1?!1:Z===_.length-1}),mergedDisabled:f,renderOption:K,nodeProps:P,handleClick:c,handleMouseMove:L,handleMouseEnter:B,handleMouseLeave:O,handleSubmenuBeforeEnter:C,handleSubmenuAfterEnter:x}},render(){var e,t;const{animated:o,rawNode:r,mergedShowSubmenu:n,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:d,renderLabel:a,renderIcon:v,renderOption:m,nodeProps:h,props:g,scrollable:K}=this;let P=null;if(n){const j=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);P=u(mo,Object.assign({},j,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=h==null?void 0:h(r),T=u("div",Object.assign({class:[`${i}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),u("div",Ke(A,g),[u("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[v?v(r):X(r.icon)]),u("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(r):X((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),u("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,d&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(Ot,null,{default:()=>u(lo,null)}):null)]),this.hasSubmenu?u(Fo,null,{default:()=>[u(Mo,null,{default:()=>u("div",{class:`${i}-dropdown-offset-container`},u(jo,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>u("div",{class:`${i}-dropdown-menu-wrapper`},o?u(To,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>P}):P)}))})]}):null);return m?m({node:T,option:r}):T}}),Bt=$({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=V($e),{renderLabelRef:o,labelFieldRef:r,nodePropsRef:n,renderOptionRef:i}=V(Ce);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:n,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:r,nodeProps:n,renderLabel:i,renderOption:l}=this,{rawNode:d}=this.tmNode,a=u("div",Object.assign({class:`${t}-dropdown-option`},n==null?void 0:n(d)),u("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},X(d.icon)),u("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(d):X((e=d.title)!==null&&e!==void 0?e:d[this.labelField])),u("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:d}):a}}),Et=$({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:r}=e;return u(eo,null,u(Bt,{clsPrefix:o,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:i}=n;return i.show===!1?null:ho(i)?u(vo,{clsPrefix:o,key:n.key}):n.isGroup?(Qe("dropdown","`group` node is not allowed to be put in `group` node."),null):u(fo,{clsPrefix:o,tmNode:n,parentKey:t,key:n.key})}))}}),Ft=$({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return u("div",t,[e==null?void 0:e()])}}),mo=$({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=V(Ce);q($e,{showIconRef:w(()=>{const n=t.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:d}=i;return n?n(d):d.icon})}),hasSubmenuRef:w(()=>{const{value:n}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>He(a,n));const{rawNode:d}=i;return He(d,n)})})});const r=D(null);return q(Do,null),q(Vo,null),q(to,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,r=this.tmNodes.map(n=>{const{rawNode:i}=n;return i.show===!1?null:$t(i)?u(Ft,{tmNode:n,key:n.key}):ho(i)?u(vo,{clsPrefix:t,key:n.key}):Lt(i)?u(Et,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key}):u(fo,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key,props:i.props,scrollable:o})});return u("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?u(Zo,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Go({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),Mt=b("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Wo(),b("dropdown-option",`
 position: relative;
 `,[H("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[H("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[H("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),se("disabled",[N("pending",`
 color: var(--n-option-text-color-hover);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),H("&::before","background-color: var(--n-option-color-hover);")]),N("active",`
 color: var(--n-option-text-color-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),H("&::before","background-color: var(--n-option-color-active);")]),N("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[y("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[y("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),y("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),y("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),y("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[N("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),b("icon",`
 font-size: var(--n-option-icon-size);
 `)]),b("dropdown-menu","pointer-events: all;")]),b("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),H(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("scrollable",`
 padding: var(--n-padding);
 `),N("scrollable",[y("content",`
 padding: var(--n-padding);
 `)])]),jt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Dt=Object.keys(ro),Vt=Object.assign(Object.assign(Object.assign({},ro),jt),W.props),Gt=$({name:"Dropdown",inheritAttrs:!1,props:Vt,setup(e){const t=D(!1),o=be(U(e,"show"),t),r=w(()=>{const{keyField:x,childrenField:B}=e;return co(e.options,{getKey(L){return L[x]},getDisabled(L){return L.disabled===!0},getIgnored(L){return L.type==="divider"||L.type==="render"},getChildren(L){return L[B]}})}),n=w(()=>r.value.treeNodes),i=D(null),l=D(null),d=D(null),a=w(()=>{var x,B,L;return(L=(B=(x=i.value)!==null&&x!==void 0?x:l.value)!==null&&B!==void 0?B:d.value)!==null&&L!==void 0?L:null}),v=w(()=>r.value.getPath(a.value).keyPath),m=w(()=>r.value.getPath(e.value).keyPath),h=le(()=>e.keyboard&&o.value);tt({keydown:{ArrowUp:{prevent:!0,handler:f},ArrowRight:{prevent:!0,handler:p},ArrowDown:{prevent:!0,handler:z},ArrowLeft:{prevent:!0,handler:F},Enter:{prevent:!0,handler:R},Escape:j}},h);const{mergedClsPrefixRef:g,inlineThemeDisabled:K}=ae(e),P=W("Dropdown","-dropdown",Mt,uo,e,g);q(Ce,{labelFieldRef:U(e,"labelField"),childrenFieldRef:U(e,"childrenField"),renderLabelRef:U(e,"renderLabel"),renderIconRef:U(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:d,pendingKeyPathRef:v,activeKeyPathRef:m,animatedRef:U(e,"animated"),mergedShowRef:o,nodePropsRef:U(e,"nodeProps"),renderOptionRef:U(e,"renderOption"),menuPropsRef:U(e,"menuProps"),doSelect:A,doUpdateShow:k}),Te(o,x=>{!e.animated&&!x&&T()});function A(x,B){const{onSelect:L}=e;L&&G(L,x,B)}function k(x){const{"onUpdate:show":B,onUpdateShow:L}=e;B&&G(B,x),L&&G(L,x),t.value=x}function T(){i.value=null,l.value=null,d.value=null}function j(){k(!1)}function F(){I("left")}function p(){I("right")}function f(){I("up")}function z(){I("down")}function R(){const x=S();x!=null&&x.isLeaf&&o.value&&(A(x.key,x.rawNode),k(!1))}function S(){var x;const{value:B}=r,{value:L}=a;return!B||L===null?null:(x=B.getNode(L))!==null&&x!==void 0?x:null}function I(x){const{value:B}=a,{value:{getFirstAvailableNode:L}}=r;let O=null;if(B===null){const c=L();c!==null&&(O=c.key)}else{const c=S();if(c){let _;switch(x){case"down":_=c.getNext();break;case"up":_=c.getPrev();break;case"right":_=c.getChild();break;case"left":_=c.getParent();break}_&&(O=_.key)}}O!==null&&(i.value=null,l.value=O)}const s=w(()=>{const{size:x,inverted:B}=e,{common:{cubicBezierEaseInOut:L},self:O}=P.value,{padding:c,dividerColor:_,borderRadius:M,optionOpacityDisabled:Z,[ne("optionIconSuffixWidth",x)]:te,[ne("optionSuffixWidth",x)]:Ie,[ne("optionIconPrefixWidth",x)]:re,[ne("optionPrefixWidth",x)]:So,[ne("fontSize",x)]:Io,[ne("optionHeight",x)]:zo,[ne("optionIconSize",x)]:Po}=O,E={"--n-bezier":L,"--n-font-size":Io,"--n-padding":c,"--n-border-radius":M,"--n-option-height":zo,"--n-option-prefix-width":So,"--n-option-icon-prefix-width":re,"--n-option-suffix-width":Ie,"--n-option-icon-suffix-width":te,"--n-option-icon-size":Po,"--n-divider-color":_,"--n-option-opacity-disabled":Z};return B?(E["--n-color"]=O.colorInverted,E["--n-option-color-hover"]=O.optionColorHoverInverted,E["--n-option-color-active"]=O.optionColorActiveInverted,E["--n-option-text-color"]=O.optionTextColorInverted,E["--n-option-text-color-hover"]=O.optionTextColorHoverInverted,E["--n-option-text-color-active"]=O.optionTextColorActiveInverted,E["--n-option-text-color-child-active"]=O.optionTextColorChildActiveInverted,E["--n-prefix-color"]=O.prefixColorInverted,E["--n-suffix-color"]=O.suffixColorInverted,E["--n-group-header-text-color"]=O.groupHeaderTextColorInverted):(E["--n-color"]=O.color,E["--n-option-color-hover"]=O.optionColorHover,E["--n-option-color-active"]=O.optionColorActive,E["--n-option-text-color"]=O.optionTextColor,E["--n-option-text-color-hover"]=O.optionTextColorHover,E["--n-option-text-color-active"]=O.optionTextColorActive,E["--n-option-text-color-child-active"]=O.optionTextColorChildActive,E["--n-prefix-color"]=O.prefixColor,E["--n-suffix-color"]=O.suffixColor,E["--n-group-header-text-color"]=O.groupHeaderTextColor),E}),C=K?de("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),s,e):void 0;return{mergedClsPrefix:g,mergedTheme:P,tmNodes:n,mergedShow:o,handleAfterLeave:()=>{!e.animated||T()},doUpdateShow:k,cssVars:K?void 0:s,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const e=(r,n,i,l,d)=>{var a;const{mergedClsPrefix:v,menuProps:m}=this;(a=this.onRender)===null||a===void 0||a.call(this);const h=(m==null?void 0:m(void 0,this.tmNodes.map(K=>K.rawNode)))||{},g={ref:et(n),class:[r,`${v}-dropdown`,this.themeClass],clsPrefix:v,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:d};return u(mo,Ke(this.$attrs,g,h))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Uo,Object.assign({},pe(this.$props,Dt),o),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),Wt=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:i,actionColor:l,scrollbarColor:d,scrollbarColorHover:a,invertedColor:v}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:l,headerColor:n,headerColorInverted:v,footerColor:l,footerColorInverted:v,headerBorderColor:i,headerBorderColorInverted:v,footerBorderColor:i,footerBorderColorInverted:v,siderBorderColor:i,siderBorderColorInverted:v,siderColor:n,siderColorInverted:v,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:De(r,d),siderToggleBarColorHover:De(r,a),__invertScrollbar:"true"}},Ut=_e({name:"Layout",common:xe,peers:{Scrollbar:Jo},self:Wt}),we=Ut;function qt(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const Yt=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:n,textColor1:i,fontSize:l,dividerColor:d,hoverColor:a,primaryColorHover:v}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:me(r,{alpha:.1}),itemColorActiveHover:me(r,{alpha:.1}),itemColorActiveCollapsed:me(r,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:v,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:v,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:l,dividerColor:d},qt("#BBB",r,"#FFF","#AAA"))},Xt=_e({name:"Menu",common:xe,peers:{Tooltip:qo,Dropdown:uo},self:Yt}),Zt=Xt,po=oe("n-layout-sider"),Se={type:String,default:"static"},Jt=b("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[b("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Qt={embedded:Boolean,position:Se,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},go=oe("n-layout");function er(e){return $({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},W.props),Qt),setup(t){const o=D(null),r=D(null),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=ae(t),l=W("Layout","-layout",Jt,we,t,n);function d(A,k){if(t.nativeScrollbar){const{value:T}=o;T&&(k===void 0?T.scrollTo(A):T.scrollTo(A,k))}else{const{value:T}=r;T&&T.scrollTo(A,k)}}q(go,t);let a=0,v=0;const m=A=>{var k;const T=A.target;a=T.scrollLeft,v=T.scrollTop,(k=t.onScroll)===null||k===void 0||k.call(t,A)};no(()=>{if(t.nativeScrollbar){const A=o.value;A&&(A.scrollTop=v,A.scrollLeft=a)}});const h={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},g={scrollTo:d},K=w(()=>{const{common:{cubicBezierEaseInOut:A},self:k}=l.value;return{"--n-bezier":A,"--n-color":t.embedded?k.colorEmbedded:k.color,"--n-text-color":k.textColor}}),P=i?de("layout",w(()=>t.embedded?"e":""),K,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:h,mergedTheme:l,handleNativeElScroll:m,cssVars:i?void 0:K,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender},g)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return u("div",{class:i,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):u(io,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Ae=er(!1),or=b("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),N("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),tr={position:Se,inverted:Boolean,bordered:{type:Boolean,default:!1}},rr=$({name:"LayoutHeader",props:Object.assign(Object.assign({},W.props),tr),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),r=W("Layout","-layout-header",or,we,e,t),n=w(()=>{const{common:{cubicBezierEaseInOut:l},self:d}=r.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=d.headerColorInverted,a["--n-text-color"]=d.textColorInverted,a["--n-border-color"]=d.headerBorderColorInverted):(a["--n-color"]=d.headerColor,a["--n-text-color"]=d.textColor,a["--n-border-color"]=d.headerBorderColor),a}),i=o?de("layout-header",w(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),nr=b("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),N("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),ir=Object.assign(Object.assign({},W.props),{inverted:Boolean,position:Se,bordered:Boolean}),lr=$({name:"LayoutFooter",props:ir,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),r=W("Layout","-layout-footer",nr,we,e,t),n=w(()=>{const{common:{cubicBezierEaseInOut:l},self:d}=r.value,a={"--n-bezier":l};return e.inverted?(a["--n-color"]=d.footerColorInverted,a["--n-text-color"]=d.textColorInverted,a["--n-border-color"]=d.footerBorderColorInverted):(a["--n-color"]=d.footerColor,a["--n-text-color"]=d.textColor,a["--n-border-color"]=d.footerBorderColor),a}),i=o?de("layout-footer",w(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),ar=b("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[N("bordered",[y("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),y("left-placement",[N("bordered",[y("border",`
 right: 0;
 `)])]),N("right-placement",`
 justify-content: flex-start;
 `,[N("bordered",[y("border",`
 left: 0;
 `)]),N("collapsed",[b("layout-toggle-button",[b("base-icon",`
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",[H("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),b("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[b("base-icon",`
 transform: rotate(0);
 `)]),b("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[H("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),N("collapsed",[b("layout-toggle-bar",[H("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),b("layout-toggle-button",[b("base-icon",`
 transform: rotate(0);
 `)])]),b("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[b("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[y("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),y("bottom",`
 position: absolute;
 top: 34px;
 `),H("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),H("&:hover",[y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),y("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),b("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),N("show-content",[b("layout-sider-scroll-container",{opacity:1})]),N("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),dr=$({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(oo,{clsPrefix:e},{default:()=>u(lo,null)}))}}),sr=$({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),cr={position:Se,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ur=$({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),cr),setup(e){const t=V(go),o=D(null),r=D(null),n=w(()=>ge(a.value?e.collapsedWidth:e.width)),i=w(()=>e.collapseMode!=="transform"?{}:{minWidth:ge(e.width)}),l=w(()=>t?t.siderPlacement:"left"),d=D(e.defaultCollapsed),a=be(U(e,"collapsed"),d);function v(f,z){if(e.nativeScrollbar){const{value:R}=o;R&&(z===void 0?R.scrollTo(f):R.scrollTo(f,z))}else{const{value:R}=r;R&&R.scrollTo(f,z)}}function m(){const{"onUpdate:collapsed":f,onUpdateCollapsed:z,onExpand:R,onCollapse:S}=e,{value:I}=a;z&&G(z,!I),f&&G(f,!I),d.value=!I,I?R&&G(R):S&&G(S)}let h=0,g=0;const K=f=>{var z;const R=f.target;h=R.scrollLeft,g=R.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,f)};no(()=>{if(e.nativeScrollbar){const f=o.value;f&&(f.scrollTop=g,f.scrollLeft=h)}}),q(po,{collapsedRef:a,collapseModeRef:U(e,"collapseMode")});const{mergedClsPrefixRef:P,inlineThemeDisabled:A}=ae(e),k=W("Layout","-layout-sider",ar,we,e,P);function T(f){var z,R;f.propertyName==="max-width"&&(a.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(R=e.onAfterEnter)===null||R===void 0||R.call(e))}const j={scrollTo:v},F=w(()=>{const{common:{cubicBezierEaseInOut:f},self:z}=k.value,{siderToggleButtonColor:R,siderToggleButtonBorder:S,siderToggleBarColor:I,siderToggleBarColorHover:s}=z,C={"--n-bezier":f,"--n-toggle-button-color":R,"--n-toggle-button-border":S,"--n-toggle-bar-color":I,"--n-toggle-bar-color-hover":s};return e.inverted?(C["--n-color"]=z.siderColorInverted,C["--n-text-color"]=z.textColorInverted,C["--n-border-color"]=z.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,C.__invertScrollbar=z.__invertScrollbar):(C["--n-color"]=z.siderColor,C["--n-text-color"]=z.textColor,C["--n-border-color"]=z.siderBorderColor,C["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),C}),p=A?de("layout-sider",w(()=>e.inverted?"a":"b"),F,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:P,mergedTheme:k,styleMaxWidth:n,mergedCollapsed:a,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:K,handleTransitionend:T,handleTriggerClick:m,inlineThemeDisabled:A,cssVars:F,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},j)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ge(this.width)}]},this.nativeScrollbar?u("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(io,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?u(sr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(dr,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),ue=oe("n-menu"),Be=oe("n-submenu"),Ee=oe("n-menu-item-group"),fe=8;function Fe(e){const t=V(ue),{props:o,mergedCollapsedRef:r}=t,n=V(Be,null),i=V(Ee,null),l=w(()=>o.mode==="horizontal"),d=w(()=>l.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=w(()=>{var g;return Math.max((g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize,o.iconSize)}),v=w(()=>{var g;return!l.value&&e.root&&r.value&&(g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize}),m=w(()=>{if(l.value)return;const{collapsedWidth:g,indent:K,rootIndent:P}=o,{root:A,isGroup:k}=e,T=P===void 0?K:P;if(A)return r.value?g/2-a.value/2:T;if(i)return K/2+i.paddingLeftRef.value;if(n)return(k?K/2:K)+n.paddingLeftRef.value}),h=w(()=>{const{collapsedWidth:g,indent:K,rootIndent:P}=o,{value:A}=a,{root:k}=e;return l.value||!k||!r.value?fe:(P===void 0?K:P)+A+fe-(g+A)/2});return{dropdownPlacement:d,activeIconSize:v,maxIconSize:a,paddingLeft:m,iconMarginRight:h,NMenu:t,NSubmenu:n}}const Me={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},bo=Object.assign(Object.assign({},Me),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),vr=$({name:"MenuOptionGroup",props:bo,setup(e){q(Be,null);const t=Fe(e);q(Ee,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=V(ue);return function(){const{value:n}=o,i=t.paddingLeft.value,{nodeProps:l}=r,d=l==null?void 0:l(e.tmNode.rawNode);return u("div",{class:`${n}-menu-item-group`,role:"group"},u("div",Object.assign({},d,{class:[`${n}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),X(e.title),e.extra?u(eo,null," ",X(e.extra)):null),u("div",null,e.tmNodes.map(a=>je(a,r))))}}}),yo=$({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=V(ue);return{menuProps:t,style:w(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:w(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:n,expandIcon:i}}=this,l=o?o(t.rawNode):X(this.icon);return u("div",{onClick:d=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):X(this.title),this.extra||n?u("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):X(this.extra)):null),this.showArrow?u(oo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):u(rt,null)}):null)}}),xo=Object.assign(Object.assign({},Me),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),hr=$({name:"Submenu",props:xo,setup(e){const t=Fe(e),{NMenu:o,NSubmenu:r}=t,{props:n,mergedCollapsedRef:i,mergedThemeRef:l}=o,d=w(()=>{const{disabled:g}=e;return r!=null&&r.mergedDisabledRef.value||n.disabled?!0:g}),a=D(!1);q(Be,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),q(Ee,null);function v(){const{onClick:g}=e;g&&g()}function m(){d.value||(i.value||o.toggleExpand(e.internalKey),v())}function h(g){a.value=g}return{menuProps:n,mergedTheme:l,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:le(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:w(()=>n.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:w(()=>!d.value&&(n.mode==="horizontal"||i.value)),handlePopoverShowChange:h,handleClick:m}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,n=()=>{const{isHorizontal:l,paddingLeft:d,collapsed:a,mergedDisabled:v,maxIconSize:m,activeIconSize:h,title:g,childActive:K,icon:P,handleClick:A,menuProps:{nodeProps:k},dropdownShow:T,iconMarginRight:j,tmNode:F,mergedClsPrefix:p}=this,f=k==null?void 0:k(F.rawNode);return u("div",Object.assign({},f,{class:[`${p}-menu-item`,f==null?void 0:f.class],role:"menuitem"}),u(yo,{tmNode:F,paddingLeft:d,collapsed:a,disabled:v,iconMarginRight:j,maxIconSize:m,activeIconSize:h,title:g,extra:this.extra,showArrow:!l,childActive:K,clsPrefix:p,icon:P,hover:T,onClick:A}))},i=()=>u(_o,null,{default:()=>{const{tmNodes:l,collapsed:d}=this;return d?null:u("div",{class:`${t}-submenu-children`,role:"menu"},l.map(a=>je(a,this.menuProps)))}});return this.root?u(Gt,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:i())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),i())}}),Co=Object.assign(Object.assign({},Me),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),fr=$({name:"MenuOption",props:Co,setup(e){const t=Fe(e),{NSubmenu:o,NMenu:r}=t,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:l}=r,d=o?o.mergedDisabledRef:{value:!1},a=w(()=>d.value||e.disabled);function v(h){const{onClick:g}=e;g&&g(h)}function m(h){a.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),v(h))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:le(()=>e.root&&l.value&&n.mode!=="horizontal"&&!a.value),selected:le(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:m}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:n}}=this,i=n==null?void 0:n(o.rawNode);return u("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),u(Yo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):X(this.title),trigger:()=>u(yo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),mr=$({name:"MenuDivider",setup(){const e=V(ue),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${t.value}-menu-divider`})}}),pr=Oe(bo),gr=Oe(Co),br=Oe(xo);function wo(e){return e.type==="divider"||e.type==="render"}function yr(e){return e.type==="divider"}function je(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(wo(o))return yr(o)?u(mr,Object.assign({key:e.key},o.props)):null;const{labelField:n}=t,{key:i,level:l,isGroup:d}=e,a=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:d});return e.children?e.isGroup?u(vr,pe(a,pr,{tmNode:e,tmNodes:e.children,key:i})):u(hr,pe(a,br,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):u(fr,pe(a,gr,{key:i,tmNode:e}))}const Ze=[H("&::before","background-color: var(--n-item-color-hover);"),y("arrow",`
 color: var(--n-arrow-color-hover);
 `),y("icon",`
 color: var(--n-item-icon-color-hover);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[H("a",`
 color: var(--n-item-text-color-hover);
 `),y("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Je=[y("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),b("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[H("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],xr=H([b("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[b("submenu","margin: 0;"),b("menu-item","margin: 0;"),b("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[H("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),b("menu-item-content",[N("selected",[y("icon","color: var(--n-item-icon-color-active-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[H("a","color: var(--n-item-text-color-active-horizontal);"),y("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[H("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),y("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),y("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),se("disabled",[se("selected, child-active",[H("&:focus-within",Je)]),N("selected",[ie(null,[y("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[H("a","color: var(--n-item-text-color-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),N("child-active",[ie(null,[y("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[H("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),y("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ie("border-bottom: 2px solid var(--n-border-color-horizontal);",Je)]),b("menu-item-content-header",[H("a","color: var(--n-item-text-color-horizontal);")])])]),N("collapsed",[b("menu-item-content",[N("selected",[H("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),b("menu-item-content-header","opacity: 0;"),y("arrow","opacity: 0;"),y("icon","color: var(--n-item-icon-color-collapsed);")])]),b("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),b("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[H("> *","z-index: 1;"),H("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[y("arrow","transform: rotate(0);")]),N("selected",[H("&::before","background-color: var(--n-item-color-active);"),y("arrow","color: var(--n-arrow-color-active);"),y("icon","color: var(--n-item-icon-color-active);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[H("a","color: var(--n-item-text-color-active);"),y("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[H("a",`
 color: var(--n-item-text-color-child-active);
 `),y("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),y("arrow",`
 color: var(--n-arrow-color-child-active);
 `),y("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),se("disabled",[se("selected, child-active",[H("&:focus-within",Ze)]),N("selected",[ie(null,[y("arrow","color: var(--n-arrow-color-active-hover);"),y("icon","color: var(--n-item-icon-color-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[H("a","color: var(--n-item-text-color-active-hover);"),y("extra","color: var(--n-item-text-color-active-hover);")])])]),N("child-active",[ie(null,[y("arrow","color: var(--n-arrow-color-child-active-hover);"),y("icon","color: var(--n-item-icon-color-child-active-hover);"),b("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[H("a","color: var(--n-item-text-color-child-active-hover);"),y("extra","color: var(--n-item-text-color-child-active-hover);")])])]),N("selected",[ie(null,[H("&::before","background-color: var(--n-item-color-active-hover);")])]),ie(null,Ze)]),y("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),y("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),b("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[H("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[H("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),y("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),b("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[b("menu-item-content",`
 height: var(--n-item-height);
 `),b("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ko({duration:".2s"})])]),b("menu-item-group",[b("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),b("menu-tooltip",[H("a",`
 color: inherit;
 text-decoration: none;
 `)]),b("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ie(e,t){return[N("hover",e,t),H("&:hover",e,t)]}const Cr=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),wr=$({name:"Menu",props:Cr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),r=W("Menu","-menu",xr,Zt,e,t),n=V(po,null),i=w(()=>{var S;const{collapsed:I}=e;if(I!==void 0)return I;if(n){const{collapseModeRef:s,collapsedRef:C}=n;if(s.value==="width")return(S=C.value)!==null&&S!==void 0?S:!1}return!1}),l=w(()=>{const{keyField:S,childrenField:I,disabledField:s}=e;return co(e.items||e.options,{getIgnored(C){return wo(C)},getChildren(C){return C[I]},getDisabled(C){return C[s]},getKey(C){var x;return(x=C[S])!==null&&x!==void 0?x:C.name}})}),d=w(()=>new Set(l.value.treeNodes.map(S=>S.key))),{watchProps:a}=e,v=D(null);a!=null&&a.includes("defaultValue")?Ve(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const m=U(e,"value"),h=be(m,v),g=D([]),K=()=>{g.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(h.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?Ve(K):K();const P=Xo(e,["expandedNames","expandedKeys"]),A=be(P,g),k=w(()=>l.value.treeNodes),T=w(()=>l.value.getPath(h.value).keyPath);q(ue,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:h,mergedExpandedKeysRef:A,activePathRef:T,mergedClsPrefixRef:t,isHorizontalRef:w(()=>e.mode==="horizontal"),invertedRef:U(e,"inverted"),doSelect:j,toggleExpand:p});function j(S,I){const{"onUpdate:value":s,onUpdateValue:C,onSelect:x}=e;C&&G(C,S,I),s&&G(s,S,I),x&&G(x,S,I),v.value=S}function F(S){const{"onUpdate:expandedKeys":I,onUpdateExpandedKeys:s,onExpandedNamesChange:C,onOpenNamesChange:x}=e;I&&G(I,S),s&&G(s,S),C&&G(C,S),x&&G(x,S),g.value=S}function p(S){const I=Array.from(A.value),s=I.findIndex(C=>C===S);if(~s)I.splice(s,1);else{if(e.accordion&&d.value.has(S)){const C=I.findIndex(x=>d.value.has(x));C>-1&&I.splice(C,1)}I.push(S)}F(I)}const f=S=>{const I=l.value.getPath(S??h.value,{includeSelf:!1}).keyPath;if(!I.length)return;const s=Array.from(A.value),C=new Set([...s,...I]);e.accordion&&d.value.forEach(x=>{C.has(x)&&!I.includes(x)&&C.delete(x)}),F(Array.from(C))},z=w(()=>{const{inverted:S}=e,{common:{cubicBezierEaseInOut:I},self:s}=r.value,{borderRadius:C,borderColorHorizontal:x,fontSize:B,itemHeight:L,dividerColor:O}=s,c={"--n-divider-color":O,"--n-bezier":I,"--n-font-size":B,"--n-border-color-horizontal":x,"--n-border-radius":C,"--n-item-height":L};return S?(c["--n-group-text-color"]=s.groupTextColorInverted,c["--n-color"]=s.colorInverted,c["--n-item-text-color"]=s.itemTextColorInverted,c["--n-item-text-color-hover"]=s.itemTextColorHoverInverted,c["--n-item-text-color-active"]=s.itemTextColorActiveInverted,c["--n-item-text-color-child-active"]=s.itemTextColorChildActiveInverted,c["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveInverted,c["--n-item-text-color-active-hover"]=s.itemTextColorActiveHoverInverted,c["--n-item-icon-color"]=s.itemIconColorInverted,c["--n-item-icon-color-hover"]=s.itemIconColorHoverInverted,c["--n-item-icon-color-active"]=s.itemIconColorActiveInverted,c["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHoverInverted,c["--n-item-icon-color-child-active"]=s.itemIconColorChildActiveInverted,c["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHoverInverted,c["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsedInverted,c["--n-item-text-color-horizontal"]=s.itemTextColorHorizontalInverted,c["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontalInverted,c["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontalInverted,c["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontalInverted,c["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontalInverted,c["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontalInverted,c["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontalInverted,c["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontalInverted,c["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontalInverted,c["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontalInverted,c["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontalInverted,c["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontalInverted,c["--n-arrow-color"]=s.arrowColorInverted,c["--n-arrow-color-hover"]=s.arrowColorHoverInverted,c["--n-arrow-color-active"]=s.arrowColorActiveInverted,c["--n-arrow-color-active-hover"]=s.arrowColorActiveHoverInverted,c["--n-arrow-color-child-active"]=s.arrowColorChildActiveInverted,c["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHoverInverted,c["--n-item-color-hover"]=s.itemColorHoverInverted,c["--n-item-color-active"]=s.itemColorActiveInverted,c["--n-item-color-active-hover"]=s.itemColorActiveHoverInverted,c["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsedInverted):(c["--n-group-text-color"]=s.groupTextColor,c["--n-color"]=s.color,c["--n-item-text-color"]=s.itemTextColor,c["--n-item-text-color-hover"]=s.itemTextColorHover,c["--n-item-text-color-active"]=s.itemTextColorActive,c["--n-item-text-color-child-active"]=s.itemTextColorChildActive,c["--n-item-text-color-child-active-hover"]=s.itemTextColorChildActiveHover,c["--n-item-text-color-active-hover"]=s.itemTextColorActiveHover,c["--n-item-icon-color"]=s.itemIconColor,c["--n-item-icon-color-hover"]=s.itemIconColorHover,c["--n-item-icon-color-active"]=s.itemIconColorActive,c["--n-item-icon-color-active-hover"]=s.itemIconColorActiveHover,c["--n-item-icon-color-child-active"]=s.itemIconColorChildActive,c["--n-item-icon-color-child-active-hover"]=s.itemIconColorChildActiveHover,c["--n-item-icon-color-collapsed"]=s.itemIconColorCollapsed,c["--n-item-text-color-horizontal"]=s.itemTextColorHorizontal,c["--n-item-text-color-hover-horizontal"]=s.itemTextColorHoverHorizontal,c["--n-item-text-color-active-horizontal"]=s.itemTextColorActiveHorizontal,c["--n-item-text-color-child-active-horizontal"]=s.itemTextColorChildActiveHorizontal,c["--n-item-text-color-child-active-hover-horizontal"]=s.itemTextColorChildActiveHoverHorizontal,c["--n-item-text-color-active-hover-horizontal"]=s.itemTextColorActiveHoverHorizontal,c["--n-item-icon-color-horizontal"]=s.itemIconColorHorizontal,c["--n-item-icon-color-hover-horizontal"]=s.itemIconColorHoverHorizontal,c["--n-item-icon-color-active-horizontal"]=s.itemIconColorActiveHorizontal,c["--n-item-icon-color-active-hover-horizontal"]=s.itemIconColorActiveHoverHorizontal,c["--n-item-icon-color-child-active-horizontal"]=s.itemIconColorChildActiveHorizontal,c["--n-item-icon-color-child-active-hover-horizontal"]=s.itemIconColorChildActiveHoverHorizontal,c["--n-arrow-color"]=s.arrowColor,c["--n-arrow-color-hover"]=s.arrowColorHover,c["--n-arrow-color-active"]=s.arrowColorActive,c["--n-arrow-color-active-hover"]=s.arrowColorActiveHover,c["--n-arrow-color-child-active"]=s.arrowColorChildActive,c["--n-arrow-color-child-active-hover"]=s.arrowColorChildActiveHover,c["--n-item-color-hover"]=s.itemColorHover,c["--n-item-color-active"]=s.itemColorActive,c["--n-item-color-active-hover"]=s.itemColorActiveHover,c["--n-item-color-active-collapsed"]=s.itemColorActiveCollapsed),c}),R=o?de("menu",w(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:P,uncontrolledExpanededKeys:g,mergedExpandedKeys:A,uncontrolledValue:v,mergedValue:h,activePath:T,tmNodes:k,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:z,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,showOption:f}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>je(n,this.$props)))}}),Sr=$({__name:"AdminLayoutSidebar",setup(e){const t=[{label:()=>u(ce("router-link"),{to:{name:"dashboard"}},{default:()=>"Dashboard"}),key:"dashboard"},{label:()=>u(ce("router-link"),{to:{name:"my-rocleans"}},{default:()=>"My Robots"}),key:"rocleans"},{label:()=>u(ce("router-link"),{to:{name:"profile"}},{default:()=>"My Profile"}),key:"profile"}],o=r=>r.filter(n=>!0);return(r,n)=>(Ne(),Oo("div",null,[J(Q(wr),{options:o(t)},null,8,["options"])]))}}),Ir={class:"flex justify-between items-center px-6 h-full"},zr=Y("div",{class:"flex items-center gap-4"},[Y("img",{class:"h-8 w-8",src:ko,alt:"Roclean logo"}),Y("h2",{class:"text-xl font-black m-0 text-black no-underline"},"Roclean")],-1),Pr={class:"flex items-center gap-5"},kr=Y("div",{class:"h-8 w-8 bg-gray-50 relative rounded-full overflow-hidden"},[Y("img",{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",class:"absolute top-0 left-0 h-full w-full object-cover"})],-1),Ar=Y("span",{class:"inline-block"}," First User ",-1),Nr={class:"container mx-auto p-6"},$r=$({__name:"AdminLayout",setup(e){const t=Lo(),o=$o(),r=()=>{o.push({name:"home"})};return(n,i)=>{const l=ce("router-link"),d=ce("router-view");return Ne(),Ge(Q(Ae),{style:{height:"100vh"}},{default:ee(()=>[J(Q(rr),{style:{height:"64px"},bordered:""},{default:ee(()=>[Y("div",Ir,[Y("div",null,[J(l,{to:{name:"dashboard"}},{default:ee(()=>[zr]),_:1})]),Y("div",Pr,[kr,Ar,J(Q(Qo),{type:"error",onClick:r},{default:ee(()=>[We(" Se déconnecter ")]),_:1})])])]),_:1}),J(Q(Ae),{position:"absolute",style:{top:"64px",bottom:"64px"},"has-sider":""},{default:ee(()=>[J(Q(ur),{"content-style":"padding: 24px;","collapse-mode":"transform","collapsed-width":20,"show-trigger":"arrow-circle","native-scrollbar":!1,bordered:""},{default:ee(()=>[J(Sr)]),_:1}),J(Q(Ae),{class:"bg-gray-100",style:{"background-color":"rgb(243 244 246 / 0.5)"},"native-scrollbar":!1},{default:ee(()=>[Y("main",Nr,[(Ne(),Ge(d,{key:Q(t).fullPath}))])]),_:1})]),_:1}),J(Q(lr),{position:"absolute",style:{height:"64px",padding:"24px"},bordered:""},{default:ee(()=>[We(" Réalisé par Benali Mouad, mouadbnl.2k01@gmail.com ")]),_:1})]),_:1})}}});export{$r as default};
