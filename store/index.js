export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

// store/
// --| index.js <-- root
// --| produtos.js <-- modulo com namespace produtos, espera exports nele
// --| products/ <-- há a opção dos exports separados também
// -----| mutations.js
// -----| state.js
// -----| getters.js
// -----| actions.js
