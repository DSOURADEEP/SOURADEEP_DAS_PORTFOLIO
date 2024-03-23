import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I help in growing your brand
          <br /> and take steps forward forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>A Step</motion.b> Forward
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>PROMINENT ROLES</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Development</h2>
          <p>
            Main expertise belongs to the field of Full Stack Web Development. The 
            languages and I am fully proficient in are HTML%, CSS, Javascript, 
            MERN, React.js, Node.js and have created multiple projects under this 
            field.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Python Development</h2>
          <p>
            Highly proficient Python developer having worked with
            countless APIs and having implemented them in multiple of my 
            projects. I am also an expert in creating scalable and efficient code
            all the while optimsing performance.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Java Development</h2>
          <p>
            Having an experience of using Java language for a period of 2 years
            I have accumulated sufficient knowledge about Java Development and all 
            the tasks that are associated with it ranging from configuration management
            to system control.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Data Base Manager</h2>
          <p>
            Having worked with various databases languages such as MongoDB, SQL,
            DynamoDB I am highly proficient in handling Databases at a large scale and I 
            have implemented MongoDB numerous times in my Full Stack projects.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
