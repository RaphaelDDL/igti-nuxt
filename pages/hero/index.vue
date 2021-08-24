<template>
  <div>
    <div v-if="$fetchState.error" class="text-center m-5">
      Erro ao carregar
      <br>
      <button type="button" class="btn btn-outline-danger" @click="$fetch">
        Tentar Novamente
      </button>
    </div>
    <div v-else-if="$fetchState.pending" class="text-center m-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div v-for="hero in heroes" :key="hero._id" class="col">
        <HeroCard :hero="hero" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heroes: []
    }
  },
  async fetch () {
    const { results = [] } = await this.$axios.$get('https://api.epicsevendb.com/hero')
    this.heroes = results
  },
  head () {
    return {
      title: 'Heróis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lista de Heróis'
        }
      ]
    }
  }
}
</script>
