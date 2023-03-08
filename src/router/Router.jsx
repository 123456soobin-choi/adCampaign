import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adCampaign" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
