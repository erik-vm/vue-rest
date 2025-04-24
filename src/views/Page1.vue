<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { GpsLocationTypeService } from '../services/GpsLocationTypeService';
import type { IResultObject } from '../types/IResultObject';
import type { IGpsLocationType } from '../domain/IGpsLocationType';

const requestIsOngoing = ref(false);
const data = reactive<IResultObject<IGpsLocationType[]>>({});
const service = new GpsLocationTypeService();

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
  <div>Request is {{ requestIsOngoing == true ? 'ongoing' : 'done' }}</div>
  <div v-if="data.data">
    <table class="table table-striped">
      <tr v-for="item, key in data.data" :key="key">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </table>
  </div>
</template>


<style scoped></style>
