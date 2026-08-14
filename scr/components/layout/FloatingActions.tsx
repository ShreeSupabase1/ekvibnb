import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BUSINESS } from "@/constants/business";

export function FloatingActions() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 120) {
        setVisible(true);
      } else if (y > lastY.current + 6) {
        setVisible(false); // scrolling down
      } else if (y < lastY.current - 6) {
        setVisible(true); // scrolling up
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${BUSINESS.whatsapp}`,
      icon: MessageCircle,
      className: "bg-[#25D366] text-white",
    },
    {
      label: "Call",
      href: `tel:${BUSINESS.phonesRaw[0]}`,
      icon: Phone,
      className: "bg-ink text-white",
    },
    {
      label: "Book",
      href: "/book-appointment",
      icon: CalendarCheck,
      className: "bg-primary text-primary-foreground",
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 md:right-6 bottom-5 md:bottom-8 z-40 flex flex-col gap-3"
        >
          {actions.map(({ label, href, icon: Icon, className }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={`group h-12 w-12 md:h-14 md:w-14 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] inline-flex items-center justify-center transition-all hover:-translate-y-0.5 ${className}`}
            >
              <Icon className="h-5 w-5 md:h-5 md:w-5" aria-hidden />
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
