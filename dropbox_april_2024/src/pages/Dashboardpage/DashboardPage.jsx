import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/DashboardComponents/Navbar/navbar';
import SubBar from '../../components/DashboardComponents/SubBar/Subbar';
import HomeComponents from '../../components/HomeComponents/Homecomponents';
import CreateFolder from '../../components/DashboardComponents/createFolder/createfolder';

const DashboardPage = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}
      <NavBar />
      <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      <HomeComponents />
    </>
  );
};

export default DashboardPage;
