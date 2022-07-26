export const Hotbar = (props) => {
   return (
         <div className='flex justify-center items-center fixed bottom-0 z-50 h-1/5 w-full space-x-4 bg-gray-500 flex-wrap'>
             {[1,2,3,4,5,6].map((item, index) => {
                return <div className={'block h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-40 xl:w-40 bg-gray-800'}></div>
             })}


         </div>
   )
}
