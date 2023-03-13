<template>
  <div class="box-header mb-3">
    <RouterLink to="/ward" class="btn btn-outline-primary py-1 px-2 ms-2 btn-sm">
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">Ward Patient Details</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/">Ward</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Patient Detail</li>
      </ol>
    </nav>
  </div>
  <ul class="nav nav-tabs mb-2" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="treatment-order-tab"
        data-bs-toggle="tab"
        data-bs-target="#treatment-order"
        type="button"
        role="tab"
        aria-controls="treatment-order"
        aria-selected="true"
      >
        Treatment Order
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="nursing-tab"
        data-bs-toggle="tab"
        data-bs-target="#nursing"
        type="button"
        role="tab"
        aria-controls="nursing"
        aria-selected="true"
      >
        Nursing
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="admission-history-tab"
        data-bs-toggle="tab"
        data-bs-target="#admission-history"
        type="button"
        role="tab"
        aria-controls="admission-history"
        aria-selected="false"
      >
        Admission History
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="soap-tab"
        data-bs-toggle="tab"
        data-bs-target="#soap"
        type="button"
        role="tab"
        aria-controls="soap"
        aria-selected="false"
      >
        SOAP
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="treatment-order"
      role="tabpanel"
      aria-labelledby="treatment-order-tab"
    >
      <div class="bg-light mb-3 border text-center rounded p-2 shadow-sm d-flex">
        <div class="col"><strong>Inpatient No.</strong>: 7800263</div>
        <div class="col"><strong>Hospital No.:</strong>: 78001596</div>
        <div class="col"><strong>Patient Name:</strong>: Prunima Oli</div>
        <div class="col"><strong>Age / Sex:</strong>: 21 Y / F</div>
        <div class="col"><strong>Ward:</strong>: Deluxe Suite</div>
      </div>
      <div class="mb-1 text-end">
        <a href="#" class="btn btn-sm btn-primary btn-gradient text-uppercase me-2"
          ><em class="bi bi-plus-circle me-1"></em> Add Treatment Order</a
        >
        <a href="#" class="btn btn-sm btn-dark text-uppercase"
          ><em class="bi bi-printer me-1"></em> Print</a
        >
      </div>
      <h5 class="text-primary mb-3">Today's Treatment Order</h5>
      <div ref="todaysTreatmentTable"></div>
      <h5 class="text-primary mb-3">Treatment Order History</h5>
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
              <td>2 AM</td>
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
                  <option value="281">ABHUSHAN S. TULADHAR</option>
                  <option value="1458">ABI</option>
                  <option value="1433">ABISHEK GUPTA</option>
                  <option value="1459">ABJ</option>
                  <option value="22">ACHYUT RAJBHANDARI</option>
                  <option value="1374">AJIT THAPA</option>
                  <option value="1395">AMIR SHRESTHA</option>
                  <option value="1430">AMIT GAULI</option>
                  <option value="321">AMIT SHRESTHA</option>
                  <option value="1325">AMIT SHRESTHA (CARDIO)</option>
                  <option value="1379">AMRITA PAHARI GHALE</option>
                  <option value="8">ANAND P. SHRESTHA</option>
                </select>
              </td>
              <td>
                <div class="d-flex gap-2 align-items-center justify-content-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#editTreatmentOrder"
                    class="btn btn-outline-primary btn-sm"
                  >
                    <em class="bi bi-pencil"></em> Edit
                  </button>
                  <button class="btn btn-outline-danger btn-sm">
                    <em class="bi bi-x-circle"></em> Discontinue
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2079/03/09</td>
              <td>2 AM</td>
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
                  <option value="281">ABHUSHAN S. TULADHAR</option>
                  <option value="1458">ABI</option>
                  <option value="1433">ABISHEK GUPTA</option>
                  <option value="1459">ABJ</option>
                  <option value="22">ACHYUT RAJBHANDARI</option>
                  <option value="1374">AJIT THAPA</option>
                  <option value="1395">AMIR SHRESTHA</option>
                  <option value="1430">AMIT GAULI</option>
                  <option value="321">AMIT SHRESTHA</option>
                  <option value="1325">AMIT SHRESTHA (CARDIO)</option>
                  <option value="1379">AMRITA PAHARI GHALE</option>
                  <option value="8">ANAND P. SHRESTHA</option>
                </select>
              </td>
              <td>
                <div class="d-flex gap-2 align-items-center justify-content-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#editTreatmentOrder"
                    class="btn btn-outline-primary btn-sm"
                  >
                    <em class="bi bi-pencil"></em> Edit
                  </button>
                  <button class="btn btn-outline-danger btn-sm">
                    <em class="bi bi-x-circle"></em> Discontinue
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2079/03/09</td>
              <td>2 AM</td>
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
                  <option value="281">ABHUSHAN S. TULADHAR</option>
                  <option value="1458">ABI</option>
                  <option value="1433">ABISHEK GUPTA</option>
                  <option value="1459">ABJ</option>
                  <option value="22">ACHYUT RAJBHANDARI</option>
                  <option value="1374">AJIT THAPA</option>
                  <option value="1395">AMIR SHRESTHA</option>
                  <option value="1430">AMIT GAULI</option>
                  <option value="321">AMIT SHRESTHA</option>
                  <option value="1325">AMIT SHRESTHA (CARDIO)</option>
                  <option value="1379">AMRITA PAHARI GHALE</option>
                  <option value="8">ANAND P. SHRESTHA</option>
                </select>
              </td>
              <td>
                <div class="d-flex gap-2 align-items-center justify-content-center">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#editTreatmentOrder"
                    class="btn btn-outline-primary btn-sm"
                  >
                    <em class="bi bi-pencil"></em> Edit
                  </button>
                  <button class="btn btn-outline-danger btn-sm">
                    <em class="bi bi-x-circle"></em> Discontinue
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tab-pane fade" id="nursing" role="tabpanel" aria-labelledby="nursing-tab">
      <div class="row align-items-start">
        <div class="col-md-2 position-sticky top-0">
          <div
            class="nav nav-md flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link fs-13 text-start active"
              id="v-pills-nurse-note-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-nurse-note"
              type="button"
              role="tab"
              aria-controls="v-pills-nurse-note"
              aria-selected="true"
            >
              Nurse Note
            </button>
            <button
              class="nav-link fs-13 text-start"
              id="v-pills-treatment-cardex-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-treatment-cardex"
              type="button"
              role="tab"
              aria-controls="v-pills-treatment-cardex"
              aria-selected="false"
            >
              Treatment Cardex
            </button>
            <button
              class="nav-link fs-13 text-start"
              id="v-pills-nursing-observation-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-observation-sheet"
              type="button"
              role="tab"
              aria-controls="v-pills-nursing-observation"
              aria-selected="false"
            >
              Observation Sheet
            </button>
            <button
              class="nav-link fs-13 text-start"
              id="v-pills-labour-observation-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-labour-observation"
              type="button"
              role="tab"
              aria-controls="v-pills-labour-observation"
              aria-selected="false"
            >
              Labour Observation Sheet
            </button>
          </div>
        </div>

        <div class="tab-content col-md-10" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-nurse-note"
            role="tabpanel"
            aria-labelledby="v-pills-nurse-note-tab"
          >
            <NurseNoteList :key="$store.state.nursingTemplates.nursingNoteListKey" />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-fetalkick-count"
            role="tabpanel"
            aria-labelledby="v-pills-fetalkick-count-tab"
          >
            <div class="mb-2 text-end">
              <a href="#" class="btn btn-sm btn-dark text-uppercase"
                ><em class="bi bi-printer me-1"></em> Print</a
              >
            </div>
            <div class="bg-light mb-3 border text-center rounded p-2 shadow-sm d-flex">
              <div class="col"><strong>Inpatient No.</strong>: 7800263</div>
              <div class="col"><strong>Hospital No.:</strong>: 78001596</div>
              <div class="col"><strong>Patient Name:</strong>: Prunima Oli</div>
              <div class="col"><strong>Age / Sex:</strong>: 21 Y / F</div>
              <div class="col"><strong>Ward:</strong>: Deluxe Suite</div>
            </div>
            <div class="mb-3 text-end">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#fetalKickCount"
              >
                <em class="bi bi-plus-circle"></em> Add Fetal Kick Count
              </button>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered table-sm text-center align-middle">
                <thead class="table-primary text-light">
                  <tr>
                    <th>Date</th>
                    <th>After Lunch / बिहान खाना पछि</th>
                    <th>After Snacks / दिउसो खाना पछि</th>
                    <th>After Dinner / राती खाना पछि</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2079/03/06</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>NO</td>
                    <td>
                      <button class="btn btn-sm btn-outline-primary me-2">
                        <em class="bi bi-pencil-square"></em> Edit
                      </button>
                      <button class="btn btn-sm btn-outline-danger">
                        <em class="bi bi-trash"></em> Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2079/03/06</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>NO</td>
                    <td>
                      <button class="btn btn-sm btn-outline-primary me-2">
                        <em class="bi bi-pencil-square"></em> Edit
                      </button>
                      <button class="btn btn-sm btn-outline-danger">
                        <em class="bi bi-trash"></em> Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-treatment-cardex"
            role="tabpanel"
            aria-labelledby="v-pills-treatment-cardex-tab"
          >
            <div class="mb-2 text-end">
              <a href="#" class="btn btn-sm btn-dark text-uppercase"
                ><em class="bi bi-printer me-1"></em> Print</a
              >
            </div>
            <div class="bg-light mb-3 border text-center rounded p-2 shadow-sm d-flex">
              <div class="col"><strong>Inpatient No.</strong>: 7800263</div>
              <div class="col"><strong>Hospital No.:</strong>: 78001596</div>
              <div class="col"><strong>Patient Name:</strong>: Prunima Oli</div>
              <div class="col"><strong>Age / Sex:</strong>: 21 Y / F</div>
              <div class="col"><strong>Ward:</strong>: Deluxe Suite</div>
            </div>

            <div class="mb-3 text-end align-items-center d-flex justify-content-between">
              <h5 class="mb-0 text-primary">Prescription</h5>
              <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                data-bs-target="#addPrescription">
                <em class="bi bi-plus-circle"></em> Add Prescription
              </button> -->
            </div>
            <div class="table-responsive">
              <table class="table table-bordered table-sm text-center align-middle">
                <thead class="table-primary text-light">
                  <tr>
                    <th>Time</th>
                    <th>Drug</th>
                    <th>Dose</th>
                    <th>Route</th>
                    <th>Direction</th>
                    <th>Doctor's Signature</th>
                    <th>Discontinued Date Initials</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>2079/03/05</strong> 10AM</td>
                    <td>Test Brand</td>
                    <td>45mg</td>
                    <td>Oral</td>
                    <td>OD</td>
                    <td>ABC DOCTOR</td>
                    <td>2079/03/05</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>2079/03/05</strong> 10AM</td>
                    <td>Test Brand</td>
                    <td>45mg</td>
                    <td>Oral</td>
                    <td>OD</td>
                    <td>ABC DOCTOR</td>
                    <td>2079/03/05</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>2079/03/05</strong> 10AM</td>
                    <td>Test Brand</td>
                    <td>45mg</td>
                    <td>Oral</td>
                    <td>OD</td>
                    <td>ABC DOCTOR</td>
                    <td>2079/03/05</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mb-3 text-end align-items-center d-flex justify-content-between">
              <h5 class="mb-0 text-primary">Diet</h5>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addDiet"
              >
                <em class="bi bi-plus-circle"></em> Add Diet
              </button>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered table-sm text-center align-middle">
                <thead class="table-primary text-light">
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Instruction</th>
                    <th>Diet</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2079/03/08</td>
                    <td>10:42 AM</td>
                    <td>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                      dignissimos!
                    </td>
                    <td>Diet 4</td>
                    <td>
                      <a href="#" class="btn btn-outline-danger btn-sm">
                        <em class="bi bi-trash align-middle"></em> Remove
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2079/03/08</td>
                    <td>10:42 AM</td>
                    <td>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                      dignissimos!
                    </td>
                    <td>Diet 4</td>
                    <td>
                      <a href="#" class="btn btn-outline-danger btn-sm">
                        <em class="bi bi-trash align-middle"></em> Remove
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="v-pills-observation-sheet"
            role="tabpanel"
            aria-labelledby="v-pills-nursing-observation-tab"
          >
            Observation Sheet
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-labour-observation"
            role="tabpanel"
            aria-labelledby="v-pills-labour-observation-tab"
          >
            dd
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="admission-history"
      role="tabpanel"
      aria-labelledby="admission-history-tab"
    >
      Admission History
    </div>
    <div class="tab-pane fade" id="soap" role="tabpanel" aria-labelledby="soap-tab">
      SOAP
    </div>
  </div>

  <!-- Add nursing note modal -->
  <div
    class="modal fade"
    id="nurseNote"
    tabindex="-1"
    aria-labelledby="nurseNoteLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-5">
              <AddNurseNote />
            </div>
            <!---column-->
            <div class="col-md-7">
              <h5 class="modal-title mb-3" id="nurseNoteLabel">Use Template</h5>

              <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-all-templates-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all-templates"
                    type="button"
                    role="tab"
                    aria-controls="pills-all-templates"
                    aria-selected="true"
                  >
                    All Templates
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-my-templates-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-my-templates"
                    type="button"
                    role="tab"
                    aria-controls="pills-my-templates"
                    aria-selected="true"
                  >
                    My Templates
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-new-templates-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-new-template"
                    type="button"
                    role="tab"
                    aria-controls="pills-my-templates"
                    aria-selected="true"
                  >
                    Add New Template
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-all-templates"
                  role="tabpanel"
                  aria-labelledby="pills-list-tab"
                  tabindex="0"
                >
                  <TemplateList :data="allNursingTemplates" />
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-my-templates"
                  role="tabpanel"
                  aria-labelledby="pills-add-tab"
                  tabindex="0"
                >
                  <TemplateList :data="allNursingTemplates" />
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-new-template"
                  role="tabpanel"
                  aria-labelledby="pills-new-template-tab"
                  tabindex="0"
                >
                  <AddNewTemplate />
                </div>
                <!-- <EditTemplateList /> -->
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Add note modal -->

  <!-- Add Prescription modal -->
  <div
    class="modal fade"
    id="addPrescription"
    tabindex="-1"
    aria-labelledby="addPrescriptionLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addPrescriptionLabel">Add New Prescription</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-3 mb-3">
              <input type="text" class="form-control" placeholder="Item Code" />
            </div>
            <div class="col-md-3 mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Brand / Package Name"
              />
            </div>
            <div class="col-md-3 mb-3">
              <input type="text" class="form-control" placeholder="Generic Name" />
            </div>
            <div class="col-md-3 mb-3">
              <input type="text" class="form-control" placeholder="Qty" />
            </div>

            <div class="col-md-3">
              <select name="" id="" class="form-select">
                <option selected value="">Urgency</option>
                <option value="">Normal</option>
                <option value="">Urgent</option>
              </select>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Remarks" />
            </div>
            <div class="col-lg-12">
              <hr />
              <h6>Advice</h6>
            </div>
            <div class="col-md-3 mb-3">
              <select class="form-select" name="" id="">
                <option selected value="">Dosage Form</option>
                <option value="1">Tablet</option>
                <option value="5">Sachet</option>
                <option value="3">Puff</option>
                <option value="2">Ml</option>
                <option value="6">Drop</option>
                <option value="4">Capsule</option>
              </select>
            </div>
            <div class="col-md-2 mb-3">
              <input type="number" class="form-control" placeholder="Quantity" />
            </div>
            <div class="col-md-2 mb-3">
              <select class="form-select" name="" id="">
                <option selected value="">Dose</option>
                <option value="1">Weeks</option>
                <option value="5">Months</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <select class="form-select" name="" id="">
                <option selected value="">Department</option>
                <option value="1">Acupuncture</option>
                <option value="5">Cardiology</option>
                <option value="5">Apollo</option>
              </select>
            </div>
            <div class="col-md-2">
              <input type="number" class="form-control" placeholder="Frequency" />
            </div>
            <div class="col-md-3">
              <div class="input-group input-group-sm">
                <input type="text" placeholder="Duration" class="form-control" />
                <select class="input-group-text" name="" id="">
                  <option value="">Days</option>
                  <option value="">Weeks</option>
                  <option value="">Month</option>
                </select>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <select class="form-select" name="" id="">
                <option selected value="">Medical Timing</option>
                <option value="">Empty Stomach</option>
                <option value="1">Before Meal</option>
                <option value="5">After Meal</option>
                <option value="5">With Meal</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <select class="form-select" name="" id="">
                <option selected value="">Prescribed by Doctor</option>
                <option value="">Abishek Gupta</option>
                <option value="1">Sailesh Pandey</option>
                <option value="5">Mausham Kumari</option>
              </select>
            </div>

            <div class="col-md-6">
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Nepali Advice"
              ></textarea>
            </div>
            <div class="col-md-6">
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="English Advice"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Add Prescription</button>
        </div>
      </div>
    </div>
  </div>
  <!--  Add Prescription modal ends -->
  <!-- Add Diet modal -->
  <div
    class="modal fade"
    id="addDiet"
    tabindex="-1"
    aria-labelledby="addDietLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addDietLabel">Add Diet</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Date </label>
                <input type="date" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Time </label>
                <input type="time" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Diet </label>
                <select name="" id="" class="form-select">
                  <option value="">Diet 1</option>
                  <option value="">Diet 2</option>
                  <option value="">Diet 3</option>
                  <option value="">Diet 4</option>
                </select>
              </div>
            </div>
            <div class="col-md-12">
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="Instruction"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <!--  Add Prescription modal ends -->
  <!-- Add Diet modal -->
  <div
    class="modal fade"
    id="prescriptionDetails"
    tabindex="-1"
    aria-labelledby="prescriptionDetailsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="prescriptionDetailsLabel">Add Diet</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Date </label>
                <input type="date" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Time </label>
                <input type="time" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Diet </label>
                <select name="" id="" class="form-select">
                  <option value="">Diet 1</option>
                  <option value="">Diet 2</option>
                  <option value="">Diet 3</option>
                  <option value="">Diet 4</option>
                </select>
              </div>
            </div>
            <div class="col-md-12">
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="Instruction"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <!--  Add diet modal ends -->
  <!-- Edit treatment modal -->
  <div
    class="modal fade"
    id="editTreatmentOrder"
    tabindex="-1"
    aria-labelledby="editTreatmentOrderLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editTreatmentOrderLabel">Edit Treatment Order</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Date </label>
                <input type="date" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Time </label>
                <input type="time" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <select name="" id="" class="form-select">
                <option selected value="">CUTICELL-C DRESSING</option>
                <option value="">Drug 2</option>
                <option value="">Drug 3</option>
                <option value="">Drug 4</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Dose</label>
                <input type="text" class="form-control" value="2" placeholder="Dose" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Route</label>
                <input
                  type="text"
                  class="form-control"
                  value="Mouth"
                  placeholder="Dose"
                />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Direction</label>
                <input
                  type="text"
                  class="form-control"
                  value="6 times a day"
                  placeholder="Dose"
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="input-group input-group-sm">
                <label for="" class="input-group-text">Doctors Signature</label>
                <select name="" id="" class="form-select">
                  <option selected value="">Ajit Thapa</option>
                  <option value="">Drug 2</option>
                  <option value="">Drug 3</option>
                  <option value="">Drug 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            <em class="bi bi-x-circle"></em> Close
          </button>
          <button type="button" class="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  </div>
  <!--  Edit Treatment ends -->
