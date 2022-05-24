import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { Side, Menu } from "./Sidebar.style";
import {
  IoHome,
  IoBaseballSharp,
  IoCalendarClearOutline,
  IoBulbOutline,
  IoPeople,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";

function Sidebar() {
  const menus = [
    { name: "홈", path: "/main", icon: <IoHome /> },
    { name: "선수단", path: "/private", icon: <IoBaseballSharp /> },
    { name: "일정표", path: "/schedule", icon: <IoCalendarClearOutline /> },
    { name: "선수육성", path: "/develop", icon: <GiTeacher /> },
    { name: "전략분석", path: "/strategy", icon: <IoBulbOutline /> },
    { name: "트레이닝", path: "/training", icon: <IoPeople /> },
    { name: "스카우트", path: "/scout", icon: <IoDocumentTextOutline /> },
  ];
  return (
    <Side style={{ borderRight: "1px solid #930a1a"}}>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
                fontSize: "1.2vw",
                borderBottom: "1px solid #930a1a",
              }}
              to={menu.path}
              key={index}
              activeStyle={{ color: "gray" }}
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;