var codigos = ['P2', 'AP', 'POO1', 'FBD', 'JSB'];
var disciplinas = ['Projeto Sistema Web MVC e SQL', 'Algoritmos e Programação', 'Programação Orientada a Objetos 1', 'Fundamentos de Banco de Dados', 'JavaScript Básico'];

var tabela = document.getElementById('tabelaDisciplinas');

for (var i = 0; i < codigos.length; i++) {
    var novaLinha = tabela.insertRow();  // Cria uma nova linha
    
    var celulaCodigo = novaLinha.insertCell(0);  // Cria célula para o código
    var celulaDisciplina = novaLinha.insertCell(1);  // Cria célula para a disciplina
    
    // Insere o conteúdo nas células
    celulaCodigo.textContent = codigos[i];
    celulaDisciplina.textContent = disciplinas[i];
}


