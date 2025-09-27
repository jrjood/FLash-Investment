import{u as fe,j as e,C as be,d,a as g,F as J,b as Q,c as X,e as Z,N as ve,m as je,r as c,L as f,f as we,G as ye,g as ke,h as Ne,i as Ie,k as Fe,M as Le,l as Ce,I as Se,n as ze,o as Ee,p as ee,S as B,P as te,A as oe,q as R,s as Pe,t as $e,v as _e,O as se,w as Me,x as ne,y as Ae,T as De,B as Te,z as Be,R as Re,D as re,E as Oe,H as We,J as He,K as Ve}from"./vendor-BdzOqwg8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const W=({start:t,end:s,duration:o})=>{const{ref:r,inView:n}=fe({triggerOnce:!0,threshold:.5});return e.jsx("div",{ref:r,children:n?e.jsx(be,{start:t,end:s,duration:o,useEasing:!0,easingFn:(a,i,p,b)=>p*(1-Math.pow(2,-10*a/b))+i}):0})},Ge=d.footer`
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  justify-content: space-between;
  background-color: var(--main-green);
  /* padding-bottom: 4rem; */
  border-top: 0.1px solid rgba(255, 255, 255, 0.23);
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    a {
      color: var(--white);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      padding: 0.3rem;
      background-color: var(--primary-100);
      color: var(--main-green);
      &:hover {
        background-color: var(--primary-400);
      }
    }
  }
  .copy-text {
    font-size: 1.1rem;
    font-family: 'Proxima-Nova', sans-serif;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: end;
    max-width: 20rem;
    text-align: right;
    line-height: 1.2;
  }
  .designer-link {
    color: #ff0080;
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: start;
    width: 20%;
    min-width: 8.125rem;
    max-width: 25rem;
    margin-bottom: 0.5rem;
  }

  /*   @media (max-width: 52.5rem) {
    .copy-text {
      max-width: 12rem;
    }
    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  } */
  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-container {
      align-items: center;
    }

    .copy-text {
      text-align: center;
    }

    .designer-link {
      align-self: center;
    }

    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  }
