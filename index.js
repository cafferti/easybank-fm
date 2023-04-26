let gphones = document.getElementById("phone");
let removelement = gphones.style.display;
function active(){
    let marginne = document.getElementById("nextG")
    if(gphones.style.display === removelement){
        gphones.style.display = "none"
        marginne.style.paddingTop = "20.7rem"
    }
    else{gphones.style.display = removelement;
        marginne.style.paddingTop = "0rem"}

}