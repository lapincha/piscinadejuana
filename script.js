// ============================================
// FUNCIÓN PRINCIPAL
// ============================================

// Envía la reserva por WhatsApp
function enviarWA() {
  // Mensaje fijo
  const msg = "Buenas, me gustaría reservar la piscina";
  
  // Abrir WhatsApp con el mensaje
  window.open(
    `https://wa.me/5359638868?text=${encodeURIComponent(msg)}`, 
    '_blank'
  );
}

// ============================================
// INICIALIZACIÓN (se ejecuta al cargar la página)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Página cargada correctamente');
  
  // Exponer la función al ámbito global para usar desde HTML con onclick
  window.enviarWA = enviarWA;
});

// ============================================
// (OPCIONAL) También puedes llamar a la función 
// desde la consola del navegador con:
// enviarWA()
// ============================================
