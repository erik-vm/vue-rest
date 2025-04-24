<script setup lang="ts">
import { GpsSessionTypeService } from '@/services/GpsSessionTypeService';
import { GpsSessionService } from '@/services/GpsSessionService';
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import type { IResultObject } from '../types/IResultObject';
import type { IGpsSessionType } from '../domain/IGpsSessionType';

const router = useRouter()
const requestIsOngoing = ref(false);
const sessionTypeData = reactive<IResultObject<IGpsSessionType[]>>({});
const service = new GpsSessionTypeService();
const recordedAt = new Date().toISOString();

const fetchPageData = async () => {
  requestIsOngoing.value = true;
  try {
    const result = await service.getAllAsync()
    console.log(result.data);

    sessionTypeData.data = result.data;
    sessionTypeData.errors = result.errors;

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    requestIsOngoing.value = false;
  }

};

onMounted(async () => {
  await fetchPageData();
});

const name = ref('');
const description = ref('');
const sessionType = ref('');
const paceMin = ref(0);
const paceMax = ref(0);

const error = ref<string | null>(null);



const doCreateSession = async () => {


  // do create session
  const response = await GpsSessionService.createSession(
    name.value,
    description.value,
    sessionType.value,
    recordedAt,
    paceMin.value,
    paceMax.value
  );

  if (response.data) {
    router.push({ name: 'GpsSession' });
  } else {
    error.value = response.errors?.[0] || 'Creating session failed';
  }
}

</script>

<template>
  <main role="main" class="pb-3">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1>Create session</h1>

        <div v-if="error" class="alert alert-warning" role="alert">
          {{ error }}
        </div>

        <section>
          <form @submit.prevent="doCreateSession" id="register" method="post" novalidate="novalidate">

            <div class="form-floating mb-3">
              <label class="form-label" for="">Name</label>
              <input v-model="name" class="form-control" autocomplete="name" aria-required="true" placeholder="name"
                type="text">
            </div>


            <div class="mb-3">
              <label class="form-label" for="">Description</label>
              <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>


            <div class="form-floating mb-3">
              <label class="form-label" for="sessionType">Session Type</label>
              <select v-model="sessionType" class="form-control" id="sessionType">
                <option disabled value="">Please select</option>
                <option v-for="type in sessionTypeData.data" :key="type.id" :value="type.id">
                  {{ type.name }}
                </option>
              </select>
            </div>

            <div class="form-floating mb-3">
              <label class="form-label" for="">Pace Min</label>
              <input v-model="paceMin" class="form-control" autocomplete="password" aria-required="true"
                placeholder="password" type="number">
            </div>

            <div class="form-floating mb-3">
              <label class="form-label" for="">Pace Max</label>
              <input v-model="paceMax" class="form-control" autocomplete="reenter-password" aria-required="true"
                placeholder="password" type="number">
            </div>



            <div>
              <button id="create-session" type="submit" class="w-100 btn btn-lg btn-primary">Create</button>
            </div>

            <div>


            </div>
          </form>
        </section>
      </div>

    </div>
  </main>
</template>
