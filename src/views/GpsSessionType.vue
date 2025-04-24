<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { IResultObject } from '../types/IResultObject';
import { GpsSessionTypeService } from '../services/GpsSessionTypeService';
import type { IGpsSessionType } from '../domain/IGpsSessionType';

const requestIsOngoing = ref(false);
const data = reactive<IResultObject<IGpsSessionType[]>>({});
const service = new GpsSessionTypeService();


const fetchPageData = async () => {
  requestIsOngoing.value = true;
  try {
    const result = await service.getAllAsync()
    console.log(result.data);

    data.data = result.data;
    data.errors = result.errors;

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    requestIsOngoing.value = false;
  }

};

onMounted(async () => {
  await fetchPageData();
});

</script>

<template>


  <h1>Index</h1>

  <p>
    <RouterLink to="/gpssessioncreate" class="">Create New</RouterLink>
  </p>
  <table class="table">
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Description
        </th>
        <th>
          Pace Min
        </th>
        <th>
          Pace Max
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data.data" :key="item.id">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.description }}
        </td>
        <td>
          {{ item.paceMin }}
        </td>
        <td>
          {{ item.paceMax }}
        </td>
      </tr>
    </tbody>
  </table>

</template>
