(()=>{
  const $ = query => document.querySelector(query);
  const $$ = query => document.querySelectorAll(query);
  let c = $("canvas[background]");
  let ctx = c.getContext("2d"); 
  
  function random(n=8) {
    let res = 0;
    for (let i = 0; i < n; i++)
      res += Math.random();
    return 2*res/n - 1;
  }

  const clamp = (v, a, b) => {
    if (Array.isArray(v)) return v.map(e=>clamp(e, a, b));
    if (v > b) return b;
    if (v < a) return a;
    return v;
  }
  
  let Ps = [...Array(8)].map((e, i) => ({
    i, x: random()*3/5, y: random()*3/5, a: Math.random()*2*Math.PI, da: 10*random(),
    r: devicePixelRatio*(10*random()+14), dir: Math.random()*Math.PI, dtm: 1+Math.random()*0.45,
    sides: 3 + (Math.random() < 0.5),
    fade: 1, falling: false,
    xv: 0, yv: 0,
    reset() {
      this.falling = false;
      this.x = random()*3/5;
      this.y = random()*3/5;
      this.a = Math.random()*2*Math.PI;
      this.da = 10*random()
      this.r = devicePixelRatio*(10*random()+14);
      this.dir = Math.random()*Math.PI;
      this.dtm = 0.8+Math.random()*0.4;
      this.sides = 3 + (Math.random() < 0.5);
      this.xv = 0; this.yv = 0;
      this.fade = 0;
    },
    update(dt) {
      if (this.falling) {
        this.xv *= 0.99;
        this.yv += 0.0003;
        this.xv = clamp(this.xv, -0.02, 0.02);
        this.yv = clamp(this.yv, -0.02, 0.02);
        this.x += this.xv;
        this.y += this.yv;
        this.a += this.da * 1.5 * this.dtm * dt; this.a %= 360;
        if (this.y > 0.6) {
          this.reset();
          if (Math.random() < 1/20) this.sides = 45;
        } else if (this.y < -0.42) {
          heaven = true;
          this.reset();
          if (Math.random() < 1/20) this.sides = 45;
        }
      } else {
        const dist = Math.sqrt(this.x * this.x + this.y * this.y);
        const dx =  this.dir * this.y/dist;
        const dy = -this.dir * this.x/dist;
        this.x += this.dtm * dt * dx;
        this.y += this.dtm * dt * dy;
        this.a += this.da * 1.5 * this.dtm * dt * -this.dir / dist; this.a %= 360;
        if (this.x > 0.5 || this.x < -0.5 || this.y > 0.5 || this.y < -0.5) {
          let sides = this.sides;
          this.reset();
          this.sides = sides;
        }
      }
      this.fade += 50*dt;
      this.fade = clamp(this.fade, 0, 1);
    }
  }));
  
  window.addEventListener("resize", e => {
    c.width  = c.offsetWidth * devicePixelRatio;
    c.height = c.offsetHeight * devicePixelRatio;
  });
  window.dispatchEvent(new Event("resize"));
  
  function snipeAt(X, Y) {
    let [x, y] = [X*devicePixelRatio, Y*devicePixelRatio];
    let amnt = 0;
    for (let p of Ps) {
      const dx = c.width*(p.x+0.5) - x;
      const dy = c.height*(p.y+0.5) - y;
      const d = dx*dx + dy*dy;
      const mult = p.falling ? 1.5*1.5 : 1;
      if (d < mult*p.r*p.r) {
        p.xv = 0.02 * random();
        p.yv = 0.01 * -Math.abs(0*random()+1);
        p.da = Math.random() < 0.5 ? -1000 : 1000;
        p.falling = true;
      }
    }
  }
  
  window.addEventListener("click", e => snipeAt(e.clientX, e.clientY));
  window.addEventListener('touchstart', e => snipeAt(e.touches[0].clientX, e.touches[0].clientY));
  
  let lt = 0;
  function animate(t) {
    const dt = t - lt;
    lt = t;
    
    ctx.clearRect(0, 0, c.width, c.height);
    for (let p of Ps) {
      ctx.fillStyle = `rgba(255,255,255,${p.fade*72/255})`;
      ctx.beginPath();
      ctx.moveTo(c.width*(p.x+0.5) + p.r*Math.cos(p.a), c.height*(p.y+0.5) + p.r*Math.sin(p.a));
      for (let theta = p.a; theta < 2*Math.PI+p.a; theta += 2*Math.PI/p.sides)
        ctx.lineTo(c.width*(p.x+0.5) + p.r*Math.cos(theta), c.height*(p.y+0.5) + p.r*Math.sin(theta));
      ctx.closePath();
      ctx.fill();
      p.update(dt/200000);
    }
    
    requestAnimationFrame(animate);
  }
  
  requestAnimationFrame(animate);
})();
