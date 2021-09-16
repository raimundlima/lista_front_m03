import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {
  return (
    <header className="header">
      <div className="hearderTitle">
        <h1>Lista de Tarefas</h1>
      </div>
      <div className="buttos">
        <Link to="/" className="btn">
          <span>Tarefas</span>
        </Link>
        <Link to="/create" className="btn">
          <span>Nova Tarefa</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
