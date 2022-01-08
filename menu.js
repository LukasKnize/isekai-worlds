function mainMenu() {
    document.getElementById("mainMenu").classList.toggle("show");
    if(document.getElementById("credits").classList.contains("show")){
        document.getElementById("credits").classList.toggle("show");
    }

    if(document.getElementById("about").classList.contains("show")){
        document.getElementById("about").classList.toggle("show");
    }
}

function shop() {
    document.getElementById("shop").classList.toggle("show");
}

function quests() {
    document.getElementById("quests").classList.toggle("show");
}

function actions() {
    document.getElementById("actions").classList.toggle("show");
}

function credits() {
    document.getElementById("credits").classList.toggle("show");
}

function about() {
    document.getElementById("about").classList.toggle("show");
}

window.addEventListener("load", () =>{
    console.log("%cWhat are you doing there? and be honest!", "color:blue");
    console.log("\n");
});

let money = 0;

function clicked() {
    money++;
    document.getElementById("money").textContent = money;
}

function bossFight(){
    document.getElementById("bossFight").classList.toggle("show");
}
