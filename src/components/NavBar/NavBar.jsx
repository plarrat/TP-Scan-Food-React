export default function NavBar({search, setSearch, selectGrade, setSelectGrade}){
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
              <select  className="form-control me-4"
                value={selectGrade} 
                onChange={(e)=>setSelectGrade(e.target.value)}
              >
                <option value="">Tous les Grades</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </form>
          </div>
        </nav>
    )
}