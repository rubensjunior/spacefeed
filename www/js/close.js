// JavaScript Document

// Inclui a API do Electron para controlar a janela
const { remote } = require('electron');

// Obtém a janela atual
let window = remote.getCurrentWindow();

// Manipula o evento de minimizar
document.getElementById('minimizarBtn').addEventListener('click', function () {
    window.minimize();
});

// Manipula o evento de fechar
document.getElementById('fecharBtn').addEventListener('click', function () {
    window.close();
});
