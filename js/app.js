var corpoTabela = document.querySelector("tbody");
var botaoSalvar = document.querySelector("#salvar");
var botaoReset= document.querySelector("#botaoReset");
var campoSenha = document.querySelector("#senha");
var campoConfirmaSenha = document.querySelector("#confirma-senha");
var campoNome = document.querySelector("#nome");
var campoEmail = document.querySelector("#email");
var campoDataNascimento = document.querySelector("#data_nascimento");

function esconderMsgSucesso() {
	$('#msg-sucesso').fadeOut();
}

function esconderMsgErroCampos() {
	$('#msg-erro-campos').fadeOut();
}

function esconderMsgErro() {
	$('#msg-erro').fadeOut();
}

function esconderMsgErroEmail() {
	$('#msg-erro-email').fadeOut();
}

function Cliente(nome, email, dataNascimento) {
	this.nome = nome;
	this.email = email;
	this.dataNascimento = dataNascimento;
};

Cliente.prototype.toString = function() {
	return this.nome + " - " + this.email + " - " + this.dataNascimento;
};

function salvar(event) {
	event.preventDefault();
	var senha = campoSenha.value;
	var confirmaSenha = campoConfirmaSenha.value;
	var nome = campoNome.value;
	var email = campoEmail.value;
	var dataNascimento = campoDataNascimento.value;
	if(validaTodos(nome, email, dataNascimento, senha, confirmaSenha)) {
		if(validarSenha(senha, confirmaSenha)) {
			cliente = new Cliente(nome, email, dataNascimento);
			adicionarValoresTabela(cliente);
			$('#msg-sucesso').show();
		}
	}
}


function validarSenha(senha, confirmaSenha) {
	if(senha != confirmaSenha) {
		$('#msg-erro').show();
		campoSenha.focus();
		return false;
	} 
	return true;
}

function validaTodos(nome, email, dataNascimento, senha, confirmaSenha) {
	var campos = [nome, email, dataNascimento, senha, confirmaSenha];
	for(var campo in campos) {
		if(campos[campo] == "") {
			$('#msg-erro-campos').show();
			return false;
		}
	}
	if(!checarEmail()) {
		return false;
	}
	return true;
}

function checarEmail(){
if( campoEmail.value=="" 
   || campoEmail.value.indexOf('@')==-1 
     || campoEmail.value.indexOf('.')==-1 )
	{
	   $('#msg-erro-email').show();
	   return false;
	}
	return true;
}

function adicionarValoresTabela(cliente) {
	var linha = document.createElement("tr");
	var campoNome = document.createElement("td");
	var campoEmail = document.createElement("td");
	var campoDataNascimento = document.createElement("td");

	var textoNome = document.createTextNode(cliente.nome);
	var textoEmail = document.createTextNode(cliente.email);
	var textoDataNascimento = document.createTextNode(cliente.dataNascimento);

	campoNome.appendChild(textoNome);
	campoEmail.appendChild(textoEmail);
	campoDataNascimento.appendChild(textoDataNascimento);
	linha.appendChild(campoNome);
	linha.appendChild(campoEmail);
	linha.appendChild(campoDataNascimento);

	corpoTabela.appendChild(linha);

}

function atualizarCidades(paramEstado, paramCidade) {

	var estado = document.getElementById(paramEstado);
	var cidade = document.getElementById(paramCidade);
	cidade.innerHTML = "";

	switch(estado.value) {
		case "ceara":
			var opcoesArray = ["fortaleza|Fortaleza", "quixada|Quixadá", "juatama|Juatama"];
			adicionarCidades(opcoesArray, cidade);
			break;
		case "rio_de_janeiro":
			var opcoesArray = ["angra_dos_reis|Angra dos Reis", "aperibe|Aperibé", "araruama|Araruama"];
			adicionarCidades(opcoesArray, cidade);
			break;
	}
}

function adicionarCidades(opcoesArray, cidade) {

	for(var opcao in opcoesArray) {
		var split = opcoesArray[opcao].split("|");
		var novaOpcao = document.createElement("option");
		novaOpcao.value = split[0];
		novaOpcao.innerHTML = split[1];
		cidade.options.add(novaOpcao);
	}
	$('.selectpicker').selectpicker('refresh');
}

function login() {
	var login = document.getElementById("login").value;
	var senha = document.getElementById("pass").value;
	if(login === "admin" && senha === "123456") {
		window.location.href = "index.html";
	} else {
		window.location.href = "login.html";
		alert("Login ou senha inválidos!");
	}
}

function resetEstadoCidade() {
	$('.selectpicker').selectpicker('refresh');
}

botaoSalvar.addEventListener('click', salvar);
botaoReset.addEventListener('click', resetEstadoCidade);
