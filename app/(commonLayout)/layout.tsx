import Navbar from "@/components/navbar";
import { ProfileCard } from "@/components/profile-card";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="max-w-[1080px] mx-auto ">
        <Navbar />
        <div className="flex flex-col lg:flex-row w-full    mt-24">
            <aside className="w-full md:w-92 shrink-0">
                <ProfileCard />
            </aside>
            <main className="grow">
                {children}
            </main>
        </div>
    </div>;
};

export default CommonLayout;