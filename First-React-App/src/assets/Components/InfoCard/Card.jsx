export default function Card() {
  return (
    <>
      {/* <h1 classNameName="text-6xl font-extrabold text-center text-red-700 p-10">
        End-to-end shopping experience!
      </h1> */}
      <div className="bg-black w-60 h-96 rounded overflow-hidden text-white ml-4 mb-10 ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Heading...</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}
