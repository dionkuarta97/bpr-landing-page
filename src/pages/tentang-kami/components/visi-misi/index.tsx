import Typography from "@material-tailwind/react/components/Typography";
import visiImage from "../../../../assets/image/visi.png";
import useGetVisiMisi from "../../../../hooks/useGetVisiMisi";
const VisiMisi = () => {
  const { data } = useGetVisiMisi();
  return (
    <div className="flex lg:flex-row flex-col py-10 w-full">
      <div className="w-full lg:w-1/2 h-full">
        <img src={visiImage} alt="visi" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-8 h-full">
        <Typography
          className="text-primary-dark lg:text-4xl text-2xl"
          placeholder="sticky"
          variant="h2"
        >
          Visi
        </Typography>
        <Typography
          className="text-primary-dark lg:text-2xl text-medium"
          placeholder="sticky"
          variant="paragraph"
        >
          {data?.visi}
        </Typography>
        <Typography
          className="text-primary-dark lg:text-4xl text-2xl"
          placeholder="sticky"
          variant="h2"
        >
          Misi
        </Typography>
        <Typography
          className="text-primary-dark lg:text-2xl text-medium"
          placeholder="sticky"
          variant="paragraph"
        >
          {data?.misi.map((item, index) => (
            <div key={item.id}>
              <Typography
                className="text-primary-dark  gap-1 my-2 lg:text-2xl text-medium"
                placeholder="sticky"
                variant="paragraph"
              >
                {index + 1}. {item.judul}
              </Typography>
              <Typography
                className="text-gray-500 lg:text-xl text-sm"
                placeholder="sticky"
                variant="paragraph"
              >
                {item.deskripsi}
              </Typography>
            </div>
          ))}
        </Typography>
      </div>
    </div>
  );
};

export default VisiMisi;
