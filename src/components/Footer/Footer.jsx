
import MarsNew  from "../../assets/image/newFooter.svg"

function Footer(){

    return(
        <>
           <footer className="flex items-center justify-center flex-col relative mt-[200px]">
              
                <img src={MarsNew} 
                    alt="logo-mars-studio" 
                    className="w-full  object-contain mt-[400px] absolute z-[-1]"
                   
                />
                <div className='flex flex-row items-center gap-5 absolute mt-[500px] z-[30] text-white '>
                    &copy;<span className='font-normal text-sm'>2025 Mars Studio.</span><span className='text-xs text-zinc-300'>All rights reserved.</span>
                </div>
            </footer>
        </>

    )
}
export default Footer;