(function(t){function e(e){for(var r,a,s=e[0],l=e[1],u=e[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"16055f7c"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"4c467226"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===r||c===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var d=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b33":function(t,e,n){},"3e14":function(t,e,n){"use strict";var r=n("a34a"),a=n.n(r),o=n("3106"),i=n.n(o);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){c(o,r,a,i,s,"next",t)}function s(t){c(o,r,a,i,s,"throw",t)}i(void 0)}))}}var p="localhost:9001",f=new i.a("ws://".concat(p,"/ws"),{packMessage:function(t){return JSON.stringify(t)},unpackMessage:function(){var t=d(a.a.mark((function t(e){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,e.text();case 3:return t.t1=t.sent,t.abrupt("return",t.t0.parse.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),attachRequestId:function(t,e){return l(l({},t),{},{requestId:e})},extractRequestId:function(t){return t&&t.requestId}}),h=function(){var t=d(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.open();case 2:console.log("socket opened");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();f.onClose.addListener((function(t){console.log("onClose",t)})),h(),e["a"]=f},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={},s=i,l=n("2877"),u=Object(l["a"])(s,a,o,!1,null,null,null),c=u.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",overflow:"scroll"}},[n("TableFilters",{ref:"tableFilters",attrs:{columns:t.columns,"apply-filters":t.applyFilters,database:t.$route.params.database,table:t.$route.params.table}}),n("div",{staticClass:"table-wrapper",style:"height: calc(100% - "+t.tableFilterHeight+"px)"},[n("div",{staticClass:"table-data"})]),n("LimitOffset",{attrs:{"table-rows-count":t.rowsCount,"reset-order-type-limit":t.resetOrderTypeLimit},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)},f=[],h=n("a34a"),m=n.n(h),v=n("3e14"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("div",{class:"inner-border "+(t.isInEditMode?"active":""),staticStyle:{"z-index":"1"}}),t.isInEditMode?t._e():n("div",{staticStyle:{"z-index":"2",position:"relative",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},domProps:{innerHTML:t._s(t.value)},on:{click:function(e){return e.preventDefault(),t.handleRowClick(e)}}}),t.isInEditMode?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputModel,expression:"inputModel"}],ref:"updateValueInput",staticClass:"table-row-value-edit",staticStyle:{"z-index":"2"},attrs:{type:"text"},domProps:{value:t.inputModel},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.saveValue(e))},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.isInEditMode=!t.isInEditMode}],input:function(e){e.target.composing||(t.inputModel=e.target.value)}}}):t._e()])},y=[];function g(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=w(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function w(t,e){if(t){if("string"===typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N={defaultValues:{INTEGER:0,TEXT:"<span class='light-gray-color'>EMPTY</span>",VARCHAR:"<span class='light-gray-color'>EMPTY</span>",REAL:0,BLOB:0},filterOperators:{"=":"=","<>":"<>","<":"<",">":">","<=":"<=",">=":">=",IN:"IN","NOT IN":"NOT IN","IS NULL":"IS NULL",BETWEEN:"BETWEEN","NOT BETWEEN":"NOT BETWEEN",contains:"contains","Not contains":"Not contains","Has prefix":"Has prefix","Has suffix":"Has suffix"},operatorInputPlaceholder:{"=":"EMPTY","<>":"EMPTY","<":"EMPTY",">":"EMPTY","<=":"EMPTY",">=":"EMPTY",IN:"1,2,3","NOT IN":"1,2,3","IS NULL":"","IS NOT NULL":"",BETWEEN:"1 AND 100","NOT BETWEEN":"1 AND 100",contains:"Pattern","Not contains":"Pattern","Has suffix":"Pattern","Has prefix":"Pattern"},operatorString:{"=":function(t){return"= '".concat(t,"'")},"<>":function(t){return"<> '".concat(t,"'")},"<":function(t){return"< '".concat(t,"'")},">":function(t){return"> '".concat(t,"'")},"<=":function(t){return"<= '".concat(t,"'")},">=":function(t){return">= '".concat(t,"'")},IN:function(t){return"IN (".concat(t,")")},"NOT IN":function(t){return"NOT IN (".concat(t,")")},"IS NULL":function(){return"IS NULL"},"IS NOT NULL":function(){return"IS NOT NULL"},BETWEEN:function(t){return"BETWEEN ".concat(t)},"NOT BETWEEN":function(t){return"NOT BETWEEN ".concat(t)},contains:function(t){return"LIKE '%".concat(t,"%'")},"Not contains":function(t){return"NOT LIKE '%".concat(t,"%'")},"Has suffix":function(t){return"LIKE '%".concat(t,"'")},"Has prefix":function(t){return"LIKE '".concat(t,"%'")}},operatorValueValidators:{"=":/.+/,"<>":/.+/,"<":/.+/,">":/.+/,"<=":/.+/,">=":/.+/,IN:/(.+?)(?:,|$)/,"NOT IN":/(.+?)(?:,|$)/,"IS NULL":/\s{0}/,"IS NOT NULL":/\s{0}/,BETWEEN:/\w+\s(and|AND)\s\w+/,"NOT BETWEEN":/\w+\s(and|AND)\s\w+/,contains:/.+/,"Not contains":/.+/,"Has suffix":/.+/,"Has prefix":/.+/},selectQuery:function(t,e){var n,r="",a=[],o=g(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(i.value){var s=N.operatorString[i.operator](i.value);a.push('("'.concat(i.column," ").concat(s,'")'))}}}catch(l){o.e(l)}finally{o.f()}return 0===a.length?null:(r+=" ".concat(a.join(" AND ").replace(/"/g,"")),r)}},x={provider:N},O=function(t,e,n){return null===n||void 0===n?"<span class='light-gray-color'>NULL</span>":"BLOB"===t.type?"BLOB":n||("is_locked"===t&&console.log(t,n,!!n,e),x.provider.defaultValues[e.toUpperCase()])},T=O,_={props:["id","column","row","updateValue"],data:function(){return{allowEdit:!1,isInEditMode:!1,updatedValue:null}},computed:{value:function(){return T(this.column,this.row)},inputModel:{set:function(t){this.updatedValue=t},get:function(){return this.value}}},methods:{handleRowClick:function(){var t=this;this.allowEdit&&(this.isInEditMode=!this.isInEditMode,this.$nextTick((function(){return t.$refs.updateValueInput.focus()})))},saveValue:function(){this.isInEditMode=!this.isInEditMode,this.updateValue(this.id,this.column,this.updatedValue)}}},S=_,L=Object(l["a"])(S,b,y,!1,null,null,null),C=L.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",t._l(t.columns,(function(e){return e?n("th",{key:e.__id,attrs:{"data-c":t.current,"data-eq":""+(t.current===e.name),"data-type":t.orderType},on:{click:function(n){return n.preventDefault(),t.orderClick(e.name)}}},[n("div",{staticStyle:{display:"flex","flex-direction":"row"}},[n("span",{staticStyle:{flex:"1 1 auto"}},[t._v(t._s(e.name))]),t.current===e.name?n("i",{class:"asc"===t.type.toLowerCase()?"sort-descending":"sort-ascending"}):t._e(),t.current!==e.name?n("div",{staticStyle:{width:"14px",height:"2px"}}):t._e()])]):t._e()})),0)])},k=[],P={props:{columns:Array,current:String,type:String,orderHandler:Function},mounted:function(){console.log(this.columns,this.current)},computed:{orderType:function(){return"asc"===this.type.toLowerCase()?"desc":"asc"}},methods:{orderClick:function(t){this.orderHandler(this.orderType,t)}}},$=P,B=Object(l["a"])($,I,k,!1,null,null,null),H=B.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-filters",staticStyle:{"min-height":"42px",position:"relative"}},[t._l(t.filters,(function(e,r){return n("div",{staticClass:"table-filter"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.column,expression:"f.column"}],staticClass:"mr-0-5",attrs:{name:"column"},on:{change:[function(n){var r=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"column",n.target.multiple?r:r[0])},function(n){return t.handleColumnChange(e)}]}},t._l(t.columns,(function(e){return n("option",{domProps:{value:e.name}},[t._v(t._s(e.name)+" ")])})),0),n("select",{directives:[{name:"model",rawName:"v-model",value:e.operator,expression:"f.operator"}],staticClass:"mr-0-5",attrs:{name:"filter"},on:{change:[function(n){var r=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"operator",n.target.multiple?r:r[0])},function(n){return t.handleOperatorChange(e)}]}},t._l(t.filterOperators,(function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e)+" ")])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"f.value"}],staticClass:"mr-0-5",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:[function(n){n.target.composing||t.$set(e,"value",n.target.value)},function(n){return t.validateInputValue(e)}]}}),n("button",{staticClass:"btn-octicon mr-0-5",on:{click:function(e){return e.preventDefault(),t.addFilter(e)}}},[t._v("+ ")]),n("button",{class:"btn-octicon mr-0-5",on:{click:function(e){return e.preventDefault(),t.removeFilter(r)}}},[t._v("- ")]),n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.isButtonEnabled},on:{click:function(e){return e.preventDefault(),t.apply(e)}}},[t._v("Apply")])])})),0===t.filters.length?n("button",{staticClass:"btn btn-primary",staticStyle:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"8px"},on:{click:function(e){return e.preventDefault(),t.addFilter(e)}}},[t._v("Add Filter")]):t._e()],2)},M=[],D={props:{database:String,table:String,columns:Array,applyFilters:Function},data:function(){var t=Object.keys(x.provider.filterOperators),e=this.$store.getters.getFilters(this.database,this.table);return{filterOperators:t,value:null,filters:e}},watch:{filters:function(){var t=Math.max(42,42*this.filters.length);this.$store.commit("updateTableFiltersHeight",t)}},methods:{handleOperatorChange:function(t){t.placeholder=x.provider.operatorInputPlaceholder[t.operator],this.apply()},handleColumnChange:function(t){this.apply()},validateInputValue:function(t){t.isButtonEnabled=x.provider.operatorValueValidators[t.operator].test(t.value),t.isButtonEnabled&&this.apply()},removeFilter:function(t){r["a"].delete(this.filters,t),this.apply()},addFilter:function(){var t;this.filters.push({value:null,column:null===(t=this.columns[0])||void 0===t?void 0:t.name,operator:this.filterOperators[0],placeholder:x.provider.operatorInputPlaceholder[this.filterOperators[0]],isButtonEnabled:!1})},apply:function(){this.applyFilters(this.filters),this.save()},save:function(){this.$store.commit("updateByKey",{database:this.database,table:this.table,key:"filters",value:JSON.stringify(this.filters)})}}},F=D,A=Object(l["a"])(F,j,M,!1,null,null,null),q=A.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"limit-offset",style:"bottom: "+t.sqlLogsHeight+"px"},[n("div",{staticClass:"mr-1-em"}),n("div",{staticClass:"table-rows-count",staticStyle:{"margin-right":"16px"}},[n("label",[t._v("Total:")]),t._v(" "+t._s(t.tableRowsCount))]),n("label",{staticClass:"mr-0-5",attrs:{for:"limit"}},[t._v("Limit")]),n("input",{staticClass:"mr-1-em",staticStyle:{"max-width":"80px"},attrs:{type:"number",name:"limit",min:"0",id:"limit"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.valueAsNumber)}}}),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.resetOrderTypeLimit(e)}}},[t._v("Reset")])])},V=[],K={props:{tableRowsCount:Number,value:Number,resetOrderTypeLimit:Function},computed:{sqlLogsHeight:function(){return this.$store.state.sqlLogsHeight}}},W=K,U=(n("d2f0"),Object(l["a"])(W,R,V,!1,null,"70e22602",null)),Y=U.exports,z=n("e325");function J(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(r,a)}function Q(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){J(o,r,a,i,s,"next",t)}function s(t){J(o,r,a,i,s,"throw",t)}i(void 0)}))}}var G={bool:50,varchar:200,VARCHAR:200,text:200,TEXT:200,timestamp:100,int8:100,int4:100,INTEGER:100,REAL:100},X={components:{Row:C,TableHeader:H,TableFilters:q,LimitOffset:Y},data:function(){return{key:this.$route.fullPath,columns:[],columnTypes:{},rowsCount:0,tableData:null,skippedFirstLimitChange:!1,limit:20,offset:0,order:1,type:"asc",clause:null}},mounted:function(){this.table&&this.setup()},computed:{table:function(){var t=this.$route.params.table;return this.$store.state.tables.find((function(e){return e.tableName===t}))},tableFilterHeight:function(){return this.$store.state.tableFiltersHeight}},watch:{table:function(){this.setup()},limit:function(){var t=this.$route.params,e=t.database,n=t.table;this.$store.commit("updateByKey",{database:e,table:n,key:"limit",value:this.limit}),this.tableData.setPageSize(this.limit),this.tableData.setMaxPage(Math.round(this.rowsCount/this.limit))},order:function(){var t=this.$route.params,e=t.database,n=t.table;this.$store.commit("updateByKey",{database:e,table:n,key:"order",value:this.order})},type:function(){var t=this.$route.params,e=t.database,n=t.table;this.$store.commit("updateByKey",{database:e,table:n,key:"type",value:this.type})}},methods:{setup:function(){var t=this;console.log("setup");var e=this.$route.params.database;this.columns=this.table.columns.sort((function(t){return t.cid})),this.table.columns.forEach((function(e){return t.columnTypes[e.name]=e.type})),this.rowsCount=this.table.count,this.limit=this.$store.getters.getLimit(e,this.table.tableName),this.order=this.$store.getters.getByKey(e,this.table.tableName,"order")||"1",this.type=this.$store.getters.getByKey(e,this.table.tableName,"type")||"asc";var n=this.$store.getters.getFilters(e,this.table.tableName);(null===n||void 0===n?void 0:n.length)>0&&(this.clause=x.provider.selectQuery(this.table.tableName,n)),this.tableData=new z["a"](".table-data",{height:"100%",layout:"fitColumns",placeholder:"No Data Set",columnHeaderSortMulti:!1,ajaxSorting:!0,ajaxLoader:!1,ajaxURL:"https://local",ajaxFiltering:!0,paginationSize:this.limit,paginationInitialPage:1,pagination:"remote",ajaxRequestFunc:function(){var e=Q(m.a.mark((function e(n,r,a){var o,i,s,l,u,c,d,p,f;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("ajaxRequestFunc",n,r,a),a.sorters){e.next=3;break}return e.abrupt("return");case 3:return o=t.$route.query,i=o.type,s=o.order,o.clause,l=a.sorters[0]||{dir:i,field:s},u=l.dir,c=l.field,t.order=c,t.type=u,d=a.page,p=a.size,t.offset=d-1,e.next=12,t.fetchData();case 12:if(e.t0=e.sent,e.t0){e.next=15;break}e.t0=[];case 15:return f=e.t0,e.abrupt("return",{data:f,last_page:Math.round(t.rowsCount/p)});case 17:case"end":return e.stop()}}),e)})));function n(t,n,r){return e.apply(this,arguments)}return n}(),initialSort:[{column:this.order,dir:this.type}],data:[],columns:this.columns.map((function(e){if(!G[e.type])throw new Error("Cant find type for ".concat(e.type));return{title:e.name,field:e.name,vertAlign:"middle",width:G[e.type],formatter:t.cellFormatter}}))}),this.tableData.setMaxPage(Math.round(this.rowsCount/this.limit))},cellFormatter:function(t,e,n){var r=t.getColumn().getField();return T(r,this.columnTypes[r],t.getValue())},resetOrderTypeLimit:function(){var t=this.$route.params,e=t.database,n=t.table;this.$store.commit("updateByKey",{database:e,table:n,key:"limit",value:20}),this.$store.commit("updateByKey",{database:e,table:n,key:"order",value:1}),this.$store.commit("updateByKey",{database:e,table:n,key:"type",value:"asc"}),this.order=1,this.type="asc",this.limit=20,this.tableData.setData()},fetchData:function(){var t=this;return Q(m.a.mark((function e(){var n,r,a,o,i,s,l,u;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params,r=n.database,a=n.table,o="".concat(t.order," ").concat(t.type),i=isNaN(t.limit)?20:t.limit,s=isNaN(t.offset)?0:t.offset,l={type:"rows",databaseName:r,tableName:a,order:o,limit:"".concat(i),offset:"".concat(s*i),clause:t.clause},console.log("fetchData",l),e.next=8,v["a"].sendRequest(l);case 8:return u=e.sent,console.log("<--- fetchData",u),t.rowsCount=u.data.count,e.abrupt("return",u.data.rows);case 12:case"end":return e.stop()}}),e)})))()},applyFilters:function(t){var e=this;return Q(m.a.mark((function n(){var r;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.$route.params.table,e.clause=x.provider.selectQuery(r,t),e.tableData.setData();case 3:case"end":return n.stop()}}),n)})))()}}},Z=X,tt=Object(l["a"])(Z,p,f,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-11 p-2 mx-auto col-md-6"},[n("div",{staticClass:"Box"},[t._m(0),t._l(t.databases,(function(e){return n("div",{staticClass:"Box-body"},[n("router-link",{attrs:{to:"/database/"+e}},[t._v(t._s(e))])],1)}))],2)])},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Box-header"},[n("h3",{staticClass:"Box-title"},[t._v(" Choose database ")])])}];function at(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(r,a)}function ot(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){at(o,r,a,i,s,"next",t)}function s(t){at(o,r,a,i,s,"throw",t)}i(void 0)}))}}var it={data:function(){return{databases:[]}},mounted:function(){var t=this;return ot(m.a.mark((function e(){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["a"].open();case 2:return e.next=4,v["a"].sendRequest({type:"databases"});case 4:if(t.databases=e.sent.data,1!==t.databases.length){e.next=8;break}return e.next=8,t.$router.replace("/database/".concat(t.databases[0]));case 8:case"end":return e.stop()}}),e)})))()}},st=it,lt=Object(l["a"])(st,nt,rt,!1,null,null,null),ut=lt.exports;r["a"].use(d["a"]);var ct=[{path:"/",name:"Databases",component:ut},{path:"/database/:database",name:"database",component:function(){return n.e("about").then(n.bind(null,"076a"))},children:[{path:"table/:table",component:et,name:"table"}]},{path:"/not-found",name:"NotFound",component:n.e("about").then(n.bind(null,"9703"))},{path:"*",redirect:"/not-found"}],dt=new d["a"]({mode:"history",base:"/",routes:ct}),pt=dt,ft=n("2f62");r["a"].use(ft["a"]);var ht=new ft["a"].Store({state:{selectedRow:null,tables:[],databases:[],tablesSidebarWidth:250,isTablesSideBarHidden:!1,isSqlLogsHidden:!1,sqlLogsHeight:200,tableFiltersHeight:42},mutations:{setDatabases:function(t,e){t.databases=e},setTables:function(t,e){t.tables=e},updateByKey:function(t,e){var n=e.value,r=e.database,a=e.table,o=e.key;localStorage.setItem("".concat(r,"_").concat(a,"_").concat(o),n)},updateOffset:function(t,e,n,r){localStorage.setItem("".concat(e,"_").concat(n,"_offset"),r)},updateSqlLogsHeight:function(t,e){t.sqlLogsHeight=e},updateTableFiltersHeight:function(t,e){t.tableFiltersHeight=e},updateTablesSidebarWidth:function(t,e){t.tablesSidebarWidth=e},toggleTablesSideBarHidden:function(t){t.isTablesSideBarHidden=!t.isTablesSideBarHidden,t.tablesSidebarWidth=t.isTablesSideBarHidden?1:250},toggleSqlLogsHidden:function(t){t.isSqlLogsHidden=!t.isSqlLogsHidden,t.sqlLogsHeight=t.isSqlLogsHidden?1:200}},actions:{},modules:{},getters:{getLimit:function(t){return function(t,e){var n=localStorage.getItem("".concat(t,"_").concat(e,"_limit"));return parseInt(n||20,10)}},getByKey:function(t){return function(t,e,n){return localStorage.getItem("".concat(t,"_").concat(e,"_").concat(n))}},getFilters:function(t){return function(t,e){var n=localStorage.getItem("".concat(t,"_").concat(e,"_filters"));return n?JSON.parse(n):[]}},getTablePrimaryKey:function(t){return function(e){var n,r;return null===(n=t.tables.find((function(t){return t.tableName===e})))||void 0===n||null===(r=n.columns.find((function(t){return 1===t.pk})))||void 0===r?void 0:r.name}}}}),mt=n("fb19"),vt=n.n(mt);n("278f"),n("fb98");r["a"].config.productionTip=!1,r["a"].component("vue-draggable-resizable",vt.a),new r["a"]({router:pt,store:ht,render:function(t){return t(c)}}).$mount("#app")},d2f0:function(t,e,n){"use strict";var r=n("3b33"),a=n.n(r);a.a},fb98:function(t,e,n){}});
//# sourceMappingURL=app.a6c1d6d0.js.map