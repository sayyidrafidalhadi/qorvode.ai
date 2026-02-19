import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// ==========================================
// 1. INJECT THE CSS (STYLES)
// ==========================================
const cssStyles = `
:root { --primary: #888888; --hacker-green: #ffffff; --text: #ffffff; }
* { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; outline: none; }
body { background: #050505; color: var(--text); font-family: 'Poppins', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }

/* 3D BG */
canvas#bg { position: fixed; top: 0; left: 0; z-index: -1; transform: translateZ(0); }
.cursor-glow { position: fixed; top: 0; left: 0; width: 400px; height: 400px; background: radial-gradient(circle, rgba(248, 249, 250, 0.4) 0%, rgba(0,0,0,0) 70%); border-radius: 50%; pointer-events: none; z-index: 0; transform: translate(-50%, -50%); filter: blur(50px); will-change: transform; }

/* Navigation */
nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; position: fixed; width: 100%; z-index: 100; background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.logo { font-weight: 900; letter-spacing: 2px; }
.nav-links { list-style: none; display: flex; gap: 1rem; }
.nav-links a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.8rem; }

/* Layout */
main { width: 100%; overflow: hidden; position: relative; z-index: 10; }
.container { width: 90%; max-width: 1100px; margin: 0 auto; padding: 4rem 0; text-align: center; display: flex; flex-direction: column; align-items: center; }

/* Typography */
h1 { font-size: 2.8rem; line-height: 1.1; font-weight: 800; margin-bottom: 1rem; text-align: center; cursor: pointer; }
h1 span.hacker-text { display: inline-block; opacity: 0.5; transition: all 0.3s ease; color: white; }
h1:hover span.hacker-text { opacity: 1; color: var(--hacker-green); font-family: 'Courier New', monospace; text-shadow: 0 0 10px var(--hacker-green); transform: scale(1.05); }
h3.section-title { font-size: 1.8rem; margin-bottom: 2rem; display: inline-block; border-bottom: 3px solid var(--primary); padding-bottom: 0.5rem; }

/* General Glass Cards */
.glass-card, .project-card { background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01)); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); padding: 2rem; width: 100%; text-align: center; will-change: transform, opacity; position: relative; overflow: hidden; }

/* ARSENAL (SKILLS) STYLES */
.skills-grid {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 15px; 
    width: 100%;
}

.skill-card {
    width: auto;
    display: flex;
    flex-direction: row; 
    align-items: center;
    padding: 12px 24px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(110, 7, 243, 0.4); 
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--primary);
}

.skill-card i {
    font-size: 1.4rem;
    color: #ffffff;
    margin-right: 12px;
    margin-bottom: 0;
    transition: color 0.3s;
}

.skill-card:hover i { color: var(--primary); }

.skill-card h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
}

/* Projects Grid */
.projects-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; width: 100%; }
.project-card h4 { font-size: 1.4rem; font-weight: 800; margin-bottom: 1rem; color: var(--text); text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 0 10px rgba(110, 7, 243, 0.3); }

/* Contact Form */
.contact-section { margin-top: 4rem; padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.1); }
.input-group { margin-bottom: 1rem; width: 100%; }
input, textarea { width: 100%; padding: 1rem; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 10px; color: white; font-family: 'Poppins', sans-serif; outline: none; transition: 0.3s; }
input:focus, textarea:focus { border-color: var(--primary); background: rgba(0, 0, 0, 0.5); box-shadow: 0 0 10px rgba(110, 7, 243, 0.3); }

/* Utilities */
.hero { height: 90vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.btn, .btn-small { display: inline-block; background: var(--primary); color: white; text-decoration: none; border: none; cursor: pointer; border-radius: 30px; box-shadow: 0 0 15px var(--primary); font-weight: 600; }
.btn { padding: 1rem 2.5rem; margin-top: 1.5rem; }
.btn-small { padding: 0.5rem 1.5rem; margin-top: 1rem; font-size: 0.8rem; }
.fade-up { opacity: 0; transform: translateY(30px); }

/* Footer Alignment Fix */
footer {
padding: 2rem;
color: #666;
font-size: 0.8rem;
text-align: centre; /* ALIGNS FOOTER TO CENTRE */
width: 100%;
}

/* Desktop */
@media (min-width: 768px) { h1 { font-size: 5rem; } h1 span.hacker-text { font-family: 'Poppins', sans-serif; } .projects-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } .nav-links { gap: 3rem; } }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = cssStyles;
document.head.appendChild(styleSheet);

// ==========================================
// 2. INJECT THE HTML (STRUCTURE)
// ==========================================
document.body.innerHTML = `
    <canvas id="bg"></canvas>
    <div class="cursor-glow"></div>
    <nav>
        <div class="logo">SYD<span style="color:var(--primary)">.</span>RAFI</div>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#work1">Projects</a></li>
            <li><a href="#work2">Releases</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section class="hero">
            <h1>
                <span class="hacker-text" data-value="SAYYID RAFID">SAYYID RAFID</span><br>
                <span class="hacker-text" data-value="AL HADI">AL HADI</span>
            </h1>
            <p> Developer & Vocalist </p>
            <a href="#work1" class="btn">View Projects</a>
            <a href="#work2" class="btn">View Releases</a>
        </section>
        
        <section id="about" class="container">
            <h3 class="section-title">Who I Am</h3>
            <div class="glass-card fade-up">
                <p style="font-size: 1.1rem; line-height: 1.8;">
                   I am a Developer and vocalist operating at the edge of mobile and web innovation. From crafting fluid, rhythmic UIs with <b style="color:#888888">Next.js</b> to fortifying systems via Linux and penetration testing, I engineer digital solutions that are as robust as they are beautiful. Much like my approach to singing, I believe the best code requires a balance of technical discipline and creative soul—ensuring every project I touch hits the high notes of both security and user experience.
                </p>
            </div>
        </section>
        
        <section id="skills" class="container">
            <h3 class="section-title">The Arsenal</h3>
            <div class="grid skills-grid">
                <div class="skill-card fade-up"><i class="fab fa-html5"></i><h4>HTML5</h4></div>
               
                <div class="skill-card fade-up"><i class="fab fa-linux"></i><h4>Linux Expert</h4></div>
                <div class="skill-card fade-up"><i class="fa-solid fa-flask"></i><h4>Bandlab</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-bug"></i><h4>Software Tester</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-pencil-ruler"></i><h4>UI/UX Designer</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-python"></i><h4>Python</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-code"></i><h4>C++</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-php"></i><h4>PHP</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-layer-group"></i><h4>Next.js</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-wind"></i><h4>Tailwind</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-bootstrap"></i><h4>Bootstrap</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-fire"></i><h4>Firebase</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-git-alt"></i><h4>Git</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-github"></i><h4>GitHub</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-terminal"></i><h4>SSH</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-docker"></i><h4>Docker</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-terminal"></i><h4>Termux</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-js"></i><h4>TypeScript</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-js-square"></i><h4>JavaScript</h4></div>
                <div class="skill-card fade-up"><i class="fab fa-css3-alt"></i><h4>CSS3</h4></div>
                <div class="skill-card fade-up"><i class="fas fa-bullseye"></i><h4>Dart</h4></div>
            </div>
        </section>
        
        <section id="work1" class="container">
            <h3 class="section-title">Projects</h3>
            <div class="grid projects-grid">
                <div class="project-card fade-up">
                    <h4>Kithademic Studies</h4>
                    <p>(Currently In Work) <br>Knowledge is the light of the heart.<br>Excellence in Islamic & Academic Education.</p>
                    <a href="https://kithademicstudies.vercel.app" target="_blank" class="btn-small">
                        Visit Site <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div class="project-card fade-up">
                    <h4>KPS Ayurveda Clinic</h4>
                    <p>(Currently In Work) <br> Heal Through Ayurveda <br> Authentic Care for Holistic Wellness. </p>
                    <a href="https://kpsayurvedaclinic.vercel.app/" target="_blank" class="btn-small">
                        Visit Site <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <section id="work2" class="container">
            <h3 class="section-title">Releases</h3>
            <div class="grid projects-grid">
                <div class="project-card fade-up">
                    <h4>Wail Of The End - أنين النهاية</h4>
                    <p>Vocals : Sayyid Rafid Al Hadi<br>Lyrics : Sayyid Rafid Al Hadi<br>Composer : Sayyid Rafid Al Hadi</p>
                    <a href="https://open.spotify.com/track/0vCjKf9jBapuEfTNaHkUU2?si=UDlXI-8US0Cy6UqHUZkSCw" target="_blank" class="btn-small">
                       Listen On Spotify <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://music.youtube.com/watch?v=gBqhglUhEWI" target="_blank" class="btn-small">
                        Listen On YT Music <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://gaana.com/song/wail-of-the-end" target="_blank" class="btn-small">
                        Listen On Gaana <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://www.jiosaavn.com/song/wail-of-the-end-%d8%a3%d9%86%d9%8a%d9%86-%d8%a7%d9%84%d9%86%d9%87%d8%a7%d9%8a%d8%a9/FDwTAxIGeWw" target="_blank" class="btn-small">
                       Listen On Jio Saavn <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://music.amazon.com/albums/B0G7ZL2NQC?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4ytTNnzTuimGJZPBSKmxsHf0Z" target="_blank" class="btn-small">
                        Listen On Amazon Music <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div class="project-card fade-up">
                    <h4>Fajr-al-Islam(The Dawn Of Islam)</h4>
                    <p>Vocals : Sayyid Rafid Al Hadi<br>Lyrics : Sayyid Rafid Al Hadi<br> Composer : Sayyid Rafid Al Hadi</p>
                    <a href="https://open.spotify.com/album/5R1hKfIw7qmtZIZ6fUI5eD?si=XbE1Fk7oSCaxv5s4lmb1Hg" target="_blank" class="btn-small">
                       Listen On Spotify <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://music.apple.com/in/album/fajr-al-islam-the-dawn-of-islam/1863053913?i=1863053914&ls" target="_blank" class="btn-small">
                       Listen On Apple Music <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://gaana.com/song/fajr-al-islam-the-dawn-of-islam" target="_blank" class="btn-small">
                       Listen On Gaana <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://www.jiosaavn.com/song/fajr-al-islam-the-dawn-of-islam/QB4pUwUDUls" target="_blank" class="btn-small">
                       Listen On Jio Saavn <i class="fas fa-arrow-right"></i>
                    </a>
