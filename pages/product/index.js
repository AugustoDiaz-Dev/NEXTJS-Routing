import Link from 'next/link'

function Product({ productId = 100 }) {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <h2>Products List</h2>
            <Link href="/product/1">
                <a>Product 1</a>
            </Link>
            <Link href="/product/2">
                <a>Product 2</a>
            </Link>
            <Link href="/product/3" replace>
                <a>Product 3</a>
            </Link>
            <Link href={`/product/${productId}`}>
                <a>Product {productId}</a>
            </Link>

        </>
    )
}

export default Product;