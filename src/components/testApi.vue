<script>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import axios from "axios";

export default {
  name: "testApi",

  data() {
    return {
      newlist: [""],
            newlist: [{
          id: 1,
          counter: {
            likes: 0,
            dislikes: 0
          }
        },
   
      ],
    };    
  },

  mounted() {
    axios
      .get(
        "https://api.publicapis.org/entries" 
      )
      .then((res) => {
        console.log(res.data.entries.filter((skill) => skill.Category == 'Science & Math'));
      this.newlist = res.data.entries.filter((skill) => skill.Category == 'Science & Math')
      });



          axios
      .get(
        "https://api.publicapis.org/entries" 
      )
      .then((res) => {
        console.log(res.data.entries.filter((skill) => skill.Category == 'Animals'));
      this.newlist2 = res.data.entries.filter((skill) => skill.Category == 'Animals')
      });
  },

    methods: {
            patientUrl(id) {
      this.$router.push("/supplier/" + id);
    },
     increment(index) {
      this.newlist[index].counter.likes++;
    },
    }

};
</script>

<template>
  <h3>API (Category: Science)</h3>

  <table class="table">
    <thead>
      <tr>
        <th>SN</th>
        <th>ID</th>
        <th>patients ID</th>
        <th>Patient Name</th>
        <th>AGE</th>
      </tr>
    </thead>
    <tbody>

<tr v-for="(data, index) in newlist" v-bind:key="data.id">
    <td>{{ index + 1 }}</td>
      <td> {{index==0 ? 'true' : ''}}  {{data.API}}</td>
       <td> {{data.Category}}</td>
       <td>    <a class="main-brand border-start" target="_blank" :href=data.Link >{{data.Link}}</a></td>
</tr>

      <!-- <tr v-for="(data, index) in newlist" v-bind:key="data.id">
        
                 <td>{{ index + 1 }}</td>
        <th>{{ data.id }}</th>
        <th>
            <button
          @click="increment(index)" 
          :id="data.id"
          class="btn-sm btn-success"
        >
          Like ({{data.counter.likes}})
        </button>
        </th>
      </tr> -->
    </tbody>
    
  </table>

    <h3>API (Category: Animals)</h3>

  <table class="table">
    <thead>
      <tr>
        <th>SN</th>
        <th>ID</th>
        <th>patients ID</th>
        <th>Patient Name</th>
        <th>AGE</th>
      </tr>
    </thead>
    <tbody>

<tr v-for="(data, index) in newlist2" v-bind:key="data.id">
    <td>{{ index + 1 }}</td>
      <td> {{index==0 ? 'true' : ''}}  {{data.API}}</td>
       <td> {{data.Category}}</td>
       <td>    <a class="main-brand border-start" target="_blank" :href=data.Link >{{data.Link}}</a></td>
</tr>

      <!-- <tr v-for="(data, index) in newlist" v-bind:key="data.id">
        
                 <td>{{ index + 1 }}</td>
        <th>{{ data.id }}</th>
        <th>
            <button
          @click="increment(index)" 
          :id="data.id"
          class="btn-sm btn-success"
        >
          Like ({{data.counter.likes}})
        </button>
        </th>
      </tr> -->
    </tbody>
    
  </table>
</template>
