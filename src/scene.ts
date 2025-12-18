import * as THREE from "three";

export class Scene3D {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles: THREE.Points;
  private frameId: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x0a0e27, 10, 50);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 30;
    this.camera.position.y = 5;
    this.camera.lookAt(0, 0, 0);

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    this.particles = this.createParticles();
    this.scene.add(this.particles);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x00f0ff, 0.5);
    this.scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x00f0ff, 1, 50);
    light1.position.set(10, 10, 10);
    this.scene.add(light1);

    const light2 = new THREE.PointLight(0xff006e, 0.8, 50);
    light2.position.set(-10, -10, -10);
    this.scene.add(light2);

    // Handle window resize
    window.addEventListener("resize", () => this.onWindowResize());

    // Mouse movement for parallax
    document.addEventListener("mousemove", (e) => this.onMouseMove(e));

    // Start animation
    this.animate();
  }

  private createParticles(): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff); // Cyan
    const color2 = new THREE.Color(0xff006e); // Pink
    const color3 = new THREE.Color(0x39ff14); // Green

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Spread particles in a large space
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Random colors
      const colorChoice = Math.random();
      const color =
        colorChoice < 0.33 ? color1 : colorChoice < 0.66 ? color2 : color3;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    return new THREE.Points(geometry, material);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(event: MouseEvent): void {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Subtle parallax effect
    this.camera.position.x = x * 2;
    this.camera.position.y = y * 2 + 5;
    this.camera.lookAt(0, 0, 0);
  }

  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);

    // Rotate particles slowly
    this.particles.rotation.y += 0.0005;
    this.particles.rotation.x += 0.0002;

    // Animate individual particles
    const positions = this.particles.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.002;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  };

  public dispose(): void {
    cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
    this.particles.geometry.dispose();
    (this.particles.material as THREE.Material).dispose();
    window.removeEventListener("resize", () => this.onWindowResize());
  }
}
