'use client'
import { Link } from 'next/link';
import MainNossoTrabalho from "./Components/MainNossoTrabalho";
import Home from "./Components/Páginas/Home";
import { BrowserRouter as Router } from 'react-router-dom';
import NossoTrabalho from "./Components/Páginas/nosso-trabalho";

export default function Page() {
  return (
    <Router>
    <Home />
    </Router>
  );
}
