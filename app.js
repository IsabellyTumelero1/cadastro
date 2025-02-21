document.getElementById("nome").addEventListener("blur", function () {
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar");

    let nomevalido = fnValidarMinimoDeCaracteres(3, this.value);
    if (nomevalido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "* No mínimo 3 caracteres");
    }

    let nomeobrigatorio = fnValidarCampoObrigatorio(this.value);
    if(nomeobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "* Campo obrigatório");
    }
})

document.getElementById("email").addEventListener("blur", function () {
    fnAdicionarMensagemDeErro("mensagem-erro-email", "limpar");

    let emailvalido = fnValidarMinimoDeCaracteres(5, this.value);
    if (emailvalido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-email", "* No mínimo 5 caracteres");
    }

    let emailobrigatorio = fnValidarCampoObrigatorio(this.value);
    if(emailobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "* Campo obrigatório");
    }

    let validacaoemail = fnValidarEmail(this.value);
    if(validacaoemail == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "* E-mail inválido");
        this.value = "";
    }
})

document.getElementById("senha").addEventListener("blur", function () {
    fnAdicionarMensagemDeErro("mensagem-erro-senha", "limpar");

    let senhavalida = fnValidarMinimoDeCaracteres(8, this.value)
    if (senhavalida == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "* No mínimo 8 caracteres");
    }

    let senhaobrigatoria = fnValidarCampoObrigatorio(this.value);
    if(senhaobrigatoria == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "* Campo obrigatório");
    }

    let senhamaiuscula = fnValidarSenhaMaiuscula(this.value);
    if(senhamaiuscula == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "* Obrigatório letra maiúscula");
    }

    let caracterespecial = fnValidarSenhaCaracterEspecial(this.value);
    if(caracterespecial == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "* Obrigatório caracter especial")
    }
})

document.getElementById("confirmar_senha").addEventListener("blur", function () {
    fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "limpar");

    let confSenhavalida = fnValidarMinimoDeCaracteres(8, this.value)
    if (confSenhavalida == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "* No mínimo 8 caracteres");
    }

    let confSenhaobrigatoria = fnValidarCampoObrigatorio(this.value);
    if(confSenhaobrigatoria == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "* Campo obrigatório");
    }

    let confSenhaigual = fnValidarSenhaIgual(this.value);
    if(confSenhaigual == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confSenha", "* Senha incompatível");
    }
})

document.getElementById("cidade").addEventListener("blur", function () {
    fnAdicionarMensagemDeErro("mensagem-erro-cidade", "limpar");

    let cidadevalida = fnValidarMinimoDeCaracteres(2, this.value)
    if (cidadevalida == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "* No mínimo 2 caracteres");
    }

    let cidadeobrigatoria = fnValidarCampoObrigatorio(this.value);
    if(cidadeobrigatoria == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "* Campo obrigatório");
    }
})

document.getElementById("estado").addEventListener("blur", function () {
    fnAdicionarMensagemDeErro("mensagem-erro-estado", "limpar");

    let estadovalido = fnValidarMinimoDeCaracteres(2, this.value)
    if (estadovalido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "* No mínimo 2 caracteres");
    }

    let estadoobrigatorio = fnValidarCampoObrigatorio(this.value);
    if(estadoobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "* Campo obrigatório");
    }
})