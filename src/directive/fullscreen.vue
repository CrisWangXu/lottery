<template>
</template>

<script>
  export default {
    name: 'fullscreen',
    bind: function (el, binding) {
      const pageHeight = window.innerHeight
      el.style.minHeight = pageHeight + 'px'
    }
  }
</script>
