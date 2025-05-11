function toggleCarta() {
  const envelope = document.querySelector('.envelope');
  const frente = document.querySelector('.frente');
  const isAberto = envelope.classList.contains('aberto');

  if (isAberto) {
    // Fechando o envelope
    envelope.classList.remove('aberto');
    frente.style.display = 'flex';
    setTimeout(() => {
      frente.style.opacity = '1';
    }, 10);
  } else {
    // Abrindo o envelope
    envelope.classList.add('aberto');
    frente.style.opacity = '0';
    setTimeout(() => {
      frente.style.display = 'none';
    }, 500);
  }
}
