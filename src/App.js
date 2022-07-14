import ListPerson from "./component/ListPerson";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Update from "./component/Update";
import UpdateChucvu from "./component/UpdateChucvu";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<ListPerson />}/>
        <Route path="Add" element={<Update />}/>
        <Route path="chucvu" element={<UpdateChucvu />}/>
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
