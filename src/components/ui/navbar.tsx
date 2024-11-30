import Image from "next/image";

const Navbar = () => {
    return ( 
        <header className="pb-6 bg-slate-900 lg:pb-0">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="https://trycaze-website.vercel.app/" title="" className="flex">
                    <Image src="https://trycaze.site/assets/images/logo.svg" alt="banner" width={164} height={164} />
                </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Logos </a>

                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Banners </a>

                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Dark Mode </a>

                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> White Mode </a>

                <a href="#" title="" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Others </a>
            </div>

            <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Documentation </a>
        </nav>
        <nav className="pt-4 pb-6 bg-slate-800 border border-sky-500 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Logos </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Banners </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Dark Mode </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> White Mode </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Others </a>
                </div>
            </div>

            <div className="px-6 mt-6">
                <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Documentation </a>
            </div>
        </nav>
    </div>
</header>
     );
}
 
export default Navbar;