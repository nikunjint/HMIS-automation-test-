<template>

<div class="alert alert-success" v-if="isSuccess">Success</div>

    <form @submit.prevent="OnCreatePost">
        <label> First Name</label>
        <input type="text" v-model="fname" required />


        <label>Last name</label>
        <input type="text" v-model="lname" required/>

        <label>Username</label>
        <input type="text" v-model="username" required/>

        <label>Email</label>
        <input type="text" v-model="email" required/>

        <label>Password</label>
        <input type="text" v-model="password" required/>

        <label>Confirm Password</label>
        <input type="text" v-model="confirm_password" required/>

         <label>Phone Number</label>
        <input type="text" v-model="phone_number" required/>


        <button type="submit">Submit</button>
    </form>

<testApi />

</template>

<script>

import axios from 'axios';
import { required } from "@vuelidate/validators";
import Swal from 'sweetalert2/dist/sweetalert2';
import testApi from '@/components/testApi.vue'


export default {
     components: {testApi},
    data(){
        return {
            isSuccess: false,     
        }
    },

    methods: {
        OnCreatePost(){
            axios.post('https://soft-ladybug-97.telebit.io/api/auth/register', { first_name: this.fname, last_name: this.lname, username: this.username, email: this.email, password: this.password, confirm_password: this.confirm_password, phone_number: this.phone_number
            })
               .then(res => { 
            alert('success')
          
          }).catch((err)=>{
            console.log(err)

    Swal.fire(
            'Oops!',
            err.response.data.detail,
            'error'
         )
  

            });

        }
    },

      validations() {
    return {
      fname: { required },
      lname: { required },
    };
  },
}
</script>