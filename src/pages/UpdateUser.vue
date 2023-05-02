<template>
  <div>
    <form @submit.prevent="updateUser(id, formValues)">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="formValues.first_name"
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >First name</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="formValues.last_name"
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Last name</label
          >
        </div>
      </div>

      <div class="relative z-0 w-full mb-6 group">
        <input
          v-model="formValues.address"
          type="text"
          name="floating_address"
          id="floating_address"
          class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_address"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Address</label
        >
      </div>

      <button
        type="submit"
        class="text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateUser",

  data() {
    return {
      id: "",
      user: {},
      formValues: { first_name: "", last_name: "", address: "" },
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
        this.formValues = this.user;
      } catch (error) {
        console.log("Error", error);
      }
    },

    async updateUser(id, user) {
      console.log(id);
      try {
        const response = await axios.put(
          `http://localhost:3005/users/${id}`,
          user
        );

        const data = response.data;
        console.log(data);

        this.$router.push("/");
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
