import Divider from "../../../../components/UI/Divider";
import TweetForm from "./TweetForm";
import Text from "../UI/Text";

const Tweet = () => {
  return (
    <div className="w-full rounded-xl shadow-sm bg-white p-5">
      <Text text="Tweet something" color="text-black" />
      <Divider />
      <TweetForm />
    </div>
  );
};

export default Tweet;
