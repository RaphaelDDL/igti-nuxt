<template>
  <div>
    <div class="row">
      <div class="col">
        <h1 class="">
          {{ artifact.name }}
        </h1>
        <p class="lead">
          {{ artifact.description }}
        </p>
      </div>
      <div class="row">
        <div class="col">
          Classe: {{ artifact.role }}
        </div>
        <div class="col">
          Raridade: <span v-for="n in artifact.rarity" :key="n">&star;</span>
        </div>
      </div>
      <img :src="artifact.assets.image" class="card-img-top mx-auto" :alt="artifact.name" loading="lazy">
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const { results = [] } = await $axios.$get(`https://api.epicsevendb.com/artifact/${params.id}`)
    return { artifact: results?.[0] ?? {} }
  },
  head () {
    return {
      title: this.artifact?.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.artifact?.description
        }
      ]
    }
  }
}
</script>
