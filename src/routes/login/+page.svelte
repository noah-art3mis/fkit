<script lang="ts">
  import { auth, user } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  }
</script>

{#if $user}
  <h2>welcome {$user.displayName}</h2>
  <button class="btn btn-primary" on:click={() => signOut(auth)}
    >Sign Out</button
  >
{:else}
  <h2>Login</h2>
  <button class="btn btn-primary" on:click={signInWithGoogle}
    >Sign in with google</button
  >
{/if}
