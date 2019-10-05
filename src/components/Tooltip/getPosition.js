export const getPosition = (referenceNode, popperNode, placement = 'top') => {
    if (!referenceNode.current || !popperNode.current) {
        return {};
    }

    let top, left;
    const childrenElem = referenceNode.current;
    const tooltipElem = popperNode.current;
    const childrenRect = childrenElem.getBoundingClientRect();
    const tooltipRect = tooltipElem.getBoundingClientRect();

    switch (placement.toLowerCase()) {
        case 'top':
            top = childrenRect.y - 10 - tooltipRect.height;
            left = childrenRect.x + childrenRect.width / 2 - tooltipRect.width / 2;
            break;
        case 'bottom':
            top = childrenRect.bottom + 10;
            left = childrenRect.x + childrenRect.width / 2 - tooltipRect.width / 2;
            break;
        case 'left':
            top = childrenRect.top + childrenRect.height / 2 - tooltipRect.height / 2;
            left = childrenRect.x - tooltipRect.width - 10;

            if (childrenRect.right + tooltipRect.width >= window.innerWidth) {
                left = childrenRect.x + 10;
            }
            break;
        case 'right':
            top = childrenRect.top + childrenRect.height / 2 - tooltipRect.height / 2;
            left = childrenRect.right + 10;

            if (left + tooltipRect.width >= window.innerWidth) {
                left = childrenRect.right - tooltipRect.width - 10;
            }
            break;
    }

    return { top, left };
};