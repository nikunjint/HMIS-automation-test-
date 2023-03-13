<template>
  <div class="box-header mb-2">
    <RouterLink to="/clinical" class="btn btn-outline-primary py-1 btn-sm">
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

  <h5 class="mb-0">Sample Collection</h5>
  <hr class="mt-2" />

  <div class="searchFilter p-2">
    <form ref="form" class="row g-1" @submit.prevent="OnCreatePost">
      <div class="card mb-1">
        <div class="card-body">
          <div class="row">
            <div class="grid-body mb-2">
              <div>
                <div class="input-group input-group-sm">
                  <span class="input-group-text x" id="inputGroup-sizing-sm"
                    >From Date</span
                  >
                  <input
                    type="text"
                    class="nepali-datepicker form-control"
                    :value="nepalidates.bs"
                    @input="updateNepaliDates"
                    placeholder="MM/DD/YYYY"
                  />
                </div>
              </div>

              <div>
                <div class="input-group input-group-sm">
                  <span class="input-group-text x" id="inputGroup-sizing-sm"
                    >To Date:</span
                  >
                  <input
                    type="text"
                    class="nepali-datepickertwo form-control"
                    :value="nepalidatestwo.bs"
                    @input="updateNepaliDatesTwo"
                    placeholder="MM/DD/YYYY"
                  />
                </div>
              </div>

              <div>
                <input
                  class="form-control"
                  type="number"
                  v-model="numDays"
                  placeholder="Days"
                />
              </div>

              <!---Column-->
              <div>
                <select
                  class="form-select small"
                  aria-label=""
                  v-model="searchField"
                >
                  <option selected>Patient From</option>
                  <option value="1">All</option>
                  <option value="2">EMR</option>
                  <option value="3">IPD</option>
                  <option value="3">OPD</option>
                </select>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-1 ps-3 px-0">
              <div>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Global Search"
                  v-model="globalsearch"
                />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-1 ps-2 px-0">
              <select v-model="searchField" aria-label="" class="form-select">
                <option value="">Select from</option>
                <option value="PATIENTTESTID">PATIENT ID</option>
                <option value="MOBILENO">MOBILE NUMBER</option>
                <option value="LABNO">LAB NUMBER</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-1 ps-2 px-0">
              <div>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Department"
                />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-3 ps-2 px-0">
              <div>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Category"
                />
              </div>
            </div>

            <button type="submit" class="btn btn-filled addnew-btn float-end">
              <span>Search</span
              ><em class="bi bi-search fs-5 align-self-center"></em>
            </button>
          </div>
        </div>
      </div>

      <div
        class="filterSection d-flex align-items-center justify-content-center mt-1"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="all"
            v-model="selectedValue"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            @change="OnCreatePost"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1"> All </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="notreceived"
            v-model="selectedValue"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            @change="OnCreatePost"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Pending
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="3"
            v-model="selectedValue"
            @change="OnCreatePost"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label class="form-check-label" for="flexRadioDefault3">
            Sample Collected
          </label>
        </div>
      </div>
    </form>
  </div>

  <div class="row h-100 mt-1">
    <div class="col-md-12 mb-2 border-end">
      <div class="position-relative mt-2">
        <loader width="170" :loaderState="loading" />

        <div v-if="selectedOption === 'option1'">
          <EasyDataTable
            :search-field="searchField"
            show-index
            :search-value="searchValue"
            v-model:items-selected="itemsSelected"
            :headers="headers"
            :items="patients"
          >
            <template #item-TESTPROGRESSSTATUS="item">
              <!-- <img
              src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
              style="width: 100px; height: 80px"
            /> -->

              <div
                class="status"
                v-html="
                  item.TESTPROGRESSSTATUS == 2
                    ? '<div class=Pendingheader>Pending</div>'
                    : ''
                "
              ></div>
              <div
                class="status"
                v-html="
                  item.TESTPROGRESSSTATUS == 3 && item.ISLABRECEIVED == 'Y'
                    ? '<div class=lreceieved>Lab Received</div>'
                    : ''
                "
              ></div>
              <div
                class="status"
                v-html="
                  item.TESTPROGRESSSTATUS == 3 && item.ISLABRECEIVED == 'N'
                    ? '<div class=scollect>Sample Collected</div>'
                    : ''
                "
              ></div>
              {{ item.TESTPROGRESSSTATUS == 4 ? "Findings Entered" : "" }}
              {{ item.TESTPROGRESSSTATUS == 5 ? "Verified" : "" }}
              <div
                class="status"
                v-html="
                  item.TESTPROGRESSSTATUS == 6
                    ? '<div class=Dispatchedheader>Dispatched</div>'
                    : ''
                "
              ></div>
            </template>
            <template #item-indicator="item">
              <div v-if="item.TESTPROGRESSSTATUS == 2">
                <form
                  @submit.prevent="
                    getSampleCollectionData(item.PATIENTID, item.BILLNO)
                  "
                >
                  <button class="btn btn-sm btn-primary small">
                    Sample Collection
                  </button>
                </form>
              </div>
              <div v-if="item.TESTPROGRESSSTATUS == 3">
                <form
                  @submit.prevent="
                    getSampleCollectionData(item.PATIENTID, item.BILLNO)
                  "
                >
                  <button class="btn btn-sm btn-primary small">
                    Collected Sample
                  </button>
                </form>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </div>
  </div>

  <div ref="modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalData }}</h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "@/components/Loader.vue";
