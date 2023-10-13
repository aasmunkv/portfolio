import AboutPageComponent from "@/components/about/AboutPageComponent";

export default function AboutPage() {
    return (
        <main className="max-w-2xl min-h-screen">
            {/*<div className="flex flex-col gap-24 mt-16 items-center min-h-screen">*/}
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 gap-4">
                    <AboutPageComponent/>
                </div>
            </div>
        </main>
    );
}