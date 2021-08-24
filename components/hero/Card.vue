<template>
  <div class="card">
    <img :src="hero.assets.icon" class="card-img-top mx-auto" :alt="hero.name" loading="lazy" @error="imgError">
    <div class="card-body">
      <h5 class="card-title">
        {{ hero.name }}
      </h5>
      <p class="card-text">
        <span v-for="n in hero.rarity" :key="n">&star;</span>
      </p>
      <p class="card-text">
        {{ hero.role }},  {{ hero.attribute }}
      </p>
      <nuxt-link :to="`/hero/${hero._id}`" class="btn btn-primary d-block">
        Ver Detalhes
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hero'],
  methods: {
    imgError (e) {
      e.target.src = 'https://assets.epicsevendb.com/hero/_placeholder/icon_missing.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-img-top {
  width: 112px;
  height: 112px;
}
</style>
