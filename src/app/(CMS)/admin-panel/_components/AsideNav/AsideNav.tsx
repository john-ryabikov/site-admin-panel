import AsideLink from "../AsideLink/AsideLink";

const tabs = [
    {id: 1, href: "/admin-panel"}
]

export default function AsideNav() {

    return (
        <nav className="cms-page__aside-nav">
            <p className="cms-page__aside-nav-title">Контент сайта</p>
            <div className="cms-page__aside-nav-tabs">
                {tabs.map((tab => <AsideLink key={tab.id} href="/admin-panel"/>))}
            </div>  
        </nav>
    )
}


