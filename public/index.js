console.log($);
/*$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    //createlisting
    $('form').on('submit', function(e) {
            e.preventDefault();
            let brand = $('#brand').val();
            let model = $('#model').val();
            let telephone = $('#telephone').val();
            let email = $('#email').val();
            let price = $('#price').val();
            let color = $('#color').val();
            let password = $('#password').val();
            let image = $('#image').val().split("\\").pop();
            console.log(brand)
            console.log(model)
            console.log(telephone)
            console.log(email)
            console.log(price)
            console.log(color)
            console.log(image)

            $.ajax({
                url: "http://localhost:3000/carslisting",
                success: function(result) {
                    location.reload()
                        // $("#div1").html(result);     
                    console.log(result)
                },
                method: "POST",
                data: {
                    brand,
                    model,
                    telephone,
                    email,
                    price,
                    color,
                    password,
                    image

                }
            });
        })
        // get from db
    $.ajax({
        url: "http://localhost:3000/carslisting",
        type: "GET",
        success: function(response) {
            let mapped = response.map(car => {

                return `<div class="col-sm-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="/img/${car.image} "/>
            <div class="card-body">
                <h5 class="card-title">${car.brand} ${car.model}</h5>
                <p class="card-text">it allgoes for 1,000,000</p>
                <a href="listing.html?id=${car.id}" class="btn btn-primary">view me</a>
            </div>
        </div>
    </div>`;
            });
            $("#allcars").html(mapped);
        }
    });
});

//postdatatable
$(document).ready(function() {
    $.getJSON("http://localhost:3000/carslisting", function(data) {
        //e.preventDefault();
        var selector = '';
        $.each(data, function(key, value) {
            selector += '<tr>';
            selector += '<td>' + value.id + '</td>';
            selector += '<td>' + value.brand + '</td>';
            selector += '<td>' + value.model + '</td>';
            selector += '<td>' + value.price + '</td>';
            selector += '<td>' + value.color + '</td>';
            selector += '<td>' + value.image + '</td>';
            selector += '<td>' + `<input type ="button" onclick="deleteitem(${value.id})" data-id${value.id} id="deleteDesign" value = "delete"/>` + '</td>';
            selector += '<td>' + `<input type ="button" onclick="updateitem(${value.id})" data-id${value.id} id="updateDesign" value = "update"/>` + '</td>';
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
function updateitem(id) {
    $.ajax({
            url: `http://localhost:3000/carslisting/${id}`,
            type: "PATCH",
            data: {
                brand,
                model,
                telephone,
                email,
                price,
                color,
                password,
                image

            }
        })
        .done(function() {
            window.location.href = `/services.html?id=${id}`
            alert("listing successfully updated")
        })
        
}*/