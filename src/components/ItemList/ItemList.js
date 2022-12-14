import Item from "../Item/Item"
import './ItemList.css'

//Componente de visualización principal 

const ItemList = ({ products, setPage }) => {
    // Listar
    return (

        <div className="black row row-cols-1 row-cols-md-5 g-4">
            {products.map(prod =>
                <Item key={prod.id} {...prod} setPage={setPage} />)
            }
        </div>
    )
}
// Map transformando productos en componentes Item

export default ItemList