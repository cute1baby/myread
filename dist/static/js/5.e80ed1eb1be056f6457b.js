webpackJsonp([5],{"0t1/":function(t,e){},"7lTz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),o=a("exGp"),c=a.n(o),i=a("Dd8w"),l=a.n(i),r=a("NYxO"),f=(a("2cg0"),a("dvdv")),d={data:function(){return{baseInfo:{},topicInfo:{},evaluateInfo:{},sceneInfo:{}}},computed:l()({},Object(r.e)({teacherDetails:function(t){return t.teachers.teacherDetails}})),created:function(){var t=this.$route.params.id;document.title="讲师详情 - 插座学院",this.getTeacherDetails(t)},methods:l()({},Object(r.b)({getTeacherInfo:"teachers/getTeacherInfo"}),{getTeacherDetails:function(t){var e=this;return c()(n.a.mark(function a(){var s,o,c,i,l,r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getTeacherInfo({teacherId:t});case 2:s=a.sent,o=s.data,c=o.catalogs,i=o.comments,l=o.imgs,r=o.info,o.types,e.baseInfo={title:"讲师介绍",content:r.content},e.topicInfo={title:"课程主题",list:c,topic:r.topic},e.evaluateInfo={title:"客户评价",list:i},e.sceneInfo={title:"授课现场",list:l};case 8:case"end":return a.stop()}},a,e)}))()},askForClass:function(){console.log(this.teacherDetails)},toPath:function(t){this.$router.push(t)}}),components:{Modular:f.a}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.teacherDetails.data?a("section",{staticClass:"container"},[a("div",{staticClass:"tutor space"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.teacherDetails.data.info.list_cover}})])]),t._v(" "),a("el-col",{staticClass:"df dfdir dfjbw teacherInfo",attrs:{xs:24,sm:24,md:16,lg:16,xl:16}},[a("div",{staticClass:"basicInfo"},[a("p",{staticClass:"name"},[t._v(t._s(t.teacherDetails.data.info.name))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.teacherDetails.data.info.job))]),t._v(" "),a("p",{staticClass:"tags"},t._l(t.teacherDetails.data.types,function(e){return a("span",[t._v("\n                        "+t._s(e.catalog_type_name)+"\n                      ")])}),0)]),t._v(" "),a("div",{staticClass:"contact df dfaic"},[a("span",{staticClass:"invite",on:{click:t.askForClass}},[t._v("邀请老师授课")]),t._v(" "),a("div",{staticClass:"touch df dfdir dfaic"},[t._v("\n            联系老师助理\n            "),a("p",{staticClass:"phone"},[a("span",{staticClass:"iconfont phoneIcon"}),t._v("\n              "+t._s(t.teacherDetails.data.info.contact)+"\n            ")])])])])],1)],1),t._v(" "),a("div",{staticClass:"modular space"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:24,md:18,lg:18,xl:18}},[a("div",{staticClass:"vessels"},[t.baseInfo.content?a("Modular",{attrs:{modeInfo:t.baseInfo,type:"1"}}):t._e(),t._v(" "),t.topicInfo.list&&t.topicInfo.list.length>0?a("Modular",{attrs:{modeInfo:t.topicInfo,type:"2"}}):t._e(),t._v(" "),t.evaluateInfo.list&&t.evaluateInfo.list.length>0?a("Modular",{attrs:{modeInfo:t.evaluateInfo,type:"6"}}):t._e(),t._v(" "),t.sceneInfo.list&&t.sceneInfo.list.length>0?a("Modular",{attrs:{modeInfo:t.sceneInfo,type:"3"}}):t._e()],1),t._v(" "),a("div",{staticClass:"position"})])],1)],1)]):t._e()},staticRenderFns:[]};var v=a("VU/8")(d,u,!1,function(t){a("0t1/")},"data-v-70934a00",null);e.default=v.exports}});
//# sourceMappingURL=5.e80ed1eb1be056f6457b.js.map