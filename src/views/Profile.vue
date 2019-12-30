<template lang="pug">
  v-container
    h2.mb-10 Мой профиль
    v-layout()
      v-flex(lg3, xl3)
        div.user-name Антон Мохонько Сергеевич
        v-img.user-photo.mt-5(:src="require('../assets/profile-photo.jpg')")
      v-flex
        div.mb-5 Информация
        v-input.information-input(v-for="(input, index) in list", :key="index", :messages="[input.subtitle]") {{input.title}}
</template>

<script>
  export default {
    name: "Profile",
    data () {
      return {
        list: [
          {
            title: 'Студент, Харьковский Национальный Университет Радиоелектроники',
            subtitle: 'образование'
          },
          {
            title: 'Украина, Харьков',
            subtitle: 'страна, город'
          },
          {
            title: 'mokhnatuy@gmail.com',
            subtitle: 'email'
          },
          {
            title: '+380954878862',
            subtitle: 'номер телефона'
          },

        ]
      }
    }
  }
</script>

<style>
  .user-photo {
    height: 300px;
    width: 300px;
    border-radius: 10px;
  }

  .v-input__slot {
    margin-bottom: 0;
    margin-top: 10px;
  }
</style>