"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[793],{793:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(791),c=n(434),r=n(49),o=function(t){return t.contacts.items},i=function(t){return t.contacts.getIsLoading},_=function(t){return t.contacts.error},s=function(t){return t.filter},l={contactForm__form:"ContactForm_contactForm__form__-c9TG",contactForm__field:"ContactForm_contactForm__field__+cOPR",contactForm__field_label:"ContactForm_contactForm__field_label__YSzht",contactForm__input:"ContactForm_contactForm__input__k3i+4",contactForm__submit_button:"ContactForm_contactForm__submit_button__eOEdn","contactForm__submit-button":"ContactForm_contactForm__submit-button__daHG0"},m=n(184);function u(){var t=(0,c.I0)(),e=(0,c.v9)(o),n=function(n){return function(t){return e.filter((function(e){var n,a;return(null===(n=e.name)||void 0===n?void 0:n.toLowerCase())===(null===(a=t.name)||void 0===a?void 0:a.toLowerCase())}))}(n).length>0?(alert("".concat(n.name," is already in contacts.")),!1):(t((0,r.uK)(n)),!0)};return(0,m.jsxs)("form",{className:l.contactForm__form,onSubmit:function(t){t.preventDefault();var e=t.currentTarget,a=e.elements.name.value,c=e.elements.number.value;n({name:a,number:c})&&e.reset()},children:[(0,m.jsxs)("label",{htmlFor:"name",className:"".concat(l.contactForm__field," ").concat(l.contactForm__field_label),children:["Name:",(0,m.jsx)("input",{className:l.contactForm__input,id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{htmlFor:"number",className:"".concat(l.contactForm__field," ").concat(l.contactForm__field_label),children:["Number:",(0,m.jsx)("input",{className:l.contactForm__input,id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",className:l.contactForm__submit_button,children:"Add contact"})]})}var d=n(808),f={filter__field:"Filter_filter__field__fujd7",filter__field_label:"Filter_filter__field_label__tro3m",filter__field_input:"Filter_filter__field_input__xwagY"};function b(){var t=(0,c.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("label",{htmlFor:"filter-field",className:"".concat(f.filter__field," ").concat(f.filter__field_label),children:["Find contacts by name",(0,m.jsx)("input",{id:"filter-field",className:f.filter__field_input,type:"text",onChange:function(e){t((0,d.x)(e.target.value))}})]})})}var h="ContactListItem_contactsListItem__item__E94IE",F="ContactListItem_contactsListItem__item_circle__Tsc6G",p="ContactListItem_contactsListItem__item_name__otVc+",x="ContactListItem_contactsListItem__item_number__mAbZo",v="ContactListItem_contactsListItem__button__HFX2D",j=function(t){var e=t.id,n=t.name,a=t.number,o=(0,c.I0)();return(0,m.jsxs)("li",{className:h,children:[(0,m.jsx)("span",{className:F}),(0,m.jsxs)("p",{className:p,children:[n,":",(0,m.jsx)("span",{className:x,children:a})]}),(0,m.jsx)("button",{type:"button",className:v,onClick:function(){return o((0,r.GK)(e))},children:"Delete"})]})},C={contactList__list:"ContactList_contactList__list__EgfLC"};function L(){var t=(0,c.v9)(o),e=(0,c.v9)(s),n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,m.jsx)("ul",{className:C.contactList__list,children:null===n||void 0===n?void 0:n.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,m.jsx)(j,{id:e,name:n,number:a},e)}))})}var N,I=n(168),g=n(444).ZP.div(N||(N=(0,I.Z)(["\n    width: 500px;\n    margin-left: auto;\n    margin-right: auto;\n"])));function w(){var t=(0,c.I0)(),e=(0,c.v9)(i),n=(0,c.v9)(_);return(0,a.useEffect)((function(){t((0,r.yF)())}),[t]),(0,m.jsxs)(g,{children:[(0,m.jsx)("h1",{children:"Phonebok"}),(0,m.jsx)(u,{}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(b,{}),e&&!n&&(0,m.jsx)("h3",{children:"Request in progress..."}),(0,m.jsx)(L,{}),n&&(0,m.jsx)("h3",{children:n})]})}}}]);
//# sourceMappingURL=793.6fd1d543.chunk.js.map