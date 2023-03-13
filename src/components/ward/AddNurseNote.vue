<template lang="">
 <h5 class="modal-title mb-3" id="nurseNoteLabel">Add Nurse Note</h5>
 
 <form @submit.prevent="addNursingNote">
  <div class="row">
   <div class="col-md-6 mb-3">
     <div class="input-group input-group-sm">
       <label for="" class="input-group-text">Date </label>
       <!-- <input  type="text" class="form-control date-picker" data-single="1" name="date1" placeholder="" /> -->
       <input type="text" class="nepali-datepicker form-control"  placeholder="MM/DD/YYYY" value=""/>
     </div>
   </div>
   <div class="col-md-6 mb-3">
     <div class="input-group input-group-sm">
       <label for="" class="input-group-text">Time </label>
       <input type="time" class="form-control" placeholder="" />
     </div>
   </div>
   <div class="col-md-12">
     <h6>Nursing Note:</h6>
     <textarea class="form-control" v-model="$store.state.nursingTemplates.nursingTemplateContent" name="" id="" cols="30" rows="5"></textarea>
     <div class="text-end pt-3">
       <button  type="submit" class="btn btn-primary "><i class="bi bi-card-text me-2"></i>Add Note
       </button>
     </div>
   </div>
 </div>
 </form>
</template>
<script>
import axios from 'axios'
import { Form } from "vee-validate";
// import '../../assets/js/nepali-multi-date-picker/jquery'
import '../../assets/js/nepali-multi-date-picker/nepali.datepicker.v3.7.min.js'
import '../../assets/js/nepali-multi-date-picker/css/nepali.datepicker.v3.7.min.css'
import TextInput from "@/components/TextInput.vue";
export default {
  data() {
    return {
      note: ''
    }
  },
  components: {
    TextInput,
    Form,
  },
  methods: {
    addNursingNote() {
      const config = {
        headers: { Authorization: `Bearer ${this.$store.state.token}}`, 'Content-Type': 'multipart/form-data' }
      };
      axios.post(`${import.meta.env.VITE_API_ENDPOINT}/nursing/addNurseNote`, {
        patientId: 1,
        inPatientId: '',
        dataPostBy: 1,
        nurseNote: this.$store.state.nursingTemplates.nursingTemplateContent
      }, config).then((res) => {
        this.$swal({
          position: 'top-end',
          icon: 'success',
          text: 'New Nurse Note Has been Added',
          showConfirmButton: false,
          timer: 1500
        })
        this.$store.state.nursingTemplates.nursingTemplateContent = ''
        this.$store.state.nursingTemplates.nursingNoteListKey += 1
      });
    }
  },
  mounted() {

    /* Select your element */
    var mainInput = document.querySelector(".nepali-datepicker");

    /* Initialize Datepicker with options */
    mainInput.nepaliDatePicker({
      dateFormat: "MM/DD/YYYY",
      container: '.modal'
    });
  }

}
</script>
<style lang="">
 
</style>