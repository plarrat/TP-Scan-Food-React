export default function NavBar({search, setSearch}){
    return(
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand">App Food EAN</span>
            <form className="d-flex">
              <input  className="form-control me-4" 
                      type="search" 
                      value={search}
                      placeholder="Rechercher un produit" 
                      onChange={e=>setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
    )
}