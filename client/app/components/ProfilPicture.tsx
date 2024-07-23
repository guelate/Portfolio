import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from 'next/image'
import profil from "../../public/profil.jpeg"

export default function ProfilPicture() {
  return (
    <div className="">
      <Avatar className="">
        <Image
          src={profil}
          alt="Profil picture"
          className="rounded-full w-full h-full border border-gray-300"
        />
      </Avatar>
    </div>
  )
}


// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import Image from 'next/image'
// import profil from "../../public/profil.jpeg"

// export default function ProfilPicture() {
//   return (
//     <div className="flex justify-center py-3">
//       <Avatar className="h-24 w-24 md:h-28 md:w-28 border border-gray-400 hover:border-gray-600 rounded-full">
//         <Image
//           src={profil}
//           alt="Profil picture"
//           className="rounded-full w-full h-full"
//         />
//       </Avatar>
//     </div>
//   )
// }