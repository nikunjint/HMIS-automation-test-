<template>


 <transition name="toast">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
   <div class="toast-header">
    <em class="bi bi-like"></em>
    <strong class="me-auto">{{ title }}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
   </div>
   <div class="toast-body">
    Hello, world! This is a toast message.
   </div>
  </div>
 </transition>

</template>

<style>
.toast-wrapper {
 position: fixed;
 width: 100%;
 top: 20px;
}

.toast {
 padding: 20px;
 color: white;
 background: #ff0062;
 border-radius: 10px;
 box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
 max-width: 400px;
 margin: 0 auto;
}

/* enter transitions */
.toast-enter-from {
 opacity: 0;
 transform: translateY(-60px);
}

/* .toast-enter-to {
     opacity: 1;
     transform: translateY(0);
   } */
.toast-enter-active {
 transition: all 0.3s ease;
}

/* leave transitions */
/* .toast-leave-from {
     opacity: 1;
     transform: translateY(0);
   } */
.toast-leave-to {
 opacity: 0;
 transform: translateY(-60px);
}

.toast-leave-active {
 transition: all 0.3s ease;
}
</style>

<script>
export default {
 props: {
  title: String
 }
}

</script>