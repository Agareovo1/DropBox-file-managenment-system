import React from 'react';
import './SubBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolderPlus, faFileUpload } from "@fortawesome/free-solid-svg-icons";

const SubBar = ({ setIsCreateFolderModalOpen }) => {
  return (
    <nav className='navbar navbar-expand-lg mt-2 navbar-light bg-white px-4 py-2'>
      <p>Root</p>

      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
          <button className='btn btn-outline-dark mx-2'>
            <FontAwesomeIcon icon={faFileUpload} /> &nbsp;
            Upload Files
          </button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-outline-dark mx-2'>
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp;
            Create File
          </button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-outline-dark mx-2' onClick={() => setIsCreateFolderModalOpen(true)}>
            <FontAwesomeIcon icon={faFolderPlus} /> &nbsp;
            Create Folder
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SubBar;
