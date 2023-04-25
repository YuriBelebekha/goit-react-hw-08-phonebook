(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[503],{2503:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(2791),o=n(9434),a=n(6907),i=n(1413),s=n(9439),u=n(6052),c=n(5206),f=n(8240),l=n(184),d=function(e){var t=e.id,n=e.name,a=e.number,i=(0,o.I0)(),d=(0,r.useState)(!1),h=(0,s.Z)(d,2),p=h[0],x=h[1];return(0,l.jsxs)("li",{children:[(0,l.jsxs)("p",{children:[n," - \u260f ",a]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"button",onClick:function(){x(!0),function(e){return i((0,u.GK)(e))}(t).then((function(e){e.error?c.Am.error("Contact wasn't deleted: ".concat(e.payload),f.F):c.Am.info("Contact ".concat(n.toUpperCase()," was deleted"),f.F)})).finally((function(){x(!1)}))},disabled:p,children:p?"Deleting...":"Delete"})})]})},h=function(e){return e.contacts.contacts},p=function(e){return e.contacts.isLoading},x=n(6895),m=function(){var e=(0,o.I0)(),t=(0,o.v9)(h),n=(0,o.v9)(p),a=(0,o.v9)(x.zK);(0,r.useEffect)((function(){e((0,u.yF)())}),[e]);return(0,l.jsxs)("ul",{children:[n&&(0,l.jsx)("b",{children:"Loading contacts..."}),t&&function(){var e=a.toLowerCase();if(t)return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}().map((function(e){return(0,l.jsx)(d,(0,i.Z)({},e),e.id)}))]})},v=n(6429),g=n.n(v),b=n(225),w=n(4554),j=n(7206),C=n(3736),y=n(2419),k=n(6314),M=(0,b.Z)(j.Z)({"& label":{color:"#fff"},"& label.Mui-focused":{color:"#00f4ff"},"& .MuiOutlinedInput-root":{"&":{color:"#fff",marginBottom:"30px"},"& fieldset":{borderColor:"#fff"},"&:hover fieldset":{borderColor:"#00f4ff"},"&.Mui-focused fieldset":{borderColor:"#00f4ff"}}});var Z=function(){var e=(0,o.I0)(),t=(0,o.v9)(h),n=(0,r.useState)(""),a=(0,s.Z)(n,2),i=a[0],d=a[1],p=(0,r.useState)(""),x=(0,s.Z)(p,2),m=x[0],v=x[1],b=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":d(r);break;case"number":v(r);break;default:return}};return(0,l.jsxs)(w.Z,{component:"form",onSubmit:function(n){n.preventDefault();var r,o=n.currentTarget,a={id:g().generate(),name:i,number:m},s=t.some((function(e){return e.name.toLocaleLowerCase()===i.toLocaleLowerCase()}));if(s)return c.Am.error("".concat(i.toUpperCase()," is already in contacts"),f.F);s?c.Am.error("Something went wrong... :(",f.F):(c.Am.success("".concat(i.toUpperCase()," added to phonebook"),f.F),r=a,e((0,u.uK)(r))),d(""),v(""),o.reset()},autoComplete:"off",sx:{m:"80px 10px 50px auto",maxWidth:"500px",color:"#fff"},children:[(0,l.jsx)(M,{id:"outlined-basic",type:"text",name:"name",label:"Name",onChange:b,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",variant:"outlined",size:"small",fullWidth:!0,required:!0}),(0,l.jsx)(M,{id:"outlined-basic",type:"tel",name:"number",label:"Number",onChange:b,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",variant:"outlined",size:"small",fullWidth:!0,required:!0}),(0,l.jsx)(k.Z,{direction:"row",spacing:2,color:"#fff",mr:"24px",children:(0,l.jsx)(C.Z,{type:"submit",color:"inherit",variant:"outlined",endIcon:(0,l.jsx)(y.Z,{}),children:"Add Contact"})})]})},A=function(){var e=(0,o.I0)(),t=(0,o.v9)(x.zK);return(0,l.jsxs)("label",{children:["Find contacts by name",(0,l.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,x.Tv)(t.target.value))}})]})},F=function(){var e=(0,o.I0)(),t=(0,o.v9)(p);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,l.jsxs)(a.B6,{children:[(0,l.jsx)(a.ql,{children:(0,l.jsx)("title",{children:"Your contacts"})}),(0,l.jsx)(Z,{}),(0,l.jsx)(A,{}),(0,l.jsx)("div",{children:t&&"Request in progress..."}),(0,l.jsx)(m,{})]})}},2419:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},6429:function(e,t,n){"use strict";e.exports=n(5274)},8857:function(e,t,n){"use strict";var r,o,a,i=n(5408),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){a=!1}function c(e){if(e){if(e!==r){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,u()}}else r!==s&&(r=s,u())}function f(){return a||(a=function(){r||c(s);for(var e,t=r.split(""),n=[],o=i.nextValue();t.length>0;)o=i.nextValue(),e=Math.floor(o*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||s},characters:function(e){return c(e),r},seed:function(e){i.seed(e),o!==e&&(u(),o=e)},lookup:function(e){return f()[e]},shuffled:f}},7098:function(e,t,n){"use strict";var r,o,a=n(2226);n(8857);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),t+=a(7),t+=a(e),r>0&&(t+=a(r)),t+=a(n)}},2226:function(e,t,n){"use strict";var r=n(8857),o=n(9139),a=n(2483);e.exports=function(e){for(var t,n=0,i="";!t;)i+=a(o,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}},5274:function(e,t,n){"use strict";var r=n(8857),o=n(7098),a=n(6046),i=n(5347)||0;function s(){return o(i)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=a},6046:function(e,t,n){"use strict";var r=n(8857);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},9139:function(e){"use strict";var t,n="object"===typeof window&&(window.crypto||window.msCrypto);t=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},5408:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},5347:function(e){"use strict";e.exports=0},2483:function(e){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*n/t.length),a="";;)for(var i=e(o),s=o;s--;)if((a+=t[i[s]&r]||"").length===+n)return a}}}]);
//# sourceMappingURL=503.46458273.chunk.js.map