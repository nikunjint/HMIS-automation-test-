<template>
  <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />
  <div class="box-header mb-3">
    <RouterLink to="/operationtheatre" class="btn btn-outline-primary py-1 px-2 btn-sm">
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">Operation Theatre Details</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/operationtheatre">Operation Theatre</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Operation Theatre Details
        </li>
      </ol>
    </nav>
  </div>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="pills-operative-registration-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-operative-registration"
        type="button"
        role="tab"
        aria-controls="pills-operative-registration"
        aria-selected="true"
      >
        Operative Registration
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-otplan-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-otplan"
        type="button"
        role="tab"
        aria-controls="pills-otplan"
        aria-selected="false"
      >
        OT Plan
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-operation-record-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-operation-record"
        type="button"
        role="tab"
        aria-controls="pills-operation-record"
        aria-selected="false"
      >
        Operation Record
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-operative-notes-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-operative-notes"
        type="button"
        role="tab"
        aria-controls="pills-operative-notes"
        aria-selected="true"
      >
        Operative Notes
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-post-op-orders-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-post-op-orders"
        type="button"
        role="tab"
        aria-controls="pills-post-op-orders"
        aria-selected="false"
      >
        Post Op Orders
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-pre-anesthesia-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-pre-anesthesia"
        type="button"
        role="tab"
        aria-controls="pills-pre-anesthesia"
        aria-selected="false"
      >
        Pre-Anesthesia Record
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-transfer-note-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-transfer-note"
        type="button"
        role="tab"
        aria-controls="pills-transfer-note"
        aria-selected="false"
      >
        Transfer Note
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-inventory-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-inventory"
        type="button"
        role="tab"
        aria-controls="pills-inventory"
        aria-selected="false"
      >
        Inventory
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-service-request-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-service-request"
        type="button"
        role="tab"
        aria-controls="pills-service-request"
        aria-selected="false"
      >
        Service Request
      </button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-operative-registration"
      role="tabpanel"
      aria-labelledby="pills-operative-registration-tab"
      tabindex="0"
    >
      <div class="bg-light mb-3 border text-center rounded p-2 shadow-sm d-flex">
        <div class="col"><strong>Patient Id:</strong>: 7800263</div>
        <div class="col"><strong>Patient Name:</strong>: Pawan Gurung</div>
        <div class="col"><strong>Age/Gender:</strong>: Male</div>
        <div class="col"><strong>Blood Group:</strong>: N/A</div>
      </div>

      <div class="row align-items-center mb-2">
        <div class="col-md-6">
          <h5 class="mb-0">
            Surgery Plan of All Patients
            <small class="ms-2 fs-12">
              <em class="bi bi-square-fill text-danger"></em> Cancelled Surgery</small
            >
          </h5>
        </div>
        <div class="col-md-6 text-end">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#OperativeRegistrationModal"
          >
            Add New Operative Registration <em class="bi bi-plus-circle"></em>
          </button>
        </div>
      </div>
      <!---row--->
      <div class="table-responsive">
        <table class="table table-sm table-bordered align-middle text-center">
          <thead class="table-primary text-light">
            <tr>
              <th width="200">Date / Time</th>
              <th width="150">Surgery</th>
              <th>Patientid</th>
              <th>Visitid</th>
              <th>Department</th>
              <th width="250">Unit</th>
              <th width="250">Doctor</th>
              <th width="200">Remarks</th>
              <th width="200">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>2079/08/14 3:30 PM</td>
              <td>HEMORROIDECTOMY</td>
              <td>CUTICELL-C DRESSING</td>
              <td>79000217</td>
              <td>3189</td>
              <td>CARDIOLOGY</td>
              <td>II</td>
              <td>asdsadsadsadfsdfsdf</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  <em class="bi bi-trash"></em> Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="pills-otplan"
      role="tabpanel"
      aria-labelledby="pills-otplan-tab"
      tabindex="0"
    >
      ...
    </div>
    <div
      class="tab-pane fade"
      id="pills-operation-record"
      role="tabpanel"
      aria-labelledby="pills-operation-record-tab"
      tabindex="0"
    >
      ...
    </div>
    <div
      class="tab-pane fade"
      id="pills-operative-notes"
      role="tabpanel"
      aria-labelledby="nav-operative-notes-tab"
      tabindex="0"
    >
      ...
    </div>
    <div
      class="tab-pane fade"
      id="pills-post-op-orders"
      role="tabpanel"
      aria-labelledby="nav-post-op-orders-tab"
      tabindex="0"
    >
      Postss
    </div>
    <div
      class="tab-pane fade"
      id="pills-pre-anesthesia"
      role="tabpanel"
      aria-labelledby="nav-pre-anesthesia-tab"
      tabindex="0"
    >
      anesthesia
    </div>
    <div
      class="tab-pane fade"
      id="pills-transfer-note"
      role="tabpanel"
      aria-labelledby="pills-transfer-note-tab"
      tabindex="0"
    >
      traNSFER NOTE
    </div>
    <div
      class="tab-pane fade"
      id="pills-inventory"
      role="tabpanel"
      aria-labelledby="pills-inventory-tab"
      tabindex="0"
    >
      Inventory
    </div>
    <div
      class="tab-pane fade"
      id="pills-service-request"
      role="tabpanel"
      aria-labelledby="pills-service-request-tab"
      tabindex="0"
    >
      Service Request
    </div>
  </div>

  <!-- Add new operative registration modal -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="OperativeRegistrationModal"
    tabindex="-1"
    aria-labelledby="OperativeRegistrationModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-primary" id="OperativeRegistrationModalLabel">
            New Operative Registration
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body pb-0">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input type="date" class="form-control" />
                </div>
                <!--Column-->
                <div class="col-md-6 mb-3">
                  <input type="time" class="form-control" />
                </div>
                <!--Column-->
                <div class="col-md-6 mb-3">
                  <input type="text" placeholder="Surgery" class="form-control" />
                </div>
                <!--Column-->
                <div class="col-md-6 mb-3">
                  <select name="" class="form-select" id="">
                    <option selected value="">Department</option>
                    <option value="">Accupuncture</option>
                    <option value="">Cardiology</option>
                  </select>
                </div>
                <!--Column-->
                <div class="col-md-6 mb-3">
                  <select name="" class="form-select" id="">
                    <option selected value="">Unit</option>
                    <option value="">I</option>
                    <option value="">II</option>
                  </select>
                </div>
                <!--Column-->
                <div class="col-md-6 mb-3">
                  <select name="" class="form-select" id="">
                    <option selected value="">Doctor</option>
                    <option value="">Doctor 1</option>
                    <option value="">Doctor 2</option>
                  </select>
                </div>
                <!--Column-->
              </div>
            </div>
            <!--Column-->
            <div class="col-md-6">
              <textarea
                placeholder="Remarks"
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>
            <!--Column-->
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save <em class="bi bi-arrow-right-circle"></em>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--  Modal Ends here -->
</template>
<script>
import momentTz from "moment-timezone";
export default {
  data() {
    return {};
  },
  mounted() {
    moment.locale("ne");
    moment().tz("Asia/kathmandu").format();
    $('input[name="daterange"]').daterangepicker({
      locale: {
        format: "MMM Do YY",
      },
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    });
    // $('input[name="daterange"]').daterangepicker(
    //   {
    //     locale: {
    //       // format: "jYYYY/jM/jD",
    //     },
    //     ranges: {
    //       Today: [moment(), moment("jYYYY/jM/jD")],
    //       Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    //       "Last 7 Days": [moment().subtract(6, "days"), moment()],
    //       "Last 30 Days": [moment().subtract(29, "days"), moment()],
    //       "This Month": [moment().startOf("month"), moment().endOf("month")],
    //       "Last Month": [
    //         moment().subtract(1, "month").startOf("month"),
    //         moment().subtract(1, "month").endOf("month"),
    //       ],
    //     },
    //     alwaysShowCalendars: true,
    //     startDate: "11/28/2022",
    //     endDate: "12/04/2022",
    //   },
    //   function (start, end, label) {
    //     moment.locale("ne");

    //     console.log(
    //       "New date range selected: " +
    //         start.format("YYYY-MM-DD") +
    //         " to " +
    //         end.format("YYYY-MM-DD") +
    //         " (predefined range: " +
    //         label +
    //         ")"
    //     );
    //   }
    // );
  },
};
</script>
