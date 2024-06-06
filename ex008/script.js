//Prototypes


const Livro = {
    descrever: function() {
      return `${this.titulo} por ${this.autor}`;
    },
    estaDisponivel: function() {
      return this.disponivel;
    }
  };
  
  //Função para novos livros
  function criarLivro(titulo, autor, disponivel) {
    let novoLivro = Object.create(Livro);
    novoLivro.titulo = titulo;
    novoLivro.autor = autor;
    novoLivro.disponivel = disponivel;
    return novoLivro;
  }
  
  const livro1 = criarLivro("O Impostor", "Wilson Pereira", true);
  const livro2 = criarLivro("O Ilusionista", "Joel Santos", false);
  const livro3 = criarLivro("Arte dos Traços", "Amélia Galego", true);
  

  console.log(livro1.descrever());  
  console.log(livro2.descrever());  
  console.log(livro3.descrever());  
  console.log(livro1.estaDisponivel());  
  console.log(livro2.estaDisponivel());  
  console.log(livro3.estaDisponivel()); 