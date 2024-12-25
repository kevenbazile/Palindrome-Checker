document.getElementById('check-btn').addEventListener('click', function() {
  const input = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');

  // Show alert if input is empty
  if (!input.trim()) {
    alert("Please input a value");
    return;
  }

  // Clean up the input for palindrome check (remove non-alphanumeric characters and lower case)
  const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

  // Set result text
  let resultText = '';
  if (isPalindrome) {
    resultText = `${input} is a palindrome`;
  } else {
    resultText = `${input} is not a palindrome`;
  }

  // Show the result and make it visible
  resultElement.textContent = resultText;
  resultElement.classList.remove('hidden');
});
