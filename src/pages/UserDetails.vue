<template>
  <div>
    <div class="card w-96 bg-slate-900 e-100 shadow-xl m-auto">
      <div class="card-body">
        <h2 class="card-title">{{ user.first_name }} {{ user.last_name }}</h2>
        <p>Id: {{ user.id }}</p>
        <p>Address: {{ user.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserDetails",

  data() {
    return {
      id: "",
      user: {},
    };
  },

  methods: {
    async getUserById() {
      this.id = this.$route.params.id;

      try {
        const response = await axios.get(
          `http://localhost:3005/users/${this.id}`
        );
        const data = response.data;
        this.user = data;
      } catch (error) {
        console.log("Error", error);
      }
    },
  },

  created() {
    this.getUserById();
  },
};
</script>

<style></style>
