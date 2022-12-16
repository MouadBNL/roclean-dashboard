import{B as A,y as k,q as s,C as b,d as P,l as v,x as r,Z as N,aU as D,aV as q,aW as L,aX as O,I as F,G as T,K as I,M as X,i as j}from"./index-f32ca084.js";import{f as $}from"./format-length-c9d165c6.js";const G=e=>{const{infoColor:o,successColor:g,warningColor:n,errorColor:i,textColor2:a,progressRailColor:u,fontSize:l,fontWeight:d}=e;return{fontSize:l,fontSizeCircle:"28px",fontWeightCircle:d,railColor:u,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:o,iconColorInfo:o,iconColorSuccess:g,iconColorWarning:n,iconColorError:i,textColorCircle:a,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:a,fillColor:o,fillColorInfo:o,fillColorSuccess:g,fillColorWarning:n,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},H={name:"Progress",common:A,self:G},Y=H,E=k([s("progress",{display:"inline-block"},[s("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),b("line",`
 width: 100%;
 display: block;
 `,[s("progress-content",`
 display: flex;
 align-items: center;
 `,[s("progress-graph",{flex:1})]),s("progress-custom-content",{marginLeft:"14px"}),s("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[b("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),b("circle, dashboard",{width:"120px"},[s("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),s("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),s("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),b("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[s("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),s("progress-content",{position:"relative"}),s("progress-graph",{position:"relative"},[s("progress-graph-circle",[k("svg",{verticalAlign:"bottom"}),s("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[b("empty",{opacity:0})]),s("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),s("progress-graph-line",[b("indicator-inside",[s("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[s("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),s("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),b("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[s("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),s("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),s("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[s("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[b("processing",[k("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),k("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),V={success:r(D,null),error:r(q,null),warning:r(L,null),info:r(O,null)},_=P({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:o}){const g=v(()=>$(e.height)),n=v(()=>e.railBorderRadius!==void 0?$(e.railBorderRadius):e.height!==void 0?$(e.height,{c:.5}):""),i=v(()=>e.fillBorderRadius!==void 0?$(e.fillBorderRadius):e.railBorderRadius!==void 0?$(e.railBorderRadius):e.height!==void 0?$(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:a,railColor:u,railStyle:l,percentage:d,unit:h,indicatorTextColor:m,status:p,showIndicator:f,fillColor:t,processing:x,clsPrefix:c}=e;return r("div",{class:`${c}-progress-content`,role:"none"},r("div",{class:`${c}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${c}-progress-graph-line`,{[`${c}-progress-graph-line--indicator-${a}`]:!0}]},r("div",{class:`${c}-progress-graph-line-rail`,style:[{backgroundColor:u,height:g.value,borderRadius:n.value},l]},r("div",{class:[`${c}-progress-graph-line-fill`,x&&`${c}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:t,height:g.value,lineHeight:g.value,borderRadius:i.value}},a==="inside"?r("div",{class:`${c}-progress-graph-line-indicator`},d,h):null)))),f&&a==="outside"?r("div",null,o.default?r("div",{class:`${c}-progress-custom-content`,style:{color:m},role:"none"},o.default()):p==="default"?r("div",{role:"none",class:`${c}-progress-icon ${c}-progress-icon--as-text`,style:{color:m}},d,h):r("div",{class:`${c}-progress-icon`,"aria-hidden":!0},r(N,{clsPrefix:c},{default:()=>V[p]}))):null)}}}),K={success:r(D,null),error:r(q,null),warning:r(L,null),info:r(O,null)},Z=P({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:o}){function g(n,i,a){const{gapDegree:u,viewBoxWidth:l,strokeWidth:d}=e,h=50,m=0,p=h,f=0,t=2*h,x=50+d/2,c=`M ${x},${x} m ${m},${p}
      a ${h},${h} 0 1 1 ${f},${-t}
      a ${h},${h} 0 1 1 ${-f},${t}`,C=Math.PI*2*h,M={stroke:a,strokeDasharray:`${n/100*(C-u)}px ${l*8}px`,strokeDashoffset:`-${u/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:c,pathStyle:M}}return()=>{const{fillColor:n,railColor:i,strokeWidth:a,offsetDegree:u,status:l,percentage:d,showIndicator:h,indicatorTextColor:m,unit:p,gapOffsetDegree:f,clsPrefix:t}=e,{pathString:x,pathStyle:c}=g(100,0,i),{pathString:C,pathStyle:M}=g(d,u,n),y=100+a;return r("div",{class:`${t}-progress-content`,role:"none"},r("div",{class:`${t}-progress-graph`,"aria-hidden":!0},r("div",{class:`${t}-progress-graph-circle`,style:{transform:f?`rotate(${f}deg)`:void 0}},r("svg",{viewBox:`0 0 ${y} ${y}`},r("g",null,r("path",{class:`${t}-progress-graph-circle-rail`,d:x,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:c})),r("g",null,r("path",{class:[`${t}-progress-graph-circle-fill`,d===0&&`${t}-progress-graph-circle-fill--empty`],d:C,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:M}))))),h?r("div",null,o.default?r("div",{class:`${t}-progress-custom-content`,role:"none"},o.default()):l!=="default"?r("div",{class:`${t}-progress-icon`,"aria-hidden":!0},r(N,{clsPrefix:t},{default:()=>K[l]})):r("div",{class:`${t}-progress-text`,style:{color:m},role:"none"},r("span",{class:`${t}-progress-text__percentage`},d),r("span",{class:`${t}-progress-text__unit`},p))):null)}}});function W(e,o,g=100){return`m ${g/2} ${g/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const J=P({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:o}){const g=v(()=>e.percentage.map((i,a)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*a)-e.circleGap*a)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:i,circleGap:a,showIndicator:u,fillColor:l,railColor:d,railStyle:h,percentage:m,clsPrefix:p}=e;return r("div",{class:`${p}-progress-content`,role:"none"},r("div",{class:`${p}-progress-graph`,"aria-hidden":!0},r("div",{class:`${p}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${n} ${n}`},m.map((f,t)=>r("g",{key:t},r("path",{class:`${p}-progress-graph-circle-rail`,d:W(n/2-i/2*(1+2*t)-a*t,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[t]},h[t]]}),r("path",{class:[`${p}-progress-graph-circle-fill`,f===0&&`${p}-progress-graph-circle-fill--empty`],d:W(n/2-i/2*(1+2*t)-a*t,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:g.value[t],strokeDashoffset:0,stroke:l[t]}})))))),u&&o.default?r("div",null,r("div",{class:`${p}-progress-text`},o.default())):null)}}}),U=Object.assign(Object.assign({},T.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),re=P({name:"Progress",props:U,setup(e){const o=v(()=>e.indicatorPlacement||e.indicatorPosition),g=v(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=F(e),a=T("Progress","-progress",E,Y,e,n),u=v(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:m,fontSizeCircle:p,railColor:f,railHeight:t,iconSizeCircle:x,iconSizeLine:c,textColorCircle:C,textColorLineInner:M,textColorLineOuter:y,lineBgProcessing:w,fontWeightCircle:z,[I("iconColor",d)]:B,[I("fillColor",d)]:S}}=a.value;return{"--n-bezier":h,"--n-fill-color":S,"--n-font-size":m,"--n-font-size-circle":p,"--n-font-weight-circle":z,"--n-icon-color":B,"--n-icon-size-circle":x,"--n-icon-size-line":c,"--n-line-bg-processing":w,"--n-rail-color":f,"--n-rail-height":t,"--n-text-color-circle":C,"--n-text-color-line-inner":M,"--n-text-color-line-outer":y}}),l=i?X("progress",v(()=>e.status[0]),u,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:o,gapDeg:g,cssVars:i?void 0:u,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{type:e,cssVars:o,indicatorTextColor:g,showIndicator:n,status:i,railColor:a,railStyle:u,color:l,percentage:d,viewBoxWidth:h,strokeWidth:m,mergedIndicatorPlacement:p,unit:f,borderRadius:t,fillBorderRadius:x,height:c,processing:C,circleGap:M,mergedClsPrefix:y,gapDeg:w,gapOffsetDegree:z,themeClass:B,$slots:S,onRender:R}=this;return R==null||R(),r("div",{class:[B,`${y}-progress`,`${y}-progress--${e}`,`${y}-progress--${i}`],style:o,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(Z,{clsPrefix:y,status:i,showIndicator:n,indicatorTextColor:g,railColor:a,fillColor:l,railStyle:u,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:h,strokeWidth:m,gapDegree:w===void 0?e==="dashboard"?75:0:w,gapOffsetDegree:z,unit:f},S):e==="line"?r(_,{clsPrefix:y,status:i,showIndicator:n,indicatorTextColor:g,railColor:a,fillColor:l,railStyle:u,percentage:d,processing:C,indicatorPlacement:p,unit:f,fillBorderRadius:x,railBorderRadius:t,height:c},S):e==="multiple-circle"?r(J,{clsPrefix:y,strokeWidth:m,railColor:a,fillColor:l,railStyle:u,viewBoxWidth:h,percentage:d,showIndicator:n,circleGap:M},S):null)}}),te=j([{id:"abc",name:"Roclean ABC",battery:14.5,capacity:72,running:"4h56min",stats:{glass:Math.floor(Math.random()*(100-1+1))+1,plastic:Math.floor(Math.random()*(100-1+1))+1,paper:Math.floor(Math.random()*(100-1+1))+1,organic:Math.floor(Math.random()*(100-1+1))+1,others:Math.floor(Math.random()*(100-1+1))+1,metal:Math.floor(Math.random()*(100-1+1))+1}},{id:"efj",name:"Roclean EFJ",battery:44.8,capacity:77,running:"2h40min",stats:{glass:Math.floor(Math.random()*(100-1+1))+1,plastic:Math.floor(Math.random()*(100-1+1))+1,paper:Math.floor(Math.random()*(100-1+1))+1,organic:Math.floor(Math.random()*(100-1+1))+1,others:Math.floor(Math.random()*(100-1+1))+1,metal:Math.floor(Math.random()*(100-1+1))+1}},{id:"hlm",name:"Roclean HLM",battery:23.5,capacity:15,running:"3h20min",stats:{glass:Math.floor(Math.random()*(100-1+1))+1,plastic:Math.floor(Math.random()*(100-1+1))+1,paper:Math.floor(Math.random()*(100-1+1))+1,organic:Math.floor(Math.random()*(100-1+1))+1,others:Math.floor(Math.random()*(100-1+1))+1,metal:Math.floor(Math.random()*(100-1+1))+1}},{id:"mnl",name:"Roclean MNL",battery:2.5,capacity:98,running:"5h01min",stats:{glass:Math.floor(Math.random()*(100-1+1))+1,plastic:Math.floor(Math.random()*(100-1+1))+1,paper:Math.floor(Math.random()*(100-1+1))+1,organic:Math.floor(Math.random()*(100-1+1))+1,others:Math.floor(Math.random()*(100-1+1))+1,metal:Math.floor(Math.random()*(100-1+1))+1}},{id:"dflt",name:"Roclean 1",battery:45.5,capacity:50,running:"3h01min",stats:{glass:Math.floor(Math.random()*(100-1+1))+1,plastic:Math.floor(Math.random()*(100-1+1))+1,paper:Math.floor(Math.random()*(100-1+1))+1,organic:Math.floor(Math.random()*(100-1+1))+1,others:Math.floor(Math.random()*(100-1+1))+1,metal:Math.floor(Math.random()*(100-1+1))+1}}]),oe=e=>{if(e.stats){let o=e.stats.glass+e.stats.plastic+e.stats.paper+e.stats.organic+e.stats.others+e.stats.metal;return{total:o,percentages:{glass:(e.stats.glass/o*100).toFixed(1),plastic:(e.stats.plastic/o*100).toFixed(1),paper:(e.stats.paper/o*100).toFixed(1),organic:(e.stats.organic/o*100).toFixed(1),others:(e.stats.others/o*100).toFixed(1),metal:(e.stats.metal/o*100).toFixed(1)}}}return{total:0,percentages:{glass:0,plastic:0,paper:0,organic:0,others:0,metal:0}}};export{re as N,oe as g,Y as p,te as r};
