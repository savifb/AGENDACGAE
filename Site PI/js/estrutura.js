function loadContent() {
    fetch('index.html') // Path to the file you want to load
        .then(response => response.text())
        .then(html => {
            document.getElementById('conteudoEstrutura').innerHTML = html;
        })
        .catch(err => {
            console.error('Falha no Carregamento da Página', err);
        });
}

// Call the function when the page loads
window.onload = loadContent;