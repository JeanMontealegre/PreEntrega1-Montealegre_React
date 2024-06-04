import Header from "./componentes/Header.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";
import Footer from "./componentes/footer.jsx";
import Main from "./componentes/Main.jsx";

function App(){
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <ItemListContainer greeting="PreEntrega1+Montealegre"/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;