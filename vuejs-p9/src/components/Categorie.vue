<template>
    <div>
        <section>
            <h1>{{ categorieProp.name }}</h1>
            <input type="text" v-model="categorieProp.name">
            <button>Enregistrer</button>
            <button>Supprimer</button>
        </section>
    </div>
</template>
<script>
export default {
  name: 'Categorie',
  props: {
    categorieProp: Object
  }
}
</script>
<style scoped>
    section{
        margin: 5px;
        border: 1px solid rebeccapurple;
        background-color: navajowhite;
    }
</style>
