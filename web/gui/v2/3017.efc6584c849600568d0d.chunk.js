!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="04bad6c5-d56b-4807-8006-0944d0cd9b1d",e._sentryDebugIdIdentifier="sentry-dbid-04bad6c5-d56b-4807-8006-0944d0cd9b1d")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"67fcafa0e89723987481f6de299b5bd1fcd6618a"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[3017],{23017:function(e,n,t){t.r(n),t.d(n,{OptOut:function(){return s.Z},OptOutModal:function(){return f.Z},TrialMessage:function(){return g.Z},TrialWarning:function(){return u},TrialWelcome:function(){return d},useBusinessPlan:function(){return m.Z},useTrial:function(){return p.Z}});t(66992),t(41539),t(88674),t(78783),t(33948);var r=t(67294),a=t(2145),i=t(13477),o=t(14808),l=(0,a.Z)((function(){return t.e(8969).then(t.bind(t,28969))}),"Warnings"),u=function(e){var n=(0,i.Iy)("isAnonymous");return o.Z3&&!n?r.createElement(r.Suspense,{fallback:""},r.createElement(l,e)):null},c=(0,a.Z)((function(){return t.e(9886).then(t.bind(t,39886))}),"Modal"),d=function(e){var n=(0,i.Iy)("isAnonymous");return o.Z3&&!n?r.createElement(r.Suspense,{fallback:""},r.createElement(c,e)):null},s=t(29292),f=t(62195),g=t(66987),m=t(80413),p=t(60511)},62195:function(e,n,t){var r=t(29439),a=(t(41539),t(88674),t(17727),t(67294)),i=t(50308),o=t.n(i),l=t(99113),u=t(36285),c=t(93017),d=t(39979),s=t(54005),f=t(63346),g=t(46667),m=t(23154),p=(0,d.Z)(l.Button);n.Z=function(e){var n=e.onConfirm,t=e.onDecline,i=void 0===t?o():t,d=e.onCancellingEnd,b=void 0===d?o():d,y=(0,u.Zn)(),v=(0,c.Z)(),E=(0,r.Z)(v,2),h=E[0],x=E[1],w=(0,m.Z)().id,Z=(0,s.Z)(),k=Z.sendLog,C=Z.isReady,T=(0,g.Z)(),B=(0,r.Z)(T,4),O=B[0],I=B[2],S=B[3],F=(0,a.useCallback)((function(){I(),y({productId:w}).then((function(){h({header:"Successfully canceled subscription",text:"You are now on Community plan"}),k({feature:"TrialOptOut",isSuccess:!0})})).catch((function(){x({header:"Failed to cancel the subscription",text:"Remained on Business plan"}),k({feature:"TrialOptOut",isFailure:!0,error:"Failed to cancel the subscription"})})).finally((function(){b(),S()}))}),[w,C]),D=(0,a.useCallback)((function(){n?n():F()}),[n,F]);return a.createElement(l.Modal,{backdropProps:{backdropBlur:!0}},a.createElement(f.ZP,{feature:"TrialOptOut"},a.createElement(l.ModalContent,{width:{base:140}},a.createElement(l.ModalHeader,null,a.createElement(l.Flex,{gap:2,alignItems:"center"},a.createElement(l.H4,null,"Go to Community plan"))),a.createElement(l.ModalBody,null,O?a.createElement(l.Flex,{height:"100px"},a.createElement(l.TextBig,null,"Changing billing plan...")):a.createElement(l.Flex,{gap:2,column:!0},a.createElement(l.H3,null,"Are You Sure?"),a.createElement(l.TextBig,null,"It looks like you have chosen to opt-out of your free 30-day business trial. Are you sure you do not want to experience all the features Netdata has to offer?"),a.createElement(l.TextBig,null,"By opting out, you will switch to the community plan immediately."))),a.createElement(l.ModalFooter,null,a.createElement(l.Flex,{justifyContent:"end",gap:4,padding:[1,2]},a.createElement(p,{feature:"TrialOptOut",label:"Yes, I am sure!",flavour:"hollow",small:!0,onClick:D,disabled:!w||O,textTransform:""}),a.createElement(p,{feature:"TrialOptOut",label:"No, I want the trial!",small:!0,onClick:i,disabled:O,textTransform:""}))))))}},96009:function(e,n,t){t.d(n,{Bk:function(){return o},NY:function(){return a},_j:function(){return i},fe:function(){return l},v8:function(){return r}});var r={default:"successBackground",warning:"warningBackground",critical:"errorBackground"},a={default:{background:"successSemi",border:"success"},warning:{background:"warningSemi",border:"warning"},critical:{background:"errorSemi",border:"error"}},i=[30,15,3,2,1],o="dismissedTrialWelcome",l="dismissedTrialWarningDate"},66987:function(e,n,t){var r=t(87462),a=t(67294),i=t(99113),o=t(50308),l=t.n(o),u=t(60511),c=t(55370),d={banner:{color:"main"},sidebar:{lineHeight:"1.6",color:"main"},freePlanUpgrade:{lineHeight:"1.6",color:"main"},billing:{color:"textLite"}};n.Z=function(e){var n=e.flavour,t=e.couponRemainingDays,o=e.onUpdateClick,s=void 0===o?l():o,f=(0,u.Z)(),g=f.daysRemaining,m=f.canUpgrade,p=f.trialEndsAt,b=(0,a.useMemo)((function(){return{isCoupon:t>0,isBanner:"banner"==n,isSidebar:"sidebar"==n,isBilling:"billing"==n,isFreePlanUpgrade:"freePlanUpgrade"==n}}),[n,t]);return a.createElement(i.Flex,{justifyContent:b.isBilling?"start":"center",alignItems:"center",width:"100%",gap:2},b.isCoupon?a.createElement(i.Flex,{column:!0},a.createElement(i.Text,(0,r.Z)({},d[n],{fontSize:"10px",strong:!0}),"POST BLACK FRIDAY OFFER"),a.createElement(c.nF,(0,r.Z)({},d[n],{fontSize:"38px",lineHeight:.8,strong:!0}),"50% off")):b.isFreePlanUpgrade?a.createElement(i.Text,d[n],"Upgrade your plan for unlimited access and Business features."):a.createElement(i.Text,d[n],"You have ",a.createElement(i.Text,(0,r.Z)({strong:!0},d[n]),"".concat(g," days"))," ","left to explore all the features of Netdata Business."," ",b.isBilling&&a.createElement(a.Fragment,null,"Trial ends at"," ",a.createElement(i.Text,(0,r.Z)({strong:!0},d[n]),p),"."," "),b.isBanner&&m?a.createElement(i.Box,{"data-testid":"upgrade-to-business-banner",onClick:s,as:i.Text,cursor:"pointer",textDecoration:"underline",color:"main"},"Consider upgrading for unlimited access."):a.createElement(a.Fragment,null,"Consider upgrading for unlimited access.")))}},55370:function(e,n,t){t.d(n,{AK:function(){return l},Ti:function(){return o},nF:function(){return u}});var r=t(71893),a=t(99113),i=t(96009),o=(0,r.default)(a.Flex).attrs({position:"relative"}).withConfig({displayName:"styled__TrialWarningSidebar",componentId:"sc-66x250-0"})(["background-color:",";border-width:1px;border-style:dashed;border-color:",";border-radius:2px;"],(function(e){var n,t=e.type;return(0,a.getColor)(null===(n=i.NY[t])||void 0===n?void 0:n.background)}),(function(e){var n,t=e.type;return(0,a.getColor)(null===(n=i.NY[t])||void 0===n?void 0:n.border)})),l=(0,r.default)(a.Button).withConfig({displayName:"styled__TrialUpgradeButton",componentId:"sc-66x250-1"})(["flex:auto;"]),u=(0,r.default)(a.Text).attrs({strong:!0,lineHeight:.8}).withConfig({displayName:"styled__PromoText",componentId:"sc-66x250-2"})(["background-color:",";background-image:linear-gradient( 43deg,"," 0%,"," 46%,"," 100% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;"],(0,a.getColor)("primary"),(0,a.getColor)(["blue","aquamarine"]),(0,a.getColor)(["purple","mauve"]),(0,a.getColor)("primary"))},29292:function(e,n,t){var r=t(45987),a=t(67294),i=t(50308),o=t.n(i),l=t(99113),u=t(54005),c=["flavour","onOptOutClick"],d={default:"Or you can opt to downgrade immediately",billing:"Or you can opt to downgrade immediately"};n.Z=function(e){var n=e.flavour,t=void 0===n?"default":n,i=e.onOptOutClick,s=void 0===i?o():i,f=(0,r.Z)(e,c),g=(0,u.Z)(),m=g.sendLog,p=g.isReady,b=(0,a.useCallback)((function(){s(),m({feature:"TrialOptOut",isStart:!0})}),[p]);return a.createElement(l.Text,f,"After the trial, you'll automatically switch to the free Community plan."," ",a.createElement(l.Box,{"data-testid":"upgrade-to-business-banner",onClick:b,as:l.Text,cursor:"pointer",textDecoration:"underline",color:"primary"},d[t]),".")}},60511:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(29439),a=t(67294),i=t(33335),o=t(33937),l=t(13477),u=(t(41539),t(64211),t(2490),t(41874),t(33926)),c=t(12274),d=t(36285),s=t(80699),f=t(96009),g=t(38314),m=t(14808),p=function(e){var n=new Date(e||void 0).toLocaleDateString();return"Invalid Date"!==n?n:null},b=function(){var e,n=(0,d.RP)(),t=n.loaded,b=n.value,y=n.refresh,v=(0,s.Z)().isFailure,E=b||{},h=E.slug,x=E.trialEndsAt,w=(0,a.useMemo)((function(){return function(e){if(!e)return null;var n=new Date(e)-new Date;return Math.ceil(n/864e5)}(x)}),[x]),Z=t&&!!x,k=(0,i.gI)("billing:Manage"),C=(0,o.pI)("trialModalDismissed"),T=(0,r.Z)(C,1)[0],B=m.Z3&&k&&(Z||v)&&!localStorage.getItem(f.Bk)&&!T,O=(0,a.useState)(localStorage.getItem(f.fe)),I=(0,r.Z)(O,2),S=I[0],F=I[1],D=(0,a.useMemo)((function(){return m.Z3&&Z}),[Z]),_=(0,a.useState)(),M=(0,r.Z)(_,2),A=M[0],P=M[1],R=(e=w)>15?"default":e>5?"warning":"critical",N=!(0,l.Iy)("isAnonymous")&&k;return(0,a.useEffect)((function(){var e=function(e,n,t,r){if(n<0)return!1;var a=new Date(e||void 0);if(!(0,c.default)(a))return!1;var i=new Date(r||void 0);if(!(0,c.default)(i))return!0;var o=(0,u.Z)({start:i,end:a}).days;return t.some((function(e){return e>=n&&e<o}))}(x,w,f._j,S);P(m.Z3&&e)}),[x,w,S]),{trialWelcomeVisible:B,sidebarWarningVisible:D,bannerVisible:A,dismissBanner:function(){var e=(new Date).toISOString();F(e),localStorage.setItem(f.fe,e)},daysRemaining:w,trialEndsAt:p(x),type:R,canUpgrade:N,onTrial:Z,refreshPlan:y,planIsFreeOrEarlyBird:(0,g.BT)(h)}}},23154:function(e,n,t){t(2707),t(47941);var r=t(36285),a=t(38314);n.Z=function(){var e,n=(0,r.Gl)().value;if(null===n||void 0===n||!n.free)return{};var t=Object.keys(n.free).sort(a.G2)[0];return{id:n.free[t]?null===(e=n.free[t][0])||void 0===e?void 0:e.id:null,version:t}}}}]);