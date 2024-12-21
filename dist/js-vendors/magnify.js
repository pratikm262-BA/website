const magnifyImage = (imgID, zoom) => {
  const img = document.getElementById(imgID);
  const container = img.parentElement;

  container.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.pageX - left;
      const y = e.pageY - top;
      const posX = Math.max(Math.min(x / width, 1), 0);
      const posY = Math.max(Math.min(y / height, 1), 0);
      img.style.transformOrigin = `${posX * 100}% ${posY * 100}%`;
      img.style.transform = `scale(${zoom})`;
  });

  container.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
  });
};

magnifyImage("pre-shampoo", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("keratin", 3); // Magnify with 2x zoom
magnifyImage("bioplastia", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("treatment", 3); // Magnify with 2x zoom
magnifyImage("main-image1", 3); // Magnify with 2x zoom
magnifyImage("main-image2", 3); // Magnify with 2x zoom