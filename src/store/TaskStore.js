import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state : () => ({
        tasks : [],
    }),

    actions :{
        async getData(){
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            
            this.tasks = data
        },
        async deleteTask(id){
            this.tasks = this.tasks.filter(e => {
                return e.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id ,{
                method : 'DELETE',
            })
        },
        async addTask(todo){
    
            const id = this.tasks ? this.tasks.reduce((prev,current) => {
                return (prev.id > current.id) ? prev : current
            }).id : 1

            const newTask = {
                id : id + 1,
                task: todo
            }            

            this.tasks.push(newTask)

            const res = await fetch('http://localhost:3000/tasks' ,{
                method : 'POST',
                body : JSON.stringify(newTask),
                headers : {'Content-Type' : 'application/json'}
            })
      
        }
    }
})