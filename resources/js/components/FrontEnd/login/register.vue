<template>
<div class="register-box">
  <div class="register-logo">
    <a href="../../index2.html"><b>Register</b></a>
  </div>

  <div class="card">
    <div class="card-body register-card-body">
      <p class="login-box-msg">Register a new membership</p>

      <form  @submit.prevent="Registration" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="text" v-model="form.name" placeholder="Full Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                            <has-error :form="form" field="name"></has-error>
                            </div>

                            <div class="form-group">
                                <input type="email" v-model="form.email" placeholder="example@email.com" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" v-on:keyup="getValue(form.email)">
                                            <has-error :form="form" field="email"></has-error>
                            <div v-if="length==1" class="text-danger">Email Already Registered*</div>
                            <div v-if="length==0 && form.email" class="text-success">Available</div>

                            </div>


                            <div class="form-group">
                                <input v-model="form.password" placeholder="password***"  type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                            <has-error :form="form" field="password"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.confirm_password" placeholder="Confirm Your password***"  type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('confirm_password') }">
                                            <has-error :form="form" field="confirm_password"></has-error>
                            </div>


                            <div class="form-group">
                                <input name="btn" type="submit" :disabled="length==1" value="Register" class="form-control btn btn-warning">
                            </div>

                        </form>

      <router-link to="/login-front" class="text-center">I already have a membership</router-link>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
</template>
<script>
	export default{
        name:'register',
        data:function(){
            return{
                length:'',
                form : new Form({
                    'first_name':null,
                    'email':null,
                    'password':null,
                    'confirm_password':null,
                }),
            }
        },
        methods:{
            Registration:function(){
                this.form.post('/api/auth/signup').then((response)=>{
                    toastr.success('Thank you for joining with us','Thank You');
                    this.$router.push('/login-front');
                }).catch((error)=>{
                    toastr.error('Password does not match or Email Already Taken','Registration Failed!')
                })
            },
            getValue(email){
                axios.post('/get-cus-mail/'+email).then((response)=>{
                    this.length = response.data.customer.length;
                })
            },
        },

    }

</script>