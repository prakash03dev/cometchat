export function useResizeHeight(node: HTMLElement) {
    let resizeObserver: ResizeObserver;
    let scrollHeight = 'auto';
    let transitionDuration = '500ms';

    const updateHeight = () => {
        if (node) {
            scrollHeight = node.scrollHeight + 'px';
            transitionDuration = Math.max(node.scrollHeight * 2, 500) + 'ms';
            node.style.setProperty('--scroll-height', scrollHeight);
            node.style.setProperty('--transition-duration', transitionDuration);
        }
    };

    resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(node);

    return {
        destroy() {
            resizeObserver.disconnect();
        }
    };
}
