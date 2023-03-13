<template>
  <div class="box-header mb-2">
    <RouterLink
      to="/sample-collection"
      class="btn btn-outline-primary py-1 px-2 btn-sm"
    >
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESCs
    </RouterLink>

    <h5 class="mb-0 text-primary text-uppercase">COLLECTED SAMPLEs</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/patient-list">Pathology</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          COLLECTED SAMPLE
        </li>
      </ol>
    </nav>
  </div>

  <!-- 
  <div>
  <div v-for="samplecollection in $store.state.sampleCollectionData.patientInfo" v-bind:key="samplecollection">
  {{ samplecollection }}
</div>
</div> -->

  <div></div>

  <h5 class="mb-0">Patient Informations</h5>

  <hr class="mt-2" />

  <div class="flex-grow-1">
    <div class="light-border-info-box d-flex flex-wrap">
      <div class="col-4 light-border-info-box_item">
        <strong>PatientID:</strong>
        {{ this.$store.state.sampleCollectionData.patientInfo.PATIENTID }}
        
      </div>
      <div class="col-4 light-border-info-box_item">
        <strong>Name:</strong>
        {{ this.$store.state.sampleCollectionData.patientInfo.PATIENTNAME }}
      </div>
      <div class="col-4 light-border-info-box_item">
        <strong>Age/Gender:</strong>
        {{ this.$store.state.sampleCollectionData.patientInfo.AGE }}/{{
          this.$store.state.sampleCollectionData.patientInfo.GENDER
        }}
      </div>
      <div class="col-4 light-border-info-box_item">
        <strong>Address:</strong>
        {{ this.$store.state.sampleCollectionData.patientInfo.ADDRESS }}
      </div>
      <div class="col-4 light-border-info-box_item">
        <strong>Mobile No:</strong>
        {{ this.$store.state.sampleCollectionData.patientInfo.MOBILENO }}
      </div>
      <div class="col-4 light-border-info-box_item">
        <strong>Bill No:</strong>
        {{ this.$store.state.sampleCollectionData.patientInfo.BILLNO }}
      </div>
    </div>
  </div>

  <div class="tab-content mt-3" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-overview"
      role="tabpanel"
      aria-labelledby="pills-overview-tab"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="bg-light mb-4 bg-gradient p-1 border rounded shadow-sm">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="rounded-circle border shadow-sm p-1 h-120"
                  src="https://picsum.photos/id/200/125"
                />
              </div>
              <div class="card-body pb-0 ms-2">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text"
                        >Patient Weight (KG):</label
                      >
                      <input class="form-control" value="78001658" />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-6 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text"
                        >Patient height (CM):</label
                      >
                      <input
                        class="form-control"
                        :value="patientInfo.patient_name"
                      />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-6 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Manual sample no:</label>
                      <input
                        class="form-control"
                        :value="patientInfo.age + '/' + patientInfo.sex"
                      />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-6 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Sample date:</label>
                      <input class="form-control" value="2079/02/29 10:18:03" />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-6 mb-1">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Sample time:</label>
                      <input class="form-control" value="2079/02/23 12:42:01" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-1 text-right">
                    <button type="submit" class="btn btn-success btn-small">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="bg-light mb-4 bg-gradient p-1 border rounded shadow-sm">
            <div class="d-flex align-items-center">
              <div class="card-body pb-0 ms-0">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Lab No:</label>
                      <input class="form-control" value="78001658" disabled />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-6 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Collection No:</label>
                      <input
                        class="form-control"
                        :value="patientInfo.patient_name"
                        disabled
                      />
                    </div>
                  </div>

                  <!---Column-->
                  <div class="col-md-3 mb-1">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Preview:</label>
                      <input class="form-control" type="number" />
                    </div>
                  </div>

                  <div
                    class="col-md-9 d-flex align-items-center justify-content-center"
                  >
                    <a
                      href="/patient-list"
                      class="btn btn-primary py-1 px-2 ms-2 btn-sm"
                      >Print Sticker
                    </a>
                    <a
                      href="/patient-list"
                      class="btn btn-primary py-1 px-2 ms-2 btn-sm"
                      >Re-Print
                    </a>
                    <a
                      href="/patient-list"
                      class="btn btn-primary py-1 px-2 ms-2 btn-sm"
                      >Worklist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--row-->

      <div class="bg-light p-2 border mb-3 rounded" style="min-height: 320px">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Sample Collection
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Sample Configure
            </button>
          </li>
        </ul>
        <div
          class="tab-content"
          id="pills-tabContent"
          style="height: 230px; overflow: auto"
        >
          <div
            class="tab-pane fade show active"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="row">
              <div class="col-lg-6">
                <div class="table-responsive">
                  <table
                    class="table text-center align-middle table-striped table-hover border-none"
                  >
                    <!-- 
  <div>
  <div v-for="samplecollection in $store.state.sampleCollectionData.patientInfo" v-bind:key="samplecollection">
  {{ samplecollection }}
