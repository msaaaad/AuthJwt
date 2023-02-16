<template>
	
	<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Welcome</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <div class="social-auth-links text-center mb-3">
        <router-link to="/login-front" class="btn btn-block btn-primary">Log in
        </router-link>
        <router-link to="/register-front" class="btn btn-block btn-danger">Sign up
        </router-link>
      </div>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>

</template>
<script>
export default{
	name:"Home",

		data:function(){
			return{
			}
		},

}
</script>