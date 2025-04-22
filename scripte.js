// script.js
function contactWhatsApp(message) {
  const phone = '22892944771'; // Remplace par le numéro WhatsApp de la pâtissière
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(url, '_blank');
}
