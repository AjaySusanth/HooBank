import styles from "../style"
import { stats } from "../constants"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>

      {stats.map((stat)=>(
        <div key={stat.id} className="flex-1 flex flex-row justify-start items-center m-3">
          <h4 className="text-white text-[30px] xs:text-[40px] font-poppins font-semibold leading-[43px] xs:leading-[53px]">{stat.value}</h4>
          <p className="text-gradient text-[15px] xs:text-[20px] font-poppins font-normal leading-[21px] xs:leading-[26px] uppercase ml-3">{stat.title}</p>
        </div>
      ))}

      

    </section>
  )
}
export default Stats