document.addEventListener("DOMContentLoaded", () => {
    // jsonData is directly accessible from json-data.js
    document.getElementById('jsonData').textContent = JSON.stringify(jsonData, null, 2);
});
