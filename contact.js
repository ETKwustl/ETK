$(function () {

    //$('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            var sendname = $("#form_name").val();
            var sendemail = $("#form_email").val();
            var sendsubject = $("$form_subject").val();
            var sendmessage = $("#form_message").val();
            $.ajax({
                type: "POST",
                url: url,
                data: {name: sendname, email: sendemail, subject: sendsubject, message: sendmessage},
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});