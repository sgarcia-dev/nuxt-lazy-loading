<template>
  <div>
    <h1>I am a heavy component</h1>
  </div>
</template>

<script>
import a from '~/data/1mb-a.json'
import b from '~/data/1mb-b.json'
import c from '~/data/1mb-c.json'
import d from '~/data/1mb-d.json'

export default {
  created() {
    this.json = { a, b, c, d }
  },
}
</script>

<style></style>
