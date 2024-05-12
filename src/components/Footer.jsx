import styles from "../style"
import { logo } from "../assets"
import { footerLinks,socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col md:flex-row w-full mb-8`}>

        <div className="flex flex-1 flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain"/> 
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>      
        </div>

        <div className="flex-[1.5] flex flex-row justify-between md:mt-0 mt-10 w-full flex-wrap">
          {footerLinks.map((footerlink)=>(
            <div key={footerlink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]">
                {footerlink.title}
              </h4>

              <ul className="list-none mt-4">
                {footerlink.links.map((link,index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer text-dimWhite hover:text-secondary ${index !==     footerlink.links.length-1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3f3e45]">
          <p className="font-poppins font-normal text-[18px] text-center text-white leading-[27px]">
          Copyright 2021 HooBank. All Rights Reserved.
          </p>
          
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social,index)=>(
              <img src={social.icon} alt={social.id} key={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1 ? 'mr-6':'mr-0'}`} />
            ))}
          </div>
      </div>
    </section>
  )
}
export default Footer