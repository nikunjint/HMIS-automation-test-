<template>

  <div class="d-flex mb-4">
    <div class="input-group  me-3">
      <input type="text" class="form-control" autocomplete="off" placeholder="Enter Patients Name or ID"
        v-model="searchValue" />
      <span class="input-group-text bg-primary text-light" id="basic-addon2">
        <em class="bi bi-search"></em>
      </span>

    </div>
    <!--input-group-->
    <button class="btn text-nowrap btn-light border" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" data-bs-placement="top" title="Tooltip on top"><em
        class="bi bi-gear me-1"></em></button>

  </div>


  <EasyDataTable buttons-pagination border-cell :headers="headers" :items="items" :search-field="searchField"
    :search-value="searchValue" @click-row="patientUrl(1)">
    <template #loading>
      <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
        style="width: 100px; height: 80px;" />
    </template>
  </EasyDataTable>
</template>

<script  setup>
import { ref } from "vue";



const searchField = ref("player");
const searchValue = ref("");


const headers = [
  { text: "Patient ID.", value: "player" },
  { text: "Patient Name", value: "team" },
  { text: "Age/Sex", value: "number" },
  { text: "Mobile Number", value: "position" },
];


const items = [
  { "player": "Stephen Curry", "team": "GSW", "number": 30, "position": 'G', "height": '6-2' },
  { "player": "Lebron James", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', },
];

// direct to patient url on click
function patientUrl(id) {
  window.location.href = `/ward/${id}`
}
</script>
