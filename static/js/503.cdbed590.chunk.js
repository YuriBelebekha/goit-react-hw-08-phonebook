"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[503],{2503:function(e,t,o){o.r(t),o.d(t,{default:function(){return K}});var n=o(2791),r=o(9434),a=o(6907),i=o(1413),c=o(9439),l=o(6052),s=o(5985),f=o(8240),u=o(4852),d=o(6520),m=o(6259),p=o(3400),x=o(7247),h=o(9579),b=o(184),C=function(e){var t=e.id,o=e.name,a=e.number,i=(0,r.I0)(),C=(0,n.useState)(!1),v=(0,c.Z)(C,2),j=v[0],Z=v[1];return(0,b.jsx)(u.ZP,{secondaryAction:(0,b.jsx)(d.Z,{title:"Delete contact",placement:"left-start",children:(0,b.jsx)(p.Z,{onClick:function(){Z(!0),function(e){return i((0,l.GK)(e))}(t).then((function(e){e.error?s.Am.error("Contact wasn't deleted: ".concat(e.payload),f.F):s.Am.info("Contact ".concat(o.toUpperCase()," was deleted"),f.F)})).finally((function(){Z(!1)}))},disabled:j,"aria-label":"delete",sx:{color:"#c9c9c9",boxShadow:3,border:1,borderColor:"orange"},children:j?(0,b.jsx)(h.Z,{sx:{color:"orange"}}):(0,b.jsx)(x.Z,{})})}),children:(0,b.jsxs)(m.Z,{children:[o," - \u260f ",a]})})},v=function(e){return e.contacts.contacts},j=function(e){return e.contacts.isLoading},Z=o(6895),g=o(4554),w=o(663),y=function(){var e=(0,r.I0)(),t=(0,r.v9)(v),o=(0,r.v9)(j),a=(0,r.v9)(Z.zK);(0,n.useEffect)((function(){e((0,l.yF)())}),[e]);return(0,b.jsxs)(g.Z,{component:"ul",autoComplete:"off",sx:{display:"flex",flexDirection:"column",m:"0 10px 0 auto",maxWidth:"500px",color:"#fff"},children:[o&&(0,b.jsx)("b",{children:"Refreshing contacts..."}),t&&(0,b.jsx)(w.OO,{style:{height:"190px"},totalCount:t.length,data:function(){var e=a.toLowerCase();if(t)return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),itemContent:function(e,t){return(0,b.jsx)(C,(0,i.Z)({},t),t.id)}})]})},A=o(6429),k=o.n(A),F=o(6088),z=o(890),I=o(5467),_=o(6151),L=o(2419),M=o(6314),W=(0,F.Z)(I.Z)({"& label":{color:"#fff"},"& label.Mui-focused":{color:"#00f4ff"},"& .MuiOutlinedInput-root":{"&":{color:"#fff",marginBottom:"30px"},"& fieldset":{borderColor:"#fff"},"&:hover fieldset":{borderColor:"#00f4ff"},"&.Mui-focused fieldset":{borderColor:"#00f4ff"}}});var S=function(){var e=(0,r.I0)(),t=(0,r.v9)(v),o=(0,n.useState)(""),a=(0,c.Z)(o,2),i=a[0],u=a[1],d=(0,n.useState)(""),m=(0,c.Z)(d,2),p=m[0],x=m[1],h=function(e){var t=e.currentTarget,o=t.name,n=t.value;switch(o){case"name":u(n);break;case"number":x(n);break;default:return}};return(0,b.jsxs)(g.Z,{component:"form",onSubmit:function(o){o.preventDefault();var n,r=o.currentTarget,a={id:k().generate(),name:i,number:p},c=t.some((function(e){return e.name.toLocaleLowerCase()===i.toLocaleLowerCase()}));if(c)return s.Am.error("".concat(i.toUpperCase()," is already in contacts"),f.F);c?s.Am.error("Something went wrong... :(",f.F):(s.Am.success("".concat(i.toUpperCase()," added to phonebook"),f.F),n=a,e((0,l.uK)(n))),u(""),x(""),r.reset()},autoComplete:"off",sx:{m:"80px 10px 30px auto",maxWidth:"500px",color:"#fff"},children:[(0,b.jsx)(z.Z,{variant:"h5",component:"h1",sx:{fontWeight:"bold",color:"#00f4ff",mb:"30px"},children:"Add Contact Form"}),(0,b.jsx)(W,{id:"outlined-basic",type:"text",name:"name",label:"Name",onChange:h,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},variant:"outlined",size:"small",fullWidth:!0,required:!0}),(0,b.jsx)(W,{id:"outlined-basic",type:"tel",name:"number",label:"Number",onChange:h,inputProps:{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",variant:"outlined",size:"small",fullWidth:!0,required:!0}),(0,b.jsx)(M.Z,{direction:"row",spacing:2,color:"#fff",mr:"24px",children:(0,b.jsx)(_.Z,{type:"submit",color:"inherit",variant:"outlined",endIcon:(0,b.jsx)(L.Z,{}),children:"Add Contact"})})]})},q=(0,F.Z)(I.Z)({"& label":{color:"#fff"},"& label.Mui-focused":{color:"#00f4ff"},"& .MuiOutlinedInput-root":{"&":{color:"#fff",marginBottom:"30px"},"& fieldset":{borderColor:"#fff"},"&:hover fieldset":{borderColor:"#00f4ff"},"&.Mui-focused fieldset":{borderColor:"#00f4ff"}}}),B=function(){var e=(0,r.I0)(),t=(0,r.v9)(Z.zK);return(0,b.jsxs)(g.Z,{component:"form",autoComplete:"off",sx:{m:"0 10px 0 auto",maxWidth:"500px",color:"#fff"},children:[(0,b.jsx)(z.Z,{variant:"h6",component:"h2",sx:{color:"orange",mb:"20px"},children:"Find contacts by name"}),(0,b.jsx)(q,{id:"outlined-basic",type:"text",value:t,onChange:function(t){e((0,Z.Tv)(t.target.value))},variant:"outlined",size:"small",fullWidth:!0,required:!0})]})},K=function(){var e=(0,r.I0)();return(0,n.useEffect)((function(){e((0,l.yF)())}),[e]),(0,b.jsxs)(a.B6,{children:[(0,b.jsx)(a.ql,{children:(0,b.jsx)("title",{children:"Your contacts"})}),(0,b.jsx)(S,{}),(0,b.jsx)(B,{}),(0,b.jsx)(y,{})]})}}}]);
//# sourceMappingURL=503.cdbed590.chunk.js.map