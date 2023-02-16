<template>
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Log in</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

        <form @submit.prevent="Login">
            <div class="form-group">
                <input type="email" v-model="form2.email" placeholder="example@email.com" class="form-control" :class="{ 'is-invalid': form2.errors.has('email') }">
                            <has-error :form="form2" field="email"></has-error>

            </div>



            <div class="form-group">
                <input v-model="form2.password" placeholder="password***"  type="password" class="form-control" :class="{ 'is-invalid': form2.errors.has('password') }">
                            <has-error :form="form2" field="password"></has-error>
            </div>
            <div class="form-group mt-5">
                <input type="submit" value="Log In" name="btn" class="form-control btn btn-info">
            </div>
        </form>
      <p class="mb-0">
        <router-link to="/register-front" class="text-center">Register a new membership</router-link>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</template>
<script>
	export default{
        name:'Login',
        data:function(){
            return{
                
                form2 : new Form({
                    'email':null,
                    'password':null,
                })
            }
        },
        mounted(){
            if (this.$store.state.token!=='') {
                axios.post('/api/auth/check-token',{token:this.$store.state.token}).then((response)=>{
                    this.$router.push('/dash');
                }).catch((error)=>{
                   toastr.error('Sorry Your Data Did not match','Login Failed!') ;
                   this.$store.commit('ClearToken');
                    this.$router.push('/');
                })
            }
        },
        methods:{
            Login:function(){
                this.form2.post('/api/auth/login').then((response)=>{
                    this.$store.commit('SetToken',response.data.access_token)
                    toastr.success('Login Successful','Success!');
                    
                     this.$router.push('/dash');
                }).catch((error)=>{
                    toastr.error('Sorry Your Data Did not match','Login Failed!')
                })
            },
        },
	}
</script>