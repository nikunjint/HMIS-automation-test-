<template lang="">
  <div >
    <hr />
    <h5>Edit Title Template</h5>
    <div class="row">
      <div class="col-lg-6 mb-3"><input type="text" placeholder="Title" value="This is a Title"
          class="form-control form-control-sm"></div>
      <div class="col-lg-6 mb-3"><select name="" id="" class="form-select form-select-sm">
          <option value="">Pathalogy Department</option>
        </select></div>
      <div class="col-lg-6 mb-3"><select name="" id="" class="form-select form-select-sm">
          <option selected value="">Subha Kumar Pandey</option>
        </select></div>
      <div class="col-lg-6 mb-3"><input type="text" disabled="" placeholder="NUOB_NOTE"
          class="form-control form-control-sm"></div>
      <div class="col-lg-12 mb-3"><textarea placeholder="this is a test note content" name=""
          class="form-control" id="" cols="30" rows="3"></textarea></div>

      <div class="text-end">
        <button @click="showTemplate = false" class="btn btn-danger me-2">Cancel</button><button
          class="btn btn-primary">Update
          Template</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">
 
</style>