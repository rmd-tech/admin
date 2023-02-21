"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4263],{40874:(H,v,e)=>{e.r(v),e.d(v,{default:()=>Oe});var t=e(32735),r=e(88425),o=e(5141),P=e(92891),u=e(83983),i=e(20011),d=e(18950),I=e(72975),c=e.n(I),p=e(5636),S=e(60216),Z=e.n(S),w=e(88423),B=e.n(w),X=e(33795),z=e.n(X),x=e(9086),_=e.n(x),b=e(84968),M=e(83281),E=e(9808),D=e(44526),L=e(78330),h=e(11856),N=e(95602),A=e(16540),T=e(90662),s=e(98599),a=e.n(s),n=e(88677),k=e.n(n),U=e(7602),se=e(17247),re=(R,W,m)=>new Promise((G,l)=>{var V=K=>{try{Y(m.next(K))}catch(Q){l(Q)}},$=K=>{try{Y(m.throw(K))}catch(Q){l(Q)}},Y=K=>K.done?G(K.value):Promise.resolve(K.value).then(V,$);Y((m=m.apply(R,W)).next())});const Ee=R=>re(void 0,null,function*(){const{data:W}=yield se.be.get(`/admin/users/${R}`);return W.data}),ge=(R,W)=>re(void 0,null,function*(){const{data:m}=yield se.be.put(`/admin/users/${R}`,W);return m.data}),fe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ve=e(1057),Pe=e(4397),Me=e(98399),he=function(){return window&&window.strapi&&window.strapi.isEE?e(28890).Z:e(16325).Z}(),ne=["email","firstname","lastname","username","isActive","roles"],oe=function(W){var m=W.canUpdate,G=(0,p.useIntl)(),l=G.formatMessage,V=(0,o.useRouteMatch)("/settings/users/:id"),$=V.params.id,Y=(0,o.useHistory)(),K=Y.push,Q=(0,r.useAppInfos)(),De=Q.setUserDisplayName,te=(0,r.useNotification)(),le=(0,r.useOverlayBlocker)(),Le=le.lockApp,Ae=le.unlockApp;(0,r.useFocusWhenNavigate)();var ie=(0,b.useQuery)(["user",$],function(){return Ee($)},{retry:!1,keepPreviousData:!1,staleTime:1e3*20,onError:function(g){var f=g.response.status;f===403&&(te({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),K("/")),Me.log(g.response.status)}}),Te=ie.status,C=ie.data,Ce=function(){var y=(0,d.Z)(c().mark(function g(f,j){var J,ee,F,ae,ue;return c().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return Le(),O.prev=1,O.next=4,ge($,_()(f,"confirmPassword"));case 4:J=O.sent,te({type:"success",message:l({id:"notification.success.saved",defaultMessage:"Saved"})}),ee=r.auth.getUserInfo(),$.toString()===ee.id.toString()&&(r.auth.setUserInfo(J),F=z()(f,"username")||(0,U.Pp)(f.firstname,f.lastname),De(F)),j.setValues(B()(f,ne)),O.next=17;break;case 11:O.prev=11,O.t0=O.catch(1),ae=(0,U.Iz)(O.t0.response.data),ue=Object.keys(ae).reduce(function(me,pe){return me[pe]=ae[pe].id,me},{}),j.setErrors(ue),te({type:"warning",message:z()(O.t0,"response.data.message","notification.error")});case 17:Ae();case 18:case"end":return O.stop()}},g,null,[[1,11]])}));return function(f,j){return y.apply(this,arguments)}}(),de=Te!=="success",Ie=de?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},q=Object.keys(B()(C,ne)).reduce(function(y,g){return g==="roles"?(y[g]=((C==null?void 0:C.roles)||[]).map(function(f){var j=f.id;return j}),y):(y[g]=C==null?void 0:C[g],y)},{}),Ue=q.username||(0,U.Pp)(q.firstname,q.lastname),ce=l(Ie,{name:Ue});return de?t.createElement(A.Main,{"aria-busy":"true"},t.createElement(r.SettingsPageTitle,{name:"Users"}),t.createElement(h.HeaderLayout,{primaryAction:t.createElement(D.Button,{disabled:!0,startIcon:t.createElement(k(),null),type:"button",size:"L"},l({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(r.Link,{startIcon:t.createElement(a(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},l({id:"global.back",defaultMessage:"Back"}))}),t.createElement(h.ContentLayout,null,t.createElement(r.LoadingIndicatorPage,null))):t.createElement(A.Main,null,t.createElement(r.SettingsPageTitle,{name:"Users"}),t.createElement(M.Formik,{onSubmit:Ce,initialValues:q,validateOnChange:!1,validationSchema:ve.YM},function(y){var g=y.errors,f=y.values,j=y.handleChange,J=y.isSubmitting;return t.createElement(r.Form,null,t.createElement(h.HeaderLayout,{primaryAction:t.createElement(D.Button,{disabled:J||!m,startIcon:t.createElement(k(),null),loading:J,type:"submit",size:"L"},l({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(r.Link,{startIcon:t.createElement(a(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},l({id:"global.back",defaultMessage:"Back"}))}),t.createElement(h.ContentLayout,null,(C==null?void 0:C.registrationToken)&&t.createElement(E.Box,{paddingBottom:6},t.createElement(he,{registrationToken:C.registrationToken})),t.createElement(T.Stack,{spacing:7},t.createElement(E.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(T.Stack,{spacing:4},t.createElement(N.Typography,{variant:"delta",as:"h2"},l({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(L.Grid,{gap:5},fe.map(function(ee){return ee.map(function(F){return t.createElement(L.GridItem,(0,i.Z)({key:F.name},F.size),t.createElement(r.GenericInput,(0,i.Z)({},F,{disabled:!m,error:g[F.name],onChange:j,value:f[F.name]||""})))})})))),t.createElement(E.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(T.Stack,{spacing:4},t.createElement(N.Typography,{variant:"delta",as:"h2"},l({id:"global.roles",defaultMessage:"User's role"})),t.createElement(L.Grid,{gap:5},t.createElement(L.GridItem,{col:6,xs:12},t.createElement(Pe.Z,{disabled:!m,error:g.roles,onChange:j,value:f.roles}))))))))}))};oe.propTypes={canUpdate:Z().bool.isRequired};const ye=oe,Oe=()=>{const R=(0,r.useNotification)(),W=(0,t.useMemo)(()=>({read:u.Z.settings.users.read,update:u.Z.settings.users.update}),[]),{isLoading:m,allowedActions:{canRead:G,canUpdate:l}}=(0,r.useRBAC)(W),{state:V}=(0,o.useLocation)(),$=(0,P.get)(V,"from","/");return(0,t.useEffect)(()=>{m||!G&&!l&&R({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[m,G,l,R]),m?t.createElement(r.LoadingIndicatorPage,null):!G&&!l?t.createElement(o.Redirect,{to:$}):t.createElement(ye,{canUpdate:l})}},76779:(H,v,e)=>{e.d(v,{Z:()=>X});var t=e(32735),r=e(60216),o=e.n(r),P=e(20763),u=e.n(P),i=e(88425),d=e.n(i),I=e(68192),c=e.n(I),p=e(59087),S=e.n(p),Z=e(5636);const w=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},t.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},t.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),B=({children:z,target:x})=>{const _=(0,i.useNotification)(),{formatMessage:b}=(0,Z.useIntl)(),M=()=>{_({type:"info",message:{id:"notification.link-copied"}})},E=b({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(i.ContentBox,{endAction:t.createElement(p.CopyToClipboard,{onCopy:M,text:x},t.createElement(P.IconButton,{label:E,noBorder:!0,icon:t.createElement(c(),null)})),title:x,titleEllipsis:!0,subtitle:z,icon:t.createElement(w,null),iconBackground:"neutral100"})};B.propTypes={children:o().oneOfType([o().element,o().string]).isRequired,target:o().string.isRequired};const X=B},16325:(H,v,e)=>{e.d(v,{Z:()=>I});var t=e(32735),r=e(5636),o=e(60216),P=e.n(o),u=e(463),i=e(76779);const d=({registrationToken:c})=>{const{formatMessage:p}=(0,r.useIntl)(),S=`${window.location.origin}${u.Z}auth/register?registrationToken=${c}`;return t.createElement(i.Z,{target:S},p({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};d.defaultProps={registrationToken:""},d.propTypes={registrationToken:P().string};const I=d},4397:(H,v,e)=>{e.d(v,{Z:()=>b});var t=e(32735),r=e(60216),o=e.n(r),P=e(5636),u=e(25716),i=e.n(u),d=e(84968),I=e.n(d),c=e(19615),p=e(103),S=e.n(p),Z=e(17247),w=(M,E,D)=>new Promise((L,h)=>{var N=s=>{try{T(D.next(s))}catch(a){h(a)}},A=s=>{try{T(D.throw(s))}catch(a){h(a)}},T=s=>s.done?L(s.value):Promise.resolve(s.value).then(N,A);T((D=D.apply(M,E)).next())});const B=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,X=c.default.div`
  animation: ${B} 2s infinite linear;
