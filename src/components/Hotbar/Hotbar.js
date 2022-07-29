import './hotbar.css';

export const Hotbar = (props) => {

    let seeds = [
        {
            name: 'Watermelon',
            timeRemaining: 23,
            timeToGrow: 23,
        },
        {
            name: 'Carrot',
            timeRemaining: 32,
            timeToGrow: 32,
        },
        {
            name: 'Tomato',
            timeRemaining: 25,
            timeToGrow: 25,
        }
    ]

   return (
         <div className='flex justify-center items-center fixed bottom-0 z-50 w-full flex-wrap gap-4 pb-4'>
             {[1,2,3,4,5,6].map((item, index) => {
                return <div key={index} className={'block h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40 bg-grass-200 border-grass-300 text-grass'}>{seeds[index]? <p>{seeds[index].name}</p> : <p>empty</p>}</div>
             })}


         </div>
   )
}
