window.addEventListener('load', function() {
    configura_botao_tema();
});

function configura_botao_tema() {
    let body = document.getElementsByTagName('body')[0];
    let botao_tema = document.getElementById('botao-tema');
    if (typeof botao_tema === 'undefined')
        return;

    let toggle_body_tema = function(tema_novo) {
        if (body.classList.contains(tema_novo))
            return;
        for (let tema_atual of ['tema-light', 'tema-dark']) {
            if (body.classList.contains(tema_atual))
                body.classList.remove(tema_atual);
        }
        body.classList.add(tema_novo);
    };
    let evento_mudanca = function(e) {
        if (botao_tema.checked)
            toggle_body_tema('tema-dark');
        else
            toggle_body_tema('tema-light');
    };
    botao_tema.onchange = evento_mudanca;
    evento_mudanca();
}