import { Navigation } from "./Navigation";


const navItems = [
    { label: 'Home', href: '/'},
    { label: 'Blog', href: '/blog'},
    { label: 'About', href: '/about'},
];

const TheHeader = () => {
    return (
        <header>
            {/* <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link> */}

            <Navigation navLinks={navItems} />
        </header>
    );
};

export {TheHeader} ;