// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 24;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#webgl"),
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const radii = [
  1,
  0.6,
  0.8,
  0.4,
  0.9,
  0.7,
  0.9,
  0.3,
  0.2,
  0.5,
  0.6,
  0.4,
  0.5,
  0.6,
  0.7,
  0.3,
  0.4,
  0.8,
  0.7,
  0.5,
  0.4,
  0.6,
  0.35,
  0.38,
  0.9,

  0.3,
  0.6,
  0.4,
  0.2,
  0.35,
  0.5,
  0.15,
  0.2,
  0.25,
  0.4,
  0.8,
  0.76,
  0.8,
  1,
  0.8,
  0.7,
  0.8,
  0.3,
  0.5,
  0.6,
  0.55,
  0.42,
  0.75,
  0.66,
  0.6,
  0.7,
  0.5,
  0.6,
  0.35,
  0.35,
  0.35,
  0.8,
  0.6,
  0.7,
  0.8,
  0.4,
  0.89,
  0.3,

  0.3,
  0.6,
  0.4,
  0.2,
  0.52,
  0.5,
  0.15,
  0.2,
  0.25,
  0.4,
  0.8,
  0.76,
  0.8,
  1,
  0.8,
  0.7,
  0.8,
  0.3,
  0.5,
  0.6,
  0.8,
  0.7,
  0.75,
  0.66,
  0.6,
  0.7,
  0.5,
  0.6,
  0.35,
  0.35,
  0.35,
  0.8,
  0.6,
  0.7,
  0.8,
  0.4,
  0.89,
  0.3
];
const positions = [
  { x: 0, y: 0, z: 0 },
  { x: 1.2, y: 0.9, z: -0.5 },
  { x: 1.8, y: -0.3, z: 0 },
  { x: -1, y: -1, z: 0 },
  { x: -1, y: 1.62, z: 0 },
  { x: -1.65, y: 0, z: -0.4 },
  { x: -2.13, y: -1.54, z: -0.4 },
  { x: 0.8, y: 0.94, z: 0.3 },
  { x: 0.5, y: -1, z: 1.2 },
  { x: -0.16, y: -1.2, z: 0.9 },
  { x: 1.5, y: 1.2, z: 0.8 },
  { x: 0.5, y: -1.58, z: 1.4 },
  { x: -1.5, y: 1, z: 1.15 },
  { x: -1.5, y: -1.5, z: 0.99 },
  { x: -1.5, y: -1.5, z: -1.9 },
  { x: 1.85, y: 0.8, z: 0.05 },
  { x: 1.5, y: -1.2, z: -0.75 },
  { x: 0.9, y: -1.62, z: 0.22 },
  { x: 0.45, y: 2, z: 0.65 },
  { x: 2.5, y: 1.22, z: -0.2 },
  { x: 2.35, y: 0.7, z: 0.55 },
  { x: -1.8, y: -0.35, z: 0.85 },
  { x: -1.02, y: 0.2, z: 0.9 },
  { x: 0.2, y: 1, z: 1 },
  { x: -2.88, y: 0.7, z: 1 },

  { x: -2, y: -0.95, z: 1.5 },
  { x: -2.3, y: 2.4, z: -0.1 },
  { x: -2.5, y: 1.9, z: 1.2 },
  { x: -1.8, y: 0.37, z: 1.2 },
  { x: -2.4, y: 1.42, z: 0.05 },
  { x: -2.72, y: -0.9, z: 1.1 },
  { x: -1.8, y: -1.34, z: 1.67 },
  { x: -1.6, y: 1.66, z: 0.91 },
  { x: -2.8, y: 1.58, z: 1.69 },
  { x: -2.97, y: 2.3, z: 0.65 },
  { x: 1.1, y: -0.2, z: -1.45 },
  { x: -4, y: 1.78, z: 0.38 },
  { x: 0.12, y: 1.4, z: -1.29 },
  { x: -1.64, y: 1.4, z: -1.79 },
  { x: -3.5, y: -0.58, z: 0.1 },
  { x: -0.1, y: -1, z: -2 },
  { x: -4.5, y: 0.55, z: -0.5 },
  { x: -3.87, y: 0, z: 1 },
  { x: -4.6, y: -0.1, z: 0.65 },
  { x: -3, y: 1.5, z: -0.7 },
  { x: -0.5, y: 0.2, z: -1.5 },
  { x: -1.3, y: -0.45, z: -1.5 },
  { x: -3.35, y: 0.25, z: -1.5 },
  { x: -4.76, y: -1.26, z: 0.4 },
  { x: -4.32, y: 0.85, z: 1.4 },
  { x: -3.5, y: -1.82, z: 0.9 },
  { x: -3.6, y: -0.6, z: 1.46 },
  { x: -4.55, y: -1.5, z: 1.63 },
  { x: -3.8, y: -1.15, z: 2.1 },
  { x: -2.9, y: -0.25, z: 1.86 },
  { x: -2.2, y: -0.4, z: 1.86 },
  { x: -5.1, y: -0.24, z: 1.86 },
  { x: -5.27, y: 1.24, z: 0.76 },
  { x: -5.27, y: 2, z: -0.4 },
  { x: -6.4, y: 0.4, z: 1 },
  { x: -5.15, y: 0.95, z: 2 },
  { x: -6.2, y: 0.5, z: -0.8 },
  { x: -4, y: 0.08, z: 1.8 },

  { x: 2, y: -0.95, z: 1.5 },
  { x: 2.3, y: 2.4, z: -0.1 },
  { x: 2.5, y: 1.9, z: 1.2 },
  { x: 1.8, y: 0.37, z: 1.2 },
  { x: 3.24, y: 0.6, z: 1.05 },
  { x: 2.72, y: -0.9, z: 1.1 },
  { x: 1.8, y: -1.34, z: 1.67 },
  { x: 1.6, y: 1.99, z: 0.91 },
  { x: 2.8, y: 1.58, z: 1.69 },
  { x: 2.97, y: 2.3, z: 0.65 },
  { x: -1.3, y: -0.2, z: -2.5 },
  { x: 4, y: 1.78, z: 0.38 },
  { x: 1.72, y: 1.4, z: -1.29 },
  { x: 2.5, y: -1.2, z: -2 },
  { x: 3.5, y: -0.58, z: 0.1 },
  { x: 0.1, y: 0.4, z: -2.42 },
  { x: 4.5, y: 0.55, z: -0.5 },
  { x: 3.87, y: 0, z: 1 },
  { x: 4.6, y: -0.1, z: 0.65 },
  { x: 3, y: 1.5, z: -0.7 },
  { x: 2.3, y: 0.6, z: -2.6 },
  { x: 4, y: 1.5, z: -1.6 },
  { x: 3.35, y: 0.25, z: -1.5 },
  { x: 4.76, y: -1.26, z: 0.4 },
  { x: 4.32, y: 0.85, z: 1.4 },
  { x: 3.5, y: -1.82, z: 0.9 },
  { x: 3.6, y: -0.6, z: 1.46 },
  { x: 4.55, y: -1.5, z: 1.63 },
  { x: 3.8, y: -1.15, z: 2.1 },
  { x: 2.9, y: -0.25, z: 1.86 },
  { x: 2.2, y: -0.4, z: 1.86 },
  { x: 5.1, y: -0.24, z: 1.86 },
  { x: 5.27, y: 1.24, z: 0.76 },
  { x: 5.27, y: 2, z: -0.4 },
  { x: 6.4, y: 0.4, z: 1 },
  { x: 5.15, y: 0.95, z: 2 },
  { x: 6.2, y: 0.5, z: -0.8 },
  { x: 4, y: 0.08, z: 1.8 }
];

