import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category)=>{
    if (category === "all") {
      setMenuItem(items);
    }else{
       const newItems = items.filter((item)=>item.category === category )
    setMenuItem(newItems)
    }
   
  }
  
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h3>Our Menu</h3>
        <div className='underline'></div>
      </div>
      <Categories filterItems= {filterItems}/>
      <Menu items = {menuItem}/>
    </section>
  </main>;
}

export default App;
