<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="username" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username" />
        </mu-form-item>
        <mu-form-item label="password" prop="password" :rules="passwordRules">
          <mu-text-field v-model="validateForm.password" type="password" prop="password" />
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">submit</mu-button>
          <mu-button @click="clear">reset</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: 'Username is required' },
        { validate: (val) => val.length >= 3, message: 'Username length is greater than 3' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: 'Password is required' },
        { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Password length is greater than 3 and less than 10' }
      ],
      validateForm: {
        username: '',
        password: ''
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((result) => {
        this.loading = true
        this.$store.dispatch('user/login', this.validateForm).then(() => {
          this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      })
    },

    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  }
}
</script>

<style lang="scss">
$bg:#fff;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>

</style>
