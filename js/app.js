
function salvar(senha1, senha2) {
	var senha = document.getElementById(senha1);
	var confirmaSenha = document.getElementById(senha2);
	if(senha.value != confirmaSenha.value) {
		alert('Senhas são diferentes');
	}
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
