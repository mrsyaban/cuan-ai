import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="w-screen h-[56px] absolute top-0 z-10 flex px-20 item-center">
        <Link to="/" className="flex w-fit h-full items-center text-white">
            Logo
        </Link>
    </div>
  )
}

export default Header