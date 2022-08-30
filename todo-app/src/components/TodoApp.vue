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
            <td><span class="pointer" @click="changeStatus(index)">{{task.status}}</span></td>
            <td>
              <div class="text-center" @click="editTask(index)">
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
      editedTask: null,
      availableStatues: ['to-do','in-progress','finish'],
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
      }
      if(this.editedTask === null){
        this.tasks.push({
          name: this.task,
          status: 'to-do'
        });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = ''
    },

    deleteTask(index){
      this.tasks.splice(index, 1)
    },

    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index){
      let newIndex = this.availableStatues.indexOf(this.tasks[index].status);
      if(++newIndex > 2){
        newIndex = 0;
      }else{
        this.tasks[index].status = this.availableStatues[newIndex];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer{
  cursor: pointer;
}
</style>