`,Ue=()=>{const{t,i18n:s}=g(),o=s.language==="ar";return e.jsxs(Ge,{dir:"ltr",children:[e.jsx(M,{}),e.jsxs("div",{className:"social-container",children:[e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{target:"_blank",rel:"noopener noreferrer",className:"facebook",href:"https://www.facebook.com/p/Flash-investment-61559102775358/",children:e.jsx(J,{})}),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",className:"whatsapp",href:"https://api.whatsapp.com/send?phone=%2B201118883882",children:e.jsx(Q,{})}),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",className:"instagram",href:"https://www.instagram.com/flash.investment/",children:e.jsx(X,{})}),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",className:"linkedin",href:"https://www.linkedin.com/company/108218609/admin/dashboard/",children:e.jsx(Z,{})})]}),e.jsx("div",{style:{fontFamily:o?"EB Garamond, serif":"Proxima-Nova, sans-serif"},className:"copy-text",children:e.jsxs("div",{className:"developed-by",children:[t("footer.rights"),e.jsxs("p",{dir:"rtl",children:[t("footer.developed"),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://portfolio-webpage-jrd.vercel.app/",className:"designer-link",children:"JORDI"})]})]})})]})]})},qe="/FLash-Investment/assets/logo-Cwn62AsV.png",Ke="/FLash-Investment/assets/logoblack-D-bfnrgV.png",M=({isSticky:t})=>e.jsx("img",{src:t?Ke:qe,alt:"logo",className:"logo"}),Ye=[{key:"nav.home",path:"."},{key:"nav.about",path:"about"},{key:"nav.projects",path:"projects"},{key:"nav.clients",path:"clients"},{key:"nav.contact",path:"contact"}],H=({toggle:t})=>{const{t:s}=g("common");return e.jsx("ul",{className:"nav-links",children:Ye.map(o=>e.jsx("li",{children:e.jsxs(ve,{onClick:t,className:"nav-link",to:o.path,end:!0,children:[s(o.key),e.jsx("span",{})]})},o.key))})};d.div`
  background: #111;
  border-radius: var(--border-radius);
  padding: 2rem 1rem;
  text-align: center;
  height: 23.2rem;
  margin-bottom: 3rem;
  .client-image {
    width: 5.7rem;
    height: 5.7rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  .client-name {
    margin: 0.5rem 0 0;
    color: #e6e6e6;
    font-family: 'Rama Gothic M', sans-serif !important;
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .client-role {
    color: #aaa;
    margin: 0;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .stars {
    margin: 1rem 0;
    color: gold;
  }
  .feedback {
    font-style: italic;
    color: #ddd;
  }
  @media (max-width: 14rem) {
    .feedback {
      font-size: 0.7rem;
    }
    .stars {
      margin: 1rem 0;
      color: gold;
      font-size: 0.7rem;
    }
  }
`;const Je=je`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Qe=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOverlay 0.3s ease forwards;

  @keyframes fadeOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .popup-container {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 43.5rem;
    height: fit-content;
    overflow: hidden;
    position: relative;
    animation: ${Je} 0.4s ease forwards;
    transform-origin: center;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.16),
        rgb(0, 0, 0)
      ),
      url(${t=>t.$background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
  }
  a {
    align-self: center;
  }
  .closeBtn {
    position: absolute;
    top: 0.75rem;
    right: 1.125rem;
    background: none;
    color: var(--white);
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .title {
    font-size: 2rem;
    /* color: var(--black); */
  }
  .scrollContainer {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-behavior: smooth;
  }
  .popup-card {
    position: relative;
    overflow: hidden;
    /* height: 15rem; */
    border-radius: var(--border-radius);
  }
`,Xe=({onClose:t,data:s})=>{const{t:o}=g("home"),r=c.useRef();return c.useEffect(()=>{const n=a=>{r.current&&!r.current.contains(a.target)&&t()};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[t]),e.jsx(Qe,{$background:s.image,children:e.jsxs("div",{className:"popup-container",ref:r,children:[e.jsx("button",{className:"closeBtn",onClick:t,children:"×"}),e.jsx("h2",{className:"title",children:o(s.title).replace(/_/g," ")}),e.jsx("div",{className:"scrollContainer",children:e.jsx("div",{className:"popup-card",children:e.jsx("p",{children:o(s.text)})})}),e.jsx("div",{className:"btn-container",children:e.jsx(f,{to:"projects",children:e.jsx("button",{className:"btn popup-btn",children:o("services.popup_button")})})})]})})},Ze="/FLash-Investment/assets/Activation-kN9w6jYP.jpeg",et="/FLash-Investment/assets/Events-DENNdfUt.jpg",tt="/FLash-Investment/assets/Exhibitions-C04kltRn.jpg",ot="/FLash-Investment/assets/Roadshows-CtZ3jti2.jpg",st="/FLash-Investment/assets/POS_Marketing-BgT0U_9k.jpg",nt="/FLash-Investment/assets/Stunts-D3QRUlk0.png",rt="/FLash-Investment/assets/Team_Building-DhDRgnVh.jpeg",at="/FLash-Investment/assets/Digital_Marketing-yLgm1G5G.png",it={Swimming_Pools:{image:Ze,title:"services.items.Swimming_Pools.title",text:"services.items.Swimming_Pools.text"},Health_Club_and_Spa:{image:et,title:"services.items.Health_Club_and_Spa.title",text:"services.items.Health_Club_and_Spa.text"},Commercial_Areas:{image:tt,title:"services.items.Commercial_Areas.title",text:"services.items.Commercial_Areas.text"},Security_and_Guarding:{image:ot,title:"services.items.Security_and_Guarding.title",text:"services.items.Security_and_Guarding.text"},Childrens_Area:{image:st,title:"services.items.Childrens_Area.title",text:"services.items.Childrens_Area.text"},Bicycle_Paths:{image:nt,title:"services.items.Bicycle_Paths.title",text:"services.items.Bicycle_Paths.text"},Sports_Fields:{image:rt,title:"services.items.Sports_Fields.title",text:"services.items.Sports_Fields.text"},Parking:{image:at,title:"services.items.Parking.title",text:"services.items.Parking.text"}},lt={Swimming_Pools:e.jsx(Ce,{size:32}),Health_Club_and_Spa:e.jsx(Le,{size:32}),Commercial_Areas:e.jsx(Fe,{size:32}),Security_and_Guarding:e.jsx(Ie,{size:32}),Childrens_Area:e.jsx(Ne,{size:32}),Bicycle_Paths:e.jsx(ke,{size:32}),Sports_Fields:e.jsx(ye,{size:32}),Parking:e.jsx(we,{size:32})},ct=({services:t})=>{const{t:s}=g("home"),[o,r]=c.useState(!1),[n,a]=c.useState(null),i=p=>{a(it[p]),r(!0)};return e.jsxs("div",{className:"grid",role:"list",children:[t.map((p,b)=>{const v=p.replace(/_/g," ");return e.jsxs("div",{type:"button",onClick:()=>i(p),className:"card",role:"listitem","aria-haspopup":"dialog","aria-label":`${v} overview`,children:[e.jsx("div",{className:"card-icon",children:lt[p]}),e.jsx("span",{className:"line-highlight","aria-hidden":!0}),e.jsx("span",{className:"card-title",children:s(`services.items.${p}.title`).replace(/_/g," ")})]},b)}),o&&n&&e.jsx(Xe,{onClose:()=>{r(!1),a(null)},data:n})]})},mt=d.div`
  width: 100%;
  overflow: hidden;

  .card-box {
    padding: 30px;
    position: relative;
    background-color: #ffffff40;
    height: 300px;
    width: 100%;
    transition: var(--transition);
    border-radius: var(--border-radius);
  }
  .card-icon {
    transition: var(--transition);
    svg {
      transition: var(--transition);
      width: 50px;
      height: 50px;
    }
  }
  .separator {
    margin: 15px 0;
    width: 30%;
    height: 5px;
    background-color: var(--primary-400);
    position: absolute;
    top: 28%;
    transition: var(--transition);
  }
  .card-title {
    text-transform: uppercase;
    font-weight: 600;
    position: absolute;
    font-size: 1.625rem;
    top: 42%;
    transition: var(--transition);
  }
  .card-text {
    position: absolute;
    line-height: 1.3;
    top: 50%;
    opacity: 0;
    transition: var(--transition);
    position: absolute;
    max-width: 80%;
  }

  &:hover {
    .card-icon {
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .card-icon {
      opacity: 0;
    }
    .separator {
      position: absolute;
      top: 7%;
    }
    .card-title {
      opacity: 0;
    }
    .card-text {
      position: absolute;
      top: 17%;
      opacity: 1;
      line-height: 1.2;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      /* font-size: 1.2rem; */
    }
    .card-box {
      display: flex;
      justify-content: center;
      text-align: center;
      /* align-items: center; */
    }
    .card-text {
      max-width: 93%;
    }
  }
`,dt=({icon:t,title:s,text:o})=>e.jsx(mt,{children:e.jsxs("div",{className:"card-box",children:[t&&e.jsx("div",{className:"card-icon",children:t}),e.jsx("div",{className:"separator"}),e.jsx("h3",{className:" card-title",children:s}),e.jsx("p",{className:"card-text",children:o})]})}),gt=d.section`
  background: var(--main-green);
  color: var(--white);
  /* height: 15rem; */
  padding: 2rem;
  /* height: fit-content; */
  /* padding: 4rem 4rem 2rem; */

  .contact-top {
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
    /* transform: translateY(-8rem); */
    /* font-family: 'Proxima-Nova', sans-serif; */
    font-weight: 600;
  }
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .contact-circle {
    width: 5rem;
    height: 5rem;
    background: var(--primary-300);
    border-radius: 50%;
    display: flex;
    color: var(--main-green);
    align-items: center;
    justify-content: center;
    margin-bottom: 0.7rem;
    font-size: 1.8rem;
    transition: all 0.1s ease-in-out;
    &:hover {
      font-size: 2rem;
      transform: rotate(-20deg);
    }
  }
  .label {
    /* margin: 0.5rem 0; */
    font-size: 1.5rem;
  }
  .info {
    color: #00aaff;
    /* min-height: 8rem; */
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #0075af;
    }
  }
  .divider {
    width: 1px;
    height: 5rem;
    background: var(--white);
    opacity: 0.2;
    margin: 0 1rem;
  }
  @media (max-width: 44rem) {
    height: 100%;
    .contact-top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: none;
    }

    .divider {
      display: none;
    }
    .contact-circle {
      width: 5rem;
      height: 5rem;
      font-size: 1.8rem;
    }
  }
`;function ae(){const{t}=g("common");return e.jsx(gt,{children:e.jsxs("div",{className:"contact-top flex-center",children:[e.jsxs("div",{className:"contact-item",children:[e.jsx("a",{className:"contact-circle",target:"_blank",rel:"noopener noreferrer",href:`mailto:${t("contact.email")}`,children:e.jsx(Se,{})}),e.jsx("h4",{className:"label",children:t("contact.emailLabel")}),e.jsx("a",{className:"info",target:"_blank",rel:"noopener noreferrer",href:`mailto:${t("contact.email")}`,children:t("contact.email")})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"contact-item",children:[e.jsx("a",{className:"contact-circle",target:"_blank",rel:"noopener noreferrer",href:`tel:${t("contact.phone")}`,children:e.jsx(ze,{})}),e.jsx("h4",{className:"label",children:t("contact.callLabel")}),e.jsx("a",{className:"info",target:"_blank",rel:"noopener noreferrer",href:`tel:${t("contact.phone")}`,children:t("contact.phone")})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"contact-item",children:[e.jsx("a",{className:"contact-circle",target:"_blank",rel:"noopener noreferrer",href:"https://maps.app.goo.gl/C5nsLsCCmiKaR37XA",children:e.jsx(Ee,{})}),e.jsx("h4",{className:"label",children:t("contact.visitLabel")}),e.jsx("a",{className:"info",target:"_blank",rel:"noopener noreferrer",href:"https://maps.app.goo.gl/C5nsLsCCmiKaR37XA",children:t("contact.address")})]})]})})}const pt=d.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 5rem;
  height: fit-content;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.57)),
    url(${t=>t.$imgPath}) no-repeat;
  background-size: cover;
  background-position: center;

  .content {
    display: flex;
    width: 100%;
    height: 30rem;
    align-content: center;
    justify-content: start;
    padding: 0 2rem;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-family: 'Rama Gothic M'; */
    font-weight: bold;
    color: var(--primary-400);
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
  }

  @media (max-width: 48rem) {
    .info {
      font-size: 4.1rem;
    }
    .content {
      justify-content: center;
    }
  }
  @media (max-width: 44rem) {
    .info {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 3rem;
    }
  }
`,F=({title:t,imgPath:s})=>e.jsx(pt,{$imgPath:s,id:"hero",className:"section-container",children:e.jsx("div",{className:"content ",children:e.jsxs("h2",{className:"info",children:[" ",t]})})});function ht(){const t=ee();return c.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t.key]),null}function ut(t){const[s,o]=c.useState(window.matchMedia(t).matches);return c.useEffect(()=>{const r=window.matchMedia(t),n=()=>o(r.matches);return r.addEventListener("change",n),()=>r.removeEventListener("change",n)},[t]),s}const ie=({gridRows:t,cardsData:s})=>{const{t:o}=g("home"),r=ut("(max-width: 48rem)");return e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:"small-screen",children:e.jsx(B,{modules:[te,oe],spaceBetween:100,slidesPerView:1,loop:!0,pagination:{clickable:!0},autoplay:{delay:2e3},children:s.map((n,a)=>e.jsx(R,{children:e.jsx(e.Fragment,{children:e.jsxs(f,{to:n.link,className:"card-slide",children:[e.jsx("img",{className:"img",src:n.img,alt:o(n.key)}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"label",children:o(n.key)})]},a)})}))})}),e.jsx("div",{className:t,children:s.map((n,a)=>e.jsxs(f,{to:n.link,className:n.big?"card big-card":"card",children:[e.jsx("img",{className:"img",src:n.img,alt:o(n.key)}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"label",children:o(n.key)})]},a))})]})},xt=({images:t})=>{const[s,o]=c.useState(0),r=()=>{o(a=>a===0?t.length-1:a-1)},n=()=>{o(a=>a===t.length-1?0:a+1)};return e.jsxs("div",{className:"slider-container",children:[e.jsx("img",{className:"main-image",src:t[s],alt:`Slide ${s}`}),e.jsxs("div",{className:"arrows",children:[e.jsx("button",{className:"arrow left",onClick:r,children:"‹"}),e.jsx("button",{className:"arrow right",onClick:n,children:"›"})]}),e.jsx("div",{className:"thumbnails",children:e.jsx(B,{modules:[te],spaceBetween:30,loop:!1,pagination:{clickable:!0},breakpoints:{0:{slidesPerView:2},350:{slidesPerView:3},768:{slidesPerView:4},769:{slidesPerView:5}},children:t.map((a,i)=>e.jsx(R,{children:e.jsx("img",{src:a,alt:`Thumb ${i}`,className:`thumb ${i===s?"active":""}`,onClick:()=>o(i)})},i))})})]})},ft=({tags:t})=>e.jsx("ul",{className:"tag-list",children:t.map((s,o)=>e.jsx("li",{className:"tag-dot",children:s},o))}),bt=d.nav`
  width: 100vw;
  height: ${({$isSticky:t})=>t?"3rem":"6rem"};
  position: ${({$isSticky:t})=>t?"fixed":"absolute"};
  top: 0;
  left: 0;
  z-index: 10;
  background: transparent;
  box-shadow: none;

  .test {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    /* color: var(--white); */
    font-weight: 100;
    a {
      font-weight: 350;
      /* color: var(--white); */
    }

    .line {
      height: 1.5rem;
      width: 0.05rem;
      background-color: ${({$isSticky:t})=>t?"#050505":"var(--white)"};
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7rem;
    width: 100%;
    height: 100%;
    padding: 0 4rem;

    background-color: ${({$isSticky:t})=>t?"var(--primary-100)":"transparent"};
    box-shadow: ${({$isSticky:t})=>t?"0 8px 8px rgba(0, 0, 0, 0.17)":"none"};

    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    transform: ${({$isSticky:t,$showNavbar:s})=>t&&!s?"translateY(-110%)":"translateY(0)"};

    pointer-events: ${({$isSticky:t,$showNavbar:s})=>t&&!s?"none":"auto"};
    will-change: transform;
  }

  .logo-container {
    padding-left: 1rem;
  }
  .logo1 {
    display: ${({$isSticky:t})=>t?"none":"block"};
  }
  .logo2 {
    display: ${({$isSticky:t})=>t?"block":"none"};
  }

  .logo {
    transition: var(--transition);
    width: ${({$isSticky:t})=>t?"6rem":"10rem"};
  }

  .big-bar {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    .nav-link {
      color: ${({$isSticky:t})=>t?"#050505":"var(--white)"};
      font-size: 1rem;
    }

    li:hover {
      span {
        height: 2rem;
      }
      .nav-link {
        color: ${({$isSticky:t})=>t?"var(--primary-900)":"var(--primary-400)"};
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    display: block;
    transition: var(--transition);
    text-decoration: none;
    font-weight: 600;
  }
  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
  }

  span {
    position: absolute;
    width: 5px;
    height: 0;
    background-color: var(--white);
    top: -2.7rem;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }

  .toggle-btn {
    display: none;
    position: fixed; /* pin to viewport */
    top: 1rem;
    left: 1rem;
    z-index: 10050; /* above AsideMenu */
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--white); /* visible over hero; tweak if needed */
  }

  @media (max-width: 48rem) {
    .toggle-btn {
      display: flex;
    }
    .big-bar {
      display: none;
    }
    .logo {
      display: none;
    }

    /* keep navbar rendered so the toggle exists */
    .navbar {
      background: transparent;
      box-shadow: none;
      transform: translateY(0); /* don't hide the toggle on scroll */
      pointer-events: auto;
      padding: 0 1rem;
    }
  }
`,vt=d.button`
  background: transparent;
  border: none;
  color: ${({$open:t})=>t?"var(--black)":"var(--white)"};
  font-size: 2rem;
  cursor: pointer;
  transition: var(--transition);
  z-index: 9999;

  ${({$open:t})=>t&&`
    transform: rotate(90deg);
  `}
`,jt=d.aside`
  display: none;
  z-index: 1;

  @media (max-width: 48rem) {
    display: flex;
  }

  position: fixed;
  inset: 0;

  background-color: var(--black);
  color: var(--white);

  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
  transform: translateX(${({$open:t})=>t?"0":"-100%"});
  opacity: ${({$open:t})=>t?"1":"0"};
  pointer-events: ${({$open:t})=>t?"auto":"none"};

  .content {
    width: 100%;
    max-width: 28rem;
    padding: 4rem 2rem;
    margin-inline: auto;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    padding: 0;
    gap: 1rem;
  }

  .nav-link {
    margin: 0.5rem 0;
    font-family: 'Rama Gothic M';
    color: var(--white);
    font-size: 2rem;
    transition: var(--transition);
  }

  li .active {
    color: var(--primary-700);
  }
  span {
    display: none;
  }
`,wt=d.div`
  position: relative;
  display: inline-block;
  /* font-family: system-ui, Arial, sans-serif; */
  transition: all 0.3s ease-in-out;
`,yt=d.div`
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0;
  background: transparent;
  border: none;
  color: ${({$isSticky:t})=>t?"#050505":"var(--white)"};
  /* font-size: 1.1rem; */
  cursor: pointer;
  line-height: 1.2;
`,kt=d.div`
  display: inline-block;
  transform: rotate(${({$open:t})=>t?"180deg":"0deg"})
    translateY(${({$open:t})=>t?"0.2rem":"0"});
  transition: all 0.2s ease;
  font-size: 0.9rem;
  opacity: 0.7;
`,Nt=d.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  /* min-width: 5rem; */
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  background: #fff;
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  z-index: 2000;
`,It=d.li`
  padding: 0.45rem 0.75rem;
  cursor: pointer;
  white-space: nowrap;

  &[aria-selected='true'],
  &:hover {
    background: #f5f5f5;
  }
