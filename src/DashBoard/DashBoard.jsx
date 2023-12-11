import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiAtom } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { BiDownArrowAlt } from "react-icons/bi";

const DashBoard = () => {
    const [open, setOpen] = useState(true)
    const [subOpen, setSubOpen] = useState(false)

    const menu = [
        {title:"DashBoard"},
        {title:"page"},
        {title:"media", spacing:true},
        {
            title:"project",
            subMenu:true,
            subMenuItems:[
                {title:"submene01"},
                {title:"submene02"},
                {title:"submene03"},
            ],
        },
        {title:"analyes"},
        {title:"demo01"},
        {title:"demo2", spacing:true },
        {title:"demo3"},
        {title:"demo4"},
        {title:"demo5", spacing:true },
    ]
    return (
        <div className="flex">
            <div className={`bg-[red] text-white h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <FaArrowLeftLong className={`bg-[#262626] text-3xl rounded-full py-2 px-2 absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className="inline-flex">
                    <BiAtom className={`bg-[yellow] text-5xl px-2 py-2 text-[#262626]  ${open && "mr-2"}`} />
                    <h2 className={`font-medium origin-left text-2xl duration-300 ${!open && "scale-0"}`}>DashBoard</h2>
                </div>
                <div className={`flex items-center rounded-md bg-[#0808083f] mt-6  py-2 ${!open ? "px-2" :"px-4"}`}>
                    <IoSearch  className="text-white text-lg block float-left cursor-pointer mr-2"/>
                    <input type="text" placeholder="Search.." className={`text-base bg-transparent w-full text-white focus:outline-none duration-300 ${!open && "hidden"}`} />
                </div>

                <div className="pt-2">
                    {
                        menu.map((nav,index) => <>
                         <li key={index} className={`text-sm flex text-[#262626] items-center gap-x-4 p-2 cursor-pointer mt-2 bg-[#fff] ${menu.spacing ? "mt-9":"mt-2"}`}>
                            <span className="text-2xl block float-left"><RiDashboardFill /></span>
                            <span className={`${!open && "hidden"}`}>{nav.title}</span>
                            {
                               nav.subMenu && (
                                <BiDownArrowAlt className={`text-[#262626] ${!subOpen && "rotate-180"}`} onClick={() => setSubOpen(!subOpen)}/>
                               )
                            }
                         </li>

                         {
                            nav.subMenu && subOpen && open && (
                                <div>
                                    {
                                        nav.subMenuItems.map((item,index) => <>
                                        <li key={index}>
                                            <span>{item.title}</span>
                                        </li>
                                        </>)
                                    }
                                </div>
                            )
                         }
                        </>)
                    }
                </div>
            </div>
            <div className="p-7">home page</div>
        </div>
    );
};

export default DashBoard;