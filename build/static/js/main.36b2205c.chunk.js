(this["webpackJsonpreact-burger"]=this["webpackJsonpreact-burger"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return s}));var r="FETCH_ORDERS_START",a="FETCH_ORDERS_SUCCESS",c="FETCH_ORDERS_FAIL",o="PURCHASE_BURGER_START",i="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT"},,,,,,function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return i}));var r="AUTH_START",a="AUTH_SUCCESS",c="AUTH_FAIL",o="AUTH_LOGOUT",i="SET_AUTH_REDIRECT_PATH"},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",c="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED"},,function(e,t,n){"use strict";var r=n(15),a=n.n(r),c=n(24),o=n(18),i=n(23),u=function(e){return{type:o.a,ingredientName:e}},s=function(e){return{type:o.c,ingredientName:e}},l=function(){return function(e){d(e)}},d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("https://react-burger-a6819.firebaseio.com/ingredients.json");case 3:n=e.sent,t((r=n.data,{type:o.d,ingredients:r})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:o.b});case 10:case"end":return e.stop()}var r}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=n(11),f=n(7);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){return{type:f.f,orderId:e,orderData:t}},g=function(e,t){return function(n){n({type:f.e}),O(n,e,t)}},O=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/orders.json?auth="+r,n);case 3:c=e.sent,console.log(c.data.name),console.log(n),t(b(c.data.name,n)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("ddd"),t((a=e.t0,{type:f.d,error:a}));case 13:case"end":return e.stop()}var a}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){return{type:f.g}},y=function(e,t){return function(n,r){n({type:f.b}),E(n,"?auth="+e+'&orderBy="userId"&equalTo="'+t+'"')}},E=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders.json"+n);case 3:for(o in r=e.sent,c=[],r.data)c.push(m({},r.data[o],{id:o}));t((u=c,{type:f.c,orders:u})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t((a=e.t0,{type:f.a,error:a}));case 12:case"end":return e.stop()}var a,u}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),j=n(22);n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return j.a})),n.d(t,"i",(function(){return j.d})),n.d(t,"c",(function(){return j.b}))},,function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(15),a=n.n(r),c=n(24),o=n(13),i=n(32),u=n.n(i),s=function(e,t){return{type:o.d,idToken:e,userId:t}},l=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:o.b}},d=function(e){return function(t){setTimeout((function(){t(l())}),1e3*e)}},p=function(e,t,n){return function(r){r({type:o.c});var a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnhOrxFH3cSTA9wKnyAuf-g6KxLEzR940";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnhOrxFH3cSTA9wKnyAuf-g6KxLEzR940"),f(r,a,{email:e,password:t,returnSecureToken:!0})}},f=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post(n,r);case 3:c=e.sent,i=new Date((new Date).getTime()+1e3*c.data.expiresIn),localStorage.setItem("token",c.data.idToken),localStorage.setItem("expirationDate",i),localStorage.setItem("userId",c.data.localId),t(s(c.data.idToken,c.data.localId)),t(d(c.data.expiresIn)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t((a=e.t0.response.data.error,{type:o.a,error:a}));case 15:case"end":return e.stop()}var a}),e,null,[[0,12]])})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(e){return{type:o.e,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(l());else{var r=localStorage.getItem("userId");e(s(t,r)),e(d((n.getTime()-(new Date).getTime())/1e3))}}else e(l())}}},function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://react-burger-a6819.firebaseio.com/"});t.a=a},,,,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(74);t.a=function(e){return e.show?a.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(2),a=n(3),c=n(5),o=n(4),i=n(6),u=n(0),s=n.n(u),l=(n(79),n(30)),d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{show:this.props.show,clicked:this.props.modalClosed}),s.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=d},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(80);t.a=function(e){return a.a.createElement("button",{className:["Button",e.btnType].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)}},,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(81);t.a=function(){return a.a.createElement("div",{className:"Loader"},"Loading...")}},function(e,t,n){"use strict";var r=n(2),a=n(3),c=n(5),o=n(4),i=n(6),u=n(0),s=n.n(u),l=n(31);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(o.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(i.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(null,(function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),s.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(33),a=n(0),c=n.n(a),o=(n(75),n(2)),i=n(3),u=n(5),s=n(4),l=n(6),d=(n(76),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=c.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=c.a.createElement("div",{className:"BreadTop"});break;case"meat":e=c.a.createElement("div",{className:"Meat"});break;case"cheese":e=c.a.createElement("div",{className:"Cheese"});break;case"bacon":e=c.a.createElement("div",{className:"Bacon"});break;case"salad":e=c.a.createElement("div",{className:"Salad"});break;default:e=null}return e}}]),t}(a.Component));t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return c.a.createElement(d,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("p",null,"Please start adding ingredients!")),c.a.createElement("div",{className:"Burger"},c.a.createElement(d,{type:"bread-top"}),t,c.a.createElement(d,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},,function(e,t,n){e.exports=n(100)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),o=n.n(c),i=n(26),u=n(16),s=n(25),l=n(53),d=(n(65),n(2)),p=n(3),f=n(5),h=n(4),m=n(6),b=n(21),g=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(m.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},O=(n(66),n(67),n(54)),v=n.n(O),y=(n(68),function(e){return a.a.createElement("div",{className:"Logo",style:{height:e.height}},a.a.createElement("img",{src:v.a,alt:"My Burger"}))}),E=(n(69),n(70),function(e){return a.a.createElement("li",{className:"NavigationItem"},a.a.createElement(i.b,{to:e.link,exact:!0,activeClassName:"active"},e.children))}),j=function(e){return a.a.createElement("ul",{className:"NavigationItems"},a.a.createElement(E,{link:"/",active:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(E,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(E,{link:"/logout"},"Log Out"):a.a.createElement(E,{link:"/auth"},"Sign Up"))},w=(n(72),function(e){return a.a.createElement("div",{className:"DrawerToggle",onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}),k=function(e){return a.a.createElement("header",{className:"Toolbar"},a.a.createElement(w,{clicked:e.drawerToggleClicked}),a.a.createElement(y,{height:"80%"}),a.a.createElement("nav",{className:"DesktopOnly"},a.a.createElement(j,{isAuthenticated:e.isAuth})))},S=(n(73),n(30)),P=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),a.a.createElement(a.a.Fragment,null,a.a.createElement(S.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement(y,{height:"11%"}),a.a.createElement("nav",null,a.a.createElement(j,{isAuthenticated:e.isAuth}))))},D=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n.sideDrawerToggleClicked=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(P,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:"content"},this.props.children))}}]),t}(r.Component),C=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(D),I=n(11),A=n(51),T=(n(77),n(78),function(e){return a.a.createElement("div",{className:"BuildControl"},a.a.createElement("div",{className:"Label"},e.label),a.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:"More",onClick:e.added},"Add"))}),N=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],R=function(e){return a.a.createElement("div",{className:"BuildControls"},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),N.map((function(t){return a.a.createElement(T,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},x=n(31),H=n(34),U=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.props.ingredients[t])}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(H.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(H.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),_=n(39),B=n(40),F=n(23),L=n(20);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var G=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngregients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can`t be loaded!"):a.a.createElement(_.a,null);return this.props.ings&&(r=a.a.createElement(a.a.Fragment,null,a.a.createElement(A.a,{ingredients:this.props.ings}),a.a.createElement(R,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price,isAuth:this.props.isAuthenticated})),n=a.a.createElement(U,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),W=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(L.a(t))},onIngredientRemoved:function(t){return e(L.h(t))},onInitIngregients:function(){return e(L.e())},onInitPurchase:function(){return e(L.g())},onSetAuthRedirectPath:function(t){return e(L.i(t))}}}))(Object(B.a)(G,F.a)),q=n(22),z=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(b.a,{to:"/"})}}]),t}(r.Component),K=Object(u.b)(null,(function(e){return{onLogout:function(){return e(q.c())}}}))(z),Y=g((function(){return n.e(3).then(n.bind(null,109))})),J=g((function(){return n.e(4).then(n.bind(null,108))})),V=g((function(){return n.e(5).then(n.bind(null,110))})),$=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=a.a.createElement(b.d,null,a.a.createElement(b.b,{path:"/auth",exact:!0,component:J}),a.a.createElement(b.b,{path:"/",exact:!0,component:W}),a.a.createElement(b.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(b.d,null,a.a.createElement(b.b,{path:"/",exact:!0,component:W}),a.a.createElement(b.b,{path:"/orders",exact:!0,component:V}),a.a.createElement(b.b,{path:"/checkout",component:Y}),a.a.createElement(b.b,{path:"/auth",exact:!0,component:J}),a.a.createElement(b.b,{path:"/logout",component:K}),a.a.createElement(b.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(C,null,e))}}]),t}(r.Component),Q=Object(b.g)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e(L.c())}}}))($));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(18);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te={ingredients:null,totalPrice:4,error:!1,building:!1},ne={salad:.5,cheese:.4,meat:1.3,bacon:.7},re=function(e,t){var n=t.ingredientName;return ee({},e,{ingredients:ee({},e.ingredients,Object(I.a)({},n,e.ingredients[n]+1)),totalPrice:e.totalPrice+ne[n],building:!0})},ae=function(e,t){var n=t.ingredientName;return ee({},e,{ingredients:ee({},e.ingredients,Object(I.a)({},n,e.ingredients[n]-1)),totalPrice:e.totalPrice-ne[n],building:!0})},ce=function(e,t){var n=t.ingredients;return ee({},e,{ingredients:{salad:n.salad,bacon:n.bacon,cheese:n.cheese,meat:n.meat},totalPrice:4,error:!1,building:!1})},oe=function(e,t){return ee({},e,{error:!0})},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.a:return re(e,t);case X.c:return ae(e,t);case X.d:return ce(e,t);case X.b:return oe(e);default:return e}},ue=n(33),se=n(7);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe={orders:[],loading:!1,purchased:!1},fe=function(e,t){return de({},e,{purchased:!1})},he=function(e,t){var n=de({},t.orderData,{id:t.orderId});return de({},e,{loading:!1,purchased:!0,orders:[].concat(Object(ue.a)(e.orders),[n])})},me=function(e,t){return de({},e,{loading:!0})},be=function(e,t){return de({},e,{loading:!1})},ge=function(e,t){return de({},e,{loading:!0})},Oe=function(e,t){return de({},e,{orders:t.orders,loading:!1})},ve=function(e,t){return de({},e,{loading:!1})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.g:return fe(e);case se.e:return me(e);case se.f:return he(e,t);case se.d:return be(e);case se.b:return ge(e);case se.c:return Oe(e,t);case se.a:return ve(e);default:return e}},Ee=n(13);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;arguments.length>1&&arguments[1];return we({},e,{error:null,loading:!0})},Pe=function(e,t){return we({},e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},De=function(e,t){return we({},e,{error:t.error,loading:!1})},Ce=function(e,t){return we({},e,{token:null,userId:null})},Ie=function(e,t){return we({},e,{authRedirectPath:t.path})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee.c:return Se(e,t);case Ee.d:return Pe(e,t);case Ee.a:return De(e,t);case Ee.b:return Ce(e);case Ee.e:return Ie(e,t);default:return e}},Te=s.d,Ne=Object(s.c)({burgerBuilder:ie,order:ye,auth:Ae}),Re=Object(s.e)(Ne,Te(Object(s.a)(l.a))),xe=a.a.createElement(u.a,{store:Re},a.a.createElement(i.a,null,a.a.createElement(Q,null)));o.a.render(xe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[56,1,2]]]);
//# sourceMappingURL=main.36b2205c.chunk.js.map