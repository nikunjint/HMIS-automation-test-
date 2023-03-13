<template>
  <div class="box-header mb-2">
    <RouterLink
      to="/lab-verification"
      class="btn btn-outline-primary py-1 px-2 btn-sm"
    >
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">TEST RESULTS</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/test-result">Pathology</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">TEST RESULTS</li>
      </ol>
    </nav>
  </div>

  <h5 class="mb-0">FINDINGS</h5>
  <hr class="mt-2" />

  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-overview"
      role="tabpanel"
      aria-labelledby="pills-overview-tab"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="light-border-info-box d-flex flex-wrap">
            <div class="col-4 light-border-info-box_item">
              <strong>PatientID:</strong> Male
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Name:</strong> 39 Year 3 Month 13 Days
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Age/Gender:</strong> Edward Thomas
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Address:</strong> 7896541230
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Bill No:</strong> 7896541230
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Sample No:</strong> 7896541230
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Lab No:</strong> 7896541230
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Bill Date:</strong> 7896541230
            </div>
            <div class="col-4 light-border-info-box_item">
              <strong>Referred By:</strong> 7896541230
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="d-flex align-items-center">
            <div class="card w-100">
              <div class="pb-0 card-header">
                <h6 class="text-primary mb-1">
                  Select doctor for footer
                </h6>
              </div>
              <div class="p-2 card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >RAMESH DHAKHWA  (right)</label
                      >
                    </div>
                  </div>
                    <div class="col-md-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >SANAT CHALISE  (center)</label
                      >
                    </div>
                  </div>
                    <div class="col-md-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >SARALA MALLA  (center)</label
                      >
                    </div>
                  </div>
                    <div class="col-md-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >SARALA MALLA  (left)</label
                      >
                    </div>
                  </div>
                    <div class="col-md-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >SANAT CHALISE  (right)</label
                      >
                    </div>
                  </div>
                    <div class="col-md-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >RAMESH DHAKHWA  (center)</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--row-->

      <div
        class="bg-light p-2 border mb-3 rounded"
        style="min-height: 320px"
      >
        <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
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
              Findings
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
              Comment
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
              Footer Note
            </button>
          </li>
        </ul>
        <div
          class="tab-content"
          id="pills-tabContent"
       
        >
          <div
            class="tab-pane fade show active"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="table-responsive">
                  <table
                    class="table text-center align-middle table-striped table-hover"
                  >
                    <thead class="bg-primary text-light">
                      <tr>
                        <th>Test Date</th>
                        <th>Tests</th>
                        <th>Finding</th>
                        <th>Reference Range</th>
                        <th>Unit</th>
                        <th>Special Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2079/02/16</td>

                        <td>Bilrubin Total</td>

                        <td>
                          <input type="text" class="form-control w-100" />
                        </td>

                        <td>0.2 - 1.0</td>

                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2079/02/16</td>

                        <td>Bilrubin Total</td>

                        <td>
                          <input type="text" class="form-control w-100" />
                        </td>

                        <td>0.2 - 1.0</td>

                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2079/02/16</td>

                        <td>Bilrubin Total</td>

                        <td>
                          <input type="text" class="form-control w-100" />
                        </td>

                        <td>0.2 - 1.0</td>

                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2079/02/16</td>

                        <td>Bilrubin Total</td>

                        <td>
                          <input type="text" class="form-control w-100" />
                        </td>

                        <td>0.2 - 1.0</td>

                        <td></td>
                        <td></td>
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
                  <div class="col-md-4 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text"
                        >LFT:</label
                      >
                      <input class="form-control" value="78001658" />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-4 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text"
                        >Comment Code:</label
                      >
                      <input
                        class="form-control"
                        :value="patientInfo.patient_name"
                      />
                    </div>
                  </div>
                  <!---Column-->
                  <div class="col-md-4 mb-2">
                    <div class="input-group input-group-sm">
                      <label class="input-group-text">Comment:</label>
                      <input
                        class="form-control"
                        :value="patientInfo.age + '/' + patientInfo.sex"
                      />
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

export default {
  components: {
    MedicalHistory,
  },
  data() {
    return {
      patientInfo: "",
      isPatientIn: false,
      oxygenRequired: false,
    };
  },
  mounted() {
    axios
      .get(
        `https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients/${this.$route.params.id}`
      )
      .then((res) => {
        this.patientInfo = res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
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
