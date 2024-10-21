import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function RootLayout() {
  return (
    // <div className="min-h-screen w-full bg-slate-300/20 font-sans px-8 py-10 md:px-14 md:py-12 lg:px-20 lg:py-12 xl:px-40">
    <div className="h-full w-full bg font-sans mx-0 p-0">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
