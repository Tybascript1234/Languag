(function () {
  const fileURL = "https://tybascript1234.github.io/Languag/index.html"; // تأكد من صحة الرابط

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

        // إذا كان السكربت يحتوي على src
        if (script.src) {
          newScript.src = script.src;

          // التأكد من تحميل السكربت بنجاح
          newScript.onload = () => {
            console.log(`Script loaded: ${newScript.src}`);
          };

          // التعامل مع الخطأ إذا فشل تحميل السكربت
          newScript.onerror = (err) => {
            console.error(`Failed to load script: ${newScript.src}`, err);
          };

        // إذا كان السكربت لا يحتوي على src (نص سكربت داخلي)
        } else if (script.textContent) {
          newScript.textContent = script.textContent;
        } else {
          console.warn("Script has no source or content", script);
          return;  // تجاهل السكربت إذا لم يحتوي على نص أو src
        }

        // إضافة السكربت إلى body
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
