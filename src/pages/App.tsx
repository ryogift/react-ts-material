import './App.css';
import Header from './../components/Header';
import Container from '@material-ui/core/Container';
import DataTable from './../components/DataTable';
import Footer from './../components/Footer';

const App = () => (
  <div className="app">
    <Header />
    <Container className="main">
      <h3>事務所一覧</h3>
      <DataTable />
    </Container>
    <Footer />
  </div>
);

export default App;
