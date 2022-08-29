<template>
  <div class="container">
    <h1 class="text-center">My vue Todo App</h1>

    <div class="d-flex mt-5">
      <!-- Inputs -->
      <input type="text" placeholder="Enter text" class="form-control">
      <button class="btn btn-warning rounded-0">Submit</button>
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
          <tr>
            <td>first todo</td>
            <td>Todo</td>
            <td>
              <div class="text-center">
                <span class="fa fa-pen"></span>
              </div>
            </td>
            <td>
              <div class="text-center">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
