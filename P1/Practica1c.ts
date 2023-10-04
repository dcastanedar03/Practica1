function fechas(fecha12Horas: string): string {
    const p = fecha12Horas.split(' ');
    const hm= p[0].split(':');
    const mt = p[1];
  
    const horas = parseInt(hm[0], 10);
    const minutos = parseInt(hm[1], 10);
    let horasCambiada = horas;
  
    if (mt === 'pm' && horas !== 12) {
        horasCambiada += 12;
    } else if (mt === 'am' && horas === 12) {
        horasCambiada = 0;  
    }
  
    const horasStr = horasCambiada.toString().padStart(2, '0');
    const minutosStr = minutos.toString().padStart(2, '0');
  
    return `${horasStr}${minutosStr}`;
  }
  
  console.log(fechas("8:00 am")); 
  console.log(fechas("8:00 pm")); 
  