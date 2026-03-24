// ==========================================
// 1. THREE.JS BACKGROUND — subtle particle field
// ==========================================
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0f0005, 0.012);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance'
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);

// Ambient light
scene.add(new THREE.AmbientLight(0x3d0015, 2));

// Ruby glow point
const rubyLight = new THREE.PointLight(0xD90429, 300);
rubyLight.position.set(-20, 15, -10);
scene.add(rubyLight);

// Wireframe torus knot (background — subtle)
const torusGeo = new THREE.TorusKnotGeometry(12, 3.5, 100, 4);
const torusMat = new THREE.MeshStandardMaterial({
    color: 0xD90429,
    wireframe: true,
    roughness: 0.3,
    metalness: 0.6,
    opacity: 0.15,
    transparent: true
});
const torus = new THREE.Mesh(torusGeo, torusMat);
torus.position.set(25, -5, -20);
scene.add(torus);

// Star field
const starCount = 600;
const starPos = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 150;
}
const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    size: 0.15,
    color: 0xFADCD9,
    opacity: 0.6,
    transparent: true
}));
scene.add(stars);

let mouseX = 0,
    mouseY = 0;
document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
});

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.003;
    torus.rotation.y += 0.004;
    stars.rotation.y += 0.0002;
    camera.position.x += (mouseX - camera.position.x) * 0.03;
    camera.position.y += (-mouseY - camera.position.y) * 0.03;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// ==========================================
// 2. UI INTERACTIONS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
    
    // --- Mobile menu ---
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;
    
    menuToggle.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('open', menuOpen);
        // Animate the two bars into an X
        const spans = menuToggle.querySelectorAll('span');
        if (menuOpen) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.transform = 'translateY(-0px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.transform = '';
        }
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mm-link').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.remove('open');
            menuToggle.querySelectorAll('span').forEach(s => s.style.transform = '');
        });
    });
    
    // --- Smooth scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        });
    });
    
    // --- Scroll reveal ---
    const revealEls = document.querySelectorAll(
        '.project-card, .release-card, .arsenal-card, .section-title, .section-head, .faq-list, .contact-wrap, .quote-divider'
    );
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger cards in a grid
                const siblings = [...entry.target.parentElement.children];
                const idx = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${idx * 0.08}s`;
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealEls.forEach(el => revealObserver.observe(el));
    
    // --- FAQ accordion ---
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            // Close all
            document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
            // Toggle clicked
            if (!isActive) item.classList.add('active');
        });
    });
    
    // --- Terminal typing animation ---
    const lines = [
        '> Initializing full-stack engine...',
        '> Loading vocal & audio modules...',
        '> Deploying to production...',
        '> Status: Live & Resonant. ✓'
    ];
    
    const container = document.getElementById('typing-container');
    let lineIdx = 0;
    
    function typeLine() {
        if (!container || lineIdx >= lines.length) {
            // Blink cursor on last line
            if (container && container.lastChild) {
                container.lastChild.classList.add('typing-cursor');
            }
            return;
        }
        const p = document.createElement('p');
        if (lineIdx === lines.length - 1) p.classList.add('t-success');
        container.appendChild(p);
        
        const text = lines[lineIdx];
        let charIdx = 0;
        const interval = setInterval(() => {
            p.textContent = text.slice(0, ++charIdx);
            if (charIdx === text.length) {
                clearInterval(interval);
                lineIdx++;
                setTimeout(typeLine, 600);
            }
        }, 42);
    }
    
    setTimeout(typeLine, 1200);
    
    // --- EmailJS ---
    if (typeof emailjs !== 'undefined') {
        emailjs.init('2PZEMjOl54g2tl_3A');
        
        const form = document.getElementById('contact-form');
        const btn = document.getElementById('submit-btn');
        
        if (form && btn) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                btn.disabled = true;
                btn.innerHTML = 'Transmitting… <i class="fas fa-spinner fa-spin"></i>';
                
                emailjs.sendForm('service_8gjk955', 'template_6m3iq3j', form)
                    .then(() => {
                        btn.innerHTML = 'Transmitted ✓ <i class="fas fa-check"></i>';
                        btn.style.background = '#1a6b2a';
                        form.reset();
                        setTimeout(() => {
                            btn.innerHTML = 'Send Transmission <i class="fas fa-paper-plane"></i>';
                            btn.style.background = '';
                            btn.disabled = false;
                        }, 4000);
                    })
                    .catch(() => {
                        btn.innerHTML = 'Error — Retry <i class="fas fa-redo"></i>';
                        btn.style.background = '#6b1a1a';
                        setTimeout(() => {
                            btn.innerHTML = 'Send Transmission <i class="fas fa-paper-plane"></i>';
                            btn.style.background = '';
                            btn.disabled = false;
                        }, 4000);
                    });
            });
        }
    }
    
});