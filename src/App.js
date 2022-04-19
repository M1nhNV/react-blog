import MainLayout from '../src/layout/Main'
import Exception from '../src/layout/Exception'
import Test from '../src/components/Test'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import RouterLayout from "./router";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" elmement={ RouterLayout }>
                <Route index element={<MainLayout />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<Exception />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
