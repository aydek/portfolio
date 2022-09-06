export function setTextAnimation(id: string, delay: number, duration: number, strokeWidth: number, timingFunction: string, strokeColor: string, repeat: boolean) {
    let path = document.querySelector(id) as SVGPathElement;
    let mode = repeat ? 'infinite' : 'forwards';

    const length = path.getTotalLength();
    path.style.strokeDashoffset = `${length}px`;
    path.style.strokeDasharray = `${length}px`;
    path.style.strokeWidth = `${strokeWidth}px`;
    path.style.stroke = `${strokeColor}`;
    path.style.animation = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
    path.style.animationDelay = `${delay}s`;
}
