<script>
import axios from 'axios'

export default {
  data() {
    return {
      patients: '',
    }
  },
  created() {
    axios.get('https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients').then((res) => {
      this.patients = res.data
    })
  },
}
</script>

<template>
  <div class="box-header mb-3">
    <h5 class="mb-0 text-primary">Registered Patients</h5>
    <div class="d-flex gap-3">
      <RouterLink class="btn btn-sm btn-primary small" to="/registrationonly">
        Registration Only
      </RouterLink>
      <button class="btn btn-sm btn-primary small">OPD Registration</button>
      <button class="btn btn-sm btn-primary small">
        Registration & Billing
      </button>
      <button class="btn btn-sm btn-light border">
        <em class="bi bi-gear"></em>
      </button>
    </div>
  </div>
  <!---Box Header-->
  <div class="box-body">
    <div class="table-responsive">
      <table class="table align-middle table-striped">
        <thead class="bg-light">
          <tr>
            <th>Patient ID.</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Regd. Date</th>
            <th>Department</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" v-bind:key="patient">
            <td>{{ patient.patient_id }}</td>
            <td>{{ patient.patient_name }}</td>
            <td>
              {{ patient.age }} / <span v-if="patient.sex == 'male'">M</span><span
                v-if="patient.sex == 'female'">F</span>
            </td>
            <td>{{ patient.phone_number }}</td>
            <td>
              <div class="text-truncate" style="max-width: 100px">
                {{ patient.address }}
              </div>
            </td>
            <td>{{ patient.regd_date }}</td>
            <td>{{ patient.department }}</td>
            <td>{{ patient.doctor }}</td>
            <td>{{ patient.patient_id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
</style>
