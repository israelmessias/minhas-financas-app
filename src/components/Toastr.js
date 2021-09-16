import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

/**/

  export function mostrarMensagem(titulo, mensagem, tipo)
  {
    toastr[tipo](mensagem, titulo)
  }

  export function mostrarErro(mensagem)
  {
    mostrarMensagem('Erro', mensagem, 'error')
  }

  export function mostrarSuccess(mensagem)
  {
    mostrarMensagem('Success', mensagem, 'success')
  }

  export function mostrarAlert(mensagem)
  {
    mostrarMensagem('Alert', mensagem, 'warning')
  }

