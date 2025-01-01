// Initialize Google Translate Element
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

// Track the currently active button
let activeButton = null;

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
            selectedLanguageDiv.textContent = getLanguageName(langCode);
        }

        // Change button background color and store the selected language in localStorage
        updateButtonBackground(langCode);
        localStorage.setItem('selectedLanguage', langCode);
    }
}

// Update button background color
function updateButtonBackground(langCode) {
    const buttons = document.querySelectorAll('#translation_buttons button');

    // Loop through all buttons to reset their background color
    buttons.forEach(button => {
        button.style.background = ''; // Reset background
    });

    // Find the selected button by matching the langCode with the button's language identifier
    const selectedButton = Array.from(buttons).find(button => button.getAttribute('data-lang') === langCode);
    if (selectedButton) {
        selectedButton.style.background = 'rgb(194 231 255)';
        activeButton = selectedButton;
    }
}

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
        default: return 'Unknown';
    }
}

// Restore the last selected language and button background after page reload
function restoreLastSelectedLanguage() {
    const savedLangCode = localStorage.getItem('selectedLanguage');
    if (savedLangCode) {
        // Set the saved language as active
        selectLanguage(savedLangCode);
        // Highlight the corresponding button
        updateButtonBackground(savedLangCode);
    }
}

// Create ripple effect for buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Search functionality for translation buttons
function searchLanguage() {
    const searchInputField = document.getElementById('button_search_input');
    const translationButtons = document.querySelectorAll('#translation_buttons button');
    const noResultsMessageDiv = document.getElementById('no_results_message');
    const searchQueryDisplay = document.getElementById('searched_query_display');

    const searchTerm = searchInputField.value.toLowerCase();
    let hasResults = false;

    // Loop through buttons and display/hide based on search term
    translationButtons.forEach(button => {
        const buttonName = button.textContent.toLowerCase();
        if (buttonName.includes(searchTerm)) {
            button.style.display = 'flex';
            hasResults = true;
        } else {
            button.style.display = 'none';
        }
    });

    // Handle display of no results message and button visibility
    if (searchTerm === '') {
        translationButtons.forEach(button => {
            button.style.display = 'flex';
        });
        noResultsMessageDiv.style.display = 'none';
    } else if (!hasResults) {
        noResultsMessageDiv.style.display = 'block';
        searchQueryDisplay.textContent = searchTerm;
    } else {
        noResultsMessageDiv.style.display = 'none';
    }
}

// Initialize functionality on page load
window.onload = function () {
    restoreLastSelectedLanguage(); // Restore language on page load
    setTimeout(googleTranslateElementInit, 1000); // Wait for the Google Translate widget to load
};
    
