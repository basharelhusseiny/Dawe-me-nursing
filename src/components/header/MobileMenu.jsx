"use client";
import { useMobileMenu } from "@/context/MobileMenuContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ navLinks, activeLink, setActiveLink }) => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenu();

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    },
    exit: { 
      x: "100%",
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300,
        delay: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1 + 0.3,
        duration: 0.4
      }
    })
  };

  return (
    <AnimatePresence>
      {isMobMenuOpen && (
        <motion.div
          key="backdrop"
          className="fixed z-[49] right-0 top-[68px] bg-black/60 w-full h-[100dvh]"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setIsMobMenuOpen(false)}
        >
          <motion.div
            key="menu"
            className="absolute right-0 h-full bg-white w-[280px]"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center my-32">
              <div className="flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.id}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobMenuOpen(false)}
                      className="hover:text-sky-600 capitalize font-bold text-xl duration-300 relative group"
                    >
                      {link.title}
                      <motion.span 
                        className="absolute -bottom-2 right-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
