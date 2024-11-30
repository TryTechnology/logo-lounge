import Image from "next/image";
import Divider from "./divider";
import Searchbar from "./searchbar";
import Title from "./title";

const Images = () => {
    return ( 
        <>
        <Searchbar />

        <Divider />
        <Title text={"Logos"} styleType="primary" />
        <Divider />

        <Title text={"Logo PNG"} styleType="primary" />
        <Image src="/logos/tc_logo_b-tr_s-sonic.png" alt="TryCaze Logo Background Transparent Special Sonic" width={264} height={264} />
        <Image src="/logos/tc_logo_b-tr_s-deer.png" alt="TryCaze Logo Background Transparent Special Deer" width={264} height={264} />
        <Image src="/logos/tt_logo_b-d.png" alt="TryCaze Logo Background Dark" width={264} height={264} />
        <Divider />

        <Title text={"Logo JPG"} styleType="primary" />
        <Image src="/logos/tc_logo-b-c.jpg" alt="TryCaze Logo Background Colourful" width={264} height={264} />
        <Divider />

        <Title text={"Logo SVG"} styleType="primary" />
        <Image src="/logos/tc_logo_b-tr_s-deer.svg" alt="TryCaze Logo Background Transparent Special Deer" width={264} height={264} />
        <Image src="/logos/tc-logo_b-tr_s-sonic.svg" alt="TryCaze Logo Background Transparent Special Sonic" width={264} height={264} />
        <Divider />

        <Title text={"Banners"} styleType="primary" />
        <Image src="/banners/tc_banner_b-tr_txt-b.svg" alt="TryCaze Banner Background Black" width={264} height={264} />
        <Image src="/banners/tc_banner_b-tr_txt-w.svg" alt="TryCaze Banner Background White" width={264} height={264} />
        </>
     );
}
 
export default Images;