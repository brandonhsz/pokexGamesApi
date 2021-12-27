import{j as c,F as d,a as t,T as f,B as g,n as l,r as k,C as x,b as y,c as m,k as w,R as b,d as v}from"./vendor.66dd7f4f.js";const C=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};C();const u={title:"Welcome To PXG API",links:[{name:"All Pokemon",link:"https://pokeapi.co/api/v2/pokemon",description:"Lista de todos los pokemones de nuestra base de datos",search:!1},{name:"Search Pokemon",link:"https://pxg-api.herokuapp.com/api/pokemon/charizard",description:"Busca pokemons en especifico",search:!0}]},A=({setPokemon:r,pokemon:n})=>c(d,{children:[t(f,{id:"filled-basic",label:"Search",variant:"filled",onChange:i=>r(i.target.value)}),t(g,{sx:{margin:"0.5rem"},variant:"contained",color:"primary",onClick:()=>window.open(`https://pxg-api.herokuapp.com/api/pokemon/${n}`,"_blank"),children:"Search"})]}),P=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`,I=l.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
`,L=({link:r,name:n,description:i,search:a})=>{const e=(p=1,h=898)=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Math.floor(Math.random()*(h-p+1))+p}.png`,[o,s]=k.exports.useState("");return t(d,{children:c(x,{sx:{maxWidth:345,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",margin:"1rem"},onClick:()=>a?null:window.open("https://pxg-api.herokuapp.com/api/pokemon","_blank"),children:[t(I,{src:e(),alt:"All Pokemons"}),c(y,{children:[t(m,{gutterBottom:!0,variant:"h5",component:"div",sx:{textAlign:"center"},children:n}),t(m,{variant:"body2",color:"text.secondary",sx:{textAlign:"center"},children:i})]}),a?t(A,{pokemon:o,setPokemon:s}):null]})})},S=()=>{const{links:r}=u;return console.log(r),t(P,{children:r.map(n=>t(L,{name:n.name,link:n.link,description:n.description,search:n.search},n.name+n.link))})},j=l.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`,T=w`
  from {
    width: 0;
  }
  to {
    width: 20rem;
  }
`,B=l.h1`
	color: #ffffff;
	width: 16em;
	margin: 1rem;
	border-right: 1px solid rgba(255, 255, 255, 0.75);
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	transform: translateY(-50%);

	animation: ${T} 2s steps(70) 1s 1 normal both, blinkTextCursor 500ms steps(70) infinite normal;
`,M=()=>{const{title:r}=u;return t(j,{children:t(B,{children:r})})},O=()=>c(d,{children:[t(M,{}),t(S,{})]});b.render(t(v.StrictMode,{children:t(O,{})}),document.getElementById("root"));
