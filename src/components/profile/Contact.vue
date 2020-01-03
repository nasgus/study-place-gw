<template lang="pug">
  v-card.my-2(max-width="400px")
    v-list-item
      v-list-item-avatar(color="grey")
      v-list-item-content
        v-list-item-title.headline {{fullName}}
        v-list-item-subtitle {{education}}
      v-list-item-action
        v-layout
          v-btn(icon)
            v-icon mdi-phone-in-talk
          v-btn(icon)
            v-icon mdi-account
</template>

<script>
  export default {
    name: "Contact",
    props: {
      fullName: {
        type: String,
        required: true
      },
      education: {
        type: String,
        required: true
      },
      userId: {
        type: String,
        required: true
      },
      photo: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>