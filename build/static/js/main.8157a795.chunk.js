(this["webpackJsonplook-around"]=this["webpackJsonplook-around"]||[]).push([[0],{34:function(e,t,n){},38:function(e,t){},39:function(e,t){},47:function(e,t,n){},48:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(36),s=n.n(i),r=n(8),a=(n(47),n(2)),l=(n(48),n(4)),j=n(41),d=n(7),u=n(3),h=n(5),b=n.n(h),p=n(0);function O(e){var t={method:"post",url:"https://test.api.amadeus.com/v1/security/oauth2/token",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:n(31).stringify({grant_type:"client_credentials",client_id:"B8nTnSTHwTubAfV9mUE750yPfenCotFE",client_secret:"FdazkFlCwOj50rrk"})},o=Object(c.useState)({}),i=Object(a.a)(o,2),s=(i[0],i[1],Object(c.useState)([])),r=Object(a.a)(s,2),l=r[0],j=r[1],h=Object(c.useState)({}),O=Object(a.a)(h,2),f=O[0],m=O[1];Object(c.useEffect)((function(){b()(t).then((function(t){m(t.data.access_token),e.setTokenFlight(t.data.access_token)})).catch((function(e){console.log(e)}))}),[]);var x=function(e){var t=e.target.name,n=e.target.value;j(Object(u.a)(Object(u.a)({},l),{},Object(d.a)({},t,"".concat(t,"=").concat(n))))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"FlightForm"}),Object(p.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n="",c=0;for(var o in l)c==Object.keys(l).length-1?n+=l[o]:n=n+l[o]+"&",c++;for(var i=document.querySelectorAll(".input"),s=0;s<i.length;s++)i[s];b.a.get("https://test.api.amadeus.com/v2/shopping/flight-offers?".concat(n,"&currencyCode=").concat(e.currency,"&max=250"),{headers:{Authorization:"Bearer ".concat(f)}}).then((function(t){console.log(),e.setFlights(t)})).catch((function(e){console.log(e)}))}(t)},children:[Object(p.jsx)("input",{name:"originLocationCode",id:"originLocationCode",className:"input",placeholder:"From",required:!0,onChange:function(e){return x(e)}}),Object(p.jsx)("input",{name:"destinationLocationCode",id:"destinationLocationCode",placeholder:"to",className:"input",required:!0,onChange:function(e){return x(e)}}),Object(p.jsx)("input",{name:"departureDate",id:"departureDate",placeholder:"departure date",className:"input",required:!0,onChange:function(e){return x(e)}}),Object(p.jsx)("input",{name:"returnDate",id:"returnDate",placeholder:"return date",className:"input",onChange:function(e){return x(e)}}),Object(p.jsx)("input",{name:"adults",id:"adults",placeholder:"Enter number of adults",className:"input",onChange:function(e){return x(e)},required:!0}),Object(p.jsx)("input",{name:"children",id:"children",placeholder:"Enter number of child",className:"input",onChange:function(e){return x(e)}}),Object(p.jsx)("input",{name:"maxPrice",id:"maxPrice",type:"number",placeholder:"Enter max price",className:"input",onChange:function(e){return x(e)}}),Object(p.jsxs)("select",{name:"travelClass",id:"travelClass",placeholder:"select your travel class",className:"input",onChange:function(e){return x(e)},children:[Object(p.jsx)("option",{value:"",children:"Select your travel class"}),Object(p.jsx)("option",{value:"ECONOMY",children:"ECONOMY"}),Object(p.jsx)("option",{value:"PREMIUM_ECONOMY",children:"PREMIUM ECONOMY"}),Object(p.jsx)("option",{value:"BUSINESS",children:"BUSINESS"}),Object(p.jsx)("option",{value:"FIRET",children:"FIRET"})]}),Object(p.jsxs)("select",{name:"nonStop",id:"nonStop",className:"input",onChange:function(e){return x(e)},children:[Object(p.jsx)("option",{value:"false",children:"false"}),Object(p.jsx)("option",{value:"true",children:"true"})]}),Object(p.jsx)("button",{type:"submit",children:"Search"})]})]})}var f=n(14),m=n.n(f);n(34);function x(e){var t,n,c,o,i,s,r,a,j,d,u,h,b,O,f,x=Object(l.g)(),g="";(null===(t=e.flight)||void 0===t?void 0:t.itineraries[0].segments.length)>1?g=Object(p.jsxs)(p.Fragment,{children:["  ",Object(p.jsxs)("div",{class:"flight-row",children:[Object(p.jsxs)("div",{class:"flight-from",children:[Object(p.jsx)("span",{class:"from-code",children:null===(o=e.flight)||void 0===o?void 0:o.itineraries[0].segments[0].departure.iataCode}),Object(p.jsx)("span",{class:"from-city",children:m()(null===(i=e.flight)||void 0===i?void 0:i.itineraries[0].segments[0].departure.at).format("HH:mm")})]}),Object(p.jsx)("div",{class:"plane",children:Object(p.jsx)("img",{src:"https://cdn.onlinewebfonts.com/svg/img_537856.svg",alt:""})}),Object(p.jsxs)("div",{class:"flight-to",children:[Object(p.jsx)("span",{class:"to-code",children:null===(s=e.flight)||void 0===s?void 0:s.itineraries[0].segments[0].arrival.iataCode}),Object(p.jsx)("span",{class:"to-city",children:m()(null===(r=e.flight)||void 0===r?void 0:r.itineraries[0].segments[0].arrival.at).format("HH:mm")})]})]}),Object(p.jsxs)("div",{class:"flight-row",children:[Object(p.jsxs)("div",{class:"flight-from",children:[Object(p.jsx)("span",{class:"from-code",children:null===(a=e.flight)||void 0===a?void 0:a.itineraries[0].segments[1].departure.iataCode}),Object(p.jsx)("span",{class:"from-city",children:m()(null===(j=e.flight)||void 0===j?void 0:j.itineraries[0].segments[0].departure.at).format("HH:mm")})]}),Object(p.jsx)("div",{class:"plane",children:Object(p.jsx)("img",{src:"https://cdn.onlinewebfonts.com/svg/img_537856.svg",alt:""})}),Object(p.jsxs)("div",{class:"flight-to",children:[Object(p.jsx)("span",{class:"to-code",children:null===(d=e.flight)||void 0===d?void 0:d.itineraries[0].segments[1].arrival.iataCode}),Object(p.jsx)("span",{class:"to-city",children:m()(null===(u=e.flight)||void 0===u?void 0:u.itineraries[0].segments[0].arrival.at).format("HH:mm")})]})]})]}):g=Object(p.jsxs)("div",{class:"flight-row",children:[Object(p.jsxs)("div",{class:"flight-from",children:[Object(p.jsx)("span",{class:"from-code",children:null===(h=e.flight)||void 0===h?void 0:h.itineraries[0].segments[0].departure.iataCode}),Object(p.jsx)("span",{class:"from-city",children:m()(null===(b=e.flight)||void 0===b?void 0:b.itineraries[0].segments[0].departure.at).format("HH:mm")})]}),Object(p.jsx)("div",{class:"plane",children:Object(p.jsx)("img",{src:"https://cdn.onlinewebfonts.com/svg/img_537856.svg",alt:""})}),Object(p.jsxs)("div",{class:"flight-to",children:[Object(p.jsx)("span",{class:"to-code",children:null===(O=e.flight)||void 0===O?void 0:O.itineraries[0].segments[0].arrival.iataCode}),Object(p.jsx)("span",{class:"to-city",children:m()(null===(f=e.flight)||void 0===f?void 0:f.itineraries[0].segments[0].arrival.at).format("HH:mm")})]})]});return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{class:"flight-card",children:[Object(p.jsx)("div",{class:"flight-card-header",children:Object(p.jsx)("div",{class:"flight-logo",children:Object(p.jsx)("img",{src:"https://book.jetblue.com/assets/header/img/jetblue-white-reg.png",alt:""})})}),Object(p.jsxs)("div",{class:"flight-card-content",children:[g,Object(p.jsxs)("div",{class:"flight-details-row",children:[Object(p.jsxs)("div",{class:"flight-operator",children:[Object(p.jsx)("span",{class:"title",children:"OPERATOR"}),Object(p.jsx)("span",{class:"detail"})]}),Object(p.jsxs)("div",{class:"flight-number",children:[Object(p.jsx)("span",{class:"title",children:"PRICE"}),Object(p.jsx)("span",{class:"detail",children:null===(n=e.flight)||void 0===n?void 0:n.price.grandTotal})]}),Object(p.jsxs)("div",{class:"flight-class",children:[Object(p.jsx)("span",{class:"title",children:"CLASS"}),Object(p.jsx)("span",{class:"detail",children:null===(c=e.flight)||void 0===c?void 0:c.travelerPricings[0].fareDetailsBySegment[0].cabin})]}),Object(p.jsx)("button",{onClick:function(){return e.setCheckoutFlight(e.flight),void x.push("/flightcheckout")},children:"Checkout"})]})]})]})})}function g(e){var t,n=Object(c.useState)({}),o=Object(a.a)(n,2),i=o[0],s=o[1],r=Object(c.useState)(""),l=Object(a.a)(r,2),d=(l[0],l[1]),u=Object(c.useState)({}),h=Object(a.a)(u,2),b=h[0];h[1];Object(c.useEffect)((function(){var e;if(null===(e=i.data)||void 0===e?void 0:e.data){var t,n=Object(j.a)(new Set(null===(t=i.data)||void 0===t?void 0:t.data.map((function(e){return e.itineraries[0].segments[0].carrierCode}))));console.log(n),console.log(b)}}),[i]);var f=null===(t=i.data)||void 0===t?void 0:t.data.map((function(t){return Object(p.jsx)(x,{flight:t,setCheckoutFlight:e.setCheckoutFlight})}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{}),Object(p.jsx)(O,{setFlights:s,currency:e.currency,setTokenFlight:d}),f]})}function v(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h1",{children:" main page"})})}function C(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v,{})})}function y(e){var t=Object(l.g)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("nav",{children:[Object(p.jsx)("a",{onClick:function(){return t.push("/")},children:"home"}),Object(p.jsx)("a",{onClick:function(){return t.push("/flight")},children:"flight"}),Object(p.jsx)("a",{onClick:function(){return t.push("/hotel")},children:"hotel"}),e.isLogin?Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{onClick:function(){return localStorage.removeItem("token"),e.loginFunction(),void t.push("/")},children:"Logout"}),Object(p.jsx)("a",{onClick:function(){return t.push("/reservations")},children:"Reservations"}),Object(p.jsx)("a",{onClick:function(){return t.push("/favorites")},children:"Favorites"}),Object(p.jsx)("a",{onClick:function(){return t.push("/changepassword")},children:"Change password"}),Object(p.jsx)("a",{onClick:function(){return t.push("/profile")},children:"Profile"})]}):Object(p.jsx)("a",{onClick:function(){return t.push("/login")},children:"Login"}),Object(p.jsx)("label",{htmlFor:"currency",children:"Currency"}),Object(p.jsxs)("select",{name:"currency",id:"currency",onChange:function(t){return function(t){var n=t.target.value;console.log("name value ".concat(n)),e.setCurrency(n)}(t)},children:[Object(p.jsx)("option",{value:"SAR",children:"SAR"}),Object(p.jsx)("option",{value:"USD",children:"USD"}),Object(p.jsx)("option",{value:"GB",children:"GB"})]})]})})}function k(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:" footer"})})}function w(e){var t=Object(l.g)();console.log(e.room);return Object(p.jsxs)("div",{class:"row search-card-result",children:[Object(p.jsx)("div",{class:"col-md-3"}),Object(p.jsxs)("div",{class:"col-md-5",children:[Object(p.jsx)("h5",{children:"afa   ".concat(e.hotel.hotelId," ").concat(e.hotel.name," ").concat(e.hotel.address.cityName)}),Object(p.jsx)("p",{children:e.room.room.description.text}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{class:"badge badge-primary",children:e.hotel.rating})," rating"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("i",{class:"fa fa-bath"}),Object(p.jsx)("i",{class:"fa fa-phone"}),Object(p.jsx)("i",{class:"fa fa-wifi"}),Object(p.jsx)("i",{class:"fa fa-tv"})]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:Object(p.jsx)("s",{children:"".concat(e.room.price.total," ").concat(e.room.price.currency)})})}),Object(p.jsxs)("div",{class:"col-md-2 border-left text-center more-offers",children:[Object(p.jsx)("h4",{}),Object(p.jsx)("p",{children:e.hotel.contact.phone}),Object(p.jsx)("p",{children:e.hotel.contact.email}),Object(p.jsx)("div",{class:"btn btn-success",children:"View deal "}),Object(p.jsx)("button",{onClick:function(){return e.setCheckoutHotel(e.hotel),e.setCheckoutRoom(e.room),void t.push("/hotelinfo",{state:{room:e.room,hotel:e.hotel}})},children:"more info"})]})]})}function S(e){var t={method:"post",url:"https://test.api.amadeus.com/v1/security/oauth2/token",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:n(31).stringify({grant_type:"client_credentials",client_id:"B8nTnSTHwTubAfV9mUE750yPfenCotFE",client_secret:"FdazkFlCwOj50rrk"})},o=Object(c.useState)([]),i=Object(a.a)(o,2),s=i[0],r=i[1],l=Object(c.useState)({}),j=Object(a.a)(l,2),h=j[0],O=j[1];Object(c.useEffect)((function(){b()(t).then((function(t){O(t.data.access_token),e.setTokenHotel(t.data.access_token)})).catch((function(e){console.log(e)}))}),[]);var f=function(e){var t=e.target.name,n=e.target.value;r(Object(u.a)(Object(u.a)({},s),{},Object(d.a)({},t,"".concat(t,"=").concat(n))))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"HotelForm"}),Object(p.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n="",c=0;for(var o in s)c==Object.keys(s).length-1?n+=s[o]:n=n+s[o]+"&",c++;for(var i=document.querySelectorAll(".input"),r=0;r<i.length;r++)i[r];console.log(n),b.a.get("https://test.api.amadeus.com/v2/shopping/hotel-offers?".concat(n,"&radius=40&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=false&view=FULL&sort=NONE&currency=").concat(e.currency),{headers:{Authorization:"Bearer ".concat(h)}}).then((function(t){e.setHotels(t)})).catch((function(e){console.log(e)}))}(t)},children:[Object(p.jsx)("input",{name:"cityCode",id:"cityCode",className:"input",placeholder:"City",required:!0,onChange:function(e){return f(e)}}),Object(p.jsx)("input",{name:"checkInDate",id:"checkInDate",placeholder:"check In Date",className:"input",onChange:function(e){return f(e)}}),Object(p.jsx)("input",{name:"checkOutDate",id:"checkOutDate",placeholder:"check Out Date",className:"input",onChange:function(e){return f(e)}}),Object(p.jsxs)("select",{name:"roomQuantity",id:"roomQuantity",placeholder:"room Quantity",className:"input",required:!0,onChange:function(e){return f(e)},children:[Object(p.jsx)("option",{value:"",children:"room"}),Object(p.jsx)("option",{value:"1",children:"1"}),Object(p.jsx)("option",{value:"2",children:"2"}),Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"4",children:"4"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:"6",children:"6"}),Object(p.jsx)("option",{value:"7",children:"7"}),Object(p.jsx)("option",{value:"8",children:"8"}),Object(p.jsx)("option",{value:"9",children:"9"})]}),Object(p.jsxs)("select",{name:"adults",id:"adults",placeholder:"adults",className:"input",required:!0,onChange:function(e){return f(e)},children:[Object(p.jsx)("option",{value:"",children:"adults"}),Object(p.jsx)("option",{value:"1",children:"1"}),Object(p.jsx)("option",{value:"2",children:"2"}),Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"4",children:"4"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:"6",children:"6"}),Object(p.jsx)("option",{value:"7",children:"7"}),Object(p.jsx)("option",{value:"8",children:"8"}),Object(p.jsx)("option",{value:"9",children:"9"})]}),Object(p.jsxs)("select",{name:"ratings",id:"ratings",placeholder:"Ratings",className:"input",onChange:function(e){return f(e)},children:[Object(p.jsx)("option",{value:"",children:"ratings"}),Object(p.jsx)("option",{value:"1",children:"1"}),Object(p.jsx)("option",{value:"2",children:"2"}),Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"4",children:"4"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:""})]}),Object(p.jsx)("input",{name:"priceRange",id:"priceRange",placeholder:"price Range (ex:200-300)",className:"input",onChange:function(e){return f(e)}}),Object(p.jsx)("button",{type:"submit",children:"Search"})]})]})}function F(e){var t,n=Object(c.useState)({}),o=Object(a.a)(n,2),i=o[0],s=o[1],r=Object(c.useState)(""),l=Object(a.a)(r,2),j=(l[0],l[1]);Object(c.useEffect)((function(){var e;console.log(null===(e=i.data)||void 0===e?void 0:e.data)}),[i]);var d=[];null===(t=i.data)||void 0===t||t.data.map((function(t){t.offers.map((function(n){console.log(n),d.push(Object(p.jsx)(w,{room:n,hotel:t.hotel,setCheckoutHotel:e.setCheckoutHotel,setCheckoutRoom:e.setCheckoutRoom}))}))}));return Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{setHotels:s,currency:e.currency,setTokenHotel:j}),d]})}function D(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),s=Object(a.a)(i,2),r=(s[0],s[1]),j=Object(c.useState)(!1),h=Object(a.a)(j,2),O=(h[0],h[1]),f=Object(c.useState)(""),m=Object(a.a)(f,2),x=(m[0],m[1]),g=Object(c.useState)({}),v=Object(a.a)(g,2),C=(v[0],v[1],Object(l.g)()),y=function(e){var t=e.target.name,c=e.target.value;console.log(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},t,c))),o(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},t,c)))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Register"}),Object(p.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n.password==n.confirm_password?b.a.post("http://localhost:4000/user/register",{name:n.name,email:n.email,password:n.password,phone:n.phone,birthDate:n.birthDate,nationality:n.nationality,address:n.address}).then((function(e){r(!0),x(e.data.message),O(!0),setTimeout((function(){return C.push("/login")}),2e3),console.log(e)})).catch((function(e){x(e.response.data.message),r(!0),O(!1),console.log(e)})):console.log("Password and confirm password are not equal")}(e)},children:[Object(p.jsx)("input",{name:"name",id:"name",placeholder:"name",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"email",id:"email",placeholder:"email",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"nationality",id:"nationality",placeholder:"nationality",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"address",id:"address",placeholder:"address",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"password",id:"password",placeholder:"password",type:"password",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"confirm_password",id:"confirm_password",placeholder:"confirm password",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"phone",id:"phone",placeholder:"phone",onChange:function(e){return y(e)}}),Object(p.jsx)("input",{name:"birthDate",id:"birthDate",placeholder:"birthDate",onChange:function(e){return y(e)}}),Object(p.jsx)("button",{type:"submit",children:"Sign Up"}),Object(p.jsxs)("p",{children:["Already have an account?",Object(p.jsx)("a",{onClick:function(){return C.push("/login")},children:"Sign in "})]})]})]})}function _(e){var t=Object(l.g)(),n=Object(c.useState)({}),o=Object(a.a)(n,2),i=o[0],s=o[1],r=function(e){var t=e.target,n=t.name,c=t.value;return s(Object(u.a)(Object(u.a)({},i),{},Object(d.a)({},n,c)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Sign in"}),Object(p.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault(),console.log("click"),b.a.post("http://localhost:4000/user/login",{email:i.email,password:i.password}).then((function(n){localStorage.setItem("token",n.data.token),e.loginFunction(),e.location.state?t.push(e.location.state):t.push("/")})).catch((function(e){return console.log(e.response)}))}(n)},children:[Object(p.jsx)("input",{id:"email",onChange:function(e){return r(e)},placeholder:"Email Address",name:"email"}),Object(p.jsx)("input",{onChange:function(e){return r(e)},name:"password",placeholder:"Password",type:"password",id:"password"}),Object(p.jsx)("button",{type:"submit",children:"Sign In"}),Object(p.jsx)("button",{onClick:function(){return t.push("/forgotpassword")},children:"Forgot password?"}),Object(p.jsxs)("p",{children:["Don't have an account? ",Object(p.jsx)("a",{onClick:function(){return t.push("/register")},children:"Sign Up"})]})]})]})}function E(e){var t=Object(c.useState)(e.user),n=Object(a.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)(!0),r=Object(a.a)(s,2),j=r[0],h=r[1],O=Object(l.g)();console.log("user"),console.log(o.name);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Personal info"}),Object(p.jsxs)("div",{style:{borderBottom:"1px solid",marginBottom:"20px"},children:[Object(p.jsx)("p",{style:{fontWeight:"bold"},children:"Name"}),j?Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:e.user.name}),Object(p.jsx)("a",{onClick:function(){return h(!1)},children:"Edit"})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),b.a.put("http://localhost:4000/user/editprofile/".concat(e.user._id),{user:o},{headers:{token:localStorage.getItem("token")}}).then((function(t){e.setUser(t.data.user),console.log(t),h(!0)})).catch((function(e){console.log(e)}))}(t)},children:[Object(p.jsx)("input",{name:"name",id:"name",placeholder:e.user.name,onChange:function(e){return function(e){var t=e.target.name,n=e.target.value;console.log(Object(u.a)(Object(u.a)({},o),{},Object(d.a)({},t,n))),i(Object(u.a)(Object(u.a)({},o),{},Object(d.a)({},t,n)))}(e)}}),Object(p.jsx)("button",{type:"submit",children:"Save"})]}),Object(p.jsx)("a",{onClick:function(){return h(!0)},children:"cancel"})]})]}),Object(p.jsxs)("div",{style:{borderBottom:"1px solid",marginBottom:"20px"},children:[Object(p.jsx)("p",{style:{fontWeight:"bold"},children:"Email"}),Object(p.jsx)("p",{children:e.user.email})]}),Object(p.jsxs)("div",{style:{borderBottom:"1px solid",marginBottom:"20px"},children:[Object(p.jsx)("p",{style:{fontWeight:"bold"},children:"Nationality"}),Object(p.jsx)("p",{children:e.user.nationality})]}),Object(p.jsxs)("div",{style:{borderBottom:"1px solid",marginBottom:"20px"},children:[Object(p.jsx)("p",{style:{fontWeight:"bold"},children:"Address"}),Object(p.jsx)("p",{children:e.user.address})]}),Object(p.jsxs)("div",{style:{borderBottom:"1px solid",marginBottom:"20px"},children:[Object(p.jsx)("p",{style:{fontWeight:"bold"},children:"Phone"}),Object(p.jsx)("p",{children:e.user.phone})]}),Object(p.jsx)("button",{onClick:function(){return O.push("/changepassword")},children:"Update Password"}),Object(p.jsx)("button",{onClick:function(){return O.push("/deleteaccount")},children:"Delete Account"})]})}var N=n(38),P=n.n(N),T=n(39),H=n.n(T);function B(e){var t=Object(c.useState)({}),n=Object(a.a)(t,2),o=n[0],i=n[1],s=Object(l.g)(),r=function(e){var t=e.target.name,n=e.target.value;i(Object(u.a)(Object(u.a)({},o),{},Object(d.a)({},t,n)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Update Password"}),Object(p.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),o.new_password==o.confirm_password?(console.log(localStorage.getItem("token")),b.a.put("http://localhost:4000/user/changepass/".concat(e.user._id),{password_old:o.old_password,password_new:o.confirm_password},{headers:{token:localStorage.getItem("token")}}).then((function(e){console.log(e),setTimeout((function(){return s.push("/profile")}),2e3)})).catch((function(e){console.log(e)}))):console.log("New password and confirm password are not equal ")}(t)},children:[Object(p.jsx)("input",{name:"old_password",id:"old_password",placeholder:"old password",type:"password",onChange:function(e){return r(e)}}),Object(p.jsx)("input",{name:"new_password",id:"new_password",placeholder:"new password",type:"password",onChange:function(e){return r(e)}}),Object(p.jsx)("input",{name:"confirm_password",id:"confirm_password",placeholder:"confirm password",type:"password",onChange:function(e){return r(e)}}),Object(p.jsx)("button",{type:"submit",children:"Update Password"})]})]})}var L=n(40);function I(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Forgot Your Password?"}),Object(p.jsx)("h4",{children:"Please Type Your Email:"}),Object(p.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),b.a.put("http://localhost:4000/user/forgotpassword",{email:n.email}).then((function(e){e.data.message,Object(L.a)("message")})).catch((function(e){return console.log(e.response)}))}(e)},children:[Object(p.jsx)("input",{id:"email",onChange:function(e){return function(e){var t=e.target,c=t.name,i=t.value;return o(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},c,i)))}(e)},placeholder:"Email Address",name:"email"}),Object(p.jsx)("button",{type:"submit",children:"Send Reset Link"})]}),""]})}function R(e){var t,n,c,o,i,s,r,a,l,j,d,u=null===(t=e.checkout)||void 0===t?void 0:t.travelerPricings,h=[];for(var b in u)if(Object.hasOwnProperty.call(u,b))for(var O=u[b],f=0;f<O.fareDetailsBySegment.length;f++)h.push(Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["Traveler ",O.travelerId]}),Object(p.jsxs)("p",{children:["Cabin : ",O.fareDetailsBySegment[f].cabin,", travelerType : ",O.travelerType,", Price : ",O.price.total," ",O.price.currency]})]}));return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["id : ",null===(n=e.checkout)||void 0===n?void 0:n.id]}),Object(p.jsxs)("h1",{children:["type : ",null===(c=e.checkout)||void 0===c?void 0:c.type]}),Object(p.jsxs)("h1",{children:["typeeeeee  : ",null===(o=e.checkout)||void 0===o?void 0:o.travelerPricings[0].fareDetailsBySegment[0].cabin]}),Object(p.jsxs)("h1",{children:["oneWay : ",null===(i=e.checkout)||void 0===i?void 0:i.oneWay]}),Object(p.jsxs)("h1",{children:["departure : ",null===(s=e.checkout)||void 0===s?void 0:s.itineraries[0].segments[0].departure.at]}),Object(p.jsxs)("h1",{children:["iataCode : ",null===(r=e.checkout)||void 0===r?void 0:r.itineraries[0].segments[0].departure.iataCode]}),Object(p.jsxs)("h1",{children:["departure : ",null===(a=e.checkout)||void 0===a?void 0:a.itineraries[0].segments[0].arrival.at]}),Object(p.jsxs)("h1",{children:["iataCode : ",null===(l=e.checkout)||void 0===l?void 0:l.itineraries[0].segments[0].arrival.iataCode]}),Object(p.jsxs)("h1",{children:["price : ",null===(j=e.checkout)||void 0===j?void 0:j.price.total," ",e.checkout.price.currency," "]}),Object(p.jsxs)("h1",{children:["price : ",null===(d=e.checkout)||void 0===d?void 0:d.lastTicketingDate," "]}),h,Object(p.jsx)("form",{onSubmit:function(e){},children:Object(p.jsx)("button",{type:"submit",children:"Search"})})]})}function A(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"HotelCheckOut"})})}function U(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"HotelInfo"})})}var q=n(42),M=["component","isLogin","location","path"];function Y(e){var t=e.component,n=e.isLogin,c=e.location,o=e.path,i=Object(q.a)(e,M);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.b,{exact:!0,path:o,render:function(){return n?Object(p.jsx)(t,Object(u.a)({},i)):Object(p.jsx)(l.a,{to:{pathname:"/login",state:c.pathname}})}})})}var W=n(22);function z(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Are You Sure You Want To Delete Your Account?"})})}function Q(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),s=Object(a.a)(i,2),r=s[0],j=s[1],d=Object(c.useState)("SAR"),u=Object(a.a)(d,2),h=u[0],b=u[1],O=Object(c.useState)({}),f=Object(a.a)(O,2),m=f[0],x=f[1],v=Object(c.useState)({}),w=Object(a.a)(v,2),S=w[0],N=w[1],T=Object(c.useState)({}),L=Object(a.a)(T,2),q=L[0],M=L[1],Q=Object(l.h)();Object(c.useEffect)((function(){V()}),[]);var V=function(){var e=localStorage.getItem("token"),t=Object(W.a)(e);(null===t||void 0===t?void 0:t.user)&&!Object(W.b)(e)?(o(t.user),j(!0)):(o({}),j(!1))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{isLogin:r,loginFunction:V,setCurrency:b}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(C,{isLogin:r,loginFunction:V})}}),Object(p.jsx)(l.b,{exact:!0,path:"/flight",render:function(){return Object(p.jsx)(g,{currency:h,setCheckoutFlight:x})}}),Object(p.jsx)(l.b,{exact:!0,path:"/hotel",render:function(){return Object(p.jsx)(F,{currency:h,setCheckoutHotel:N,setCheckoutRoom:M})}}),Object(p.jsx)(l.b,{exact:!0,path:"/login",render:function(){return Object(p.jsx)(_,{loginFunction:V,location:Q})}}),Object(p.jsx)(l.b,{exact:!0,path:"/register",component:D}),Object(p.jsx)(l.b,{exact:!0,path:"/forgotpassword",component:I}),Object(p.jsx)(l.b,{exact:!0,path:"/deleteaccount",component:z}),Object(p.jsx)(l.b,{exact:!0,path:"/hotelinfo",component:U}),Object(p.jsx)(Y,{component:E,path:"/profile",isLogin:r,user:n,loginFunction:V,setUser:o,location:Q}),Object(p.jsx)(Y,{component:P.a,path:"/favorites",isLogin:r,location:Q}),Object(p.jsx)(Y,{component:H.a,path:"/reservations",isLogin:r,location:Q}),Object(p.jsx)(Y,{component:B,path:"/changepassword",isLogin:r,user:n,location:Q}),Object(p.jsx)(Y,{component:R,path:"/flightcheckout",isLogin:r,user:n,location:Q,checkoutflight:m}),Object(p.jsx)(Y,{component:A,path:"/hotelcheckout",isLogin:r,user:n,location:Q,checkouthotel:S,checkoutroom:q})]}),Object(p.jsx)(k,{})]})}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(r.a,{children:Object(p.jsx)(Q,{})})}),document.getElementById("root")),V()}},[[76,1,2]]]);
//# sourceMappingURL=main.8157a795.chunk.js.map