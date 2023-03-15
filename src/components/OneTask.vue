<template>
        <p>{{ task.task }}</p>
        <i class="material-icons" @click="handleDelete(task.id)">delete</i>
</template>

<script>
    import { useTaskStore } from '../store/TaskStore';
    export default {
        props: ['task'],
        setup(){
            const tasks = useTaskStore();

            const handleDelete = (id)=>{
                tasks.deleteTask(id)
            }

            return { handleDelete }
        }
    }
</script>