</div>
</div> -->

                    <thead class="bg-primary text-light">
                      <tr>
                        <th style="padding-left: 10px">
                          All
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="selectAll"
                            @click="
                              selectAll
                                ? selectAllSampleCollections(false)
                                : selectAllSampleCollections(true)
                            "
                          />
                        </th>
                        <th class="w-25">Test Name</th>
                        <th class="w-25">Color</th>
                        <th class="w-25">Instruction</th>
                        <th
                          style="
                            display: flex;
                            align-items: center;
                            border: none;
                            justify-content: space-around;
                          "
                        >
                          Remarks

                          <button
                            class="btn btn-primary btn-collect"
                            style="margin: initial"
                            @click="collectSample(samplecollection, remarks)"
                          >
                            Collect
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="samplecollection in $store.state
                          .sampleCollectionData.testToBeCollected"
                        v-bind:key="samplecollection"
                      >
                        <td>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="samplecollection.selected"
                          />
                        </td>
                        <td>{{ samplecollection.testname }}</td>
                        <td>
                          <div
                            :style="{
                              backgroundColor: samplecollection.COLORCODE,
                              width: '20px',
                              height: '20px',
                              margin: 'auto',
                            }"
                          ></div>
                        </td>
                        <td>
                          {{ samplecollection.samplesource }},{{
                            samplecollection.container
                          }},{{ samplecollection.samplequantity }}
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Remarks"
                            class="form-control w-100 ps-2"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="table-responsive">
                  <table
                    class="table text-center align-middle table-striped table-hover"
                  >
                    <thead class="bg-primary text-light">
                      <tr>
                        <th>
                          All
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="selectAllTwo"
                            @click="
                              selectAllTwo
                                ? selectAllSampleCollectionsTwo(false)
                                : selectAllSampleCollectionsTwo(true)
                            "
                          />
                        </th>
                        <th>Collected Sample</th>
                        <th>
                          <button
                            class="btn btn-primary btn-danger btn-collect border-0"
                            @click="
                              undocollectSample(samplecollection, remarks)
                            "
                          >
                            Undo Collected Sample
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="samplecollection in $store.state
                          .sampleCollectionData.collectedTestData"
                        v-bind:key="samplecollection"
                      >
                        <td>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="samplecollection.selected"
                          />
                        </td>
                        <td>{{ samplecollection.TESTNAME }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="table-responsive">
                  <table
                    class="table text-center align-middle table-striped table-hover"
                  >
                    <thead class="bg-primary text-light">
                      <tr>
                        <th>Test Name</th>
                        <th>Color</th>
                        <th>Sample Source</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>24 HRS URINARY AMYLASE</td>

                        <td>
                          <input
                            type="text"
                            placeholder="Remarks"
                            class="form-control w-100"
                          />
                        </td>

                        <td>
                          <input
                            type="text"
                            placeholder="Remarks"
                            class="form-control w-100"
                          />
                        </td>

                        <td>
                          <input
                            type="text"
                            placeholder="Remarks"
                            class="form-control w-100"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";
import MedicalHistory from "../../components/charts/MedicalHistory.vue";
import VueCookies from "vue-cookies";

export default {
  components: {
    MedicalHistory,
  },

  data() {
    return {
      patientInfo: "",
      isPatientIn: false,
      oxygenRequired: false,
      responseData: {},
      patients: "",
      selectedRows: [], // An array to store the selected rows
      selectAll: false,
      selectAllTwo: false,
      collectedTestData: [],
    };
  },

  created() {
    this.getSampleCollectionData();
  },

  methods: {
    async getSampleCollectionData() {
      try {
        const formData = new FormData();
        formData.append("patientId", $route.params.projectId);
        formData.append("billNo", "TP79/80-0000160");
        const { data } = await axios
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
            console.log(res.data, detailstest);
            this.patients = res.data.patientInfo;
          });
      } catch (err) {
        // handle error
      }
    },

    async collectSample(samplecollection, remarks) {
      try {
        const formData = new FormData();
        formData.append(
          "patientId",
          this.$store.state.sampleCollectionData.patientInfo.PATIENTID 
        );
        formData.append(
          "billNo",
          this.$store.state.sampleCollectionData.patientInfo.BILLNO
        );
        formData.append(
          "ageAndGender",
          `${this.$store.state.sampleCollectionData.patientInfo.AGE} ${this.$store.state.sampleCollectionData.patientInfo.AGETYPE} / ${this.$store.state.sampleCollectionData.patientInfo.GENDER}`
        );
        formData.append(
          "inPatientId",
          this.$store.state.sampleCollectionData.patientInfo.PATIENTID
        );
        formData.append(
          "visitId",
          this.$store.state.sampleCollectionData.testToBeCollected[0].VISITID
        );
        formData.append(
          "isStat",
          this.$store.state.sampleCollectionData.status
        );

        this.$store.state.sampleCollectionData.testToBeCollected.forEach(
          (item) => {
            if (item.selected) {
              // Only append the selected items
              formData.append("testNameId[]", item.TESTNAMEID);
              formData.append("patientTestId[]", item.PATIENTTESTID);
            }
          }
        );

        for (const value of formData.values()) {
          console.log(value);
        }

        const { data } = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/lab/collectSample`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.userDetails.access_token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (data.status && data.labno) {
          alert('Sample Collected!')
          this.$store.dispatch("fetchSampleCollectionData");
         
        } else {
          alert(data.status);
        }
      } catch (err) {
        // handle error
      }
    },

    async undocollectSample(samplecollection, remarks) {
      try {
        const formData = new FormData();
        formData.append(
          "patientId",
          this.$store.state.sampleCollectionData.patientInfo.PATIENTID
        );
        formData.append(
          "billNo",
          this.$store.state.sampleCollectionData.patientInfo.BILLNO
        );

        this.$store.state.sampleCollectionData.collectedTestData.forEach(
          (item) => {
            if (item.selected) {
              // Only append the selected items
              formData.append("patientTestId[]", item.PATIENTTESTID);
            }
          }
        );

        const { data } = await axios.post( 
          `${import.meta.env.VITE_API_ENDPOINT}/lab/undoSampleCollection`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.userDetails.access_token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (data.status) {
          alert('Undo Sample Collected!')
          this.$store.dispatch("fetchSampleCollectionData");
        
        }
      } catch (err) {
        // handle error
      }
    },

    selectAllSampleCollections(value) {
      this.$store.state.sampleCollectionData.testToBeCollected.forEach(
        (sampleCollection) => {
          sampleCollection.selected = value;
        }
      );
    },

    selectAllSampleCollectionsTwo(value) {
      this.$store.state.sampleCollectionData.collectedTestData.forEach(
        (sampleCollection) => {
          sampleCollection.selected = value;
        }
      );
    },
  },
};
</script>

<style scoped>
.btn-collect {
  padding: 0 10px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 14px;
  font-weight: 300;
}

.btn-danger {
  background: #dd4b39;
}
</style>
