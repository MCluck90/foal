(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3519],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5185:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"Installation"},s=void 0,p={unversionedId:"tutorials/simple-todo-list/tuto-1-installation",id:"version-1.x/tutorials/simple-todo-list/tuto-1-installation",isDocsHomePage:!1,title:"Installation",description:"In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which users can view, create and delete their tasks.",source:"@site/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-1-installation.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/tuto-1-installation",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-1-installation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-1-installation.md",version:"1.x",frontMatter:{title:"Installation"},sidebar:"someSidebar",previous:{title:"Why FoalTS?",permalink:"/fr/docs/1.x/"},next:{title:"Introduction",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-2-introduction"}},c=[{value:"Create a New Project",id:"create-a-new-project",children:[]},{value:"Start The Server",id:"start-the-server",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which users can view, create and delete their tasks."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Requirements:")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," 8 or greater")),(0,a.kt)("h2",{id:"create-a-new-project"},"Create a New Project"),(0,a.kt)("p",null,"First you need to install globaly the ",(0,a.kt)("em",{parentName:"p"},"Command Line Interface (CLI)")," of FoalTS. It will help you create a new project and generate files all along your development."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @foal/cli\n")),(0,a.kt)("p",null,"Then create a new application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal createapp my-app\n")),(0,a.kt)("p",null,"This command generates a new directory with the basic structure of the new application. It also installs all the dependencies. Let's look at what ",(0,a.kt)("inlineCode",{parentName:"p"},"createapp")," created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"my-app/\n  config/\n  node_modules/\n  public/\n  src/\n    app/\n    e2e/\n    scripts/\n  ormconfig.js\n  package.json\n  tsconfig.*.json\n  .eslintrc.js\n")),(0,a.kt)("p",null,"The outer ",(0,a.kt)("inlineCode",{parentName:"p"},"my-app")," root directory is just a container for your project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"config/")," directory contains configuration files for your different environments (production, test, development, e2e, etc)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/")," directory contains all the prod and dev dependencies of your project."),(0,a.kt)("li",{parentName:"ul"},"The static files are located in the ",(0,a.kt)("inlineCode",{parentName:"li"},"public/")," directory. They are usually images, CSS and client JavaScript files and are served directly when the server is running."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/")," directory contains all the source code of the application.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The inner ",(0,a.kt)("inlineCode",{parentName:"li"},"app/")," directory includes the components of your server (controllers, services and hooks)."),(0,a.kt)("li",{parentName:"ul"},"End-to-end tests are located in the ",(0,a.kt)("inlineCode",{parentName:"li"},"e2e/")," directory."),(0,a.kt)("li",{parentName:"ul"},"The inner ",(0,a.kt)("inlineCode",{parentName:"li"},"scripts/")," folder contains scripts intended to be called from the command line (ex: create-user)."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ormconfig.js")," file defines the configuration and credentials of the database(s) connection(s). They can also be passed through environment variables."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," lists the dependencies and commands of the project."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.*.json")," files list the TypeScript compiler configuration for each ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," command."),(0,a.kt)("li",{parentName:"ul"},"Finally the linting configuration can be found in the ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," file.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TypeScript")),(0,a.kt)("p",{parentName:"blockquote"},"The language used to develop a FoalTS application is ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),". It is a typed superset of JavaScript that compiles to plain JavaScript. The benefits of using TypeScript are many, but in summary, the language provides great tools and the future features of JavaScript.")),(0,a.kt)("h2",{id:"start-the-server"},"Start The Server"),(0,a.kt)("p",null,"Let's verify that the FoalTS project works. Run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd my-app\nnpm run develop\n")),(0,a.kt)("p",null,"You've started the development server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("strong",{parentName:"p"},"development server")," watches at your files and automatically compiles and reloads your code. You don\u2019t need to restart the server each time you make code changes. Note that it is only intended to be used in development, do not use it on production.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Port 3001 already in use?")),(0,a.kt)("p",{parentName:"blockquote"},"You can define in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/default.json")," which port the application is using.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," in your browser. You should see the text ",(0,a.kt)("em",{parentName:"p"},"Welcome to the future"),"."),(0,a.kt)("p",null,"Congratulations, you now have a server running!"))}d.isMDXComponent=!0}}]);