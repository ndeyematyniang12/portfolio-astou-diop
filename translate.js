function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'fr',
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    autoDisplay: false
  }, 'google_translate_element');
}
var gtScript = document.createElement('script');
gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(gtScript);