</template>

<script>
import axios from "axios";

import MedicalHistory from "@/components/charts/MedicalHistory.vue";
import loader from "@/components/Loader.vue";
import TemplateList from "@/components/ward/TemplateList.vue";
import EditTemplateList from "@/components/ward/EditTemplateList.vue";
import AddNewTemplate from "@/components/ward/AddNewTemplate.vue";
import AddNurseNote from "@/components/ward/AddNurseNote.vue";
import NurseNoteList from "@/components/ward/NurseNoteList.vue";
import { mapState } from "vuex";

export default {
  components: {
    MedicalHistory,
    loader,
    TemplateList,
    EditTemplateList,
    AddNewTemplate,
    AddNurseNote,
    NurseNoteList,
  },
  data() {
    return {
      patientInfo: "",
      allNursingTemplates: "",
      name: "Flavio",
      isPatientIn: false,
      oxygenRequired: false,
    };
  },
  computed: {
    showNursingTemplate() {
      // return this.allNursingTemplates.map(item => `$${item}`)
      return this.allNursingTemplates;
    },
    ...mapState({
      nursingTemplates: (state) => (state.nursingTemplates.token = this.$store.token),
    }),
  },
  created() {},

  mounted() {
    axios
      .get(
        `https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients/${this.$route.params.id}`
      )
      .then(async (res) => {
        this.patientInfo = await res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
    this.fetchNursingNoteTemplate();

    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.$router.push("/ward");
      }
    });
  },
  methods: {
    /**
     * Get Nurse Note
     */
    getNurseNote(params) {
      const config = {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      };
      const bodyParameters = params;
      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/nursing/getNurseNoteList`,
          bodyParameters,
          config
        )
        .then((res) => {
          this.loading = true;
          this.nursingNote = res.data.nursingNote;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Fetch all Nursing note template
    fetchNursingNoteTemplate() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/nursing/getNursingTemplates`,
          {
            codeFor: "NUOB_NOTE",
            codeFrom: "IPD",
            userId: 1,
            depId: 1,
          },
          config
        )
        .then((res) => {
          this.allNursingTemplates = res.data.templateData;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
