import Link from "next/link"

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is our about page</p>
            <Link href="/">Go back home</Link>
        </div>
    )
}