import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState, useEffect } from 'react'
import NavBar from './../../components/NavBar/NavBar'
import InputEan from './../../components/InputEan/InputEan'
import Product from './../../components/Product/Product'
import productSearch from './../../utils/ProductSearch'

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  useEffect(()=>{
    let storage = localStorage.getItem("products");
    storage = JSON.parse(storage);
    if(storage === null) setProducts([]);
    else setProducts(storage);
  },[]);

  useEffect(()=>{
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  
  function deleteProduct(product){
    let rep = window.confirm("Etes-vous sûr de vouloir supprimer le produit ?");
    if(rep === false) return;

    let tmpProducts = [...products];
    let indice = tmpProducts.indexOf(product);
  
    if(indice > -1) {
      tmpProducts.splice(indice,1);
      setProducts(tmpProducts);
    }
  }
  
  function scan(){
    openModal();
  }

    let listeProducts = productSearch(search, products).map(product=><Product key={product.product._id} product={product} deleteProduct={deleteProduct} />);
  return (
    
    <div className="App">
      
      <header className="App-header">
        <NavBar search={search} setSearch={setSearch} />
      </header>

      <main>
        
        <section className="container mt-5">
          <section className="row">
            <section className="col-md-6">
              <h1>Saisissez un EAN</h1>
              <hr />
              
              <InputEan 
                products={products} 
                setProducts={setProducts} 
                scan={scan} 
                show={show}
                closeModal={closeModal}
              />
              
            </section>

            <div id="reader" width="600px"></div>
            
            <section className="row">
              {listeProducts}
            </section>
          </section>
        </section>

      </main>
    </div>
  );
}

export default App;
