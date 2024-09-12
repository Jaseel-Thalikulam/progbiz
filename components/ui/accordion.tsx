import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

interface AccordionProps {
  i: number;
  expanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>;
  question: string;
  answer: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  question,
  answer,
}) => {
    const isOpen = i === expanded;
   
    
  const handleToggle = () => {

    setExpanded(isOpen ? false : i);
  };

  return (
    <>
      <motion.header
        initial={false}
        className="flex justify-between items-center px-5 cursor-pointer"
        onClick={handleToggle}
        whileTap={{ scale: 0.97 }}
        animate={{ backgroundColor: isOpen ? "#1a1a1a" : "#141414" }}
        style={{
          border: "1px solid #313131",
        }}
      >
        <p className="font-light text-white md:text-sm sm:text-xs text-xs">
          {question}
        </p>
        <FaPlus className={`text-white ${isOpen ? "rotate-45" : ""}`} />
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={`content-${i}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.6 }}
              className="content-placeholder"
            >
              <p className="font-light text-white md:text-sm sm:text-xs text-xs">
                {answer}
              </p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
