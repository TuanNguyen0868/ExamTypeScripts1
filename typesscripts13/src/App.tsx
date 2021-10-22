import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import AddProduct from './pages/AddProduct';
import BookList from './pages/BookList';
import ListProduct from './pages/ListProduct';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={BookList} />
        <Route path="/add-new-book" component={AddBook} />
        <Route path="/list-product" component={ListProduct} />
        <Route path="/update-book/:id" component={AddBook} />
        <Route path="/update-product/:id" component={AddProduct} />
        <Route path="/add-new-product" component={AddProduct} />
        <Route path="/product-list" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
