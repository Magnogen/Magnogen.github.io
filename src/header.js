(_=>{
  let me = document.currentScript;
  let sides = +me.getAttribute('shape');
  let colors = me.getAttribute('colors').split(',').map(e=>e.trim());

  html = `
<header>
  <div content>
    <span title> ${me.getAttribute('title') || ''} </span>
    <span greeting><span></span>
      ${me.getAttribute('subtitle') || ''}
    <span></span></span>
  </div>
  <canvas></canvas>
  <div divider>
    <svg viewbox="0 0 1200 120" preserveaspectratio="none">
      <path d="M1200 120L0 0 0 0 1200 0 1200 120z"></path>
    </svg>
  </div>
</header>
`;

  me.insertAdjacentHTML("afterend", html);
  me.remove();
  
  function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random();
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0) return randn_bm()*2-1;
    return num*2-1;
  }

  let Ps = Array(15).fill().map(e=>({
    x: randn_bm()*0.667, y: randn_bm()*0.667, a: Math.random()*2*Math.PI,
    r: 3*randn_bm()+5,dir: Math.floor(Math.random()*2)*2-1, dtm: 0.8+Math.random()*0.4,
    update: function(dt) {
      let clamp = (v, a, b) => Array.isArray(v) ? v.map(e=>clamp(e, a, b)) : v > b ? b : v < a ? a : v;
      let dist = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
      let dx =  this.dir * this.y/dist;
      let dy = -this.dir * this.x/dist;
      this.x += this.dtm * dt * dx;
      this.y += this.dtm * dt * dy;
      [this.x, this.y] = clamp([this.x, this.y], -0.5, 0.5);
      this.a += 2 * this.dtm * dt * -this.dir / dist; this.a %= 360;
    }
  }));

  let c = document.querySelector("header canvas");
  c.width  = c.offsetWidth * window.devicePixelRatio;
  c.height = c.offsetHeight * window.devicePixelRatio;
  var ctx = c.getContext("2d");

  window.addEventListener("resize", e=>{
    c.width  = c.offsetWidth * window.devicePixelRatio;
    c.height = c.offsetHeight * window.devicePixelRatio;
  });


  function animate() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.strokeStyle = '#ffffff00';
    ctx.fillStyle = '#ffffff48';
    for (let p of Ps) {
      ctx.beginPath();
      ctx.moveTo(c.width*(p.x+0.5) + p.r*Math.cos(p.a), c.height*(p.y+0.5) + p.r*Math.sin(p.a));
      for (let theta of Array(sides).fill().map((e,i)=>p.a+i*2*Math.PI/sides))
        ctx.lineTo(c.width*(p.x+0.5) + p.r*Math.cos(theta), c.height*(p.y+0.5) + p.r*Math.sin(theta));
      ctx.closePath();
      ctx.fill();
      p.update(0.001);
    }
    
    ctx.globalCompositeOperation = 'screen';
    var bg = ctx.createLinearGradient(0, 0, 0, c.height);
    let begin = parseFloat(getComputedStyle(document.querySelector('header')).fontSize) + 24
    bg.addColorStop(begin/c.height, colors[1]);
    bg.addColorStop(1, colors[0]);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, c.width, c.height);

    window.requestAnimationFrame(animate);
  }

  animate();
})();


