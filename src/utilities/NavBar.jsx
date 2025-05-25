import { Link } from 'react-router-dom'
import logo from '../img/logo-nobg-circle.png'

const NavBar = () => {
    return (
        <div
            className="flex justify-center items-center sticky
            rounded-b-lg m-0
            top-0 w-full h-20 md:h-20 lg:h-24
            bg-green-400"
        >
            <img
                className="h-10 md:h-12 lg:h-14 m-2"
                src={logo}
                alt="sjp logo with white background"
            />
            <NavBarText text={'About Us'} route={'/about_us'} />
            <NavBarText
                text={'Principles and Goals'}
                route={'principles_and_goals'}
            />
            <NavBarText text={'SJP on Campus'} route={'sjp_on_campus'} />
            <NavBarText text={'Newsletters'} route={'newsletters'} />
            <NavBarText text={'Join the Org'} route={'join_the_org'} />
        </div>
    )
}

const NavBarText = ({ text, route }) => (
    <Link to={route} className="flex h-full items-center">
        <div
            className="flex items-center
            rounded m-1 px-2
            h-3/4
            bg-green-500 hover:bg-green-600
        ">
            <div className="text-sm sm:text-base md:text-lg">{text}</div>
        </div>
    </Link>
)

export default NavBar
