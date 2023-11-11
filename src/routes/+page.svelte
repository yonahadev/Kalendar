<script>
  const provider = new GoogleAuthProvider();
  function signIn() {
    signInWithRedirect(auth, provider);
    console.log("Signing in user");
  }
  import { auth } from "$lib/firebase";
  import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
  } from "firebase/auth";
</script>

<h1>Kalendar</h1>
<p>Johncook did.</p>

<button on:click={signIn}>Sign In</button>
