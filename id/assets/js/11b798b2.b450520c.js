(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9391],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,k=(0,r.Z)(),f=k.tabGroupChoices,g=k.setTabGroupChoices,h=(0,a.useState)(u),v=h[0],b=h[1],y=a.Children.toArray(e.children),N=[];if(null!=m){var w=f[m];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&b(w)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;b(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case l:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8131:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(1395),s=n(8215),l=["components"],c={title:"What's new in version 2 (part 3/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-3.png",tags:["release"]},u=void 0,p={permalink:"/id/blog/2021/03/11/whats-new-in-version-2-part-3",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-11-whats-new-in-version-2-part-3.md",source:"@site/blog/2021-03-11-whats-new-in-version-2-part-3.md",title:"What's new in version 2 (part 3/4)",description:"Banner",date:"2021-03-11T00:00:00.000Z",formattedDate:"March 11, 2021",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:3.665,truncated:!0,prevItem:{title:"What's new in version 2 (part 4/4)",permalink:"/id/blog/2021/04/08/whats-new-in-version-2-part-4"},nextItem:{title:"What's new in version 2 (part 2/4)",permalink:"/id/blog/2021/03/02/whats-new-in-version-2-part-2"}},m=[{value:"New JWT utilities",id:"new-jwt-utilities",children:[{value:"Accessing config secrets and public/private keys",id:"accessing-config-secrets-and-publicprivate-keys",children:[]},{value:"Managing cookies",id:"managing-cookies",children:[]}]},{value:"Stateless CSRF protection simplified",id:"stateless-csrf-protection-simplified",children:[]}],d={toc:m};function k(e){var t=e.components,c=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Banner",src:n(2569).Z})),(0,i.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the JWT utilities to manage secrets and RSA keys,"),(0,i.kt)("li",{parentName:"ul"},"the JWT utilities to manage cookies,"),(0,i.kt)("li",{parentName:"ul"},"and the new stateless CSRF protection.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article is the part 3 of the series of articles ",(0,i.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 2 can be found ",(0,i.kt)("a",{parentName:"p",href:"/id/blog/2021/03/02/whats-new-in-version-2-part-2"},"here"),".")),(0,i.kt)("h2",{id:"new-jwt-utilities"},"New JWT utilities"),(0,i.kt)("h3",{id:"accessing-config-secrets-and-publicprivate-keys"},"Accessing config secrets and public/private keys"),(0,i.kt)("p",null,"Starting from version 2, there is a standardized way to provide and retrieve JWT secrets and RSA public/private keys: the functions ",(0,i.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey"),"."),(0,i.kt)("h4",{id:"using-secrets"},"Using secrets"),(0,i.kt)("p",null,"In this example, a base64-encoded secret is provided in the configuration."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},".env")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  jwt:\n    secret: "env(JWT_SECRET)"\n    secretEncoding: base64\n'))),(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      secret: "env(JWT_SECRET)",\n      secretEncoding: "base64"\n    }\n  }\n}\n')))),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey")," functions will return the secret."),(0,i.kt)("p",null,"In the case a ",(0,i.kt)("inlineCode",{parentName:"p"},"secretEncoding")," value is provided, the functions return a buffer which is the secret decoded with the provided encoding."),(0,i.kt)("h4",{id:"using-public-and-private-keys"},"Using public and private keys"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\nconst { readFileSync } = require('fs');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      privateKey: Env.get('RSA_PRIVATE_KEY') || readFileSync('./id_rsa', 'utf8'),\n      publicKey: Env.get('RSA_PUBLIC_KEY') || readFileSync('./id_rsa.pub', 'utf8'),\n    }\n  }\n}\n")),(0,i.kt)("p",null,"In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey")," return the keys from the environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"RSA_PUBLIC_KEY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RSA_PRIVATE_KEY")," if they are defined or from the files ",(0,i.kt)("inlineCode",{parentName:"p"},"id_rsa")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," otherwise."),(0,i.kt)("h3",{id:"managing-cookies"},"Managing cookies"),(0,i.kt)("p",null,"In version 2, Foal provides two dedicated functions to manage JWT with cookies. Using these functions instead of manually setting the cookie has three benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"they include a CSRF protection (see section below),"),(0,i.kt)("li",{parentName:"ul"},"the function ",(0,i.kt)("inlineCode",{parentName:"li"},"setAuthCookie")," automatically sets the cookie expiration based on the token expiration,"),(0,i.kt)("li",{parentName:"ul"},"and cookie options can be provided through the configuration.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"api.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ cookie: true })\nexport class ApiController {\n  // ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @Post('/login')\n  async login(ctx: Context) {\n    // ...\n\n    const response = new HttpResponseNoContent();\n    // Do not forget the \"await\" keyword.\n    await setAuthCookie(response, token);\n    return response;\n  }\n\n  @Post('/logout')\n  logout(ctx: Context) {\n    // ...\n\n    const response = new HttpResponseNoContent();\n    removeAuthCookie(response);\n    return response;\n  }\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cookie options")),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    cookie:\n      name: mycookiename # Default: auth\n      domain: example.com\n      httpOnly: true # Warning: unlike session tokens, the httpOnly directive has no default value.\n      path: /foo # Default: /\n      sameSite: strict # Default: lax if settings.jwt.csrf.enabled is true.\n      secure: true\n"))),(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "cookie": {\n        "name": "mycookiename",\n        "domain": "example.com",\n        "httpOnly": true,\n        "path": "/foo",\n        "sameSite": "strict",\n        "secure": true\n      }\n    }\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      cookie: {\n        name: "mycookiename",\n        domain: "example.com",\n        httpOnly: true,\n        path: "/foo",\n        sameSite: "strict",\n        secure: true\n      }\n    }\n  }\n}\n')))),(0,i.kt)("h2",{id:"stateless-csrf-protection-simplified"},"Stateless CSRF protection simplified"),(0,i.kt)("p",null,"In version 1, providing a CSRF protection was quite complex. We needed to provide another secret, generate a stateless token, manage the CSRF cookie (expiration, etc), use an additional hook, etc."),(0,i.kt)("p",null,"Starting from version 2, the CSRF protection is all managed by ",(0,i.kt)("inlineCode",{parentName:"p"},"@JWTRequired"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setAuthCookie")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"removeAuthCookie"),"."),(0,i.kt)("p",null,"The only thing that you have to do it to enable it through the configuration:"),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n"))),(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,i.kt)("p",null,"When it is enabled, an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," cookie is sent to the client at the same time as the auth cookie (containing your JWT). It contains a stateless CSRF token which is signed and has the same expiration date as your JWT."),(0,i.kt)("p",null,"When a request is made to the server, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," hooks expects you to include its value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," header."))}k.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},2569:function(e,t,n){"use strict";t.Z=n.p+"assets/images/banner-b497efc5d6adf69bee9081634e786012.png"}}]);