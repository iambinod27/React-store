import AccountBanner from "../components/AccountBanner";
import { AccountForm } from "../components/AccountForm";

const Account = () => {
  return (
    <>
      <div className="my-20">
        <div className="grid grid-cols-8 place-items-center">
          <div className="col-span-4 border-r">
            <div className="w-[66%] mx-auto">
              <div className="flex flex-col text-center gap-5">
                <AccountBanner />
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <AccountForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Account;
