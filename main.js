// Funcao para inserir os valores
function inserir(numero) {
	// Armazena oque ja foi inserido
	var numeroAnterior = document.getElementById("resultado").innerHTML;
	// Escreve oque ja foi inserido, mais o novo valor
	document.getElementById("resultado").innerHTML = numeroAnterior + numero;
}

// Funcao para limpar 
function limpar() {
	// Resultado vira uma string vazia
	document.getElementById("resultado").innerHTML = "";
}

// Funcao para apagar
function apagar() {
	// Pegando os valores que estao em resultado
	var resultado = document.getElementById('resultado').innerHTML;

	// Mostrar a substring de indice 0, ate o penultimo elemento
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1) 
}

function calcular() {
	// Pegando os valores que estao em resultado
	var resultado = document.getElementById("resultado").innerHTML;

	// Verificando se resultado esta vazio
	if (resultado != '') {
		// Eval converte uma string em expressao aritmetica
		document.getElementById("resultado").innerHTML = eval(resultado);
	}

}
