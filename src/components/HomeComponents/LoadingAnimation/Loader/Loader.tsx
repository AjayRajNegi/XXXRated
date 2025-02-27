import { motion } from "framer-motion";
import { rectangleH, rectangleW } from "../../../../utils/motion";

const Loader = ({ setLoading }: { setLoading: (s: boolean) => void }) => {
  const waitLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div className="relative z-50 h-screen w-full overflow-hidden">
      <section className="absolute inset-0 flex h-full w-full justify-center space-x-8">
        <motion.div
          className="w-[1px] bg-slate-300"
          variants={rectangleH}
          initial="hidden"
          animate={["show", "moveXleft"]}
        ></motion.div>
        <motion.div
          className="w-[1px] bg-slate-300"
          variants={rectangleH}
          initial="hidden"
          animate={["show", "moveXright"]}
        ></motion.div>
      </section>
      <section className="absolute inset-0 flex h-full w-full flex-col justify-center space-y-8">
        <motion.div
          className="h-[1px] w-0 bg-slate-300"
          variants={rectangleW}
          initial="hidden"
          animate={["show", "moveYup"]}
        ></motion.div>
        <motion.div
          className="h-[1px] w-0 bg-slate-300"
          variants={rectangleW}
          initial="hidden"
          animate={["show", "moveYdown"]}
          onAnimationComplete={waitLoading}
        ></motion.div>
      </section>
    </motion.div>
  );
};

export default Loader;
