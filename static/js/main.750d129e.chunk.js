(this.webpackJsonpportfolio_frontend=this.webpackJsonpportfolio_frontend||[]).push([[0],{102:function(n,e,t){n.exports=t(453)},453:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(37),i=t.n(o),c=t(1),l=t(2);function u(){var n=Object(c.a)(['\n  *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body{\n    background-color: rgb(72, 172, 194);\n    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  a {\n    color: whitesmoke;\n  }\n\n  #root{\n    // max-width: 1060px;\n    margin: 0 auto;\n    // padding: 40px 20px;\n  }\n\n  #root.open-modal{\n    position: fixed;\n    height: 100vh;\n    overflow-y: overlay;\n  }\n\n  button{\n    cursor: pointer;\n  }\n\n  a{\n    text-decoration: none;\n  }\n\n  a.active{\n    color: white;\n  }\n']);return u=function(){return n},n}var s=Object(l.a)(u()),p=t(8),m=t(3);function f(){var n=Object(c.a)(["\n  background-color: transparent;\n\n  margin: 0px 100px;\n"]);return f=function(){return n},n}function d(){var n=Object(c.a)([""]);return d=function(){return n},n}var b=l.b.div(d()),h=l.b.div(f()),g=t(6);function x(){var n=Object(c.a)(["\n  min-height: 60px;\n  background-color: whitesmoke;\n  padding: 0px 30px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n\n  width: 100%;\n\n  a,\n  a.active {\n    color: black;\n  }\n\n  @media screen and (max-width: 600px) {\n    justify-content: space-evenly;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: stretch;\n  width: 100%;\n"]);return v=function(){return n},n}var j=l.b.div(v()),w=l.b.nav(x()),y=function(n){var e=n.children,t=Object(r.useState)("/hugo-hernani-resume.pdf"),o=Object(g.a)(t,1)[0];return Object(r.useMemo)((function(){return a.a.createElement(j,null,a.a.createElement(w,null,a.a.createElement(p.c,{to:"/"},"Hugo Hernani"),e,a.a.createElement(p.b,{to:o,download:!0,target:"_blank"},"My Resume")))}),[e,o])};function O(){var n=Object(c.a)([""]);return O=function(){return n},n}function k(){var n=Object(c.a)(["\n  min-height: 50px;\n  background-color: whitesmoke;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  width: 100vw;\n\n  a,\n  a.active {\n    color: black;\n  }\n"]);return k=function(){return n},n}function E(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: stretch;\n  width: 100%;\n"]);return E=function(){return n},n}var M=l.b.div(E()),_=l.b.nav(k()),S=l.b.div(O()),T=function(){return Object(r.useMemo)((function(){return a.a.createElement(M,null,a.a.createElement(_,null,a.a.createElement(S,null,"2020 - Hugo Hernani")))}),[])};function C(){var n=Object(c.a)(["\n  display: inline-block;\n\n  margin: 10px 0px;\n  background: #48acc2;\n"]);return C=function(){return n},n}function R(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n\n  margin: 25px 0px;\n\n  @media (min-width: 900px) {\n    display: flex;\n    align-items: stretch;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n\n    min-height: 100vh;\n  }\n"]);return R=function(){return n},n}var z=l.b.ul(R()),D=l.b.li(C()),I=a.a.createContext(void 0);function U(){var n=Object(c.a)(["\n  background-color: black;\n  opacity: 0.5;\n\n  z-index: 1000;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  overflow-y: auto;\n"]);return U=function(){return n},n}function H(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  /* spacing as needed */\n  padding: 20px 50px 20px 20px;\n\n  /* let it scroll */\n  overflow: scroll;\n"]);return H=function(){return n},n}function P(){var n=Object(c.a)(["\n  background-color: whitesmoke;\n\n  height: 80vh;\n  width: 80vw;\n  max-height: 100%;\n  max-width: 100%;\n\n  position: fixed;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  z-index: 1010;\n"]);return P=function(){return n},n}var L=l.b.div(P()),q=l.b.div(H()),B=l.b.div(U()),F=t(57),A=function(n){var e=n.modal,t=n.unSetModal;return Object(r.useEffect)((function(){var n=function(n){if([F.b,F.a].includes(n.key)){var e=document.activeElement;if(!e||!["INPUT","SELECT"].includes(e.tagName)){t();var r=document.getElementById("root");null===r||void 0===r||r.classList.remove("open-modal")}}};return document.addEventListener("keyup",n),function(){return document.removeEventListener("keyup",n)}}),[t]),Object(r.useEffect)((function(){var n=document.getElementById("root");null===n||void 0===n||n.classList.add("open-modal")})),Object(r.useMemo)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,null,a.a.createElement(q,null,e)),a.a.createElement(B,{onClick:t}))}),[e,t])},N=function(n){var e=Object(r.useState)(null),t=Object(g.a)(e,2),o=t[0],c=t[1],l=Object(r.useState)((function(){})),u=Object(g.a)(l,2),s=u[0],p=u[1],m=Object(r.useCallback)((function(){c(null),s()}),[s]);return Object(r.useMemo)((function(){return a.a.createElement(I.Provider,Object.assign({value:{unSetModal:m,setModal:c,onModalCloseCallback:p}},n),n.children,o&&i.a.createPortal(a.a.createElement(A,{modal:o,unSetModal:m}),document.getElementById("root")))}),[o,n,m])},V=t(101),W=t(58);function Y(){var n=Object(c.a)(["\n  text-align: center;\n"]);return Y=function(){return n},n}function J(){var n=Object(c.a)([""]);return J=function(){return n},n}var G=l.b.article(J()),K=l.b.h2(Y());function Q(){var n=Object(c.a)(["\n  a {\n    color: rgb(72, 172, 194);\n  }\n"]);return Q=function(){return n},n}var X=l.b.div(Q()),Z=t(95),$=t.n(Z);function nn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n\n  width: 99.5vw;\n  position: relative;\n  left: 50%;\n  right: 50%;\n  margin: 20px -50vw;\n  max-height: 550px;\n  background: whitesmoke;\n  box-shadow: 0px 0px 30px 2px rgb(0 0 0 / 0.2);\n\n  img {\n    max-width: 100%;\n  }\n\n  @media screen and (max-width: 840px) {\n    width: 99.4vw;\n  }\n"]);return nn=function(){return n},n}var en=l.b.div(nn()),tn=function(n){var e=n.src,t=n.alt;return Object(r.useMemo)((function(){return a.a.createElement(en,null,a.a.createElement("img",{src:e,alt:t}))}),[t,e])};function rn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n"]);return rn=function(){return n},n}var an=l.b.div(rn()),on=function(n){var e=n.src,t=n.alt;return Object(r.useMemo)((function(){return a.a.createElement(an,null,a.a.createElement("img",{src:e,alt:t}))}),[t,e])};function cn(){var n=Object(c.a)(["\n  display: inline-block;\n\n  background-color: black;\n  color: white;\n\n  padding: 3px;\n"]);return cn=function(){return n},n}var ln=l.b.code(cn()),un=function(n){var e=n.value;return Object(r.useMemo)((function(){return a.a.createElement(ln,null,e)}),[e])};function sn(){var n=Object(c.a)([""]);return sn=function(){return n},n}var pn=l.b.div(sn()),mn=t(457),fn=t(456),dn=function(n){var e=n.language,t=n.value;return Object(r.useMemo)((function(){return a.a.createElement(pn,null,a.a.createElement(mn.a,{style:fn.a,language:e},t))}),[e,t])};function bn(){var n=Object(c.a)([void 0],["\n  background: #f9f9f9;\n  border-left: 10px solid #ccc;\n  margin: 1.5em 10px;\n  padding: 0.5em 10px;\n  quotes: '\\201C''\\201D''\\2018''\\2019';\n\n  &:before {\n    color: #ccc;\n    content: open-quote;\n    font-size: 4em;\n    line-height: 0.1em;\n    margin-right: 0.25em;\n    vertical-align: -0.4em;\n  }\n\n  p {\n    display: inline;\n  }\n"]);return bn=function(){return n},n}function hn(){var n=Object(c.a)([""]);return hn=function(){return n},n}var gn=l.b.div(hn()),xn=l.b.blockquote(bn()),vn=function(n){var e=n.children;return Object(r.useMemo)((function(){return a.a.createElement(gn,null,a.a.createElement(xn,null,e))}),[e])},jn=t(100),wn=t.n(jn);function yn(){var n=Object(c.a)(["\n  &::before {\n    content: '\u2022';\n    font-size: 130%;\n    line-height: 0;\n    margin: 0 0.3rem 0 -0.25rem;\n    position: relative;\n    top: 0.08rem;\n    color: black;\n  }\n"]);return yn=function(){return n},n}var On=l.b.li(yn()),kn=function(n){var e=n.children;return Object(r.useMemo)((function(){return a.a.createElement(On,null,e)}),[e])};function En(){var n=Object(c.a)(["\n  list-style: none;\n  list-style-position: inside;\n"]);return En=function(){return n},n}var Mn=l.b.ul(En()),_n=function(n){var e=n.children;return Object(r.useMemo)((function(){return a.a.createElement(Mn,null,e)}),[e])};function Sn(){var n=Object(c.a)([""]);return Sn=function(){return n},n}var Tn=l.b.p(Sn()),Cn=function(n){var e=n.children,t=Object(r.useCallback)((function(){var n=e[0].type.name;return"MarkdownImage"===n||"MarkdownImageReference"===n}),[e]);return Object(r.useMemo)((function(){return t()?a.a.createElement(a.a.Fragment,null,e):a.a.createElement(Tn,null,e)}),[e,t])},Rn=function(n){var e=n.body,t=Object(r.useMemo)((function(){return{list:_n,listItem:kn,image:tn,imageReference:on,inlineCode:un,code:dn,blockquote:vn,paragraph:Cn}}),[]),o=Object(r.useMemo)((function(){return[wn.a]}),[]);return Object(r.useMemo)((function(){return a.a.createElement(X,null,a.a.createElement($.a,{renderers:t,plugins:o,source:e}))}),[e,o,t])},zn=function(n){var e=n.title,t=n.body;return Object(r.useMemo)((function(){return a.a.createElement(G,null,a.a.createElement(K,null,e),a.a.createElement(Rn,{body:t}))}),[t,e])};function Dn(){var n=Object(c.a)([""]);return Dn=function(){return n},n}var In=l.b.div(Dn()),Un=function(n){var e=n.children,t=Object(V.a)(n,["children"]),o=function(){var n=a.a.useContext(I);if(void 0===n)throw new Error("useModal must be used within a ModelProvider");return n}(),i=o.setModal,c=o.onModalCloseCallback,l=Object(r.useState)({id:"whatever-id",title:"whatever",body:"Lorem Ipsum",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",imageUrl:"https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg",shortDescription:"Portfolio"}),u=Object(g.a)(l,2),s=u[0],m=(u[1],Object(r.useCallback)((function(){i(a.a.createElement(zn,s)),c((function(){return function(){return{}}}))}),[c,s,i]));return Object(r.useMemo)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(W.BrowserView,null,a.a.createElement(In,{onClick:m},e)),a.a.createElement(W.MobileView,null,a.a.createElement(p.b,{to:t.projectUrl},e)))}),[e,m,t.projectUrl])};function Hn(){var n=Object(c.a)(["\n  font-family: monospace;\n\n  margin: 10px 0px 0px 0px;\n"]);return Hn=function(){return n},n}function Pn(){var n=Object(c.a)(["\n  color: black;\n  transition: all 0.2s linear;\n"]);return Pn=function(){return n},n}function Ln(){var n=Object(c.a)(["\n  font-size: 14px;\n  font-style: oblique;\n"]);return Ln=function(){return n},n}function qn(){var n=Object(c.a)(["\n  background-color: black;\n  color: white;\n  padding: 5px 10px;\n\n  text-transform: uppercase;\n  font-size: 1.5vh;\n"]);return qn=function(){return n},n}function Bn(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n\n  align-items: center;\n  justify-content: space-between;\n\n  margin: 0px 0px 15px 0px;\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(c.a)(["\n  padding: 15px;\n\n  position: absolute;\n  width: ",";\n  bottom: 0px; // TODO\n  min-height: 130px;\n  background: whitesmoke;\n  z-index: 1;\n\n  transition: background 0.4s ease-in-out;\n"]);return Fn=function(){return n},n}function An(){var n=Object(c.a)(["\n  overflow: hidden;\n\n  img {\n    transform: scale(1);\n    transition: transform 0.3s ease-in-out;\n  }\n"]);return An=function(){return n},n}function Nn(){var n=Object(c.a)(["\n  cursor: pointer;\n  position: relative;\n\n  background: transparent;\n\n  &:hover {\n    article {\n      background: transparent;\n    }\n\n    article *:not(h3) {\n      transform: scale(0);\n    }\n\n    h3 {\n      color: whitesmoke;\n      font-weight: bold;\n      transform: translateY(40px);\n\n      text-shadow: 0 3px 0 #000, 0 2px 0 #656060;\n    }\n\n    > div:first-of-type img {\n      transform: scale(1.5);\n    }\n  }\n"]);return Nn=function(){return n},n}var Vn=l.b.div(Nn()),Wn=l.b.div(An()),Yn=l.b.article(Fn(),(function(n){return n.theme.imageSize})),Jn=l.b.div(Bn()),Gn=l.b.span(qn()),Kn=l.b.span(Ln()),Qn=l.b.h3(Pn()),Xn=l.b.p(Hn()),Zn=function(n){var e=n.imageUrl,t=n.shortDescription,o=n.dateRange,i=n.projectTitle,c=n.technology,l=n.imageSize;return Object(r.useMemo)((function(){return a.a.createElement(Vn,null,a.a.createElement(Wn,null,a.a.createElement("img",{src:e,alt:t,width:l,height:l})),a.a.createElement(Yn,{theme:{imageSize:l}},a.a.createElement(Jn,null,a.a.createElement(Gn,null,c),a.a.createElement(Kn,null,o)),a.a.createElement(Qn,null,i),a.a.createElement(Xn,null,t)))}),[e,t,l,c,o,i])},$n=function(){var n=Object(r.useState)([{projectUrl:"/portfolio/project-url",imageUrl:"https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg",shortDescription:"Portfolio",imageSize:"350px",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",projectTitle:"Project Title"},{projectUrl:"/portfolio/project-url",imageUrl:"https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg",shortDescription:"Portfolio",imageSize:"350px",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",projectTitle:"Project Title"},{projectUrl:"/portfolio/project-url",imageUrl:"https://cdn.pixabay.com/photo/2018/05/17/04/10/animal-3407787_960_720.png",shortDescription:"Portfolio",imageSize:"350px",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",projectTitle:"Project Title"},{projectUrl:"/portfolio/project-url",imageUrl:"https://cdn.pixabay.com/photo/2017/07/22/17/16/cat-2529377_960_720.jpg",shortDescription:"Portfolio",imageSize:"350px",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",projectTitle:"Project Title"},{projectUrl:"/portfolio/project-url",imageUrl:"https://cdn.pixabay.com/photo/2015/07/24/22/37/cat-859017_960_720.jpg",shortDescription:"Portfolio",imageSize:"350px",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",projectTitle:"Project Title"},{projectUrl:"/portfolio/project-url",imageUrl:"https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg",shortDescription:"Portfolio",imageSize:"350px",dateRange:"12/01/2020 -- 12/13/2020",technology:"Ruby On Rails",projectTitle:"Project Title"}]),e=Object(g.a)(n,1)[0];return Object(r.useMemo)((function(){return a.a.createElement(N,null,a.a.createElement(z,null,e.map((function(n,e){return a.a.createElement(D,{key:e},a.a.createElement(Un,n,a.a.createElement(Zn,n)))}))))}),[e])};function ne(){var n=Object(c.a)(["\n  cursor: grab;\n  font-family: 'cursive';\n  font-size: 8vw;\n  color: white;\n  margin-bottom: 20px;\n\n  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),\n    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),\n    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);\n\n  transition: transform 0.4s, color 0.4s linear;\n\n  &:hover {\n    color: #efefef;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);return ee=function(){return n},n}var te=l.b.div(ee()),re=l.b.h1(ne()),ae=function(){return Object(r.useMemo)((function(){return a.a.createElement(te,null,a.a.createElement(re,null,"Work In Progress"))}),[])},oe=function(){return a.a.createElement(b,null,a.a.createElement(y,null),a.a.createElement(h,null,a.a.createElement(ae,null),a.a.createElement($n,null)),a.a.createElement(T,null))};function ie(){var n=Object(c.a)(["\n  background-color: white;\n  margin: 0px 100px 10px;\n  padding: 50px 80px;\n  border-radius: 15px;\n  min-height: 500px;\n  box-shadow: 1px 10px 101px -10px rgba(0, 0, 0, 0.75);\n\n  text-align: justify;\n\n  @media screen and (max-width: 840px) {\n    margin: 0px 20px 10px;\n    padding: 50px 20px;\n  }\n"]);return ie=function(){return n},n}function ce(){var n=Object(c.a)([""]);return ce=function(){return n},n}function le(){var n=Object(c.a)(["\n  margin: 0px 0px 25px 0px;\n\n  @media screen and (max-width: 840px) {\n    text-align: center;\n  }\n"]);return le=function(){return n},n}function ue(){var n=Object(c.a)(["\n  font-size: 10px;\n  font-style: oblique;\n  color: darkgray;\n  font-weight: bold;\n"]);return ue=function(){return n},n}function se(){var n=Object(c.a)(["\n  text-transform: uppercase;\n\n  background-color: black;\n  color: white;\n  font-size: 1.5vh;\n\n  padding: 3px 5px;\n  margin-right: 10px;\n"]);return se=function(){return n},n}function pe(){var n=Object(c.a)(["\n  margin-bottom: 15px;\n\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: flex-start;\n"]);return pe=function(){return n},n}function me(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n\n  background-color: white;\n\n  width: 400px;\n  padding: 20px 35px 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n\n  @media screen and (max-width: 840px) {\n    width: inherit;\n  }\n"]);return me=function(){return n},n}function fe(){var n=Object(c.a)(["\n  position: absolute;\n  min-height: 150px;\n  margin: 0px 200px;\n  bottom: -90px;\n\n  display: flex;\n  flex-flow: column;\n\n  @media screen and (max-width: 840px) {\n    position: relative;\n    bottom: -15px;\n    min-height: inherit;\n    margin: 0px 20px;\n\n    justify-content: center;\n    align-items: stretch;\n  }\n"]);return fe=function(){return n},n}function de(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: column;\n  align-content: center;\n\n  height: 100vh;\n  position: sticky;\n  top: 0px;\n  z-index: -1;\n\n  background: url('https://cdn.pixabay.com/photo/2020/03/24/11/21/winter-4963715_960_720.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return de=function(){return n},n}function be(){var n=Object(c.a)(["\n  background: transparent;\n\n  @media screen and (max-width: 840px) {\n    position: relative;\n    bottom: 150px;\n  }\n"]);return be=function(){return n},n}function he(){var n=Object(c.a)([""]);return he=function(){return n},n}var ge=l.b.div(he()),xe=l.b.div(be()),ve=l.b.div(de()),je=l.b.div(fe()),we=l.b.aside(me()),ye=l.b.div(pe()),Oe=l.b.span(se()),ke=l.b.span(ue()),Ee=l.b.h1(le()),Me=l.b.div(ce()),_e=l.b.div(ie()),Se=function(){var n=Object(r.useState)({id:"ehv",imageUrl:"https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg",title:"Employee HomeView",shortDescription:"Portfolio",body:'\n---\n\n__Advertisement :)__\n\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n  resize in browser.\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n  i18n with plurals support and easy syntax.\n\nYou will like those projects!\n\n---\n\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n"Smartypants, double quotes" and \'single quotes\'\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n\n\n## Plugins\n\nThe killer feature of `markdown-it` is very effective support of\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n\n\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n>\n> Shortcuts (emoticons): :-) :-( 8-) ;)\n\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n\n\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n\n- 19^th^\n- H~2~O\n\n\n### [<ins>](https://github.com/markdown-it/markdown-it-ins)\n\n++Inserted text++\n\n\n### [<mark>](https://github.com/markdown-it/markdown-it-mark)\n\n==Marked text==\n\n\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n\nThis is HTML abbreviation example.\n\nIt converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.\n\n*[HTML]: Hyper Text Markup Language\n\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n\n::: warning\n*here be dragons*\n:::\n\n    ',technology:"Ruby On Rails",dateRange:"12/01/2020 -- 12/13/2020"}),e=Object(g.a)(n,1)[0];return Object(r.useMemo)((function(){return a.a.createElement(ge,null,a.a.createElement(y,null,a.a.createElement(p.b,{to:"/portfolio"},"Portfolio List")),a.a.createElement(ve,null),a.a.createElement(xe,null,a.a.createElement(je,null,a.a.createElement(we,null,a.a.createElement(Ee,null,e.title),a.a.createElement(ye,null,a.a.createElement(Oe,null,e.technology),a.a.createElement(ke,null,e.dateRange)),a.a.createElement(Me,null,e.shortDescription))),a.a.createElement(_e,null,a.a.createElement(Rn,{body:e.body}))),a.a.createElement(T,null))}),[e.body,e.dateRange,e.shortDescription,e.technology,e.title])};function Te(){var n=Object(c.a)(["\n  cursor: pointer;\n  display: flex;\n\n  justify-content: center;\n\n  img {\n    @media (min-width: 900px) {\n      width: ",";\n      height: ",";\n    }\n  }\n"]);return Te=function(){return n},n}function Ce(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n"]);return Ce=function(){return n},n}function Re(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n\n  margin: 10px 0px 0px 0px;\n"]);return Re=function(){return n},n}function ze(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 600px) {\n    flex-direction: column-reverse;\n  }\n"]);return ze=function(){return n},n}function De(){var n=Object(c.a)(["\n  align-self: flex-start;\n  margin-top: 0px;\n  padding: 0px;\n\n  transition: margin-top 0.4s, padding 0.4s, background-color 0.2s linear;\n\n  &:hover {\n    background-color: white;\n    padding: 10px;\n\n    @media (min-width: 900px) {\n      margin-top: -18px;\n    }\n\n    a {\n      color: black;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    align-self: center;\n  }\n"]);return De=function(){return n},n}function Ie(){var n=Object(c.a)(["\n  background-color: transparent;\n\n  @media (min-width: 900px) {\n    display: flex;\n    align-items: stretch;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n\n    margin: -10px 100px 10px 100px;\n    min-height: 100vh;\n\n    section {\n      flex-basis: 46%;\n    }\n  }\n"]);return Ie=function(){return n},n}function Ue(){var n=Object(c.a)([""]);return Ue=function(){return n},n}var He=l.b.div(Ue()),Pe=l.b.div(Ie()),Le=l.b.div(De()),qe=l.b.div(ze()),Be=l.b.section(Re()),Fe=l.b.section(Ce()),Ae=l.b.section(Te(),(function(n){return n.theme.imageSize.width}),(function(n){return n.theme.imageSize.height}));function Ne(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: start;\n  align-items: center;\n\n  @media screen and (max-width: 600px) {\n    justify-content: center;\n  }\n\n  a {\n    color: ",";\n    display: flex;\n    align-items: center;\n\n    transition: color 0.4s linear;\n\n    & ~ a {\n      margin-left: 30px;\n\n      @media screen and (max-width: 600px) {\n        margin-left: 5px;\n      }\n    }\n\n    span {\n      padding-left: 5px;\n    }\n  }\n"]);return Ne=function(){return n},n}var Ve=l.b.nav(Ne(),(function(n){return n.theme.textColor||"black"})),We=t(38),Ye=function(n){var e=n.iconColor,t=n.textColor,o=void 0===t?{iconColor:"black",textColor:"white"}:t,i=Object(r.useState)({textColor:o}),c=Object(g.a)(i,1)[0];return Object(r.useMemo)((function(){return a.a.createElement(Ve,{theme:c},a.a.createElement("a",{href:"https://github.com/hugohernani",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(We.a,{size:"25px",color:e}),a.a.createElement("span",null,"hugohernani")),a.a.createElement("a",{href:"https://instagram.com/hugo.hernani/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(We.b,{size:"25px",color:e}),a.a.createElement("span",null,"hugo.hernani")),a.a.createElement("a",{href:"mailto:hhernanni@gmail.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(We.c,{size:"25px",color:e}),a.a.createElement("span",null,"hhernanni@gmail.com")))}),[e,c])};function Je(){var n=Object(c.a)(["\n  cursor: pointer;\n\n  text-transform: uppercase;\n\n  background-color: whitesmoke;\n  padding: 15px 30px;\n\n  border: 1px solid black;\n  border-radius: 10px;\n\n  margin: 10px 0px;\n\n  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.75);\n  transform: scale(1);\n\n  transition: transform 0.4s, box-shadow 0.4s linear;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return Je=function(){return n},n}function Ge(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  width: 51%;\n\n  @media screen and (max-width: 600px) {\n    width: 80%;\n    justify-content: space-evenly;\n  }\n\n  a {\n    color: black;\n  }\n"]);return Ge=function(){return n},n}function Ke(){var n=Object(c.a)(["\n  font-family: 'monospace';\n  text-align: justify;\n  line-height: 1.65;\n  margin-bottom: 20px;\n\n  @media screen and (max-width: 600px) {\n    margin: 0px 20px 20px 20px;\n  }\n"]);return Ke=function(){return n},n}function Qe(){var n=Object(c.a)(["\n  cursor: grab;\n  font-family: 'cursive';\n  font-size: 8vw;\n  color: white;\n  margin-bottom: 20px;\n\n  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),\n    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),\n    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);\n\n  transition: transform 0.4s, color 0.4s linear;\n\n  &:hover {\n    color: #efefef;\n  }\n"]);return Qe=function(){return n},n}function Xe(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n\n  @media screen and (max-width: 600px) {\n    align-items: center;\n  }\n"]);return Xe=function(){return n},n}var Ze=l.b.div(Xe()),$e=l.b.h1(Qe()),nt=l.b.div(Ke()),et=l.b.div(Ge()),tt=l.b.div(Je()),rt=function(n){var e=n.title,t=n.shortDescription,o=n.portfolioCallOut,i=n.portfolioUrl,c=n.resumeCallOut,l=n.resumeUrl;return Object(r.useMemo)((function(){return a.a.createElement(Ze,null,a.a.createElement($e,null,e),a.a.createElement(nt,null,t),a.a.createElement(et,null,a.a.createElement(p.b,{to:l},a.a.createElement(tt,null,c)),a.a.createElement(p.b,{to:i},a.a.createElement(tt,null,o))))}),[o,i,c,l,t,e])},at=function(n){var e=n.url,t=n.hoverUrl,o=n.description,i=Object(r.useState)(e),c=Object(g.a)(i,2),l=c[0],u=c[1],s=Object(r.useCallback)((function(){u(t)}),[t]),p=Object(r.useCallback)((function(){u(e)}),[e]);return Object(r.useMemo)((function(){return a.a.createElement("img",{onMouseOver:s,onMouseOut:p,src:l,alt:o})}),[o,p,s,l])},ot=function(){var n=Object(r.useState)({title:"Web Developer",shortDescription:"\n      Hi, I am coder. I build software things. And I love that I am able to do so.\n      Besides having a degree in computer science, I am a fullstack web developer. Wanna see a short description of my career and some of the things I have done in technology? Then my resume will show you this.\n      But do you wanna see in action what kind of things I have built and the current projects and technologies I have being working on? Then check out my portfolio.\n      ",resumeCallOut:"Resume",portfolioCallOut:"Portfolio",resumeUrl:"/hugo-hernani-resume.pdf",portfolioUrl:"/portfolio"}),e=Object(g.a)(n,1)[0],t=Object(r.useState)({url:"me-avatar.svg",hoverUrl:"me-avatar-wink.svg",description:"Hugo Hernani",width:"560px",height:"600px"}),o=Object(g.a)(t,1)[0],i=Object(r.useState)({iconColor:"#000000",textColor:"#ffffff"}),c=Object(g.a)(i,1)[0],l=Object(r.useCallback)((function(){return{width:o.width,height:o.height}}),[o]);return a.a.createElement(He,null,a.a.createElement(y,null),a.a.createElement(Pe,null,a.a.createElement(qe,null,a.a.createElement(Be,null,a.a.createElement(Fe,null,a.a.createElement(rt,e))),a.a.createElement(Ae,{theme:{imageSize:l()}},a.a.createElement(at,o))),a.a.createElement(Le,null,a.a.createElement(Ye,c))),a.a.createElement(T,null))},it=function(){return a.a.createElement(m.c,null,a.a.createElement(m.a,{path:"/",exact:!0,component:ot}),a.a.createElement(m.a,{path:"/portfolio",exact:!0,component:oe}),a.a.createElement(m.a,{path:"/portfolio/:id",exact:!0,component:Se}))};var ct=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,null,a.a.createElement(it,null)),a.a.createElement(s,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ct,null)),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.750d129e.chunk.js.map