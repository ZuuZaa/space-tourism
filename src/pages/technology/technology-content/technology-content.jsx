import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NAV_LINKS } from "@/config/constans";
import TabLinks from "@/components/tab-links/tab-links";
import "./technology-content.scss";


const TechnologyContent = () => {
  const [target, setTarget] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setTarget(NAV_LINKS.TECHNOLOGY.items.find((item) => item.id === id));
  }, [id]);

  return (
    <div className="tech-container">
      <div className="tech-content">
        <div className="tech-card">
          <TabLinks endpoint="technology" />
          <div className="card-content">
            <h5>THE TERMINOLOGY…</h5>
            <h3 className="tech-name">{target?.name}</h3>
            <p className="tech-decsription">{target?.description}</p>
          </div>
        </div>
        <div className="tech-img">
          <div className="img-wrapper">
            <img src={target?.image} alt={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyContent;
