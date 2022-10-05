// eslint-disable-next-line no-undef, no-unused-vars
const { createMachine, interpret, assign } = XState;

const brainMachine = createMachine(
  {
    context: {},
    id: 'mainMachine',
    initial: 'home',
    states: {
      home: {
        entry: ['selecthome'],
        on: {
          NEXT: { target: 'stoprotating' },
        },
      },
      stoprotating: {
        entry: ['selectrotate'],
        on: {
          ATZERO: { target: 'plaque' },
        },
      },
      plaque: {
        entry: ['selectbefore'],
        on: {
          REWIND: { target: 'home' },
          NEXT: { target: 'breakoff' },
        },
      },
      breakoff: {
        entry: ['selectbefore'],
        on: {
          REWIND: { target: 'plaque' },
          NEXT: { target: 'travel' },
        },
      },
      travel: {
        entry: ['selectbefore'],
        on: {
          REWIND: { target: 'breakoff' },
          NEXT: { target: 'stroke' },
        },
      },
      stroke: {
        entry: ['selectstroke'],
        on: {
          REWIND: { target: 'travel' },
          NEXT: { target: 'stroke2' },
        },
      },
      stroke2: {
        entry: ['selectstroke'],
        on: {
          REWIND: { target: 'travel' },
          NEXT: { target: 'stroke3' },
        },
      },
      stroke3: {
        entry: ['selectstroke'],
        on: {
          REWIND: { target: 'travel' },
          NEXT: { target: 'stroke4' },
        },
      },
      stroke4: {
        entry: ['selectstroke'],
        on: {
          REWIND: { target: 'travel' },
          NEXT: { target: 'stroke5' },
        },
      },
      stroke5: {
        entry: ['selectstrokeend'],
        on: {
          REWIND: { target: 'travel' },
          NEXT: { target: 'damage' },
          DRUG: { target: 'drug' },
        },
      },
      damage: {
        entry: ['selectend'],
        on: {
          HOME: { target: 'home' },
          REWIND: { target: 'stroke' },
        },
      },
      drug: {
        entry: ['selectbefore'],
        on: {
          REWIND: { target: 'stroke' },
          NEXT: { target: 'recovery' },
        },
      },
      recovery: {
        entry: ['selectend'],
        on: {
          HOME: { target: 'home' },
          REWIND: { target: 'drug' },
        },
      },
    },
  },
  {
    actions: {
      selecthome: assign({
        homebtn: 'block',
        // resetbtn: 'none',
        nextbtn: 'block',
        drugbtn: 'none',
        rewindbtn: 'none',
      }),
      selectrotate: assign({
        homebtn: 'none',
        // resetbtn: 'none',
        // nextbtn: 'none',
        drugbtn: 'none',
        rewindbtn: 'none',
      }),
      selectbefore: assign({
        homebtn: 'none',
        // resetbtn: 'none',
        // nextbtn: 'block',
        drugbtn: 'none',
        rewindbtn: 'none',
      }),
      selectstroke: assign({
        homebtn: 'none',
        // resetbtn: 'none',
        // nextbtn: 'block',
        drugbtn: 'none',
        rewindbtn: 'none',
      }),
      selectstrokeend: assign({
        homebtn: 'none',
        // resetbtn: 'none',
        // nextbtn: 'block',
        drugbtn: 'block',
        rewindbtn: 'block',
      }),
      selectend: assign({
        homebtn: 'block',
        // resetbtn: 'none',
        // nextbtn: 'none',
        drugbtn: 'none',
        rewindbtn: 'none',
      }),
    },
  }
);

const brainService = interpret(brainMachine);
brainService.onTransition(state => console.log(state.value));
brainService.start();

export { brainMachine, brainService };
