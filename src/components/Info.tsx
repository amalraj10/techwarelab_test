import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Info.scss';

gsap.registerPlugin(ScrollTrigger);

const TEXT_CONTENT = "We build cutting-edge AI solutions that help businesses automate processes, gain insights, and deliver smarter experiences. Whether you're looking to streamline operations, personalize customer journeys, or leverage predictive analytics, our AI-powered tools are designed to drive growth and innovation.";

const ANIMATION_OPTIONS = {
  scrollStart: 'top 60%',
  scrollEnd: 'bottom 20%',
  darkColor: '#474747',
  lightColor: '#FFFFFF',
  speed: 0.1,
  delay: 0.02
};

const Info = () => {
  const containerEl = useRef<HTMLElement>(null);
  const textEl = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerEl.current || !textEl.current) return;

    const characters = textEl.current.querySelectorAll('.char');

    gsap.fromTo(
      characters,
      { color: ANIMATION_OPTIONS.darkColor },
      {
        color: ANIMATION_OPTIONS.lightColor,
        duration: ANIMATION_OPTIONS.speed,
        stagger: ANIMATION_OPTIONS.delay,
        ease: 'none',
        scrollTrigger: {
          trigger: containerEl.current,
          start: ANIMATION_OPTIONS.scrollStart,
          end: ANIMATION_OPTIONS.scrollEnd,
          scrub: 1
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const renderText = () => {
    const chars = TEXT_CONTENT.split('');
    return chars.map((c, i) => (
      <span key={i} className="char">
        {c === ' ' ? '\u00A0' : c}
      </span>
    ));
  };

  return (
    <section ref={containerEl} className="info-section">
      <div className="info-section__wrapper">
        <h2 ref={textEl} className="info-section__heading">
          {renderText()}
        </h2>
      </div>
    </section>
  );
};

export default Info;
