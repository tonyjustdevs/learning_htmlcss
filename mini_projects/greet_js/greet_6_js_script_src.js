document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").addEventListener("submit", function(event){
    let name_var = document.querySelector("#name_id").value;
    alert("its a popup, " + name_var + "🧨!!");
    event.preventDefault()
})})

