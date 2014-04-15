var sayThankYou = function() {
            $("#thanks").show();
            $("#keep-me-posted-form").hide();
          }

          var sendEmail = function() {
            var sendgridjs_url      = "http://startupweek-la-email.herokuapp.com/send";
            var sendgridjs_to       = "crystal+startupweekla@sensay.it";
            var sendgridjs_subject  = "[StartupWeek.LA] new interest";
            var submitted_email     = $("#email").val();
            var sendgridjs_html     = submitted_email;

            var email = {
              to      : sendgridjs_to, 
              subject : sendgridjs_subject,
              html    : sendgridjs_html
            }
            $.post(sendgridjs_url, email, function(response) {
              if (response.success) {
                sayThankYou();
                // redirect somewhere or something. up to you. the email was sent successfully.
              } else {
                alert(response.error.message);
              }
            });
          };

          $("form#keep-me-posted-form").submit(function() {
            sendEmail();
            return false;
          });
          $("button#keep-me-posted-button").click(function() {
            sendEmail();
            return false;
          });