<template>
  <div class="patient-navigate-pages">
    <form class="row g-1">
      <ul
        class="d-flex align-items-center justify-content-between color-blue p-2 border rounded px-3 mb-2"
      >
        <li>
          <RouterLink
            active-class="active-link"
            exact-active-class="exact-active-link"
            to="/patient-list"
            >Patient List</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/sample-collection"
            >Sample Collection</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/collected-sample"
            >Collected Sample</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/labreceivelist"
            >Lab Receive</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/departmentreceivelist"
            >Department Receive</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/test-result"
            >Test Result</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/lab-verification"
            >Verification</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/authorization"
            >Authorization</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active-link" to="/dispatch"
            >Dispatch</RouterLink
          >
        </li>
      </ul>
    </form>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

.patient-navigate-pages a {
  color: white;
}

.active-link {
  background: white;
  color: var(--primary-70) !important;
  padding: 2px 10px;
  border-radius: 999px;
}
</style>
