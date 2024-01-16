form.addEventListener("submit", (event) => {
  event.preventDefault();

  const longURL = longURLInput.value;

  fetch('/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ longURL }),
  })
  .then(response => response.json())
  .then(data => {
    const shortURL = window.location.origin + data.shortURL; // Use server-generated short URL
    resultDiv.textContent = `Short URL: ${shortURL}`;
    window.location.href = shortURL; // Redirect to the short URL
  });
});
