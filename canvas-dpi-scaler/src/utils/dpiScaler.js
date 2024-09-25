export const scaleCanvas = (canvas) => {
    const context = canvas.getContext('2d');
    const scale = window.devicePixelRatio;
  
    // Canvas boyutlarını cihazın piksel oranına göre ayarla
    canvas.width = canvas.offsetWidth * scale;
    canvas.height = canvas.offsetHeight * scale;
  
    // Çizim koordinatlarını da ölçeklendirelim
    context.scale(scale, scale);
  };
  