// Get the language name based on the language code
function getLanguageName(langCode) {
    switch (langCode) {
        case 'en': return 'English';
        case 'ar': return 'Arabic';
        case 'ur': return 'Urdu';
        case 'tr': return 'Turkish';
        case 'fr': return 'French';
        case 'ja': return 'Japanese';
        case 'zh-CN': return 'Chinese';
        case 'ru': return 'Russian';
        case 'es': return 'Spanish';
        case 'ko': return 'Korean';
        case 'ms': return 'Malay';
        case 'it': return 'Italian';
        case 'pt': return 'Portuguese';
        case 'th': return 'Thai';
        case 'sv': return 'Swedish';
        case 'uk': return 'Ukrainian';
        case 'hi': return 'Hindi';
        case 'bn': return 'Bengali';
        case 'vi': return 'Vietnamese';
        case 'fa': return 'Persian';
        case 'pl': return 'Polish';
        case 'nl': return 'Dutch';
        case 'no': return 'Norwegian';
        case 'cs': return 'Czech';
        case 'el': return 'Greek';
        case 'ro': return 'Romanian';
        case 'da': return 'Danish';
        case 'fi': return 'Finnish';
        case 'hu': return 'Hungarian';
        case 'bg': return 'Bulgarian';
        case 'et': return 'Estonian';
        case 'lt': return 'Lithuanian';
        case 'lv': return 'Latvian';
        case 'sk': return 'Slovak';
        case 'sl': return 'Slovenian';
        case 'sr': return 'Serbian';
        case 'he': return 'Hebrew';
        case 'id': return 'Indonesian';
        case 'ur': return 'Urdu';
        case 'ta': return 'Tamil';
        case 'te': return 'Telugu';
        case 'ml': return 'Malayalam';
        case 'mr': return 'Marathi';
        case 'kn': return 'Kannada';
        case 'az': return 'Azerbaijani';
        case 'am': return 'Amharic';
        case 'kk': return 'Kazakh';
        case 'my': return 'Burmese';
        case 'si': return 'Sinhala';
        default: return 'Unknown';
    }
}








// repply

// -----------------------------------------------------------------------------------------------------    


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.wave-button');
    
    elements.forEach(element => {

      let isRippleActive = false; // منع الموجة من التكرار إذا كانت مفعلة بالفعل

      function createRipple(e) {
        if (isRippleActive) return; // إذا كانت الموجة مفعلة بالفعل لا تنشأ موجة جديدة

        isRippleActive = true; // تفعيل الموجة

        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        let x, y;
        if (e.clientX && e.clientY) {
          x = e.clientX - rect.left - size / 2;
          y = e.clientY - rect.top - size / 2;
        } 
        else if (e.touches && e.touches[0]) {
          x = e.touches[0].clientX - rect.left - size / 2;
          y = e.touches[0].clientY - rect.top - size / 2;
        }

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        element.appendChild(ripple);

        // إزالة الموجة بعد انتهاء الأنيميشن
        setTimeout(() => {
          ripple.remove();
          isRippleActive = false; // إعادة تفعيل إمكانية إضافة موجة جديدة
        }, 600); // مدة الأنيميشن للموجة
      }

      element.addEventListener('mousedown', (e) => {
        createRipple(e); // أنشئ الموجة عند الضغط
      });

      element.addEventListener('touchstart', (e) => {
        createRipple(e); // أنشئ الموجة عند اللمس
      });
    });
  });

//   ---------------------------------------------------------------------------------
