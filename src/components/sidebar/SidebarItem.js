function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <div>
        {menu.icon} {menu.name}
      </div>
    </div>
  );
}

export default SidebarItem;
