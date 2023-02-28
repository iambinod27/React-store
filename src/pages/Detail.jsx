import Card from "../components/Card";

const Detail = () => {
  return (
    <>
      <div className="grid grid-cols-2 py-10">
        <div className="grid grid-cols-2 gap-3 place-items-center self-start">
          <img
            src="https://cdn.bensherman.co.uk/upload/siteimages/amazon/0061281_170_a.jpg"
            alt="Suits"
            className="w-full h-[25rem] object-cover"
          />
          <img
            src="https://cdn.suitdirect.co.uk/upload/siteimages/large/0061695_170_b.jpg"
            alt="Another Suits"
            className="w-full h-[25rem] object-cover"
          />
        </div>
        <div className="w-5/6 mx-auto">
          {/* rating */}
          {/* <div className="flex items-center gap-2">
            <div className="rating rating-sm rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-1"
                checked
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-black mask mask-star-2 mask-half-2"
              />
            </div>
            <p className="text-[14px]">1088 reviews</p>
          </div> */}
          {/* rating */}

          <div>
            {/* Details */}
            <h3 className="text-3xl font-semibold">
              Navy Pink Bold Check Suit Jacket
            </h3>
            <div>NPR. 10,256.00</div>
            <div className="font-light">
              <p className="py-5">
                Wrinkle-resistant, easy-care cotton that simplifies your work
                day.{" "}
              </p>
              <p>
                Full-priced Icon Status styles are excluded from promotions.
                (They're worth it.)
              </p>
            </div>
            <p className="text-[12px] font-light py-5">
              Free shipping and Returns within Nepal.
            </p>
            {/* Details */}

            {/* Button */}
            <div className="flex gap-3 items-center">
              <div className="btn rounded-none">Add to cart </div>
              <div className="btn rounded-none bg-white text-gray-800 hover:text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-heart mr-1"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                Add to Wishlist
              </div>
            </div>
            {/* Button */}

            {/* Detail and Fabric */}
            <div className="font-light">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-none bg-base-100 rounded-box my-3"
              >
                <div className="collapse-title border-b">Details</div>
                <div className="collapse-content pt-4">
                  <p>
                    Day of the week is embroidered inside the waistband |
                    Branded interior button
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-none bg-base-100 rounded-box my-3"
              >
                <div className="collapse-title border-b">Fabric & Care</div>
                <div className="collapse-content pt-4">
                  <p>
                    Machine Wash Warm With Like Colors | Tumble Dry Low |
                    Non-Chlorine Bleach Only
                  </p>
                  <p>
                    Do Not Dry Clean: Dry Cleaning Can Compromise the Durability
                    of the Garment
                  </p>
                </div>
              </div>
            </div>
            {/* Detail and Fabric */}
          </div>
        </div>
      </div>

      <div className="">
        <h4 className="capitalize text-xl font-medium">You may also like:</h4>

        <div className="grid gap-10 grid-cols-4 my-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
export default Detail;
