import React, { useState } from 'react';
export default function Sidebar() {

    const [isActive, setIsActive] = useState(false);
    const openSidebar = () => {
        setIsActive(!isActive);
    };


    const sidebarBtnStyle = {
        left: isActive ? "169px" : "",
        color: isActive ? "#27282FFF" : "",
        backgroundColor: isActive ? "#FFF" : "",
        transform: isActive ? "rotate(180deg)": ""
    };

    return (
        <>
            <div  className={"sticky bg-black top-32 flex flex-col gap-4 py-4 pr-4 pl-0 w-full transition max-h-[500px] xl:fixed max-w-48 xl:pl-4 xl:pt-8 xl:-left-48 xl:z-[999]  "+ (isActive ? ' xl:left-0  xl:min-h-screen' : '')}>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <p className="xl:ml-4">Category</p>
                        <i className="las la-angle-down text-[#4d4f5d]"></i>
                    </div>
                    <div className="flex flex-col gap-2 ml-2">
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10" />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Cleanser</p>
                        </div>
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10" />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Toner</p>
                        </div>
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10"  />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Serum</p>
                        </div>
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" >
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10"  />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Moisturizer</p>
                        </div>
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10"  />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Face mask</p>
                        </div>
                        <a href="#" className="">
                            <span className="text-blue text-xs">load more</span>
                            <i className="bi bi-plus"></i>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <p className="xl:ml-4">Price</p>
                        <i className="las la-angle-down text-[#4d4f5d]"></i>
                    </div>
                    <div className="flex flex-col gap-2 ml-2">
                        <div className="flex items-center text-pay-gray text-md gap-2">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10" id="check" />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>High to low</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <p className="xl:ml-4">location</p>
                        <i className="las la-angle-down text-[#4d4f5d]"></i>
                    </div>
                    <div className="flex flex-col gap-2 ml-2">
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10" />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Cleanser</p>
                        </div>
                        <div className="flex items-center text-pay-gray text-md gap-2 ">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input type="checkbox" className="before:content-[''] bg-primary peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-gray-900 hover:before:opacity-10" />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>
                                </label>
                            </div>
                            <p>Toner</p>
                        </div>
                    </div>
                </div>
                <button style={sidebarBtnStyle} onClick={openSidebar} className="fixed left-0 top-52 z-50 bg-black-secondary  p-4 rounded-md hidden xl:flex items-center justify-center">
                    <i className="las la-angle-double-right"></i>
                </button>
            </div>
        </>
    )
}