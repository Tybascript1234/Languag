        // Initialize Google Translate Element
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

// Select language and update display based on the selected language
function selectLanguage(langCode) {
    var selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change', { 'bubbles': true }));

        // Hide Google Translate tooltip on language selection
        var tooltipElement = document.getElementById('google_translate_tooltip');
        if (tooltipElement) {
            tooltipElement.style.display = 'none';
            tooltipElement.style.visibility = 'hidden';
        }

        // Update selected language display
        var selectedLanguageDiv = document.getElementById('selected_language_display');
        if (selectedLanguageDiv) {
            selectedLanguageDiv.textContent = '' + getLanguageName(langCode);
        }

        // Update language background display
        var languageBackground = document.getElementById('language_background_display');
        if (languageBackground) {
            languageBackground.style.backgroundPosition = '-1px -69px'; // Default position
            switch (langCode) {
                case 'ar':
                    languageBackground.style.backgroundPosition = '-1px -52px';
                    break;
                case 'ur':
                    languageBackground.style.backgroundPosition = '-1px -2772px';
                    break;
                case 'tr':
                    languageBackground.style.backgroundPosition = '-1px -2126px';
                    break;
                case 'fr':
                    languageBackground.style.backgroundPosition = '-1px -324px';
                    break;
                case 'ja':
                    languageBackground.style.backgroundPosition = '-1px -528px';
                    break;
                case 'zh-CN':
                    languageBackground.style.backgroundPosition = '-1px -1072px';
                    break;
                case 'ru':
                    languageBackground.style.backgroundPosition = '-1px -868px';
                    break;
                case 'es':
                    languageBackground.style.backgroundPosition = '-1px -1480px';
                    break;
                // Add more cases for other languages as needed
            }
        }
    }
}

// Get the language name based on the language code
function getLanguageName(langCode) {
    switch (langCode) {
        case 'en':
            return 'English';
        case 'ar':
            return 'Arabic';
        case 'ur':
            return 'Urdu';
        case 'tr':
            return 'Turkish';
        case 'fr':
            return 'French';
        case 'ja':
            return 'Japanese';
        case 'zh-CN':
            return 'Chinese';
        case 'ru':
            return 'Russian';
        case 'es':
            return 'Spanish';
        default:
            return 'Unknown';
    }
}

// On window load, initialize Google Translate and set up search functionality
window.onload = function() {
    setTimeout(googleTranslateElementInit, 1000); // Wait for the Google Translate widget to load

    const searchInputField = document.getElementById('button_search_input');
    const translationButtons = document.querySelectorAll('#translation_buttons_container .button-container button');
    const noResultsMessageDiv = document.getElementById('no_results_message');
    const searchQueryDisplay = document.getElementById('searched_query_display');

    // Event listener for search input
    searchInputField.addEventListener('input', function() {
        const searchTerm = searchInputField.value.toLowerCase();
        let hasResults = false;

        // Loop through buttons and display/hide based on search term
        translationButtons.forEach(button => {
            const buttonName = button.getAttribute('data-name').toLowerCase();
            if (buttonName.includes(searchTerm)) {
                button.style.display = 'inline-block';
                hasResults = true;
            } else {
                button.style.display = 'none';
            }
        });

        // Handle display of no results message and button visibility
        if (searchTerm === '') {
            // If search is cleared, show all buttons and hide the no results div
            translationButtons.forEach(button => {
                button.style.display = 'inline-block';
            });
            noResultsMessageDiv.style.display = 'none';
        } else if (!hasResults) {
            // If no results found, display the no results div
            noResultsMessageDiv.style.display = 'block';
            searchQueryDisplay.textContent = searchTerm;
        } else {
            // Hide no results div if results are found
            noResultsMessageDiv.style.display = 'none';
        }
    });
};

// متموج
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
  
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
  
    ripple.classList.add("ripple");
  
    button.appendChild(ripple);
  
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  // //////////////
