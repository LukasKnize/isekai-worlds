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

