import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {

    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order!");
        router.push('/product');
        // router.replace('/product');
    }

    return (
        <div>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/product">
                <a>Product</a>
            </Link>
            <h1>Home Page</h1>
            <br />
            <button onClick={handleClick}>Place Order</button>
        </div>

    )
}
export default Home;