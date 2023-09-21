import React, { useState, useRef } from 'react';
import img1 from '../../Assets/Images/image-bg-dark.jpg'
import img2 from '../../Assets/Images/image-bg-light.jpg'
import img3 from '../../Assets/Images/img-bg-dark.jpg'
import img4 from '../../Assets/Images/image-bg-dark.jpg'
import img5 from '../../Assets/Images/login_register.jpg'
import img6 from '../../Assets/Images/image-bg-dark.jpg'
import './ImageCard.css'


const ImageCard = ({files}) => {

    
    const item1 = img1
    const item2 = img2
    const item3 = img3
    const item4 = img4
    const item5 = img5
    const item6 = img6
  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([item1, item2, item3 , item4, item5,]);
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
    {
    list&&
    list.map((item, index) => (
    
      <div className='card'>
         <img 
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        src={item}
        draggable/>
      </div>
      
      ))}
    </>
  )
}

export default ImageCard