import GlassSheet from "@/components/global/glass-sheet"
import { Button } from "@/components/ui/button"
import { Logout } from "@/icons"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import Menu from "./Menu"

type Props = {}

const LandNav = (props: Props) => {
    return (
        <div className="w-full flex top-0 sticky justify-between items-center py-5 z-50">
            <p className="Font-bold text-2xl">FlowLearn</p>
            <Menu orientation="desktop" />
            <div className="flex gap-2">
                <Link href="/sign-in">
                    <Button
                        variant={"outline"}
                        className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
                    >
                        <Logout />
                        Login
                    </Button>
                </Link>
                <GlassSheet
                    triggerClass="lg:hidden"
                    trigger={
                        <Button
                            className="hover:bg-transparent"
                            variant={"ghost"}
                        >
                            <MenuIcon size={30} />
                        </Button>
                    }
                >
                    <Menu orientation="mobile" />
                </GlassSheet>
            </div>
        </div>
    )
}

export default LandNav
