import LandNav from "./_components/Navbar/index"

type Props = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col container relative">
            <LandNav />
            {children}
        </div>
    )
}

export default LandingPageLayout
