(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2523],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6632:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Pruebas Unitarias",id:"tuto-7-unit-testing",slug:"7-unit-testing"},l=void 0,u={unversionedId:"tutorials/simple-todo-list/tuto-7-unit-testing",id:"tutorials/simple-todo-list/tuto-7-unit-testing",isDocsHomePage:!1,title:"Pruebas Unitarias",description:"El \xfaltimo paso de este tutorial es a\xf1adir algunas pruebas unitarias al ApiController.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/7-unit-testing.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/7-unit-testing",permalink:"/es/docs/tutorials/simple-todo-list/7-unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/7-unit-testing.md",version:"current",sidebarPosition:7,frontMatter:{title:"Pruebas Unitarias",id:"tuto-7-unit-testing",slug:"7-unit-testing"},sidebar:"someSidebar",previous:{title:"Validaci\xf3n & Sanitizaci\xf3n",permalink:"/es/docs/tutorials/simple-todo-list/6-validation-and-sanitization"},next:{title:"Introducci\xf3n",permalink:"/es/docs/tutorials/real-world-example-with-react/1-introduction"}},c=[],p={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"El \xfaltimo paso de este tutorial es a\xf1adir algunas pruebas unitarias al ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiController"),"."),(0,a.kt)("p",null,"Un archivo de pruebas unitarias termina con la extensi\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.ts")," y suele colocarse junto al archivo que est\xe1 probando."),(0,a.kt)("p",null,"Abra el archivo ",(0,a.kt)("inlineCode",{parentName:"p"},"api.controller.spec.ts")," y sustituya su contenido."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\n// The `assert` module provides a simple set of assertion tests.\nimport { ok, strictEqual } from 'assert';\n\n// 3p\nimport { createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';\nimport { Connection, createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../entities';\nimport { ApiController } from './api.controller';\n\n// Define a group of tests.\ndescribe('ApiController', () => {\n\n  let controller: ApiController;\n  let connection: Connection;\n\n  // Create a connection to the database before running all the tests.\n  before(async () => {\n    // The connection uses the configuration defined in the file config/test.json.\n    // By default, the file has three connection options:\n    //  \"database\": \"./test_db.sqlite3\" -> Use a different database for running the tests.\n    // \"synchronize\": true ->  Auto create the database schema when the connection is established.\n    // \"dropSchema\": true -> Drop the schema when the connection is established (empty the database).\n    connection = await createConnection();\n  });\n\n  // Close the database connection after running all the tests whether they succeed or failed.\n  after(() => connection.close());\n\n  // Create or re-create the controller before each test.\n  beforeEach(() => controller = createController(ApiController));\n\n  // Define a nested group of tests.\n  describe('has a \"getTodos\" method that', () => {\n\n    // Define a unit test.\n    it('should handle requests at GET /todos.', () => {\n      // Throw an error and make the test fail if the http method of `getTodos` is not GET.\n      strictEqual(getHttpMethod(ApiController, 'getTodos'), 'GET');\n      // Throw an error and make the test fail if the path of `getTodos` is not /todos.\n      strictEqual(getPath(ApiController, 'getTodos'), '/todos');\n    });\n\n    // Define a unit test.\n    it('should return an HttpResponseOK.', async () => {\n      // Create fake todos.\n      const todo1 = new Todo();\n      todo1.text = 'Todo 1';\n\n      const todo2 = new Todo();\n      todo2.text = 'Todo 2';\n\n      // Save the todos.\n      await connection.manager.save([ todo1, todo2 ]);\n\n      const response = await controller.getTodos();\n      ok(isHttpResponseOK(response), 'response should be an instance of HttpResponseOK.');\n\n      const body = response.body;\n\n      ok(Array.isArray(body), 'The body of the response should be an array.');\n      strictEqual(body[0].text, 'Todo 1');\n      strictEqual(body[1].text, 'Todo 2');\n    });\n\n  });\n\n});\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Como un m\xe9todo del controlador devuelve un objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", es realmente f\xe1cil probar el estado y el cuerpo de la respuesta.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si el m\xe9todo del controlador toma un objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," como argumento, puede instanciar uno as\xed ",(0,a.kt)("inlineCode",{parentName:"p"},'nuevo Contexto({ /* contenido del objeto "request" de Express */})'),".")),(0,a.kt)("p",null,"Ejecute las pruebas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run test\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Este comando vigila sus pruebas y archivos probados en los directorios ",(0,a.kt)("inlineCode",{parentName:"p"},"app/")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts/"),". Cuando se modifica un archivo, recompila autom\xe1ticamente y vuelve a ejecutar sus pruebas.")),(0,a.kt)("p",null,"Ahora deber\xeda terminar con esta salida:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Salida de las pruebas unitarias",src:n(8290).Z})),(0,a.kt)("p",null,"\xa1Enhorabuena! \xa1Ha llegado al final de este tutorial!"),(0,a.kt)("p",null,"Si tiene alguna pregunta, \xa1no dude en abrir una issue en Github!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"El c\xf3digo fuente completo est\xe1 disponible ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/simple-todo-list-source-code-v2.zip"},"aqu\xed"),".")))}d.isMDXComponent=!0},8290:function(e,t,n){"use strict";t.Z=n.p+"assets/images/unit-tests-output-92ff8a147084006f7e318c124a0f053e.png"}}]);