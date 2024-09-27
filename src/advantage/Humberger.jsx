import { menu } from "@/components/Navbar";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useEffect } from "react";

const Humberger = (props) => {
  const {isOpen } = props

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div>
        {isOpen ? (
          <div className={`flex flex-col gap-[30px] h-[1000px] md:h-full`}>
            <ul
              className={`flex flex-col md:hidden justify-between items-center gap-[30px]`}
            >
              {menu?.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`text-[20px] font-bold text-center  hover:text-[#4C71F1] font-anuphan`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {" "}
            <div
              className={`flex flex-col pb-[30px] md:hidden items-center gap-[20px]`}
            >
              <Button
                disableRipple
                variant="contained"
                className={`w-[335px] md:w-[194px] h-[50px] bg-[#4C71F1] hover:bg-[#4C71F1] shadow-none hover:shadow-none text-[20px] text-center  font-bold font-anuphan `}
              >
                เริ่มต้นใช้งาน
              </Button>
              <Button
                disableRipple
                variant="contained"
                className={`bg-[#DEEDFF] hover:bg-[#DEEDFF] border-none text-[#4C71F1] shadow-none w-[335px] md:w-[164px] h-[50px]  hover:shadow-none text-[20px] text-center  font-bold rounded-md font-anuphan`}
              >
                เข้าสู่ระบบ
              </Button>
              
              
            </div>
          </div>
        ) : null}
      </div>
  )
}

export default Humberger;