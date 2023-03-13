<template>
  <div class="box-header mb-2">
    <RouterLink
      to="/sample-collection"
      class="btn btn-outline-primary py-1 px-2 btn-sm"
    >
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">SAMPLE COLLECTION</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/patient-list">Pathology</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          SAMPLE COLLECTION
        </li>
      </ol>
    </nav>
  </div>

  <h5 class="mb-0">Patient Information</h5>
  <hr class="mt-2" />

  <div class="flex-grow-1">
    <div class="light-border-info-box d-flex flex-wrap">
      <div class="col-3 light-border-info-box_item">
        <strong>PatientID:</strong> Male
      </div>
      <div class="col-3 light-border-info-box_item">
        <strong>Name:</strong> 39 Year 3 Month 13 Days
      </div>
      <div class="col-3 light-border-info-box_item">
        <strong>Age/Gender:</strong> Edward Thomas
      </div>
      <div class="col-3 light-border-info-box_item">
        <strong>Patient Type:</strong> 7896541230
      </div>
      <div class="col-3 light-border-info-box_item">
        <strong>Address:</strong> 7896541230
      </div>
      <div class="col-3 light-border-info-box_item">
        <strong>Mobile No:</strong> 7896541230
      </div>
      <div class="col-3 light-border-info-box_item">
        <strong>Bill No:</strong> 7896541230
      </div>
    </div>
  </div>

  <div class="tab-content mt-2" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-overview"
      role="tabpanel"
      aria-labelledby="pills-overview-tab"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="bg-light mb-2 bg-gradient p-1 border rounded shadow-sm">
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
                  <div class="col-md-6 mb-1 d-flex align-items-center justify-content-between">
                    <div class="input-group input-group-sm w-50">
                      <label class="input-group-text">Preview:</label>
                      <input class="form-control" type="number" />
                    </div>

                    <div class="form-check form-check-inline" style="margin-right:0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >STAT</label
                      >
                    </div>
                  </div>

                  <div
                    class="col-md-6 d-flex align-items-center"
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
                    class="table text-center align-middle table-striped table-hover"
                  >
                    <thead class="bg-primary text-light">
                      <tr>
                        <th>All</th>
                        <th class="w-25">Test Name</th>
                        <th>Remarks</th>
                        <th>
                          <button class="btn btn-primary btn-collect">
                            Collect
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>24 HRS URINARY AMYLASE</td>
                        <td colspan="2">
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
              <div class="col-lg-6">
                <div class="table-responsive">
                  <table
                    class="table text-center align-middle table-striped table-hover"
                  >
                    <thead class="bg-primary text-light">
                      <tr>
                        <th>All</th>
                        <th>Collected Sample</th>
                        <th>
                          <button
                            class="btn btn-primary btn-danger btn-collect border-0"
                          >
                            Undo Collected Sample
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td colspan="2">24 HRS URINARY AMYLASE</td>
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
