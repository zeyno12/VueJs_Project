<template>
  <div>
    <div class="card">
      <div
        class="card_box"
        v-for="(user, index) in users.slice(0, 21)"
        :key="user.id"
      >
        <img @click="goToDetailPage(user)" :src="user.url" alt="" />
        <p>{{ user.title }}</p>
        <button @click="addToCart(user)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error("Oshibka pri poluchenii dannyx:", error);
      });
  },
  methods: {
    goToDetailPage(user) {
      this.$router.push({
        name: "Detail",
        params: { userId: user.id },
        query: { title: user.title, image: user.url }
      });
    },
    addToCart(user) {
      this.$store.commit("addToCart", user);
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.card_box {
  border: 1px dashed red;
  width: 500px;
  height: 500px;
  cursor: pointer;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
}
.card_box img {
  width: 50%;
  height: 50%;
  border-radius: 100%;
  object-fit: cover;
}
.card_box p {
  margin: 0;
}
</style>