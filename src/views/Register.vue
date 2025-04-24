<script setup lang="ts">
import { ref } from 'vue';
import { useUserDataStore } from '@/stores/userDataStore';
import { IdentityService } from '@/services/IdentityService';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useUserDataStore();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const error = ref<string | null>(null);

const capitalizeWords = (str: string) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

const doRegister = async () => {

  if (password.value === confirmPassword.value) {
    // do register
    const capitalizedFirstName = capitalizeWords(firstName.value.trim());
    const capitalizedLastName = capitalizeWords(lastName.value.trim());

    const response = await IdentityService.register(
      email.value,
      password.value,
      capitalizedFirstName,
      capitalizedLastName
    );

    if (response.data) {
      store.jwt = response.data.token;
      store.firstName = response.data.firstName;
      store.lastName = response.data.lastName;
      router.push({ name: 'Home' });
    } else {
      error.value = response.errors?.[0] || 'Registration failed';
    }
  } else {
    error.value = 'Passwords must match!'
  }

}
</script>

<template>
  <main role="main" class="pb-3">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1>Register</h1>

        <div v-if="error" class="alert alert-warning" role="alert">
          {{ error }}
        </div>

        <section>
          <form @submit.prevent="doRegister" id="register" method="post" novalidate="novalidate">

            <div class="form-floating mb-3">
              <input v-model="firstName" class="form-control" autocomplete="first-name" aria-required="true"
                placeholder="first name" type="text">
              <label class="form-label" for="Input_Password">First name</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="lastName" class="form-control" autocomplete="last-name" aria-required="true"
                placeholder="last name" type="text">
              <label class="form-label" for="Input_Password">Last name</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="email" class="form-control" autocomplete="email" aria-required="true"
                placeholder="name@example.com" type="email">
              <label class="form-label" for="Input_Email">Email</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="password" class="form-control" autocomplete="password" aria-required="true"
                placeholder="password" type="password">
              <label class="form-label" for="Input_Password">Password</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="confirmPassword" class="form-control" autocomplete="reenter-password" aria-required="true"
                placeholder="password" type="password">
              <label class="form-label" for="Input_Password">Confirm Password</label>
            </div>



            <div>
              <button id="register-submit" type="submit" class="w-100 btn btn-lg btn-primary">Register</button>
            </div>

            <div>

              <p>
                <a href="/Identity/Account/Login">Already a user? Login</a>
              </p>
            </div>
          </form>
        </section>
      </div>

    </div>
  </main>
</template>
