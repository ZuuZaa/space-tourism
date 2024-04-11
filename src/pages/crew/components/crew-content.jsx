import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NAV_LINKS } from "@/config/constans";
import TabLinks from "@/components/tab-links/tab-links";
import "./crew-content.scss";

const CrewContent = () => {
  const [target, setTarget] = useState({});
  const { role } = useParams();

  useEffect(() => {
    setTarget(NAV_LINKS.CREW.items.find((item) => item.id === role));
  }, [role]);

  return (
    <div className="crew-container">
      <div className="crew-content">
        <div className="info">
          <div className="text">
            <h4 className="role">{target?.role}</h4>
            <h3 className="name">{target?.name}</h3>
            <p className="bio">{target?.bio}</p>
          </div>
          <TabLinks endpoint="crew" />
        </div>
      </div>
      <div className="image-container">
        <figure className="image-wrapper">
          <img src={target?.image} alt={role} />
        </figure>
      </div>
    </div>
  );
};

export default CrewContent;
