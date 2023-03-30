function HeroComponent() {
    return(
        <div className='flex flex-row justify-center items-center h-full'>
           <div className='basis-1/4 flex items-center justify-center'>
              <div className='flex flex-col'>
                 <div className='py-4'>
                    <p> HI, THERE! 👋 IM </p>
                </div>
                 <span className='py-2 text-green-400 font-bold size-23'>Jigme Lodey</span>
                 <span>Im a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</span>
                 <button className='bottom-0 bg-slate-500 w-fit p-2 rounded-md'> Hire Me </button>
             </div> 
           </div>
            <div className='basis-2/4 flex items-center justify-center'>
                <div>
                    hello
                </div>
            </div>
        </div>
    )
}

export default HeroComponent;