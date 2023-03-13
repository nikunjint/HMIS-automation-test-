<template lang="">
 <div class="mb-3 text-end">
              <button @click="printNurseNote" class="btn btn-sm btn-dark text-uppercase"><em class="bi bi-printer me-1"></em> Print</button>
            </div>
            <div class="bg-light mb-3 border text-center rounded  p-2 shadow-sm d-flex">
              <div class="col">
                <strong>Inpatient No.</strong>: 7800263
              </div>
              <div class="col">
                <strong>Hospital No.:</strong>: 78001596
              </div>
              <div class="col">
                <strong>Patient Name:</strong>: Prunima Oli
              </div>
              <div class="col">
                <strong>Age / Sex:</strong>: 21 Y / F
              </div>
              <div class="col">
                <strong>Ward:</strong>: Deluxe Suite
              </div>
            </div>


           
  <div class="mb-3 d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <label for="stayOption" class="text-nowrap me-2">Show Data For</label>
                <select v-model="setStay" name="" id="stayOption" class="form-select form-select-sm">
                  <option value="A">All Stay</option>
                  <option value="C">This Stay</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#nurseNote">
                <em class="bi bi-plus-circle"></em> Add Nurse Note
              </button>
            </div>
            
  <div class="table-responsive position-relative" style="max-height:400px;">
              <table class="table table-bordered table-sm text-center align-middle">
                <thead class="table-primary text-light position-sticky top-0 zindex-sticky">
                  <tr>
                    <th  width="200">Date / Time</th>
                    <th>Nursing Note</th>
                    <th  width="200">Signature</th>
                    <th width="300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="nursingNote"
                    v-for="{ userId, datapostdate, dataposttime, nursenote, datapostby,bsdate } in nursingNote">
                    <td width="250">
                      <strong>{{ bsdate }}</strong> | {{ dataposttime }}
                    </td>
                    <td>
                      {{ nursenote }}
                    </td>
                    <td>
                      {{ datapostby }}
                    </td>
                    <td>
                      <button class="btn btn-sm btn-outline-dark me-2"> <em class="bi bi-eye"></em> View</button>
                      <button class="btn btn-sm btn-outline-primary me-2"> <em class="bi bi-pencil-square"></em>
                        Edit</button>
                      <button class="btn btn-sm btn-outline-danger"> <em class="bi bi-trash"></em> Delete</button>
                    </td>
                  </tr>
                  <tr v-if="nursingNote.length === 0" class="table-danger">
                    <td colspan="4">Sorry, No data Available </td>
                  </tr>
                </tbody>
              </table>
            </div>
</template>
<script>

import axios from 'axios'
import printJS from 'print-js'
import AddNurseNote from './AddNurseNote.vue';
export default {
  components: {
    AddNurseNote
  },
  data() {
    return {
      nursingNote: '',
      setStay: 'A',
      nursingNoteParam: {
        patientId: 1,
        inPatientId: 1,
        noteType: 'A'
      },
      deleteNoteFormData: {
        userId: 1,
        codeId: 3,
        deleteFor: "NUOB_NOTE",
        deleteFrom: "IPD"
      }
    }
  },
  watch: {
    setStay() {
      this.getNurseNote({
        patientId: 1,
        inPatientId: 1,
        noteType: this.setStay
      });
    },
  },
  computed: {

  },
  mounted() {
    this.getNurseNote(this.nursingNoteParam);
  },
  methods: {
    /**
    * Get Nurse Note
    */
    async getNurseNote(params) {
      const config = {
        headers: { Authorization: `Bearer ${this.$store.state.token}` }
      };
      const bodyParameters = await params;
      await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/nursing/getNurseNoteList`, bodyParameters, config).then(async (res) => {
        this.nursingNote = await res.data.nursingNote;
      }).catch((err) => {
        console.log(err);
      });
    },
    /**
     * Delete nurse note
     */
    async DeleteNurseNote(params) {
      const config = {
        headers: { Authorization: `Bearer ${this.$store.state.token}` }
      };
      const bodyParameters = await params;
      await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/nursing/deleteNursingTemplate
`, deleteNoteFormData, config).then(async (res) => {
        // console.log(res)
      }).catch((err) => {
        console.log(err);
      });
    },

    // Print PDF
    printNurseNote() {
      printJS({
        printable: this.nursingNote,
        showModal: true,
        documentTitle: 'Nursing Note List',
        properties: [{ field: 'dataposttime', displayName: 'Time' }, { field: 'datapostby', displayName: 'Posted By' }, { field: 'nursenote', displayName: 'Note' }],
        type: 'json',
        header: '<h3>Nursing Note List</h3>',
        gridHeaderStyle: 'text-align:left;',
        style: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap'); h3{ color:#0d2f66; } body{ font-family:'Poppins',sans-serif; font-weight:300; font-size:13px;  };",
      })
    }
  }
}
</script>
<style lang="css">
</style>