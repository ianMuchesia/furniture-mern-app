import React from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
const paginationStyles ={
    previousButton:`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md`,
    style_1:`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md`,
    style_2:`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md
    inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md
    inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md`,
    nextButton:`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md`
}




const Pagination = () => {




    const handleClick=(e:any)=>{
      console.log(e.target.value)
        
    }
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-100 mt-10">
	<button title="previous" type="button" className={paginationStyles.previousButton}>
		<BsChevronLeft className='w-4'/>
	</button>
	<button type="button" onClick={handleClick} value={1} className={paginationStyles.style_1}>1</button>
	<button type="button" className={paginationStyles.style_2} title="Page 2">2</button>
	<button type="button" className={paginationStyles.style_2} title="Page 3">3</button>
	<button type="button" className={paginationStyles.style_2} title="Page 4">4</button>
	<button title="next" type="button" className={paginationStyles.previousButton}>
    <BsChevronRight className='w-4'/>
	</button>
</div>
  )
}

export default Pagination