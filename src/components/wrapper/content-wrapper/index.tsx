import { Outlet } from "react-router";
import useContentWrapperContoller from "./libs/useContentWrapperContoller";
import { Tab } from "@material-tailwind/react";
import { TabPanel, TabsBody, TabsHeader } from "@material-tailwind/react";
import { Tabs } from "@material-tailwind/react";
import Typography from "@material-tailwind/react/components/Typography";

const ContentWrapper = () => {
  const { menu, navigate, activeTab } = useContentWrapperContoller();

  return (
    <div className="flex  gap-4 min-h-screen w-full bg-white lg:px-[15vw] lg:py-10 p-4 bg-white w-full">
      <Tabs
        value={activeTab}
        className="w-full min-h-screen flex gap-4 lg:flex-row flex-col"
      >
        <div className="w-full lg:w-1/5">
          <TabsHeader className="w-full flex lg:justify-start lg:flex-col flex-row p-4">
            {menu &&
              menu.map(({ id, label, path }) => (
                <Tab
                  onClick={() => navigate(path)}
                  className="h-[3rem]  lg:justify-start"
                  key={id}
                  value={id || ""}
                >
                  <Typography
                    placeholder="sticky"
                    variant="paragraph"
                    className={` ${
                      activeTab === id
                        ? "text-primary-dark font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {label}
                  </Typography>
                </Tab>
              ))}
          </TabsHeader>
        </div>
        <div className="w-full lg:w-4/5">
          <TabsBody>
            <Outlet />
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default ContentWrapper;
