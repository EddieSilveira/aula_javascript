
function hasClick(){
  alert("Obrigado por clicar");
  var popClick = document.getElementById('popClick');
  popClick.innerHTML = "<b>Obrigado por clicar!</b>";
};

function redirecionar(){
  window.open("https://www.thegreatcoursesdaily.com/wp-content/uploads/2019/10/header-20.jpg")
  //window.location.href = "https://www.thegreatcoursesdaily.com/wp-content/uploads/2019/10/header-20.jpg";
}

function trocar(elemento){
  elemento.innerHTML = "O mouse já passou";
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("Pagina carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value)
}

// function soma(n1, n2){
//   return n1+n2;
// }

// function setReplace(frase, nome, novo_nome){
//   return frase.replace(nome, novo_nome)
// }

// function validaIdade(idade){
//   var validar;
//   if(idade >= 18){
//     validar = true;
//   }else{
//     validar = false;
//   }
//   return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));
// alert(soma(5,10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// var d = new Date();
// alert(d.getDate());
// alert(d.getHours());
// alert(d.getMinutes());

// for(var count = 1; count <= 5; count++) {
//   alert(count);
// }

// var count = 0;
// while(count < 5) {
//   console.log(count);
//   count++;
// };

// var idade = prompt("Qual sua idade");
// if(idade >= 18) {
//   alert('Maior de idade');
// } else {
//   alert("Menor de idade");
// }


// var frutas = [{nome: "Maçã", cor: "vermelha"}, {nome: "Uva", cor: "Roxa"}]

// console.log(frutas[0].nome);

// var fruta = {nome: "maçã", cor: "vermelha"};
// console.log(fruta);



// var lista = ["maça", "pêra", "laranja"];
// lista.push("Uva");//insere um item na ultima posição da lista
// lista.pop();//remove o item da ultima posição da lista
// console.log(lista.length);//tamanho da lista
// console.log(lista.toString());//transforma em string
// console.log(lista.join(" - "));//acrescenta caracter na lista
// console.log(lista.reverse());//inverte


// var nome = "Eddie Silveira";
// var idade = 26;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";

// //alert(nome + " tem " + idade + " anos.");

// console.log(idade * idade2);
// console.log(frase);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toLowerCase())
// console.log(frase.toUpperCase())