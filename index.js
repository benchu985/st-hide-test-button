/**
 * st-hide-test-button
 * SillyTavern extension: hides the "Test Message" button from API connection settings.
 *
 * Uses a MutationObserver to catch the button whenever it appears in the DOM,
 * covering both initial page load and dynamic tab switching.
 */
(function () {
    const BUTTON_SELECTOR = '#test_api_button';

    /** Hide the button if it exists in the DOM. */
    function hideButton() {
        const btn = document.querySelector(BUTTON_SELECTOR);
        if (btn) {
            btn.style.display = 'none';
        }
    }

    /** Try once on script load (in case the button already exists). */
    hideButton();

    /**
     * Watch the entire document for DOM changes so the button is hidden
     * even when SillyTavern re-renders the settings panel or switches APIs.
     */
    const observer = new MutationObserver(() => hideButton());
    observer.observe(document.body, { childList: true, subtree: true });
})();
