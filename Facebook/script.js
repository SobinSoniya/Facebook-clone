$(document).ready(function(){
    $("#signup-form1").validate({
        rules:{
            fname:{
                required: true,
                minlength: 3,
                maxlength: 6
            },
            sname:{
                required: true,
                minlength: 4,
                maxlength: 6 
            },
            emailAddress:{
                required: true,
                email: true
            },
            passWord:{
                required: true,
                minlength: 10
            },
            day:{
                required: true
            },
            gender:{
                required: true
            }
        },
        messages:{
            fname:{
                required: "Enter the name",
                minlength: "Enter at least 3 characters",
                maxlength: "Enter not more than 6 characters"
            },
            sname:{
                required: "Enter the surname",
                minlength: "Enter at least 4 characters",
                maxlength: "Enter not more than 6 characters"
            },
            emailAddress:{
                required: "Enter the email address",
                email: "Enter a valid email address"
            },
            passWord:{
                required: "Enter a password",
                minlength: "Password must be at least 10 characters long"
            },
            day:{
                required: "Select a day"
            },
            gender:{
                required: "Select a gender"
            }
        }
    });
});
