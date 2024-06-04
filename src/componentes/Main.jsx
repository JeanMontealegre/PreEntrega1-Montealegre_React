import Button from "./Button"

function Main(){
    const categorias = [
        { name: "Juguetes", image: "/index_jug.jpg" },
        { name: "Accesorios", image: "/index_acc.jpg" },
        { name: "Snacks", image: "/index_sna.jpg" },
        { name: "Higiene", image: "/index_hig.jpg" },
    ];
    return(
        <main className="p-4 flex-grow">
            <h1 className="text-center text-6xl my-2 p-4">Aamilú PETSHOP</h1>
            <h2 className="text-center text-4xl my-2 pt-4">Productos para perros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categorias.map((category, index) => (
                    <div key={index} className="text-center">
                        <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                        <Button texto={category.name}/>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main;