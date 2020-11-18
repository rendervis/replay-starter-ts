import { makeSprite, t } from '@replay/core';

export const birdWidth = 50;
export const birdHeight = 31;

export const Bird = makeSprite({
  render() {
    return [
      t.image({
        testId: 'bird',
        fileName: 'bird.png',
        width: birdWidth,
        height: birdHeight,
      }),
    ];
  },
});

//on start
// t.rectangle({
//   width: birdWidth,
//   height: birdHeight,
//   color: "yellow",
// })