const material = new THREE.MeshLambertMaterial({
  color: "#c7a5a5",
  emissive: "red"
});
const group = new THREE.Group();
const spheres = [];

positions.forEach((pos, index) => {
  const radius = radii[index];
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(pos.x, pos.y, pos.z); // Start spheres below original position
  sphere.userData = { originalPosition: { ...pos }, radius };
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  spheres.push(sphere);
  group.add(sphere);
});

scene.add(group);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.52);
spotLight.position.set(14, 24, 30);
spotLight.castShadow = true;

scene.add(spotLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight1.position.set(0, -4, 0);
scene.add(directionalLight1);

// GUI
const gui = new dat.GUI();
gui.close();

const ambientLightFolder = gui.addFolder("Ambient Light");
ambientLightFolder.add(ambientLight, "intensity", 0, 2);
ambientLightFolder
  .addColor({ color: ambientLight.color.getHex() }, "color")
  .onChange((value) => {
    ambientLight.color.setHex(value);
  });
ambientLightFolder.open();

const spotLightFolder = gui.addFolder("Spot Light");
spotLightFolder.add(spotLight, "intensity", 0, 2);
spotLightFolder.add(spotLight.position, "x", -30, 30);
spotLightFolder.add(spotLight.position, "y", -30, 30);
spotLightFolder.add(spotLight.position, "z", -30, 30);
spotLightFolder.open();

const directionalLight1Folder = gui.addFolder("Directional Light 1");
directionalLight1Folder.add(directionalLight1, "intensity", 0, 2);
directionalLight1Folder.add(directionalLight1.position, "x", -30, 30);
directionalLight1Folder.add(directionalLight1.position, "y", -30, 30);
directionalLight1Folder.add(directionalLight1.position, "z", -30, 30);
directionalLight1Folder.open();

// Add at the top
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tempVector = new THREE.Vector3();
const forces = new Map(); // Store forces for each sphere

const initY = -25; // Starting Y position below screen
const revolutionRadius = 4; // Radius of circular motion
const revolutionDuration = 2; // Duration in seconds

const breathingAmplitude = 0.1; // How much the spheres will move
const breathingSpeed = 0.002; // Speed of the breathing animation

// Initialize spheres below screen
spheres.forEach((sphere, i) => {
  sphere.position.y = initY;
});
function initLoadingAnimation() {
  spheres.forEach((sphere, i) => {
    const delay = i * 0.02;

    gsap
      .timeline()
      // First half of rotation (bottom to top, +z)
      .to(sphere.position, {
        duration: revolutionDuration / 2,
        y: revolutionRadius,
        ease: "power1.out",
        onUpdate: function () {
          const progress = this.progress();
          sphere.position.z =
            sphere.userData.originalPosition.z +
            Math.sin(progress * Math.PI) * revolutionRadius;
        },
        delay: delay
      })
      // Second half of rotation (top to bottom, -z)
      .to(sphere.position, {
        duration: revolutionDuration / 2,
        y: initY / 5,
        ease: "power1.out",
        onUpdate: function () {
          const progress = this.progress();
          sphere.position.z =
            sphere.userData.originalPosition.z -
            Math.sin(progress * Math.PI) * revolutionRadius;
        }
      })
      // Return to original position
      .to(sphere.position, {
        duration: 0.6,
        x: sphere.userData.originalPosition.x,
        y: sphere.userData.originalPosition.y,
        z: sphere.userData.originalPosition.z,
        ease: "power1.out"
      });
  });
}

// Call loading animation when page loads
window.addEventListener("load", initLoadingAnimation);

// Find all elements with hide-text class
const hiddenElements = document.querySelectorAll(".hide-text");

const main_txt = document.querySelector(".main-txt");

const mouse_effect = document.querySelector(".mouse-effect");

// Initially ensure elements are hidden
hiddenElements.forEach((el) => {
  el.style.opacity = "0";
});

// Disable mouse interaction during loading
let loadingComplete = false;
setTimeout(() => {
  loadingComplete = true;
  // Show hidden elements with fade in
  hiddenElements.forEach((el) => {
    el.style.opacity = "1";
  });
  main_txt.style.opacity = "0";
}, (revolutionDuration + 1) * 1000);

gsap.set(".circle", { xPercent: -50, yPercent: -50 });
gsap.set(".circle-follow", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".circle", "x", { duration: 0.6, ease: "power3" }),
  yTo = gsap.quickTo(".circle", "y", { duration: 0.6, ease: "power3" });

let xFollow = gsap.quickTo(".circle-follow", "x", {
    duration: 0.6,
    ease: "power3"
  }),
  yFollow = gsap.quickTo(".circle-follow", "y", {
    duration: 0.6,
    ease: "power3"
  });

// Mouse move handler
function onMouseMove(event) {
  if (!loadingComplete) return;

  xTo(event.clientX);
  yTo(event.clientY);

  xFollow(event.clientX);
  yFollow(event.clientY);

  mouse_effect.style.opacity = "1";

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(spheres);

  if (intersects.length > 0) {
    const hoveredSphere = intersects[0].object;
    const force = new THREE.Vector3();
    force
      .subVectors(intersects[0].point, hoveredSphere.position)
      .normalize()
      .multiplyScalar(0.2);
    forces.set(hoveredSphere.uuid, force);
  }
}

// Collision detection
function handleCollisions() {
  for (let i = 0; i < spheres.length; i++) {
    const sphereA = spheres[i];
    const radiusA = sphereA.userData.radius;

    for (let j = i + 1; j < spheres.length; j++) {
      const sphereB = spheres[j];
      const radiusB = sphereB.userData.radius;

      const distance = sphereA.position.distanceTo(sphereB.position);
      const minDistance = (radiusA + radiusB) * 1.2; // Add some buffer

      if (distance < minDistance) {
        tempVector.subVectors(sphereB.position, sphereA.position);
        tempVector.normalize();

        // Push spheres apart
        const pushStrength = (minDistance - distance) * 0.4;
        sphereA.position.sub(tempVector.multiplyScalar(pushStrength));
        sphereB.position.add(tempVector.multiplyScalar(pushStrength));
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (loadingComplete) {
    // Breathing animation
    const time = Date.now() * breathingSpeed;
    spheres.forEach((sphere, i) => {
      // Offset each sphere's animation slightly
      const offset = i * 0.2;
      const breathingY = Math.sin(time + offset) * breathingAmplitude;
      const breathingZ = Math.cos(time + offset) * breathingAmplitude * 0.5;

      // Apply forces and update positions
      const force = forces.get(sphere.uuid);
      if (force) {
        sphere.position.add(force);
        force.multiplyScalar(0.95);

        if (force.length() < 0.01) {
          forces.delete(sphere.uuid);
        }
      }

      // Return to original position with breathing offset
      const originalPos = sphere.userData.originalPosition;
      tempVector.set(
        originalPos.x,
        originalPos.y + breathingY,
        originalPos.z + breathingZ
      );
      sphere.position.lerp(tempVector, 0.018);
    });

    handleCollisions();
  }

  controls.update();
  renderer.render(scene, camera);
}

// Add event listener
window.addEventListener("mousemove", onMouseMove);
animate();

// Add resize handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
