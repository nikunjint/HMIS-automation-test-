<template>
  <div class="row h-100">
    <div class="col-md-4 mb-3 border-end">
      <h5 class="mb-2">Clinical</h5>
      <hr class="mt-2" />
      <div class="d-flex mb-4">
        <div class="input-group  me-3">
          <input type="text" class="form-control" autocomplete="off" id="patient-search"
            placeholder="Search by Patients Name or ID" @keyup="searchPatients" />
          <span class="input-group-text bg-primary text-light" id="basic-addon2">
            <em class="bi bi-search"></em>
          </span>
          <Transition name="show-patient-result">
            <div id="patient-result" class="patient-search-result list-group" v-if="patientSearchResult">
              <RouterLink :to="'/patients/' + patient.id" v-for="patient in patientSearchResult"
                class="list-group-item list-group-item-action " :key="patient.patient_id">
                {{ patient.patient_name }}
                <div class="small">
                  Patient ID
                  <span class="badge bg-primary rounded-pill">{{
                      patient.patient_id
                  }}</span>
                </div>
              </RouterLink>
            </div>
          </Transition>
        </div>
        <!--input-group-->
        <a href="" class="btn text-nowrap btn-light border"><em class="bi bi-gear me-1"></em>
        </a>
      </div>
      <h5>Newly Registered Patients</h5>
      <hr />

      <div class="table-responsive">
        <table class="table align-middle table-striped table-hover">
          <thead class="bg-light">
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
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-6">
          <DoctorLineChart name="admission" title="Doctor Visits" chartType="line" />
        </div>
        <div class="col-md-6">
          <DoctorLineChart name="doctorvisits" title="ADMISSION" chartType="bar" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DoctorLineChart from '@/components/charts/DoctorLineChart.vue'
import NurseInfoChart from '@/components/charts/NurseInfoChart.vue'
import axios from 'axios'
export default {
  components: {
    DoctorLineChart,
    NurseInfoChart,
  },
  data() {
    return {
      patientSearchResult: '',
      patients: ''
    }
  },
  mounted() {
    axios.get('https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients').then((res) => {
      this.patients = res.data
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
      this.$router.push('/patients/' + id)
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
