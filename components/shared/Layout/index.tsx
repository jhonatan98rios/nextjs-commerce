import Navbar from "../Navbar";

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            <main className="pt-16 md:pt-24"> 
                { children } 
            </main>
        </>
    )
}