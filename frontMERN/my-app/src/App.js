import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './component/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

const App = () => {
  return(
    <Router>
      <div>
        <Routes>
          <Route exact path ='/' element={<ShowBookList/>}/>
          <Route path = '/create-book' element={<CreateBook/>} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo/>}/>
          <Route path = '/show-book/:id' element={<ShowBookDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const books = require('./routes/api/books');

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true}));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/books', books);

app.use(express.json({ extended: false }));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log('Server running on port ${port}'));

export default App;