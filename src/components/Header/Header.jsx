import React, { useState } from 'react';

export default function Header() {

    return (
        <>
            <div className="flex items-center flex-col min-h-[70px] bg-black top-0 z-50 fixed w-full pt-4">
                <div className="w-full flex items-center justify-between gap-2 px-4 pb-1">
                    <a href="#" className="mr-4 sm:mr-px">Blon<span className="text-blue">djoe</span></a>
                    <div className="flex items-center relative bg-primary pr-4 pl-10  py-2 mr-auto rounded-3xl text-white w-96 sm:w-auto sm:ml-0 md:hidden">
                        <input className="bg-transparent text-[#F1F1F1FF]" type="text" placeholder="search"/>
                        <button className="absolute left-2"><img src="./public/images/icon-search.png" alt="search"/></button>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-primary hidden md:flex items-center justify-center">
                            <img src="./public/images/icon-search.png" alt="search"/>
                        </button>
                        <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <i className="las la-heart"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <i className="las la-shopping-basket"></i>
                        </a>
                        <div className="w-10 h-10 rounded-full">
                            <img className="w-full h-auto object-cover cursor-pointer rounded-full" src="./public/images/person.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full mt-2 pb-1 border-y border-solid border-black-secondary xl:overflow-x-scroll ">
                    <div className="flex items-center gap-4 min-h-[60px] w-fit px-2">
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Ransel</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Shoes</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">High </div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Socks</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Pants</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Shirt</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Dress</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Underw</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">High</div>
                        <div className="flex items-center justify-center text-center text-white text-sm font-medium rounded-3xl py-2 px-4 gap-4 cursor-pointer bg-primary transition hover:opacity-80 hover:bg-blue">Socks</div>
                    </div>
                </div>
            </div>
        </>
    )
}
