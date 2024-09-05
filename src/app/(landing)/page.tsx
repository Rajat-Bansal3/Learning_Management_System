import dynamic from "next/dynamic"
import CallToAction from "./_components/call_to_action"
import DashBoardSnippet from "./_components/dashboard-snippet"

const Pricing = dynamic(
    () =>
        import("./_components/pricing-section/index").then(
            (x) => x.PricingSection,
        ),
    { ssr: true },
)

export default function Home() {
    return (
        <main className="md:px-10 py-20 flex-col gap-36">
            <div className="">
                <CallToAction />
                <DashBoardSnippet />
                <Pricing />
            </div>
        </main>
    )
}
