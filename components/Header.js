import Image from 'next/image'
import React from 'react';
import { SearchIcon,PlusCircleIcon } from '@heroicons/react/outline';
import {HomeIcon} from "@heroicons/react/solid"


const Header = () => {
  return ( 
          <div className="shadow-sm border-b sticky top-0 bg-white z-30">
              <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                 {/* Left*/}
                    <div className="cursor-pointer h-24 w-24 relative lg:inline-grid">
                    <Image
                        src="/onc-stagram-3.png"
                        
                        width={90}
                        height={60}
                        alt="Picture of the author"
                        className="object-contain"
                        />
                    </div>
             

                      {/* Middle*/}
                      <div className="realtive mt-1">
                            <div className="absolute top-2 left-2">
                                <SearchIcon  className="h-5  text-gray-500"/>
                            </div>
                            <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:boder-black rounded-md" />
                      </div>

                      {/* Right*/}
                      <div className="flex space-x-4 items-center">
                          <HomeIcon className="hidden md:inline-flex h-6 cusrorpointer hover:scale-125 transition-tranform duratin-200 ease-out"></HomeIcon>
                          <PlusCircleIcon className="h-6 cusrorpointer hover:scale-125 transition-tranform duratin-200 ease-out"></PlusCircleIcon>
                          <img src="/bk_nsoc-news.png" alt="user-image" className="h-10 rounded-full cursor-pointer" />

                      </div>



            </div>
  
          </div>       
            
  )
}

export default Header