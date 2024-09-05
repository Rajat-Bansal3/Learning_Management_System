"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useNavigation } from "@/hooks/navigation/index"
import { cn } from "@/lib/utils"
import Link from "next/link"

type MenuProps = "mobile" | "desktop"

type Props = {
    orientation: MenuProps
}

const Menu = ({ orientation }: Props) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case "desktop":
            return (
                <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop-blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
                    <CardContent className="p-0 flex gap-2">
                        {GROUPLE_CONSTANTS.landingPageMenu.map((x) => (
                            <Link
                                href={x.path}
                                {...(x.section && {
                                    onClick: () => onSetSection(x.path),
                                })}
                                className={cn(
                                    "rounded-xl flex gap-2 py-2 px-4 items-center",
                                    section === x.path
                                        ? "bg-[#09090B] border-[#27272A]"
                                        : "",
                                )}
                                key={x.id}
                            >
                                {section == x.path && x.icon}
                                {x.label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            )
        case "mobile":
            return (
                <div className="flex flex-col mt-10">
                    {GROUPLE_CONSTANTS.landingPageMenu.map((x) => (
                        <Link
                            href={x.path}
                            {...(x.section && {
                                onClick: () => onSetSection(x.path),
                            })}
                            className={cn(
                                "rounded-xl flex gap-2 py-2 px-4 items-center",
                                section === x.path
                                    ? "bg-themeGray border-[#27272A]"
                                    : "",
                            )}
                            key={x.id}
                        >
                            {x.icon}
                            {x.label}
                        </Link>
                    ))}
                </div>
            )

        default:
            return <></>
    }
}

export default Menu
