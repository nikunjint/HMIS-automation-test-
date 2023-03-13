import { buildSlots } from '@vue/compiler-core'
import axios from 'axios'
const nursingTemplate = {
  state: {
    token:"",
    nursingTemplateData: [],
    nursingTemplateContent: '',
    nursingNoteListKey: 0,
    newNursingTemplate: {
      code: '',
      content: '', 
      codeFrom: 'IPD',
      codeFor: 'NUOB_NOTE',
      depId: parseInt(),
      userId: 1
    },
    isAdded: 0,
  },
  mutations: {
    setNursingTemplate(state) {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${this.state.token}`,
        },
      }
      try {
        const data = axios
          .post(
            `${import.meta.env.VITE_API_ENDPOINT}/nursing/getNursingTemplates`,
            {
              codeFor: 'NUOB_NOTE',
              codeFrom: 'IPD',
              userId: 1,
              depId: 1,
            },
            config
          )
          .then((res) => {
            state.nursingTemplateData = res.data.templateData
          })
      } catch (e) {
        console.log(e)
      }
    },
    // Add Nursing template
    addNursingTemplate(state, payload) {
      
      const config = {
        headers: {
          "Authorization": `Bearer ${this.state.token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
      axios
        .post(
          `${import.meta.env.VITE_API_ENDPOINT}/nursing/addNursingTemplates`,
          payload,
         config
        )
        .then((res) => {
          state.isAdded += 1;
        })
    },
    // Set nursing note template
    setTemplateNoteContent(state, { payload }) {
      state.nursingTemplateContent =
        state.nursingTemplateContent + ' ' + payload
    },
  },
  getters: {
    getNursingTemplate(state) {
      return state.nursingTemplateData
    },
    getTemplateNoteContent(state) {
      return state.nursingTemplateContent
    },
  },
  actions: {
    // Fetch Nursing Template
    fetchNursingTemplate(context) {
      context.commit('setNursingTemplate')
    },
    addNursingTemplate(context, payload) {
      context.commit('addNursingTemplate', payload)
    },
    useTemplateNote(context, payload) {
      context.commit('setTemplateNoteContent', { payload })
    },
  },
}

export default nursingTemplate
