import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount: (state) => {
      // return this.tasks.reduce((p, c) => {
      //   return c.isFav ? p + 1 : p;
      // }, 0);
      return state.favs.length;
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();

      this.tasks = data;
      this.loading = false;
    },
    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log("Error: ", res.error);
      }
    },
    async deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => {
        return task.id != taskId;
      });
      const res = await fetch("http://localhost:3000/tasks/" + taskId, {
        method: "DELETE",
      });
      if (res.error) {
        console.log("Error: ", res.error);
      }
    },
    async toggleFav(taskId) {
      const task = this.tasks.find((task) => task.id == taskId);
      task.isFav = !task.isFav;
      const res = await fetch("http://localhost:3000/tasks/" + taskId, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log("Error: ", res.error);
      }
    },
  },
});
