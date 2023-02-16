export default{
	  state: {
      token: localStorage.getItem('auth')||'',
      userData:[],

  },
  getters:{

    user(state){
      return state.userData;
    },

  },
  action:{

    getUser(data){
      axios.get("/api/auth/user").then((response)=>{
        console.log(response.data);
        data.commit('user',response.data.user);

      }).catch((error)=>{

      })
    },
  },
  mutations: {
    SetToken(state,token){
      localStorage.setItem('auth',token);
      state.token = token;
    },
    ClearToken(state){
      localStorage.removeItem('auth');
      state.token = '';
    },
    user(state,data){
      return state.userData = data;
    },
  }
}