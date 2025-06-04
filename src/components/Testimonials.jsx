import Heading from "./Heading"

function Testimonials() {
  return (
    <div className="bg-white w-full pt-20">
        <Heading postion={"text-center mb-10 px-16"} color={"text-charcoal"} section={"Network"} title={"Our Partners"} subtitle={"Shaping the future of human-centered AI — Together!"} />
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_400px,_black_calc(100%-400px),transparent_100%)]">
            <ul className="w-full flex items-center justify-between [&_li]:mx-12 [&_img]:max-w-none infinite-scroll">
                <li>
                    <img src="/partner/bipro-logo.svg" alt="BiPro Logo" className="h-10 mx-24" />
                </li>
                <li>
                    <img src="/partner/GW49-logo-blue.svg" alt="Gateway49 Logo" className="h-28 mx-24"/>
                </li>
                <li>
                    <img src="/partner/uzl-logo.png" alt="Universität zu Lübeck Logo" className="h-28 mx-24"/>
                </li>
            </ul>
            <ul className="w-full flex items-center justify-between [&_li]:mx-12 [&_img]:max-w-none infinite-scroll" aria-hidden="true">
                <li>
                    <img src="/partner/bipro-logo.svg" alt="BiPro Logo" className="h-10 mx-24" />
                </li>
                <li>
                    <img src="/partner/GW49-logo-blue.svg" alt="Gateway49 Logo" className="h-28 mx-24"/>
                </li>
                <li>
                    <img src="/partner/uzl-logo.png" alt="Universität zu Lübeck Logo" className="h-28 mx-24"/>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Testimonials