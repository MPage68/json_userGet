$().ready(() => {

    
    $.getJSON("http://localhost:8080/Users/Get/2")
    .then((resp) => {
        console.log(resp);
        render(resp.data);
    });

});

function render(users) {
    $("#pid").val(users.id);
    $("#pname").val(users.firstname + " " + users.lastname);
    $("#pusername").val(users.username);
    $("#pphone").val(users.phonenumber);
    $("#pemail").val(users.email);
    $("#previewer").prop("checked", users.reviewer);
    $("#padmin").prop("checked", users.admin);
    

}

