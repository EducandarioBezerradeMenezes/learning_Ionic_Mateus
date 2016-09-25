# Learning Ionic Mateus

##Aplicativo Lista  

Este projeto tem como objetivo, a partir da utilização dos módulos do Node.js Ionic + Cordova, criar um aplicativo mobile, utilizando a linguagens de marcação HTML, de folhas de estilo CSS e de programação javascrpit, utilizando a biblioteca angular, que ao digitar alguma informação e pressionar a tecla "Enter" envia uma String a uma API que armazenará esta String e após este armazenamento, a aplicação, solicita a lista alterada e a mostra na tela. Foram utilizados no desenvolvimento desta aplicação:

    • JDK 1.8_101;

    • Android SDK 24.4.1;

    • Node.JS 4.5.0;

    • NPM 2.15.9;

    • Cordova 6.3.1;

    • Ionic 2.0.0;
	
    • Bootstrap 3.3.7;

    • Atom 1.12.0.

Para o desenvolvimento desta aplicação foi utilizado o Ionic e o Cordova para criar o ambiente da aplicação e dentro da pasta www foram criados:
	
  •	HTML:

    •  Index – arquivo que faz a importação de todos os arquivos e bibliotecas a serem utilizados na aplicação,
	   também possui a parte gráfica da aplicação, mostrando uma caixa de texto e a lista existente;
    
  •	Javascript:
  
    •	app – cria o modulo da aplicação angular, injeta o modulo ionic e passa configurações do cordova para a 
	    aplicação;

    •	configValue – guarda o valor da Url a ser utilizada para se comunicar com a API;
    
    •	dataService – cria as funções para se comunicar com a API utilizando a Url armazenada em configValue;
	
    •	dataCtrl – controller utilizado para gerenciar as operações envolvendo os dados da lista.