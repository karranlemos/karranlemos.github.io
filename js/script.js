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
        let tema_novo = (botao_tema.checked) ? 'tema-dark' : 'tema-light';
        toggle_body_tema(tema_novo);
        muda_tema_storage(tema_novo);
    };
    botao_tema.onchange = evento_mudanca;
    if (pega_tema_storage() === 'tema-light')
        botao_tema.checked = false;
    else
        botao_tema.checked = true;
    evento_mudanca();
}

function pega_tema_storage() {
    let TEMA_PADRAO = 'tema-light';
    if (typeof Storage === 'undefined' || localStorage.getItem('tema_site') === null)
        return TEMA_PADRAO;
    return localStorage.getItem('tema_site');
}

function muda_tema_storage(tema_novo) {
    if (typeof Storage === 'undefined')
        return;
    localStorage.setItem('tema_site', tema_novo);
}