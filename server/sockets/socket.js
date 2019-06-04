const { io } = require('../server');

io.on( 'connection', ( client ) => {

    console.log('Usuario conectado');

    client.emit( 'enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on( 'disconnect', () => {

        console.log('Usuario desconectado');
    });

    // Escuchar cliente
    client.on( 'enviarMensaje', ( data, callback ) => {

        console.log(data);

        /* if ( mensaje.usuario ) {

            callback({
                res: 'TODO SALIÓ BIEN'
            });
        } else {
            
            callback({
                res: 'TODO SALIO MAL'
            });
        } */
    });

});