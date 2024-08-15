import "./Steps.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const circleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } },
};

function Steps() {
  return (
    <motion.div
      className="stepper-wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="stepper-item">
        <motion.div className="circle" variants={circleVariants}></motion.div>
        <motion.div className="stepper-line" variants={lineVariants} />
        <div className="step-text">
          <div className="step-name">Find your pet</div>
          <div className="step-description">Select a pet from our adoption list.</div>
        </div>
      </div>

      <div className="stepper-item">
        <motion.div className="circle" variants={circleVariants}></motion.div>
        <motion.div className="stepper-line" variants={lineVariants} />
        <div className="step-text">
          <div className="step-name">Know your pet</div>
          <div className="step-description">Schedule a visit with the chosen one.</div>
        </div>
      </div>

      <div className="stepper-item">
        <motion.div className="circle" variants={circleVariants}></motion.div>
        <div className="step-text">
          <div className="step-name">Take your pet</div>
          <div className="step-description">Follow the adoption process.</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Steps;
