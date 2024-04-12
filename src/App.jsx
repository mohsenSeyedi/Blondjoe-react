import Header  from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import Card    from "./components/Card/Card.jsx";

function App() {


  return (
    <>
        <Header />
        <section className="flex w-full px-4 flex-1 relative mt-32">
            <Sidebar></Sidebar>
            <div className="flex flex-1 flex-col gap-2 border-l border-black-secondary h-fit pl-5 pt-5 xl:border-none xl:pl-0">
                <div className="flex items-center gap-4 mb-2 last:text-white">
                    <a href="#" className="flex items-center gap-2 text-[#4d4f5d] hover:text-white transition">
                        <h5>Home</h5>
                        <i className="las la-angle-right"></i>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#4d4f5d] hover:text-white transition">
                        <h5>Cleanizer</h5>
                        <i className="las la-angle-right"></i>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#4d4f5d] hover:text-white transition">
                        <i className="las la-shopping-basket"></i>
                        <h5>official</h5>
                    </a>
                </div>
                <div className="flex justify-center gap-2 md:flex-col">
                    <div className="flex flex-col relative bg-black-secondary rounded-lg p-4 w-80 md:w-full">
                        <div className="w-full">
                            <img className="rounded-2xl w-full h-36 object-cover" src="./public/images/post-three.jpg" alt=""/>
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <i className="las la-shopping-basket"></i>
                                <h5>Mawar shop official</h5>
                                <i className="las la-check-circle text-blue"></i>
                            </div>
                            <span className="text-green text-sm font-bold">online</span>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <button className="bg-blue rounded-3xl text-sm w-32 py-1.5 gap-2 flex items-center justify-center hover:opacity-80 transition">
                                <span>Follow</span>
                                <i className="las la-plus"></i>
                            </button>
                            <button className="bg-[#023E7E26] rounded-3xl border-solid border-blue text-blue text-sm w-32 py-1.5 gap-2 flex items-center justify-center hover:opacity-80 transition">
                                <span>Chat</span>
                                <i className="las la-comment"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <div className="grid grid-cols-3 flex-1 w-full gap-2 sm:flex sm:flex-col">
                            <div className="grid grid-cols-2 col-span-2 bg-primary rounded-lg p-4 lg:place-items-center	lg:gap-4 sm:place-items-start">
                                <div className="flex items-center gap-2">
                                    <i className="lab la-product-hunt text-pay-gray"></i>
                                    <div className="flex text-sm">following: <span className="text-blue ml-1">590</span></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="lab la-product-hunt text-pay-gray"></i>
                                    <div className="flex text-sm">products: <span className="text-blue ml-1">782</span></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="lab la-product-hunt text-pay-gray"></i>
                                    <div className="flex text-sm">followers: <span className="text-blue ml-1">454</span></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="lab la-product-hunt text-pay-gray"></i>
                                    <div className="flex text-sm">Ratingg: <span className="text-blue ml-1">434</span></div>
                                    <span className="text-pay-gray text-sm lg:text-xs lg:hidden">(30.2k reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="lab la-product-hunt text-pay-gray"></i>
                                    <div className="flex text-sm">Ratinggg: <span className="text-blue ml-1">859</span></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="lab la-product-hunt text-pay-gray"></i>
                                    <div className="flex text-sm">joinedd: <span className="text-blue ml-1">617</span></div>
                                    <span className="text-pay-gray text-sm lg:text-xs lg:hidden">(50k reviews)</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 2xl:grid-cols-1 sm:flex sm:w-full">
                                <div className="flex flex-col justify-center items-center bg-green gap-2 rounded-lg p-4 text-md text-center sm:w-full">
                                    <span>Awards shop</span>
                                    <i className="las la-gifts"></i>
                                </div>
                                <div className="flex flex-col justify-center items-center bg-green gap-2 rounded-lg p-4 text-md text-center sm:w-full">
                                    <span>Best the year</span>
                                    <i className="las la-thumbs-up"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-4 py-4 bg-primary rounded-lg flex-wrap lg:gap-5">
                            <div className="flex items-center justify-center gap-2 text-pay-gray">
                                <i className="lab la-whatsapp"></i>
                                <p>+68 981 723 9012</p>
                            </div>
                            <div className="bg-pay-gray h-8 w-px lg:hidden"></div>
                            <div className="flex items-center justify-center gap-2 text-pay-gray">
                                <i className="lab la-instagram"></i>
                                <p>mohsenseyedi</p>
                            </div>
                            <div className="bg-pay-gray h-8 w-px lg:hidden"></div>
                            <div className="flex items-center justify-center gap-2 text-pay-gray">
                                <i className="lab la-facebook"></i>
                                <p>revilimba</p>
                            </div>
                            <div class="bg-pay-gray h-8 w-px lg:hidden"></div>
                            <div class="flex items-center justify-center gap-2 text-pay-gray">
                                <i class="lab la-youtube"></i>
                                <p>mohsenseyedi</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*tabs  */}
                <div className="text-black-secondary flex justify-evenly border-b border-black-secondary py-4 relative w-full md:overflow-x-scroll flex-wrap md:gap-4">
                    <div className="cursor-pointer hover:text-white transition">all Products</div>
                    <div className="cursor-pointer hover:text-white transition">top sales</div>
                    <div className="cursor-pointer hover:text-white transition">promo</div>
                    <div className="cursor-pointer hover:text-white transition">la Crystal </div>
                    <div className="cursor-pointer hover:text-white transition">cleanize</div>
                    <div className="cursor-pointer hover:text-white transition">el tonerb  </div>
                    <div className="cursor-pointer hover:text-white transition">serumb </div>
                </div>
                {/*End of tabs */}

                <div className="products-wrapper grid grid-cols-5 h-auto gap-4 pb-8 2xl:grid-cols-3 md:flex md:flex-wrap">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>

        </section>
    </>
  )
}

export default App
