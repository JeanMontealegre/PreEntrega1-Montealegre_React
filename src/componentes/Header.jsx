import NavBar from "./NavBar"

function Header(){
    return(
        <header className="flex justify-between items-center bg-blue-800 p-1 pl-10">
        <a href="#"><img className="h-24 w-auto" src="/logo.png" alt="logo" /></a>
        <NavBar isHeader={true} />
        </header>
    )
}

export default Header