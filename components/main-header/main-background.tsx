import classes from './main-background.module.css'
import Image from "next/image";
import background from "@/components/images/Element.png"

export default function MainBackground () {
    return (
        <div className={classes["header-background"]}>
            <Image src={background} alt="background" className='mt-20'></Image>
      </div>
    )
}