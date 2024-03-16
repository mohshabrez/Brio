import * as React from "react";


// Reusable Component for Navigation Items
const NavItem = ({ children, iconSrc = "", iconAlt = "" }) => (
  <div className="flex gap-1 my-auto font-semibold text-zinc-200">
    <div className="grow">{children}</div>
    {iconSrc && <img src={iconSrc} alt={iconAlt} className="self-start w-4 aspect-square" />}
  </div>
);

export function NavBar() {
  return (
    <header
     className="bg-custom-dark py-1 px-10 shadow-lg shadow-slate-800 rounded-b-md" >
      <nav className="w-full max-w-1152 h-14 flex justify-between items-center">
        <h1 className="font-family-gilroy text-left text-1xl leading-5 font-semibold text-transparent bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 bg-clip-text">BRIO.io</h1>
        <div className="w-[460px] h-[43px] gap-6 flex">
          <div className="w-[320px] h-[43px] px-4 py-3 flex justify-between rounded-lg border text-transparent bg-gradient-to-br from-gray-400 via-gray-400 to-gray-800 bg-clip-text shadow-inner ">
            Search for a component.. <svg class="h-6 w-6 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
</svg>
          </div>
          <div className="w-[116px] h-[19px] gap-1 flex mt-3">
          <NavItem iconsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2822aa217e5bd4b5b4adf8a5918d9ecd7a44aff2ab1f5685dac55a2510ab631a?apiKey=516f9c4685e2416792ef9570f076208b&"iconAlt="Illustration of components">
            Components 
          </NavItem>
          <svg class="h-4 w-4 text-gray-500 mt-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
</svg>
          </div>
        </div>
        <button className="w-[89px] h-[43px] px-4 py-3 rounded-lg bg-black shadow-md" tabIndex="0">
        <span class="inline-block w-[57px] h-[19px] font-gilroy text-base leading-4 text-white">
  Sign Up
</span>
        </button>
      </nav>
    </header>
  );
}