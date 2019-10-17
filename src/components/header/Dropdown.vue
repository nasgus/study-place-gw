<template lang="pug">
  ul.profile-dropdown(:class="isActive ? 'active' : ''")
    li.profile-dropdown__item Дневник
    li.profile-dropdown__item Календарь
    li.profile-dropdown__item Курсы
    li.profile-dropdown__item Настройки
</template>

<script>
  export default {
    name: "Dropdown",
    props: {
      isActive: Boolean
    }
  }
</script>

<style scoped>

  .profile-dropdown {
    position: absolute;
    top: 90px;
    background: white;
    width: 210px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0;
    transition: opacity 0.2s;
    border-bottom: 2px solid #F3F3F3;
    border-left: 2px solid #F3F3F3;
    border-right: 2px solid #F3F3F3;
    padding: 5px;

  }


  .active {
    opacity: 1;
  }

  .profile-dropdown__item {
    padding: 10px;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }

  .profile-dropdown__item:hover {
    background: #002D56;
    color: white;
    border-radius: 5px;
  }

  .profile-dropdown:last-child:hover {
    background: #002D56;
  }

</style>
