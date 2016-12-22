var VAR_URL = 'https://pxseppi1mg.execute-api.eu-central-1.amazonaws.com/prod/statistics';

$(document).ready(function () {

    $('select').material_select();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $(".button-collapse").sideNav();

});

function getData() {

    $.ajax({
        type: 'GET',
        url: VAR_URL,

        success: function (data) {
            var content = '<table class="striped responsive-table"> <tr> <th> Map </th> <th> Weapon </th> <th> Points </th> <th> K/D Ratio </th> <th> Mode </th> <th> Details </th> <th> Delete record </th>'


            data.Items.forEach(function (blackopsItem) {
                content += '<tr> '
                    + '<td>' + blackopsItem.map + '</td>'
                    + '<td>' + blackopsItem.weapon + '</td>'
                    + '<td>' + blackopsItem.points + '</td>'
                    + '<td>' + blackopsItem.ratio + '</td>'
                    + '<td>' + blackopsItem.mode + '</td>'
                    + '<td>' + '<a class="btn orange" href="html/details.html?id=' + blackopsItem.date + '">Details</a>' + '</td>'
                    + '<td>' + '<a class="btn red" onclick="deleteData(' + blackopsItem.date + ')" href="#">Delete</a>' + '</td>'
                    + '</tr>';
            });

            content += '</table>';
            $('#entries').append(content);

        }
    })

};

function postData() {
    event.preventDefault();
    return $.ajax({
        type: 'POST',
        url: VAR_URL,
        data: JSON.stringify({
            "map": $('#map').val(),
            "weapon": $('#weapon').val(),
            "points": $('#points').val(),
            "mode": $('#mode').val(),
            "ratio": $('#ratio').val(),
            "date": Date.now()
        }),
        contentType: "application/json",

        success: function (data) {
            location.reload();
        }
    });
};


function deleteData(id) {
    if (confirm("Are you sure?")) {
        event.preventDefault();
        return $.ajax({
            type: 'DELETE',
            url: VAR_URL,
            data: JSON.stringify({
                "date": id
            }),
            contentType: "application/json",

            success: function (data) {
                location.reload();
            }
        });
    }
    return false;
};


function getOneData(id, callback) {

    return $.ajax({
        type: 'GET',
        url: VAR_URL + '/' + id,

        success: function (data) {
            callback(null, data);
        }
    });

    return false;
};

function getOneDataPretty() {

    var id = getURLParameters('id');
    content = '<div>' 
    getOneData(id, function(err, data) {
        if (err) alert(err);
        else {
            content += '<p>Map: ' + data.Item.map + '</p>'
                + '<p>Weapon: ' + data.Item.weapon + '</p>'
                + '<p>Points: ' + data.Item.points + '</p>'
                + '<p>Ratio K/D: ' + data.Item.ratio + '</p>'
                + '<p>Mode: ' + data.Item.mode + '</p>' + '</div>'; 
        }
        $('#data').append(content);
    });
};

function getURLParameters(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};