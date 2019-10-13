<template lang="pug">
  div
    div.container.main
      div.columns
        div.column.is-6
          h1.main-text__title.has-text-weight-bol Study Space
          div.main-text__description Обучающая платформа, где можно научится всему
          button.main-text__btn
            div.main-text__btn-text Стать участником
        div.column.is-6
          //img(:src="require('../assets/main/main.gif')")
    div.main-footer
      div.container
        div.main-footer__title.has-text-centered Почему стоит присоединиться к нам?
        div.main-footer__cards.has-text-centered.columns
          div.main-footer__cards__card.column Хранение домашних заданий и уроков в облаке
          div.main-footer__cards__card.column Видео или аудиосвязь с преподователем
          div.main-footer__cards__card.column Обучайся в любое время и в любом месте !

</template>

<script>

  export default {
    name: "Main",
    components: {}
  }
</script>

<style scoped>
  .main {
    height: 90vh;
  }

  .main-text__title {
    font-size: 90px;
    color: #002D56;
  }

  .main-text__btn {
    border-radius: 45px;
    width: 250px;
    height: 60px;
    margin-top: 30px;
    background: #A31B05;
  }

  .main-text__btn-text {
    font-size: 20px;
    line-height: 24px;
    color: white;
  }

  .main-footer {
    width: 100%;
    height: 400px;
    background: #F0F0F0;
    padding: 40px;
    border-radius: 50px 50px 0 0 ;

  }

  .main-footer__title {
    font-size: 35px;
    line-height: 44px;
    color: #00347A;
  }

  .main-footer__cards__card {
    height: 170px;
    border-radius: 50px;
    background: #FFFFFF;
    box-shadow: 0 4px 15px rgba(173, 200, 237, 0.17);
    margin: 0 25px;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
  }

  .main-footer__cards {
    margin-top: 100px;

  }

</style>
