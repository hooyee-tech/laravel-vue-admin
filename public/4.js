(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5G4q":function(t,o,e){(t.exports=e("I1BE")(!1)).push([t.i,".wangeditor-main[data-v-3d72a12c]{border:1px solid #dcdcdc}.wangeditor-main .toolbar[data-v-3d72a12c]{background:#f7f7f7}",""])},AXNS:function(t,o,e){var a=e("5G4q");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},BdhI:function(t,o,e){"use strict";e.r(o);var a=e("GguQ"),i=e.n(a),s={props:["value","attrs","form_data","form_items"],model:{prop:"value",event:"change"},data:function(){return{editor:null,initHtml:!1,defaultValue:""}},mounted:function(){var t=this;this.defaultValue=this._.cloneDeep(this.attrs.componentValue),this.editor=new i.a(this.$refs.toolbar,this.$refs.editor),this.editor.customConfig.menus=this.attrs.menus,this.editor.customConfig.zIndex=this.attrs.zIndex,this.editor.customConfig.uploadImgShowBase64=this.attrs.uploadImgShowBase64,this.attrs.uploadImgServer&&(this.editor.customConfig.uploadImgServer=this.attrs.uploadImgServer,this.editor.customConfig.uploadImgParams={_token:Admin.token}),this.attrs.uploadFileName&&(this.editor.customConfig.uploadFileName=this.attrs.uploadFileName),this.attrs.uploadImgHeaders&&(this.editor.customConfig.uploadImgHeaders=this.attrs.uploadImgHeaders),this.editor.customConfig.onchange=function(o){t.onChange(o)},this.$nextTick((function(){t.editor.create(),t.editor.txt.html(t.defaultValue)})),this.$bus.on("EditDataLoadingCompleted",(function(){t.editor&&t.editor.txt.html(t.value)}))},destroyed:function(){try{this.$bus.off("EditDataLoadingCompleted")}catch(t){}},methods:{onChange:function(t){this.$emit("change",t)}}},n=(e("mXSN"),e("KHd+")),r=Object(n.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"wangeditor-main"},[e("div",{ref:"toolbar",staticClass:"toolbar"}),t._v(" "),t.attrs.component?e("div",[e(t.attrs.component.componentName,{tag:"component",attrs:{attrs:t.attrs.component,editor:t.editor},on:{"update:editor":function(o){t.editor=o}}})],1):t._e(),t._v(" "),e("div",{ref:"editor",class:t.attrs.className,style:t.attrs.style})])}),[],!1,null,"3d72a12c",null);o.default=r.exports},mXSN:function(t,o,e){"use strict";var a=e("AXNS");e.n(a).a}}]);