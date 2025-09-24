<script>
  import { onMount } from 'svelte';

  let darkMode = false;
  let fontSize = 16;

  onMount(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      darkMode = true;
      document.body.classList.add('dark-mode');
    }

    if (localStorage.getItem('fontSize')) {
      fontSize = parseInt(localStorage.getItem('fontSize'));
      document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    }
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode');
  }

  function increaseFontSize() {
    fontSize += 2;
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }

  function decreaseFontSize() {
    fontSize -= 2;
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }
</script>

<header>
  <nav>
    <a href="/" class="logo">KJV Bible</a>
    <div class="controls">
      <button on:click={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <button on:click={decreaseFontSize}>A-</button>
      <button on:click={increaseFontSize}>A+</button>
    </div>
  </nav>
</header>

<style>
  header {
    background-color: var(--background-color);
    border-bottom: 1px solid var(--border-color);
    padding: 1em 2em;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    text-decoration: none;
  }

  .controls {
    display: flex;
    gap: 1em;
  }

  button {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 4px;
  }
</style>