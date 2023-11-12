<script lang="ts">
  import { auth } from "$lib/firebase";
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
  import {
    GoogleAuthProvider,
    getRedirectResult,
    onAuthStateChanged,
    signInWithRedirect,
    signOut,
  } from "firebase/auth";
  import { onMount } from "svelte";
  import TimeGrid from "../components/timeGrid.svelte";
  import { user } from "../stores/user";
  const provider = new GoogleAuthProvider();

  onMount(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser.email);
        user.set(currentUser);
      } else {
        console.log("Could not log in current user.");
      }
    });
  });

  function signIn() {
    signInWithRedirect(auth, provider);
  }

  function logout() {
    signOut(auth);
    user.set(null);
  }

  let time = new Date().toLocaleString();
</script>

<AppBar>
  <svelte:fragment slot="lead">Kalendar</svelte:fragment>
  <svelte:fragment slot="trail">
    {time}
    <LightSwitch />
    {#if !$user}
      <button on:click={signIn}>Sign In</button>
    {:else}
      <button on:click={logout}>{$user.email}</button>
      <img src={$user.photoURL} alt="Google account pic" />
    {/if}
  </svelte:fragment>
</AppBar>
<TimeGrid />
