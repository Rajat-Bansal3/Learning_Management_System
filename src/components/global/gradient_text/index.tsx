import { cn } from "@/lib/utils"

type Props = {
    classname: string
    element: "H1" | "H2"
    children: React.ReactNode
}

const GradientText = ({ classname, element, children }: Props) => {
    switch (element) {
        case "H1":
            return (
                <h1 className={cn(classname, "text-gradient")}>{children}</h1>
            )
        case "H2":
            return (
                <h2 className={cn(classname, "text-gradient")}>{children}</h2>
            )

        default:
            return <p className={cn(classname, "text-gradient")}>{children}</p>
    }
}

export default GradientText
