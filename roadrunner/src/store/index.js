import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  
    cars: [
      {
        make: "dodge",
        model: "viper",
        color: "red",
        rented: false,
        img: "image location",
        location: "123 awesome inc way"
      },
      {
        make: "chevy",
        model: "corvette",
        color: "blue",
        rented: true,
        img: "image location",
        location: "456 lexington road"
      }
    ],
    users: [
      {
        name: "name",
        email: "email address",
        age: 34,
        phone: "895-555-5555",
        password: "password",
        senior: false
      },
      {
        name: "name",
        email: "email address",
        age: 66,
        phone: "895-555-5555",
        password: "password",
        senior: true
      }
    ]

  },
 
  actions, 
  plugins,
  mutations,

})
