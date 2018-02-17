!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LiquorTree=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree-node { white-space: nowrap; } .tree-arrow { display: inline-block; height: 30px; cursor: pointer; margin-left: 30px; width: 0; } .tree-checkbox { display: inline-block; height: 30px; width: 30px; cursor: pointer; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABaCAYAAACv+ebYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAejAAAHowEwL7LFAAAAB3RJTUUH4gIDCy4HZhufyQAAAZVJREFUaN7t2U8og3EYB/DvO3pdRKR2UIiViNzsyE4yHCQiSSIHkQOSFuZPSqklDliSkhknBw4UhYPiJgebNaQtorc5rHfz6nVz0cqYdzt8n+PvOXz69TxPPfUI/pdXFXEIHeIUhAkTTmzY73/G9bVbW1iSApiZXYL3/lE7OBiUMTtnR2lJIWrNJm1gRfmAbX4NmRnp6Oxo1KbGqqpi2e6ALIfQ39eOpCSdNvCWcw8ezwOGBrqQkiLGpqvtq9t4V5SI+YPDM5ycXmB4qBtpaamxGyef7wmT04uQpMC33MXlFZw7+xgc6IRenxXbObaM9CAvNxuWMRtuXN6vd5fbi6UVB3p72lCQnxN1eYSfbiBHx+fY2NxFa0sdiosMsE4tormpBqZK46/6Qohm9XG57zC/sA5ZDsFcXYGG+qpfN6QQ7c4lSW9wub0wlpf9aRIELnuECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcL/EMmRElMTVnhubyGKIhDtnUYAwuEwCgwGjI5bE+vHvDsRJkyYMOGI8Ql68IQ9vE0/3AAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position-x: center; background-position-y: -30px; } .tree-anchor { display: inline-block; text-decoration: none; color: #343434; vertical-align: top; height: 24px; line-height: 24px; padding: 3px 6px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; flex-grow: 2; } .tree-anchor:hover { background-color: #fafafa; } .tree--selected > .tree-anchor { background: #f0f0f0; } .tree--checked > .tree-checkbox { background-position-y: 0; } .tree--indeterminate > .tree-checkbox { background-position-y: -60px; } .tree--checked > .tree-anchor { background: #dadada; } .tree--has-child > .tree-arrow { margin-left: 0; width: 30px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACCSURBVHja7JSxDkBQDEVPzYIVg/gAETaL//8NFonJKiRMwlAR78UgtOs9uU1vU1kwL4cffjcsrkTC3vecUxq8S+tFbSBnJNxMT1SnMFT0JKYw1AwEpjCUzASmMBR0xLrKKucHx7ZYmEVUFkeSMR3PU1eJ/gDFx6c9wqrq/56fgNcBAInl7e4ANk/XAAAAAElFTkSuQmCC'); background-repeat: no-repeat; transition: transform .3s; } .tree--expanded > .tree-arrow { transform: rotate(90deg); } .tree--disabled { color: #fff; background: #fff; opacity: .6; cursor: default; } .tree--disabled > .tree-anchor, .tree--disabled > .tree-anchor span { background: #fff; cursor: default; } .l-fade-enter-active, .l-fade-leave-active { transition: opacity .3s, transform .3s; transform: translateX(0); } .l-fade-enter, .l-fade-leave-to { opacity: 0; transform: translateX(-2em); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var e=function(e,t){if(this.id=t.id,this.states=t.state,this.children=t.children||[],this.parent=t.parent||null,this._data=Object.assign({},{text:t.text},t.data||{}),!e)throw new Error("Node must has a Tree context!");this.tree=e},t={text:{configurable:!0},depth:{configurable:!0}};function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function i(){return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}e.prototype.$emit=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.tree).$emit.apply(t,["node:"+e,this].concat(n))},t.text.get=function(){return this.data("text")},t.text.set=function(e){var t=this.text;this.data("text",e),this.tree.$emit("node:text:changed",e,t)},t.depth.get=function(){var e=0,t=this.parent;if(!t)return e;do{e++}while(t=t.parent);return e},e.prototype.data=function(e,t){return void 0===t?this._data[e]:(this._data[e]=t,this)},e.prototype.state=function(e,t){return void 0===t?this.states[e]:(this.states[e]=t,this)},e.prototype.refreshIndeterminateState=function(){if(this.state("indeterminate",!1),this.hasChildren()){var e=this.children.length,t=0,n=0,i=0;this.children.forEach(function(e){e.checked()&&t++,e.disabled()&&i++,e.indeterminate()&&n++}),t==e-i?this.checked()||this.check():this.checked()&&this.uncheck(),this.checked()||this.state("indeterminate",n>0||t>0&&t<e)}this.parent&&this.parent.refreshIndeterminateState()},e.prototype.indeterminate=function(){return this.state("indeterminate")},e.prototype.selectable=function(){return this.state("selectable")},e.prototype.selected=function(){return this.state("selected")},e.prototype.select=function(){return this.selected()?this:(this.state("selected",!0),this.$emit("selected"),this)},e.prototype.unselect=function(){return this.selected()?(this.state("selected",!1),this.$emit("unselected"),this):this},e.prototype.checked=function(){return this.state("checked")},e.prototype.check=function(){return this.checked()?this:(this.state("checked",!0),this.$emit("checked"),this.refreshIndeterminateState(),this)},e.prototype.uncheck=function(e){return this.checked()?(this.state("checked",!1),this.$emit("unchecked"),this.refreshIndeterminateState(),this):this},e.prototype.show=function(){return this.visible()?this:(this.state("visible",!0),this.$emit("shown"),this)},e.prototype.hide=function(){return this.hidden()?this:(this.state("visible",!1),this.$emit("hidden"),this)},e.prototype.visible=function(){return this.state("visible")},e.prototype.hidden=function(){return!this.state("visible")},e.prototype.enable=function(){return this.enabled()?this:(this.tree.recurseDown(this,function(e){e.disabled()&&(e.state("disabled",!1),e.$emit("enabled"))}),this)},e.prototype.enabled=function(){return!this.state("disabled")},e.prototype.disable=function(){return this.disabled()?this:(this.tree.recurseDown(this,function(e){e.enabled()&&(e.state("disabled",!0),e.$emit("disabled"))}),this)},e.prototype.disabled=function(){return this.state("disabled")},e.prototype.expand=function(){return this.expanded()?this:(this.state("expanded",!0),this.$emit("expanded"),this)},e.prototype.expanded=function(){return this.state("expanded")},e.prototype.collapse=function(){return this.collapsed()?this:(this.state("expanded",!1),this.$emit("collapsed"),this)},e.prototype.collapsed=function(){return!this.state("expanded")},e.prototype.toggleExpand=function(){return this._toggleOpenedState()},e.prototype.toggleCollapse=function(){return this._toggleOpenedState()},e.prototype._toggleOpenedState=function(){return this.expanded()?this.collapse():this.expand()},e.prototype.remove=function(){return this.tree.removeNode(this),this.$emit("removed"),this},e.prototype.hasChildren=function(){return this.children.length>0},e.prototype.isRoot=function(){return null===this.parent},Object.defineProperties(e.prototype,t);var r={selected:!1,selectable:!0,checked:!1,expanded:!1,disabled:!1,visible:!0,indeterminate:!1};function o(e){return void 0===e&&(e={}),Object.assign({},r,e)}function s(t,n){var r=null;return"string"==typeof n?r=new e(t,{text:n,state:o(),id:i()}):((r=new e(t,n)).states=o(r.states),r.id||(r.id=i()),r.children.length&&(r.children=r.children.map(function(e){return(e=s(t,e)).parent=r,e}))),r}var d=function(e){function t(){e.call(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.empty=function(){return this.length=0,this},t.prototype.add=function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];return(e=this).push.apply(e,t),this},t.prototype.remove=function(e){return this.splice(this.indexOf(e),1),this},t.prototype.removeAll=function(e){for(;this.includes(e);)this.remove(e);return this},t.prototype.top=function(){return this[this.length-1]},t}(Array),c={id:"id",text:"text",children:"children",state:"state",data:"data"};var a=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[e]);var i=Object.assign({},c,n);return e.map(function e(t){var n,r,o={id:(n=t)[(r=i).id],text:n[r.text],children:n[r.children],state:n[r.state],data:n[r.data]};return o.children&&(o.children=o.children.map(e)),o}).map(function(e){return s(t,e)})};function h(e,t){var n;return Array.isArray(e)?e.map(function(e){return h(e,t)}):(!1!==(n=t(e))&&e.hasChildren()&&(n=h(e.children,t)),n)}var l=function(e){this.vm=e,this.options=e.options};l.prototype.$on=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$on.apply(t,[e].concat(n))},l.prototype.$once=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$once.apply(t,[e].concat(n))},l.prototype.$off=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$off.apply(t,[e].concat(n))},l.prototype.$emit=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$emit.apply(t,[e].concat(n))},l.prototype.setModel=function(e){var t=this;if(this.model=e,this.selectedNodes=new d,this.checkedNodes=new d,h(e,function(e){e.tree=t,e.selected()&&t.selectedNodes.add(e),e.checked()&&(t.checkedNodes.add(e),e.parent&&e.parent.refreshIndeterminateState())}),!this.options.multiple&&this.selectedNodes.length){var n=this.selectedNodes.top();this.selectedNodes.forEach(function(e){n!==e&&e.state("selected",!1)}),this.selectedNodes.empty().add(n)}},l.prototype.recurseDown=function(e,t){return!t&&e&&(t=e,e=this.model),h(e,t)},l.prototype.select=function(e,t){var n=this;if(e.selected()||!e.selectable())return!1;var i=this.findNode(e);return!!i&&(this.options.multiple&&t?this.selectedNodes.add(i):(this.selectedNodes.forEach(function(e){return n.unselect(e)}),this.selectedNodes.empty().add(i)),i.select(),!0)},l.prototype.selectAll=function(){var e=this;return!!this.options.multiple&&(this.selectedNodes.empty(),this.recurseDown(function(t){e.selectedNodes.add(t.select())}),!0)},l.prototype.unselect=function(e){return!(!e.selected()||!e.selectable())&&(e.unselect(),!0)},l.prototype.unselectAll=function(){var e=this;return this.selectedNodes.forEach(function(t){e.unselect(t)}),this.selectedNodes.empty(),!0},l.prototype.check=function(e){var t=this;return!e.checked()&&(e.indeterminate()?this.uncheck(e):(e.state("indeterminate",!1),e.hasChildren()?this.recurseDown(e,function(e){e.enabled()&&(e.checked()||(t.$emit("node:checked",e.state("checked",!0)),t.checkedNodes.add(e)))}):!e.checked()&&e.enabled()&&(this.$emit("node:checked",e.state("checked",!0)),this.checkedNodes.add(e)),void e.refreshIndeterminateState()))},l.prototype.uncheck=function(e){var t=this;if(!e.checked()&&!e.indeterminate())return!1;e.state("indeterminate",!1),e.hasChildren()?this.recurseDown(e,function(e){e.state("indeterminate",!1),e.checked()&&t.$emit("node:unchecked",e.state("checked",!1)),t.checkedNodes.remove(e)}):(e.checked()&&this.$emit("node:unchecked",e.state("checked",!1)),this.checkedNodes.remove(e)),e.refreshIndeterminateState()},l.prototype.expand=function(e){return!e.expanded()&&(e.expand(),!0)},l.prototype.collapse=function(e){return!e.collapsed()&&(e.collapse(),!0)},l.prototype.toggleExpand=function(e){return!!e.hasChildren()&&(e.toggleExpand(),!0)},l.prototype.toggleCollapse=function(e){return!!e.hasChildren()&&(e.toggleCollapse(),!0)},l.prototype.addToModel=function(e,t){var n=this;void 0===t&&(t=this.model.length),this.model.splice(t,0,e),this.recurseDown(e,function(e){e.tree=n})},l.prototype.append=function(e){return e=s(e),this.addToModel(e),e},l.prototype.prepend=function(e){return e=s(e),this.addToModel(e,0),e},l.prototype.addNode=function(e){var t=this.model.length;return e=s(e),this.model.splice(t,0,e),this.$emit("node:added",e),e},l.prototype.removeNode=function(e){return e.parent?e.parent.children.splice(e.parent.children.indexOf(e),1):this.model.splice(this.model.indexOf(e),1),this.selectedNodes.remove(e),this.checkedNodes.remove(e),e},l.prototype.findNode=function(t){if("string"==typeof t);else if(t instanceof e)return t},l.prototype.parse=function(e,t){t||(t=this.options.propertyNames);try{return a(e,this,t)}catch(e){return console.error(e),[]}};var p={mounted:function(){var e=new l(this);this.model=e.parse(this.data,this.options.modelParse),this.tree=e,this.tree.setModel(this.model),this._provided.tree=e},methods:{selected:function(){return this.options.multiple?this.tree.selectedNodes:this.tree.selectedNodes[0]||null},checked:function(){return this.options.checkbox?this.tree.checkedNodes:null},append:function(e){return this.tree.append(e)},prepend:function(e){return this.tree.prepend(e)},addNode:function(e){return this.tree.addNode(e)}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree { overflow: auto; } .tree-root, .tree-children { list-style: none; } .tree > .tree-root { padding: 0; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var u={multiple:!0,checkbox:!1,parentSelect:!1},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree",attrs:{role:"tree"}},[n("ul",{staticClass:"tree-root"},e._l(e.model,function(t,i){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()}))])},staticRenderFns:[],name:"Tree",components:{node:{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"tree-node",class:e.nodeClass},[n("i",{staticClass:"tree-arrow",on:{click:e.toggleExpand}}),e._v(" "),e.options.checkbox?n("i",{staticClass:"tree-checkbox",on:{click:e.check}}):e._e(),e._v(" "),n("a",{staticClass:"tree-anchor",attrs:{href:"javascript:void(0)"},on:{click:e.select}},[n("node-content",{attrs:{node:e.node}})],1),e._v(" "),n("transition",{attrs:{name:"l-fade"}},[e.hasChildren()&&e.state.expanded?n("ul",{staticClass:"tree-children"},e._l(e.node.children,function(t,i){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()})):e._e()])],1)},staticRenderFns:[],name:"Node",inject:["tree"],props:["node","options"],components:{NodeContent:{props:["node"],render:function(e){var t=this.node,n=this.node.tree.vm;return n.$scopedSlots.default?n.$scopedSlots.default({node:this.node}):e("span",{domProps:{innerHTML:t.text}})}}},data:function(){return{state:this.node.states}},computed:{nodeClass:function(){var e=this.state,t=this.hasChildren(),n={"tree--has-child":t,"tree--expanded":t&&e.expanded,"tree--selected":e.selected,"tree--disabled":e.disabled};return this.options.checkbox&&(n["tree--checked"]=e.checked,n["tree--indeterminate"]=e.indeterminate),n}},methods:{check:function(){this.node.disabled()||(this.node.checked()?this.tree.uncheck(this.node):this.tree.check(this.node))},select:function(e){if(!this.node.disabled())return!this.options.parentSelect&&this.hasChildren()?this.toggleExpand():void(this.node.selected()?e.ctrlKey?this.tree.unselect(this.node):(this.tree.unselectAll(),this.options.multiple&&this.tree.select(this.node)):this.tree.select(this.node,e.ctrlKey))},toggleExpand:function(){this.node.disabled()||this.hasChildren()&&this.tree.toggleExpand(this.node)},hasChildren:function(){return this.node.hasChildren()}}}},mixins:[p],provide:function(e){return{tree:null}},props:{data:{type:Array,default:function(e){return[]}},options:{type:Object,default:function(e){return{}}}},data:function(){for(var e in u)!1==e in this.options&&(this.options[e]=u[e]);return{model:null,tree:null}}};return f.install=function(e){e.component(f.name,f)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(f),f});
