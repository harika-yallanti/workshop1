import logo from "../assets/react.svg";

export const Header = () => {
  return (
  <div className="container" style={styles.container}>
    {/* Header starts*/}
    <div>
      <img src={logo} />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
   </div>
  ); 
};

export const Header2 = () => {};

export const Header3 = () => {};

//export default Header;