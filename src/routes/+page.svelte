<script lang="ts">
  import { auth } from "$lib/firebase";
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
  import {
    GoogleAuthProvider,
    getRedirectResult,
    signInWithRedirect,
  } from "firebase/auth";
  import TimeGrid from "../components/timeGrid.svelte";
  import TimeSlot from "../components/timeSlot.svelte";
  import { user } from "../stores/user";
  const provider = new GoogleAuthProvider();

  async function getUser() {
    try {
      const result = await getRedirectResult(auth);
      const userCreds = result?.user;
      if (userCreds) {
        user.set(userCreds);
      } else {
        console.log("Couldn't find a user!");
      }
    } catch (error) {
      console.error("Failed to sign in.");
    }
  }

  function signIn() {
    signInWithRedirect(auth, provider);
    getUser();
  }

  let time = new Date().toLocaleString();
</script>

<AppBar>
  <svelte:fragment slot="lead">Kalendar</svelte:fragment>
  <svelte:fragment slot="trail">
    {time}
    <LightSwitch />
  </svelte:fragment>
</AppBar>
<!-- <p>{$user?.email} did.</p>
<button on:click={getUser}> I am him</button>
<button on:click={signIn}>Sign In</button> -->
<TimeGrid />
