"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselCard {
  category: string;
  title: string;
  image: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

const CarouselContext = createContext<{ onCardClose: (index: number) => void }>({
  onCardClose: () => {},
});

export function Carousel({ items }: { items: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  const onCardClose = (index: number) => {
    const el = ref.current;
    if (!el) return;
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 230 : 320;
    const gap = isMobile ? 16 : 20;
    el.scrollTo({ left: (cardWidth + gap) * index, behavior: "smooth" });
  };

  return (
    <CarouselContext.Provider value={{ onCardClose }}>
      <div className="relative w-full">
        <div
          ref={ref}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll scroll-smooth py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex flex-row justify-start gap-4 md:gap-5">
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className="rounded-3xl last:pr-6"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow navigation */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-namo-black transition disabled:opacity-40 hover:bg-gray-200"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-namo-black transition disabled:opacity-40 hover:bg-gray-200"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function Card({ card, index }: { card: CarouselCard; index: number }) {
  const [open, setOpen] = useState(false);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const layoutId = `card-${card.title}`;

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-lg"
              onClick={handleClose}
            />
            <motion.div
              layoutId={layoutId}
              className="relative z-[60] mx-auto my-10 h-fit max-w-3xl rounded-3xl bg-white p-6 md:p-10 shadow-2xl"
            >
              <button
                onClick={handleClose}
                className="sticky top-4 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-namo-black text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <motion.p
                layoutId={`category-${card.title}`}
                className="text-sm font-semibold uppercase tracking-widest text-accent"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={`title-${card.title}`}
                className="mt-2 text-2xl md:text-4xl font-bold text-namo-black"
              >
                {card.title}
              </motion.p>
              <div className="py-6 text-gray-600 leading-relaxed">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layoutId}
        onClick={() => setOpen(true)}
        className={cn(
          "relative z-10 flex h-80 w-60 md:h-[28rem] md:w-80 flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 text-left"
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-30 p-7">
          {card.icon && (
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
              {card.icon}
            </div>
          )}
          <motion.p
            layoutId={`category-${card.title}`}
            className="font-sans text-sm font-medium text-white/80"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={`title-${card.title}`}
            className="mt-1 max-w-[12rem] font-sans text-xl md:text-2xl font-semibold text-white"
          >
            {card.title}
          </motion.p>
        </div>
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </motion.button>
    </>
  );
}
