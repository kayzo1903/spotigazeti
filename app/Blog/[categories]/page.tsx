import Aside from "@/components/Aside/Aside";
import Contents from "@/components/Contents/Contents";

export default function Page({ params }: any) {
  const category = params;
  

  return (
      <div className="w-full h-fit">
        <div className="flex w-full px-2">
          <div className="w-full lg:w-9/12 space-y-4 flex flex-wrap gap-4 ">
           { <Contents category={category.categories} />}
          </div>
          <div  className="hidden lg:block lg:w-3/12">
            <Aside />
          </div>
        </div>
      </div>
  );
}
