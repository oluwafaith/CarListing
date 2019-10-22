$(document).ready(function() {

    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        let surname = $('#surname').val();
        let firstname = $('#firstname').val();
        let gender = $('#gender').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();
        let phone = $('#phone').val();
        let address = $('#address').val();

        console.log(surname)
        console.log(firstname)
        console.log(gender)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        console.log(phone)
        console.log(address)

        $.ajax({
            url: "http://localhost:3000/carslisting",
            success: function(result) {
                console.log(result)
            },
            method: "POST",
            data: {
                surname,
                firstname,
                gender,
                email,
                password,
                confirmPassword,
                phone,
                address

            }
        });
        location.replace('login.html');
    })
})