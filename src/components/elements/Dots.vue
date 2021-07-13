<template>
  <div>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dot {
  height: 10px;
  width: 10px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;

  &:not(:first-child) {
    margin-left: 8px;
  }
}
</style>
