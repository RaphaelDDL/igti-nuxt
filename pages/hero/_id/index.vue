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
    <div v-else class="row" itemscope itemtype="https://schema.org/Person">
      <meta
        itemprop="image"
        :content="`https://igti-nuxt.herokuapp.com/hero/${hero._id}`"
      >
      <div class="col">
        <h1 itemprop="name">
          {{ hero.name }}
        </h1>
        <p class="lead" itemprop="description">
          {{ hero.description }}
        </p>
      </div>
      <div class="row">
        <div class="col" itemprop="honorificSuffix">
          Classe: {{ hero.role }}
        </div>
        <div class="col" itemprop="affiliation">
          Elemento: {{ hero.attribute }}
        </div>
        <div class="col" itemprop="honorificPrefix">
          Raridade: <span v-for="n in hero.rarity" :key="n">&star;</span>
        </div>
      </div>
      <img :src="imageUrls.full" class="card-img-top mx-auto" :alt="hero.name" loading="lazy" itemprop="image">
    </div>
  </div>
</template>

<script>
import { headMetaTags } from '~/utils'
export default {
  data () {
    return {
      hero: {}
    }
  },
  async fetch () {
    const { results = [] } = await this.$axios.$get(`https://api.epicsevendb.com/hero/${this.$route.params.id}`)
    this.hero = results?.[0] ?? {}
  },
  head () {
    const { name = '', attribute = '', role = '', description = '' } = this.hero || {}
    return headMetaTags(
      {
        title: `${name} | Heróis`,
        description: `${attribute} ${role} ${name}, ${description}`,
        image: this.imageUrls?.icon ?? ''
      },
      this
    )
  },
  // head () {
  //   return {
  //     title: this.hero?.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.hero?.description
  //       }
  //     ]
  //   }
  // }
  computed: {
    imageUrls () {
      return {
        full: this.hero?.assets?.image,
        small: this.hero?.assets?.thumbnail,
        icon: this.hero?.assets?.icon
      }
    }
  }
}
</script>
