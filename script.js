document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/test.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Display the JSON data in the HTML
            document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
});