`,I=[{code:"en",label:"English"},{code:"ar",label:"العربية"}];function Ft({$isSticky:t}){var y;const{i18n:s}=g(),[o,r]=c.useState(!1),n=c.useMemo(()=>(s.language||"en").slice(0,2),[s.language]),a=Math.max(0,I.findIndex(l=>l.code===n)),[i,p]=c.useState(a),b=c.useRef(null),v=c.useRef(null),j=c.useRef(null);c.useEffect(()=>{p(a)},[a]),c.useEffect(()=>{if(!o)return;const l=u=>{var x;(x=b.current)!=null&&x.contains(u.target)||r(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[o]),c.useEffect(()=>{const l=u=>{r(!1)};return s.on("languageChanged",l),()=>s.off("languageChanged",l)},[s]);const h=l=>{var x;const u=I[l];u&&(s.changeLanguage(u.code),r(!1),(x=v.current)==null||x.focus())},m=l=>{var u;if(!o&&(l.key==="ArrowDown"||l.key==="Enter"||l.key===" ")){l.preventDefault(),r(!0),setTimeout(()=>{var x,N;(N=(x=j.current)==null?void 0:x.querySelector('[data-active="true"]'))==null||N.scrollIntoView({block:"nearest"})},0);return}o&&(l.key==="Escape"&&(r(!1),(u=v.current)==null||u.focus()),l.key==="ArrowDown"&&(l.preventDefault(),p(x=>Math.min(I.length-1,x+1))),l.key==="ArrowUp"&&(l.preventDefault(),p(x=>Math.max(0,x-1))),(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),h(i)),l.key==="Tab"&&r(!1))},w=((y=I[a])==null?void 0:y.label)??"English";return e.jsxs(wt,{ref:b,children:[e.jsxs(yt,{ref:v,type:"button","aria-haspopup":"listbox","aria-expanded":o,"aria-controls":"lang-listbox",onClick:()=>r(l=>!l),onKeyDown:m,$isSticky:t,children:[w,e.jsx(kt,{$open:o,children:e.jsx(Pe,{})})]}),o&&e.jsx(Nt,{id:"lang-listbox",role:"listbox",tabIndex:-1,ref:j,"aria-activedescendant":`lang-opt-${i}`,onKeyDown:m,children:I.map((l,u)=>e.jsx(It,{id:`lang-opt-${u}`,role:"option","aria-selected":a===u,"data-active":i===u,onMouseEnter:()=>p(u),onMouseDown:x=>x.preventDefault(),onClick:()=>h(u),children:l.label},l.code))})]})}const Lt=80,Ct=()=>{const{t}=g("common"),[s,o]=c.useState("en"),[r,n]=c.useState(!1),[a,i]=c.useState(!1),[p,b]=c.useState(!0),[v,j]=c.useState(window.scrollY),[h,m]=c.useState(null),w=ee();function y(){i(l=>!l)}return c.useEffect(()=>{a?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow=""},[a]),c.useEffect(()=>{const l=document.getElementById("hero");if(!l)return;const u=new IntersectionObserver(([x])=>{n(N=>{const A=!x.isIntersecting;return!N&&A&&(m(window.scrollY),b(!0)),N&&!A&&(m(null),b(!0)),A})},{root:null,threshold:.8,rootMargin:"0px"});return u.observe(l),()=>u.unobserve(l)},[w.pathname]),c.useEffect(()=>{if(!r){b(!0);return}let l=!1;const u=()=>{l||(l=!0,window.requestAnimationFrame(()=>{const x=window.scrollY,N=(h??0)+Lt;x>v&&x>N?b(!1):b(!0),j(x),l=!1}))};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[r,h,v]),e.jsxs(bt,{$isSticky:r,$showNavbar:p,children:[e.jsx(jt,{$open:a,children:e.jsx("div",{className:"content",children:e.jsx(H,{toggle:y})})}),e.jsx(vt,{type:"button",className:"toggle-btn",onClick:y,$open:a,children:a?e.jsx($e,{}):e.jsx(_e,{})}),e.jsxs("nav",{className:"navbar ",children:[e.jsx(f,{to:".",className:"logo-container logo1",children:e.jsx(M,{isSticky:r})}),e.jsx(f,{to:".",className:"logo-container logo2",children:e.jsx(M,{isSticky:r})}),e.jsxs("div",{className:"big-bar",children:[e.jsxs("div",{className:"test",children:[e.jsx(f,{className:"nav-link",children:t("nav.news")}),e.jsx("div",{className:"line"}),e.jsx(Ft,{$isSticky:r,value:s,onChange:o})]}),e.jsx(H,{})]})]})]})},V=({owner_image:t,ownerName:s,ownerTitle:o,ownerBio:r})=>e.jsxs("div",{className:"img-box",children:[e.jsx("img",{src:t,className:"owner-img"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"img-text",children:[e.jsx("h3",{className:"owner-name",children:s}),e.jsx("p",{className:"owner-title",children:o}),e.jsx("p",{className:"owner-bio",children:r}),e.jsx("div",{className:"separator"})]})]}),St="/FLash-Investment/assets/Inspiration-bg-CZHqPWvL.svg",zt="/FLash-Investment/assets/Inspiration-bg2-BCNcvi9y.svg",le=d.section`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--primary-300);
  background-image: ${t=>t.$rtl?`url(${zt})`:`url(${St})`};
  background-repeat: no-repeat;
  /* ✅ the important bit: bind to a prop so it always wins */
  background-position-x: ${t=>t.$rtl?"2%":"98%"};
  background-size: contain;

  .container {
    width: 100%;

    margin: 0 5rem;
    max-width: 60%;
  }
  .content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .row {
    display: flex;
    gap: 5rem;
  }
  .feature {
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    color: var(--black);
    width: 25%;
    margin-bottom: 5rem;
  }

  .inspiration-no-border {
    border-top: 400px var(--black) solid;
  }
  .text-box {
    color: var(--black);
    font-size: 1.125rem;
    max-width: 62%;
    line-height: 1.5;
  }
  .quote {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--black);
    align-self: center;
  }

  //NewsletterForm style
  .newsletter-title {
    color: var(--black);
    font-family: 'Rama Gothic M';
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 20px;
  }

  .input-wrapper input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--black);
    padding: 10px 35px 10px 5px;
    font-size: 14px;
    color: var(--black);
    outline: none;
  }

  .input-wrapper input::placeholder {
    font-size: 0.8rem;
    color: #333;
  }

  .email-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--white);
  }

  .send-btn {
    background-color: var(--black);
    color: var(--white);
    border: none;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 13px;
    border-radius: 20px;
    cursor: pointer;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    a {
      color: var(--white);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      padding: 0.5rem;
    }
    .facebook {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .whatsapp {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .instagram {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .linkedin {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .facebook:hover {
      background-color: #1255adff;
    }
    .whatsapp:hover {
      background-color: #1b9548ff;
    }
    .instagram:hover {
      background-color: #b11f5cff;
    }
    .linkedin:hover {
      background-color: #0077b5;
    }
  }

  @media (max-width: 48rem) {
    .row {
      flex-direction: column;
      gap: 2rem;
    }
    .text-box {
      max-width: 100%;
    }
    .container {
      max-width: 80%;
      margin: auto;
    }
    .title {
      margin-bottom: 0;
    }
  }
  @media (max-width: 44rem) {
    .container {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 27rem) {
    .quote {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 12.5rem) {
    .input-wrapper input::placeholder {
      font-size: 0.5rem;
    }
  }
`,k=({children:t,quote:s})=>{var n;const{i18n:o}=g(),r=(n=o.language)==null?void 0:n.startsWith("ar");return e.jsx(le,{$rtl:r,dir:r?"rtl":"ltr",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"content ",children:e.jsxs("div",{className:"feature",children:[s&&e.jsx("h2",{className:"quote",children:s}),t]})})})})};function Et(){return e.jsxs(e.Fragment,{children:[e.jsx(Ct,{}),e.jsx(ht,{}),e.jsx(se,{}),e.jsx(Ue,{})]})}const G=d.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 22vw;
    max-width: 37rem;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }

  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,Pt="/FLash-Investment/assets/not-found-CM3leHut.svg",$t=()=>Me().status===404?e.jsx(G,{children:e.jsxs("div",{children:[e.jsx("img",{src:Pt,alt:"Not found"}),e.jsx("h3",{children:"Ohh! page not found"}),e.jsx("p",{children:"We can't seem to find the page you are looking for"}),e.jsx(f,{to:"/IGNIT-Crew",children:"back home"})]})}):e.jsx(G,{children:e.jsx("div",{children:e.jsx("h3",{children:"Something went wrong"})})}),U="/FLash-Investment/assets/about-bg-D_Ant9Ry.jpg",_t=d.section`
  display: flex;
  align-items: center;
  background: radial-gradient(circle, #0e281b 0%, #000000 100%);
  gap: 2rem;
  /* height: 100vh; */
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
    width: 70%;
    max-width: 40rem;
    padding-bottom: 2rem;
  }

  .image-box {
    margin: auto 0;
    height: 45rem;
    width: 50%;
    display: block;
    background-image: url(${U});
    background-size: cover;
    background-position: center;
    margin: 3rem 0;
  }
  .right {
    flex: 1;
    min-width: 40%;
    padding: 2rem;
    padding-left: 1rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text {
    font-size: 1.325rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    max-width: 90rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    font-size: 1.7rem;
    color: var(--primary-300);
    /* font-family: 'Rama Gothic M'; */
    margin-bottom: 2.5rem;
  }
  @media (max-width: 48rem) {
    height: 100%;

    background-image: linear-gradient(
        to right bottom,
        rgba(17, 17, 17, 0.45),
        rgba(0, 0, 0, 0.81)
      ),
      url(${U});
    background-size: cover;
    background-position: center;
    padding-bottom: 4rem;

    .image-box {
      display: none;
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      max-width: 95%;
      font-size: 1.4rem;
    }
    /*   .highlight {
      margin-bottom: 1rem;
    } */
  }
  @media (max-width: 44rem) {
    .text {
      font-size: 1.2rem;
    }
    .right {
      gap: 1rem;
    }
  }
  @media (max-width: 36rem) {
    .text {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .highlight {
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 27rem) {
    .highlight {
      font-size: 1.3rem;
    }
  }
`,Mt=()=>{const{t}=g("home");return e.jsxs(_t,{className:".section-container",children:[e.jsx("div",{className:"image-box",role:"img ","aria-label":"img"}),e.jsxs("div",{className:"right",children:[e.jsx(M,{}),e.jsx("p",{className:"text",children:t("about.paragraph")}),e.jsx("p",{className:"highlight",children:t("about.highlight")}),e.jsx(f,{to:"contact",children:e.jsx("button",{className:"btn",children:t("about.button")})})]})]})},At="/FLash-Investment/assets/hero-bg-CvLStif_.mp4",Dt=d.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 2rem;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: -3; */
  }
  .content {
    display: flex;
    align-content: center;
    justify-content: space-around;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 2rem;
    /* flex-wrap: wrap; */
    color: var(--white);
    z-index: 2;
  }
  .left {
    flex-direction: column;
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-300);
    line-height: 1;
    text-transform: uppercase;
  }
  .info {
    font-size: 6rem;
    line-height: 0.8;
    font-weight: 550;
  }
  .right {
    flex-direction: column;
    display: flex;
    justify-content: center;

    p {
      font-weight: 500;
      max-width: 33rem;
      font-size: 1.35rem;
      line-height: 1.6;
      margin-bottom: 2rem;

      /* text-shadow: 2px 2px 3px rgb(0, 0, 0); */
    }
  }
  @media (max-width: 48rem) {
    margin: 0 auto;
    max-width: 47rem;
    .info {
      font-size: 4.1rem;
      line-height: 1.2;
    }
    .content {
      padding: 0;
    }
  }
  @media (max-width: 44rem) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
    .right {
      align-items: center;
    }
    .info {
      max-width: 32rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      text-align: center;
      font-size: 3.8rem;
    }
    .right {
      p {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 86%;
    }
  }
`,Tt=()=>{const{t}=g("home");return e.jsxs(Dt,{id:"hero",className:"section-container",children:[e.jsxs("div",{children:[e.jsx("div",{className:"overlay"}),e.jsx("video",{className:"background-video",id:"hero-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:At,type:"video/mp4"})]}),e.jsxs("div",{className:"content ",children:[e.jsx("div",{className:"left flex-center",children:e.jsxs("div",{className:"info",children:[e.jsx("p",{children:t("hero.line1")}),e.jsx("p",{children:t("hero.line2")}),e.jsx("p",{children:t("hero.line3")}),e.jsx("p",{children:t("hero.line4")})]})}),e.jsxs("div",{className:"right ",children:[e.jsx("p",{children:t("hero.paragraph")}),e.jsx(f,{className:"btn-container",to:"about",children:e.jsx("button",{className:"btn",children:t("hero.button")})})]})]})]})},Bt="/FLash-Investment/assets/logo1-CEEUIXFW.png",Rt="/FLash-Investment/assets/logo2-q-o4mtza.png",Ot="/FLash-Investment/assets/logo3-DQUo9RDM.png",Wt="/FLash-Investment/assets/logo4-CPDKQ7qx.png",Ht="/FLash-Investment/assets/logo5--sJlIBUq.png",Vt="/FLash-Investment/assets/logo6-B5zMTg-1.png",Gt="/FLash-Investment/assets/logo7-DBTVvVz9.png",Ut="/FLash-Investment/assets/logo8-C1NVbhCQ.png",qt="/FLash-Investment/assets/logo9-DGs5J0CM.png",Kt="/FLash-Investment/assets/logo10-9e4_7FVN.png",Yt="/FLash-Investment/assets/logo11-CN5XMK8X.png",Jt="/FLash-Investment/assets/logo12-CTw__6EO.png",Qt="/FLash-Investment/assets/logo13-CHkl6lOs.png",Xt="/FLash-Investment/assets/logo14-B6rX72uD.png",Zt="/FLash-Investment/assets/logo15-B_g9TWdd.png",eo="/FLash-Investment/assets/logo16-Di94PsR4.png",to="/FLash-Investment/assets/logo17-_dg_epqT.png",oo="/FLash-Investment/assets/logo18-Ck5PljuK.png",so="/FLash-Investment/assets/logo19-BxDKoMLf.png",no="/FLash-Investment/assets/logo20-DaX_0BAJ.png",ro="/FLash-Investment/assets/logo21-DjsFq7b2.png",ao="/FLash-Investment/assets/logo22-CH4orKB1.png",io="/FLash-Investment/assets/logo23-7KmbAS0V.png",lo="/FLash-Investment/assets/logo24-DP54YvP8.png",co="/FLash-Investment/assets/logo25-DSONCM81.png",mo="/FLash-Investment/assets/logo26-DfjrHnAX.png",go="/FLash-Investment/assets/logo27-BA6Dfvjj.png",po="/FLash-Investment/assets/logo28-DjnMbmOO.png",ho="/FLash-Investment/assets/logo29-B0Iy_2Hx.png",uo="/FLash-Investment/assets/logo30-CjMLGden.png",xo="/FLash-Investment/assets/logo31-DzKycOO1.png",fo="/FLash-Investment/assets/logo32-DyK_kQ21.png",bo="/FLash-Investment/assets/logo33-DBob3xVL.png",vo="/FLash-Investment/assets/logo34-Cj-LmwnJ.png",jo="/FLash-Investment/assets/logo35-BkNztOc7.png",wo="/FLash-Investment/assets/logo36-CYxIPJ0J.png",yo="/FLash-Investment/assets/logo37-D_fEw3zR.png",ko="/FLash-Investment/assets/logo38-DBJS0VVI.png",No="/FLash-Investment/assets/logo39-CPZT-nMD.png",Io="/FLash-Investment/assets/logo40-BDhu6d_t.png",Fo="/FLash-Investment/assets/logo41-mhXZrXwf.png",Lo="/FLash-Investment/assets/logo42-BWydt9gH.png",Co="/FLash-Investment/assets/logo43-BMq4dZN0.png",So="/FLash-Investment/assets/logo44-CqriwnSS.png",zo="/FLash-Investment/assets/logo45-CZ5nx2T-.png",Eo="/FLash-Investment/assets/logo46-DglX4M_N.png",Po="/FLash-Investment/assets/logo47-CE7lZ6SA.png",$o="/FLash-Investment/assets/logo48-DWLzgPut.png",_o="/FLash-Investment/assets/logo49-DWlnwI9u.png",Mo="/FLash-Investment/assets/logo50-Dkv9Btoj.png",Ao="/FLash-Investment/assets/logo51-Co88iCfM.png",Do="/FLash-Investment/assets/logo52-D0Icmq3f.png",To="/FLash-Investment/assets/logo53-Bud0ELN_.png",Bo="/FLash-Investment/assets/logo54-DrxKQk1E.png",Ro="/FLash-Investment/assets/logo55-CNKvcUL5.png",Oo="/FLash-Investment/assets/logo56-Bh7uUQAd.png",Wo="/FLash-Investment/assets/logo57-DBFYkACn.png",Ho="/FLash-Investment/assets/logo58-Mp-FIc7R.png",Vo="/FLash-Investment/assets/logo59-BkbNpU4N.png",Go="/FLash-Investment/assets/logo60-Cx7NCV3z.png",Uo="/FLash-Investment/assets/logo61-RHMa7kDn.png",qo="/FLash-Investment/assets/logo62-CyEYtpBl.png",Ko="/FLash-Investment/assets/logo63-D_YpbVJN.png",Yo="/FLash-Investment/assets/logo64-BmgxEx3x.png",Jo="/FLash-Investment/assets/logo65-6Lem_Ud-.png",Qo="/FLash-Investment/assets/logo66-DiLDEesF.png",Xo="/FLash-Investment/assets/logo67-DNwJzD6J.png",Zo="/FLash-Investment/assets/logo68-CpGALqHV.png",es="/FLash-Investment/assets/logo69-XQWfkbOo.png",ts="/FLash-Investment/assets/logo70-DGdJbGCz.png",os="/FLash-Investment/assets/logo71-DzdTroyP.png",ss="/FLash-Investment/assets/logo72-CLuONiL_.png",ns="/FLash-Investment/assets/logo73-DNmq8mDP.png",rs="/FLash-Investment/assets/logo74-Nx6OMMpK.png",as="/FLash-Investment/assets/logo75-07Edzht8.png",is="/FLash-Investment/assets/logo76-CvbL3B2r.png",ls="/FLash-Investment/assets/logo77-Wzaj2wuh.png",cs="/FLash-Investment/assets/logo78-CmLrH0AS.png",ms="/FLash-Investment/assets/logo79-DkBlUDvw.png",ds="/FLash-Investment/assets/logo80-B4ut6bAv.png",gs="/FLash-Investment/assets/logo81-BX4gn_3p.png",T=[{src:Bt,alt:"logo"},{src:Rt,alt:"logo"},{src:Ot,alt:"logo"},{src:Wt,alt:"logo"},{src:Ht,alt:"logo"},{src:Vt,alt:"logo"},{src:Gt,alt:"logo"},{src:Ut,alt:"logo"},{src:qt,alt:"logo"},{src:Kt,alt:"logo"},{src:Yt,alt:"logo"},{src:Jt,alt:"logo"},{src:Qt,alt:"logo"},{src:Xt,alt:"logo"},{src:Zt,alt:"logo"},{src:eo,alt:"logo"},{src:to,alt:"logo"},{src:oo,alt:"logo"},{src:so,alt:"logo"},{src:no,alt:"logo"},{src:ro,alt:"logo"},{src:ao,alt:"logo"},{src:io,alt:"logo"},{src:lo,alt:"logo"},{src:co,alt:"logo"},{src:mo,alt:"logo"},{src:go,alt:"logo"},{src:po,alt:"logo"},{src:ho,alt:"logo"},{src:uo,alt:"logo"},{src:xo,alt:"logo"},{src:fo,alt:"logo"},{src:bo,alt:"logo"},{src:vo,alt:"logo"},{src:jo,alt:"logo"},{src:wo,alt:"logo"},{src:yo,alt:"logo"},{src:ko,alt:"logo"},{src:No,alt:"logo"},{src:Io,alt:"logo"},{src:Fo,alt:"logo"},{src:Lo,alt:"logo"},{src:Co,alt:"logo"},{src:So,alt:"logo"},{src:zo,alt:"logo"},{src:Eo,alt:"logo"},{src:Po,alt:"logo"},{src:$o,alt:"logo"},{src:_o,alt:"logo"},{src:Mo,alt:"logo"},{src:Ao,alt:"logo"},{src:Do,alt:"logo"},{src:To,alt:"logo"},{src:Bo,alt:"logo"},{src:Ro,alt:"logo"},{src:Oo,alt:"logo"},{src:Wo,alt:"logo"},{src:Ho,alt:"logo"},{src:Vo,alt:"logo"},{src:Go,alt:"logo"},{src:Uo,alt:"logo"},{src:qo,alt:"logo"},{src:Ko,alt:"logo"},{src:Yo,alt:"logo"},{src:Jo,alt:"logo"},{src:Qo,alt:"logo"},{src:Xo,alt:"logo"},{src:Zo,alt:"logo"},{src:es,alt:"logo"},{src:ts,alt:"logo"},{src:os,alt:"logo"},{src:ss,alt:"logo"},{src:ns,alt:"logo"},{src:rs,alt:"logo"},{src:as,alt:"logo"},{src:is,alt:"logo"},{src:ls,alt:"logo"},{src:cs,alt:"logo"},{src:ms,alt:"logo"},{src:ds,alt:"logo"},{src:gs,alt:"logo"}],ps=d.section`
  background-color: var(--primary-300);
  .carousel-container {
    flex-direction: column;
    /* gap: 2rem; */
  }

  .logo-container {
    width: 100%;
    padding-bottom: 0.5rem;
    cursor: grab;
  }
  .title {
    color: #050505;
    align-self: flex-start;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .btn-container {
    align-self: flex-end;
  }

  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none; /* prevent text‐select while dragging */
    img {
      width: 5.5rem;
      height: 5.5rem;
      object-fit: contain;
    }
  }
  .btn-with-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .btn-container {
    align-self: center;
  }
  .btn {
    padding: 0;
    background-color: transparent;
    color: #050505;
    text-decoration: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    transition: all 0.3s;
    &:hover {
      border: none;
      border-bottom: 1px solid transparent;
    }
  }

  @media (max-width: 36rem) {
    .logo-item {
      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;function hs(){const{t,i18n:s}=g("home"),o=s.dir()==="rtl",r=o?"logos-rtl":"logos-ltr";return e.jsx(ps,{className:"section-container",children:e.jsxs("div",{className:"carousel-container flex-center container",children:[e.jsxs("div",{className:"btn-with-title",children:[e.jsx("h2",{className:"title title-medium",children:t("logoCarousel.title")}),e.jsx(f,{className:"btn-container",to:"clients",children:e.jsx("button",{className:"btn",children:t("logoCarousel.button")})})]}),e.jsx("div",{className:"logo-container",dir:o?"rtl":"ltr",children:e.jsx(B,{dir:o?"rtl":"ltr",modules:[oe],observer:!0,observeParents:!0,spaceBetween:30,loop:!0,loopAdditionalSlides:5,autoplay:{delay:2e3,disableOnInteraction:!1,reverseDirection:o},breakpoints:{200:{slidesPerView:3},768:{slidesPerView:3},769:{slidesPerView:5}},children:T.map((n,a)=>e.jsx(R,{children:e.jsx("div",{className:"logo-item",children:e.jsx("img",{src:n.src,alt:n.alt||`logo-${a}`,loading:"lazy",draggable:"false"})})},a))},r)})]})})}const us="/FLash-Investment/assets/logo-2001-BcECPO5O.png",xs="/FLash-Investment/assets/milestones-bg-xb8mtRhq.jpg",fs=d.section`
  color: #a9a9a9;
  background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.26)),
    url(${xs});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  /* height: 50vh; */

  .content {
    padding-left: 3rem;
    z-index: 2;
    /* width: 100%; */
    gap: 2rem;
    /* height: 200rem !important; */
  }

  .container {
    /* height: 35rem; */
  }

  .stats-container {
    display: flex;
    justify-content: start;
    align-self: flex-start;
    padding: 4rem 0;
    height: 100%;
    width: 50%;
    flex-direction: column;
    gap: 8rem;
    font-weight: bold;
    position: relative;
  }
  .top-text {
    font-size: 0.8rem;
    line-height: 1.6;
  }
  .stats {
    gap: 3rem;
    /* justify-content: start; */
  }

  .stat-block {
    font-size: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    color: var(--primary-400);
    span {
      gap: 0.2rem;
      font-size: 2rem;
      font-weight: bold;
      color: #a9a9a9;
      display: flex;
      font-family: 'Roboto';
      /* margin-top: 0.5rem; */
    }
  }
  .since {
    display: none;
    font-size: 5rem;
    /* font-family: 'Proxima-Nova', sans-serif; */
    font-weight: bold;
    font-weight: 500;
    color: var(--primary-400);
    position: absolute;
    bottom: 4rem;
    left: -5rem;
  }
  .logo-container {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(255, 200, 0, 0.01),
      rgba(128, 127, 127, 0.49)
    );
    img {
      padding-right: 2rem;
      width: 100%;
      height: 100%;
    }
    position: relative;
    &::after {
      content: 'Since';
      font-size: 5rem;
      font-family: 'Rama Gothic M' !important;
      text-transform: uppercase;
      font-weight: bold;
      opacity: 0.3;
      font-weight: 500;
      color: var(--primary-400);
      position: absolute;
      bottom: 4rem;
      right: 2rem;
    }
  }
  .small-screen {
    display: none;
  }
  @media (max-width: 48rem) {
    height: fit-content;

    .stats-container {
      gap: 4rem;
    }
    .since {
      bottom: 3.5rem;
      left: -7rem;
    }

    .stats-container {
      align-self: flex-start;
      gap: 8rem;
    }
    .top-text {
      width: 65%;
    }
  }

  @media (max-width: 52.5rem) {
  }
  @media (max-width: 44rem) {
    .logo-container {
      display: none;
    }
    .content {
      justify-content: center;
      padding-left: 0;
    }
    .stats-container {
      gap: 2rem;
    }
    .small-screen {
      display: flex;
      align-self: center;
      flex-direction: column;
      gap: -1rem;
      .small-since {
        font-size: 4rem;
        font-family: 'Proxima-Nova', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        color: #ffc800;
      }
      .small-date {
        font-size: 7rem;
        font-family: 'Rama Gothic M', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        color: #ffc800;
      }
    }
    .top-text {
      align-self: center;
      justify-self: center;
      text-align: center;
      width: 100%;
    }
    .stats-container {
      width: 80%;
    }
  }
  @media (max-width: 27rem) {
    /* .stats {
      flex-direction: column;
    }
    .stat-block {
      justify-content: center;
      align-items: center;
    } */

    .stat-block {
      font-size: 120%;
    }
  }
`,bs=()=>{const{t}=g("home");return e.jsx(fs,{className:"flex-center",children:e.jsxs("div",{className:"container flex-center",children:[e.jsxs("div",{className:"stats-container",children:[e.jsx("p",{className:"top-text",children:t("milestones.topText")}),e.jsxs("div",{className:"stats flex-center",children:[e.jsxs("div",{className:"stat-block",children:[t("milestones.clients"),e.jsxs("span",{children:[e.jsx(W,{start:"0",end:"100",duration:7})," ",t("milestones.plus")]})]}),e.jsxs("div",{className:"stat-block",children:[t("milestones.projects"),e.jsxs("span",{children:[e.jsx(W,{start:"0",end:"200",duration:7})," ",t("milestones.plus")]})]})]}),e.jsxs("div",{className:"small-screen",children:[e.jsx("span",{className:"small-since",children:t("milestones.sinceSmall")}),e.jsx("span",{className:"small-date",children:t("milestones.sinceYear")})]})]}),e.jsxs("div",{className:"logo-container",children:[e.jsx("h2",{className:"since",children:t("milestones.since")}),e.jsx("img",{src:us,alt:t("milestones.sinceYear")})]})]})})},vs=d.section`
  position: relative;
  background-color: #050505;
  /* text-align: center; */

  .container {
    position: relative;
    z-index: 2;
    padding-block: 2rem 3rem;
    padding-top: 0;
  }

  .section-container {
    padding: 2rem 2rem;
  }

  .title {
    color: var(--white);
    /* text-align: left; */
    margin-bottom: 1.25rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
    width: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    padding: 1.5rem 1rem;
    min-height: 9rem;
    width: 100%;
    cursor: pointer;
    /* background: rgba(255, 255, 255, 0.82); */
    background-color: var(--primary-300);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    transition: transform 160ms ease, box-shadow 160ms ease,
      background 160ms ease;

    .card-icon {
      color: var(--primary-700);
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }

    .line-highlight {
      width: 56px;
      height: 4px;
      border-radius: 2px;
      background: var(--primary-700);
      margin-bottom: 0.9rem;
      transition: background 160ms ease;
    }

    .card-title {
      color: #0d1b14;
      font-weight: 800;
      letter-spacing: 0.2px;
      font-size: 1.05rem;
      text-transform: uppercase;
    }

    &:hover,
    &:focus-visible {
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
      background: rgba(255, 255, 255, 0.95);
      outline: none;

      .line-highlight {
        background: var(--primary-800);
      }

      .card-icon {
        color: var(--primary-800);
      }
    }
  }

  @media (max-width: 75rem) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 48rem) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 30rem) {
    .grid {
      grid-template-columns: 1fr;
    }
    .card {
      min-height: 9.5rem;
    }
  }
`,js=()=>{const{t}=g("home"),s=Object.keys(t("services.items",{returnObjects:!0}));return console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(vs,{className:"section-container",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"title title-medium",children:t("services.title")}),e.jsx(ct,{services:s})]})}),e.jsx("div",{className:"line"})]})},ce="/FLash-Investment/assets/proj1-CWbht_io.jpg",me="/FLash-Investment/assets/proj1-CWbht_io.jpg",de="/FLash-Investment/assets/proj1-CWbht_io.jpg",ge="/FLash-Investment/assets/proj1-CWbht_io.jpg",pe="/FLash-Investment/assets/proj1-CWbht_io.jpg",ws=[{img:ce,key:"projects.project1",big:!0,category:"pos-marketing",link:"/projects/proj1"},{img:me,key:"projects.project2",category:"stunts",link:"/projects/proj2"},{img:de,key:"projects.project3",category:"activation",link:"/projects/proj3"},{img:ge,key:"projects.project4",category:"events",link:"/projects/proj4"},{img:pe,key:"projects.project5",category:"team-building",link:"/projects/proj5"}],he=d.section`
  background-color: #050505;
  color: var(--white);
  /* text-align: left; */
  padding-bottom: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    position: relative;
  }

  .title {
    color: var(--white);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
    height: fit-content;
  }

  .grid--3--row {
    grid-template-rows: repeat(3, 1fr);
  }
  .grid--2--row {
    grid-template-rows: repeat(2, 1fr);
  }
  .card-slide {
    /* width: 100%; */
    height: 17rem;
    border-radius: var(--border-radius);
  }
  .small-screen {
    border-radius: var(--border-radius);
    display: none;
    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: #050505;
      color: var(--white);
    }
    &:hover .img {
      transform: scale(1.1);
    }
    .img {
      border-radius: 3px;
      transition: var(--transition);
    }
  }
  .card {
    position: relative;
    overflow: hidden;
    border-radius: 3px;

    cursor: pointer;

    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: var(--primary-200);
      /* color: var(--white); */
    }
    &:hover .img {
      transform: scale(1.1);
    }
  }

  .big-card {
    grid-row: 1/3;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: var(--transition);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: var(--transition);
  }
  .label {
    position: absolute;
    bottom: 3rem;
    inset-inline-start: 0; /* replaces left: 0; works with rtl/ltr */
    width: 90%;
    height: 2.5rem;
    background: var(--primary-300);
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: var(--black);
    font-size: 1rem;
    /* fix border radius for rtl/ltr */
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-end-end-radius: var(--border-radius);
    border-start-end-radius: var(--border-radius);
    text-transform: uppercase;
    transition: var(--transition);
  }
  .btn {
    &:hover {
      border-color: var(--primary-400);
      color: var(--primary-400);
    }

    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .btn-container {
    align-self: flex-end;
    align-self: center;
    justify-self: center;
  }
  .category-select {
    background-color: var(--white);
    width: 150px;
    padding: 5px 8px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    option {
      color: #555;
    }
  }
  @media (max-width: 62rem) {
    .label {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 48rem) {
    .big-screen {
      display: none;
    }
    .small-screen {
      display: block;
    }
    .label {
      width: 70%;
      font-size: 1.3rem;
    }
    .btn {
      position: absolute;
      top: 0;
      right: 10%;
    }
    @media (max-width: 36rem) {
      .label {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 27rem) {
    .label {
      font-size: 0.75rem;
    }
  }
`,ys=()=>{const{t}=g("home");return e.jsx(he,{className:"section-container",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"title title-medium",children:t("projects.title")}),e.jsx(ie,{cardsData:ws,gridRows:"big-screen grid grid--2--row"}),e.jsx(f,{className:"btn-container",to:"projects",children:e.jsx("button",{className:"btn",children:t("projects.button")})})]})})},ks=()=>e.jsxs(e.Fragment,{children:[e.jsx(Tt,{}),e.jsx(Mt,{}),e.jsx(bs,{}),e.jsx(ys,{}),e.jsx(js,{}),e.jsx(hs,{}),e.jsx(ae,{})]}),Ns="/FLash-Investment/assets/about-bg-DbYlH1Dh.png",q="/FLash-Investment/assets/logo2-DCW8P0i4.png",Is=d.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  /* background: radial-gradient(circle, #0e281b 0%, #000000 100%); */
  background-color: var(--main-green);
  height: 100%;
  width: 100%;

  .image-box {
    margin: auto 0;
    /* width: 42%; */
    height: 40vh;
    width: 50%;
    display: block;
    background-image: url(${q});
    background-size: cover;
    background-position: center;
  }
  .right {
    flex: 1;
    min-width: 40%;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    max-width: 80rem;
  }
  .text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    font-size: 1.7rem;
    color: var(--primary-300);
    /* font-family: 'Rama Gothic M'; */
    margin-bottom: 2.5rem;
  }
  @media (max-width: 48rem) {
    background: linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.66)),
      url(${q});
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
    width: 100%;
    padding: 2rem 0;

    .image-box {
      display: none;
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      /* max-width: 95%; */
      font-size: 1.4rem;
    }
    /*  .highlight {
      margin-bottom: 2.5rem;
    } */
  }
  @media (max-width: 44rem) {
    .text {
      font-size: 1.2rem;
    }
    .right {
      gap: 1rem;
    }
  }
  @media (max-width: 36rem) {
    .text {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .highlight {
      margin-bottom: 0.5rem;
      font-size: 1.6rem;
    }
  }
  @media (max-width: 27rem) {
    .highlight {
      font-size: 1.3rem;
    }
  }
`,Fs=()=>{const{t}=g("about");return e.jsxs(Is,{className:".section-container",children:[e.jsx("div",{className:"image-box",role:"img","aria-label":"img"}),e.jsxs("div",{className:"right",children:[e.jsx("h3",{className:"title title-medium",children:t("about.title")}),e.jsx("p",{className:"text",children:t("about.text")}),e.jsx("p",{className:"highlight",children:t("about.highlight")}),e.jsx(f,{to:"/contact",children:e.jsx("button",{className:"btn",children:t("about.button")})})]})]})},Ls=()=>{var r;const{t,i18n:s}=g("about"),o=(r=s.language)==null?void 0:r.startsWith("ar");return e.jsx(le,{$rtl:o,dir:o?"rtl":"ltr",style:{border:"none"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"content ",children:[e.jsxs("div",{className:"row",children:[e.jsx("h3",{className:"title title-extra",children:t("inspiration.mission_title")}),e.jsx("div",{className:"text-box",children:e.jsx("p",{children:t("inspiration.mission_text")})})]}),e.jsxs("div",{className:"row",children:[e.jsx("h3",{className:"title title-extra",children:t("inspiration.vision_title")}),e.jsx("div",{className:"text-box",children:e.jsx("p",{children:t("inspiration.vision_text")})})]})]})})})},Cs=d.section`
  /* background: radial-gradient(circle, #0e281b 0%, #000000 100%); */
  background-color: var(--main-green);

  position: relative;
  color: var(--white);
  width: 100%;
  height: fit-content;

  .content {
    display: flex;
    justify-content: space-around;
  }
  .cards-grid {
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* justify-content: center; */
    /* justify-items: center; */
    /* align-content: center; */
    /* column-gap: 1.5rem; */
    /* row-gap: 1rem; */
    /* width: 100%; */
    display: flex;
  }
  .img-box {
    position: relative;
    border: 0.3rem solid var(--primary-300);

    width: fit-content;
    height: fit-content;
    display: flex;
    overflow: hidden;

    &:hover {
      .owner-name,
      .owner-title {
        opacity: 0;
      }
      .separator {
        position: absolute;
        top: -45%;
        width: 70%;
      }

      .card-text {
        position: absolute;
        top: 0%;
        opacity: 1;
        line-height: 1.2;
      }

      .owner-bio {
        opacity: 1;
        top: 10%;
      }

      .owner-img {
        transform: scale(1);
      }

      .overlay {
        opacity: 1;
      }
    }
  }
  .overlay {
    position: absolute;
    inset: 0;
    opacity: 0.85;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      /* Very dark at bottom */ rgba(0, 0, 0, 1) 15%,
      /* Still dark */ rgba(0, 0, 0, 0.75) 30%,
      /* Start fading fast */ rgba(0, 0, 0, 0.1) 55% /* Fully transparent */
    );
  }

  .owner-img {
    height: 52vh;
    transition: all 0.5s ease-in-out;
    transform: scale(1.06);
  }

  .img-text {
    position: absolute;
    top: 80%;

    /* left: 3%; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem;
  }
  .owner-title {
    font-size: 2.5rem;
    font-size: 1.1rem;
    transition: all 0.35s ease-in-out;
  }

  .owner-name {
    /* line-height: 1.3; */
    /* opacity: 0; */
    transition: all 0.4s ease-in-out;
    font-weight: 600;
    font-size: 1.35rem;
  }
  .owner-bio {
    position: absolute;
    opacity: 0;
    font-size: 1rem;
    top: 150%;
    transition: all 0.35s ease-in-out;
  }
  .separator {
    top: 90%;
    /* left: 3%; */
    margin: 15px 0;
    width: 40%;
    height: 5px;
    background-color: var(--primary-400);
    position: absolute;
    transition: all 0.35s ease-in-out;
  }

  @media (max-width: 62rem) {
  }
  @media (max-width: 48rem) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      font-size: 1.8rem;
    }
  }
`,K="/FLash-Investment/assets/owner-CH_vDWW1.png",Ss=()=>{const{t}=g("about");return e.jsx(Cs,{className:"section-container",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"title title-big",children:t("proposition.title")}),e.jsxs("div",{className:"content",children:[e.jsx(V,{owner_image:K,ownerName:t("proposition.founder1_name"),ownerTitle:t("proposition.founder1_title"),ownerBio:t("proposition.founder1_bio")}),e.jsx(V,{owner_image:K,ownerName:t("proposition.founder2_name"),ownerTitle:t("proposition.founder2_title"),ownerBio:t("proposition.founder2_bio")})]})]})})},zs="/FLash-Investment/assets/valuesSection-bg-Bou_7fnU.png",Es=d.section`
  position: relative;
  /* background: url(${zs}) center/cover no-repeat; */
  background-color: var(--main-green);
  color: var(--white);
  width: 100%;
  height: fit-content;
  /* background-color: var(--black); */

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
    column-gap: 1.5rem;
    row-gap: 1rem;
    width: 100%;
  }

  @media (max-width: 62rem) {
  }
  @media (max-width: 48rem) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      font-size: 1.35rem;
    }
  }
