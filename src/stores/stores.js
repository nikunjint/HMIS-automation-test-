import { createStore } from "vuex";
import axios from "axios";
import jwt_decode from "jwt-decode";
import nursingTemplates from "./modules/nursingTemplates";
import VueCookies from "vue-cookies";
import Swal from "sweetalert2/dist/sweetalert2";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  modules: {
    nursingTemplates,
  },
  plugins: [createPersistedState()],
  state: {
    token: VueCookies.get("access_token"),
    user: null,
    authenticated: false,
    userDetails: VueCookies.get("userDetails"),
    showLoginLoader: false,
    sampleCollectionData: null,
    labReceivedData: null,
    labVerifiedData: null,
  },
  getters: {},
  mutations: {
    SET_USER_DATA(state, userData) {
      // Check local storage token and set authenticated to true
      this.state.userDetails = userData.user;
      state.authenticated = true;
      state.showLoginLoader = false;
    },

    setSampleCollectionData(state, data) {
      state.sampleCollectionData = data;
    },

    setLabReceivedData(state, data) {
      state.labReceivedData = data;
    },

    setLabVerifiedData(state, data) {
      state.labVerifiedData = data;
    },

  },
  actions: {
    fetchSampleCollectionData(context) {
      const data = new FormData(); 
      data.append(
        "patientId",
        context.state.sampleCollectionData.patientInfo.PATIENTID
      );
      data.append(
        "billNo",
        context.state.sampleCollectionData.patientInfo.BILLNO
      );

      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/lab/getSampleCollectionData`,
          data,
          {
            headers: {
              Authorization: `Bearer ${context.state.userDetails.access_token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          VueCookies.set("sampleCollectionData", res.data, "1h");
          context.commit("setSampleCollectionData", res.data);
        })
        .catch((error) => {
          context.commit("setError", error);
        });
    },

    fetchLabReceivedData(context) {
      let a = new NepaliDate();
      let formattedDate = a.format("YYYY/MM/DD");
      let fromDate = formattedDate;
    
      if(this.nepalidates != null) {
        fromDate = this.nepalidates.bs;
      }
    
      const data = new FormData();
      data.append(
        "fromDate",
        fromDate
      );
      data.append(
        "toDate",
        formattedDate
      );
      data.append(
        "labSection",
        "labreceivelist"
      );
      data.append(
        "status",
        '3'
      );
      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/lab/getPatientList`,
          data,
          {
            headers: {
              Authorization: `Bearer ${context.state.userDetails.access_token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          context.commit("setLabReceivedData", res.data);
        })
        .catch((error) => {
          context.commit("setError", error);
        });
    },

    fetchLabVerifiedData(context) {
      let a = new NepaliDate();
      let formattedDate = a.format("YYYY/MM/DD");

      const data = new FormData();
      data.append(
        "fromDate",
        '2078/10/04'
      );
      data.append(
        "toDate",
        formattedDate
      );
      data.append(
        "labSection",
        "labverification"
      );
      data.append(
        "status",
        '5'
      );
      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/lab/getPatientList`,
          data,
          {
            headers: {
              Authorization: `Bearer ${context.state.userDetails.access_token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          VueCookies.set("labVerifiedData", res.data, "1h");
          context.commit("setLabVerifiedData", res.data);
          console.log(res.data,'labverify')
        })
        .catch((error) => {
          context.commit("setError", error);
        });
    },

    async login({ commit }, credentials) {
      this.state.showLoginLoader = true;
      await axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/login/processLogin`,
          credentials,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
          }
        )
        .then(async (res) => {
          VueCookies.set("access_token", res.access_token, "1h");
          commit("SET_USER_DATA", res);
          await VueCookies.set("userDetails", res.data, "1h");
          window.location.href = `/home`;
          console.log(res);
          // axios.post(
          //     `${import.meta.env.VITE_API_ENDPOINT}/getJWTForUser`,
          //     {
          //       email: 'arpsth@gmail.com',
          //     },
          //     {
          //       headers: {
          //         'Content-Type': 'application/json',
          //       },
          //     }
          //   )
          //   .then(({ data }) => {
          //     VueCookies.set('access_token', data.access_token, '1h')
          //     VueCookies.set('userDetails', data.user, '1h')
          //     commit('SET_USER_DATA', data)
          //   })
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("Oops!", err.response.data.messages.error, "error");
          this.state.showLoginLoader = false;
        });
    },
  },
});
