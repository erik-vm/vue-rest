<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { useUserDataStore } from '@/stores/userDataStore';

const router = useRouter()
const userStore = useUserDataStore();

const logout = async () => {
  userStore.firstName = '';
  userStore.lastName = '';
  userStore.jwt = '';
  userStore.refreshToken = '';

 await router.push("/")
}

</script>


<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">WebApp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <RouterLink class="nav-link text-dark" to="/">Home</RouterLink>
            </li>


            <li class="nav-item">
              <RouterLink class="nav-link text-dark" to="/page1">Page1</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link text-dark" to="/gpssession">GpsSessions</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link text-dark" to="/gpssessiontype">GpsSessionTypes</RouterLink>
            </li>

          </ul>

          <ul v-if="!userStore.jwt" class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link text-dark" to="/register">Register</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-dark" to="/login">Login</RouterLink>
            </li>
          </ul>

          <ul v-else class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link text-dark d-flex align-items-center" @click=logout style="cursor: pointer;">
                Logout {{ userStore.firstName }} {{ userStore.lastName }}</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  </header>
</template>
