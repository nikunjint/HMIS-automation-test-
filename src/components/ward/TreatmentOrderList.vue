<template lang="">
  <div class="mb-1 text-end">
        <a href="#" class="btn btn-sm btn-primary btn-gradient text-uppercase me-2"><em
            class="bi bi-plus-circle me-1"></em>
          Add Treatment Order</a>
        <a href="#" class="btn btn-sm btn-dark text-uppercase"><em class="bi bi-printer me-1"></em> Print</a>
      </div>
      <h5 class="text-primary mb-3">Today's Treatment Order</h5>
      <div class="table-responsive">
        <table class="table table-sm table-bordered align-middle text-center">
          <thead class="table-primary text-light">
            <tr>
              <th>Date</th>
              <th width="150">Time</th>
              <th>Drug</th>
              <th>Dose</th>
              <th>Route</th>
              <th width="250">Direction</th>
              <th width="250">Doctor's Signature</th>
              <th width="200">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2079/03/09</td>
              <td>
                2 AM
              </td>
              <td>CUTICELL-C DRESSING</td>
              <td>10</td>
              <td>m</td>
              <td>
                <select class="form-select" name="" id="">
                  <option value="OD" selected="">OD</option>
                  <option value="BD">BD</option>
                  <option value="TDS">TDS</option>
                  <option value="QID">QID</option>
                  <option value="6 times a day">6 times a day</option>
                  <option value="SOS">SOS</option>
                  <option value="STAT">STAT</option>
                </select>
              </td>
              <td>
                <select class="form-select" name="" id="">
                  <option value="OD" selected="">Select Staff</option>
                  <option value="281"> ABHUSHAN S. TULADHAR</option>
                  <option value="1458"> ABI</option>
                  <option value="1433"> ABISHEK GUPTA</option>
                  <option value="1459"> ABJ</option>
                  <option value="22"> ACHYUT RAJBHANDARI</option>
                  <option value="1374"> AJIT THAPA</option>
                  <option value="1395"> AMIR SHRESTHA</option>
                  <option value="1430"> AMIT GAULI</option>
                  <option value="321"> AMIT SHRESTHA</option>
                  <option value="1325"> AMIT SHRESTHA (CARDIO)</option>
                  <option value="1379"> AMRITA PAHARI GHALE</option>
                  <option value="8"> ANAND P. SHRESTHA</option>
                </select>
              </td>
              <td>
                <div class="d-flex gap-2 align-items-center justify-content-center">
                  <button data-bs-toggle="modal" data-bs-target="#editTreatmentOrder"
                    class="btn btn-outline-primary btn-sm">
                    <em class="bi bi-pencil"></em> Edit</button>
                  <button class="btn btn-outline-danger btn-sm"> <em class="bi bi-x-circle"></em> Discontinue</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2079/03/09</td>
              <td>
                2 AM
              </td>
              <td>CUTICELL-C DRESSING</td>
              <td>10</td>
              <td>m</td>
              <td>
                <select class="form-select" name="" id="">
                  <option value="OD" selected="">OD</option>
                  <option value="BD">BD</option>
                  <option value="TDS">TDS</option>
                  <option value="QID">QID</option>
                  <option value="6 times a day">6 times a day</option>
                  <option value="SOS">SOS</option>
                  <option value="STAT">STAT</option>
                </select>
              </td>
              <td>
                <select class="form-select" name="" id="">
                  <option value="OD" selected="">Select Staff</option>
                  <option value="281"> ABHUSHAN S. TULADHAR</option>
                  <option value="1458"> ABI</option>
                  <option value="1433"> ABISHEK GUPTA</option>
                  <option value="1459"> ABJ</option>
                  <option value="22"> ACHYUT RAJBHANDARI</option>
                  <option value="1374"> AJIT THAPA</option>
                  <option value="1395"> AMIR SHRESTHA</option>
                  <option value="1430"> AMIT GAULI</option>
                  <option value="321"> AMIT SHRESTHA</option>
                  <option value="1325"> AMIT SHRESTHA (CARDIO)</option>
                  <option value="1379"> AMRITA PAHARI GHALE</option>
                  <option value="8"> ANAND P. SHRESTHA</option>
                </select>
              </td>
              <td>
                <div class="d-flex gap-2 align-items-center justify-content-center">
                  <button data-bs-toggle="modal" data-bs-target="#editTreatmentOrder"
                    class="btn btn-outline-primary btn-sm">
                    <em class="bi bi-pencil"></em> Edit</button>
                  <button class="btn btn-outline-danger btn-sm"> <em class="bi bi-x-circle"></em> Discontinue</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2079/03/09</td>
              <td>
                2 AM
              </td>
              <td>CUTICELL-C DRESSING</td>
              <td>10</td>
              <td>m</td>
              <td>
                <select class="form-select" name="" id="">
                  <option value="OD" selected="">OD</option>
                  <option value="BD">BD</option>
                  <option value="TDS">TDS</option>
                  <option value="QID">QID</option>
                  <option value="6 times a day">6 times a day</option>
                  <option value="SOS">SOS</option>
                  <option value="STAT">STAT</option>
                </select>
              </td>
              <td>
                <select class="form-select" name="" id="">
                  <option value="OD" selected="">Select Staff</option>
                  <option value="281"> ABHUSHAN S. TULADHAR</option>
                  <option value="1458"> ABI</option>
                  <option value="1433"> ABISHEK GUPTA</option>
                  <option value="1459"> ABJ</option>
                  <option value="22"> ACHYUT RAJBHANDARI</option>
                  <option value="1374"> AJIT THAPA</option>
                  <option value="1395"> AMIR SHRESTHA</option>
                  <option value="1430"> AMIT GAULI</option>
                  <option value="321"> AMIT SHRESTHA</option>
                  <option value="1325"> AMIT SHRESTHA (CARDIO)</option>
                  <option value="1379"> AMRITA PAHARI GHALE</option>
                  <option value="8"> ANAND P. SHRESTHA</option>
                </select>
              </td>
              <td>
                <div class="d-flex gap-2 align-items-center justify-content-center">
                  <button data-bs-toggle="modal" data-bs-target="#editTreatmentOrder"
                    class="btn btn-outline-primary btn-sm">
                    <em class="bi bi-pencil"></em> Edit</button>
                  <button class="btn btn-outline-danger btn-sm"> <em class="bi bi-x-circle"></em> Discontinue</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
export default {

}
</script>
<style lang="">
 
</style>