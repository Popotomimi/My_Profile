import { Link } from "react-router-dom";

const Videos = () => {
  return (
    <div className="videos">
      <h2>
        Veja meus projetos mais complexos com explicações técnicas detalhadas em
        postagens no LinkedIn:
      </h2>
      <div className="video">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7223736258215239680"
          height="1469"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Publicação incorporada"></iframe>
      </div>
      <div className="video">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7219806872055218177"
          height="1175"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Publicação incorporada"></iframe>
      </div>
      <div className="video">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7194098356351102977"
          height="797"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Publicação incorporada"></iframe>
      </div>
      <div className="video">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7208596560417329152"
          height="860"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Publicação incorporada"></iframe>
      </div>
    </div>
  );
};

export default Videos;
