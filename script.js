document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const wordCountBtn = document.getElementById('word-count-btn');
    const toUppercaseBtn = document.getElementById('to-uppercase-btn');
    const toLowercaseBtn = document.getElementById('to-lowercase-btn');
    const checkSubstringBtn = document.getElementById('check-substring-btn');
    const substringInput = document.getElementById('substring-input');

    const wordCountResult = document.getElementById('word-count-result');
    const transformedTextResult = document.getElementById('transformed-text-result');
    const substringResult = document.getElementById('substring-result');

    wordCountBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        const wordArray = text.split(' ');
        const wordCount = wordArray.length;
        wordCountResult.textContent = `Word Count: ${wordCount}`;
      });

    toUppercaseBtn.addEventListener('click', function() {
        const text = inputText.value;
        transformedTextResult.textContent = `Uppercase Text: ${text.toUpperCase()}`;
    });

    toLowercaseBtn.addEventListener('click', function() {
        const text = inputText.value;
        transformedTextResult.textContent = `Lowercase Text: ${text.toLowerCase()}`;
    });

    checkSubstringBtn.addEventListener('click', function() {
        const text = inputText.value;
        const substring = substringInput.value;
        const containsSubstring = text.includes(substring);
        substringResult.textContent = containsSubstring ? `The text contains "${substring}"` : `The text does not contain "${substring}"`;
    });
});
 