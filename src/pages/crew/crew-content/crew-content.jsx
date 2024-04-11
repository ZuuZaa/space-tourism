import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "@/config/constans";
import "./crew-content.scss";


const CrewContent = () => {

  const [target, setTarget] = useState({})
  const { role } = useParams()

  useEffect(() => {
    setTarget(NAV_LINKS.CREW.items.find((item) => item.link === role));
  }, [role]);

  return (
    <div className="crew-container">
      <div className="crew-content">
        <div className="info">
          <div className="text">
            <h4 className="role">
              {target?.role}
            </h4>
            <h3 className="name">{target?.name}</h3>
            <p className="bio">{target?.bio}</p>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/crew/commander" activeclassname="active" value="commander" />
              </li>
              <li>
                <NavLink to="/crew/specialist" activeclassname="active" value="specialist" />
              </li>
              <li>
                <NavLink to="/crew/pilot" activeclassname="active" value="pilot" />
              </li>
              <li>
                <NavLink to="/crew/engineer" activeclassname="active" value="engineer" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="image-container">
        <figure className="image-wrapper">
          <img src={target?.image} alt={role} />
        </figure>
      </div>
    </div>
  )
}

export default CrewContent;
