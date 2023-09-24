import React, { useState, useRef } from "react";
import img1 from "../../Assets/Images/image-bg-dark.jpg";
import img2 from "../../Assets/Images/image-bg-light.jpg";
import img3 from "../../Assets/Images/img-bg-dark.jpg";
import img4 from "../../Assets/Images/d4.jpg";
import img5 from "../../Assets/Images/login_register.jpg";
import img6 from "../../Assets/Images/images4.jpg";
import img7 from "../../Assets/Images/images2.jpeg";
import img8 from "../../Assets/Images/images1.jpeg";
import img9 from "../../Assets/Images/image3.jpeg";
import img10 from "../../Assets/Images/images5.jpg";
import img11 from "../../Assets/Images/images6.jpg";
import img12 from "../../Assets/Images/d1.jpg";
import img13 from "../../Assets/Images/d2.jpeg";
import img14 from "../../Assets/Images/d3.jpeg";
import img15 from "../../Assets/Images/d4.jpg";
import img16 from "../../Assets/Images/d5.jpg";
import img17 from "../../Assets/Images/d6.jpg";
import img18 from "../../Assets/Images/d7.jpg";
import "./ImageCard.css";
import { DragDropContext } from "react-beautiful-dnd";

const ImageCard = ({ files }) => {
    
  const item1 = img1;
  const item2 = img2;
  const item3 = img3;
  const item4 = img4;
  const item5 = img5;
  const item6 = img6;
  const item7 = img7;
  const item8 = img8;
  const item9 = img9;
  const item10 = img10;
  const item11 = img11;
  const  item12 = img12
  const  item13 = img13
  const  item14 = img14
  const  item15 = img15
  const  item16 = img16
  const  item17 = img17
  const  item18 = img18

  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    item12,
    item13,
    item14,
    item15,
    item16,
    item17,
    item18,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
   
  ]);
  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {/* {
      files && files.length > 0 && files.map(file =>  <div className='card'>
      <img src={file.preview} alt="" />
    </div>)
    } */}
      {list &&
        list.map((item, index) => (
            <div className="card">
              <img
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                src={item}
                alt=""
                draggable
              />
            </div>
        ))}
    </>
  );
};

export default ImageCard;
