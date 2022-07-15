import { MdInsertPhoto } from "react-icons/md";

const TweetUploadMedia = () => {
  return (
    <>
      <label htmlFor="upload">
        <MdInsertPhoto
          className="text-primary-blue hover:opacity-90 transition-opacity cursor-pointer"
          size={24}
        />
      </label>
      <input id="upload" type="file" accept="image/*" className="hidden" />
    </>
  );
};

export default TweetUploadMedia;
