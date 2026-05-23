interface AnimConfig {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
}

interface Config {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ExtendedCanvasRenderingContext2D extends CanvasRenderingContext2D {
  running?: boolean;
  frame?: number;
}

function n(this: { [key: string]: unknown }, e: Partial<AnimConfig>) {
  this.init(e || {});
}
n.prototype = {
  init: function (this: { [key: string]: unknown }, e: Partial<AnimConfig>) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  },
  update: function (this: { phase: number; frequency: number; offset: number; amplitude: number }) {
    return (
      (this.phase += this.frequency),
      (e = this.offset + Math.sin(this.phase) * this.amplitude)
    );
  },
  value: function () {
    return e;
  },
};

function Line(this: { spring: number; friction: number; nodes: Point[] }, e: { spring: number }) {
  this.init(e || {});
}

Line.prototype = {
  init: function (this: { spring: number; friction: number; nodes: Point[] }, e: { spring: number }) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let t, n = 0; n < E.size; n++) {
      t = new Node();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  update: function (this: { spring: number; friction: number; nodes: Point[] }) {
    let e = this.spring,
      t = this.nodes[0];
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;
    for (let n, i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i];
      if (i > 0) {
        n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * e;
        t.vy += (n.y - t.y) * e;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  },
  draw: function (this: { nodes: Point[] }) {
    let e: Point,
      t: Point,
      n = this.nodes[0].x,
      i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[a];
    t = this.nodes[a + 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  },
};

function onMousemove(e: MouseEvent | TouchEvent) {
  function o() {
    lines = [];
    for (let e = 0; e < E.trails; e++)
      lines.push(new (Line as unknown as new (e: { spring: number }) => void)({ spring: 0.45 + (e / E.trails) * 0.025 }));
  }
  function c(e: MouseEvent | TouchEvent) {
    const te = e as TouchEvent;
    const me = e as MouseEvent;
    if (te.touches) {
      pos.x = te.touches[0].pageX;
      pos.y = te.touches[0].pageY;
    } else {
      pos.x = me.clientX;
      pos.y = me.clientY;
    }
    e.preventDefault();
  }
  function l(e: TouchEvent) {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }
  document.removeEventListener("mousemove", onMousemove as EventListener);
  document.removeEventListener("touchstart", onMousemove as EventListener);
  document.addEventListener("mousemove", c as EventListener);
  document.addEventListener("touchmove", c as EventListener);
  document.addEventListener("touchstart", l);
  c(e);
  o();
  render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
    ctx.lineWidth = 10;
    for (let e, t = 0; t < E.trails; t++) {
      (e = lines[t]).update();
      e.draw();
    }
    ctx.frame!++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

let ctx: ExtendedCanvasRenderingContext2D,
  f: { update: () => number; value: () => number },
  e = 0;
const pos: Point = { x: 0, y: 0, vx: 0, vy: 0 };
let lines: Line[] = [];
const E: Config = {
    debug: true,
    friction: 0.5,
    trails: 80,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
  };

function Node(this: Point) {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

export const renderCanvas = function () {
  ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d") as ExtendedCanvasRenderingContext2D;
  ctx.running = true;
  ctx.frame = 1;
  f = new (n as unknown as new (e: Partial<AnimConfig>) => { update: () => number; value: () => number })({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener("mousemove", onMousemove as EventListener);
  document.addEventListener("touchstart", onMousemove as EventListener);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = true;
  });
  resizeCanvas();
};
