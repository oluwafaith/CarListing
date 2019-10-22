$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    // createfromform
    $('#createForm').on('submit', function(e) {
        e.preventDefault();
        let brand = $('#brand').val();
        let model = $('#model').val();
        let year = $('#year').val();
        let price = $('#price').val();
        let color = $('#color').val();
        let image = $('#image').val();

        console.log(brand)
        console.log(model)
        console.log(year)
        console.log(price)
        console.log(color)
        console.log(image)
        $.ajax({
            url: "http://localhost:3000/carslisting",
            success: function(result) {
                location.reload()
                console.log(result)
            },
            method: "POST",
            data: {
                brand,
                model,
                year,
                price,
                color,
                image

            }
        });
    })
})

//postdatatotable
$(document).ready(function() {
    $.getJSON("http://localhost:3000/carslisting", function(data) {
        //e.preventDefault();
        var selector = '';
        $.each(data, function(key, value) {
            selector += '<tr>';
            selector += '<td>' + value.id + '</td>';
            selector += '<td>' + value.brand + '</td>';
            selector += '<td>' + value.model + '</td>';
            selector += '<td>' + value.year + '</td>';
            selector += '<td>' + value.price + '</td>';
            selector += '<td>' + value.color + '</td>';
            selector += '<td>' + value.image + '</td>';
            selector += '<td>' + `<input type ="button" onclick="deleteitem(${value.id})" data-id${value.id} id="deleteDesign" value = "delete"/>` + '</td>';
            selector += '<td>' + `<input type ="button" onclick="updateitem(${value.id})" data-id${value.id} id="updatelist" value = "update"/>` + '</td>';
            selector += '</tr>';
            var id = $(data.target).attr("value.id");
        });
        console.log('selector');
        $('#cars').append(selector);
    });
});
//deletedata
function deleteitem(id) {
    $.ajax({
        url: `http://localhost:3000/carslisting/${id}`,
        type: "DELETE",

    }).done(function() {
        location.reload()
        alert("listing Successfully Deleted");
    });

}

//updatedata
$('#updatelist').on('submit', function(e) {
    e.preventDefault();
    let brand = $('#brand').val(brand);
    let model = $('#model').val(model);
    let year = $('#year').val(year);
    let price = $('#price').val(price);
    let color = $('#color').val(color);
    let image = $('#image').val(image).split("\\").pop();

    $.ajax({
        url: `http://localhost:3000/carslisting/${id}`,
        type: "PUT",
        data: {
            brand,
            model,
            year,
            price,
            color,
            image
        }
    }).done(function() {
        location.replace('About.html');
        alert("carlisting Successfully Updated");
    });
});