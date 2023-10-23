import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  return(
    <footer>
      <Link href="https://instagram.com/manners.interior?igshid=MXhiYndvYnMwdXR4dw==" target="_blank">
      <span style={{marginRight: "5px"}}>Följ mig på Instagram</span>
      <BsInstagram />
      </Link>
      </footer>
  )

}