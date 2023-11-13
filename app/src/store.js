import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const store = new Vuex.Store({
  state: {
    cart: loadCartFromLocalStorage()
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      saveCartToLocalStorage(state.cart);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
      saveCartToLocalStorage(state.cart);
    },
    incrementQuantity(state, index) {
      state.cart[index].quantity++;
      saveCartToLocalStorage(state.cart);
    },
    decrementQuantity(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
        saveCartToLocalStorage(state.cart);
      }
    }
  },
  getters: {
    cartItemCount: state => state.cart.length
  }
});

export default store;
