import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Styles.css";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  const textContainerProps = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? "translateY(20px)" : "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <div>
      <Background />
      <div id="home-content" className="home-container">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <animated.div style={textContainerProps} className="text-container">
            <h1>Welcome to Text summariser </h1>
            <p>
              In the enchanting realm of literature, where words dance with
              grace and meaning, lies the profound beauty of eloquent prose.
              Within the tapestry of carefully woven sentences, each word serves
              as a brushstroke, painting vivid images that linger in the
              corridors of the reader's imagination. The symphony of language
              orchestrates a harmonious melody, captivating hearts with its
              rhythmic cadence. Every sentence, a beacon of expression,
              illuminates the path to comprehension, beckoning readers to
              explore the intricate landscapes of thought. As the narrative
              unfolds, these captivating sentences become stepping stones across
              the river of ideas, guiding the reader through the labyrinth of
              information with finesse and allure. In the grand tapestry of
              text, each sentence stands as a testament to the artistry of
              communication, drawing readers into the realm of knowledge with an
              irresistible allure.
            </p>
            <Link to="/textbox">
              <button>Click Here For Summary</button>
            </Link>
          </animated.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
