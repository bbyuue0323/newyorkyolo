import { useState, useEffect, useCallback, useRef } from 'react';

const YOUTUBE_VIDEO_ID_1 = 'HwRaYivC5UE';
const YOUTUBE_VIDEO_ID_2 = 'dZreyIjJxps';
const IMAGE_URL = 'https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/1bd25d14384aa85850802e0ebdd64662.jpeg';

const VIDEO_SLIDE_1 = 0;
const VIDEO_SLIDE_2 = 1;
const IMAGE_SLIDE = 2;
const TOTAL_SLIDES = 3;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 7000);
  }, [stopAutoPlay]);

  const goToIndex = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">

      {/* YouTube動画スライド1（index=0） */}
      <div
        className="absolute inset-0 transition-transform duration-[800ms] ease-in-out"
        style={{ transform: `translateX(${(VIDEO_SLIDE_1 - currentIndex) * 100}%)` }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_1}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID_1}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            title="Legacy Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* YouTube動画スライド2（index=1） */}
      <div
        className="absolute inset-0 transition-transform duration-[800ms] ease-in-out"
        style={{ transform: `translateX(${(VIDEO_SLIDE_2 - currentIndex) * 100}%)` }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_2}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID_2}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            title="Legacy Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* 画像スライド（index=2） */}
      <div
        className="absolute inset-0 transition-transform duration-[800ms] ease-in-out"
        style={{ transform: `translateX(${(IMAGE_SLIDE - currentIndex) * 100}%)` }}
      >
        <img
          src={IMAGE_URL}
          alt="NewYork YOLO"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-[#111111]/30 to-[#111111]/70 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
        <div className="text-center w-full">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            NewYork YOLO
          </h1>
          <div className="w-24 h-px bg-[#B11226] mx-auto my-6"></div>
          <p className="text-lg md:text-2xl font-light tracking-wider text-white/80 mt-2">
            人生一度きり。挑戦の連鎖を。
          </p>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center">
          <p className="text-xs tracking-widest mb-3 text-white/70">Scroll</p>
          <div className="w-px h-16 bg-white/40"></div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? 'bg-[#B11226] w-8' : 'bg-white/40 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
