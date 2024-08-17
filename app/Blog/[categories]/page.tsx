import Aside from "@/components/Aside/Aside";
import Contents from "@/components/Contents/Contents";

export default function Page({ params }: any) {
  const category = params;

  return (
    <main className="max-w-screen-xl mx-auto min-h-screen">
      <div className="mb-4 md:mb-8 pt-8 px-2">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          {category.categories}
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Katika kipengelee hiki utaweza kupata machapisho yote yenye habari za
          <span className="px-2">{category.categories}</span>
          yaliyo wahi chapishwa na spotigazeti
        </p>
      </div>
      <div className="w-full h-screen">
        <div className="flex w-full px-2">
          <div className="w-full lg:w-9/12 space-y-4 flex flex-wrap gap-4">
            <Contents category={category.categories} />
          </div>
          <div className="hidden lg:block lg:w-3/12">
            <Aside />
          </div>
        </div>
      </div>
    </main>
  );
}
