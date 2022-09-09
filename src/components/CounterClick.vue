<template>
  <h3 class="mb-4">Счетчик: {{val}}</h3>
  <v-btn @click="addCounter" color="secondary" class="mx-2 my-2">Увеличить счетчик</v-btn>
</template>

<script>
export default {
  data () {
    return {
      val: 0
    }
  },
  methods: {
    addCounter () {
      this.val++
    }
  }
}
</script>

<style scoped>

</style>