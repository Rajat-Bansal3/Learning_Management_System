import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode
    trigger: React.ReactNode
    classname?: string
    triggerClass?: string
}

const GlassSheet = ({ children, trigger, classname, triggerClass }: Props) => {
    return (
        <Sheet>
            <SheetTrigger className={cn(triggerClass)} asChild>
                {trigger}
            </SheetTrigger>
            <SheetContent className="bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray">
                {children}
            </SheetContent>
        </Sheet>
    )
}

export default GlassSheet
