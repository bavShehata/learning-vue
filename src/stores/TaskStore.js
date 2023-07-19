import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven", isFav: true },
    ],
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
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => {
        console.log(task.id);
        console.log(taskId);
        return task.id != taskId;
      });
    },
    toggleFav(taskId) {
      const task = this.tasks.find((task) => task.id == taskId);
      task.isFav = !task.isFav;
    },
  },
});
