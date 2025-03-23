import { Link } from 'react-router-dom';
import logo from '../img/logo-nobg-circle.png'

const NavBar = () => {
    return (
      <div className="flex justify-center items-center sticky rounded top-0 w-screen m-0 bg-green-400">
        <img className="h-8 md:h-10 lg:h-12 m-1" src={logo} alt="sjp logo with white background"/>
        <NavBarText text={"About Us"} route={"/about_us"}/>
        <NavBarText text={"Principles and Goals"} route={"principles_and_goals"}/>
        <NavBarText text={"SJP on Campus"} route={"sjp_on_campus"}/>
        <NavBarText text={"Newsletters"} route={"newsletters"}/>
        <NavBarText text={"Join the Org"} route={"join_the_org"}/>
      </div>
    );
  };

const NavBarText = ({ text, route }) => (
  <Link to={route}>
    <div className="font-semibold text-sm rounded m-1 bg-green-500 hover:bg-green-600">
      <div className="m-1">{text}</div>
    </div>
  </Link>
);

export default NavBar;
