<template>
  <div>
    <h1>I am a heavy component</h1>
  </div>
</template>

<script>
import jsonData from '~/data/20mb.json'

export default {
  created() {
    this.json = jsonData
  },
}
</script>

<style></style>
