import { useMemo, useState } from "react";
import Sejarah from "../components/sejarah";
import StrukturPerusahaan from "../components/struktur-perusahaan";
import VisiMisi from "../components/visi-misi";

const useTabsController = () => {
  const [activeTab, setActiveTab] = useState("sejarah");

  const data = useMemo(() => {
    return [
      {
        id: "sejarah",
        title: "Sejarah",
        component: <Sejarah />,
      },
      {
        id: "visi-misi",
        title: "Visi Misi",
        component: <VisiMisi />,
      },
      {
        id: "struktur-perusahaan",
        title: "Struktur Perusahaan",
        component: <StrukturPerusahaan />,
      },
    ];
  }, [activeTab]);

  return { activeTab, setActiveTab, data };
};

export default useTabsController;
