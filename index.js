function generate(event){
    event.preventDefault();
    const search= document.getElementById("search").value;
    var toSearch= "https://www.google.com/search?q=";
    toSearch+=search;
    go(toSearch);
}
function go(url){
    window.location=(url);
}