<script>
  const provider = new GoogleAuthProvider();
  function signIn() {
    const login = signInWithRedirect(auth, provider);
    console.log(login.finally.name);
  }
  import { auth } from "$lib/firebase";
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
</script>

<h1 class="variant-ghost-secondary text-5xl">Kalendar</h1>
<p>Johncook did.</p>
<LightSwitch />

<button on:click={signIn}>Sign In</button>
