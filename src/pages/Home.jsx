import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <div className="my-6">
        <div className="mb-5">
          {/* Banner */}
          <div className="h-[36rem] w-full relative ">
            <img
              src="https://images.pexels.com/photos/3778546/pexels-photo-3778546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover "
            />

            <div className="absolute h-full w-full top-0 ">
              <div className="w-1/2 h-full flex flex-col justify-center pl-24">
                <h1 className="font-playfair text-[2.5rem] text-white font-bold self-center">
                  Everyone looks good in a suit. Even losers.
                </h1>
                <p className="text-[1.5rem] font-bold pb-2">
                  Remember who you are.
                </p>
                <div className="flex gap-3">
                  <div className="btn rounded-none">Shop Suits</div>
                  <div className="btn rounded-none">Find your fits</div>
                </div>
              </div>
            </div>
          </div>
          {/* Banner */}
        </div>

        <h3 className="font-semibold text-4xl uppercase pb-5">
          Recommended for you
        </h3>
        <Card />
      </div>
    </>
  );
};
export default Home;
