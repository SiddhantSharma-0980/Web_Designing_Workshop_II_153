function changeBackground(){
    
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}
function changeHeading(){

    let name = document.getElementById("nameInput").value;

    if (name==="") {
        document.getElementById("heading").innerText =
        "Welcome to JavaScript Lab";
    }
    
    else{
        document.getElementById("heading").innerText =
        "Hello,"+name+"!";
    }
    
}
function changeParagraph() {

    document.getElementById("para").innerText =
    "The paragraph text has been changed using JavaScript!";
}
function changeFont() {

    document.getElementById("para").style.fontSize = "20px";
}
function resetAll() {

    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("heading").innerText =
    "Welcome to JavaScript Lab";
    document.getElementById("para").innerText =
    "This is a sample paragraph. JavaScript events can dynamically change content.";
    document.getElementById("para")
    .style.fontSize = "16px";
    document.getElementById("nameInput").value = " ";

}