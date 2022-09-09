<template>
  <h1 class="mb-4">Страница {{data.key}}</h1>
  <CounterClick />
  <v-btn class="mx-2 my-2" color="error" @click="$emit('close', data)">Закрыть вкладку</v-btn>
</template>

<script>
import CounterClick from "@/components/CounterClick";
export default {
  emits: ['close'],
  props: ['data'],
  components: {
    CounterClick
  }
}
</script>

<style scoped>

</style>