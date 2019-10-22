const userFromSS = JSON.parse(sessionStorage.getItem("userEmail"));
console.log(userFromSS);


$.ajax({
    method: "GET",
    url: `http://localhost:3000/carslisting?email=${userFromSS}`,
    success: function(selector) {
        const userData = selector[0];
        console.log(userData);
        $("#username").text(userData.firstname);
        if (!userData.carLists) {
            $("#no-of-cars").text("no");
        } else {
            $("#no-of-cars").text(userData.carLists.length);

            let output = "";
            //show user's cars
            for (let i = 0; i < userData.carLists.length; i++) {
                output += `<div class="col-sm-3" style="margin: 2rem;">
            <div id="card${i}" class="card" style="width: 18rem;">
                <img class="card-img-top" src="${userData.carLists[i].image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Brand: ${userData.carLists[i].brand}</h5>
                    <p class="card-text">Model: ${userData.carLists[i].model}</p>
                    <p class="card-text">Year: ${userData.carLists[i].year}</p>
                    <p class="card-text">Price: ${userData.carLists[i].price}</p>
                    <p class="card-text">Color: ${userData.carLists[i].color}</p>
                    <a href="#showform" class="btn btn-warning" data-carIndex=${i}>update</a>
                    <a class="btn btn-danger" data-carIndex=${i}>delete</a>
                </div>
                </div>
                </div>`;
                $("#display-cars").html(output);
            }
        }

        //Create a car
        let carLists;
        $("#create").on("click", function(e) {
            e.preventDefault();
            // A get request to get user's carlists
            if (!userData.carLists) {
                carLists = [];
            } else {
                carLists = userData.carLists;
            }
            //push new item into carLists
            carLists.push({
                brand: $("#brand").val(),
                model: $("#model").val(),
                year: $("#year").val(),
                price: $("#price").val(),
                color: $("#color").val(),
                image: $("#image").val()
            });
            //send or send back to database through patch request
            $.ajax({
                method: "PATCH",
                contentType: 'application/json',
                data: JSON.stringify({ carLists }),
                url: `http://localhost:3000/carslisting/${userData.id}`,
                success: function(response) {
                    console.log("done");

                }
            });
            location.reload();
            //To check if there is carList
        });

        //delete car
        $(".card").on("click", function(e) {
            e.preventDefault();
            if ($(e.target).hasClass("btn-danger")) {
                carLists = userData.carLists
                carId = $(e.target).attr("data-carIndex");
                carLists.splice(carId, 1);
                $.ajax({
                    method: "PATCH",
                    contentType: 'application/json',
                    data: JSON.stringify({ carLists }),
                    url: `http://localhost:3000/carslisting/${userData.id}`,
                    success: function(response) {
                        console.log("done");
                    }
                });
                location.reload();
            }

            //update car
            if ($(e.target).hasClass("btn-warning")) {
                carId = $(e.target).attr("data-carIndex");
                carLists = userData.carLists;
                console.log(carLists[carId]);
                $("#brand").val(carLists[carId].brand);
                $("#model").val(carLists[carId].model);
                $("#year").val(carLists[carId].year);
                $("#price").val(carLists[carId].price);
                $("#color").val(carLists[carId].color);
                $("#image").val(carLists[carId].image);



                $("#create").css("display", "none");
                $("#update").css("display", "block");
                $("#cancel").css("display", "block");

                $("#update").on("click", function(e) {
                    e.preventDefault();

                    carLists[carId].brand = $("#brand").val();
                    carLists[carId].model = $("#model").val();
                    carLists[carId].year = $("#year").val();
                    carLists[carId].price = $("#price").val();
                    carLists[carId].color = $("#color").val();
                    carLists[carId].image = $("#image").val();

                    $.ajax({
                        method: "PATCH",
                        contentType: 'application/json',
                        data: JSON.stringify({ carLists }),
                        url: `http://localhost:3000/carslisting/${userData.id}`,
                        success: function(response) {
                            console.log("done");
                        }
                    });
                    location.reload();
                });

            }

        })

    }
});