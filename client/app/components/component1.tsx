import Image from 'next/image'

interface ImageProps {
  src:string;
}

export default function ImageMoving({src}:ImageProps){

    //TODO: component to import image 
    return (
      <div>
         <Image
          src={src}
          alt="Description de l'image"
          width={30} 
          height={30} 
        />
      </div>
    )
  }

// src="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconeVsc.png"

