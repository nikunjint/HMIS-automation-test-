import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/home',
      name: 'homeview',
      component: HomeView,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/registrationonly',
      name: 'Registration Only',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../components/registration/RegistrationOnly.vue'),
    },
    {
      path: '/easytestapi',
      name: 'East Test API',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../components/easytestapi.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/clinical',
      name: 'clinical',
      component: () => import('../views/Clinical.vue'),
    },
    {
      path: '/ward',
      name: 'ward',
      component: () => import('../views/WardView.vue'),
    },
    {
      path: '/operationtheatre',
      name: 'Operation Theatre',
      component: () => import('../views/operativeTheatre/index.vue'),
    },
    {
      path: '/operationtheatre/:id',
      name: 'Operation Theatre Details',
      component: () => import('../views/operativeTheatre/operativeDetails.vue'),
    },
    {
      path: '/ward/:id',
      name: 'Ward Patient Details',
      component: () => import('../views/WardPatientDetails.vue'),
    },
    {
      path: '/supplier/:id',
      name: 'Supplier Details',
      component: () => import('../views/SupplierDetails.vue'),
    },
    {
      path: '/patients/:id',
      name: 'Patient-detail',
      component: () => import('../views/PatientDetails.vue'),
    },

    {
      path: '/patient-list',
      name: 'patient-list',
      component: () => import('../views/PatientList.vue'),
    },

    {
      path: '/sample-collection',
      name: 'sample-collection',
      component: () => import('../views/Pathology/SampleCollection.vue'),
    },

    {
      path: '/sample-collection/:id',
      name: 'sample-collection-detail',
      component: () => import('../views/Pathology/SampleCollectionDetails.vue'),
    },

    {
      path: '/collected-sample',
      name: 'collected-sample',
      component: () => import('../views/Pathology/CollectedSample.vue'),
    },

    {
      path: '/collected-sample/details/:projectId',
      name: 'details',
      component: () => import('../views/Pathology/CollectedSampleDetails.vue'),
     
    },

    {
      path: '/labreceivelist',
      name: 'labreceivelist',
      component: () => import('../views/Pathology/LabReceive.vue'),
    },


    {
      path: '/departmentreceivelist',
      name: 'departmentreceivelist',
      component: () => import('../views/Pathology/DepartmentReceive.vue'),
    },

    {
      path: '/test-result',
      name: 'test-result',
      component: () => import('../views/Pathology/TestResult.vue'),
    },

    {
      path: '/test-result/:id',
      name: 'test-result-detail',
      component: () => import('../views/Pathology/TestResultDetails.vue'),
    },

    {
      path: '/lab-verification',
      name: 'lab-verification',
      component: () => import('../views/Pathology/Verification.vue'),
    },

    {
      path: '/authorization',
      name: 'authorization',
      component: () => import('../views/Pathology/Authorization.vue'),
    },

    {
      path: '/edit-findings/:id',
      name: 'edit-findings',
      component: () => import('../views/Pathology/EditFindings.vue'),
    },

    {
      path: '/dispatch',
      name: 'dispatch',
      component: () => import('../views/Pathology/DispatchRemarks.vue'),
    },

    {
      path: '/form',
      name: 'form',
      component: () => import('../views/TestForm.vue'),
    },



    
  ],
})

export default router
