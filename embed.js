(function () {
  const fileURL = "https://tybascript1234.github.io/Languag/";

  // تحميل ملف HTML أولًا
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

      // تحميل مكتبة Google Translate بعد تحميل المحتوى
      loadGoogleTranslate();
    })
    .catch((error) => console.error("Error loading the file:", error));

  // تحميل مكتبة Google Translate
  function loadGoogleTranslate() {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    script.onload = () => {
      // التحقق من تحميل مكتبة Google Translate
      ensureGoogleTranslateLoaded();
    };
  }

  // التحقق من تحميل Google Translate
  function ensureGoogleTranslateLoaded() {
    const interval = setInterval(() => {
      const translateElement = document.querySelector(".goog-te-combo");
      if (translateElement) {
        clearInterval(interval);
        console.log("Google Translate is ready.");
        // يمكن هنا بدء العمليات المرتبطة بـ Google Translate
      }
    }, 100);

    // إذا لم يتم تحميل المكتبة خلال 10 ثواني، يتم إيقاف المحاولة
    setTimeout(() => {
      clearInterval(interval);
      const translateElement = document.querySelector(".goog-te-combo");
      if (!translateElement) {
        console.error("Google Translate did not load in time.");
      }
    }, 10000); // زيادة الوقت إلى 10 ثواني
  }
})();
