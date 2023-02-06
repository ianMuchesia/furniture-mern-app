import React from 'react'

const Categorize = () => {
  return (
    <div className='flex flex-col gap-2 items-center'>
        <input
        type="text"
        placeholder="search"
        className='bg-blue-100 p-2 rounded-md text-gray-900'/>
        <h3 className='font-bold text-lg'>Category</h3>
        <button type='button'>Living Room</button>
        <button type='button'>Kitchen</button>
        <button type='button'>Outdoor</button>
        <button type='button'>Bedroom</button>
        <button type='button'>Entryway</button>
        <button type='button'>Office</button>
        <button type='button'>Dining Room</button>
        <label htmlFor='Brand'>Brand</label>
        <option id="Brand">
            <select>Kitchen Co</select>
            <select>Outdoor Co</select>
            <select>Furniture Co</select>
          
        </option>
        <label htmlFor='price'>Price</label>
        <input
        type="range"
        id="price"
        min="0"
        max="500000"
        className=''/> 
    </div>
  )
}

export default Categorize