`,Ps=[e.jsx(ne,{}),e.jsx(Ae,{}),e.jsx(De,{}),e.jsx(Te,{})],$s=()=>{var n;const{t,i18n:s}=g("about"),o=t("values.items",{returnObjects:!0}),r=(n=s.language)==null?void 0:n.startsWith("ar");return e.jsx(Es,{className:"section-container",dir:r?"rtl":"ltr",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"content",children:[e.jsx("h2",{className:"title title-big",children:t("values.title")}),e.jsx("div",{className:"cards-grid",children:Array.isArray(o)&&o.map((a,i)=>e.jsx(dt,{icon:Ps[i]||e.jsx(ne,{}),title:a.title,text:a.text},i))})]})})})},_s=d.section`
  background-color: var(--primary-300);
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 6rem;
  h3 {
    color: var(--black);
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    text-align: center;
  }
  @media (max-width: 36rem) {
    padding: 6rem 6rem;
    h3 {
      font-size: 2rem;
    }
  }
`,Ms=()=>{var r;const{t,i18n:s}=g("about"),o=(r=s.language)==null?void 0:r.startsWith("ar");return e.jsx(_s,{dir:o?"rtl":"ltr",children:e.jsx("h3",{children:t("small.text")})})},As=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"about us",imgPath:Ns}),e.jsx(Fs,{}),e.jsx(Ss,{}),e.jsx(Ls,{}),e.jsx($s,{}),e.jsx(Ms,{}),e.jsx(ae,{})]}),Ds="/FLash-Investment/assets/clientspage-bg-CrW0Qral.jpg",Ts=d.section`
  background: var(--primary-300);
  text-align: center;
  padding: 2rem 5rem;
  border-bottom: 0.1rem solid var(--main-green);

  .logos-grid {
    margin: 3rem auto;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    column-gap: 8rem;
    row-gap: 2rem;
    transition: var(--transition);
    opacity: 1;
    max-width: 65rem;
    /* height: 70rem; */

    /*     display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px; */
  }

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
  .logos-grid img {
    height: 9.4rem;
    width: 9.4rem;
    object-fit: contain;
    transition: var(--transition);
  }

  .logos-grid img:hover {
    transform: scale(1.1);
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.625rem;
  }

  .pagination span {
    padding: 0.5rem 0.75rem;
    color: var(--black);
    background: white;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .pagination .active {
    background: var(--primary-600) !important;
  }
  .pagination span:active {
    transform: scale(0.95);
  }
  .pagination span:hover {
    background: var(--white);
  }

  @media (max-width: 52.5rem) {
    /* .logos-grid {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    } */
  }
  @media (max-width: 44rem) {
    /*  .logos-grid {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    } */
  }
  @media (max-width: 15.7rem) {
    /*     .pagination {
      gap: 0.525rem;
    }*/
    .pagination span {
      padding: 0.3rem 0.55rem;
    }
    /*  .logos-grid {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    } */
  }
`,D=20,Bs=()=>{const[t,s]=c.useState(1),o=Math.ceil(T.length/D),[r,n]=c.useState(!1),[a,i]=c.useState(5);c.useEffect(()=>{const m=()=>{window.innerWidth<480?i(3):window.innerWidth<768?i(5):i(7)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const p=m=>{m<1||m>o||(n(!0),setTimeout(()=>{s(m),n(!1)},300))},b=T.slice((t-1)*D,t*D);let v=Math.max(1,t-Math.floor(a/2)),j=v+a-1;j>o&&(j=o,v=Math.max(1,j-a+1)),j>o&&(j=o,v=Math.max(1,j-a+1));const h=[];for(let m=v;m<=j;m++)h.push(m);return e.jsxs(Ts,{className:"client-logos",children:[e.jsx("div",{className:`logos-grid ${r?"fade-out":"fade-in"}`,children:b.map((m,w)=>e.jsx("img",{src:m.src,alt:m.alt},w))}),e.jsxs("div",{className:"pagination",children:[e.jsx("span",{onClick:()=>p(1),children:"«"}),e.jsx("span",{onClick:()=>p(t-1),children:"‹"}),h.map(m=>e.jsx("span",{className:m===t?"active":"",onClick:()=>p(m),children:m},m)),e.jsx("span",{onClick:()=>p(t+1),children:"›"}),e.jsx("span",{onClick:()=>p(o),children:"»"})]})]})},Rs=()=>{const{t}=g("clients");return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:t("clients.pageTitle"),imgPath:Ds}),e.jsx(Bs,{}),e.jsx(k,{quote:t("clients.inspirationQuote")})]})},Os="/FLash-Investment/assets/contactpage-bg-DMtq5kL3.jpg",O=d.section`
  background-color: var(--main-green);
  padding: 3.75rem 2.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-title {
    color: var(--primary-400);
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    align-self: flex-start;
    text-transform: uppercase;
  }

  .contact-form {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    width: 80vw;
  }

  .left-fields,
  .right-fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-form input,
  .contact-form textarea {
    background: transparent;
    color: var(--white);
    outline: none;
    border: none;
    border-bottom: 2px solid var(--primary-400);
    padding: 0.625rem 0.3125rem;
    font-size: 0.875rem;
    width: 100%;
    transition: var(--transition);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
  }

  .contact-form textarea {
    border: 2px solid var(--primary-400);
    border-radius: var(--border-radius);
    resize: vertical;
    width: 100%;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: rgba(201, 201, 201, 0.7);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .contact-form button {
    align-self: center;
  }
  @media (max-width: 48rem) {
    .contact-form {
      flex-direction: column;
    }
  }

  /* Make the date input feel clickable and adapt to dark bg */
  .contact-form input[type='date'] {
    cursor: pointer;
    color-scheme: dark; /* dark picker in supported browsers */
  }

  /* Text inside the date field (WebKit) */
  .contact-form input[type='date']::-webkit-datetime-edit {
    color: var(--white);
  }

  /* Hide spinners on some platforms (optional) */
  .contact-form input[type='date']::-webkit-inner-spin-button {
    display: none;
  }

  /* Calendar icon styling (Chromium/WebKit) */
  .contact-form input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    /* Turn the default dark icon to light to match your dark background */
    filter: invert(0);
    opacity: 0.9;
  }

  /* Firefox date icon button */
  .contact-form input[type='date']::-moz-focus-inner {
    border: 0;
  }
  .contact-form input[type='date']::-moz-calendar-picker-indicator {
    filter: invert(1);
  }

  /* Optional: clearer hover/focus for all inputs */
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
    box-shadow: 0 2px 0 0 var(--white);
  }

  /* Upload box look */
  .file-upload-box {
    border: 2px dashed var(--primary-400);
    border-radius: var(--border-radius);
    background-color: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    text-align: center;
    font-size: 0.95rem;
    color: var(--white);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 140px;
    position: relative;
  }

  /* Drag visual feedback */
  .file-upload-box.drag-over {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: var(--white);
  }

  /* Hide the native input but keep it interactive */
  .file-upload-box input[type='file'] {
    opacity: 0;
    position: absolute;
    inset: 0; /* top/right/bottom/left: 0 */
    cursor: pointer;
  }

  /* Text color to your brand beige */
  .file-upload-text {
    pointer-events: none;
    color: #e7e1ad;
    font-weight: 500;
  }

  /* Filename + remove link */
  .file-meta {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: #e7e1ad;
  }

  .file-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .file-remove {
    background: transparent;
    border: 1px solid #e7e1ad;
    color: #e7e1ad;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    cursor: pointer;
    transition: var(--transition);
  }

  .file-remove:hover {
    background: #e7e1ad;
    color: var(--main-green); /* contrasts your dark bg */
  }

  /* (Optional) small helper text style if you add it later */
  .file-hint {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: rgba(231, 225, 173, 0.8);
  }

  /* Mobile */
  @media (max-width: 48rem) {
    .file-upload-box {
      min-height: 120px;
      padding: 1.5rem;
    }
  }

  .btn-container {
    align-self: center;
    padding-bottom: 4rem;
  }
  .back-btn {
    padding: 0;
    background-color: transparent;
    color: var(--primary-300);
    text-decoration: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    transition: all 0.3s;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      border: none;
      border-bottom: 1px solid transparent;
    }
  }
