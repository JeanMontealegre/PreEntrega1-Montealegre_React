import NavBar from "./NavBar"

function Footer(){
    return(
        <footer className="sticky bottom-0 left-0 w-full flex justify-center items-center bg-blue-800 p-6">
            <p className="text-slate-100 text-lg pr-4">Copyright &copy; - Jean Montealegre</p>
            <NavBar isHeader={false}/>
        </footer>
    )
}

export default Footer