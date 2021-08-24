<template>
  <div>
    <h1>counter {{ counter }}</h1>
    <button @click="increment">
      Add
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    ...mapMutations('increment', { root: true })
    // ...mapMutations('algum_modulo', ['mutation1', 'mutation2'])
  }
}
</script>