<a href="https://music.amazon.com/albums/B0G9TQ822W?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_VVZRovfR6lgerqi39eBLVH4jE" target="_blank" class="btn-small">
                       Listen On Amazon Music <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <section id="contact" class="container contact-section">
            <h3 class="section-title">Connect With Us</h3>
            <div class="glass-card fade-up form-container">
                <p style="margin-bottom: 2rem;">Send your requirements. Transmission is secure.</p>
                <form id="contact-form">
                    <div class="input-group"><input type="text" name="from_name" placeholder="User Name" required></div>
                    <div class="input-group"><input type="email" name="from_email" placeholder="User Email" required></div>
                    <div class="input-group"><textarea name="message" placeholder="Project Parameters / Requirements" rows="5" required></textarea></div>
                    <button type="submit" class="btn" id="submit-btn">Send Transmission</button>
                </form>
            </div>
        </section>
        <footer>
        <p style="text-align: center;">©️ Sayyid Rafid Al Hadi 2026</p>
        </footer>
    </main>
`;

// ==========================================
// 3. THREE.JS & ANIMATION LOGIC
// ==========================================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: false, alpha: true, powerPreference: "high-performance" });

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusKnotGeometry(10, 3, 94, 3);
const material = new THREE.MeshStandardMaterial({ color: 0x888888, wireframe: true, roughness: 0.2, metalness: 0.7 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const starGeo = new THREE.BufferGeometry();
const starCount = 500;
const starPos = new Float32Array(starCount * 3);
for(let i=0; i<starCount*3; i++) { starPos[i] = (Math.random() - 0.5) * 100; }
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.2, color: 0xffffff }));
scene.add(stars);

const pointLight = new THREE.PointLight(0xffffff, 800);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations
gsap.to(torus.rotation, { x: 3, y: 3, scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
gsap.utils.toArray('.fade-up').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 85%" } });
});

// Hacker Text
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
function scrambleText(element) {
    let iteration = 0;
    const originalText = element.dataset.value; 
    clearInterval(element.interval);
    element.interval = setInterval(() => {
        element.innerText = originalText.split("").map((letter, index) => {
            if(index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * letters.length)];
        }).join("");
        if(iteration >= originalText.length) clearInterval(element.interval);
        iteration += 1 / 2;
    }, 30);
}
document.querySelectorAll(".hacker-text").forEach(el => {
    scrambleText(el);
    el.parentElement.addEventListener('mouseenter', () => scrambleText(el));
});

// Cursor Glow
const cursor = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => { gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power2.out" }); });
document.addEventListener('touchmove', (e) => { const touch = e.touches[0]; gsap.to(cursor, { x: touch.clientX, y: touch.clientY, duration: 0.6, ease: "power2.out" }); });

// EmailJS - REPLACE WITH YOUR KEYS
emailjs.init("2PZEMjOl54g2tl_3A"); 
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
if(contactForm){
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitBtn.innerText = "Transmitting...";
        emailjs.sendForm('service_8gjk955', 'template_6m3iq3j', this)
            .then(function() {
                submitBtn.innerText = "Transmission Complete";
                submitBtn.style.background = "#00ff41";
                contactForm.reset();
                setTimeout(() => { submitBtn.innerText = "Send Transmission"; submitBtn.style.background = "#6e07f3"; }, 3000);
            }, function(error) {
                submitBtn.innerText = "Error. Retry.";
                submitBtn.style.background = "red";
            });
    });
}

// ==========================================
// 4. ANTI-INSPECT PROTECTION SYSTEM
// ==========================================

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(e) {
    if(
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});

setInterval(() => {
    const start = performance.now();
    debugger; 
    const end = performance.now();
    if (end - start > 100) {
        document.body.innerHTML = '<h1 style="color:red; text-align:center; margin-top:20%;">ACCESS DENIED</h1>';
    }
}, 1000);
