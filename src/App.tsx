import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SceneCanvas from './components/SceneCanvas';
import TargetCursor from './components/TargetCursor';
import { useDevice } from './utils/useDevice';
import { MoveRight } from 'lucide-react';
import clientPhoto from '../assets/SK_Image.png';

gsap.registerPlugin(ScrollTrigger);

import { PORTFOLIO_DATA } from './data/portfolio';
import RotatingText from './components/RotatingText';
import ShinyText from './components/ShinyText';
import MagicBento from './components/MagicBento';
import GooeyNav from './components/GooeyNav';
import BounceCards from './components/BounceCards';

const RotatingTextComponent = RotatingText as any;
const BounceCardsComponent = BounceCards as any;

const bounceImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504917595217-d4bf5011ba20?q=80&w=600&auto=format&fit=crop"
];

const bounceTransforms = [
  "rotate(5deg) translate(-200px)",
  "rotate(0deg) translate(-100px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(100px)",
  "rotate(-5deg) translate(200px)"
];


export default function App() {
  const { isMobile } = useDevice();
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeSector, setActiveSector] = useState(PORTFOLIO_DATA.sectors[0]);

  const cardTransforms = isMobile
    ? [
      "rotate(5deg) translate(-80px)",
      "rotate(0deg) translate(-40px)",
      "rotate(-5deg)",
      "rotate(5deg) translate(40px)",
      "rotate(-5deg) translate(80px)"
    ]
    : [
      "rotate(5deg) translate(-280px)",
      "rotate(0deg) translate(-140px)",
      "rotate(-5deg)",
      "rotate(5deg) translate(140px)",
      "rotate(-5deg) translate(280px)"
    ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
      });

      // Premium staggered typography reveals
      const textReveal = gsap.utils.toArray('.text-reveal') as HTMLElement[];
      textReveal.forEach((el) => {
        gsap.fromTo(el,
          { y: 100, opacity: 0, rotationX: -20 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      });

      // Parallax lines
      gsap.utils.toArray('.parallax-line').forEach((line: any) => {
        gsap.to(line, {
          width: "100%",
          ease: "none",
          scrollTrigger: { trigger: line, start: "top 90%", end: "top 40%", scrub: 1 }
        });
      });

      // Horizontal Marquee
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative min-h-screen bg-[#030303] text-[#F5F3EE] selection:bg-[#D4AF37]/30 selection:text-white overflow-hidden">
      <TargetCursor spinDuration={3} hideDefaultCursor={true} parallaxOn={true} />
      <SceneCanvas />

      <div className="relative w-full">

        <header className="fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-12 z-50 gap-4 md:gap-0 pointer-events-none">
          <div className="font-sans text-xs tracking-[0.3em] font-semibold uppercase mix-blend-difference text-white pointer-events-auto">
            Sandeep <span className="text-[#D4AF37]">Katariya</span>
          </div>
          <div className="pointer-events-auto">
            <GooeyNav
              items={[
                { label: "Home", href: "#" },
                { label: "Story", href: "#story" },
                { label: "Ventures", href: "#ventures" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>
        </header>

        {/* Massive Hero Typography */}
        <section className="h-[100svh] flex flex-col justify-between px-8 md:px-16 pt-32 pb-16">
          <div className="text-xs text-[#D4AF37] tracking-[0.3em] uppercase w-full flex items-center gap-6">
            <span className="w-12 h-px bg-[#D4AF37]"></span>
            <RotatingTextComponent
              texts={PORTFOLIO_DATA.hero.eyebrow.split(' · ')}
              mainClassName="uppercase text-xs"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div className="w-full relative">
            <h1 className="font-display text-[15vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase whitespace-nowrap mix-blend-difference mb-8 text-reveal relative z-10">
              <ShinyText text="Sandeep" speed={3} className="text-[#F5F3EE]" shineColor="#D4AF37" color="#F5F3EE" />
            </h1>
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-[55vw] md:w-[35vw] aspect-[3/4] text-reveal overflow-hidden rounded-md block">
              <img
                src={clientPhoto}
                alt="Sandeep Katariya"
                className="w-full h-full object-cover grayscale mix-blend-screen opacity-60 md:opacity-80"
              />
            </div>
            <h1 className="font-display text-[15vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase whitespace-nowrap mix-blend-difference text-right opacity-80 text-reveal relative z-10">
              <ShinyText text="Katariya" speed={3} className="text-[#F5F3EE]" shineColor="#D4AF37" color="#F5F3EE" />
            </h1>
          </div>

          <div className="w-full flex justify-between items-end mix-blend-difference mt-8">
            <p className="max-w-sm text-sm opacity-60 leading-relaxed font-light hidden md:block">
              {PORTFOLIO_DATA.hero.sub}
            </p>
            <div className="text-[10px] tracking-widest uppercase opacity-40">Scroll to explore</div>
          </div>
        </section>

        {/* Story Section - Huge text break */}
        <section id="story" className="min-h-screen flex items-center px-8 md:px-16 py-40">
          <div className="max-w-5xl">
            <div className="h-px bg-white/10 w-0 parallax-line mb-16"></div>
            <h2 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-16 text-reveal tracking-tight">
              How a mechanical engineer became a <span className="italic font-normal text-[#D4AF37]">multi-industry operator.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg md:text-xl font-light text-white/90 leading-relaxed text-reveal">
              {PORTFOLIO_DATA.story.body.map((p, i) => (
                <p key={i} className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl backdrop-saturate-200 border border-white/40 rounded-3xl p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_0_20px_rgba(255,255,255,0.1)]">{p}</p>
              ))}
            </div>
            <blockquote className="mt-32 font-display text-3xl md:text-5xl italic leading-tight text-white/90 text-reveal text-center bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl backdrop-saturate-200 border border-white/40 rounded-3xl p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_0_20px_rgba(255,255,255,0.1)]">
              "{PORTFOLIO_DATA.story.quote}"
            </blockquote>
          </div>
        </section>



        {/* Ventures List */}
        <section className="py-40 px-8 md:px-16">
          <div className="h-px bg-white/10 w-0 parallax-line mb-20"></div>
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase mb-16 text-[#D4AF37]">Active Ventures</h2>

          <MagicBento
            items={PORTFOLIO_DATA.ventures}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={670}
            particleCount={12}
            glowColor="212, 175, 55"
          />
        </section>

        {/* Selected Works / Contexts Selector */}
        <section id="ventures" className="py-32 overflow-hidden border-y border-white/10 flex flex-col items-center">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase mb-16 text-[#D4AF37]">Selected Contexts</h2>

          {isMobile ? (
            <div className="w-full px-6 overflow-x-auto no-scrollbar flex gap-4 pb-4 snap-x snap-mandatory pointer-events-auto">
              {PORTFOLIO_DATA.sectors.map((sector) => {
                const IconComponent = sector.icon;
                const isActive = activeSector.id === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSector(sector)}
                    className={`snap-center shrink-0 px-5 py-3.5 rounded-2xl flex items-center gap-3 border transition-all duration-300 pointer-events-auto ${isActive
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-semibold shadow-[0_10px_20px_rgba(212,175,55,0.3)]'
                        : 'bg-white/5 border-white/10 text-white/70 backdrop-blur-md hover:bg-white/10'
                      }`}
                  >
                    <IconComponent className={`w-5 h-5`} />
                    <span className="text-xs tracking-wider uppercase font-medium">{sector.title}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <BounceCardsComponent
              items={PORTFOLIO_DATA.sectors}
              containerWidth="100%"
              containerHeight={400}
              animationDelay={0.2}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={cardTransforms}
              pushOffset={160}
              enableHover={true}
              onCardClick={setActiveSector}
            />
          )}

          {/* Active Sector Details */}
          {activeSector && (
            <div className="mt-16 w-full max-w-5xl mx-auto bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl backdrop-saturate-200 border border-white/40 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] flex flex-col md:flex-row gap-12 items-center text-reveal transition-all duration-500">
              <div className="md:w-1/2">
                <h3 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight">{activeSector.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg mb-8">{activeSector.description}</p>
                <div className="flex flex-col gap-4">
                  {activeSector.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#D4AF37]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                      {m}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 w-full h-64 md:h-full rounded-2xl overflow-hidden border border-white/10 opacity-80 mix-blend-screen grayscale">
                <img src={activeSector.image} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </section>

        {/* Testimonials */}
        <section className="py-40 px-8 md:px-16">
          <div className="h-px bg-white/10 w-0 parallax-line mb-20"></div>
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase mb-16 text-[#D4AF37]">Perspectives</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.testimonials.map((t, i) => (
              <div key={i} className="text-reveal flex flex-col justify-between bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl backdrop-saturate-200 border border-white/40 rounded-3xl p-10 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] transition-transform duration-500 hover:-translate-y-4 hover:border-[#D4AF37]/50 group">
                <h4 className="font-display text-2xl md:text-3xl italic leading-tight mb-12 text-white/90 group-hover:text-white transition-colors duration-500">"{t.text}"</h4>
                <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  {t.author} <br /><span className="text-white/50 text-[10px] mt-2 block">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Massive Footer */}
        <footer id="contact" className="border-t border-white/10 pt-32 pb-12 px-8 md:px-16 flex flex-col justify-between min-h-[60vh] bg-[#030303]/90 backdrop-blur-[60px] relative z-50">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32 text-reveal">
            <div className="flex flex-col">
              <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter text-white mb-12">
                Let's <span className="italic font-normal text-[#D4AF37]">build.</span>
              </h2>
              <button className="self-start flex items-center gap-4 text-xs tracking-[0.2em] border border-white/20 rounded-full px-8 py-5 hover:bg-white hover:text-black transition-colors uppercase bg-white/10 backdrop-blur-2xl backdrop-saturate-200">
                sandeep@lunar-edge.com <MoveRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-16 text-sm uppercase tracking-[0.2em] text-white/50">
              <div className="flex flex-col gap-6">
                <div className="text-white mb-4">Connect</div>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
                <a href="mailto:sandeep@lunar-edge.com" className="hover:text-[#D4AF37] transition-colors">Email</a>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-white mb-4">Location</div>
                <div>Jaipur, India</div>
                <div>Global Operations</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
            <div>© {new Date().getFullYear()} SANDEEP KATARIYA</div>
            <div>DESIGNED FOR SUBSTANCE</div>
          </div>
        </footer>

      </div>
    </main>
  );
}
