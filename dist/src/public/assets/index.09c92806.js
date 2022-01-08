var x=Object.defineProperty;var y=(n,e,r)=>e in n?x(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var p=(n,e,r)=>(y(n,typeof e!="symbol"?e+"":e,r),r);import{j as c,F as d,a as t,T as b,B as w,n as a,r as v,C as u,b as f,c as m,k as h,R as C,d as A}from"./vendor.66dd7f4f.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};P();const g={title:"Welcome To PXG API",links:[{name:"All Pokemon",link:"https://pxg-api.herokuapp.com/api/pokemon/",description:"Lista de todos los pokemones de nuestra base de datos",search:!1},{name:"Search Pokemon",link:"",description:"Busca pokemons en especifico",search:!0}]},I=["Nombre","Numero de pokedex","Clan","Tipo"],L=({setPokemon:n,pokemon:e})=>c(d,{children:[t(b,{id:"filled-basic",label:"Search",variant:"filled",onChange:r=>n(r.target.value)}),t(w,{sx:{margin:"0.5rem"},variant:"contained",color:"primary",onClick:()=>window.open(`https://pxg-api.herokuapp.com/api/pokemon/${e}`,"_blank"),children:"Search"})]}),j=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`,N=a.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
`;class k{}p(k,"getArandomNumber",(e=1,r=898)=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(Math.random()*(r-e+1))+e}.png`);const S=({link:n,name:e,description:r,search:s})=>{const[o,i]=v.exports.useState("");return t(d,{children:c(u,{sx:{maxWidth:345,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",margin:"1rem"},onClick:()=>s?null:window.open(n,"_blank"),children:[t(N,{src:k.getArandomNumber(),alt:"All Pokemons"}),c(f,{children:[t(m,{gutterBottom:!0,variant:"h5",component:"div",sx:{textAlign:"center"},children:e}),t(m,{variant:"body2",color:"text.secondary",sx:{textAlign:"center"},children:r})]}),s?t(L,{pokemon:o,setPokemon:i}):null]})})},T=()=>{const{links:n}=g;return console.log(n),t(j,{children:n.map(e=>t(S,{name:e.name,link:e.link,description:e.description,search:e.search},e.name+e.link))})},B=a.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`,O=h`
  from {
    width: 0;
  }
  to {
    width: 20rem;
  }
`,$=a.h1`
	color: #ffffff;
	width: 16em;
	margin: 1rem;
	border-right: 1px solid rgba(255, 255, 255, 0.75);
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	transform: translateY(-50%);

	animation: ${O} 2s steps(70) 1s 1 normal both, blinkTextCursor 500ms steps(70) infinite normal;
`,M=()=>{const{title:n}=g;return t(B,{children:t($,{children:n})})},F=a.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`,D=h`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`,E=a(F)`
  color: #fff;
  animation: ${D} 4s steps(140) 1s 1 normal both;
`,R=()=>t(E,{children:t(u,{children:c(f,{children:[t(m,{gutterBottom:!0,variant:"h6",component:"p",children:"En el componente de busqueda es posible introducir los siguientes parametros:"}),t("ul",{children:I.map(n=>t("li",{children:n},n))})]})})}),W=()=>c(d,{children:[t(M,{}),t(T,{}),t(R,{})]});C.render(t(A.StrictMode,{children:t(W,{})}),document.getElementById("root"));
