/* eslint-disable new-cap */
// eslint-disable-next-line import/no-unresolved
// import { gsap } from 'gsap';

import BrainOneScene from './scenes/brain/BrainOneScene.js';

const stage = new BrainOneScene('#scene-container');
stage.init();
stage.start();

/** import the Finite State Machine */
// import { mainService } from './mainMachine.js';

/** import the stage and the initial world */
// import Act1 from './stages/Act1.js';

/**
 * connect to backend
 *
 * For Firebase
 * import { getMyConfig } from '../config.js';
 *   Import the functions you need from the SDKs you need
 *   eslint-disable-next-line import/order
 * import { initializeApp } from 'firebase/app';
 *   TODO: Add SDKs for Firebase products that you want to use
 *   https://firebase.google.com/docs/web/setup#available-libraries
 * const firebaseConfig = getMyConfig();
 *   Initialize Firebase
 *   eslint-disable-next-line no-unused-vars
 * const app = initializeApp(firebaseConfig);
 */

/**
 * identify html elements and attach listeners
 *
 * const homebtn = document.querySelector('#homebtn')
 * homebtn.onclick = () => {mainService.send({type: 'HOME'})}
 * ...
 * homebtn.onmouseover = homeover
 * homebtn.onmouseout = msgout
 */
// const homebtn = document.querySelector('#homebtn');
// const brainbtn = document.querySelector('#brainbtn');
// const termbtn = document.querySelector('#termbtn');
// const thrillbtn = document.querySelector('#thrillbtn');
// const knightbtn = document.querySelector('#knightbtn');
// const birdsbtn = document.querySelector('#birdsbtn');
// const bubblesbtn = document.querySelector('#bubblesbtn');
// const aboutbtn = document.querySelector('#aboutbtn');
// const dancebtn = document.querySelector('#dance');

// const resetbtn = document.querySelector('#resetbtn');
// const nextbtn = document.querySelector('#nextbtn');
// const drugbtn = document.querySelector('#drugbtn');
// const rewindbtn = document.querySelector('#rewindbtn');
// const caption = document.querySelector('#caption');

// const fadeDuration = 1;

/**
 * create Global stage
 */
// const container = document.querySelector('#scene-container');
// const stage = new Act1(container, {
//   controller: { type: 'orbit' },
//   debug: false,
// });
// stage.init();

/**
 * concatenates state.value keys with final text value, assumes xState state.value
 * like,
 * home: { secondstage: 'bigpicture'} => homesecondstagebigpicture
 * any state with a unique world must be listed in FSM subscription
 */
// eslint-disable-next-line no-unused-vars
// const parseState = stateValue => {
//   const header = [];
//   let childState = stateValue;
//   let loop = true;
//   while (loop) {
//     if (typeof childState === 'string' || childState instanceof String) {
//       header.push(childState);
//       loop = false;
//     } else {
//       const keys = Object.keys(childState);
//       const localKey = keys[0];
//       header.push(localKey);
//       childState = childState[localKey];
//     }
//   }

//   let startStr = '';
//   for (let i = 0; i < header.length; i += 1) {
//     const element = header[i];
//     startStr += element;
//   }
//   return startStr;
// };

// /**
//  * subscribe to ui state
//  * lazy load world objects and initialize
//  * change html element state
//  *
//  */
// let currentStateStr = null;

// mainService.subscribe(state => {
//   homebtn.style.display = state.context.homebtn;
//   brainbtn.style.display = state.context.brainbtn;
//   termbtn.style.display = state.context.termbtn;
//   thrillbtn.style.display = state.context.thrillbtn;
//   knightbtn.style.display = state.context.knightbtn;
//   // birdsbtn.style.display = state.context.birdsbtn;
//   // bubblesbtn.style.display = state.context.bubblesbtn;
//   aboutbtn.style.display = state.context.aboutbtn;
//   dancebtn.style.display = state.context.dancebtn;
//   // resetbtn.style.display = state.context.resetbtn;
//   nextbtn.style.display = state.context.nextbtn;
//   drugbtn.style.display = state.context.drugbtn;
//   caption.innerHTML = state.context.caption;
//   // rewindbtn.style.display = state.context.rewindbtn;

//   // changing world, don't want to restart world if not changed
//   const stateStr = parseState(state.value);

//   if (stateStr !== currentStateStr) {
//     if (stateStr === 'home') {
//       // const container = document.querySelector('#scene-container');
//       import('./scenes/HomeScene.js').then(module => {
//         const stage = new module.default('scene-container');
//         stage.init();
//         stage.start();
//         console.log(stage);
//       });
//     }
//     if (stateStr === 'brain') {
//       // const container = document.querySelector('#scene-container');
//       console.log('AAA');
//       import('./scenes/brain/BrainOneScene.js').then(module => {
//         const stage = new module.default('scene-container');
//         stage.init();
//         stage.start();
//         console.log(stage);
//       });
//     }
//     if (stateStr === 'term') {
//       // const container = document.querySelector('#scene-container');
//       console.log('AAA');
//       import('./scenes/TermScene2.js').then(module => {
//         const stage = new module.default('scene-container');
//         stage.init();
//         stage.start();
//         console.log(stage);
//       });
//     }
//     if (stateStr === 'thrill') {
//       // const container = document.querySelector('#scene-container');
//       console.log('AAA');
//       import('./scenes/ThrillScene.js').then(module => {
//         const stage = new module.default('scene-container');
//         stage.init();
//         stage.start();
//         console.log(stage);
//       });
//     }
//     if (stateStr === 'knight') {
//       // const container = document.querySelector('#scene-container');
//       console.log('AAA');
//       import('./scenes/VRKnightScene.js').then(module => {
//         const stage = new module.default('scene-container');
//         stage.init();
//         stage.start();
//         console.log(stage);
//       });
//     }
//     if (stateStr === 'birds') {
//       // const container = document.querySelector('#scene-container');
//       // import('./scenes/BrainOneScene2.js').then(module => {
//       //   const stage = new module.default('scene-container');
//       //   stage.init();
//       //   stage.start();
//       //   console.log(stage);
//       // });
//     }
//     // if (stateStr === 'term') {
//     //   if (stage.world) {
//     //     killWorld();
//     //   }
//     //   import('./worlds/TermWorld.js').then(module => {
//     //     stage.world = new module.default(stage);
//     //     stage.world.init();
//     //     stage.start();
//     //     gsap.to(stage.overlayMaterial.uniforms.uAlpha, {
//     //       duration: fadeDuration,
//     //       value: 0,
//     //     });
//     //   });
//     // }

//     currentStateStr = stateStr;
//   }
// });
