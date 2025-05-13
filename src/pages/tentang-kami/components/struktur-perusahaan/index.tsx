import Typography from "@material-tailwind/react/components/Typography";
import useGetStruktur from "../../../../hooks/useGetStruktur";

const StrukturPerusahaan = () => {
  const { data } = useGetStruktur();
  return (
    <div className="grid grid-cols-1 py-10 items-stretch lg:grid-cols-3 gap-8">
      {data?.map((item) => (
        <div
          key={item.id}
          className="w-full rounded-lg overflow-hidden border border-gray-200 lg:pb-10 pb-4  h-auto relative"
        >
          <div
            className="flex w-full lg:h-[500px] h-48 rounded-lg overflow-hidden items-center justify-center lg:h-[calc(80vh-20rem)] relative"
            key={item.id}
          >
            <img
              className="absolute w-full z-0 h-full object-cover filter blur-lg"
              src={item.foto}
            />
            <img
              className="relative z-10 max-w-full max-h-full object-contain"
              src={item.foto}
              alt={item.nama || ""}
            />
          </div>
          <div className="flex flex-col gap-2 bg-white p-4 w-full mt-4 items-center justify-center">
            <Typography
              placeholder="sticky"
              className="text-primary-dark text-center lg:text-2xl text-medium"
              variant="paragraph"
            >
              {item.nama}
            </Typography>
            <Typography
              placeholder="sticky"
              className="text-[#2e7d32] text-center font-bold lg:text-2xl text-medium"
              variant="paragraph"
            >
              ({item.jabatan})
            </Typography>
            <Typography
              placeholder="sticky"
              className="text-gray-500 text-center lg:text-xl text-sm"
              variant="paragraph"
            >
              {item.quote}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrukturPerusahaan;
