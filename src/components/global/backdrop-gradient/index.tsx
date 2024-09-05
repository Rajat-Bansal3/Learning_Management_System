import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode
    classname?: string
    container?: string
}

const BackdropGradient = ({
    children,
    classname = "",
    container = "",
}: Props) => {
    return (
        <div className={cn("relative flex w-full flex-col", container)}>
            <div
                className={cn(
                    "absolute rounded-md backdrop-blur-100 bg-[#877874] mx-10",
                    classname,
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default BackdropGradient
