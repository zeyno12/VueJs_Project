<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <router-link to="/carditem">
        <div class="shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-bag-dash"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
            />
            <path
              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
            />
          </svg>
          <span>{{ cartItemCount }}</span>
        </div>
      </router-link>
    </div>
    <Card />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      msg: "salam "
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  }
};
</script>

<style scoped>
.hello {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.shop {
  position: relative;
}
.shop span {
  position: absolute;
  top: -8px;
  left: 16px;
  background-color: black;
  width: 14px;
  border-radius: 50%;
  height: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>
