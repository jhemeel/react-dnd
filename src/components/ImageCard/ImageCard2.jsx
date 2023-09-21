import React , {useState, useEffect} from "react";
import "./ImageCard.css";
import axios from "axios";
// import img from '../../Assets/Images/image-bg-dark.jpg'

const ImageCard = ({ files }) => {
  const [task, setTask] = useState('')


  onDrag = (event, f) => {
    event.preventDefault();
    setTask(f)
  }
  

  return (
    <>
      {files &&
        files.length > 0 &&
        files.map((f) => {
          return (
            <div className="card" draggable key={f.id}
            onDrag={(event) => onDrag(event, f)}
            >
              
              {" "}
              <img src={f.preview} alt="" />{" "}
            </div>
          );
        })}
        <div>

        </div>
    </>
  );
};

export default ImageCard;
