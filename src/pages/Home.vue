<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Address</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="user in usersData">
          <th>{{ user.id }}</th>
          <td>
            <router-link :to="`/users/${user.id}`"
              >{{ user.first_name }} {{ user.last_name }}</router-link
            >
          </td>
          <td>{{ user.address }}</td>
          <td>
            <button class="btn bg-yellow-500 border-none text-white">
              <router-link :to="`/users/update/${user.id}`">Update</router-link>
            </button>
          </td>
          <td>
            <button
              @click="deleteUser(user.id)"
              class="btn bg-red-600 border-none text-white"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      usersData: [],
    };
  },

  methods: {
    async getAllUsers() {
      try {
        const response = await axios.get("http://localhost:3005/users");
        const data = response.data;
        this.usersData = data;
        console.log(this.usersData);
      } catch (error) {
        console.log("Error", error);
      }
    },
    
    deleteUser(id) {
      try {
        axios.delete(`http://localhost:3005/users/${id}`);
        this.getAllUsers();
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>

<style></style>
