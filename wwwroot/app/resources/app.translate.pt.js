(function () {
    'use strict';
    angular.module('suc')
        .config(function ($translateProvider) {
            $translateProvider.translations('pt', {
                ENDPOINT_ONLINE: 'Serviço rodando normalmente!',
                ENDPOINT_OFFLINE: 'Desculpe, seu serviço está fora!',
                APP_SLOGAN: 'reserva de salas inteligente',
                REGISTER: 'registre-se',
                NAME: 'Nome',
                EMAIL: 'E-mail',
                PASSWORD: 'Senha',
                CONFIRM_PASSWORD: 'Confirme sua Senha',
                INPUT_YOUR_NAME: 'Digite seu nome',
                INPUT_YOUR_EMAIL: 'Digite seu E-mail',
                INPUT_YOUR_PASSWORD: 'Digite sua senha',
                INPUT_YOUR_CONFIRM_PASSWORD: 'Confirme sua Senha',
                CONTINUE: 'Continuar',
                LANGUAGE: 'Idioma',
                PORTUGUESE: 'Portugês',
                ENGLISH: 'Inglês',
                INVALID_NAME: 'Nome inválido.',
                INVALID_EMAIL: 'E-mail inválido.'
            });
        });
})();