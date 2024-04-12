export default function Card() {

    return (
        <>
            <div className="flex flex-col gap-4 flex-1 bg-black-secondary rounded-lg overflow-h relative min-w-60 pb-4">
                <div className="w-full h-32">
                    <img className="h-full w-full object-cover rounded-t-lg" src="./public/images/post-six.jpg" alt="product"/>
                </div>
                <div className="absolute top-4 left-4 flex items-center text-xs bg-primary rounded-lg px-2 gap-2">
                    <i className="las la-star"></i>
                    <span>4.9</span>
                </div>
                <div className="flex flex-col justify-around gap-2 flex-1 px-2">
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-sm">Tarolasix Plotakov</p>
                        <div>$50.<span className="text-xs">24</span></div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-2">
                        <p className="text-xs text-pay-gray">Tarolasix Plotakov floraz topics hulu konztrak litixc <a href="#" className="text-blue text-xs opacity-80">learn more</a></p>
                        <a href="#" className="card-btn text-xs bg-blue text-white py-1 px-4 rounded-xl flex items-center justify-center hover:opacity-80 transition">Buy</a>
                    </div>
                </div>
            </div>
        </>
    )
}