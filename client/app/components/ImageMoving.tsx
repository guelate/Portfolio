import Image from 'next/image'

interface ImageProps {
  src:string;
}

export default function ImageMoving({src}:ImageProps){

    return (
      <div>
         <Image
          src={src}
          alt="Icon Image"
          width={30} 
          height={30} 
        />
      </div>
    )
  }

// "
