
const SideNav = (props) => {

  const {tabs, selectedTab, onTabClick} = props;

  return (
    <nav className="w-3/12 h-full bg-dark-600 flex flex-col items-center">
      <div className="flex items-center my-14">
        <div className="w-6 h-6 bg-red-600 rounded-full"></div>
        <span className="font-semibold text-light-100 ml-4">Mail Box</span>
      </div>
      <div className="w-full flex-col justify-center items-center">
        {tabs.map((navItem, index) => (
          <div
            key={navItem.id}
            className={`cursor-pointer pl-[50px] py-1 ${
              navItem?.name ===  selectedTab ? "bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl" : ""
            } ${index > 0 ? "my-6" : "mb-4"}`}
            onClick={() => onTabClick(navItem)}
          >
            <span className="text-light-200 text-xs">{navItem.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default SideNav;