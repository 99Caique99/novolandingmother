// Função para fechar o aviso
function fecharPopup() {
    document.getElementById('agendamento-avisos').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('agendamento-avisos').style.display = 'none';
    }, 500); // Após 500ms, o popup é ocultado
}
// Animação de rolagem suave para as seções
document.querySelector('.btn-scroll').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#mission').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#actions').scrollIntoView({ behavior: 'smooth' });
});

// Animação de fade-in ao rolar a página
const sections = document.querySelectorAll('.mission, .actions');
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
