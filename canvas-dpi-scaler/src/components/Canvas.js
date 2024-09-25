import React, { useRef, useEffect } from 'react';
import { scaleCanvas } from '../utils/dpiScaler';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    scaleCanvas(canvas);

    const context = canvas.getContext('2d');
    
    // Daire çizimi
    context.fillStyle = '#FF0000';  // Kırmızı renkle doldur
    context.beginPath();
    context.arc(150, 150, 75, 0, 2 * Math.PI);  // Daire parametreleri
    context.fill();
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default Canvas;
