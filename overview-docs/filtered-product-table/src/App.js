import products from './data/products'
import FilterableProductTable from "./components/FilterableProductTable"

const App = () => (
  <div className="App">
    <h1>Filterable Product Table</h1>
    <FilterableProductTable products={products}/>
  </div>
)

export default App
