(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin-elements"],{"386d":function(t,e,a){"use strict";var n=a("cb7c"),r=a("83a1"),i=a("5f1b");a("214f")("search",1,function(t,e,a,s){return[function(a){var n=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=s(a,t,this);if(e.done)return e.value;var o=n(t),c=String(this),l=o.lastIndex;r(l,0)||(o.lastIndex=0);var d=i(o,c);return r(o.lastIndex,l)||(o.lastIndex=l),null===d?-1:d.index}]})},"64ae":function(t,e,a){"use strict";var n=a("ce04"),r=a.n(n);r.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"91ec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md4:"","mt-4":"","pl-6":""}},[a("v-toolbar-title",[t._v(t._s(t.$t("elements.TITLE")))])],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"","px-4":""}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:t.$t("dataTable.SEARCH"),"single-line":"","hide-details":"",clearable:"","clear-icon":"mdi-close"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"","text-right":"","mb-2":"","mt-2":"","pr-2":""}},[a("v-dialog",{attrs:{"max-width":"500px","content-class":"dlgNewEditItem"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"btnNewItem pr-6",attrs:{color:"secondary"}},n),[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus")]),t._v("\n            "+t._s(t.$t("dataTable.NEW_ITEM"))+"\n          ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[t.editedItem._id?[a("v-flex",{attrs:{xs12:"",md6:""}},[a("label",{attrs:{for:"createdAt"}},[t._v(t._s(t.$t("common.CREATED")))]),a("div",{attrs:{name:"createdAt"}},[t._v("\n                      "+t._s(t.getFormat(t.editedItem.createdAt))+"\n                    ")])]),a("v-flex",{attrs:{xs12:"",md6:""}},[a("label",{attrs:{for:"updatedAt"}},[t._v(t._s(t.$t("common.UPDATED")))]),a("div",{attrs:{name:"updatedAt"}},[t._v("\n                      "+t._s(t.getFormat(t.editedItem.updatedAt))+"\n                    ")])])]:t._e(),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required",expression:"'required'",modifiers:{disable:!0}}],attrs:{id:"name",name:"name",label:t.$t("dataTable.headers.NAME"),"data-vv-as":t.$t("dataTable.headers.NAME"),error:t.errors.has("name"),"error-messages":t.errors.collect("name"),autocomplete:"off"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],2)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:t.close}},[t._v(t._s(t.$t("dataTable.CANCEL")))]),a("v-btn",{staticClass:"btnSave",attrs:{color:"yellow lighten3",text:""},on:{click:t.save}},[t._v(t._s(t.$t("dataTable.SAVE")))])],1)],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{"must-sort":"",loading:t.dataTableLoading,"no-data-text":t.$t("dataTable.NO_DATA"),"no-results-text":t.$t("dataTable.NO_RESULTS"),"footer-props":{"items-per-page-options":[10,20,30,40,50],"items-per-page-text":t.$t("dataTable.ROWS_PER_PAGE")},"items-per-page":20,"server-items-length":t.totalItems,headers:t.headers,items:t.items,options:t.options},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.createdAt",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(t.getFormat(a.createdAt))+"\n    ")]}},{key:"item.updatedAt",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(t.getFormat(a.updatedAt))+"\n    ")]}},{key:"item.action",fn:function(e){var n=e.item;return[a("v-icon",{on:{click:function(e){return t.editItem(n)}}},[t._v("\n        mdi-pencil\n      ")]),a("v-icon",{on:{click:function(e){return t.deleteItem(n)}}},[t._v("\n        mdi-delete\n      ")])]}},{key:"pageText",fn:function(e){return[t._v("\n      "+t._s(e.pageStart)+" - "+t._s(e.pageStop)+" "+t._s(t.$t("dataTable.OF"))+"\n      "+t._s(e.itemsLength)+"\n    ")]}},{key:"no-data",fn:function(){return[t._v(t._s(t.$t("dataTable.NO_DATA")))]},proxy:!0},{key:"no-results",fn:function(){return[t._v(t._s(t.$t("dataTable.NO_RESULTS")))]},proxy:!0}])}),a("ErrorMessage"),a("SuccessMessage")],1)},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("386d"),a("bd86")),s=(a("96cf"),a("3b8d")),o=a("2f62"),c=a("fa7d");function l(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={metaInfo:function(){return{title:this.$store.getters.appTitle,titleTemplate:"".concat(this.$t("elements.TITLE")," - %s")}},data:function(){return{dataTableLoading:!0,delayTimer:null,dialog:!1,search:"",options:{},editedItem:{},defaultItem:{},fieldsToSearch:["name"]}},computed:{formTitle:function(){return this.editedItem._id?this.$t("dataTable.EDIT_ITEM"):this.$t("dataTable.NEW_ITEM")},headers:function(){return[{text:this.$i18n.t("dataTable.ACTIONS"),value:"action",sortable:!1,width:100},{text:this.$i18n.t("dataTable.headers.NAME"),align:"left",sortable:!0,value:"name"},{text:this.$i18n.t("common.CREATED"),align:"left",sortable:!0,value:"createdAt"},{text:this.$i18n.t("common.UPDATED"),align:"left",sortable:!0,value:"updatedAt"}]},items:function(){return this.$store.state.adminElements.elements},totalItems:function(){return this.$store.state.adminElements.totalElements}},watch:{dialog:function(t){return!!t||this.close()},options:{handler:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.dataTableLoading=!0,t.next=4,this.getElements(Object(c["a"])(this.options,this.buildSearch()));case 4:this.dataTableLoading=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.dataTableLoading=!1;case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),deep:!0},search:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:clearTimeout(this.delayTimer),this.delayTimer=setTimeout(function(){e.doSearch()},400);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},methods:d({},Object(o["b"])(["getElements","editElement","saveElement","deleteElement"]),{getFormat:function(t){return window.__localeId__=this.$store.getters.locale,Object(c["g"])(t,"DD.MM.YY hh:mm")},doSearch:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.dataTableLoading=!0,t.next=4,this.getElements(Object(c["a"])(this.options,this.buildSearch()));case 4:this.dataTableLoading=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.dataTableLoading=!1;case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),buildSearch:function(){return this.search?{query:this.search,fields:this.fieldsToSearch.join(",")}:{}},editItem:function(t){this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm(this.$t("common.DO_YOU_REALLY_WANT_TO_DELETE_THIS_ITEM"),{title:this.$t("common.WARNING"),buttonTrueText:this.$t("common.DELETE"),buttonFalseText:this.$t("common.CANCEL"),buttonTrueColor:"red lighten3",buttonFalseColor:"yellow lighten3"});case 3:if(a=t.sent,!a){t.next=11;break}return this.dataTableLoading=!0,t.next=8,this.deleteElement(e._id);case 8:return t.next=10,this.getElements(Object(c["a"])(this.options,this.buildSearch()));case 10:this.dataTableLoading=!1;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),this.dataTableLoading=!1;case 16:case"end":return t.stop()}},t,this,[[0,13]])}));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=Object.assign({},t.defaultItem)},300)},save:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$validator.validateAll();case 3:if(e=t.sent,!e){t.next=20;break}if(this.dataTableLoading=!0,!this.editedItem._id){t.next=14;break}return t.next=9,this.editElement(this.editedItem);case 9:return t.next=11,this.getElements(Object(c["a"])(this.options,this.buildSearch()));case 11:this.dataTableLoading=!1,t.next=19;break;case 14:return t.next=16,this.saveElement({name:this.editedItem.name});case 16:return t.next=18,this.getElements(Object(c["a"])(this.options,this.buildSearch()));case 18:this.dataTableLoading=!1;case 19:this.close();case 20:t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](0),this.dataTableLoading=!1,this.close();case 26:case"end":return t.stop()}},t,this,[[0,22]])}));function e(){return t.apply(this,arguments)}return e}()})},m=u,h=(a("64ae"),a("2877")),f=a("6544"),p=a.n(f),b=a("8336"),v=a("b0af"),g=a("99d9"),T=a("a523"),x=a("8fea"),_=a("169a"),E=a("0e8f"),O=a("132d"),w=a("a722"),I=a("2fa4"),y=a("8654"),A=a("2a7f"),$=Object(h["a"])(m,n,r,!1,null,null,null);e["default"]=$.exports;p()($,{VBtn:b["a"],VCard:v["a"],VCardActions:g["b"],VCardText:g["d"],VCardTitle:g["e"],VContainer:T["a"],VDataTable:x["a"],VDialog:_["a"],VFlex:E["a"],VIcon:O["a"],VLayout:w["a"],VSpacer:I["a"],VTextField:y["a"],VToolbarTitle:A["c"]})},ce04:function(t,e,a){}}]);