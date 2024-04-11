import { NAV_LINKS } from "@/config/constans";
import { NavLink } from "react-router-dom";

const TabLinks = ({endpoint}) => {
  return (
    <nav>
      <ul>
        {NAV_LINKS[endpoint.toUpperCase()].items.map((item) => (
          <li className="nav-link" key={item.id}>
            <NavLink to={`/${endpoint}/${item.id}`} activeClassName="active">
              {item.tabTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TabLinks;