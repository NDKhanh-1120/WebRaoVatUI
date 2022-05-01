var createBT = document.getElementById("create-bt");
var modal = document.getElementById("modal")
createBT.addEventListener("click", function(e) {
    modal.style.display = "flex";
})
modal.addEventListener("click", function(){
    modal.style.display = "none";
})

var modalForm = document.getElementById("modal-form")
modalForm.addEventListener("click", function(e){
    e.stopPropagation();
})
