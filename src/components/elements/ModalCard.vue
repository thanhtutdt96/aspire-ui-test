<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head" v-if="modalTitle">
        <p class="modal-card-title">{{modalTitle}}</p>
        <slot name="button-close"></slot>
      </header>
      <section class="modal-card-body">
        <slot name="content"></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="button-primary"></slot>
        <slot name="button-secondary"></slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modalTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
