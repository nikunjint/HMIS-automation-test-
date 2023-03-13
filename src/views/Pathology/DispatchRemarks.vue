<template>
  <div class="row h-100">
    <div class="col-md-12 mb-3 border-end">
      <dispatch />
    </div>
  </div>
  <offCanvas />
</template>
    <script>
import DoctorLineChart from "@/components/charts/DoctorLineChart.vue";
import NurseInfoChart from "@/components/charts/NurseInfoChart.vue";
import offCanvas from "@/components/search/AdvanceSearch.vue";
import loader from "@/components/Loader.vue";
import dispatch from "@/components/investigation/dispatch.vue";
import axios from "axios";
export default {
  components: {
    DoctorLineChart,
    NurseInfoChart,
    offCanvas,
    loader,
    dispatch,
  },
  data() {
    return {
      patientSearchResult: "",
      patients: "",
      loading: true,
    };
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients"
      )
      .then((res) => {
        this.patients = res.data;
        this.loading = false;
      });
  },
  methods: {
    searchPatients(e) {
      const userInput = e.target.value;
      if (userInput !== "") {
        axios
          .get(
            `https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients?patient_name_like=${userInput}`
          )
          .then((res) => {
            this.patientSearchResult = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.patientSearchResult = "";
      }
    },
    patientUrl(id) {
      this.$router.push("/ward/" + id);
    },
  },
};
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

.form-floating > .form-control {
  height: 40px !important;
}

.form-floating > label {
  top: -6px !important;
}
</style>
