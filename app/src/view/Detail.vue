<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <div>
      <h2>User Details</h2>
      <p>User ID: {{ userId }}</p>
      <p>User ID: {{ userTitle }}</p>
      <img :src="userImage" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
        repellendus vel in iure fugit cupiditate porro voluptatum totam earum
        id. A nemo deserunt veritatis earum similique incidunt doloremque
        officiis, unde consequuntur, beatae voluptatem ratione? Doloremque
        blanditiis ut officiis labore, ipsam laborum autem tempora? Cupiditate
        inventore earum cum voluptatem voluptatibus quasi nemo libero quisquam
        accusamus, nam suscipit beatae vero repudiandae explicabo velit in ab
        dolor odio obcaecati magni rerum sit eos aliquam. Deserunt id omnis
        perferendis eos distinctio hic quisquam laborum temporibus commodi.
        Voluptatibus deserunt quis iste tempora modi necessitatibus libero
        molestias vel reiciendis nemo sit non, facilis deleniti natus fugiat!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      msg: "salam askm about",
      userId: null,
      userTitle: null,
      userImage:null
    };
  },
  created() {
    this.userId = this.$route.params.userId;
    this.userTitle = this.$route.query.title;
    this.userImage = this.$route.query.image;
  }
};
</script>

<style scoped></style>
