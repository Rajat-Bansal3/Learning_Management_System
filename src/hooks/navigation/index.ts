import { usePathname } from "next/navigation"
import { useState } from "react"

export const useNavigation = () => {
    const path = usePathname()
    const [section, setSection] = useState<string>(path)
    const onSetSection = (page: string) => setSection(page)
    return {
        section,
        onSetSection,
    }
}
