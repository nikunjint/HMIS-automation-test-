<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import VueCookies from "vue-cookies";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
// import cookie from 'cookie-parser'
// import inherits from 'inherits'
import axios from "axios";
import { useStore } from "vuex";
import jwt_decode from "jwt-decode";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const Store = useStore();
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  created() {
    if (VueCookies.get("access_token")) {
      this.$store.state.authenticated = true;
    } else {
      this.$store.state.authenticated = false;
      this.$router.push("/");
    }
  },
  data() {
    return {
      greeting: "Hello World!",
      userDetails: "",
      opennav: false,
      showLoading: false,
      authenticated: true,
      username: "",
      password: "",
      // userDetails: this.userInfo(),
      menu: [
        {
          header: "Main Menu",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "bi bi-grid",
        },
        {
          href: "/clinical",
          title: "Clinical",
          icon: "icon-opd",
        },
        {
          href: "/ward",
          title: "Ward",
          icon: "icon-ward",
        },
             {
          href: '/patient-list',
          title: 'Investigation',
          icon: 'bi bi-person-lines-fill',
        },
        {
          href: "/operationtheatre",
          title: "Operation Theatre",
          icon: "icon-ward",
        },
              {
          href: "/form",
          title: "Form",
          icon: "icon-ward",
        },
        
              {
          href: "/easytestapi",
          title: "Test API",
          icon: "icon-ward",
        },
        {
          title: "Patient Administration",
          icon: "icon-patient-administration",
          child: [
            {
              href: "/patient",
              title: "patient-admin",
            },
          ],
        },
      ],
    };
  },
  computed: {
    userInfo() {
      let details = "";
      if (this.$store.state.token != null) {
        details = jwt_decode(this.$store.state.token);
      }
      return details;
    },
  },
  methods: {
    toggleNav(e) {
      this.opennav = !this.opennav;
    },
    async login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password, 
      });
       
    },
    logOut() {
      VueCookies.remove("access_token");
      VueCookies.remove("userDetails");
      this.$store.state.authenticated = false;
      this.$router.push("/");
    },
  },
  mounted() {
    this.userDetails = this.$store.state.userDetails;
  },
  validations() {
    return {
      username: { required },
      password: { required },
    };
  },
};
</script>

<template>
  <div v-if="this.$store.state.authenticated === true">
    <header class="main-header shadow-sm">
      <div class="border-end">
        <RouterLink class="main-brand border-start" to="/"
          ><img src="@/assets/img/midas-brand.png" width="80" alt="midas technologies"
        /></RouterLink>
      </div>
      <h5 class="mb-0 align-self-center text-primary fw-semi">
        MiDas Hospital, Pani Pokhari, Kathmandu
      </h5>
      <div class="d-flex gap-4">
        <em class="bi bi-grid fs-5 align-self-center"></em>
        <em class="bi bi-gear fs-5 align-self-center"></em>
        <div class="d-flex bg-light px-3 border-start align-items-center fs-13">
          <div class="dropdown">
            <button
              class="fs-13 btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <em class="bi bi-person me-1"></em>

              <!-- {{userDetails.data.usma_username}} -->
            </button>
            <ul class="dropdown-menu fs-13" aria-labelledby="dropdownMenuButton1">
              <li>
                <button class="dropdown-item text-uppercase cursor-pointer">{{this?.$store?.state?.userDetails?.data?.USMA_FULLNAME}}</button>
              </li>
              <li>
                <button @click="logOut" type="button" class="dropdown-item">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
          <div class="flex-shrink-0"></div>
          <div class="flex-grow-1 ms-1"></div>
        </div>
      </div>
    </header>
    <sidebar-menu :menu="menu" :collapsed="true" width="270px" widthCollapsed="45px" />

    <main role="main" class="main-content">
      <div class="box shadow">
        <RouterView />
      </div>
    </main>
    <footer class="footer text-center pb-1" role="footer">
      Technical Support ( SUN TO FRI ) ( 7AM to 9 PM ) 01-4002735 | Powered by
      <span class="text-primary fw-bold">MiDas Technologies Pvt. Ltd.</span>
    </footer>
  </div>

  <div class="login-section" v-else>
    <div class="login-section-left">
      <div class="">
        <img src="../assets/img/midas-light.svg" width="140" alt="" />
      </div>
      <div class="login-section-left_footer text-light">
        <h2 class="text-light mb-3">Check The Status</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro distinctio et
          ratione reprehenderit, libero sapiente animi explicabo similique placeat iure!
        </p>
        <div class="social-links pt-4 pb-5">
          <a href="#"><em class="bi bi-facebook"></em></a>
          <a href="#"><em class="bi bi-linkedin"></em></a>
          <a href="#"><em class="bi bi-whatsapp"></em></a>
        </div>
        <div class="version-text">MIDAS DR. HOMS V5.1.2.5</div>
      </div>
    </div>
    <div class="login-section-right">
      <div class="login-wrapper shadow">
        <div class="text-center">
          <p class="pb-1">
            <img width="140" src="../assets/img/midas-logo.svg" alt="" />
          </p>
          <div class="label-hospital">Midas Hospital</div>

          <h5 class="font-weight-bolder pt-3 text-info text-gradient">Welcome back</h5>
          <p class="text-muted">Enter your username and password to sign in</p>

          <form @submit.prevent="login">
            <div class="input-group mb-4 mt-4">
              <span class="input-group-text">
                <em class="bi bi-person"></em>
              </span>
              <input
                type="text"
                class="form-control"
                :class="{ ['is-invalid']: v$.username.$error }"
                placeholder="User Name"
                v-model="username"
                @blur="v$.username.$touch"
              />
            </div>
            <div class="input-group mb-4">
              <span class="input-group-text">
                <em class="bi bi-key"></em>
              </span>
              <input
                type="password"
                class="form-control"
                :class="{ ['is-invalid']: v$.password.$error }"
                placeholder="Password"
                v-model="password"
                @blur="v$.password.$touch"
              />
            </div>
            <div>
              <button type="submit" class="btn login-submit-btn btn-lg w-100 btn-primary">
                <span v-if="!$store.state.showLoginLoader"
                  >Login <em class="bi bi-arrow-right-circle ml-4"></em
                ></span>
                <span v-if="$store.state.showLoginLoader" class="btn-loader-login">
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Signing In...
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="site-info">
        Technical Support ( SUN TO FRI ) ( 7AM to 9 PM ) | 01-4002735
      </div>
    </div>
  </div>
