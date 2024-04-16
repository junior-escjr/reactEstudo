import Link from "./Link";

const Sidebar = () => {
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Button', path: '/button'},
        {label: 'Modal', path: '/modal'},
        {label: 'Table', path: '/table'},
        {label: 'Counter', path: '/counter'},
        {label: 'Counter form', path: '/counter-form'}
    ];

    const renderLinks = links.map(( link ) => {
        return <Link className="mb-3" key={link.label} to={ link.path } activeClassName="font-bold border-l-4 border-blue-500 pl-2">
            { link.label }
        </Link>
    })

    return <aside className="sticky top-0 overflow-y-scroll flex flex-col w-52">{ renderLinks }</aside>
}

export default Sidebar;