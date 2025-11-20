import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MainHero.scss';

const TIMING = {
  heading: { move: 60, time: 1.2, gap: 0.25, wait: 0.2 },
  description: { move: 40, time: 1, wait: 0.8 },
  btn: { size: 0.9, time: 0.7, wait: 1.2 },
  circles: { time: 1.5, gap: 0.2, wait: 0.4 },
  mouse: { time: 0.6, power: 10 }
};

const MainHero = () => {
  const heroEl = useRef<HTMLElement>(null);
  const titleEl = useRef<HTMLHeadingElement>(null);
  const descEl = useRef<HTMLParagraphElement>(null);
  const btnEl = useRef<HTMLButtonElement>(null);
  const circlesEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroEl.current) return;

    const ctx = gsap.context(() => {
      const titleLines = titleEl.current?.querySelectorAll('.main-hero__title-part');
      if (titleLines) {
        gsap.fromTo(
          titleLines,
          { opacity: 0, y: TIMING.heading.move },
          {
            opacity: 1,
            y: 0,
            duration: TIMING.heading.time,
            stagger: TIMING.heading.gap,
            ease: 'power3.out',
            delay: TIMING.heading.wait
          }
        );
      }

      if (descEl.current) {
        gsap.fromTo(
          descEl.current,
          { opacity: 0, y: TIMING.description.move },
          {
            opacity: 1,
            y: 0,
            duration: TIMING.description.time,
            ease: 'power3.out',
            delay: TIMING.description.wait
          }
        );
      }

      if (btnEl.current) {
        gsap.fromTo(
          btnEl.current,
          { opacity: 0, scale: TIMING.btn.size },
          {
            opacity: 1,
            scale: 1,
            duration: TIMING.btn.time,
            ease: 'back.out(1.5)',
            delay: TIMING.btn.wait
          }
        );
      }

      const allCircles = circlesEl.current?.querySelectorAll('.main-hero__ring');
      if (allCircles) {
        gsap.fromTo(
          allCircles,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: TIMING.circles.time,
            stagger: TIMING.circles.gap,
            ease: 'power2.out',
            delay: TIMING.circles.wait
          }
        );
      }
    }, heroEl);

    const onMouseMove = (e: MouseEvent) => {
      const allCircles = circlesEl.current?.querySelectorAll('.main-hero__ring');
      if (!allCircles) return;

      const midX = window.innerWidth / 2;
      const midY = window.innerHeight / 2;
      const moveX = (e.clientX - midX) / midX;
      const moveY = (e.clientY - midY) / midY;

      allCircles.forEach((circle, idx) => {
        const strength = (allCircles.length - idx) * TIMING.mouse.power;
        gsap.to(circle, {
          x: moveX * strength,
          y: moveY * strength,
          duration: TIMING.mouse.time,
          ease: 'power2.out'
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section ref={heroEl} className="main-hero">
      <div className="main-hero__content">
        <h1 ref={titleEl} className="main-hero__title">
          <span className="main-hero__title-part">Smarter Solutions</span>
          <span className="main-hero__title-part">Powered by AI</span>
        </h1>
        <p ref={descEl} className="main-hero__text">
          Streamline operations, reduce costs, and scale effortlessly with
          <br />
          our AI-driven tools.
        </p>
        <button ref={btnEl} className="main-hero__cta">
          Start A Project →
        </button>
      </div>
      <div ref={circlesEl} className="main-hero__rings">
        <div className="main-hero__ring main-hero__ring--1"></div>
        <div className="main-hero__ring main-hero__ring--2"></div>
        <div className="main-hero__ring main-hero__ring--3"></div>
        <div className="main-hero__ring main-hero__ring--4"></div>
        <div className="main-hero__ring main-hero__ring--5"></div>
      </div>
    </section>
  );
};

export default MainHero;
