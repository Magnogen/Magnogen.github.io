on('load', () => {
  
  const c = $('#bg');
  const ctx = c.getContext('2d');
  c.width = 160;
  c.height = 160;
  
  const lerp = (a, b, t) => a + (b-a)*t;
  
  const img = ctx.getImageData(0, 0, c.width, c.height);
  
  for (let x = 0; x < c.width; x++) {
    for (let y = 0; y < c.height; y++) {
      const i = x + y * c.width;
      const v = rand();
      img.data[4*i + 0] = lerp(0x20, 0x24, v);
      img.data[4*i + 1] = lerp(0x20, 0x24, v);
      img.data[4*i + 2] = lerp(0x20, 0x24, v);
      img.data[4*i + 3] = 255;
    }
  }
  
  ctx.putImageData(img, 0, 0);
  
  const setHeight = () => {
    $('#bg-wrapper').style.height = `${Math.max(innerHeight, document.body.getBoundingClientRect().height)}px`;
  };
  $$('details').forEach(el => el.on('toggle', setHeight));
  setHeight();
});