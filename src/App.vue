<template>
  <div class="header">
    <span>ToDo App with Pinia</span>
  </div>

  <div class="new-task">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="task" placeholder="I want to...">
      <button>Add</button>
    </form> 
  </div>

  <div class="task-list">
    <div v-for="task in taskStore.tasks" :key="task.id" class="task">
      <OneTask :task="task"/>
    </div>
  </div>
</template>

<script>
  import { useTaskStore } from './store/TaskStore';
  import OneTask from './components/OneTask.vue'
  import { ref } from 'vue';

  export default {
    components : { OneTask },
    setup(){
      const taskStore = useTaskStore();

      const task = ref("")

      const handleSubmit = () => {
        if(task.value.length > 0){
          taskStore.addTask(task.value)
          task.value = ""
        }
      }

      taskStore.getData()
      
      return { taskStore, handleSubmit, task }
    }
  }
</script>