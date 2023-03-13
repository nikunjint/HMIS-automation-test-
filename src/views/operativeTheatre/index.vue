<template>
  <div class="row h-100">
    <div class="col-md-4 mb-3 border-end">
      <h5 class="mb-0">Operation Theatre</h5>
      <hr class="mt-2" />
      <!-- Search -->
      <div class="d-flex mb-3">
        <div class="input-group">
          <input
            v-model="searchValue"
            type="text"
            class="form-control"
            autocomplete="off"
            placeholder="Enter Patients Name or ID"
          /><span class="input-group-text bg-primary text-light" id="basic-addon2"
            ><em class="bi bi-search"></em
          ></span>
        </div>
        <!--input-group-->
      </div>
      <!-- End of Search -->

      <EasyDataTable
        :headers="headers"
        :items="items"
        :loading="loading"
        :search-field="searchField"
        :search-value="searchValue"
        @click-row="handlePatientRow"
      />
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
        <div class="col-md-6 mb-3">
          <DoctorLineChart name="transferOut" title="Transfer Out" chartType="line" />
        </div>
        <div class="col-md-6 mb-3">
          <DoctorLineChart name="deaths" title="Deaths" chartType="line" />
        </div>
        <div class="col-md-6 mb-3">
          <DoctorLineChart
            name="criticalPatient"
            title="Critical Patients of the day"
            chartType="bar"
          />
        </div>
      </div>
    </div>
  </div>
  <offCanvas />
</template>
<script>
import DoctorLineChart from "@/components/charts/DoctorLineChart.vue";
import NurseInfoChart from "@/components/charts/NurseInfoChart.vue";
import offCanvas from "@/components/search/AdvanceSearch.vue";
import loader from "@/components/Loader.vue";
import axios from "axios";
export default {
  components: {
    DoctorLineChart,
    NurseInfoChart,
    offCanvas,
  },
  data() {
    return {
      searchField: "",
      searchValue: "",
      headers: [
        { text: "SN", value: "id" },
        { text: "PLAYER", value: "player" },
        { text: "TEAM", value: "team" },
        { text: "NUMBER", value: "number" },
        { text: "POSITION", value: "position" },
        { text: "HEIGHT", value: "height" },
        { text: "WEIGHT (lbs)", value: "weight", sortable: true },
        { text: "LAST ATTENDED", value: "lastAttended" },
        { text: "COUNTRY", value: "country" },
      ],
      items: [
        {
          id: "1",
          player: "Stephen Curry",
          team: "GSW",
          number: 30,
          position: "G",
          height: "6-2",
          weight: 185,
          lastAttended: "Davidson",
          country: "USA",
        },
        {
          id: "2",
          player: "Lebron James",
          team: "LAL",
          number: 6,
          position: "F",
          height: "6-9",
          weight: 250,
          lastAttended: "St. Vincent-St. Mary HS (OH)",
          country: "USA",
        },
        {
          id: "3",
          player: "Kevin Durant",
          team: "BKN",
          number: 7,
          position: "F",
          height: "6-10",
          weight: 240,
          lastAttended: "Texas-Austin",
          country: "USA",
        },
        {
          id: "4",
          player: "Giannis Antetokounmpo",
          team: "MIL",
          number: 34,
          position: "F",
          height: "6-11",
          weight: 242,
          lastAttended: "Filathlitikos",
          country: "Greece",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    handlePatientRow(row) {
        this.$router.push("/ward/");
    },
  },
};
</script>
