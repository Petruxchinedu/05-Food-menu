import React from 'react';

const Menu = ({items}) => {
  return <div className='section-center'>
    {items.map((item)=>{
      const{id,price,title,img,desc}= item;
      return <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo'/>
        <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>${price}</h4>
        </header>
        <h4 className='item-text'>{desc}</h4>
        </div>
      </article>
    })}
  </div>;
};

export default Menu;