`,z=()=>t.createElement(X,null,t.createElement(S(),null)),x=()=>w(void 0,null,function*(){const{data:M}=yield Z.be.get("/admin/roles");return M.data}),_=({disabled:M,error:E,onChange:D,value:L})=>{const{status:h,data:N}=(0,d.useQuery)(["roles"],x,{staleTime:5e4}),{formatMessage:A}=(0,P.useIntl)(),T=E?A({id:E,defaultMessage:E}):"",s=A({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),a=A({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),n=A({id:"app.components.Select.placeholder",defaultMessage:"Select"}),k=h==="loading"?t.createElement(z,null):void 0;return t.createElement(u.Select,{id:"roles",disabled:M,error:T,hint:a,label:s,name:"roles",onChange:U=>{D({target:{name:"roles",value:U}})},placeholder:n,multi:!0,startIcon:k,value:L,withTags:!0,required:!0},(N||[]).map(U=>t.createElement(u.Option,{key:U.id,value:U.id},A({id:`global.${U.code}`,defaultMessage:U.name}))))};_.defaultProps={disabled:!1,error:void 0},_.propTypes={disabled:o().bool,error:o().string,onChange:o().func.isRequired,value:o().array.isRequired};const b=_},1057:(H,v,e)=>{e.d(v,{YM:()=>T,Rw:()=>B});var t=e(5173),r=e(88425),o=Object.defineProperty,P=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,c=(s,a,n)=>a in s?o(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,p=(s,a)=>{for(var n in a||(a={}))d.call(a,n)&&c(s,n,a[n]);if(i)for(var n of i(a))I.call(a,n)&&c(s,n,a[n]);return s},S=(s,a)=>P(s,u(a));const Z={firstname:t.Z_().trim().required(r.translatedErrors.required),lastname:t.Z_(),email:t.Z_().email(r.translatedErrors.email).lowercase().required(r.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,r.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,r.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(s,a)=>s?a.required(r.translatedErrors.required):a)},B=S(p({},Z),{currentPassword:t.Z_().when(["password","confirmPassword"],(s,a,n)=>s||a?n.required(r.translatedErrors.required):n),preferedLanguage:t.Z_().nullable()}),z={roles:t.IX().min(1,r.translatedErrors.required).required(r.translatedErrors.required)};var x=Object.defineProperty,_=Object.defineProperties,b=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,L=(s,a,n)=>a in s?x(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,h=(s,a)=>{for(var n in a||(a={}))E.call(a,n)&&L(s,n,a[n]);if(M)for(var n of M(a))D.call(a,n)&&L(s,n,a[n]);return s},N=(s,a)=>_(s,b(a));const T=t.Ry().shape(h(N(h({},Z),{isActive:t.Xg()}),z))},28890:(H,v,e)=>{e.d(v,{Z:()=>I});var t=e(32735),r=e(5636),o=e(60216),P=e.n(o),u=e(463),i=e(76779);const d=({registrationToken:c})=>{const{formatMessage:p}=(0,r.useIntl)();return c?t.createElement(i.Z,{target:`${window.location.origin}${u.Z}auth/register?registrationToken=${c}`},p({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(i.Z,{target:`${window.location.origin}${u.Z}auth/login`},p({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};d.defaultProps={registrationToken:""},d.propTypes={registrationToken:P().string};const I=d}}]);