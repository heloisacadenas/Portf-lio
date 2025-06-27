function handleSubmit() {
        // Previne o comportamento padrão do formulário
        sendMail();
        return false; // Evita o envio padrão do formulário
      }
      
      function sendMail(){
        (function(){
          emailjs.init("hjHCcCHwPMl_jh__D");
        })();
      
        var params = {
          sendername: document.querySelector("#sendername").value,
          to: document.querySelector("#to").value,
          subject: document.querySelector("#subject").value,
          message: document.querySelector("#message").value,
        };
      
        var serviceID = "service_o6jsl7f";
        var templateID = "template_luuenuj";
      
        emailjs.send(serviceID, templateID, params)
        .then( res => {
          Swal.fire({
            title: "E-mail enviado com sucesso!",
            html: 'Por favor, aguarde a resposta de nossa equipe.',
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
              `
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
              `
            }
            });
        })
        .catch();
      }
      
      document.querySelector("#btnCancelar").addEventListener("click", function() {
        document.querySelector("#contactForm").reset();
      });
