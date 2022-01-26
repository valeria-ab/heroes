import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {App} from './App';
import {HeroPersonalCard} from './Cards/Card/Card';


const RoutesComponent: React.FC = () => {



  return (
    <Routes>
      <Route path={"/heroes"} element={<App />} />
      <Route path={"/hero"} element={<HeroPersonalCard/>} />
    </Routes>
  );
};

export default RoutesComponent;
