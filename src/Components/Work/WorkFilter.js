import React, { useState } from "react";
// import { FaLink } from 'react-icons/fa';
import { FiGithub , FiLink } from 'react-icons/fi';



import work1 from '../../Images/Works/Project1.png'
import work2 from '../../Images/Works/Project2.png'
import work3 from '../../Images/Works/Project3.png'
import work4 from '../../Images/Works/Project4.png'
import work5 from '../../Images/Works/Project5.png'
import work6 from '../../Images/Works/Project6.png'
import work7 from '../../Images/Works/Project7.png'
import work8 from '../../Images/Works/Project8.png'
import work9 from '../../Images/Works/Project9.png'
import work10 from '../../Images/Works/Project10.png'
import work11 from '../../Images/Works/wordpress1.png'
import work12 from '../../Images/Works/wordpress2.png'
import work13 from '../../Images/Works/wordpress3.png'

const Datas = [
  {
    id: 7,
    Name: "DOJE",
    image:work7,
    Category: "React",
    Type: "Doje Music Class",
    Conv: "Figma to HTML",
    live: "https://new-doja.netlify.app",
    git: "#!",
  },
  {
    id: 1,
    Name: "Tea Website",
    image:work1,
    Category: "WebDesign",
    Type: "E-Commerce",
    Conv: "PSD to HTML",
    live: 'https://ecommercetea.netlify.app',
    git: '#!',
  },
  {
    id: 2,
    Name: "Real Estate",
    image:work2,
    Category: "WebDesign",
    Type: "Business",
    Conv: "Figma to HTML",
    live: 'https://realestate0921.netlify.app',
    git: '#!',
  },
  {
    id: 3,
    Name: "Bithu NFT",
    image:work3,
    Category: "WebDesign",
    Type: 'NFT',
    Conv: "Sketch to HTML",
    live: "https://bithunft.netlify.app",
    git: "#!",
  },
  {
    id: 11,
    Name: "Karotoa Courier Service",
    image:work11,
    Category: "Wordpress",
    Type: 'Business',
    Conv: "Theme Customization",
    live: "https://karotoa.com/",
    git: "#!",
  },
  {
    id: 12,
    Name: "Construction",
    image:work12,
    Category: "Wordpress",
    Type: 'Business',
    Conv: "Theme Customization",
    live: "https://www.greenhillsbd.com/",
    git: "#!",
  },
  {
    id: 4,
    Name: "Crypto NFT",
    image:work4,
    Category: "WebDesign",
    Type: "NFT",
    Conv: "Figma to HTML",
    live: "https://criptonft.netlify.app",
    git: "#!",
  },
  {
    id: 5,
    Name: "UI/X LMS",
    image:work5,
    Category: "WebDesign",
    Type: "LMS",
    Conv: "Figma to HTML",
    live: "https://forlms.netlify.app",
    git: "#!",
  },
  {
    id: 6,
    Name: "Furniture",
    image:work6,
    Category: "WebDesign",
    Type: "E-Commerce",
    Conv: "Figma to HTML",
    live: "https://furniturecom123.netlify.app",
    git: "#!",
  },
  {
    id: 8,
    Name: "Fashion & Style",
    image:work8,
    Category: "WebDesign",
    Type: "E-Commerce",
    Conv: "Sketch to HTML",
    live: "https://soft-pithivier-dfdd1b.netlify.app",
    git: "#!",
  },
  {
    id: 13,
    Name: "Graphic Items",
    image:work13,
    Category: "Wordpress",
    Type: 'Items',
    Conv: "Theme-Customization",
    live: "https://graphicitem.com/",
    git: "#!",
  },
  {
    id: 9,
    Name: "Merlin Medical Assistance",
    image:work9,
    Category: "React",
    Type: "Medical",
    Conv: "Sketch to HTML",
    live: "https://ivfafzal.netlify.app",
    git: "#!",
  },
  {
    id: 10,
    Name: "Wedding Site",
    image:work10,
    Category: "WebDesign",
    Type: "Wedding",
    Conv: "Sketch To HTML",
    live: "https://wonderfulweddingsite.netlify.app",
    git: "#!",
  },
];

const WorkFilter = () => {
  const [items, setItems] = useState(Datas) 

  const filterItem = (updateCategory) => {
    const updateItem = Datas.filter(
      (menuCategory) => menuCategory.Category === updateCategory
    );
    setItems(updateItem);
  };

  return (
    <div>
      <div className="navbar mb-[40px]">
        <ul className="flex gap-[30px] justify-center text-[18px]">
          <li>
            <button onClick={() => setItems(Datas)}>ALL</button>
          </li>
          <li className="">
            <button onClick={() => filterItem("WebDesign")}>HTML & CSS</button>
          </li>
          <li>
            <button onClick={() => filterItem("React")}>REACT JS</button>
          </li>
          <li className="">
            <button onClick={() => filterItem("Wordpress")}>WORDPRESS</button>
          </li>
        </ul>
      </div>

      <div className="work__items grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {items.map((item) => {
          const { id, Name, image, Type, Conv, live, git } = item;
          return (
            <div className="item p-[20px] bg-[#ffffff0a] border-[1px] border-[#4c4a4a] rounded-[10px]" key={id}>
              <div href="#!" className="relative work__hov overflow-hidden">
                <a href="#!"><img className=" w-[100%]" src={image} /></a>
                <div className="absolute work__prev h-[100%] w-[100%] bg-[#666666e8] top-0 right-[100%] flex justify-center items-center">
                  <div className="text-[#fff] text-[25px] font-[bold] w-[66px] flex justify-between">
                    <a href={live} target="_blank"><FiLink/></a>
                    <a href={git}><FiGithub/></a>
                  </div>
                </div>
              </div>
              <div className="item__info p-[5px] text-[#B3B2C1]">
                <h4 className="text-[#fff] text-[20px] font-[600]">Name: {Name}</h4>
                <p className="text-[18px] mt-[6px] mb-[4px]">Type: {Type}</p>
                <p className="text-[18px]">Converted To: {Conv}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkFilter;
