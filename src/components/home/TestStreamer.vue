<template>
    <p v-if="price"></p>
</template>

<script>

export default {
  name: "TestStreamer",
  data() {
    return {
      price: 0,
      currencyType: "REP-USD",
    };
  },
  methods: {
    loadPrice() {
      axios.get(`https://api.gdax.com/products/${this.currencyType}/ticker`)
        .then((res) => {
          if (res.data.price) {
            console.log(res.data.price);
          }
        })
        .catch((error) => {
          console.log('error');
        });
    }, 
    created() {
      this.loadPrice();

      setInterval(() => {
        this.loadPrice();
      }, 500);
    }
  }
};
</script>