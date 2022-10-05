// import gsap from 'gsap';
import * as THREE from 'three';
import Actor from '../../systems/Actor.js';

export default class BrainDamage extends Actor {
  constructor(directionVector) {
    super();
    this.model = {};
    this.growthDirection = directionVector;
    this.mainscale = 0.001;
    this.subscale = 0.001;
    this.damageColor = {r: .6, g: 0, b: 0};
    // this.damageColor = 0x00ff00
  }

  async init() {
    this.model = new THREE.Group();
    const geometry = new THREE.TetrahedronGeometry(1, 4);
    const material = new THREE.MeshLambertMaterial({ color: 0xaaaacc });
    this.mainlobe = new THREE.Mesh(geometry, material);
    this.mainlobe.rotateX(0.75);
    // this.mainlobe.rotateY(0.1)

    const subgeo = new THREE.TetrahedronGeometry(1, 2);
    // const submat = new THREE.MeshLambertMaterial({ color: 0xaaaacc });
    this.sublobeA = new THREE.Mesh(subgeo, material);
    this.sublobeB = new THREE.Mesh(subgeo, material);
    this.sublobeC = new THREE.Mesh(subgeo, material);
    this.sublobeA.position.set(1, 0.5, 0.5);
    this.sublobeB.position.set(0.5, 1, 0.5);
    this.sublobeC.position.set(0, 1, 1);

    this.model.add(this.mainlobe, this.sublobeA, this.sublobeB, this.sublobeC);
    // this.model.scale.set(1, 2, 0.4);
  }

  update(time) {
    super.update(time);
    this.mainlobe.scale.set(this.mainscale, this.mainscale * 2, this.mainscale);
    const mainpos = this.mainscale / 1.5;
    this.mainlobe.position.set(mainpos, mainpos * 2, mainpos);
    this.sublobeA.scale.set(this.subscale, this.subscale, this.subscale);
    this.sublobeB.scale.set(this.subscale, this.subscale, this.subscale);
    this.sublobeC.scale.set(this.subscale, this.subscale, this.subscale * 1.5);
    this.sublobeA.position.set(this.mainscale, 0, 0);
    this.sublobeB.position.set(0, this.mainscale, 0);
    this.sublobeC.position.set(0, 0, this.mainscale);

    // this.mainlobe.material = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
    const yoColor = new THREE.Color(this.damageColor.r, this.damageColor.g, this.damageColor.b)
    // console.log(yoColor)
    this.mainlobe.material.color.set(yoColor)

    // this.mainlobe.material.color.r = this.damageColor.r
    // this.mainlobe.material.color.g = this.damageColor.g
    // this.mainlobe.material.color.b = this.damageColor.b
    // this.sublobeB.
    // this.sublobeC.
    // console.log(this.mainlobe.material.color)
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
