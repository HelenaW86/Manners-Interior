import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export default function Referens() {
  return (
    <div className="referenser">
      <BiSolidQuoteAltLeft fill="#476356" size="30px" />
      <h3>Referenser</h3>
      <p>Det blev riktigt snyggt!
        Hade aldrig lyckats få till samma fingertoppskänsla.</p>
      <p><small>-Helena-</small></p>
      <p style={{textAlign: "right", paddingRight: "20px"}}><BiSolidQuoteAltRight fill="#476356" size="30px" /></p>
    </div>
  );
}
