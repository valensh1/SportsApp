import React from 'react';

function navbar() {
  return (
    <nav>
      <a href="">Schedule</a>
      <a href="">Standings</a>
      <a href="">Stats</a>
      <a href="">Players</a>
      <div className="dropdown">
        <a href="" class="dropdown-menu-item">
          Teams
        </a>
        <div class="dropdown-content">
          <a href="#">OC Dogs</a>
          <a href="#">Bears</a>
          <a href="#">Goldrush</a>
          <a href="#">Gulls</a>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
