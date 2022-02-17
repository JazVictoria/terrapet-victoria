
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
