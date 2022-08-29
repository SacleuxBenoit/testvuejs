<template>
  <div class="container">
    <h1 class="text-center">My vue Todo App</h1>

    <div class="d-flex mt-5">
      <!-- Inputs -->
      <input v-model="task" type="text" placeholder="Enter text" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">Submit</button>
    </div>
          <!-- table -->
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">#</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(task,index) in tasks" :key="index">
            <td>{{task.name}}</td>
            <td>{{task.status}}</td>
            <td>
              <div class="text-center">
                <span class="fa fa-pen"></span>
              </div>
            </td>
            <td>
              <div class="text-center" @click="deleteTask(index)">
                <span class="fa fa-trash"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      task: '',
      tasks: [
        {
          name: 'first todo',
          status: 'to-do'
        },
        {
          name: 'second todo',
          status: 'in-progress'
        }
      ]
    }
  },
  
  methods: {
    submitTask(){
      if(this.task.length === 0){
        return;
      }else{
        this.tasks.push({
          name: this.task,
          status: 'todo'
        })
      }
      this.task = ''
    },
    
    deleteTask(index){
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
