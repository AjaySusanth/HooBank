import styles from "../style"
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div className={`w-[140px] h-[140px] ${styles.flexCenter} bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>

      <div className={`w-[100%] h-[100%] rounded-full ${styles.flexCenter} flex-col bg-primary`}>

        <div className={`flex-row ${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
          
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>


      </div>


    </div>
  )
}
export default GetStarted