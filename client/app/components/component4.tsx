
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <Avatar className="h-12 w-12 border border-muted rounded-full">
      <AvatarImage src="/placeholder-user.jpg" />
      <AvatarFallback>CNefjepj</AvatarFallback>
    </Avatar>
  )
}