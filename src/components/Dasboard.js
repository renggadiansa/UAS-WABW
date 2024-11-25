import React from 'react';
import '../style.css';

const Dashboard = () => {
  const data = [
    { title: 'Kelas', count: 10, color: 'bg-custom-blue', icon: '🏫' },
    { title: 'Siswa', count: 10, color: 'bg-custom-green', icon: '👥' },
    { title: 'Ujian', count: 10, color: 'bg-custom-purple', icon: '📝' },
    { title: 'Sesi Ujian', count: 10, color: 'bg-custom-red', icon: '⏱️' },
  ];

  return (
    <div className="p-4">
      <header className="dashboard-header">
        <span>Halo, Rengga</span>
      </header>
      <div className="dashboard-grid">
        {data.map((item, index) => (
          <div key={index} className={`dashboard-card ${item.color}`}>
            <div className="dashboard-card-icon">{item.icon}</div>
            <div>
              <h3 className="mb-1">{item.title}</h3>
              <p className="h4 m-0">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

