import NavBarItems from "./NavBarItems";
import "./NavBar.css";
function NavBar() {
  let dummyData = [
    { label: "Login", uri: "/login" },
    { label: "Products", uri: "#product" },
    { label: "List", uri: "/list" },
    
  ];
  let navBarItems = dummyData.map((o, i)=>{
    return (
            <NavBarItems
              label={o.label}
              uri={o.uri}
              key={i}>
            </NavBarItems>
          );
  });
  return (
    <nav>
      <ul>
        {navBarItems}
      </ul>
    </nav>
  );
}

export default NavBar;
