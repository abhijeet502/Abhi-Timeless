/* -------------------------
  Timeless — style.css
   Vibrant cinematic theme
   Keep as-is unless customizing colors
   ------------------------- */

:root{
  --bg-900:#071028;
  --glass: rgba(255,255,255,0.06);
  --accent1: #ff6ec7; /* pink */
  --accent2: #7c5cff; /* purple */
  --accent3: #38bdf8; /* cyan */
  --gold: #facc15;    /* accent spark */
  --text: #e6eef8;
  --muted: #9fb0c8;
}

/* Reset */
*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;}
body{
  background: linear-gradient(180deg,#021827 0%, #08112a 100%);
  color:var(--text);
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

/* top nav */
.topnav{
  position:fixed;top:16px;left:0;right:0;display:flex;justify-content:space-between;align-items:center;padding:10px 24px;z-index:1000;
  pointer-events:auto;
}
.topnav .brand{font-weight:700;letter-spacing:1px;font-size:1rem;background:linear-gradient(90deg,var(--accent3),var(--accent2));-webkit-background-clip:text;color:transparent}
.topnav .nav-actions button{
  margin-left:10px;padding:8px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);
  color:var(--text);cursor:pointer;font-weight:600;backdrop-filter:blur(6px);
}
.topnav .nav-actions button:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,0.4);}

/* global canvas background */
.bg-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;}

/* layout and scenes */
.site{position:relative;z-index:10}
.scene{
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;position:relative;padding:80px 20px;
  overflow:hidden;
}
.scene .content{max-width:900px;text-align:center;z-index:5}
.title{font-size:clamp(28px,6vw,54px);margin-bottom:14px;letter-spacing:-1px;line-height:1.02;background:linear-gradient(90deg,var(--accent1),var(--accent2));-webkit-background-clip:text;color:transparent;font-weight:800}
.lead{color:var(--muted);font-size:clamp(14px,1.6vw,18px);margin-bottom:20px}
.panel{margin:auto;margin-top:18px;padding:18px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));box-shadow:0 6px 30px rgba(7,18,40,0.6);font-weight:600;color:var(--text)}

/* decor shapes (sun, moon, horizon) */
.decor{position:absolute;z-index:1;pointer-events:none}
.decor-sun{
  right:10%;top:12%;
  width:260px;height:260px;border-radius:50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,220,120,0.95), rgba(255,150,90,0.25) 30%, rgba(255,120,190,0.04) 60%);
  box-shadow:0 0 80px rgba(255,140,100,0.25), inset 0 -10px 40px rgba(255,200,120,0.08);
  transform:translateZ(0);
}
.decor-sky{left:5%;top:8%;width:420px;height:320px;border-radius:30px;background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));filter:blur(20px);opacity:0.9}
.decor-horizon{left:50%;bottom:-30%;width:140%;height:360px;border-radius:40%;background:linear-gradient(180deg,#ffb6c1 0%, rgba(124,92,255,0.08) 40%, transparent 100%);transform:translateX(-50%) rotate(-5deg)}
.decor-moon{right:10%;top:8%;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle at 40% 40%, #ffffff, #cbd5e1 30%, rgba(203,213,225,0.06) 60%);box-shadow:0 0 60px rgba(200,220,255,0.08)}

/* night stars canvas */
.stars-canvas{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}

/* Section-specific subtle tints */
.scene-morning{background:linear-gradient(180deg, rgba(255,200,200,0.02), rgba(3,8,20,0.08));}
.scene-noon{background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(6,18,40,0.06));}
.scene-evening{background:linear-gradient(180deg, rgba(80,0,80,0.02), rgba(6,10,30,0.12));}
.scene-night{background:linear-gradient(180deg, rgba(2,6,23,0.2), rgba(0,0,10,0.45));}

/* footer */
.site-footer{position:relative;z-index:10;padding:36px 20px;text-align:center;color:var(--muted);font-weight:600;}

/* responsive adjustments */
@media (max-width:720px){
  .topnav{padding:8px 12px}
  .topnav .nav-actions button{padding:8px 10px;font-size:13px}
  .decor-sun{width:160px;height:160px;right:6%;top:8%}
  .title{font-size:28px}
  .panel{padding:14px}
}
