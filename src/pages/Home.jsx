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

            <div className="absolute h-full w-full bg-slate-800  top-0 opacity-60">
              <div>
                <h1 className="font-playfair">
                  Everybody be cool, this is fashion robbery.
                </h1>
              </div>
            </div>
          </div>
          {/* Banner */}
        </div>

        <h3 className="font-semibold text-3xl uppercase">
          Recommended for you
        </h3>
        <Card />
      </div>
    </>
  );
};
export default Home;
