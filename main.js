$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        event.preventDefault();
        const nomeDaTarefa = $('#nome-tarefa').val();
        if (nomeDaTarefa.trim() !== '') {
            const novaTarefa = $('<li>').text(nomeDaTarefa);
            $('#lista-tarefa').append(novaTarefa);
            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('completa');
    });
});