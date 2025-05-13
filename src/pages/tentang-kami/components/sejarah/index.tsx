import Typography from "@material-tailwind/react/components/Typography";
import sejarah from "../../../../assets/image/sejarah.png";
import useGetProfile from "../../../../hooks/useGetProfile";
const Sejarah = () => {
  const { data } = useGetProfile();
  return (
    <div className="flex lg:flex-row flex-col py-10 w-full">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 h-full">
        <Typography
          className="text-primary-dark lg:text-4xl text-2xl"
          placeholder="sticky"
          variant="h2"
        >
          Sejarah
        </Typography>
        <Typography
          className="text-primary-dark lg:text-2xl text-medium"
          placeholder="sticky"
          variant="paragraph"
        >
          {data?.sejarah}
        </Typography>
      </div>

      <div className="w-full lg:w-1/2 h-full">
        <img src={sejarah} alt="sejarah" />
      </div>
    </div>
  );
};

export default Sejarah;
