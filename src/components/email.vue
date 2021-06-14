<template lang="pug">
  div
    form(@submit.prevent="onSubmit")
      .form-group
        label(for="email") EmailName
        input#email.form-control(
          type="email"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
          )
        .invalid-feedback(v-if="!$v.email.required") Email field is required
        .invalid-feedback(v-if="!$v.email.email") This field must be an email
        .invalid-feedback(v-if="!$v.email.uniqEmail") This Email is already exists
      .form-group
        label(for="password") Password
        input#password.form-control(
          type="password"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        )
        .invalid-feedback(v-if="!$v.password.minLength") Min Length is {{ $v.password.$params.minLength.min }} characters. Now it is {{ password.length }}.
      .form-group
        label(for="confirm") Confirm Password
        input#confirm.form-control(
          type="password"
          :class="{'is-invalid': $v.confirm.$error}"
          @blur="$v.confirm.$touch()"
          v-model="confirm"
        )
        .invalid-feedback(v-if="!$v.confirm.sameAs") Password must match
      button.btn(type="submit" :disabled="$v.$invalid") Submission
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('Email', this.email)
      console.log('Password', this.password)
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function (newEmail) {
        if (newEmail === '') return true

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@gmail.com'
            resolve(value)
          }, 1000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirm: {
      sameAs: sameAs('password')
    }
  },
  components: {
    appEmail: email
  }
}
</script>

<style scoped lang="stylus">
  label
    display block
  .form-control
    border 1px solid black
  .is-invalid
    border-color red
  .invalid-feedback
    color red
  [disabled]
    opacity .3
</style>
