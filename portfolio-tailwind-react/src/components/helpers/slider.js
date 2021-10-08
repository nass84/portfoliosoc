// This code by the lovely Aaron Rhodes who gave up his lunch time to help me!

import React, { Children, useState, isValidElement, cloneElement } from "react";

// display it's children, one at a time
// give forward and back buttons
// slide each item along
// allow clicking on items

export function Carousel({
  children,
  width,
  height,
  className,
  buttonClassName,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex < children.length - 1) {
      setCurrentIndex(newIndex);
    }
  };

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return cloneElement(child, {
        style: {
          flex: 1,
          width: 100 / children.length + "%",
          flexBasis: 100 / children.length + "%",
          boxSizing: "border-box",
        },
      });
    }

    return child;
  });

  const positionalStyle = {
    marginLeft: "-" + (100 / children.length) * currentIndex + "%",
  };

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        overflow: "hidden",
        width,
        height,
      }}
      className={className}
    >
      <button
        onClick={() => updateIndex(currentIndex - 1)}
        style={{ zIndex: "9999" }}
        className={`${buttonClassName} left`}
        className="text-xl md:text-6xl text-primary"
      >◀</button>

      <div
        style={{
          flex: "1",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: children.length * 100 + "%",
          }}
        >
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "row",
              transition: "300ms",
              ...positionalStyle,
            }}
          >
            {childrenWithProps}
          </div>
        </div>
      </div>

      <button
        onClick={() => updateIndex(currentIndex + 1)}
        style={{ zIndex: "9999" }}
        className={`${buttonClassName} right`}
        className="text-xl md:text-6xl text-primary"
      >▶</button>
    </div>
  );
}
