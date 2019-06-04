const socket = io();

// Escuchar
socket.on( 'connect', function() {
    
    console.log('Conectado al servidor');
});

socket.on( 'disconnect', function() {
    
    console.log('Se perdió la conexión con el servidor');
});

socket.on( 'enviarMensaje', function( mensaje ) {

    console.log('Información recibida', mensaje);
});

// Enviar información
socket.emit( 'enviarMensaje', {
    usuario: 'Isaac',
    mensaje: 'Hola mundo'  
}, function ( resp ) {

    console.log('Respuesta', resp);
});