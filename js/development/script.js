$(document).ready(function() {
    $('#coding-button').click(function() {
        focusCoding();
    });
    
    $('#message-button').click(function() {
        focusMessage();
    });
    
    $('#app-development-button').click(function() {
        focusAppDevelopment();
    });
})

function focusCoding() {
    $("#coding").addClass("bg-change");
    $("#coding-cover").addClass("off");
    $("#content-cover").addClass("off");
}

function focusMessage() {
    $("#message").addClass("bg-change");
    $("#top-message").addClass("on");
    $("#bottom-message").addClass("on");
}

function focusAppDevelopment() {
    $("#app-development").addClass("bg-change");
    $("#laptop-cover").addClass("off");
    $("#phone-cover").addClass("off");
}