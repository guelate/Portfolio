import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarPicture() {
  return (
    <Avatar className="h-12 w-12 border border-black border-muted rounded-full">
      <AvatarImage src="/placeholder-user.jpg" />
      <AvatarFallback>CNefjepj</AvatarFallback>
    </Avatar>
  )
}