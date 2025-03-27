// Função para fechar o aviso
function fecharPopup() {
    document.getElementById('agendamento-avisos').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('agendamento-avisos').style.display = 'none';
    }, 500); // Após 500ms, o popup é ocultado
}
