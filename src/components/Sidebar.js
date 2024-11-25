import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
        <i className="bi bi-mortarboard me-2" />
        UJIAN ONLINE
        <span className="pro-badge">PRO</span>
      </h2>
      <hr className="sidebar-line" />
      <Nav defaultActiveKey="/dashboard" className="flex-column mt-4">
        <Nav.Link as={Link} to="#" className="nav-link-active">
          <i className="bi bi-speedometer2" /> Dashboard
        </Nav.Link>
        <hr className="sidebar-line" />
        <Nav.Link as={Link} to="/mata-pelajaran" className="nav-link">
          <i className="bi bi-bookmarks" /> Mata Pelajaran
        </Nav.Link>

        <Nav.Link as={Link} to="/kelas" className="nav-link">
          <i className="bi bi-front" /> Kelas
        </Nav.Link>

        <Nav.Link as={Link} to="/siswa" className="nav-link">
          <i className="bi bi-people-fill" /> Siswa
        </Nav.Link>
        <hr className="sidebar-line" />
        <Nav.Link as={Link} to="/ujian" className="nav-link">
          <i className="bi bi-pencil-square" /> Ujian
        </Nav.Link>

        <Nav.Link as={Link} to="/sesi-ujian" className="nav-link">
          <i className="bi bi-clock" /> Sesi Ujian
        </Nav.Link>
        <hr className="sidebar-line" />
        <Nav.Link as={Link} to="/laporan-nilai" className="nav-link">
          <i className="bi bi-graph-up" /> Laporan Nilai
        </Nav.Link>
        <hr className="sidebar-line" />
        <Nav.Link as={Link} to="/logout" className="nav-link logout">
          <i className="bi bi-box-arrow-left" /> Keluar
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

