import React, { createRef, cloneElement, useEffect, useState } from 'react';
import { ifProp, prop } from 'styled-tools';
import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';

import { getPosition } from './getPosition'

export const TooltipBase = styled.div`
  position: fixed;
  overflow: auto;
  word-wrap: break-word;
  top:  ${prop('top')}px;
  left:  ${prop('left')}px;
  opacity: ${ifProp('isOpen', '1', '0')};
  transition: opacity 0.15s;
  background: ${prop('color')};
  border-radius: 5px;
  padding: 4px 8px;
`;

export const Tooltip = props => {
    const { placement, content, color, children } = props;
    const [position, setPosition] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const referenceNode = createRef();
    const popperNode = createRef();

    const childrenProps = {
        ...children.props,
        onMouseOver: () => {
            children.props.onMouseOver && children.props.onMouseOver();
            setIsOpen(true);
        },
        onMouseLeave: () => {
            children.props.onMouseLeave && children.props.onMouseLeave();
            setIsOpen(false);
        },
    };

    const [debouncedCallback] = useDebouncedCallback(
        () => {
            setPosition(getPosition(referenceNode, popperNode, placement));
        },
        10
    );

    useEffect(() => {
        setPosition(getPosition(referenceNode, popperNode, placement));
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('resize',  debouncedCallback);
        window.addEventListener('scroll',  debouncedCallback);

        return () => {
            window.removeEventListener('resize',  debouncedCallback);
            window.removeEventListener('scroll',  debouncedCallback);
        }
    }, []);

    return (
         <>
            <TooltipBase
                ref={popperNode}
                isOpen={isOpen}
                left={position.left}
                top={position.top}
                color={color}
            >
                {content}
            </TooltipBase>
            {cloneElement(children, { ref: referenceNode, ...childrenProps })}
        </>
    )
};