`,Ws=()=>e.jsx(O,{className:"contact-section",children:e.jsxs("div",{className:"container",children:[e.jsx(f,{className:"btn-container",to:"/contact",children:e.jsx("button",{className:"back-btn",children:"go back →"})}),e.jsx("h2",{className:"form-title",children:"GET IN TOUCH"}),e.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[e.jsx("input",{type:"hidden",name:"access_key",value:"ee1fbee7-4e02-4817-9ac5-c090294e2761"}),e.jsxs("div",{className:"left-fields",children:[e.jsx("input",{type:"text",name:"fullName",placeholder:"FULL NAME*",required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"EMAIL ADDRESS*",required:!0}),e.jsx("input",{type:"tel",name:"phone",placeholder:"MOBILE NUMBER*",required:!0}),e.jsx("input",{type:"text",name:"jobTitle",placeholder:"JOB TITLE (OPTIONAL)"}),e.jsx("input",{type:"text",name:"companyName",placeholder:"COMPANY NAME"})]}),e.jsxs("div",{className:"right-fields",children:[e.jsx("textarea",{name:"message",placeholder:"MESSAGE",rows:"15"}),e.jsx("button",{className:"btn",type:"submit",children:"SEND"})]})]})]})}),Hs=()=>{const t=c.useRef(null),[s,o]=c.useState(""),[r,n]=c.useState(!1),a=h=>{var w;const m=(w=h.target.files)==null?void 0:w[0];m&&o(m.name)},i=h=>{h.preventDefault(),h.stopPropagation(),n(!0)},p=h=>{h.preventDefault(),h.stopPropagation(),n(!0)},b=h=>{h.preventDefault(),h.stopPropagation(),n(!1)},v=h=>{var y;h.preventDefault(),h.stopPropagation(),n(!1);const m=(y=h.dataTransfer.files)==null?void 0:y[0];if(!m)return;const w=new DataTransfer;w.items.add(m),t.current&&(t.current.files=w.files),o(m.name)},j=()=>{t.current&&(t.current.value=null),o("")};return e.jsx(O,{className:"contact-section",children:e.jsxs("div",{className:"container",children:[e.jsx(f,{className:"btn-container",to:"/contact",children:e.jsx("button",{className:"back-btn",children:"go back →"})}),e.jsx("h2",{className:"form-title",children:"wanna be a part of the crew?"}),e.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",encType:"multipart/form-data",children:[e.jsx("input",{type:"hidden",name:"access_key",value:"ee1fbee7-4e02-4817-9ac5-c090294e2761"}),e.jsxs("div",{className:"left-fields",children:[e.jsx("input",{type:"text",name:"fullName",placeholder:"FULL NAME*",required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"EMAIL ADDRESS*",required:!0}),e.jsx("input",{type:"tel",name:"phone",placeholder:"MOBILE NUMBER*",required:!0})]}),e.jsxs("div",{className:"right-fields",children:[e.jsxs("label",{htmlFor:"cvUpload",className:`file-upload-box ${r?"drag-over":""}`,onDragEnter:i,onDragOver:p,onDragLeave:b,onDrop:v,children:[e.jsx("input",{ref:t,id:"cvUpload",name:"cv",type:"file",accept:".pdf,.doc,.docx",onChange:a,"aria-label":"Upload your CV"}),e.jsx("span",{className:"file-upload-text",children:s?"File selected":"Choose a file or drag it here"})]}),s&&e.jsxs("div",{className:"file-meta",children:[e.jsx("span",{className:"file-name",children:s}),e.jsx("button",{type:"button",className:"file-remove",onClick:j,children:"Remove"})]}),e.jsx("button",{className:"btn",type:"submit",children:"SEND"})]})]})]})})},Vs=()=>{const{t}=g("contact");return e.jsxs(k,{children:[e.jsx("h2",{className:"newsletter-title",children:t("contact.follow_us")}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{target:"_blank",className:"facebook",href:"https://www.facebook.com/profile.php?id=61575004481629",children:e.jsx(J,{})}),e.jsx("a",{target:"_blank",className:"whatsapp",href:"https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook",children:e.jsx(Q,{})}),e.jsx("a",{target:"_blank",className:"instagram",href:"https://www.instagram.com/ignitcrew/",children:e.jsx(X,{})}),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",className:"linkedin",href:"https://www.linkedin.com/company/108218609/admin/dashboard/",children:e.jsx(Z,{})})]})]})},Gs=()=>{const t=c.useRef(null),s=()=>{var o;(o=t.current)!=null&&o.showPicker&&t.current.showPicker()};return e.jsx(O,{className:"contact-section",children:e.jsxs("div",{className:"container",children:[e.jsx(f,{className:"btn-container",to:"/contact",children:e.jsx("button",{className:"back-btn",children:"go back →"})}),e.jsx("h2",{className:"form-title",children:"Reserve a Site Visit"}),e.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[e.jsx("input",{type:"hidden",name:"access_key",value:"ee1fbee7-4e02-4817-9ac5-c090294e2761"}),e.jsxs("div",{className:"left-fields",children:[e.jsx("input",{type:"text",name:"fullName",placeholder:"FULL NAME*",required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"EMAIL ADDRESS*",required:!0}),e.jsx("input",{type:"tel",name:"phone",placeholder:"MOBILE NUMBER*",required:!0}),e.jsx("input",{ref:t,type:"date",name:"date",required:!0,onClick:s,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s())}})]}),e.jsxs("div",{className:"right-fields",children:[e.jsx("textarea",{name:"message",placeholder:"MESSAGE",rows:"15"}),e.jsx("button",{className:"btn",type:"submit",children:"Book Now"})]})]})]})})},Us=d.section`
  background: var(--main-green);
  color: var(--white);
  /* height: 15rem; */
  padding: 2rem;
  /* height: fit-content; */
  /* padding: 4rem 4rem 2rem; */

  .contact-top {
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
    /* transform: translateY(-8rem); */
    /* font-family: 'Proxima-Nova', sans-serif; */
    font-weight: 600;
    padding: 6rem 0;
  }

  .btn-container {
    width: 80%;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 0;
  }
  .btn-contact {
    width: 100%;
    height: 6rem;
    font-size: 1.5rem;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .divider {
    width: 1px;
    height: 5rem;
    background: var(--white);
    opacity: 0.2;
    margin: 0 1rem;
  }

  @media (max-width: 44rem) {
    height: 100%;
    .contact-top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: none;
    }

    .divider {
      display: none;
    }
    .contact-circle {
      width: 5rem;
      height: 5rem;
      font-size: 1.8rem;
    }
  }
