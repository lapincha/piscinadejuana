const HORAS = { '1': 1, '4': 4, 'dia': null };

  function actualizarHorario() {
    const val = document.getElementById('oferta').value;
    const colInicio = document.getElementById('col-inicio');
    const colFin = document.getElementById('col-fin');
    const hint = document.getElementById('hint-horario');
    const filaHoras = document.getElementById('fila-horas');

    document.getElementById('hora-inicio').value = '';
    document.getElementById('hora-fin').value = '';

    if (val === 'dia') {
      filaHoras.style.gridTemplateColumns = '1fr';
      colInicio.style.display = 'none';
      colFin.style.display = 'none';
      hint.textContent = 'El alquiler de día completo cubre el horario de apertura completo.';
    } else {
      const h = HORAS[val];
      filaHoras.style.gridTemplateColumns = '1fr';
      colInicio.style.display = '';
      colFin.style.display = '';
      hint.textContent = `La hora de fin se calcula automáticamente (+${h}h desde el inicio).`;
    }
  }

  function calcularFin() {
    const val = document.getElementById('oferta').value;
    const hi = document.getElementById('hora-inicio').value;
    if (!hi || !HORAS[val]) return;
    const [h, m] = hi.split(':').map(Number);
    const fin = new Date(0, 0, 0, h + HORAS[val], m);
    document.getElementById('hora-fin').value =
      String(fin.getHours()).padStart(2,'0') + ':' + String(fin.getMinutes()).padStart(2,'0');
  }

  function enviarWA() {
    const n = document.getElementById('nombre').value.trim();
    const sel = document.getElementById('oferta');
    const o = sel.options[sel.selectedIndex]?.text || '';
    const val = sel.value;
    const f = document.getElementById('fecha').value;
    const hi = document.getElementById('hora-inicio').value;
    const hf = document.getElementById('hora-fin').value;

    const esDia = val === 'dia';
    if (!n || !o || !f || (!esDia && (!hi || !hf))) {
      alert('Por favor, completa todos los campos.'); return;
    }

    const fecha = new Date(f + 'T12:00:00').toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
    const horario = esDia ? 'Día completo' : `${hi} – ${hf}`;
    const msg = `Hola! Quiero reservar en la piscina de Juana 🏊\n\n👤 *Nombre:* ${n}\n🎫 *Servicio:* ${o}\n📅 *Fecha:* ${fecha}\n🕐 *Horario:* ${horario}\n\n¿Podéis confirmar disponibilidad? ¡Gracias!`;

    window.open(`https://wa.me/5359638868?text=${encodeURIComponent(msg)}`, '_blank');
  }