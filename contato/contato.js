// menssagem la do formulario
    const form = document.getElementById('formContato');
    const popup = document.getElementById('popupSucesso');
    const fechar = document.getElementById('fecharPopup');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // impede envio real
      popup.classList.add('ativo'); // exibe a mens
      form.reset(); // limpa os campos
    });

    fechar.addEventListener('click', () => {
      popup.classList.remove('ativo');
    });