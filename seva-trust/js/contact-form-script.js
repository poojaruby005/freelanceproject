$("#main-contact-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var address = $("#address").val();

    debugger;

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: { "name": name, "dob": dob, "gender": gender, "phone": phone, "email": email, "subject": subject, "address": address },
        success : function(text){
            debugger;
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    var msgClasses = "";
    if(valid){
        msgClasses = "h3 text-center tada animated text-success";
    } else {
        msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}