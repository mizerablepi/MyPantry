import{r as o,j as e}from"./app-Q1ZPRlkL.js";import{M as p}from"./MainLayout-QVoFX1ZV.js";import"./Dropdown-JwFNPbVN.js";import"./transition-8KhPBaBm.js";async function b(s,a){return await(await fetch(`/api/autocomplete?string=${s}`,{signal:a})).json()}function f({token:s,errors:a}){const[n,m]=o.useState(""),[d,u]=o.useState([]),[r,c]=o.useState(!1);console.log(r),o.useEffect(()=>{const t=new AbortController,{signal:l}=t;return b(n,l).then(i=>u(i)).catch(i=>{}),()=>{t.abort()}},[n]);const x=t=>{const l=t.target.value;!d.some(h=>l===h.name)&&l!=""?c(!1):c(!0)};return e.jsx("div",{className:"px-6 py-8",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"bg-white rounded-3xl p-8 mb-5",children:e.jsxs("form",{action:"/pantry",method:"post",className:"flex flex-col items-start",children:[e.jsx("input",{type:"hidden",name:"_token",value:s}),e.jsx("label",{htmlFor:"name",className:"font-bold",children:"Item Name:"}),e.jsx("input",{id:"name",name:"name",list:"items",className:"mb-2 border border-gray-400 rounded-lg",value:n,onChange:t=>{m(t.target.value),x(t)},autoComplete:"off"}),e.jsx("div",{className:`text-red-600 ${r?"hidden":"block"}`,children:"Please select a value from the list only"}),e.jsx("datalist",{id:"items",children:d.map(t=>e.jsx("option",{value:t.name,children:t.name},t.name))}),e.jsx("label",{htmlFor:"amount",className:"font-bold",children:"Qty:"}),e.jsx("input",{type:"number",id:"amount",name:"amount",className:"mb-2 border border-gray-400 rounded-lg"}),Object.keys(a).length!==0?a.map(t=>e.jsx("div",{className:"text-sm text-red-500 mb-2",children:t})):"",e.jsx("button",{type:"submit",disabled:!r,className:"h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm transition font-bold",children:"Add +"})]})})})})}function N({token:s,errors:a}){return e.jsx(e.Fragment,{children:e.jsx(p,{inner:e.jsx(f,{token:s,errors:a})})})}export{N as default};
