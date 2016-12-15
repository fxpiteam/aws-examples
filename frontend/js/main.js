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
            var content = '<table class="striped responsive-table"> <tr> <th> Map </th> <th> Weapon </th> <th> Points </th> <th> K/D Ratio </th> <th> Mode </th> <th> Delete record </th>'
            

            data.Items.forEach(function (blackopsItem) {
                content += '<tr> '
                    + '<td>' + blackopsItem.map + '</td>'
                    + '<td>' + blackopsItem.weapon + '</td>'
                    + '<td>' + blackopsItem.points + '</td>'
                    + '<td>' + blackopsItem.ratio + '</td>'
                    + '<td>' + blackopsItem.mode + '</td>'
                    + '<td>' + '<a class="btn" onclick="deleteData(' + blackopsItem.date + ')" href="#">Delete</a>' + '</td>'
                    + '</tr>';
            });

            content += '</table>';
            $('#entries').append(content);

        }
    })

};

function postData () {
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


function deleteData (id) {
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