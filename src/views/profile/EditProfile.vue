<template lang="pug">
  v-container
    div.mb-10
      h2 Мой профиль
    v-layout()
      v-flex(lg4, xl4)
        h4.user-name {{fullName}}
        v-img.user-photo.mt-5(:src="profileFields.photo ? profileFields.photo : ''")
        v-file-input.file-uploader(prepend-icon="mdi-camera", show-size, :rules="[maxPhotoSize]", v-model="uploadedPhoto", label="Фото профиля")
      v-flex(lg4, xl4)
        h4.mb-5 Информация
        v-text-field.information-input.profile-text-field(v-for="(input, index) in list", :key="index", :maxlength="input.counter", :counter="input.counter", :label="input.subtitle", outlined, v-model="profileFields[input.key]")
      v-flex(lg4, xl4)
        h4.mb-5 Описание
        v-textarea(outlined, maxlength="200", counter="200", v-model="profileFields.description")
        v-btn(@click="updateProfile()") Сохранить
</template>

<script>
  import api from "../../api";

  export default {
    name: "EditProfile",
    data() {
      return {
        list: [
          {
            key: 'education',
            subtitle: 'образование',
            counter: 50,
          },
          {
            key: 'email',
            subtitle: 'email',
            counter: 30,

          },
          {
            key: 'phone',
            subtitle: 'номер телефона',
            counter: 13,
          }
        ],
        uploadedPhoto: null,
        profileFields: {
          email: '',
          photo: null,
          education: '',
          description: '',
          phone: ''
        }

      }
    },
    methods: {
      updateProfile() {
        api.post('/profile/edit', this.profileFields)
          .then(res => {
            console.log(res)
          })
      },
      maxPhotoSize(value) {
        return !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!'
      },
      toBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        })
      }
    },
    computed: {
      profile() {
        return this.$store.getters.getProfile
      },
      fullName() {
        return this.$store.getters.getFullName
      }
    },
    watch: {
      uploadedPhoto(file) {
        this.toBase64(file)
        .then(res => {
          this.profileFields.photo = res
        })
      }
    },
    created() {
      api.get('/profile')
        .then(res => {
          let profile = res.data;

          this.profileFields.photo = profile.photo;
          this.profileFields.education = profile.education;
          this.profileFields.email = profile.email;
          this.profileFields.description = profile.description;
          this.profileFields.phone = profile.phone;
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<style scoped>
  .user-photo {
    height: 300px;
    width: 300px;
    border-radius: 10px;
  }

  .profile-text-field {
    max-width: 400px;
  }

  .file-uploader {
    max-width: 300px;
  }
</style>