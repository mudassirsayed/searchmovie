(this["webpackJsonpsearch-movie"]=this["webpackJsonpsearch-movie"]||[]).push([[0],{55:function(e,a,t){e.exports=t(84)},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=t(12),o=(t(34),t(25)),m=t.n(o),s=t(47),u=t.n(s),d=t(118),b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navbar fixed-bottom navbar-dark bg-dark justify-content-center"},l.a.createElement("span",{className:"navbar-brand"},"Developed by Mudassir Sayed")))},p=t(119),E=t(120),v=t(121),g=t(116),f=t(114),h=t(115),j=t(113),O=t(117),y=t(122),S=function(e){var a=l.a.useState(!0),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(),s=Object(i.a)(o,2),u=s[0],d=s[1],b=Object(n.useState)(),p=Object(i.a)(b,2),E=p[0],S=p[1],k=Object(n.useState)(),x=Object(i.a)(k,2),w=x[0],C=x[1],N=Object(n.useState)(),P=Object(i.a)(N,2),D=P[0],F=P[1],I=Object(n.useState)(),R=Object(i.a)(I,2),T=R[0],W=R[1],J=Object(n.useState)(),z=Object(i.a)(J,2),B=z[0],G=z[1];m.a.get("https://www.omdbapi.com/?apikey=4eb65943&i=".concat(e.imval)).then((function(e){d(e.data.Poster),S("("+e.data.Year+")"),C(e.data.Genre),F(e.data.Plot),W(e.data.Title),G("Imdb: "+e.data.imdbRating)}));var L=function(){c(!1),e.funsetdetailbool()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{fullWidth:"true",maxWidth:"sm",open:r,onClose:L,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:"moviePosterDialog"},l.a.createElement("img",{src:u,maxWidth:"sm",className:"moviePosterDetail",alt:"Poster"}),l.a.createElement(j.a,{id:"alert-dialog-title"},T),l.a.createElement(f.a,null,l.a.createElement(h.a,{id:"alert-dialog-description"},l.a.createElement("span",{style:{fontSize:"12px"}},w," ",l.a.createElement("b",null,E)),l.a.createElement(y.a,{label:B,color:"primary",style:{float:"right"}}),l.a.createElement("hr",null),l.a.createElement("span",null,D))),l.a.createElement(g.a,null,l.a.createElement(O.a,{onClick:L,color:"primary",autoFocus:!0},"Close"))))},k=function(){var e=Object(n.useState)("batman"),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),s=o[0],v=o[1],g=Object(n.useState)(!1),f=Object(i.a)(g,2),h=f[0],j=f[1],O=Object(n.useState)(),y=Object(i.a)(O,2),k=y[0],x=y[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement("div",{className:" navbar-dark bg-dark"},l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:t,onChange:function(e){r(e.target.value)},placeholder:"Search movies/series",style:{height:"57px",width:"300px",borderRadius:"5px",paddingLeft:"30px",color:"white",background:"#212121",border:"2px"}}),l.a.createElement(d.a,{color:"primary","aria-label":"add",style:{background:"#b71c1c",borderRadius:"7px"}},l.a.createElement(u.a,{onClick:function(){m.a.get("https://www.omdbapi.com/?i=tt3896198&apikey=4eb65943&s=".concat(t)).then((function(e){v(e.data.Search.map((function(e){return e})))}))}})),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("br",null),s.map((function(e){return l.a.createElement("div",{key:e.imdbID,onClick:function(){return a=e.imdbID,j(!0),void x(a);var a}},l.a.createElement(p.a,{className:"movieCard"},l.a.createElement(E.a,null,l.a.createElement("img",{className:"moviePoster",src:e.Poster,alt:"poster"}),l.a.createElement("div",{style:{paddingTop:"5px"}},l.a.createElement("h6",null,e.Title)))))})),h?l.a.createElement(S,{imval:k,funsetdetailbool:function(){j(!1)}}):null),l.a.createElement(b,null))};t(83);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.201c7740.chunk.js.map