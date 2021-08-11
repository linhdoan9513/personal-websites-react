import React, { useEffect, useState } from "react";
import { config } from "@react-spring/web";
import { useTransition, animated } from "react-spring";

function Animation() {
  const NUM_TRANS = [
    {
      fig: 1,
      op: {
        output: [0, 1],
        range: [0.75, 1],
        trans: { extrapolate: "clamp", output: [-40, 0], range: [0.75, 1] },
      },
    },
    {
      fig: 2,
      op: {
        output: [0, 1],
        range: [0.25, 0.5],
        trans: { extrapolate: "clamp", output: [-40, 0], range: [0.25, 0.5] },
      },
    },
    {
      fig: 3,
      op: {
        output: [0, 1],
        range: [0, 0.25],
        trans: { extrapolate: "clamp", output: [-40, 0], range: [0, 0.25] },
      },
    },
    {
      fig: 4,
      op: {
        output: [0, 1],
        range: [0.5, 0.75],
        trans: { extrapolate: "clamp", output: [-40, 0], range: [0.5, 0.75] },
      },
    },
  ];

  const [items, setItems] = useState([NUM_TRANS]);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(NUM_TRANS);
      }, 2000);
    }
  }, [items]);

  return (
    <div style={{ display: "flex" }}>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {item.fig}
        </animated.div>
      ))}
    </div>
  );
}
export default Animation;
