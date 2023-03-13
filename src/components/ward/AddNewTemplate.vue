<template lang="">
 <form @submit.prevent="addTemplate" >
 <div class="row">

   <div class="col-lg-6">
      <div class="mb-3">
         <input v-model="newNursingTemplate.code"  type="text" placeholder="Enter Keyword" class="form-control " :class="{ ['is-invalid']: v$.newNursingTemplate.code.$error }" @blur="v$.newNursingTemplate.code.$touch"/>
      </div> <!--column-->
   
      <!-- <div class="mb-3">
         <select v-model="doctor" name="" id=""  class="form-select " :class="{ ['is-invalid']: v$.doctor.$error }" @blur="v$.doctor.$touch">
            <option selected value="" disabled>Doctor</option>
            <option v-for="{doct_docname} in doctors" :value="doct_docname" >{{doct_docname}}</option>
         </select>
      </div> -->
   </div> <!---column 6-->

   <div class="col-lg-6">
         <div class="mb-3">
         <select v-model="newNursingTemplate.depId" :class="{ ['is-invalid']: v$.newNursingTemplate.depId.$error }" @blur="v$.newNursingTemplate.depId.$touch" name="" id="" class="form-select ">
         <option disabled selected value="">Department</option>
            <option v-for="department in departmentOptions" :value="department.depId">{{ department.depName }}</option>
         </select>
      </div> 
   </div> <!---column 6-->
   <div class="col-md-12">
      
      <div class="mb-3">
      <textarea v-model="newNursingTemplate.content" :class="{ ['is-invalid']: v$.newNursingTemplate.content.$error }" @blur="v$.newNursingTemplate.content.$touch"  placeholder="Note Content" name=""
      class="form-control" id="" cols="30" rows="4" ></textarea>
      </div>
   </div>

   <div class="text-end">
   <button type="submit" class="btn btn-primary btn-primary-40">Save Template</button>
   </div>
   </div>
 </form>
  
</template>
<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapState } from 'vuex'
export default {

   setup: () => ({
      v$: useVuelidate()
   }),
   data() {
      return {
         newNursingTemplate: {
            code: '',
            content: '',
            codeFrom: 'IPD',
            codeFor: 'NUOB_NOTE',
            depId: "",
            userId: 1
         },
         selectedDepartment: '',
         doctor: '',
         doctors: '',
         departmentOptions: []
      }
   },
   validations() {
      return {
         newNursingTemplate: {
            code: { required },
            content: { required },
            // codeFrom: 'IPD',
            // codeFor: 'NUOB_NOTE',
            depId: { required },
            // userId: '1'
         },
         // doctor: { required }
      }
   },
   computed: {
      ...mapState({
         nursingTemplates: state => state.nursingTemplates.token = this.$store.state.token,
      }),
      getDepId: () => {
         return this.selectedDepartment
      }
   },
   methods: {
      succeed() {
         this.$swal({
            position: 'top-end',
            icon: 'success',
            text: 'New Template Has been Added',
            showConfirmButton: false,
            timer: 1500
         })
         this.$store.dispatch('fetchNursingTemplate')
      },
      async addTemplate() {
         const result = await this.v$.$validate()
         if (!result) {
            alert('Some error occured. Please Recheck')
            return
         } else {
            const newTemplateFormData = JSON.parse(JSON.stringify(this.newNursingTemplate))
            return this.$store.dispatch('addNursingTemplate', newTemplateFormData).then((e) => {
               this.newNursingTemplate = {
                  code: '',
                  content: '',
                  codeFrom: 'IPD',
                  codeFor: 'NUOB_NOTE',
                  depId: '',
                  userId: 1
               }
               this.succeed();
               this.v$.$reset();
            })
         }
      },
   },
   mounted() {

      // Get departments for ward
      const config = {
         headers: { Authorization: `Bearer ${this.$store.state.token}}` }
      };
      axios.post(`${import.meta.env.VITE_API_ENDPOINT}/ward/getDepartments`, {}, config).then((res) => {

         this.departmentOptions = res.data.departmentData
      });
      // Get Doctors
      axios.post(`${import.meta.env.VITE_API_ENDPOINT}/ward/getDoctors`, {}, config).then((res) => {
         this.doctors = res.data.doctorsData
      });

   },


}
</script>



<style scoped>
.form-floating > .form-control {
  height: 38px !important;
}

.form-floating > label {
  top: -7px !important;
  color: #54575a;
  font-weight: 400;
  font-size: 13px;
}

li {
  list-style: none;
}

.patient-navigate-pages a {
  color: white;
}

.active a {
  background: white;
  color: var(--primary-70);
  padding: 2px 10px;
  border-radius: 999px;
}

.searchFilter{
  background: #80808014;
}

.searchFilter .card {
      background: unset;
    border: none;
}

.filterSection .form-check:not(:last-child){
  margin-right: 20px;
}

.filterSection .form-check{
    background: white;
    width: fit-content;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    box-shadow: rgb(0 0 0 / 13%) 0px 5px 15px;
}

.filterSection .form-check-input{
  margin-top: -2px;
  margin-left: initial;
}

.filterSection .form-check label{
    padding-left: 6px;
    padding-top: 0px;
}

.grid-body{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 10px;
}

.addnew-btn {
    padding: 0.5rem 0.5rem;
    font-size: 1.4rem;
    border-radius: 50px !important;
    width: 32px !important;
    height: 32px !important;
    text-align: right;
    -webkit-transition: all 300ms ease-in-out !important;
    transition: all 300ms ease-in-out !important;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    display: flex !important;
    align-items: center;
    justify-content: center;
    border: none !important;
    background: var(--primary);
    float: right;
    position: absolute;
    right: 10px;
    bottom: 0;
}

.addnew-btn span {
    display: inline-block;
    position: relative;
    margin-left: -58px;
    margin-right: 10px;
    opacity: 0;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    font-size: 14px;
    color: white;
}

.addnew-btn i {
    font-size: 14px;
}

.addnew-btn:hover {
    width: 160px !important;
}

.addnew-btn:hover span {
    margin-left: 0;
    opacity: 1;
}

.bi-search{
  color: white;
  font-size: 14px !important;
}

</style>