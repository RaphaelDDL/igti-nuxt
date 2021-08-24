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
    <div v-else class="row">
      <div class="col">
        <h1 class="">
          {{ hero.name }}
        </h1>
        <p class="lead">
          {{ hero.description }}
        </p>
      </div>
      <div class="row">
        <div class="col">
          Classe: {{ hero.role }}
        </div>
        <div class="col">
          Elemento: {{ hero.attribute }}
        </div>
        <div class="col">
          Raridade: <span v-for="n in hero.rarity" :key="n">&star;</span>
        </div>
      </div>
      <img :src="hero.assets.image" class="card-img-top mx-auto" :alt="hero.name" loading="lazy">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hero: []
    }
  },
  async fetch () {
    const { results = [] } = await this.$axios.$get(`https://api.epicsevendb.com/hero/${this.$route.params.id}`)
    this.hero = results?.[0] ?? {}
  },
  head () {
    return {
      title: this.hero?.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.hero?.description
        }
      ]
    }
  }
}
</script>
