<template>
  <div class="row h-100">
    <div class="col-md-4 mb-3 border-end">
      <h5 class="mb-0">Ward</h5>
      <hr class="mt-2" />
      <newlyAdmittedPatients />
      <div class="position-relative d-none">
        <loader width="170" :loaderState="loading" />
        <div class=" table-responsive ">
          <table class="table text-center align-middle table-striped table-hover">
            <thead class="bg-primary text-light">
              <tr>
                <th>Patient ID.</th>
                <th>Patient Name</th>
                <th>Age/Sex</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr role="button" v-for="patient in patients" v-bind:key="patient" @click="patientUrl(patient.id)">
                <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_name }}</td>
                <td>
                  {{ patient.age }} / <span v-if="patient.sex == 'male'">M</span><span
                    v-if="patient.sex == 'female'">F</span>
                </td>
                <td>{{ patient.phone_number }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-6 mb-3">
          <DoctorLineChart name="admission" title="ADMISSION" chartType="line" />
        </div>
        <div class="col-md-6 mb-3">
          <DoctorLineChart name="discharge" title="DISCHARGE" chartType="bar" />
        </div>
        <div class="col-md-6 mb-3">
          <DoctorLineChart name="transferIn" title="Transfer In" chartType="bar" />
        </div>
        <div class="col-md-6  mb-3">
          <DoctorLineChart name="transferOut" title="Transfer Out" chartType="line" />
        </div>
        <div class="col-md-6  mb-3">
          <DoctorLineChart name="deaths" title="Deaths" chartType="line" />
        </div>
        <div class="col-md-6  mb-3">
          <DoctorLineChart name="criticalPatient" title="Critical Patients of the day" chartType="bar" />
        </div>
      </div>
    </div>
  </div>
  <offCanvas />


</template>
    <script>
import DoctorLineChart from '@/components/charts/DoctorLineChart.vue'
import NurseInfoChart from '@/components/charts/NurseInfoChart.vue'
import offCanvas from '@/components/search/AdvanceSearch.vue'
import loader from '@/components/Loader.vue'
import newlyAdmittedPatients from '@/components/ward/newlyAdmittedPatients.vue'
import axios from 'axios'
export default {
  components: {
    DoctorLineChart,
    NurseInfoChart,
    offCanvas,
    loader,
    newlyAdmittedPatients,
  },
  data() {
    return {
      patientSearchResult: '',
      patients: '',
      loading: true
    }
  },
  mounted() {
    axios.get('https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients').then((res) => {
      this.patients = res.data
      this.loading = false
    })
  },
  methods: {
    searchPatients(e) {
      const userInput = e.target.value
      if (userInput !== '') {
        axios
          .get(`https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients?patient_name_like=${userInput}`)
          .then((res) => {
            this.patientSearchResult = res.data
          })
          .catch((err) => {
            console.log(err)
          })

      } else {
        this.patientSearchResult = ''

      }
    },
    patientUrl(id) {
      this.$router.push('/ward/' + id)
    },
  },
}

</script>

    <style scoped>
    .show-patient-result-enter-active {
      transition: all 0.25s ease-out;
    
    }
    
    .show-patient-result-leave-active {
      transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
    }
    
    .show-patient-result-from,
    .show-patient-result-leave-to {
      transform: translateY(20px);
      opacity: 0;
      visibility: hidden;
    
    }
    </style>
