import Aside from "@/components/Aside/Aside";
import PostBanner from "@/components/Banners/PostBanner";
import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto min-h-screen">
      <div className="flex flex-nowrap w-full gap-4 pt-8">
        {/* main-section */}
        <section className="w-full md:w-2/3 space-y-4 px-4 shadow-xl py-2">
          <Hero />
          <PostBanner postcategories="current post" />
          <Posts />
        </section>
        {/* aside */}
        <section className="hidden md:block w-1/3">
          <Aside />
        </section>
      </div>
    </main>
  );
}
