import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NAV_LINKS } from "@/config/constans";
import "./destination-content.scss";

const DestinationContent = () => {
  const [target, setTarget] = useState(NAV_LINKS.DESTINATION.items[0]);
  const { name } = useParams();

  useEffect(() => {
    setTarget(NAV_LINKS.DESTINATION.items.find((item) => item.link === name));
  }, [name]);

  return (
    <div className="destination-container">
      <div className="destination-content">
        <figure className="destination-img">
          <img src={target?.image} alt={name} />
        </figure>
        <div className="destination-card">
          <nav>
            <ul>
              {NAV_LINKS.DESTINATION.items.map((item) => (
                <li className="nav-link">
                  <NavLink
                    to={`/destination/${item.link}`}
                    activeClassName="active"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="destination-name">{target?.name}</h2>
          <p className="destination-decsription">{target?.description}</p>
          <hr />
          <div className="card-footer">
            <div className="distance">
              <p className="subheading-2">AVG. DISTANCE</p>
              <p className="text">{`${target?.distance} km`} </p>
            </div>
            <div className="time">
              <p className="subheading-2">Est. travel time</p>
              <p className="text">{target?.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DestinationContent;