$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/carslisting",
        success: function(response) {
            let output = "";
            for (let i = 1; i < response.length; i++) {
                for (let j = 0; j < response[i].carLists.length; j++) {
                    const carDetails = response[i].carLists[j];

                    // Display all cars in the home page
                    output += `<div class="col-sm-3">
                    <div class="card" style="width: 18rem; height:20rem;margin-bottom:2rem;">
                        <img class="card-img-top" src="${carDetails.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${carDetails.brand}</h5>
                            <p class="card-text">&#8358 ${carDetails.price}</p>
                            <a href="listing.html" class="btn btn-primary view-me" data-car=${i} data-details=${JSON.stringify(response[i].carLists[j])}>view me</a>
                        </div>
                    </div>
                </div>`
                }
            }
            $("#display-cars").html(output);

            //view one car
            $(".view-me").on("click", function(e) {
                e.preventDefault();
                let stringifiedCar = $(e.target).attr("data-details");
                let oneCarInfo = JSON.parse(stringifiedCar);
                output = `<div class="col-sm-3">
                    <div class="card" style="width: 18rem; height:20rem;margin-bottom:2rem;">
                        <img class="card-img-top" src="${oneCarInfo.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${oneCarInfo.brand}</h5>
                            <p class="card-text">&#8358 ${oneCarInfo.price}</p>
                            <p class="card-text"> ${oneCarInfo.model}</p>
                            <p class="card-text"> ${oneCarInfo.year}</p>
                            <a href="/index.html" class="btn btn-primary">Back</a>
                        </div>
                    </div>
                </div>`
                $("#display-cars").html(output);
            })
        }
    });
});