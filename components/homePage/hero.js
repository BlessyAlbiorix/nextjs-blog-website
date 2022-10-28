import Image from 'next/image'
import classes from './hero.module.css'

export const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/blessy.jpg" alt="An image showing Blessy" width={300} height={300}/>
            </div>
            <h1>Hi I'm Blessy</h1>
            <p>My Blog about development</p>
        </section>
    )
}
