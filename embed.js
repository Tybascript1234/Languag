(function () {
  const fileURL = "https://tybascript1234.github.io/Languag/";

  fetch(fileURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
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
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });

      ensureGoogleTranslateLoaded();
    })
    .catch((error) => {
      console.error("Error loading the file:", error);
      // عرض رسالة للمستخدم إذا لزم الأمر
      alert("Failed to load content. Please check the URL or try again later.");
    });

  function ensureGoogleTranslateLoaded() {
    const maxAttempts = 10;
    let attempts = 0;

    const interval = setInterval(() => {
      attempts++;
      const translateElement = document.querySelector(".goog-te-combo");
      if (translateElement) {
        clearInterval(interval);
        console.log("Google Translate is ready.");
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        console.error("Google Translate did not load in time.");
      }
    }, 500);
  }
})();
