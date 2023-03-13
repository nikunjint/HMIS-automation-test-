<script>
import { RouterLink, RouterView } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      identifierNumber: '',
      registrationType: '',
      selectSsf: '',
    }
  },
  methods: {
    message() { },
    async submitRegistration(e) {
      e.preventDefault()
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        // alert('Invalid form')
      }
    },
  },
  computed: {},
  validations() {
    return {
      identifierNumber: { required },
      registrationType: { required },
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        this.$router.push('/')
      }
    })
  },
}
</script>
<template>
  <div class="box-header mb-3">
    <RouterLink to="/" class="btn btn-outline-primary py-1 px-2 ms-2 btn-sm">
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">Registration Only</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/">Patient Administration</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Registration Only
        </li>
      </ol>
    </nav>
  </div>
  <!---Box Header-->
  <div class="box-body">
    <form action="" method="post" @submit="submitRegistration">
      <div class="row">
        <div class="col-md-9">
          <div class="card mb-3">
            <div class="card-header h6">
              <i class="bi bi-info-circle me-1 text-primary"></i> Basic
              Information
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3 mb-3">
                  <select v-model="registrationType" class="form-select small" aria-label=""
                    :class="{ ['is-invalid']: v$.registrationType.$error }" @blur="v$.registrationType.$touch">
                    <option selected value="">Select Type</option>
                    <option value="1">Insurance</option>
                    <option value="2">Social Security Fund</option>
                  </select>
                </div>
                <!---Column-->
                <div class="col-md-3 mb-3" v-if="registrationType == 2">
                  <select class="form-select small" v-model="selectSsf" aria-label="">
                    <option selected value="">Select SSF Type</option>
                    <option value="1">Medical</option>
                    <option value="2">Accident</option>
                  </select>
                </div>
                <!---Column-->
                <div class="col-md-3 mb-3" v-if="selectSsf == 1">
                  <select class="form-select small" aria-label="">
                    <option selected value="">Select Sub Product</option>
                    <option value="1">Medical Expenses (IP)</option>
                    <option value="2">Medical Expenses (OP)</option>
                    <option value="3">Maternity Expenses (IP)</option>
                    <option value="4">Maternity Expenses (OP)</option>
                    <option value="5">
                      Medical Expenses (New Born Child IP)
                    </option>
                    <option value="6">
                      Medical Expenses (New Born Child OP)
                    </option>
                    <option value="10">
                      Occupational Diseases (Medical Expenses)
                    </option>
                    <option value="11">
                      Occupational Diseases (Temporary Total Disability)
                    </option>
                    <option value="12">
                      Occupational Diseases (Permanent Disability)
                    </option>
                    <option value="13">
                      Occupational Diseases (Total Permanent Disability)
                    </option>
                  </select>
                </div>
                <!---Column-->
                <div class="col-md-3 mb-3" v-if="selectSsf == 2">
                  <select class="form-select small" aria-label="">
                    <option selected disabled value="">
                      Select Sub Product
                    </option>
                    <option value="14">
                      Employment Related Accident (Medical Expenses)
                    </option>
                    <option value="15">
                      Employment Related Accident (Temporary Total Disability)
                    </option>
                    <option value="16">
                      Employment Related Accident (Permanent Disability)
                    </option>
                    <option value="17">
                      Employment Related Accident (Total Permanent Disability)
                    </option>
                    <option value="18">
                      Other Accident (Except Employemnt Related)
                    </option>
                  </select>
                </div>
                <!---Column-->
                <div class="col-md-3">
                  <input type="number" class="form-control" :class="{ ['is-invalid']: v$.identifierNumber.$error }"
                    placeholder="Indentifier Number" v-model="identifierNumber" @blur="v$.identifierNumber.$touch" />
                </div>
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
                <div class="col-md-3 mb-3">
                  <div class="input-group">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
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
                    <input type="text" class="form-control" placeholder="First Name"
                      aria-label="Text input with dropdown button" />
                  </div>
                </div>
                <!---Column-->
                <div class="col-md-3 mb-3">
                  <input class="form-control" type="text" placeholder="Last Name" />
                </div>
                <!---Column-->
                <div class="col-md-2 mb-3">
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
                    <div class="ms-2 d-inline-block form-check form-switch mh-auto align-text-bottom"
                      style="min-height: auto">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    </div>
                    <label for="flexSwitchCheckChecked">Yes</label>
                  </div>
                </div>
                <!---column-->
                <div class="col-md-3">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text x" id="inputGroup-sizing-sm">(DOB) AD</span>
                    <input type="date" class="form-control" placeholder="Date of Birth (AD)" aria-label="Username"
                      aria-describedby="basic-addon1" />
                  </div>
                </div>
                <!---column-->
                <div class="col-md-3">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text x" id="inputGroup-sizing-sm">(DOB) BS</span>
                    <input type="date" class="form-control" placeholder="Date of Birth (AD)" aria-label="Username"
                      aria-describedby="basic-addon1" />
                  </div>
                </div>
                <!---column-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="user-media text-center">
            <div class="mb-2">
              <img class="user-media_img shadow-sm img-rounded rounded-circle" src="@/assets/img/patient.png" alt="" />
            </div>
            <button class="btn btn-primary btn-sm">
              <i class="bi bi-upload me-1"></i> Selct Image
            </button>
          </div>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-header h6">
          <i class="bi bi-person-lines-fill me-1 text-primary"></i> Contact
          Address
        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-md-2 mb-3">
              <select class="form-select small" aria-label="">
                <option selected>Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select small" aria-label="">
                <option selected>Province</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select small" aria-label="">
                <option selected>Select District</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select small" aria-label="">
                <option selected>Select Muncipality</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-1 mb-3">
              <select class="form-select small" aria-label="">
                <option selected>Ward</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input type="text" class="form-control" placeholder="Permanent Address" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input type="text" class="form-control" placeholder="Mobile Number" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input type="text" class="form-control" placeholder="Phone Number" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input type="text" class="form-control" placeholder="Citizenship Number" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input type="text" class="form-control" placeholder="Email Address" />
            </div>
            <!---Column-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-header h6">
              <i class="bi bi-clipboard me-1 text-primary"></i> Passport & Visa
              Information
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="Passport Number" />
                </div>
                <!---Column-->
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="Passport Valid Till" />
                </div>
                <!---Column-->
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="Enter Visa Expiry Date" />
                </div>
                <!---Column-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header h6">
              <i class="bi bi-person-rolodex me-1 text-primary"></i> Emergency
              Contact
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="E. Contact Name" />
                </div>
                <!---Column-->
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="Relationship" />
                </div>
                <!---Column-->
                <div class="col-md-4 mb-3">
                  <input type="text" class="form-control" placeholder="E. Phone Number" />
                </div>
                <!---Column-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end">
        <button type="submit" class="btn shadow btn-primary float-btn">
          SAVE (f12)
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
