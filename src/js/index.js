// Passo 01 - Passar mouse em cima do personagem na listagem para seleciona-lo. 

const personagens = document.querySelectorAll('.personagem');

// Passo 02 - Adicionar a classe de seleção no personagem quando o usuário passar o mouse 

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
    
// Passo 03 - Verificar se já existe personagem selecionado, se sim, remove-lo.
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado');

    });
    
});



