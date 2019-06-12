<template lang="pug" src="./404.pug"></template>

<script>
export default {
  props: ['props']
}
</script>

<style>
.pages-404 {
  position: relative;
  height: calc(100vh - 291px);
}
.pages-404__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}
.pages-404__content h1 {
  margin-bottom: 1rem;
}
</style>
