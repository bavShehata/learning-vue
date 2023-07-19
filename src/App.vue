<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia tasks</h1>
    </header>
    <!-- add new taks -->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <!-- loading -->
    <div class="loading" v-if="loading"><p>Loading tasks...</p></div>
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} faves left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <button @click="taskStore.$reset">Reset</button>
  </main>
</template>
<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();

    const { tasks, loading, favs, totalCount, favCount } =
      storeToRefs(taskStore);

    taskStore.getTasks();
    const filter = ref("all");

    return {
      taskStore,
      filter,
      tasks,
      loading,
      favs,
      totalCount,
      favCount,
    };
  },
};
</script>