import NavigateToPages from "@/components/NavigateToPages.vue";
import axios from "axios";
import NepaliDateConverter from "nepali-date-converter";
import "../../assets/js/nepali-multi-date-picker/nepali.datepicker.v3.7.min.js";
import "../../assets/js/nepali-multi-date-picker/css/nepali.datepicker.v3.7.min.css";
import Swal from "sweetalert2/dist/sweetalert2";

import { ref } from "vue";
export default {
  components: {
    loader,
    NavigateToPages,
  },

  data() {
    return {
      patientSearchResult: "",
      patients: [],
      pendingpatients: [],
      loading: true,
      nepalidates: "",
      nepalidatestwo: "",
      searchField: "",
      selectedValue: "all",
      note: "",
      nepalidates: {
        bs: "",
      },
      nepalidatestwo: {
        bs: "",
      },
      selectedOption: "option1", // default to option 1
      option2Data: null,
      selectedDate: null,
      fromDate: null,
      patientId: "",
      billNo: "",

      searchValue: ref(""),

      searchField: ref(""),

      headers: [
        { text: "Patient Id", value: "PATIENTID" },
        { text: "Patient Name", value: "PATIENTNAME" },
        { text: "Age/Gender	", value: "AGEGENDER" },
        { text: "Mobile", value: "MOBILENO" },
        { text: "Testname", value: "TESTNAME" },
        { text: "Bill No", value: "BILLNO" },
        { text: "Sample No", value: "SAMPLENO" },
        { text: "Lab No", value: "LABNO" },
        { text: "Test Date", value: "TESTDATE" },
        { text: "Type", value: "PATIENTTYPE" },
        { text: "Status", value: "TESTPROGRESSSTATUS" },
        { text: "Referred By", value: "REFFEREDBY" },
        { text: "Received By", value: "LABRECEIVEDBY" },
        { text: "Result By", value: "RESULTENTEREDBY" },
        { text: "Verified By", value: "VERIFIEDBY" },
        { text: "Authorized By", value: "AUTHORIZEDBY" },
        { text: "Action", value: "indicator" },
      ],
    };
  },

  computed: {
    numDays() {
      if (this.nepalidates.bs && this.nepalidatestwo.bs) {
        const from = new Date(this.nepalidates.bs);
        const to = new Date(this.nepalidatestwo.bs);
        return Math.round((to.getTime() - from.getTime()) / 86400000);
      }
      return 0;
    },
  },

  mounted() {
    let a = new NepaliDate();
    let formattedDate = a.format("YYYY/MM/DD");

    console.log(a, "dateasdpatient");

    this.OnCreatePost();

    this.nepalidates.bs = formattedDate;
    this.nepalidatestwo.bs = formattedDate;
    this.selectedValue = "notreceived";

    var mainInput = document.querySelector(".nepali-datepicker");
    var mainInputTwo = document.querySelector(".nepali-datepickertwo");

    /* Initialize Datepicker with options */
    mainInput.nepaliDatePicker({
      dateFormat: "YYYY/MM/DD",
      defaultDate: this.nepalidates.bs, // set default date
      onChange: (selectedDate) => {
        this.nepalidates = selectedDate;
      },
    });

    mainInputTwo.nepaliDatePicker({
      dateFormat: "YYYY/MM/DD",
      defaultDate: this.nepalidatestwo.bs, // set default date
      onChange: (selectedDate) => {
        this.nepalidatestwo = selectedDate;
      },
    });

    this.userDetails = this.$store.state.userDetails;

    const config = {
      headers: {
        Authorization: `Bearer ${this.$store.state.userDetails.access_token}`,
      },
    };

    axios
      .post(
        `${import.meta.env.VITE_API_ENDPOINT}/lab/getPatientList`,
        {
          fromDate: formattedDate,
          toDate: formattedDate,
          labSection: "samplecollection",
          status: "notreceived",
          globalSearchBy: "LABNO",
          globalSearchValue: this.globalsearch,
        },
        config
      )
      .then((res) => {
        this.patients = res.data.patientListData.result;
        this.pendingpatients = res.data.patientListData.result.filter(
          (skill) => skill.TESTPROGRESSSTATUS == "2"
        );
        this.labpatients = res.data.patientListData.result.filter(
          (skill) => skill.TESTPROGRESSSTATUS == "3"
        );

        this.loading = false;
        console.log(res.data.patientListData);
      });
  },

  methods: {
    updateNepaliDates(event) {
      this.nepalidates.bs = event.target.value;
    },
    updateNepaliDatesTwo(event) {
      this.nepalidatestwo.bs = event.target.value;
    },
    openModal() {
      this.$refs.modal.modal("show");
    },

    OnCreatePost() {
      this.loading = true;
      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/lab/getPatientList`,
          {
            fromDate: this.nepalidates.bs,
            toDate: this.nepalidatestwo.bs,
            labSection: "samplecollection",
            status: this.selectedValue,
            globalSearchBy: this.searchField,
            globalSearchValue: this.globalsearch,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.userDetails.access_token}`,
            },
          }
        )
        .then((res) => {
          this.patients = res.data.patientListData.result;
          console.log(res.data.patientListData.result);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);

          Swal.fire("Oops!", err.response.data.detail, "error");
        });
    },

    getSampleCollectionData(PATIENTID, BILLNO) {
      const formData = new FormData();
      formData.append("patientId", PATIENTID);
      formData.append("billNo", BILLNO);

      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/lab/getSampleCollectionData`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.userDetails.access_token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.$store.commit("setSampleCollectionData", res.data);

          this.$router.push({
            path: "/collected-sample/details/:projectId",
            name: "details",
            params: { projectId: PATIENTID },
          });
        })
        .catch((err) => {});
    },

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
    statusText(status) {
      return status === "2" ? "In Progress" : "";
    },
    patientUrl(index) {
      this.$router.push("/collected-sample/" + index);
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

.searchFilter {
  background: #80808014;
}

.searchFilter .card {
  background: unset;
  border: none;
}

.filterSection .form-check:not(:last-child) {
  margin-right: 20px;
}

.filterSection .form-check {
  background: white;
  width: fit-content;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  box-shadow: rgb(0 0 0 / 13%) 0px 5px 15px;
}

.filterSection .form-check-input {
  margin-top: -2px;
  margin-left: initial;
}

.filterSection .form-check label {
  padding-left: 6px;
  padding-top: 0px;
}

.grid-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

.bi-search {
  color: white;
  font-size: 14px !important;
}
</style>
