(this["webpackJsonpreact-burger"]=this["webpackJsonpreact-burger"]||[]).push([[3],{101:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(102);t.a=function(e){var t=null,a=["InputElement"];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push("Invalid"),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"Label"},e.label),t)}},102:function(e,t,a){},103:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),i=a(5),l=a(4),o=a(6),c=a(0),u=a.n(c),s=a(21),d=a(16),p=a(51),m=a(34),h=(a(104),function(e){return u.a.createElement("div",{className:"CheckoutSummary"},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(p.a,{ingredients:e.ingredients})),u.a.createElement(m.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(m.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))}),v=a(11),f=a(39),g=(a(105),a(23)),b=a(101),y=a(40),C=a(20),O=a(103);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=j({},a.state.orderForm),r=j({},n[t]);r.value=e.target.value,r.valid=Object(O.a)(r.value,r.validation),r.touched=!0,n[t]=r;var i=!0;for(var l in n)i=n[l].valid&&i;a.setState({orderForm:n,formIsValid:i})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return u.a.createElement(b.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),u.a.createElement(m.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=u.a.createElement(f.a,null)),u.a.createElement("div",{className:"ContactData"},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),N=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(C.f(t,a))}}}))(Object(y.a)(k,g.a)),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(s.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(s.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(h,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(s.b,{path:this.props.match.path+"/contact-data",component:N}))}return e}}]),t}(c.Component);t.default=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(w)}}]);
//# sourceMappingURL=3.125a66cb.chunk.js.map