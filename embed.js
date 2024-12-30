(function() {
    const fileURL = "https://tybascript1234.github.io/Languag/index.html"; // رابط ملف HTML
  
    // جلب محتوى ملف HTML
    fetch(fileURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load the file");
        }
        return response.text();
      })
      .then(content => {
        // إنشاء عنصر مؤقت لتحليل المحتوى
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;
  
        // استخراج الأكواد من المحتوى
        const scripts = tempDiv.querySelectorAll("script");
        const bodyContent = tempDiv.querySelector("body")?.innerHTML || content;
  
        // إدخال HTML إلى صفحة المستخدم
        const targetContainer = document.getElementById("target-container");
        if (targetContainer) {
          targetContainer.innerHTML = bodyContent;
        }
  
        // تشغيل السكربتات الموجودة داخل الملف
        scripts.forEach(script => {
          const newScript = document.createElement("script");
          newScript.textContent = script.textContent;
          document.body.appendChild(newScript);
        });
      })
      .catch(error => console.error("Error loading the file:", error));
  })();
  