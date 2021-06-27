(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[515],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={title:"Les Mod\xe8les User et Story",id:"tuto-3-the-models",slug:"3-the-models"},s=void 0,u={unversionedId:"tutorials/real-world-example-with-react/tuto-3-the-models",id:"tutorials/real-world-example-with-react/tuto-3-the-models",isDocsHomePage:!1,title:"Les Mod\xe8les User et Story",description:"Maintenant que la connexion \xe0 la base de donn\xe9es est \xe9tablie, vous pouvez cr\xe9er vos deux entit\xe9s User et Story.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/3-the-models.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/3-the-models",permalink:"/fr/docs/tutorials/real-world-example-with-react/3-the-models",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/3-the-models.md",version:"current",sidebarPosition:3,frontMatter:{title:"Les Mod\xe8les User et Story",id:"tuto-3-the-models",slug:"3-the-models"},sidebar:"someSidebar",previous:{title:"Base de Donn\xe9es (configuration)",permalink:"/fr/docs/tutorials/real-world-example-with-react/2-database-set-up"},next:{title:"Les Scripts Shell",permalink:"/fr/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"}},p=[{value:"Le Mod\xe8le <code>User</code>",id:"le-mod\xe8le-user",children:[]},{value:"Le Mod\xe8le <code>Story</code>",id:"le-mod\xe8le-story",children:[]},{value:"Ex\xe9cuter les Migrations",id:"ex\xe9cuter-les-migrations",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Maintenant que la connexion \xe0 la base de donn\xe9es est \xe9tablie, vous pouvez cr\xe9er vos deux entit\xe9s ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"Story"),"."),(0,o.kt)("p",null,"L'entit\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," sera le mod\xe8le utilis\xe9 par le framework pour identifier les utilisateurs et l'entit\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Story")," repr\xe9sentera les posts des utilisateurs."),(0,o.kt)("h2",{id:"le-mod\xe8le-user"},"Le Mod\xe8le ",(0,o.kt)("inlineCode",{parentName:"h2"},"User")),(0,o.kt)("p",null,"Ouvrez le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"user.entity.ts")," du r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"entities")," et ajoutez quatre nouvelles propri\xe9t\xe9s \xe0 votre mod\xe8le : ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"avatar"),"."),(0,o.kt)("p",null,"La colonne ",(0,o.kt)("inlineCode",{parentName:"p"},"avatar")," contiendra les chemins vers les images de profil."),(0,o.kt)("p",null,"Vous devrez \xe9galement exporter un mod\xe8le suppl\xe9mentaire ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," du paquet ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/typeorm"),". Vous n'avez pas besoin de vous en pr\xe9occuper maintenant, il sera utilis\xe9 plus tard dans le tutoriel lorsque vous ajouterez l'authentification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\n// This line is required. It will be used to create the SQL session table later in the tutorial.\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,o.kt)("h2",{id:"le-mod\xe8le-story"},"Le Mod\xe8le ",(0,o.kt)("inlineCode",{parentName:"h2"},"Story")),(0,o.kt)("p",null,"Cr\xe9ez ensuite votre deuxi\xe8me entit\xe9."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foal generate entity story\n")),(0,o.kt)("p",null,"Ouvrez le nouveau fichier et ajoutez trois nouvelles propri\xe9t\xe9s : ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"link"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';\nimport { User } from './user.entity';\n\n@Entity()\nexport class Story extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @ManyToOne(type => User, { nullable: false })\n  author: User;\n\n  @Column()\n  title: string;\n\n  @Column()\n  link: string;\n\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Par d\xe9faut, TypeORM permet aux relations ",(0,o.kt)("em",{parentName:"p"},"many-to-one")," d'\xeatre nullables. L'option pass\xe9e au d\xe9corateur sp\xe9cifie que celle-ci ne peut pas l'\xeatre.")),(0,o.kt)("h2",{id:"ex\xe9cuter-les-migrations"},"Ex\xe9cuter les Migrations"),(0,o.kt)("p",null,"Enfin, cr\xe9ez les tables dans la base de donn\xe9es. G\xe9n\xe9rez les migrations \xe0 partir des entit\xe9s et ex\xe9cutez-les."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,o.kt)("p",null,"Trois nouvelles tables sont ajout\xe9es \xe0 la base de donn\xe9es : les tables ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"story")," et une table ",(0,o.kt)("inlineCode",{parentName:"p"},"sessions"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             user                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| email      | varchar   | UNIQUE NOT NULL                     |\n| password   | varchar   | NOT NULL                            |\n| name       | varchar   | NOT NULL                            |\n| avatar     | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             story                            |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| authorId   | integer   | NOT NULL                            |\n| title      | varchar   | NOT NULL                            |\n| link       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")))}c.isMDXComponent=!0}}]);