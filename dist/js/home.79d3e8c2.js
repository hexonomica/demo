(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"57da":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.showVerifyDialog,callback:function(e){t.showVerifyDialog=e},expression:"showVerifyDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2 black--text dlgVerifyAccount",attrs:{"primary-title":""}},[a("v-icon",{staticClass:"orange--text"},[t._v("mdi-information")]),t._v("\n             "+t._s(t.$t("home.VERIFY_YOUR_ACCOUNT"))+"\n          ")],1),a("v-card-text",[t._v("\n            "+t._s(t.$t("home.VERIFY_YOUR_ACCOUNT_DESCRIPTION"))+"\n          ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"btnClose",attrs:{color:"primary",text:""},on:{click:function(e){t.showVerifyDialog=!1}}},[t._v(t._s(t.$t("home.CLOSE")))])],1)],1)],1)],1),a("Heading",{attrs:{title:t.$t("home.GREETING",[t.name])}}),a("Description",{attrs:{description:t.$t("home.DESCRIPTION")}}),a("v-flex",{attrs:{xs12:"","text-center":"","mt-10":"","mb-4":""}},[a("v-btn",{staticClass:"btnNewItem pr-6",attrs:{color:"secondary"},on:{click:t.joinMap}},[t._v("\n        Войти в игру\n      ")])],1)],1),a("ProjectDescription")],1)},r=[],n=(a("7f7f"),{metaInfo:function(){return{title:this.$store.getters.appTitle,titleTemplate:"".concat(this.$t("home.TITLE")," - %s")}},data:function(){return{name:this.$store.state.auth.user.name,showVerifyDialog:!this.$store.state.verify.emailVerified}},methods:{joinMap:function(){this.$router.push({name:"game-map"})}}}),s=n,o=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),f=a("b0af"),m=a("99d9"),h=a("a523"),u=a("169a"),v=a("ce7e"),p=a("0e8f"),V=a("132d"),C=a("a722"),w=a("2fa4"),_=Object(o["a"])(s,i,r,!1,null,null,null);e["default"]=_.exports;l()(_,{VBtn:d["a"],VCard:f["a"],VCardActions:m["b"],VCardText:m["d"],VCardTitle:m["e"],VContainer:h["a"],VDialog:u["a"],VDivider:v["a"],VFlex:p["a"],VIcon:V["a"],VLayout:C["a"],VSpacer:w["a"]})}}]);