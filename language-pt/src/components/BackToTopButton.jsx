import { useEffect, useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { LuArrowBigUpDash } from "react-icons/lu";

export default function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false)
    const [opacityValue, setopacityValue] = useState(100)
    const [scrollYValue, setScrollYValue] = useState(0)
    window.addEventListener('scroll', function(){setScrollYValue (this.scrollY)})

  


    setTimeout(() => {
        setopacityValue(60)
      }, "2000");

    console.log(scrollYValue)




    useEffect(() => {
        clearTimeout()
        setopacityValue(100)
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    },[scrollYValue])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {
                backToTopButton&& (
                    <button onClick={scrollUp} className="fixed bottom-10 right-10 h-10 w-10 text-5xl"><LuArrowBigUpDash className={`opacity-${opacityValue}`} color="#fe9901"  size={60}/></button>
                )
            }
        </div>
    )
}