var lorem = 'Bueno pues aquí hay texto donde explico el por qué de mis asombrosos números jugando a este magnífico juego llamado Call of Duty: Blackops, el cual ha inspirado el realizar toda esta página web. Como no se me ocurre más, simplemente voy a copiar el mismo texto un par de veces más. Bueno pues aquí hay texto donde explico el por qué de mis asombrosos números jugando a este magnífico juego llamado Call of Duty: Blackops, el cual ha inspirado el realizar toda esta página web. Como no se me ocurre más, simplemente voy a copiar el mismo texto un par de veces más. Bueno pues aquí hay texto donde explico el por qué de mis asombrosos números jugando a este magnífico juego llamado Call of Duty: Blackops, el cual ha inspirado el realizar toda esta página web. Como no se me ocurre más, simplemente voy a copiar el mismo texto un par de veces más.';

function makePDF() {

    var iframe = document.querySelector("iframe");

    // create a document and pipe to a blob
    var doc = new PDFDocument();
    var stream = doc.pipe(blobStream());

    // draw some text
    doc.fontSize(25)
    .text('Unos dibujos interesantes...', 100, 80);
    
    // some vector graphics
    doc.save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill("#FF3300");
    
    doc.circle(280, 200, 50)
    .fill("#6600FF");
    
    // an SVG path
    doc.scale(0.6)
    .translate(470, 130)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();
    
    $.ajax({
        type: 'GET',
        url: VAR_URL,

        success: function (data) {

            // and some justified text wrapped into columns
            doc.text('Y aquí estan mis estadisticas de COD: Blackops...', 100, 300)
            .font('Times-Roman', 13)
            .moveDown()
            .text(lorem, {
                width: 412,
                align: 'justify',
                indent: 30,
                columns: 2,
                height: 150,
                ellipsis: true
            });

            doc.text("", 100,550).
            text("Mapa | Arma | Puntos | K/D | Modo de juego", {
                align: 'center'
            });
            data.Items.forEach(function (blackopsItem) {
                doc.text(blackopsItem.map + ' | '
                    + blackopsItem.weapon + ' | '
                    + blackopsItem.points + ' | '
                    + blackopsItem.ratio + ' | '
                    + blackopsItem.mode, 
                    {
                        align: 'center'
                    }
                );
            });
            
            // end and display the document in the iframe to the right
            doc.end();
            stream.on('finish', function() {
                iframe.src = stream.toBlobURL('application/pdf');
            });
        }
    });

};

