<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import '../app.css';
</script>

<Loader />
<Header />

<main id="main-content">
  <slot />
</main>

<Footer />

<style>
  :global(.skip-link) {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
  }

  :global(.skip-link:focus) {
    top: 0;
  }
</style>