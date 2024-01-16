const form = document.getElementById("shorten-form");
const longURLInput = document.getElementById("long-url");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  const longURL = longURLInput.value;

  // Generate a random 5-character code for the short URL
  const shortCode = createRandomCode(5);

  // Construct the short URL using the current page's URL and the short code
  const shortURL = window.location.href + "#" + shortCode;

  // Display the short URL
  resultDiv.textContent = `Short URL: ${shortURL}`;

  // Update the browser's hash so the short URL is visible in the address bar
  window.location.hash = shortCode;

  // Store the long URL and short code in local storage (optional)
  // localStorage.setItem(shortCode, longURL);
});

function createRandomCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
