document.getElementById('search-box').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    const searchText = document.getElementById('search-box').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    // Load JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const filtered = data.filter(item => item.name.toLowerCase().includes(searchText));
            if (filtered.length) {
                filtered.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = `Name: ${item.name}, Description: ${item.description}`;
                    resultsContainer.appendChild(div);
                });
            } else {
                resultsContainer.innerHTML = 'No results found';
            }
        });
}
