<script>
  export let data;

  // The reactive variables for our navigation
  $: prevChapter = data.chapterNum > 1 ? data.chapterNum - 1 : null;
  $: nextChapter = data.chapterNum < data.totalChapters ? data.chapterNum + 1 : null;

  function cite() {
    const citation = `${data.bookName} ${data.chapterNum}, King James Version.`;
    navigator.clipboard.writeText(citation);
    alert('Citation copied to clipboard!');
  }

  function download() {
    const json = JSON.stringify(data.verses, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.bookName}-${data.chapterNum}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${data.bookName} ${data.chapterNum}`,
    "isPartOf": {
      "@type": "Book",
      "name": data.bookName
    },
    "text": data.verses.map(v => v.text).join(' ')
  };
</script>

<svelte:head>
  <title>{data.bookName} {data.chapterNum} | KJV Bible</title>
  <meta name="description" content={`Read ${data.bookName} chapter ${data.chapterNum} from the King James Version of the Bible.`} />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>

<nav>
  <a href="/book/{data.bookName}" class="back-link">← {data.displayName}</a>
  <div class="chapter-nav">
    {#if prevChapter}
      <a href="/book/{data.bookName}/{prevChapter}" class="nav-link">← Prev</a>
    {:else}
      <span class="nav-link disabled">← Prev</span>
    {/if}

    <a href="/book/{data.bookName}" class="title-link">{data.displayName} {data.chapterNum}</a>

    {#if nextChapter}
      <a href="/book/{data.bookName}/{nextChapter}" class="nav-link">Next →</a>
    {:else}
      <span class="nav-link disabled">Next →</span>
    {/if}
  </div>
</nav>

<div class="actions">
  <button on:click={cite}>Cite this</button>
  <button on:click={download}>Download as JSON</button>
</div>

<div class="chapter-container">
  <article>
    {#each data.verses as verse}
      <p>
        <span class="verse-num">{verse.verse}</span>
        {verse.text}
      </p>
    {/each}
  </article>

  <aside>
    <div class="quick-nav">
      <h3>Quick Navigation</h3>
      <div class="chapter-list">
        {#each Array(data.totalChapters) as _, i}
          <a href="/book/{data.bookName}/{i + 1}" class:current={i + 1 === data.chapterNum}>{i + 1}</a>
        {/each}
      </div>
    </div>
  </aside>
</div>
<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--background-color);
    position: sticky;
    top: 0;
  }

  .back-link {
    text-decoration: none;
    color: var(--link-color);
    margin-bottom: 1em;
  }

  .chapter-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .title-link {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    color: var(--text-color);
    text-decoration: none;
    text-align: center;
  }

  .nav-link {
    text-decoration: none;
    color: var(--link-color);
    padding: 0.5em;
  }

  .nav-link.disabled {
    color: #ccc;
    pointer-events: none;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 1em;
    margin: 2em 0;
  }

  button {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 4px;
  }

  .chapter-container {
    display: flex;
    gap: 2em;
  }

  article {
    flex: 3;
  }

  aside {
    display: none;
  }

  @media (min-width: 1200px) {
    aside {
      display: block;
      flex: 1;
      border-left: 1px solid var(--border-color);
      padding-left: 2em;
    }

    .back-link {
      margin-bottom: 0;
    }

    .chapter-nav {
      flex-wrap: nowrap;
    }
  }

  .quick-nav h3 {
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 1em;
  }

  .chapter-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    gap: 0.5em;
  }

  .chapter-list a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    text-decoration: none;
    color: var(--text-color);
  }

  .chapter-list a.current {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  p {
    font-size: var(--font-size);
    line-height: 1.8;
    margin-bottom: 1em;
    position: relative;
    padding-left: 2.5em;
  }

  .verse-num {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.8rem;
    color: #999;
  }
</style>