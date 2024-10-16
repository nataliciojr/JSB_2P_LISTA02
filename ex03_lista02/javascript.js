var codigos = ['P2', 'AP', 'POO1', 'FBD', 'JSB'];
var disciplinas = ['Projeto Sistema Web MVC e SQL', 'Algoritmos e Programação', 'Programação Orientada a Objetos 1', 'Fundamentos de Banco de Dados', 'JavaScript Básico'];

var tabela = document.getElementById('tabelaDisciplinas');


for (var index in codigos) {
    var novaLinha = tabela.insertRow();  
    
    var celulaCodigo = novaLinha.insertCell(0);  
    var celulaDisciplina = novaLinha.insertCell(1);  
    
    
    celulaCodigo.textContent = codigos[index];
    celulaDisciplina.textContent = disciplinas[index];
}
