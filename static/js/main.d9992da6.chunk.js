(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{23:function(e,t,a){e.exports=a(65)},28:function(e,t,a){},29:function(e,t,a){},47:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),i=(a(28),a(29),a(4)),l=a.n(i),s=a(5),m=a(3),u=a(17),v=a.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(a(47),a(18)),d=a(19),h=a(22),p=a.n(h);var g=function(e){var t=e.title,a=e.fetchUrl,o=e.isLargeRow,r=Object(n.useState)([]),i=Object(m.a)(r,2),u=i[0],h=i[1],g=Object(n.useState)(""),_=Object(m.a)(g,2),b=_[0],w=_[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(a);case 2:t=e.sent,h(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement(f.a,{className:"row__posters"},u.map((function(e){return c.a.createElement("img",{onClick:function(){return t=e.name||e.title||e.orginal_name,console.log(t),void(""!==b?w(""):p()(t).then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)})));var t},key:e.id,className:"row__poster ".concat(o&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name})}))),""!==b&&c.a.createElement(d.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},_="04ae7689fc21853d7db93ebc5e887fa0",b={fetchTrending:"trending/all/day?api_key=".concat(_,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(_,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(_,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(_,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(_,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(_,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(_,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(_,"&with_genres=99")};a(63);var w=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(b.fetchNetflixOriginals);case 2:t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url('".concat("https://image.tmdb.org/t/p/original/").concat(null===a||void 0===a?void 0:a.backdrop_path,"')"),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.orginal_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"More Info")),c.a.createElement("p",{className:"banner__description"},null===a||void 0===a?void 0:a.overview)),c.a.createElement("div",{className:"banner--fadeBottom"}))};a(64);var E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){o(!0)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("nav",{className:"".concat(a&&"nav__black")},c.a.createElement("div",{className:"nav__contents"},c.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),c.a.createElement("img",{className:"nav__avatar",src:"https://avatars.githubusercontent.com/u/65026164?s=60&v=4",alt:"Avatar"})))};var k=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(E,null),c.a.createElement(w,null),c.a.createElement(g,{isLargeRow:!0,title:"Netflix Originals",fetchUrl:b.fetchNetflixOriginals}),c.a.createElement(g,{title:"Trending now",fetchUrl:b.fetchTrending}),c.a.createElement(g,{title:"Top Rated",fetchUrl:b.fetchTrending}),c.a.createElement(g,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),c.a.createElement(g,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),c.a.createElement(g,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),c.a.createElement(g,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),c.a.createElement(g,{title:"Documentaries",fetchUrl:b.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d9992da6.chunk.js.map