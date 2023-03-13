<template>
  <div class="card">
    <div class="pb-0 card-header">
      <h6>Today's Registered Patients</h6>
      <p class="text-sm mb-2">
        <i class="fa fa-arrow-up text-success"></i>
        <span class="font-weight-bold">4% more</span> in 2021
      </p>
    </div>
    <div class="p-0 card-body">
      <div class="chart">
        <canvas id="nurse-info" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name: 'NurseInfoChart',
  mounted() {
    const ctx = document.getElementById('nurse-info');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true
      }
    });
  },

}
</script>
