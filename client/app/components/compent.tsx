import Image from 'next/image'

export default function ImageMoving({ src }):string {

    //TODO: component to import image 
    return (
      <div>
         <Image
          src={src}
          alt="Description de l'image"
          width={30} // La largeur souhaitée de l'image
          height={30} // La hauteur souhaitée de l'image
        />
      </div>
    )
  }

// src="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconeVsc.png"

