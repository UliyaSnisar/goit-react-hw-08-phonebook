(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{131:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(39),s=a(40),l=a(42),o=a(41),c=a(0),r=a(10),h=a(16),b=(a(131),a(130)),u=a(2),p={form:{width:320},label:{display:"Flex",flexDirection:"column",marginBottom:15}},d=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,i=a.name,s=a.value;e.setState(Object(n.a)({},i,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(u.jsx)("div",{className:"LoginContainer",children:Object(u.jsxs)("div",{className:"LoginSection",children:[Object(u.jsx)("h1",{className:"LoginTitle",children:"Login"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,style:p.form,autoComplete:"off",children:[Object(u.jsxs)("label",{style:p.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(u.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(u.jsxs)("label",{style:p.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(u.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(u.jsx)(b.a,{type:"submit",variant:"contained",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}}]),a}(c.Component),j={onLogin:h.a.logIn};t.default=Object(r.b)(null,j)(d)}}]);
//# sourceMappingURL=login-view.c0360a34.chunk.js.map