`,qs=()=>{const{t}=g("contact");return e.jsx(Us,{children:e.jsxs("div",{className:"section-container",children:[e.jsx("h3",{className:"title",children:t("contact.select.title")}),e.jsxs("div",{className:"contact-top flex-center",children:[e.jsx("div",{className:"contact-item",children:e.jsx(f,{className:"btn-container",to:"/contact/contact-us",children:e.jsx("button",{className:"btn btn-contact",type:"button",children:t("contact.select.buttons.contact_us")})})}),e.jsx("div",{className:"divider"}),e.jsx("div",{className:"contact-item",children:e.jsx(f,{className:"btn-container",to:"/contact/site-visit",children:e.jsx("button",{className:"btn btn-contact",type:"button",children:t("contact.select.buttons.site_visit")})})}),e.jsx("div",{className:"divider"}),e.jsx("div",{className:"contact-item",children:e.jsx(f,{className:"btn-container",to:"/contact/join-us",children:e.jsx("button",{className:"btn btn-contact",type:"button",children:t("contact.select.buttons.join_us")})})})]})]})})},Ks=()=>{const{t}=g("contact");return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:t("contact.contact_starter"),imgPath:Os}),e.jsx(se,{}),e.jsx(Vs,{})]})},Ys="/FLash-Investment/assets/projects-bg-CV0cRvjP.jpg",Y=[{img:ce,key:"projects.project1",category:"new-cairo",link:"/projects/proj1"},{img:me,key:"projects.project2",category:"new-capital",link:"/projects/proj2"},{img:de,key:"projects.project3",category:"north-coast",link:"/projects/proj3"},{img:ge,key:"projects.project4",category:"ain-sokhna",link:"/projects/proj4"},{img:pe,key:"projects.project5",category:"sheikh-zayed",link:"/projects/proj5"}],Js=()=>{const{t}=g("projects"),s=["all","new-cairo","new-capital","sheikh-zayed","6th-october","north-coast","ain-sokhna","maadi","heliopolis"],o=c.useMemo(()=>s.map(i=>({value:i,label:t(`projects.categories.${i}`)})),[t]),[r,n]=c.useState("all"),a=r==="all"?Y:Y.filter(i=>i.category.toLowerCase()===r);return e.jsx(he,{className:"section-container",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"header",children:[e.jsx("h2",{className:"title title-medium",children:t("projects.sectionTitle")}),e.jsx("select",{className:"category-select",value:r,onChange:i=>n(i.target.value),children:o.map(i=>e.jsx("option",{value:i.value,children:i.label},i.value))})]}),e.jsx(ie,{cardsData:a,gridRows:"big-screen grid"})]})})},Qs=()=>{const{t}=g("projects");return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:t("projects.pageTitle"),imgPath:Ys}),e.jsx(Js,{}),e.jsx(k,{quote:t("projects.inspirationQuote")})]})},Xs=d.div`
  background: #000;
  padding: 2rem;
  text-align: center;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .tag-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-bottom: 1rem;
  }

  .content {
    height: 0;
  }
  .tag-dot {
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    &::before {
      content: '';
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 50%;
      font-size: 2rem;
      background-color: var(--primary-400);
      position: absolute;
      /* top: 50%; */
      left: -1.5rem;
    }
  }

  .slider-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
  }

  .main-image {
    width: auto;
    height: 25rem;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  /*  .thumbnails {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  } */

  .thumbnails img {
    width: 100%;
    border-radius: 0.5rem;
    height: 6rem;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .thumbnails img.active {
    border-color: orange;
  }

  .arrows {
    display: flex;
    gap: 6rem;
    justify-content: center;
    align-items: center;
  }
  .arrow {
    background: none;
    color: var(--primary-400);
    font-size: 2rem;
    /* position: absolute; */
    top: 50%;
    /* transform: translateY(-200%); */
    cursor: pointer;
    z-index: 1;
    border: none;
  }

  .arrow.left {
    left: 0;
  }

  .arrow.right {
    right: 0;
  }
  .project-details {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    gap: 1rem;
    color: var(--white);
    font-family: 'Rubik';
  }
  .details-title {
    color: var(--primary-400);
  }
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: auto;
  }

  .main-image {
    width: 100%;
    border-radius: 8px;
  }

  .thumbnails {
    margin-top: 1rem;
    width: 100%;
  }

  .thumb {
    width: 100%;
    height: auto;
    border-radius: 4px;
    opacity: 0.6;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: opacity 0.3s, border 0.3s;
  }

  .thumb.active {
    opacity: 1;
    border: 2px solid orange;
  }
`,L=({images:t,tags:s,desc:o})=>e.jsxs(Xs,{children:[e.jsx(F,{}),e.jsx(ft,{tags:s}),e.jsx(xt,{images:t}),e.jsxs("div",{className:"project-details",children:[e.jsx("h2",{className:"details-title",children:"Project details"}),e.jsx("p",{children:o})]})]}),C="/FLash-Investment/assets/img1-D_HFAgcb.jpg",S="/FLash-Investment/assets/img2-BCI5aPPr.jpg",z="/FLash-Investment/assets/img3-BpbFp77A.jpg",E="/FLash-Investment/assets/img4-DIN8IO8-.jpg",P="/FLash-Investment/assets/img5-COfP7kjg.jpg",$="/FLash-Investment/assets/img6-DhCDc6rL.jpg",_="/FLash-Investment/assets/img7-YE5vwpvW.jpg",Zs=[C,S,z,E,P,$,_],en=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],tn="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",on=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{images:Zs,tags:en,desc:tn}),e.jsx(k,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),sn=[C,S,z,E,P,$,_],nn=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],rn="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",an=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{images:sn,tags:nn,desc:rn}),e.jsx(k,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),ln=[C,S,z,E,P,$,_],cn=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],mn="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",dn=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{images:ln,tags:cn,desc:mn}),e.jsx(k,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),gn=[C,S,z,E,P,$,_],pn=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],hn="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",un=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{images:gn,tags:pn,desc:hn}),e.jsx(k,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),xn=[C,S,z,E,P,$,_],fn=["BISKREM","NORTH COAST, 2024","ACTIVATION EVENT","FMCG"],bn="End of Summer with Biscream in the North Coast ☀️ As summer says goodbye, we celebrated with Biscream in the North Coast—full of games, laughter, and delicious treats! From exciting competitions to those sweet moments of joy, it was a perfect way to wrap up the season! 🎉",vn=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{images:xn,tags:fn,desc:bn}),e.jsx(k,{quote:"SUMMER WITH BISCREAM IN THE NORTH COAST"})]}),jn=Be([{path:"/",element:e.jsx(Et,{}),errorElement:e.jsx($t,{}),children:[{index:!0,element:e.jsx(ks,{})},{path:"about",element:e.jsx(As,{})},{path:"projects",element:e.jsx(Qs,{})},{path:"/projects/proj1",element:e.jsx(on,{})},{path:"/projects/proj2",element:e.jsx(un,{})},{path:"/projects/proj3",element:e.jsx(dn,{})},{path:"/projects/proj4",element:e.jsx(vn,{})},{path:"/projects/proj5",element:e.jsx(an,{})},{path:"clients",element:e.jsx(Rs,{})},{path:"contact",element:e.jsx(Ks,{}),children:[{index:!0,element:e.jsx(qs,{})},{path:"/contact/Contact-Us",element:e.jsx(Ws,{})},{path:"/contact/site-visit",element:e.jsx(Gs,{})},{path:"/contact/join-us",element:e.jsx(Hs,{})}]}]}]),wn=()=>e.jsx(Re,{router:jn}),yn=()=>(c.useEffect(()=>{(async()=>{const o=Date.now(),r=document.getElementById("hero-video");r&&await new Promise(i=>{if(r.readyState>=3)return i();r.addEventListener("canplaythrough",i,{once:!0})});const n=Date.now()-o,a=Math.max(3e3-n,0);setTimeout(()=>{const i=document.getElementById("initial-loader");i&&(i.style.opacity="0",i.style.pointerEvents="none",i.style.transition="opacity 0.4s ease",setTimeout(()=>{i.remove()},500))},a)})()},[]),e.jsx(wn,{})),ue=localStorage.getItem("lng")||"en",xe=t=>{const s=t==="ar"?"rtl":"ltr";document.documentElement.setAttribute("dir",s),document.documentElement.setAttribute("lang",t)};re.use(Oe).use(We).init({lng:ue,fallbackLng:"en",ns:["common","home","about","projects","contact","clients"],defaultNS:"common",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1},react:{useSuspense:!0}});xe(ue);re.on("languageChanged",t=>{localStorage.setItem("lng",t),xe(t)});He.createRoot(document.getElementById("root")).render(e.jsx(Ve.StrictMode,{children:e.jsx(yn,{})}));
