document.addEventListener('DOMContentLoaded', function() {
  // الكود الذي يحتوي على وظائف مثل selectLanguage و createRipple هنا
  (function () {
    const fileURL = "https://tybascript1234.github.io/Languag/";

    fetch(fileURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load the file");
        }
        return response.text();
      })
      .then((content) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;

        const scripts = tempDiv.querySelectorAll("script");
        const bodyContent = tempDiv.querySelector("body")?.innerHTML || content;

        const targetContainer = document.getElementById("target-container");
        if (targetContainer) {
          targetContainer.innerHTML = bodyContent;
        }

        scripts.forEach((script) => {
  const newScript = document.createElement("script");
  if (script.src) {
    newScript.src = script.src;
    newScript.onload = () => console.log(`Script loaded: ${script.src}`);
    newScript.onerror = (err) => console.error(`Failed to load script: ${script.src}`, err);
  } else {
    newScript.textContent = script.textContent;
  }
  document.body.appendChild(newScript);
});


        ensureGoogleTranslateLoaded();
      })
      .catch((error) => console.error("Error loading the file:", error));

    function ensureGoogleTranslateLoaded() {
      const interval = setInterval(() => {
        const translateElement = document.querySelector(".goog-te-combo");
        if (translateElement) {
          clearInterval(interval);
          console.log("Google Translate is ready.");
          restoreLastSelectedLanguage();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        const translateElement = document.querySelector(".goog-te-combo");
        if (!translateElement) {
          console.error("Google Translate did not load in time.");
        }
      }, 5000);
    }
  })();
});
