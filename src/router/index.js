import HomePageView from "views/home-page";
import LoginPageView from "views/login";
import ExceptionsPageView from "views/exceptions";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePageView />} />
          <Route path="/login" element={<LoginPageView />} />
          <Route path="*" element={<ExceptionsPageView />} />
          <Route path="/403" element={<ExceptionsPageView type={403}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
