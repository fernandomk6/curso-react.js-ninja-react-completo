import products from './data/products'
import FilterableProductTable from "./components/FilterableProductTable"

const App = () => (
  <div className="App">
    <FilterableProductTable products={products}/>
  </div>
)

export default App
