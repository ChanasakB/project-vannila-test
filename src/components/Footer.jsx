import Link from "next/link";
import Image from "next/image";

const menu = [{
  name :"หน้าแรก",
  id: 1,
},
{
  name :"จุดเด่น",
  id: 2,
},
{
  name :"ราคา",
  id: 3,
},
{
  name :"บทความ",
  id: 4,
},
{
  name :"ติดต่อเรา",
  id: 5,
},
]

const under = [{
  content : "ตั้งค่าคุกกี้",
  id : 1,
},{
  content : "นโยบายการใช้คุกกี้",
  id : 2,
},{
  content : "ข้อตกลงและเงื่อนไข",
  id : 3,
},{
  content : "นโยบายการคุ้มครองข้อมูลส่วนบุคคล",
  id : 4,
},]

const image = [
  {
      img: "/footer/Line.svg",
      id: 1,
  },
  {
      img: "/footer/Fackbook.svg",
      id: 2,
  },
  {
      img: "/footer/tiktok.svg",
      id: 3,
  },
]
const Footer = () => {

  return (
    <div>
      <div className={`flex flex-col md:flex-row justify-center items-center  md:justify-start  w-[375px] md:w-[1134px] m-auto gap-[30px] border-b-2 border-[#C7C7C7] pb-[30px] font-anuphan`}>
        <Image src="/logo.svg" width={164} height={83} alt="logo" />
        <ul className={`flex  flex-wrap  justify-center  md:justify-start md:items-center gap-[30px] md:gap-[40px] text-[16px] text-[black] font-semibold w-[164px] md:w-[1134px]`}>
          {menu.map((ele) => (
            <li key={ele.id} className={`hover:text-[#4C71F1]`}>
              <Link href="#">{ele.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`pb-[120px]`}>
      <div className={`pt-[30px] flex  flex-col md:flex-row w-[375px] md:w-[1134px] m-auto justify-center items-center text-center md:justify-between gap-[30px] md:gap-[0] font-anuphan`}>
          <div>
            <ul className={`flex flex-col md:flex-row gap-[30px] text-[16px] text-[black] font-semibold `}>
                {under.map((item)=>
                <li key={item.id} className={`hover:text-[#4C71F1]`}>
                <Link href="#">{item.content}</Link>
              </li>
            )}
            </ul>
          </div>
          <div className={`flex gap-[30px] cursor-pointer`}>
            {image.map((time)=>
            <Image key={time.id} src={time.img} width={25} height={25} alt="logo"/>
        )}
          </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
