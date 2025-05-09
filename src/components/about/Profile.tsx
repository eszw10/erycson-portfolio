import { FaArrowRight } from "react-icons/fa";
import { localizations } from "../../localization/localizations";
import Button from "../ui/Button";

const Profile = () => {
  const { profile } = localizations;

  return (
    <div className="mx-auto rounded-lg p-6 flex flex-col lg:flex-row items-center gap-8 lg:h-screen">
      <img
        src="/images/me.jpg"
        className="lg:h-[400px] lg:w-[400px] h-80 rounded-lg"
        alt="erycson"
      />
      <div className="flex flex-col text-justify xl:gap-6 gap-4 xl:w-[70%]">
        <p className="xl:mb-2 font-medium xl:text-5xl text-2xl underline underline-offset-8 decoration-primary">
          {profile.title}
        </p>
        <p>{profile.description}</p>
        <p>{profile.description2}</p>
        <Button
          variant="secondary"
          target="_blank"
          to="https://www.linkedin.com/in/erycson-zulkarnain-wijaya-a01a75169/"
          rel="noreferrer"
          className="flex items-center gap-2 self-start xl:mt-10"
        >
          <span>{profile.about}</span>
          <FaArrowRight className="group-hover:translate-x-1 smooth" />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
