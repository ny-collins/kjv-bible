<script>
  // This line receives the data loaded in this folder's +page.js
  export let data;
</script>

<main>
  <a href="/" class="back-link">← All Books</a>
  <h1>{data.bookName}</h1>
  <h2>Select a Chapter</h2>

  <div class="chapter-grid">
    {#each data.chapters as chapter}
      <a href="/book/{data.bookName}/{chapter}" class="chapter-link">
        {chapter}
      </a>
    {/each}
  </div>
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2em;
    max-width: 800px;
    margin: 0 auto;
  }
  .back-link {
    text-decoration: none;
    color: #555;
    display: inline-block;
    margin-bottom: 2em;
  }
  h1 {
    color: #333;
    text-align: center;
  }
  h2 {
    text-align: center;
    font-weight: 400;
    color: #666;
    margin-bottom: 3rem;
  }
  .chapter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 1em;
  }
  .chapter-link {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1; /* Makes the links square */
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    transition: background-color 0.2s, color 0.2s;
  }
  .chapter-link:hover {
    background-color: #333;
    color: #fff;
    border-color: #333;
  }
</style>