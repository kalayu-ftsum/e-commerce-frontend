import Image from 'next/image'
import ImageHero from './Hero-2.png'
import ImageHero2 from './Hero-3.png'
import ImageHero3 from './Hero-4.png'

export function ImageContainer({image,...otherProps}:{image:any}) {
  return (
    <Image
      src={image}
      width={500}
      height={500}
      priority
      {...otherProps}
      alt="Picture of the author"
    />
  )
}

export const HeroOne=({... props})=><ImageContainer image={ImageHero3} {... props}/>
export const HeroTwo=({...props})=><ImageContainer image={ImageHero2} {... props} />
export const HeroThree=({...props})=><ImageContainer image={ImageHero} {... props} />