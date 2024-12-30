(function () {
  const fileURL = "https://tybascript1234.github.io/Languag/";

  // تحميل ملف HTML
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

      // إدخال المحتوى إلى صفحة المستخدم
      const targetContainer = document.getElementById("target-container");
      if (targetContainer) {
        targetContainer.innerHTML = bodyContent;
      }

      // تشغيل السكربتات الموجودة في الملف
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });

      // تأكد من تحميل مكتبة Google Translate
      ensureGoogleTranslateLoaded();
    })
    .catch((error) => console.error("Error loading the file:", error));

  // التحقق من تحميل Google Translate
  function ensureGoogleTranslateLoaded() {
    const interval = setInterval(() => {
      const translateElement = document.querySelector(".goog-te-combo");
      if (translateElement) {
        clearInterval(interval);
        console.log("Google Translate is ready.");
      }
    }, 100);

    // بعد مدة محددة، إذا لم يتم العثور على العنصر، أبلغ عن خطأ
    setTimeout(() => {
      clearInterval(interval);
      const translateElement = document.querySelector(".goog-te-combo");
      if (!translateElement) {
        console.error("Google Translate did not load in time.");
      }
    }, 5000);
  }
})();
