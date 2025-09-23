<script>
  export let data;

  // A reactive statement that joins the verses into a single block of text.
  // This is where your idea of a better reading flow comes to life.
  $: chapterText = data.verses.map(v => v.text).join(' ');
</script>

<main>
  <nav>
    <a href="/book/{data.bookName}">← Chapter List</a>
    <h1>{data.bookName} {data.chapterNum}</h1>
    <span></span>
  </nav>

  <article>
    {#each data.verses as verse}
      <p>
        <span class="verse-num">{verse.verse}</span>
        {verse.text}
      </p>
    {/each}
  </article>
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    position: sticky;
    top: 0;
  }

  nav a {
    text-decoration: none;
    color: #555;
  }

  nav h1 {
    font-size: 1.2rem;
    margin: 0;
  }

  article {
    max-width: 720px; /* Optimal reading width */
    margin: 3em auto;
    padding: 0 2em;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1em;
    position: relative;
    padding-left: 2em; /* Make space for the verse number */
  }

  .verse-num {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.8rem;
    color: #999;
  }
</style>