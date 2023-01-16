import './App.css';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import React, { useState } from "react";

import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';

import { movies } from "../../data/data"




function App() {
  const [user, setUser] = useState(true)

  return (
    <main className="App">
      <h1 className="welcome">Welcome to React Movies!</h1>
      {user ? (
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MoviesListPage movies={ movies } />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={ movies }/>} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage/>
      )}
    </main>
  );
}

export default App;
