import{B as Q,y as n,q as v,a3 as U,C as a,D as d,a4 as X,a5 as Y,d as Z,I as oo,G as P,J as eo,l as $,K as w,M as ro,x as s,a6 as to}from"./index-f32ca084.js";import{r as p,c as no}from"./resolve-slot-d41da7ba.js";function ao(e,c){const t=e.trim().split(/\s+/g),o={top:t[0]};switch(t.length){case 1:o.right=t[0],o.bottom=t[0],o.left=t[0];break;case 2:o.right=t[1],o.left=t[1],o.bottom=t[0];break;case 3:o.right=t[1],o.bottom=t[2],o.left=t[1];break;case 4:o.right=t[1],o.bottom=t[2],o.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return c===void 0?o:o[c]}const lo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},io=e=>{const{primaryColor:c,borderRadius:t,lineHeight:o,fontSize:b,cardColor:g,textColor2:f,textColor1:l,dividerColor:r,fontWeightStrong:i,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:m}=e;return Object.assign(Object.assign({},lo),{lineHeight:o,color:g,colorModal:S,colorPopover:k,colorTarget:c,colorEmbedded:m,colorEmbeddedModal:m,colorEmbeddedPopover:m,textColor:f,titleTextColor:l,borderColor:r,actionColor:m,titleFontWeight:i,closeColorHover:z,closeColorPressed:C,closeBorderRadius:t,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:b,fontSizeMedium:b,fontSizeLarge:b,fontSizeHuge:b,boxShadow:y,borderRadius:t})},so={name:"Card",common:Q,self:io},co=so,bo=n([v("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[U({background:"var(--n-color-modal)"}),a("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[n(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[n(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[n(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[n(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[v("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),v("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[n(">",[d("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[n(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[n(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),X(v("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Y(v("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),go={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},mo=Object.assign(Object.assign({},P.props),go),vo=Z({name:"Card",props:mo,setup(e){const c=()=>{const{onClose:i}=e;i&&no(i)},{inlineThemeDisabled:t,mergedClsPrefixRef:o,mergedRtlRef:b}=oo(e),g=P("Card","-card",bo,co,e,o),f=eo("Card",b,o),l=$(()=>{const{size:i}=e,{self:{color:h,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:m,lineHeight:T,closeIconColor:E,closeIconColorHover:R,closeIconColorPressed:B,closeColorHover:M,closeColorPressed:_,closeBorderRadius:H,closeIconSize:I,closeSize:O,boxShadow:j,colorPopover:F,colorEmbedded:L,colorEmbeddedModal:V,colorEmbeddedPopover:W,[w("padding",i)]:N,[w("fontSize",i)]:D,[w("titleFontSize",i)]:K},common:{cubicBezierEaseInOut:q}}=g.value,{top:A,left:G,bottom:J}=ao(N);return{"--n-bezier":q,"--n-border-radius":m,"--n-color":h,"--n-color-modal":u,"--n-color-popover":F,"--n-color-embedded":L,"--n-color-embedded-modal":V,"--n-color-embedded-popover":W,"--n-color-target":x,"--n-text-color":z,"--n-line-height":T,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":E,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":B,"--n-close-color-hover":M,"--n-close-color-pressed":_,"--n-border-color":y,"--n-box-shadow":j,"--n-padding-top":A,"--n-padding-bottom":J,"--n-padding-left":G,"--n-font-size":D,"--n-title-font-size":K,"--n-close-size":O,"--n-close-icon-size":I,"--n-close-border-radius":H}}),r=t?ro("card",$(()=>e.size[0]),l,e):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:g,handleCloseClick:c,cssVars:t?void 0:l,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{segmented:e,bordered:c,hoverable:t,mergedClsPrefix:o,rtlEnabled:b,onRender:g,embedded:f,$slots:l}=this;return g==null||g(),s("div",{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:b,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:c,[`${o}-card--hoverable`]:t}],style:this.cssVars,role:this.role},p(l.cover,r=>r&&s("div",{class:`${o}-card-cover`,role:"none"},r)),p(l.header,r=>r||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},r||this.title),p(l["header-extra"],i=>i&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},i)),this.closable?s(to,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),p(l.default,r=>r&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),p(l.footer,r=>r&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),p(l.action,r=>r&&s("div",{class:`${o}-card__action`,role:"none"},r)))}});export{vo as N,ao as g};
