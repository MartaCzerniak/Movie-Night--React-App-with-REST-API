"use strict";(self.webpackChunkmovie_night=self.webpackChunkmovie_night||[]).push([[317],{317:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var i=t(885),c=t(871),r=t(501),s=t(791),a=t(160),u=t(88),o=(t(267),t(184));function l(e){var n=(0,c.s0)(),t=(0,c.UO)(),l=(0,r.lr)(),h=(0,i.Z)(l,2),d=h[0],f=h[1],v=(0,s.useState)(null),m=(0,i.Z)(v,2),j=m[0],b=m[1],x=(0,s.useRef)(null);(0,s.useEffect)((function(){var e=new AbortController,n=d.get("query");if(n)return u.Z.fetchMovies("search/movie",e,n).then((function(e){b(e.results)})),function(){return e.abort()}}),[d.get("query")]);return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)("div",{className:" to-left",children:(0,o.jsx)("button",{onClick:function(){n(-1)},className:"back-button",children:"Go back"})}),(0,o.jsxs)("div",{className:"search-section",children:[(0,o.jsx)("h1",{children:"Start searching"}),(0,o.jsxs)("div",{className:"",children:[!t.movieId&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=x.current.value;f(n?{query:n}:{})},value:d.get("query")||"",children:[(0,o.jsx)("input",{type:"text",ref:x,className:"search-input"}),(0,o.jsx)("button",{type:"submit",className:"back-button",children:"Search"})]}),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:"list",children:j&&j.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/movie/"+e.id,children:e.title})},e.id)}))})})]}),t.movieId&&(0,o.jsx)(c.j3,{})]})]})]})}},88:function(e,n){var t="b8d87910aac56b00d09e566d900045a1",i={fetchMovies:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return""===i?fetch("https://api.themoviedb.org/3/".concat(e,"?api_key=").concat(t),{signal:n.signal}).then((function(e){return e.json()})):fetch("https://api.themoviedb.org/3/".concat(e,"?api_key=").concat(t,"&query=").concat(i),{signal:n.signal}).then((function(e){return e.json()}))}};n.Z=i},267:function(){}}]);
//# sourceMappingURL=317.0fadaffe.chunk.js.map