webpackJsonp([7],{Quw4:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t("4YfN"),s=t.n(r),n=t("2bvH"),l=t("HNM5"),i=t("sHg/"),a={data:function(){return{ruleForm:{mobile:"18610500240",password:""},rules:{password:[{validator:function(e,o,t){""===o?t(new Error("请输入密码")):t()},trigger:"blur"}],mobile:[{validator:function(e,o,t){""===o?t(new Error("请输入手机号")):i.b.test(o)?t():t(new Error("手机格式不正确"))},trigger:"blur"}],code:[{validator:function(e,o,t){o?o.length<4?t(new Error("格式错误")):t():t(new Error("请输入验证码"))},trigger:"blur"}]},loginType:2,loginPass:!0,countdown:0}},methods:s()({},Object(n.b)({login:"user/login",register:"user/register"}),{submitForm:function(e){var o=this;console.log(e),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t=o.loginType;switch(t){case 1:console.log(t),o.toRegister(o.ruleForm);break;case 2:console.log(t),o.toLogin(o.ruleForm,1);break;case 3:console.log(t),o.toLogin(o.ruleForm,2)}})},toLogin:function(e,o){var t=this;e.loginType=o,this.login(e).then(function(e){t.$ls.set("CZXY_TOKEN",e.data.token),t.$message.success("登录成功！"),setTimeout(function(){window.location.href="/"},1e3)}).catch(function(e){console.log("err===>",e)})},toRegister:function(e){var o=this;this.register(e).then(function(e){o.$ls.set("CZXY_TOKEN",e.data.token),o.$message.success("注册成功！")}).catch(function(e){console.log("err===>",e),o.loginType=3})},getNoteCode:function(e){var o=this;this.$refs[e].validateField("mobile",function(e){e||0!=o.countdown||l.a.get("/Membernew/sendBusinessCodeByWeb",{type:2,mobile:o.ruleForm.mobile},i.a.hdk).then(function(e){o.$message.success(e.data.msg),o._countdown()})})},_countdown:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60;this.countdown=o,clearInterval(t);var t=setInterval(function(){e.countdown>1?e.countdown-=1:(e.countdown=0,clearInterval(t))},1e3)},close:function(){console.log("close"),this.$emit("close")}})},c={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"container"},[t("div",{staticClass:"login-wrapper df dfdir dfc"},[t("div",{staticClass:"el-container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules}},[2==e.loginType||3==e.loginType?t("h1",{staticClass:"form-title"},[e._v("欢迎登陆")]):e._e(),e._v(" "),1==e.loginType?t("h1",{staticClass:"form-title"},[e._v("注册")]):e._e(),e._v(" "),2==e.loginType||3==e.loginType?t("p",{staticClass:"form-desc",on:{click:function(o){e.loginType=1}}},[e._v("还没有账号？"),t("span",{staticClass:"register"},[e._v("去注册")])]):e._e(),e._v(" "),1==e.loginType?t("p",{staticClass:"form-desc",on:{click:function(o){e.loginType=3}}},[e._v("已有账号？"),t("span",{staticClass:"register"},[e._v("登陆")])]):e._e(),e._v(" "),t("el-form-item",{attrs:{prop:"mobile"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入手机号"},model:{value:e.ruleForm.mobile,callback:function(o){e.$set(e.ruleForm,"mobile",o)},expression:"ruleForm.mobile"}})],1),e._v(" "),1==e.loginType?t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{inline:!0}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:16}},[t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.ruleForm.code,callback:function(o){e.$set(e.ruleForm,"code",o)},expression:"ruleForm.code"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{staticClass:"df"},[t("el-button",{staticClass:"demo-form-inline",attrs:{size:"medium",type:e.countdown>0?"info":"primary"},on:{click:function(o){return e.getNoteCode("ruleForm")}}},[e.countdown>0?t("span",[e._v(e._s(e.countdown)+"s")]):t("span",[e._v("获取验证码")])])],1)],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"密码"},model:{value:e.ruleForm.password,callback:function(o){e.$set(e.ruleForm,"password",o)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.submitForm("ruleForm")}}},[e._v("注册")])],1):e._e(),e._v(" "),2==e.loginType?t("el-col",[e.loginPass?t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"密码"},model:{value:e.ruleForm.password,callback:function(o){e.$set(e.ruleForm,"password",o)},expression:"ruleForm.password"}})],1):e._e(),e._v(" "),t("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(o){return e.submitForm("ruleForm")}}},[e._v("登录")])],1):e._e(),e._v(" "),3==e.loginType?t("el-col",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:16}},[t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.ruleForm.code,callback:function(o){e.$set(e.ruleForm,"code",o)},expression:"ruleForm.code"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{staticClass:"df"},[t("el-button",{staticClass:"demo-form-inline",attrs:{size:"medium",type:e.countdown>0?"info":"primary"},on:{click:function(o){return e.getNoteCode("ruleForm")}}},[e.countdown>0?t("span",[e._v(e._s(e.countdown)+"s")]):t("span",[e._v("获取验证码")])])],1)],1)],1),e._v(" "),t("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(o){return e.submitForm("ruleForm")}}},[e._v("登录")])],1):e._e(),e._v(" "),1!=e.loginType?t("p",{staticClass:"form-desc"},[3==e.loginType?t("span",{staticClass:"register",on:{click:function(o){e.loginType=2}}},[e._v("账号密码登录")]):e._e(),e._v(" "),2==e.loginType?t("span",{staticClass:"register",on:{click:function(o){e.loginType=3}}},[e._v("短信登录")]):e._e()]):e._e()],1)],1)])])},staticRenderFns:[]};var u=t("C7Lr")(a,c,!1,function(e){t("x3BA")},"data-v-023ea407",null);o.default=u.exports},x3BA:function(e,o){}});
//# sourceMappingURL=7.a664082b9dd137fcf6f9.js.map