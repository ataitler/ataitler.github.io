const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


/* Cloudflare Web Analytics */
(function () {
  const script = document.createElement("script");
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({
    token: "e13788622a664b449850ad9589c352c3"
  }));
  script.async = true;
  document.head.appendChild(script);
})();
