import { useState } from "react";
import { useFormik } from "formik";
import Button from "../../../../components/UI/Button";
import TweetUploadMedia from "./TweetUploadMeda";
import TweetVisibility from "./TweetVisibility";

const TweetForm = () => {
  const [tweetVisibility, setTweetVisibility] = useState<string>("Everyone");

  const initialValues = {
    tweet: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async () => {},
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        placeholder="What's happening?"
        className="w-full p-2 placeholder:font-medium outline-none resize-none"
        {...formik.getFieldProps("tweet")}
        rows={3}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <TweetUploadMedia />
          <TweetVisibility
            tweetVisibility={tweetVisibility}
            setTweetVisibility={setTweetVisibility}
          />
        </div>
        <Button
          text="Tweet"
          onClickHandler={() => {}}
          px="px-6"
          py="py-[10px]"
        />
      </div>
    </form>
  );
};

export default TweetForm;
