import React from 'react'

const Navbar = () => {
  return (
    <div>

      <nav class="flex items-center justify-between flex-wrap bg-orange-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
        <picture><img src='/figmaico.png' class='px-2' alt='abc' /></picture>
        <picture><img src='/sidebaricon.png' class='px-4' alt='abc' /></picture>
        <picture><img src='/signupicon.png' class='px-4' alt='abc' /></picture>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow flex justify-center">
            <a href="#responsive-header" class="text-fuchsia-700 text-2xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Site Name
            </a>

          </div>
          <div>
            <button class='border rounded-full h-7 w-7 m-2 bg-blue-400 items-center justify-center'>A</button>
            <button class='border rounded-full h-7 w-7 m-2 bg-blue-300 items-center justify-center'>B</button>
            <button class='border rounded-full h-7 w-7 m-2 bg-sky-400 items-center justify-center'>M</button>
            <button class='border rounded-full h-7 w-7 m-2 bg-green-300 items-center justify-center'>D</button>
            <a href="#" class="inline-block text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Lon in Or Create Account</a>
          </div>

          <div class="relative inline-block text-left">
            <div>
              <button type="button" class="inline-flex text-sm ml-2 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options

                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
              <div class="absolute bg-slate-500 right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#" class="hover:bg-blue-600 text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Actual Size (100%)</a>
                  <a href="#" class="hover:bg-blue-600 text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Fit to screen                        Z</a>
                  <a href="#" class="hover:bg-blue-600 text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Fit Width</a>
                  <a href="#" class="hover:bg-blue-600 text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Fit Screen</a>
                </div>
                
                <div class="py-1" role="none">
                  <a href="#" class="hover:bg-sky-800 text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Disable Default Navigation</a>
                  <a href="#" class="hover:bg-sky-800 text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Adapt Content For Screen Readers (Beta)</a>
                  
                </div>
              </div>
            </div>




          </div>





        </div>
      </nav>



    </div>



  )
}

export default Navbar