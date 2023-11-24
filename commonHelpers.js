(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();const l="https://api.thecatapi.com/v1",u="live_aIticapc5yMKLwBj7F4yaqx5l1ORt0AS6YUa15623BhG0txC4b6GwSarHvE9PX3u";function d(){return fetch(`${l}/breeds`,{headers:{"x-api-key":u}}).then(e=>{if(!e.ok)throw new Error(e.statusText||"Error");return e.json()})}function f(r){const e="/images/search",c=new URLSearchParams({api_key:u,breed_ids:r});return fetch(`${l}${e}?${c}`).then(o=>{if(!o.ok)throw new Error(o.statusText||"Error");return o.json()})}const i={selectBreed:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info")};d().then(r=>{i.selectBreed.insertAdjacentHTML("beforeend",p(r))}).catch(r=>console.log(r));i.selectBreed.addEventListener("change",h);console.dir(i.selectBreed);function h(r){r.currentTarget.value&&f(r.currentTarget.value).then(e=>{console.log(e),console.log(a(e[0])),i.catInfo.innerHTML=a(e[0])}).catch(e=>console.log(e))}function a(r){const{breeds:e,url:c}=r,{name:o,description:t,temperament:n}=e[0];return console.log(n),`
      <img src="${c}" alt="${o}/>
      <div>
        <h2>${o}</h2>
        <p>${t}</p>
        <p><b>Temperament:</b ${n}</p>
      </div>
      `}function p(r){return r.map(({id:e,name:c})=>`
        <option value="${e}">${c}</option>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
