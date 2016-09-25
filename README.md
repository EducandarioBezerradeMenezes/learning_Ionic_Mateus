# Learning Ionic Mateus

##Aplicativo Lista  

Este projeto tem como objetivo, a partir da utiliza��o dos m�dulos do Node.js Ionic + Cordova, criar um aplicativo mobile, utilizando a linguagens de marca��o HTML, de folhas de estilo CSS e de programa��o javascrpit, utilizando a biblioteca angular, que ao digitar alguma informa��o e pressionar a tecla "Enter" envia uma String a uma API que armazenar� esta String e ap�s este armazenamento, a aplica��o, solicita a lista alterada e a mostra na tela. Foram utilizados no desenvolvimento desta aplica��o:

    � JDK 1.8_101;

    � Android SDK 24.4.1;

    � Node.JS 4.5.0;

    � NPM 2.15.9;

    � Cordova 6.3.1;

    � Ionic 2.0.0;
	
    � Bootstrap 3.3.7;

    � Atom 1.12.0.

Para o desenvolvimento desta aplica��o foi utilizado o Ionic e o Cordova para criar o ambiente da aplica��o e dentro da pasta www foram criados:
	
  �	HTML:

    �  Index � arquivo que faz a importa��o de todos os arquivos e bibliotecas a serem utilizados na aplica��o,
	   tamb�m possui a parte gr�fica da aplica��o, mostrando uma caixa de texto e a lista existente;
    
  �	Javascript:
  
    �	app � cria o modulo da aplica��o angular, injeta o modulo ionic e passa configura��es do cordova para a 
	    aplica��o;

    �	configValue � guarda o valor da Url a ser utilizada para se comunicar com a API;
    
    �	dataService � cria as fun��es para se comunicar com a API utilizando a Url armazenada em configValue;
	
    �	dataCtrl � controller utilizado para gerenciar as opera��es envolvendo os dados da lista.