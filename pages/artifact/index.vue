<template>
  <div>
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div v-for="artifact in artifacts" :key="artifact._id" class="col">
        <ArtifactCard :artifact="artifact" />
      </div>
    </div>
  </div>
</template>

<script>
import { headMetaTags } from '~/utils'
export default {
  async asyncData ({ $axios }) {
    const { results = [] } = await $axios.$get('https://api.epicsevendb.com/artifact')
    return { artifacts: results }
  },
  // head () {
  //   return {
  //     title: 'Artefatos',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'Lista de Artefatos'
  //       }
  //     ]
  //   }
  // }
  head () {
    return headMetaTags(
      {
        title: 'Artefatos',
        description:
                    'Veja informações sobre Artefatos',
        image: 'https://assets.epicsevendb.com/website/journal_artifact.png'
      },
      this
    )
  }
}
</script>
