<template>
  <div class="main-page-container">
    <div style="margin-bottom: 20px">
      <h2 style="text-align: center">Enter Your Task Here</h2>
      <AutoComplete v-model="taskName" v-on:keyup="enterClicked" />
    </div>
    <h2 v-if="tasks.length">Your Current Tasks Are</h2>
    <div v-for="task in tasks" :key="task._id">
      <TaskCard
        v-if="!task.completed"
        :task="task"
        :fetchTasks="fetchTasks"
        style="margin-bottom: 5px"
      />
    </div>
    <h2 v-if="tasks.length">Your Completed Tasks Are</h2>
    <div v-for="task in tasks" :key="task._id">
      <TaskCard
        v-if="task.completed"
        :task="task"
        :fetchTasks="fetchTasks"
        style="margin-bottom: 5px"
      />
    </div>
  </div>
</template>
<script>
import AutoComplete from "primevue/autocomplete";
import axios from "axios";
import { BASE_URL } from "@/static/constants";
import TaskCard from "@/components/TaskCard.vue";
export default {
  name: "Main",
  components: {
    AutoComplete,
    TaskCard,
  },
  data() {
    return {
      taskName: "",

      tasks: [],
    };
  },
  methods: {
    enterClicked: function (e) {
      if (this.taskName && e.keyCode == 13) {
        axios
          .post(`${BASE_URL}/tasks`, {
            name: this.taskName,
          })
          .then((data) => {
            this.fetchTasks();
            this.taskName = "";
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    fetchTasks() {
      axios
        .get(`${BASE_URL}/tasks`)
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>
<style scoped>
.main-page-container {
  height: 100vh;
  margin: 50px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin: 5px 0px;
}
</style>
