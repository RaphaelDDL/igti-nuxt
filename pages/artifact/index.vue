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
export default {
  async asyncData ({ $axios }) {
    const { results = [] } = await $axios.$get('https://api.epicsevendb.com/artifact')
    return { artifacts: results }
  },
  head () {
    return {
      title: 'Artefatos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lista de Artefatos'
        }
      ]
    }
  }
}
</script>
