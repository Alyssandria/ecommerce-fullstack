import { FcGoogle } from "react-icons/fc"
import { IconButton } from "../login/_components/iconButtons"
import { FaApple, FaFacebook } from "react-icons/fa"

export const OauthButtons = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <IconButton>
        <FcGoogle />
      </IconButton>
      <IconButton>
        <FaApple className="fill-primary" />
      </IconButton>
      <IconButton>
        <FaFacebook className="fill-[#1778F2]" />
      </IconButton>
    </div>
  )
}
