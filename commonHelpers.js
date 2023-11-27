(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i="https://api.thecatapi.com/v1",a="live_aIticapc5yMKLwBj7F4yaqx5l1ORt0AS6YUa15623BhG0txC4b6GwSarHvE9PX3u";function l(){return fetch(`${i}/breeds`,{headers:{"x-api-key":a}}).then(t=>{if(!t.ok)throw new Error(t.statusText||"Error");return t.json()})}function u(o,t){t.loader.classList.remove("hidden"),t.catInfo.classList.add("hidden");const s="/images/search",c=new URLSearchParams({api_key:a,breed_ids:o});return fetch(`${i}${s}?${c}`).then(e=>{if(!e.ok)throw new Error(e.statusText||"Error");return e.json()})}const n={selectBreed:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};l().then(o=>{n.selectBreed.insertAdjacentHTML("beforeend",m(o)),n.selectBreed.classList.remove("hidden"),n.loader.classList.add("hidden")}).catch(o=>{n.loader.classList.add("hidden"),n.error.classList.remove("hidden")});n.selectBreed.addEventListener("change",f);function f(o){o.currentTarget.value&&u(o.currentTarget.value,n).then(t=>{n.catInfo.innerHTML=h(t[0]),n.catInfo.classList.remove("hidden"),n.loader.classList.add("hidden")}).catch(t=>{console.log(t),n.selectBreed.classList.add("hidden"),n.loader.classList.add("hidden"),n.error.classList.remove("hidden")})}function h(o){const{breeds:t,url:s}=o,{name:c,description:e,temperament:r}=t[0];return console.log(r),`
        <img src="${s}" alt="${c}" width="500">
        <div class="cat-description">
            <h2>${c}</h2>
            <p>${e}</p>
            <p><b>Temperament:</b> ${r}</p>
        </div>
        `}function m(o){return o.map(({id:t,name:s})=>`
        <option value="${t}">${s}</option>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map