(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{231:function(t,e,o){var content=o(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("2eb2c676",content,!0,{sourceMap:!1})},237:function(t,e,o){"use strict";o(231)},238:function(t,e,o){var n=o(64)(!1);n.push([t.i,".main-content[data-v-c3f2ac40]{box-shadow:0 2px 4px 0 rgb(0 0 0/20%),0 25px 50px 0 rgb(0 0 0/10%);background:#fff;width:40%;margin-top:50px;border:1px solid #ffb5a7}.hide[data-v-c3f2ac40]{display:none}.input-edit[data-v-c3f2ac40]{color:#2c3e50;border:1px solid rgba(0,0,0,.144);padding:none}.input-edit[data-v-c3f2ac40],.todo-input[data-v-c3f2ac40]{font-size:24px;outline:none}.todo-input[data-v-c3f2ac40]{padding:16px;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgb(0 0 0/3%);line-height:1.4em;width:100%;border:none;border-bottom:1px solid #ffb5a7}.done[data-v-c3f2ac40]{text-decoration:line-through}.container[data-v-c3f2ac40]{margin:0 auto;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-family:Avenir,Helvetica,Arial,sans-serif;box-sizing:border-box}.delete-text[data-v-c3f2ac40],.edit-text[data-v-c3f2ac40]{font-size:18px}.delete-text[data-v-c3f2ac40]:hover,.edit-text[data-v-c3f2ac40]:hover{text-decoration:underline}.edit-text[data-v-c3f2ac40]{color:#5f9ea0}.delete-text[data-v-c3f2ac40]{color:rgba(255,0,0,.363)}.filter[data-v-c3f2ac40]{height:30px;margin-top:10px}.filter span[data-v-c3f2ac40]{font-weight:500;border:1px solid rgba(0,0,0,.301);border-radius:3px;padding:3px 5px;box-sizing:border-box;cursor:pointer;color:#2c3e50}.filter .all-border[data-v-c3f2ac40]{border-color:#006d77}.filter .done-border[data-v-c3f2ac40]{border-color:#d62828}.filter .progress-border[data-v-c3f2ac40]{border-color:#8ecae6}ul[data-v-c3f2ac40]{height:400px;overflow-y:auto}li[data-v-c3f2ac40],ul[data-v-c3f2ac40]{list-style-type:none;padding:0;margin:0}ul>li[data-v-c3f2ac40]{display:flex;justify-content:space-between;align-items:center;text-align:left;padding:10px 20px;cursor:pointer}ul>li span[data-v-c3f2ac40]{font-size:24px;color:#2c3e50}h1[data-v-c3f2ac40]{font-size:100px;font-weight:100;text-align:center;color:rgba(218,45,74,.308)}[data-v-c3f2ac40]::-webkit-scrollbar{width:7px}[data-v-c3f2ac40]::-webkit-scrollbar-track{background:#f1f1f1}[data-v-c3f2ac40]::-webkit-scrollbar-thumb{background:#888}[data-v-c3f2ac40]::-webkit-scrollbar-thumb:hover{background:#555}",""]),t.exports=n},243:function(t,e,o){"use strict";o.r(e);o(35);var n={data:function(){return{todoList:[],filter:"all",isEdit:-1,content:""}},computed:{filterTodos:function(){return this.$store.getters["todos/".concat(this.filter)]},total:function(){return this.$store.state.todos.todoList.length},countProgress:function(){return this.$store.state.todos.todoList.filter((function(t){return!t.isComplete})).length},countDone:function(){return this.total-this.countProgress}},created:function(){this.$store.dispatch("todos/getTodoList")},methods:{addTodo:function(t){t.target.value.length&&(this.$store.dispatch("todos/addTodo",t.target.value),t.target.value="")},editTodo:function(t){this.content.length&&(this.$store.dispatch("todos/editTodo",{todo:t,content:this.content}),this.isEdit=-1,this.content="")},toggle:function(t){this.$store.dispatch("todos/toggleTodo",t)},deleteTodo:function(t){this.$store.dispatch("todos/deleteTodo",t)},clickEdit:function(t){this.isEdit=t.id,this.content=t.content},clickAll:function(){this.filter="all"},clickProgress:function(){this.filter="progress"},clickDone:function(){this.filter="done"}}},c=(o(237),o(29)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",[t._v("todos")]),t._v(" "),o("div",{staticClass:"main-content"},[o("input",{staticClass:"todo-input",attrs:{placeholder:"What needs to be done?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}}),t._v(" "),o("ul",t._l(t.filterTodos,(function(e,n){return o("li",{key:n,on:{click:function(o){return o.target!==o.currentTarget?null:t.toggle(e)}}},[o("span",{class:{done:e.isComplete,hide:t.isEdit===e.id},on:{click:function(o){return o.target!==o.currentTarget?null:t.toggle(e)}}},[t._v(t._s(e.content))]),t._v(" "),t.isEdit===e.id?o("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"input-edit",attrs:{type:"text"},domProps:{value:t.content},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:(o.stopPropagation(),t.editTodo(e))},input:function(e){e.target.composing||(t.content=e.target.value)}}}):t._e(),t._v(" "),o("div",[o("span",{staticClass:"edit-text",on:{click:function(o){return o.stopPropagation(),t.clickEdit(e)}}},[t._v("Edit")]),t._v(" "),o("span",{staticClass:"delete-text",on:{click:function(o){return o.stopPropagation(),t.deleteTodo(e)}}},[t._v("Delete")])])])})),0),t._v(" "),o("div",{staticClass:"filter"},[o("span",{staticClass:"all-border",on:{click:t.clickAll}},[t._v("All("+t._s(t.total)+")")]),t._v(" "),o("span",{staticClass:"progress-border",on:{click:t.clickProgress}},[t._v("Progess("+t._s(t.countProgress)+")")]),t._v(" "),o("span",{staticClass:"done-border",on:{click:t.clickDone}},[t._v("Done("+t._s(t.countDone)+")")])])])])}),[],!1,null,"c3f2ac40",null);e.default=component.exports}}]);