</template>

<style>
/* Header styles */
.main-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-left: 44px;
}

.main-brand {
  display: inline-block;
  padding: 8px;
}

.toggle-nav-btn {
  display: inline-block;
  padding: 0;
  font-size: 36px;
  line-height: 1;
  padding: 0 10px;
  vertical-align: middle;
  cursor: pointer;
}

.main-content {
  padding: 0.8rem 0.8rem 0.8rem 4rem;
  height: calc(100vh - 92px);
  overflow: auto;
}

.main-nav {
  position: fixed;
  height: 100%;
  background-color: var(--primary);
  top: 60px;
  font-size: 13px;
  z-index: 5;
}

.main-nav li a {
  color: var(--primary-light-80);
  border-bottom: 1px solid var(--primary-light-40);
  padding: 8px 16px;
  display: block;
  text-decoration: none;
}

.main-nav li a em {
  vertical-align: middle;
}

.main-nav li {
  position: relative;
}

.main-nav li a:hover {
  background-color: var(--primary-70);
}

.main-nav li:hover ul {
  display: block;
}

.main-nav ul ul {
  display: none;
  position: absolute;
  left: 100%;
  min-width: 130px;
  top: 0;
}

.main-nav ul ul li a {
  background-color: var(--primary);
  padding: 8px 16px;
  border: 1px solid var(--primary);
}

.main-nav li:last-child a {
  border-bottom: 0;
}

.nav-label {
  display: none;
  margin-left: 8px;
  transition: all 300ms linear;
}

.mainNavOpen .nav-label {
  display: inline-block;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-delay: 0.1ms;
}

.nav-icon {
  font-size: 16px;
}

.v-sidebar-menu {
  top: 60px;
  background-color: var(--primary-70);
}

.v-sidebar-menu .vsm--link {
  font-size: 14px;
}

.v-sidebar-menu .vsm--icon {
  margin-right: 5px;
}

.v-sidebar-menu .vsm--link {
  padding: 8px 6px;
}

.vsm--header {
  display: none;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: var(--primary-light-100);
  color: var(--primary);
}

.v-sidebar-menu .vsm--scroll-overflow {
  overflow: visible !important;
}

.v-sidebar-menu .vsm--scroll {
  overflow-y: visible;
  overflow-x: visible;
}

.v-sidebar-menu .vsm--toggle-btn {
  position: absolute;
  top: -60px;
  height: 60px;
  background-color: #f9f9f9;
  color: #000;
  border-right: 1px solid #ddd;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  height: 32px;
  width: 32px;
  line-height: 32px;
  margin-left: 2px;
}
</style>
