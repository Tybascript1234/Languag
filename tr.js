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
