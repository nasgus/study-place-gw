<template lang="pug">
  div
    header.header.layout
      img.header-logo(:src="require('../assets/logo.svg')")
      div.spacer
      div.header-actions.d-flex.align-center
        a.header-actions__link Курсы
        div.header-actions__notifications
          div.header-actions__notifications__red-btn
          img.header-actions__notifications__icon(:src="require('../assets/icons/notification.svg')")
        div.header-actions__profile.layout
          div.header-actions__profile__text Профиль
          div.spacer
          img.header-actions__profile__icon(:src="require('../assets/icons/prfile.svg')")
    router-view


</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header {
    height: 90px;
    width: 100%;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 10px 50px;
  }

  .header-actions {
    display: flex;
    align-items: center;
  }

  .header-actions__notifications {
    height: 35px;
    width: 35px;
    background: #0055C7;
    margin: 0 10px;
    border-radius: 10px;
    position: relative;

  }

  .header-actions__link {
    display: block;
    height: 18px;
    width: auto;
    text-align: center;
    margin: 0 10px;
  }

  .header-actions__notifications__icon {
    height: 100%;
    width: 100%;
    padding: 6px;
  }

  .header-actions__notifications__red-btn {
    height: 10px;
    width: 10px;
    position: absolute;
    border-radius: 10px;
    background: #EA435C;
    right: -2px;
    top: -2px;

  }

  .header-actions__profile {
    height: 50px;
    width: 200px;
    background: #0055C7;
    border-radius: 10px;
    padding: 13px 30px;
    align-items: center;

  }

  .header-actions__profile__text {
    font-size: 16px;
    line-height: 20px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

</style>
