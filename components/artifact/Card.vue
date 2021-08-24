<template>
  <div class="card">
    <img :src="artifact.assets.thumbnail" class="card-img-top mx-auto" :alt="artifact.name" loading="lazy" @error="imgError">
    <div class="card-body">
      <h5 class="card-title">
        {{ artifact.name }}
      </h5>
      <p class="card-text">
        <span v-for="n in artifact.rarity" :key="n">&star;</span>
      </p>
      <p class="card-text">
        {{ artifact.role }}
      </p>
      <nuxt-link :to="`/artifact/${artifact._id}`" class="btn btn-primary d-block">
        Ver Detalhes
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['artifact'],
  methods: {
    imgError (e) {
      e.target.src = 'https://assets.epicsevendb.com/artifact/_placeholder/small_missing.jpg'
    }
  }
}
</script>
