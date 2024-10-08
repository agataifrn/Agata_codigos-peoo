/* Fazer uma requisição para exibir uma lista de posts em uma página HTML,
bem como quem escreveu cada post. */

// Coloca o site que tem os dados JSON
const url_post = 'https://jsonplaceholder.typicode.com/posts';
const url_users = 'https://jsonplaceholder.typicode.com/users';

let usuarios = ["###"];

fetch(url_users)
    .then(response => response.json())
    .then(users => criar_vetor(users));

function criar_vetor(users) {
    for (let user of users)
        usuarios.push(user.name);
}

fetch (url_post)
    .then(response => response.json())
    .then(posts => exibir_posts(posts));

function exibir_posts(posts) {
    let postagens = document.getElementById('postagens'); 
    postagens.innerHTML = ''
    /* Cria a variável das postagens e inicia ela vazia
    (pra quando reiniciar a página, os dados reiniciarem) */

    for (let post of posts) {
        postagem = document.createElement('div');
        // Cria nova <div>
        postagem.innerHTML =
            `
            <p>#${post.id}
            (Usuário: ${usuarios[post.userId]})<br>
            <b>Título:</b> ${post.title}<br>
            <b>Texto:</b> ${post.body}</p>
            `;
        postagens.appendChild(postagem);
        // Adiciona a <div> na frente da última
    }
    /* Para cada post em todas as postagens, cria-se uma tag <div>, 
    cria 4 tags <p> de dados dentro da <div>, 
    e repete até acabar as postagens.*/
}
    