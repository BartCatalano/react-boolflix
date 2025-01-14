import { useContext } from "react";
import GlobalContext from "./context/GlobalContext"


function AppHeader() {

    const { ricercaTotale, searchValue, setSearchValue } = useContext(GlobalContext)
    return (



        <>

            <div className="HeaderLayout">
                <img className="logo" src="Boolflix.png" alt="" />
                <div className="inputSearch">
                    <input  type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                    <button onClick={ricercaTotale}>Cerca</button>
                </div>
            </div>

        </>
    )
}

export default AppHeader;