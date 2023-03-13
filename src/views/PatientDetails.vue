<template>
  <div class="box-header mb-3">
    <RouterLink to="/clinical" class="btn btn-outline-primary py-1 px-2 ms-2 btn-sm">
      <em class="bi bi-arrow-left me-1"></em>Go back or Hit ESC
    </RouterLink>
    <h5 class="mb-0 text-primary text-uppercase">Patient Details</h5>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/">Clinical</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Patient Detail
        </li>
      </ol>
    </nav>
  </div>
  <ul class="nav nav-tabs mb-3 " id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview"
        type="button" role="tab" aria-controls="pills-overview" aria-selected="true"><em class="bi bi-grid"></em>
        Overview</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-visits-tab" data-bs-toggle="pill" data-bs-target="#pills-visits" type="button"
        role="tab" aria-controls="pills-visits" aria-selected="false"><i class="bi bi-caret-down-square me-1"></i>
        Doctor Visits</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-vitals-tab" data-bs-toggle="pill" data-bs-target="#pills-vitals" type="button"
        role="tab" aria-controls="pills-vitals" aria-selected="false"><i class="bi bi-clock"></i> Vitals & Social
        History</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-treatment-history-tab" data-bs-toggle="pill"
        data-bs-target="#pills-treatment-history" type="button" role="tab" aria-controls="pills-treatment-history"
        aria-selected="false"><i class="bi bi-clock-history"></i> Treatment History</button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">

      <div class="row">
        <div class="col-md-6">
          <div class="bg-light mb-4 bg-gradient p-3 border rounded shadow-sm">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img class="rounded-circle border shadow-sm p-1" src="https://picsum.photos/id/200/125">
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-3">{{ patientInfo.patient_name }}</h5>
                <div class="light-border-info-box d-flex flex-wrap">
                  <div class="col-6 light-border-info-box_item">
                    <strong>Gender:</strong> Male
                  </div>
                  <div class="col-6 light-border-info-box_item">
                    <strong>Age:</strong> 39 Year 3 Month 13 Days
                  </div>
                  <div class="col-6 light-border-info-box_item">
                    <strong>Guardian Name:</strong> Edward Thomas
                  </div>
                  <div class="col-6 light-border-info-box_item">
                    <strong>Phone:</strong> 7896541230
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="bg-light p-3 border mb-3 rounded" style="min-height: 320px;">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                  aria-selected="false">Findings</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true">Known Allergies</button>
              </li>

              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                  type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Symptoms</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style="height: 230px; overflow: auto;">

              <div class="tab-pane fade  show active" id="pills-profile" role="tabpanel"
                aria-labelledby="pills-profile-tab">
                <ul>
                  <li>
                    Elevated temperature (above 100.4°) The medical community generally defines a fever as a body
                    temperature above 100.4 degrees Fahrenheit. A body temp between 100.4 and 102.2 degree is usually
                  </li>
                  <li>
                    considered a low-grade fever. Hyperhidrosis disorder Hyperhidrosis disorder is a condition that
                    results in excessive sweating. This sweating can occur in unusual situations, such as in cooler
                    weather, or without any trigger at all. It can also be caused by other medical conditions, such as
                    menopause or hyperthyroidism. Hyperhidrosis can be uncomfortable.
                  </li>
                  <li>
                    Elevated temperature (above 100.4°) The medical community generally defines a fever as a body
                    temperature above 100.4 degrees Fahrenheit. A body temp between 100.4 and 102.2 degree is usually
                    considered a low-grade fever. Flushed complexion or hot skin. Flushed skin is often a visual sign of
                    embarrassment, anxiety, or being too hot. However, frequent flushing can sometimes indicate an
                    underlying medical condition. Flushed skin occurs when the hundreds of tiny blood vessels just
                    beneath
                    the skin dilate, or widen. Hyperhidrosis disorder Hyperhidrosis disorder is a condition that results
                    in excessive sweating. This sweating can occur in unusual situations, such as in cooler weather, or
                    without any trigger at all.
                  </li>
                </ul>
              </div>
              <div class="tab-pane fade  " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <ul>
                  <li>Change in mental status such as confusion or hallucinations. </li>
                  <li>Fatigue</li>
                </ul>
              </div>
              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <ul>
                  <li>Thirst Thirst is the feeling of needing to drink something. It occurs whenever the body is
                    dehydrated for any reason. Any condition that can result in a loss of body water can lead to thirst
                    or
                    exces</li>
                  <li>Atopic dermatitis (Eczema) Atopic dermatitis usually develops in early childhood and is more
                    common
                    in people who have a family history of the condition.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--column-->
        <div class="col-md-6 mb-3">
          <MedicalHistory />
        </div>
        <div class="col-md-6">
          <div class="bg-light p-3 border rounded">
            <h6 class="mb-3 text-uppercase">Visit Details</h6>
            <div class="table-responsive">
              <table class="table table-sm mb-0 table-striped">
                <thead>
                  <th>OPD No</th>
                  <th>Case ID</th>
                  <th>Appointment Date</th>
                  <th>Consultant</th>
                  <th width="190">Reference Symptoms</th>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#">OPDN1413</a></td>
                    <td>1434</td>
                    <td>02.06.2022 01:13 PM</td>
                    <td>Reyan Jain (9011)</td>
                    <td> <span class="text-truncate d-block" style="max-width:200px;">Thirst
                        Thirst is the feeling of needing to drink something. It occurs whenever the body is dehydrated
                        for
                        any reason. Any condition that can result in a loss of body water can lead to thirst or
                        exces</span></td>
                  </tr>
                  <tr>
                    <td><a href="#">OPDN1413</a></td>
                    <td>1434</td>
                    <td>02.06.2022 01:13 PM</td>
                    <td>Reyan Jain (9011)</td>
                    <td> <span class="text-truncate d-block" style="max-width:200px;">Thirst
                        Thirst is the feeling of needing to drink something. It occurs whenever the body is dehydrated
                        for
                        any reason. Any condition that can result in a loss of body water can lead to thirst or
                        exces</span></td>
                  </tr>
                  <tr>
                    <td><a href="#">OPDN1413</a></td>
                    <td>1434</td>
                    <td>02.06.2022 01:13 PM</td>
                    <td>Reyan Jain (9011)</td>
                    <td> <span class="text-truncate d-block" style="max-width:200px;">Thirst
                        Thirst is the feeling of needing to drink something. It occurs whenever the body is dehydrated
                        for
                        any reason. Any condition that can result in a loss of body water can lead to thirst or
                        exces</span></td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="bg-light p-3 border rounded">
            <h6 class="mb-3 text-uppercase">Lab Investigation</h6>
            <div class="table-responsive">
              <table class="table table-striped table-sm mb-0">
                <thead>
                  <th>Test Name</th>
                  <th>Case ID</th>
                  <th>Lab</th>
                  <th>Sample Collected</th>
                  <th>Expected Date</th>
                  <th>Approved By</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Chest X-rays(c)</td>
                    <td>1434</td>
                    <td>Pathology</td>
                    <td>Lorem ipsum dolor sit amet </td>
                    <td>03.03.2022</td>
                    <td>Mukesh Pandey</td>
                  </tr>
                  <tr>
                    <td>Chest X-rays(c)</td>
                    <td>1434</td>
                    <td>Pathology</td>
                    <td>Lorem ipsum dolor sit amet </td>
                    <td>03.03.2022</td>
                    <td>Mukesh Pandey</td>
                  </tr>
                  <tr>
                    <td>Chest X-rays(c)</td>
                    <td>1434</td>
                    <td>Pathology</td>
                    <td>Lorem ipsum dolor sit amet </td>
                    <td>03.03.2022</td>
                    <td>Mukesh Pandey</td>
                  </tr>

                </tbody>

              </table>
            </div>

          </div>
        </div>
        <div class="col-md-6">
          <div class="bg-light p-3 border rounded">
            <h6 class="mb-3 text-uppercase">Treatment History</h6>
            <div class="table-responsive">
              <table class="table table-striped table-sm mb-0">
                <thead>
                  <th>OPD No</th>
                  <th>Case ID</th>
                  <th>Appointment Date</th>
                  <th>Consultant</th>
                  <th>Symptoms</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Chest X-rays(c)</td>
                    <td>1434</td>
                    <td>Pathology</td>
                    <td>Lorem ipsum dolor sit amet </td>
                    <td>03.03.2022</td>
                  </tr>

                </tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
      <!--row-->

    </div>
    <div class="tab-pane fade" id="pills-visits" role="tabpanel" aria-labelledby="pills-visits-tab">

      <div class="card mb-3">
        <div class="card-header justify-content-between h6 d-flex align-items-center bg-light bg-gradient fw-bold">
          <div><i class="bi bi-person me-1"></i> Patient In</div>
          <div>
            <button class="btn btn-primary btn-sm me-3" @click="isPatientIn=true"> <em class="bi bi-door-open"></em>
              Patient In</button>
            <span v-if="isPatientIn"><button class="btn btn-danger btn-sm  me-2" @click="isPatientIn=false"> <em
                  class="bi bi-door-closed me-1"></em> Patient Out</button>
              <button class="btn btn-info text-white btn-sm me-2"> <em class="bi bi-signpost me-1"></em>Refer</button>
              <button class="btn btn-dark btn-sm "> <em class="bi bi-recycle me-1"></em> Exchange</button></span>
          </div>
        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Patient Id</label>
                <input class="form-control" value="78001658" disabled />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Patient Name</label>
                <input class="form-control" :value="patientInfo.patient_name" disabled />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Age/Gender</label>
                <input class="form-control" :value='patientInfo.age + "/" + patientInfo.sex' disabled />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Registration Date/Time</label>
                <input class="form-control" value='2079/02/29 10:18:03' disabled />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Service Start Date/Time:</label>
                <input class="form-control" value='2079/02/23 12:42:01' disabled />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Department:</label>
                <select class="form-select">
                  <option> Select Department</option>
                  <option> ACUPUNCTURE</option>
                  <option> Aneasthesiology</option>
                </select>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Unit:</label>
                <select class="form-select">
                  <option>Select Unit</option>
                  <option> ICU</option>
                  <option> Aneasthesiology</option>
                </select>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Doctor:</label>
                <select class="form-select">
                  <option> Select Doctor</option>
                  <option> Babu ram Bhattarai</option>
                  <option> Aneasthesiology</option>
                </select>
              </div>
            </div>
            <!---Column-->

          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="pills-vitals" role="tabpanel" aria-labelledby="pills-vitals-tab">
      <div class=" bg-light small bg-gradient border rounded mb-3 shadow-sm px-3 pt-2 pb">
        <div class="row">
          <div class="col-md-2 pb-1"><strong>Patient ID :</strong> {{patientInfo.patient_id}}</div>
          <div class="col-md-2 pb-1 mb-1"><strong>Patient Name :</strong> {{patientInfo.patient_name}}</div>
          <div class="col-md-2 pb-1"><strong>Age/Gender :</strong> 50 bear/ Male</div>
          <div class="col-md-2 pb-1"><strong>Blood Group :</strong> A+</div>
          <div class="col-md-2 pb-1"><strong>Date: </strong> 2079/02/30 </div>
          <div class="col-md-2 pb-1"><strong>Time: </strong> 13:41:25</div>
          <div class="col-md-2 pb-1"><strong>Department :</strong> ACUPUNCTURE</div>
          <div class="col-md-2 pb-1 mb-1"><strong>Unit :</strong> ICU</div>
          <div class="col-md-2 pb-1"><strong>Doctor :</strong> Sudarshan Pandeb</div>
          <div class="col-md-2 pb-1"><strong>Entered By :</strong> Rajesh Khatri</div>
        </div>
      </div>
      <div class="card mb-3">
        <div
          class="card-header justify-content-between bg-primary text-light bg-gradient d-flex align-items-center text-uppercase">
          <div class="fw-bold ">
            <i class="bi bi-person me-1 "></i> Vitals
          </div>

        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-md-3 mb-3">
              <input type="number" class="form-control form-control-sm" placeholder="TEMPERATURE (°F): (98.6 - 99)" />
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input type="number" class="form-control form-control-sm" placeholder="Height (cm) : (60 - 200)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input type="number" class="form-control form-control-sm" placeholder="Weight (Kg)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">BMI</label><input class="form-control" disabled>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">BSA</label><input class="form-control" disabled>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select form-select-sm">
                <option selected>Blood Group </option>
                <option>A +ve </option>
                <option>A -ve </option>
                <option>B +ve </option>
                <option>B -ve </option>
                <option>AB +ve </option>
                <option>AB -ve </option>
                <option>O +ve </option>
                <option>O -ve </option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input class="form-control form-control-sm" placeholder="Systolic BP (mm of Hg)(90 - 120)" />
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input class="form-control form-control-sm" placeholder="Diastolic (mm of Hg) (60 - 80)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Pulse (bpm) (60 - 90)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Respiration (/m) (12 - 18)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="SPo2 (95 - 100)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Head Circ (cm)(30 - 70)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Waist (cm) (30 - 125)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Hip (cm)(30 - 100)" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Avg. Nor. Genetical Height (cm)" />
            </div>
            <!---Column-->
          </div>
        </div>
      </div>
      <!--card-->
      <div class="card mb-3">
        <div
          class="card-header justify-content-between bg-primary text-light bg-gradient d-flex align-items-center text-uppercase">
          <div class="fw-bold ">
            <i class="bi bi-person me-1 "></i> SOCIAL HISTORY
          </div>

        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-md-2 mb-3">
              <select class="form-select">
                <option>Occupation</option>
                <option>Agriculture</option>
                <option>Business</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select">
                <option>Education</option>
                <option>Master</option>
                <option>Under Graduate</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select">
                <option>Year</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control" placeholder="Birth Place" />
            </div>
            <!---Column-->

            <div class="col-md-2 mb-3">
              <div class="me-3 small lh-1 fw-bold mb-1">Smoking</div>
              <div class="form-check form-check-inline small mh-auto">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                  value="option1">
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline small mh-auto">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                  value="option2">
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>

            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="me-3 small lh-1 fw-bold mb-1">Alcohol Consumption</div>
              <div class="form-check form-check-inline small mh-auto">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                  value="option1">
                <label class="form-check-label" for="inlineRadio1">Yes</label>
              </div>
              <div class="form-check form-check-inline small mh-auto">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                  value="option2">
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div>

            </div>
            <!---Column-->

            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Substance Use" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select">
                <option>Marital Status</option>
                <option>Married</option>
                <option>Unmarried</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <input class="form-control form-control-sm" placeholder="Children" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <select class="form-select">
                <option>Select Religion</option>
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Jesus</option>
              </select>
            </div>
            <!---Column-->
            <div class="col-md-4 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">Language Spoken</label>
                <select class="form-select">
                  <option selected>Primary</option>
                  <option>English</option>
                  <option>Nepali</option>
                  <option>Hindi</option>
                </select>
                <select class="form-select">
                  <option selected>Secondary</option>
                  <option>English</option>
                  <option>Nepali</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input class="form-control form-control-sm" placeholder="Excercise" />
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input class="form-control form-control-sm" placeholder="General Diet" />
            </div>
            <!---Column-->
            <div class="col-md-3 mb-3">
              <input class="form-control form-control-sm" placeholder="Stress Factor" />
            </div>
            <!---Column-->

          </div>
        </div>
      </div>
      <!--card-->
      <div class="card mb-3">
        <div
          class="card-header justify-content-between bg-primary text-light bg-gradient d-flex align-items-center text-uppercase">
          <div class="fw-bold ">
            <i class="bi bi-person me-1 "></i> POST COVID
          </div>

        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">PCR Date</label>
                <input class="form-control" type="date" />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3 mt-1">
              <span class="me-3 small lh-1 fw-bold mb-1">
                Admitted?
              </span>
              <div class="form-check form-check-inline  mh-auto">
                <input class="form-check-input" id="inlinecheck1" name="inlineRadioOptions" type="checkbox"
                  value="option1"><label class="form-check-label" for="inlinecheck1">Yes</label>
              </div>

            </div>
            <!---Column-->

            <div class="col-md-4 mb-3">
              <input class="form-control" placeholder="Admitted at" />
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">From</label>
                <input class="form-control" type="date" />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="input-group input-group-sm">
                <label class="input-group-text">To</label>
                <input class="form-control" type="date" />
              </div>
            </div>
            <!---Column-->
            <div class="col-md-2 mb-3">
              <div class="me-3 small lh-1 fw-bold mb-1">
                Oxygen Required?
              </div>
              <div class="form-check form-check-inline small mh-auto">
                <input v-model="oxygenRequired" class="form-check-input" id="oxygenRequired" name="inlineRadioOptions"
                  type="radio" value="option1"><label class="form-check-label" for="oxygenRequired">Yes</label>
              </div>
              <div class="form-check form-check-inline small mh-auto">
                <input class="form-check-input" @input="oxygenRequired=false" id="oxygenNotRequired"
                  name="inlineRadioOptions" type="radio" value="option2"><label class="form-check-label"
                  for="oxygenNotRequired">No</label>
              </div>
            </div>
            <!---Column-->
            <div class="col-md-5" v-if="oxygenRequired">
              <div class="input-group input-group-sm">
                <label class="input-group-text">If Yes, max: (liter/minute)</label>
                <input class="form-control" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--card-->
      <div class="text-end"><button type="submit" class="btn shadow btn-primary float-btn"> SAVE (f12) </button></div>
    </div>
    <div class="tab-pane fade" id="pills-treatment-history" role="tabpanel"
      aria-labelledby="pills-treatment-history-tab">
      ...</div>
  </div>
</template>

<script >
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.min.js'
import MedicalHistory from '../components/charts/MedicalHistory.vue'

export default {
  components: {
    MedicalHistory,
  },
  data() {
    return {
      patientInfo: '',
      isPatientIn:false,
      oxygenRequired:false
    }
  },
  mounted() {
    axios.get(`https://my-json-server.typicode.com/prncdahal/hmisfakedata/patients/${this.$route.params.id}`).then((res) => {
      this.patientInfo = res.data
    }).catch((err) => {
      console.log(err.message)
    });


  }
}
</script>