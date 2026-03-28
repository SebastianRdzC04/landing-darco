console.log("=== headerScroll.js LOADED ===");

function setupHeaderScroll() {
  console.log("setupHeaderScroll() called");
  const header = document.getElementById("site-header");
  
  if (!header) {
    console.log("ERROR: header not found");
    return;
  }

  console.log("Header found, setting up scroll listener");

  function handleScroll() {
    console.log("SCROLL EVENT - scrollY:", window.scrollY);

    if (window.scrollY > 50) {
      console.log("  -> Applying blur effect");
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      header.style.backdropFilter = "blur(10px)";
      header.style.webkitBackdropFilter = "blur(10px)";
    } else {
      console.log("  -> Applying transparent");
      header.style.backgroundColor = "transparent";
      header.style.backdropFilter = "none";
      header.style.webkitBackdropFilter = "none";
    }
  }

  // Initial state
  console.log("Calling handleScroll() initially");
  handleScroll();

  // Add scroll event listener
  console.log("Adding scroll event listener");
  window.addEventListener("scroll", handleScroll, { passive: true });
  console.log("Scroll listener added successfully");
}

// Run when DOM is ready
if (document.readyState === "loading") {
  console.log("DOM still loading, waiting for DOMContentLoaded");
  document.addEventListener("DOMContentLoaded", setupHeaderScroll);
} else {
  console.log("DOM already loaded, running immediately");
  setupHeaderScroll();
}

// Re-run on Astro page transitions
document.addEventListener("astro:page-load", () => {
  console.log("astro:page-load event fired");
  setupHeaderScroll();
});

console.log("=== headerScroll.js SETUP COMPLETE ===");
