import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const CreateFolder = () => {
  const [folderName, setFolderName] = useState('');

  const handleInputChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle folder creation logic here
    console.log(`Folder name: ${folderName}`);
    // Clear the input field after submission
    setFolderName('');
  };

  return (
    <div className="col-md-12 position-fixed top-0 left-0 w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 mt-5 bg-white rounded p-4">
          <div className="d-flex justify-content-between">
            <h4>Create Folder</h4>
            <button className="btn">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-black"
                size="sm"
              />
            </button>
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center">
            <form className="mt-3 w-100" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="foldername"
                  placeholder="Folder name"
                  value={folderName}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-5 form-control">
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFolder;
