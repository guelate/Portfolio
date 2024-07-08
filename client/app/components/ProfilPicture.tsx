import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from 'next/image'
import profil from "../../public/profil.jpeg"

export default function ProfilPicture() {
  return (
    <div className="flex justify-center py-3">
    <Avatar className="h-28 w-28 border border-gray-400 hover:border-gray-600 rounded-full">
      <Image
          src={profil}
          alt="Profil picture"
          className="border-gray-400"
        />
    </Avatar>

    </div>
  )
}

