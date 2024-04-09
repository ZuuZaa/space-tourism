import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NAV_LINKS } from "../../config/constans";
import { StyledDestinitionContent } from "./destinition-content.styled";

export const DestinationContent = () => {
  const [target, setTarget] = useState({});
  const { name } = useParams();

  useEffect(() => {
    setTarget(NAV_LINKS.DESTINATION.items.find((item) => item.name === name));
    console.log(NAV_LINKS.DESTINATION.items.find((item) => item.name === name));
  }, [name, target]);

    const getImage = async () => {
      try {
        const { default: image } = await import(`${target?.images?.png}`);
        return image;
      } catch (error) {
        return null;
      }
    };

  return (
    <StyledDestinitionContent>
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
                    to={`/destination/${item.name}`}
                    activeclassname="active"
                    value={item.name}
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
              <p className="text">{target?.distance}</p>
            </div>
            <div className="time">
              <p className="subheading-2">Est. travel time</p>
              <p className="text">{target?.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledDestinitionContent>
  );
};
