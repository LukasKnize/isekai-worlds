<template>
    <div class="head">
            <div class="xp"><p>Level: <span id="level">0</span></p></div>
            <div class="money"><img src="@/assets/coin_05d.png" alt=""><p id="money">100</p></div>
            <button onclick="mainMenu()"><i class="fas fa-bars"></i></button>
        </div>
</template>

<script>
export default {
    name: "heading",
}
</script>