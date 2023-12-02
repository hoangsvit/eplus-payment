<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Tổng số tiền thanh toán *"
        type="number"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Họ tên người thanh toán *"
      />

      <q-input filled type="number" v-model="age" label="SĐT thanh toán *" />

      <q-input filled type="number" v-model="age" label="Email thanh toán *" />

      <q-input v-model="time" filled type="time" hint="Native time" />

      <q-input v-model="date" filled type="date" hint="Native date" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const time = ref(null);
    const date = ref(null);

    return {
      name,
      age,
      accept,
      time,
      date,

      onSubmit() {
        // if (accept.value !== true) {
        //   $q.notify({
        //     color: "red-5",
        //     textColor: "white",
        //     icon: "warning",
        //     message: "You need to accept the license and terms first",
        //   });
        // } else {
        //   $q.notify({
        //     color: "green-4",
        //     textColor: "white",
        //     icon: "cloud_done",
        //     message: "Submitted",
        //   });
        // }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
        time.value = null;
        date.value = null;
      },
    };
  },
};
</script>
