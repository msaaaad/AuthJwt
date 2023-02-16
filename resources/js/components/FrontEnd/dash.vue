<template>
	
	<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Dashboard</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <div class="social-auth-links text-center mb-3">
        <button type="submit" @click="Logout" class="btn btn-block btn-primary">Log out
        </button>
      </div>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>

</template>
<script>
export default{
	name:"Dash",

		data:function(){
			return{
			}
		},

    methods:{
        Logout:function(){
            axios.post('/api/auth/logout',{token:this.$store.state.token}).then((response)=>{
                this.$store.commit('ClearToken');
                 this.$router.push('/');
            })
        },
    },

}
</script>