var VAR_URL = 'https://pxseppi1mg.execute-api.eu-central-1.amazonaws.com/prod/statistics';

function getData() {

    $.ajax({
        type: 'GET',
        url: VAR_URL,

        success: function (data) {
            createStatisticsPDF(data.Items);
            /*
            var docDefinition = {
                content: [
                    { text: 'Dynamic parts', style: 'header' },
                    table(data.Items, ['Map', 'Weapon', 'Points', 'Ratio', 'Mode'])
                ]
            };
            pdfMake.createPdf(docDefinition).open();*/
        }
    })

};

function buildTableBody(data, columns) {
    var body = [];

    body.push(columns);

    data.forEach(function (row) {
        var dataRow = [];

        columns.forEach(function (column) {
            column = column.toLowerCase();
            dataRow.push(row[column].toString());
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
        table: {
            headerRows: 1,
            body: buildTableBody(data, columns)
        }
    };
}

function createStatisticsPDF(data) {
    var docDefinition = {
        content: [
            { text: 'Mis estadísticas de Call of Duty: Blackops', style: 'header' },
            'En este pdf no me he explayado tanto en la realización de florituras y estilos. Al parecer, pdfmake (el componente con el que está hecho este pdf) es un fork de pdfkit, por lo que debe tener todo lo que tenía el anterior nativamente, aunque con una sintaxis diferente a la que habrá que acostumbrarse si queremos usar tablas (y por lo tanto usar este componente).',
            table(data, ['Map', 'Weapon', 'Points', 'Ratio', 'Mode'])

        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            }
        }
    };
    pdfMake.createPdf(docDefinition).open();

}
