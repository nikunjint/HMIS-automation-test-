<template>
  <div class="box-header mb-2">
    <RouterLink
      to="/patient-list"
      class="btn btn-outline-primary py-1 btn-sm"
    >
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">Pathology</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/">Investigation</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Pathology</li>
      </ol>
    </nav>
  </div>

<NavigateToPages />

  <h5 class="mb-0">TEST RESULT
</h5>
  <hr class="mt-2" />

<div class="searchFilter p-2">
  <form class="row g-1">
    <div class="card mb-1">
      <div class="card-body">
        <div class="row">
          <!---Column-->
          <div class="col-md-3">
            <select class="form-select small" aria-label="">
              <option selected>Select Scheme</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <!---Column-->
          <div class="col-md-3 mb-2">
            <div class="input-group">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MR.
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Separated link</a>
                </li>
              </ul>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                aria-label="Text input with dropdown button"
              />
            </div>
          </div>
          <!---Column-->
          <div class="col-md-3 mb-2">
            <input class="form-control" type="text" placeholder="Last Name" />
          </div>
          <!---Column-->
          <div class="col-md-2 mb-2">
            <select class="form-select small" aria-label="">
              <option selected>Gender</option>
              <option value="1">Male</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <!---Column-->
          <div class="col-md-1">
            <input class="form-control" type="text" placeholder="Age" />
          </div>
          <!---Column-->
          <div class="col-md-2">
            <select class="form-select small" aria-label="">
              <option selected>Jan</option>
              <option value="1">Feb</option>
              <option value="2">March</option>
              <option value="3">Three</option>
            </select>
          </div>
          <!---Column-->
          <div class="col-md-3 mt-2">
            <label class="form-check-label fw-bold me-3">Is Real DOB?</label>
            <div class="d-inline-block">
              <label>No</label>
              <div
                class="
                  ms-2
                  d-inline-block
                  form-check form-switch
                  mh-auto
                  align-text-bottom
                "
                style="min-height: auto"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
              </div>
              <label for="flexSwitchCheckChecked">Yes</label>
            </div>
          </div>
          <!---column-->
          <div class="col-md-3">
            <div class="input-group input-group-sm">
              <span class="input-group-text x" id="inputGroup-sizing-sm"
                >(DOB) AD</span
              >
              <input
                type="date"
                class="form-control"
                placeholder="Date of Birth (AD)"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!---column-->
          <div class="col-md-3">
            <div class="input-group input-group-sm">
              <span class="input-group-text x" id="inputGroup-sizing-sm"
                >(DOB) BS</span
              >
              <input
                type="date"
                class="form-control"
                placeholder="Date of Birth (AD)"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!---column-->
        </div>
      </div>
    </div>
  </form>

  <div class="filterSection d-flex align-items-center justify-content-center mt-1">
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
    All
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
  <label class="form-check-label" for="flexRadioDefault2">    

    
    Pending
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" >
  <label class="form-check-label" for="flexRadioDefault3">
    Sample Collected
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" >
  <label class="form-check-label" for="flexRadioDefault4">
    Lab Received
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" >
  <label class="form-check-label" for="flexRadioDefault5">
    Department Received
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" >
  <label class="form-check-label" for="flexRadioDefault6">
    Findings Completed
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" >
  <label class="form-check-label" for="flexRadioDefault7">
    Verified
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" >
  <label class="form-check-label" for="flexRadioDefault8">
    Dispatched
  </label>
</div>

  </div>
  </div>

  <div class="row h-100 mt-1">
    <div class="col-md-12 mb-2 border-end">
      <div class="position-relative mt-2">
        <loader width="170" :loaderState="loading" />
        <div class="table-responsive">
          <table
            class="table text-center align-middle table-striped table-hover"
          >
            <thead class="bg-primary text-light">
              <tr>
                <th>SN</th>
                <th>Patient Id</th>
                <th>Patient Name</th>
                <th>Age/Gender</th>
                <th>Mobile</th>
                <th>Test Name</th>
                <th>Bill No</th>
                <th>Sample No</th>
                <th>Lab No</th>
                <th>Test Date</th>
                <th>Type</th>
                <th>Status</th>
                <th>Referred By</th>
                <th>Received By</th>
                <th>Result By</th>
                <th>Verified  By</th>
                <th>Authorized  By</th>
                <th>Action</th>
          
              </tr>
            </thead>
            <tbody>
              <tr
                role="button"
                v-for="(patient, index) in patients"
                v-bind:key="patient"
               
                @click="patientUrl(patient.id)"
              >
                 <td>{{ index + 1 }}</td>
                <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_name }}</td>
                <td>
                  {{ patient.age }} / <span v-if="patient.sex == 'male'">M</span
                  ><span v-if="patient.sex == 'female'">F</span>
                </td>
                <td>{{ patient.phone_number }}</td>
                   <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_name }}</td>
                <td>{{ patient.patient_name }}</td>
                <td>{{ patient.patient_name }}</td>
                <td>
                  {{ patient.age }} / <span v-if="patient.sex == 'male'">M</span
                  ><span v-if="patient.sex == 'female'">F</span>
                </td>
                <td>{{ patient.phone_number }}</td>
                   <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_name }}</td>
                     <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_id }}</td>
                <td>{{ patient.patient_id }}</td>
               
                <td>
                    <button class="btn btn-sm btn-primary small" @click="patientUrl(patient.id)">Findings</button>
                </td>
         
              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
import loader from "@/components/Loader.vue";
import axios from "axios";
import NavigateToPages from "@/components/NavigateToPages.vue";

export default {
  components: {
    loader,
    NavigateToPages,
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
      this.$router.push("/test-result/" + id);
    },
  },
};
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


</style>