import Link from "next/link";

function PageNotFound() {
    return <>
        <h2>404 Page Not Found!!!</h2>
        <Link href="/">Home</Link>
    </>
}

export default PageNotFound;