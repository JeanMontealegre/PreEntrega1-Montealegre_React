import CartWidget from "./CartWidget"

function NavBar(props){

    console.log(props)
    if (props.isHeader == true){
        return(
            <nav className="flex space-x-12 pr-10"> 
                <a href="#" className="text-slate-100 font-bold text-lg">Inicio</a>
                <a href="#" className="text-slate-100 font-bold text-lg">Productos</a>
                <a href="#" className="text-slate-100 font-bold text-lg">Contacto</a>
                <a href="#"><CartWidget/></a>
            </nav>
        )
    }   else{
        return(
            <nav className="flex space-x-4"> 
                <a href="#"><img className="h-7 w-auto" src="/logo_instagram.png" alt="logo instagram" /></a>
                <a href="#"><img className="h-7 w-auto" src="/logo_meta.png" alt="logo meta" /></a>
                <a href="#"><img className="h-7 w-auto" src="/logo_tiktok.png" alt="logo tiktok" /></a>
            </nav>
        )
    }
}

export default NavBar