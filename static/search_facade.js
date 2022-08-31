var baseUrl = document.querySelector("meta[name='base']").getAttribute("content");
if (baseUrl.slice(-1) == "/") {
    baseUrl = baseUrl.slice(0, -1);
}
var sha256='f0d8483e2a6f244c830fb75f3f593337ad4ee9c509fa5ee630b63ab86339a322';
var sha384='Rlj4K5jjLvHBI8PY8deIstHEL3yP4u5fvAfPZejNUqvFUc1Y9gD+liL+c9by9bp5';
function loadSearchNow() {
    var loadSearch = document.createElement('script');
    loadSearch.src = baseUrl + '/search_bundle.min.js?h=' + sha256;
    loadSearch.setAttribute('integrity', 'sha384-' + sha384);
    document.head.appendChild(loadSearch);
    document.getElementById('searchinput').onclick = '';
}
window.onload = function() {
    document.getElementById('searchinput').onclick = function() { return loadSearchNow() }
};
