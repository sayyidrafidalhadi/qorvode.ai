// Import Three.js directly from the unpkg CDN
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// ==========================================
// 1. THREE.JS BACKGROUND INITIALIZATION
// ==========================================
const scene = new THREE.Scene();

// Deep Bordeaux ambient fog/tint
scene.fog = new THREE.FogExp2(0x2B0008, 0.015);
const ambientLight = new THREE.AmbientLight(0x4B0011, 1.5); 
scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: document.querySelector('#bg'), 
    antialias: false, 
    alpha: true, 
    powerPreference: "high-performance" 
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create Torus Knot (Colored to Crimson Silk)
const geometry = new THREE.TorusKnotGeometry(10, 3, 94, 3);
const material = new THREE.MeshStandardMaterial({ 
    color: 0xD90429, 
    wireframe: true, 
    roughness: 0.2, 
    metalness: 0.7 
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Create Stars (Colored to Soft Blush)
const starGeo = new THREE.BufferGeometry();
const starCount = 500;
const starPos = new Float32Array(starCount * 3);
for(let i=0; i<starCount*3; i++) { 
    starPos[i] = (Math.random() - 0.5) * 100; 
}
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.2, color: 0xFADCD9 }));
scene.add(stars);

// Lighting (Mixed White & Ruby Red to cast a deep red glow)
const mainLight = new THREE.PointLight(0xffffff, 400);
mainLight.position.set(20, 20, 20);
scene.add(mainLight);

const rubyGlow = new THREE.PointLight(0x9B111E, 600); 
rubyGlow.position.set(-20, 10, -10);
scene.add(rubyGlow);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// ==========================================
// 2. UI INTERACTIONS & LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    
    // Sticky Navbar Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if(item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            currentItem.classList.toggle('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Subtle Entrance Animations on Scroll
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .step, .section-title').forEach(el => {
        if(!el.classList.contains('floating') && el.id !== 'animated-terminal') {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        }
    });

    // Hero Terminal Typing Animation
    const terminalLines = [
        "> Compiling Next.js architecture...",
        "> Initializing WebGL environment...",
        "> Processing vocal stems & audio...",
        "> Status: Live & Resonant."
    ];
    
    const typingContainer = document.getElementById('typing-container');
    let lineIndex = 0;

    function typeLine() {
        if (!typingContainer) return;
        
        if (lineIndex < terminalLines.length) {
            const lineElement = document.createElement('p');
            if (lineIndex === terminalLines.length - 1) lineElement.classList.add('success');
            lineElement.classList.add('typing-cursor');
            typingContainer.appendChild(lineElement);

            const textToType = terminalLines[lineIndex];
            let charIndex = 0;

            const typingInterval = setInterval(() => {
                lineElement.textContent = textToType.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === textToType.length) {
                    clearInterval(typingInterval);
                    lineElement.classList.remove('typing-cursor');
                    lineIndex++;
                    setTimeout(typeLine, 800); 
                }
            }, 50); 
        } else {
            typingContainer.lastChild.classList.add('typing-cursor');
        }
    }
    setTimeout(typeLine, 1000);

    // EmailJS Contact Form Integration
    if (typeof emailjs !== 'undefined') {
        emailjs.init("2PZEMjOl54g2tl_3A"); 
        
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        
        if(contactForm && submitBtn){
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                const originalText = submitBtn.innerText;
                const originalBg = submitBtn.style.background;
                const originalColor = submitBtn.style.color;
                
                submitBtn.innerText = "Transmitting...";
                submitBtn.style.background = "#9B111E"; // Ruby Red for sending state
                submitBtn.style.color = "#ffffff";
                submitBtn.style.pointerEvents = "none";
                
                emailjs.sendForm('service_8gjk955', 'template_6m3iq3j', this)
                    .then(function() {
                        submitBtn.innerText = "Transmission Complete";
                        submitBtn.style.background = "#D90429"; // Crimson Silk for success
                        submitBtn.style.color = "#ffffff";
                        contactForm.reset();
                        
                        setTimeout(() => { 
                            submitBtn.innerText = originalText; 
                            submitBtn.style.background = originalBg; 
                            submitBtn.style.color = originalColor;
                            submitBtn.style.pointerEvents = "auto";
                        }, 3000);
                    }, function(error) {
                        console.error("EmailJS Error:", error);
                        submitBtn.innerText = "Error. Retry.";
                        submitBtn.style.background = "#ff5f56"; 
                        
                        setTimeout(() => { 
                            submitBtn.innerText = originalText; 
                            submitBtn.style.background = originalBg;
                            submitBtn.style.color = originalColor; 
                            submitBtn.style.pointerEvents = "auto";
                        }, 3000);
                    });
            });
        }
    }
});
