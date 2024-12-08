export default function Miss() {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <h2 className="font-medium text-[22px] mb-4">Don't Miss</h2>
        <img src="\miss1.png" alt="" className="w-[100%]" />
        <div className="flex flex-col items-center  gap-3 my-6">
          <h1 className="font-medium text-[52px] text-center">FLIGHT ESSENTIALS</h1>
          <h5 className="text-[15px] text-center">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </h5>
          <div className="flex gap-[6px]">
            <button className="px-5 py-2 bg-[#111111] rounded-[30px] text-white">
              Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
