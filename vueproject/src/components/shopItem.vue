<template>
  <div class="shopItem" @click="buy">
    <img :src="require(`@/assets/${image}`)" alt="" />
    <div class="shopItemTex">
      <p class="shopItemName">{{ name }}</p>
      <p class="shopItemDesc">{{ desc }}</p>
    </div>
    <p class="price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "shopItem",
  props: {
    image: String,
    name: String,
    desc: String,
    index: Number,
  },
  methods: {
    //následující kód jsem si vypujčil zde: https://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k
    abbrNum(number, decPlaces) {
      decPlaces = Math.pow(10, decPlaces);

      var abbrev = ["k", "m", "b", "t"];

      for (var i = abbrev.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3);

        if (size <= number) {
          number = Math.round((number * decPlaces) / size) / decPlaces;

          if (number == 1000 && i < abbrev.length - 1) {
            number = 1;
            i++;
          }

          number += abbrev[i];

          break;
        }
      }

      return number;
    },

    buy() {
        if (this.$store.state.money[this.$store.state.position] >= this.$store.state.shopitems[this.index].price && this.index <= 4) {
            this.$emit("moneyChange", this.$store.state.shopitems[this.index].price * -1)
            this.$store.dispatch("buyUpgrade", this.index);
        }else if (this.$store.state.money[this.$store.state.position] >= this.$store.state.shopitems[this.index].price && this.index <= 7 && this.index >= 5) {
            this.$emit("moneyChange", this.$store.state.shopitems[this.index].price * -1)
            this.$store.dispatch("buyPotion", this.index);
        }else if (this.index <= 11 && this.$store.state.shopitems[this.index].owned && this.index >= 8) {
          document.body.style.backgroundImage = "url('src/assets/" + this.image + "')";
        }else if (this.$store.state.money[this.$store.state.position] >= this.$store.state.shopitems[this.index].price && this.index <= 11 && this.index >= 8) {
          document.body.style.backgroundImage = "url(" + `@/assets/${this.image}` + ")";
          this.$emit("moneyChange", this.$store.state.shopitems[this.index].price * -1);
          this.$store.dispatch("toggleImg", this.index);
        }
    },
  },
  computed: {
    price() {
      let x = this.abbrNum(this.$store.state.shopitems[this.index].price, 2);
      return x;
    },
  },
};
</script>