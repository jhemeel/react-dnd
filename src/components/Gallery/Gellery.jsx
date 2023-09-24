import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageCard from "../ImageCard/ImageCard";
import "./Gallery.css";
import { CloudUploadOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Gallery = ({ authUser }) => {
  const [files, setFiles] = useState([]);

  // Validate that the file size is less than 5mb

  function fileSizeValidator(file) {
    if (file.size > 1024 ** 2 * 5) {
      return {
        code: "size-too-large",
        message: `File is larger than ${1024 ** 2 * 5} bytes`,
      };
    }
    return null;
  }

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });

    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".png", ".jpeg", ".jpg", ".webp", ".svg"],
        "text/html": [".html", ".htm"],
      },
      maxFiles: "multiple",
      validator: fileSizeValidator,
    });

  return (
    <div className="drop-zone-wrapper">
      {authUser ? (
        <div className="drop-zone-container">
          <div
            className="drop-zone"
            {...getRootProps({
              role: "button",
            })}
          >
            <input {...getInputProps()} />
            {/* Any content you want to show on the drop zone */}
            {isDragActive ? (
              <p className="text-center text-xl">Drop your media files here</p>
            ) : (
              <div className="text-center text-xl">
                <CloudUploadOutlined
                  className="cloud-upload"
                  style={{ fontSize: "150px" }}
                />

                <p className="text-center text-xl">
                  Drag and drop some files here, or <br /> click to select files
                </p>
                <p className="text-center">
                  (Only *.jpeg, *.jpg, *.svg, '.webp' and *.png images will be
                  accepted)
                </p>
              </div>
            )}
          </div>

          <div className="file-errors">
            {fileRejections.map(({ file, errors }) => {
              return (
                <li key={file.path}>
                  {file.path} - {file.size} bytes
                  <ul>
                    {errors.map((e) => (
                      <li key={e.code}>{e.message}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </div>
        </div>
      ):
      <div className="drop-zone no-shadow">
        <Link to="/login">
        <p className="info">Sign Up Or Login to Uplaod / Drag and drop Images </p>
        
        </Link>
      </div>
      }

      <div className="gallery-wrapper">
        
        <div className="img-title">Image gallery</div>
        
        
        <div className="gallery">
          <ImageCard files={files} />
        </div>
      </div>
      <div>
        {/* If files are in the state, upload the first item in the array of files */}

        {files.length > 0 && (
          <button
            className="upload-btn"
            onClick={() => {
              const url =
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
              const formData = new FormData();
              // Use the first item to upload
              let file = files[0];
              formData.append("file", file);
              formData.append("upload_preset", "c6xjaoj2");
              fetch(url, {
                method: "POST",
                body: formData,
              })
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  console.log(data);
                });
            }}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
