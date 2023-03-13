<template lang="">
 
 <div class="d-flex mb-2 justify-content-end">

    <div class="input-group input-group-sm" style="max-width:260px;">
    <input type="search" v-model="search" class="form-control" placeholder="Search by Keyword"/>
      <span class="input-group-text bg-primary text-light"><em class="bi bi-search"></em></span>
    </div>
  </div>
  
  <div class="table-responsive h-180px">
<table class="table table-bordered">
   <thead class="table-dark text-light">
     <tr class="position-sticky top-0 zindex-sticky">
       <th>
        Keyword
       </th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
     <tr v-if="filteredData" key={{$store.state.nursingTemplates.isAdded}} v-for="entry in filteredData" :key="entry.pstm_id">
    <td width="300">
    {{entry.pstm_keyword}}
    </td>
    <td>
      <button @click="$store.dispatch('useTemplateNote',entry.pstm_content)" class="btn btn-sm btn-success me-2">
      Use this template</button>
      <button class=" btn btn-sm btn-primary me-2"
      >Edit</button>
      <button @click="deleteNursingTemplate(entry.pstm_id)" 
      class="btn btn-sm btn-danger">Delete</button>
    </td>
    </tr>
    <tr class="" v-if="filteredData.length===0">
      <td class="fw-bold" colspan="2">No Records found</td>
    </tr>
   </tbody>
  </table>
  
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    data: String,
    templateNote: String,
  },
  data() {
    return {
      search: '',
    }
  },

  methods: {
    deleteNursingTemplate(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          const config = {
            headers: { Authorization: `Bearer ${this.$store.state.token}` }
          };
          axios.post(`${import.meta.env.VITE_API_ENDPOINT}/nursing/deleteNursingTemplate`, {
            userId: '1',
            codeId: id,
            deleteFor: 'NUOB_NOTE',
            deleteFrom: 'IPD'
          }, config).then((res) => {
            this.$store.dispatch('fetchNursingTemplate')
            this.$swal(
              'Deleted!',
              'Your Template has been deleted.',
              'success'
            )
          });

        }
      })
    },
    getTemplateNote(note) {
      console.log(note)
    }
  },
  computed: {
    getTemplateList() {
      return this.$store.getters.getNursingTemplate
    },
    filteredData() {
      return this.$store.getters.getNursingTemplate.filter(({ pstm_keyword }) => [pstm_keyword].some(val => val.toLowerCase().includes(this.search)));
    }

  },
  mounted() {
    this.$store.dispatch('fetchNursingTemplate')
  }
}
</script>
<style lang="">
 
</style>