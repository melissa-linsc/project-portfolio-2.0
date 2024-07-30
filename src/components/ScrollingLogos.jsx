export function ScrollingLogos() {
    return (
        <div
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li className="w-20 h-20 object-cover">
            <img src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" alt="Facebook" className="w-20 h-20"/>
        </li>
        <li>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png?f=webp&w=256" alt="Disney" className="w-20 h-20"/>
        </li>
        <li>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp&w=256" alt="Airbnb" className="w-20 h-20"/>
        </li>
        <li>
            <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="Apple" className="w-20 h-20"/>
        </li>
        <li>
            <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" alt="Spark" className="w-25 h-20 object-contain"/>
        </li>
        <li>
            <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Samsung" className="w-20 h-20"/>
        </li>
        <li>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-jest-3521517-2945020.png?f=webp&w=256" alt="Quora" className="w-20 h-20"/>
        </li>
    </ul>                
</div>
    )
}