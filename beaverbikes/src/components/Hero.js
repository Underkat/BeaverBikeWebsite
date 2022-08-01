import './Hero.css';

const Hero = ({ title }) => {
  return (
    <div className="hero-container">
      <article>
        {/* <img src='../images/bg.png'></img> */}
        <h1>{title}</h1>
      </article>
    </div>
  );
};

export default Hero;
