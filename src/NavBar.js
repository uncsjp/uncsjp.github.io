import southImage from './img/logo-nobg-circle.png'

const NavBar = () => {
    return (
      <div className="flex justify-center items-center sticky rounded top-0 w-screen m-0 bg-green-400">
        <img className="h-8 m-1" src={southImage} alt="south building protest during encampment"/>
        <NavBarText text={"About Us"} />
        <NavBarText text={"Principles and Goals"} />
        <NavBarText text={"SJP on Campus"} />
        <NavBarText text={"Newsletters"} />
        <NavBarText text={"Join the Org"} />
      </div>
    );
  };

const NavBarText = ({ text }) => (
  <div className="font-semibold text-sm rounded m-1 bg-green-500 hover:bg-green-600">
    <div className="m-1">{text}</div>
  </div>
);

export default NavBar;