// =============================================
// Three.js Ambient Background
// =============================================
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initThreeBackground() {
  const canvas = document.querySelector('#bg');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0f0005, 0.012);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 40;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Lights
  scene.add(new THREE.AmbientLight(0x3d0015, 2));
  const rubyLight = new THREE.PointLight(0xD90429, 300);
  rubyLight.position.set(-20, 15, -10);
  scene.add(rubyLight);

  // Wireframe torus knot
  const torusMat = new THREE.MeshStandardMaterial({
    color: 0xD90429, wireframe: true,
    roughness: 0.3, metalness: 0.6,
    opacity: 0.15, transparent: true
  });
  const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(12, 3.5, 100, 4), torusMat);
  torus.position.set(25, -5, -20);
  scene.add(torus);

  // Star field
  const starCount = 600;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 150;
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    size: 0.15, color: 0xFADCD9, opacity: 0.6, transparent: true
  }));
  scene.add(stars);

  let mouseX = 0, mouseY = 0;
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
}
