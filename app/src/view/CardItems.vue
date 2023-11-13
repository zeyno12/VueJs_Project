<template>
    <div>
      <h2>Cart Items</h2>
      <router-link to="/">
        <button>Back to Home</button>
      </router-link>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div class="image_box" v-for="(item, index) in cartItems" :key="index">
          <img :src="item.url" alt="" />
          <p>{{ item.title }}</p>
          <div class="quantity-controls">
            <button @click="decrementQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="incrementQuantity(index)">+</button>
          </div>
          <button @click="removeFromCart(index)">Remove from Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardItem",
    computed: {
      cartItems() {
        return this.$store.state.cart;
      }
    },
    methods: {
      removeFromCart(index) {
        this.$store.commit("removeFromCart", index);
      },
      incrementQuantity(index) {
        this.$store.commit("incrementQuantity", index);
      },
      decrementQuantity(index) {
        this.$store.commit("decrementQuantity", index);
      }
    }
  };
  </script>
  
  <style scoped>
  .image_box {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  .image_box img {
    width: 150px;
    height: 100px;
  }
  .quantity-controls {
    display: flex;
    align-items: center;
  }
  
  .quantity-controls button {
    margin: 0 5px;
  }
  </style>
  