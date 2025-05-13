import {
  Tabs,
  Tab,
  TabPanel,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import useTabsController from "../../libs/useTabsController";

const CustomTabs = () => {
  const { activeTab, data } = useTabsController();

  return (
    <>
      <div className=" w-full hidden lg:flex h-full">
        <Tabs
          value={activeTab}
          className="w-full flex flex-col"
          orientation="horizontal"
        >
          <div className="w-full">
            <TabsHeader className="w-full flex justify-center flex-row p-4">
              {data.map(({ id, title }) => (
                <Tab className="h-[3rem]" key={id} value={id}>
                  {title}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <div className="w-full">
            <TabsBody>
              {data.map(({ id, component }) => (
                <TabPanel key={id} value={id} className="py-0">
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </div>
        </Tabs>
      </div>
      <div className=" w-full flex lg:hidden h-full">
        <Tabs value={activeTab} className="w-full" orientation="horizontal">
          <div className="w-full ">
            <TabsHeader>
              {data.map(({ id, title }) => (
                <Tab className="h-18" key={id} value={id}>
                  {title}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <div className="w-full">
            <TabsBody>
              {data.map(({ id, component }) => (
                <TabPanel key={id} value={id} className="py-0">
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default CustomTabs;
