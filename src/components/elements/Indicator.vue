<template>
  <div>
    <span class="selected"></span>
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
  background-color: #CBF6E1;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
}

.selected {
  height: 10px;
  width: 20px;
  background-color: #07D167;
  border-radius: 10px;
  display: inline-block;
}
</style>
