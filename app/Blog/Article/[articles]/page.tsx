import Article from "@/components/Article/Article";
import Aside from "@/components/Aside/Aside";

export default async function Page({ params }: any) {
  const decodedParam = decodeURIComponent(params.articles); //decode url

  return (
    <main className="max-w-screen-xl mx-auto min-h-screen">
      <div className="w-full pt-8">
        <div className="flex w-full px-2">
          <div className="w-full lg:w-9/12 space-y-4 flex flex-wrap gap-4">
            <Article heading={decodedParam} />
          </div>
          <div className="hidden lg:block lg:w-3/12">
            <Aside />
          </div>
        </div>
      </div>
    </main>
  );
}
