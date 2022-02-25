<template>
     <div class="menu show" id="mainMenu">
            <button class="menuButton">Save</button>
            <button class="menuButton" onclick="stats()">Stats</button>
            <button class="menuButton" onclick="lore()">Lore</button>
            <button class="menuButton" onclick="credits()">Credits</button>
            <button class="menuButton" onclick="about()">About</button>
        </div>
</template>

<script>
export default {
    name: "mainMenu",
}
</script>