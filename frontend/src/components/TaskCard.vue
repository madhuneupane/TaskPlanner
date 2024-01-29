<template>
  <div class="task-container">
    <h4 style="flex-grow: 3; width: 60%">{{ task.name }}</h4>
    <i
      v-if="!task.completed"
      class="pi pi-check"
      style="color: green; flex-grow: 1; margin: auto; cursor: pointer"
      @click="taskCompleted(task._id)"
    ></i>
    <i
      class="pi pi-times"
      style="color: red; flex-grow: 1; margin: auto; cursor: pointer"
      @click="taskDeleted(task._id)"
    ></i>
  </div>
</template>
<script>
import axios from "axios";
import { BASE_URL } from "@/static/constants";
export default {
  name: "TaskCard",
  props: ["task", "fetchTasks"],
  methods: {
    taskCompleted(id) {
      let res = axios.put(`${BASE_URL}/tasks/${id}`, {
        completed: true,
      });
      res
        .then((data) => {
          this.fetchTasks();
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    taskDeleted(id) {
      let res = axios.delete(`${BASE_URL}/tasks/${id}`);
      res
        .then((data) => {
          this.fetchTasks();
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.task-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: aliceblue;
  height: 50px;
  width: 500px;
  font-size: 22px;
  padding-top: 5px;
  padding-left: 5px;
  border-radius: 8px;
}
</style>
