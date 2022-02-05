import { useRouter } from 'next/router'

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params)
    if (params.length === 2) {
        return <h2>Viewing docs for features {params[0]} and concept {params[1]}</h2>
    } else if (params.length === 1) {
        <h2>Viewing docs for feature {params[0]}</h2>
    }
    return <h2>Docs Home Page</h2>
}

export default Doc;