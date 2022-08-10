const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;const n=()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};t.addEventListener("click",(()=>o=setInterval(n,1e3))),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.028c7a0d.js.map
