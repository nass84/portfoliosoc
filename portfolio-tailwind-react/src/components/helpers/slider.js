// This code by the lovely Aaron Rhodes who gave up his lunch time to help me!

import React, { Children, useState, isValidElement, cloneElement } from 'react';

// display it's children, one at a time
// give forward and back buttons
// slide each item along
// allow clicking on items

export function Carousel({ children, width, height, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex >= 0 && newIndex < children.length - 1) {
            setCurrentIndex(newIndex);
        }
    };

    const childrenWithProps = Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a TS error too.
        if (isValidElement(child)) {
            return cloneElement(child, { style: { flex: 1 } })
        }

        return child;
    });

    const positionalStyle = {
        marginLeft: '-' + (currentIndex * 100) + '%'
    }

    return <div style={{
        display: 'flex',
        position: 'relative',
        width,
        height
    }}>
        <button onClick={() => updateIndex(currentIndex - 1)}>  </button>

        <div style={{
            flex: 1
        }}>
            <div style={{
                display: 'flex',
                width: children.length * 100 + '%',
                transition: '300ms',
                ...positionalStyle
            }}>
                {childrenWithProps}
            </div>
        </div>

        <button onClick={() => updateIndex(currentIndex + 1)}>  </button>
    </div>
}