import React from "react";
import moment from "moment";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { getOrders } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  SelectBox,
  List,
} from "components";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import { PieDemoData, COLORS } from "./chartData.js";

const OrderDetailsPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();

  const dates = apiData?.results?.map((x) => {
    return {
      ...x,
      created_at: moment(x?.created_at).format("MMMM"),
    };
  });
  const groupByDate = _.groupBy(dates, "created_at");
  const PieData = [
    // { name: "January", c0: _.sumBy(groupByDate["January"], "estimated_price_total") },
    { name: "January", c0: 10 },
    { name: "February", c0: 15 },
    { name: "March", c0: 30 },
    {
      name: "April",
      c0: _.sumBy(groupByDate["April"], "estimated_price_total"),
    },
    { name: "May", c0: _.sumBy(groupByDate["May"], "estimated_price_total") },
    { name: "June", c0: _.sumBy(groupByDate["June"], "estimated_price_total") },
    { name: "July", c0: _.sumBy(groupByDate["July"], "quantity") },
    {
      name: "August",
      c0: _.sumBy(groupByDate["August"], "estimated_price_total"),
    },
    {
      name: "September",
      c0: _.sumBy(groupByDate["September"], "estimated_price_total"),
    },
    {
      name: "October",
      c0: _.sumBy(groupByDate["October"], "estimated_price_total"),
    },
    {
      name: "November",
      c0: _.sumBy(groupByDate["November"], "estimated_price_total"),
    },
    {
      name: "December",
      c0: _.sumBy(groupByDate["December"], "estimated_price_total"),
    },
  ];
  function callApi() {
    const req = {};
    getOrders(req)
      .then((res) => {
        setapiData(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/accountdetails");
  }
  function handleNavigate2() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-black_900 font-spacegrotesk items-center justify-end mx-[auto] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <Column className="w-[88%]">
          <header className="w-[100%]">
            <Row className="w-[100%]">
              <Img
                src="images/img_group.png"
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] my-[3px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Text onClick={handleNavigate2} className="common-pointer font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                Stocky
              </Text>
              <Text
                className="common-pointer font-medium lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[259px] xl:ml-[297px] ml-[334px] 3xl:ml-[401px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                onClick={handleNavigate2}
              >
                Desktop
              </Text>
              <Stack className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[30%]">
                <Text className="absolute font-medium right-[0] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 top-[0] w-[auto]">
                  Order Details
                </Text>
                <Column className="absolute w-[100%]">
                  <Text
                    className="common-pointer font-medium lg:mr-[104px] xl:mr-[119px] mr-[134px] 3xl:mr-[160px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                    onClick={handleNavigate1}
                  >
                    Account Details
                  </Text>
                  <Line className="bg-cyan_400 h-[2px] lg:ml-[124px] xl:ml-[157px] ml-[160px] 3xl:ml-[192px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[41%]" />
                </Column>
              </Stack>
              <Img
                src="images/hanuman.jpg"
                className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[261px] xl:ml-[298px] ml-[336px] 3xl:ml-[403px] rounded-radius50 w-[auto]"
                alt="ProfileImgLarg"
              />
            </Row>
          </header>
          <Text className="font-medium lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_50 w-[auto]">
            Order Details
          </Text>
          <Column className="bg-gray_901 font-opensans items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius12 w-[100%]">
            <Row className="items-center justify-between w-[99%]">
              <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]">
                Orders
              </Text>
              <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]">
                Numbers is Quantity of ordered stock.
              </Text>
            </Row>
            <div className="bg-cover bg-repeat lg:h-[200px] xl:h-[229px] h-[257px] 2xl:h-[258px] 3xl:h-[309px] 3xl:p-[49px] lg:w-[199px] xl:w-[100%] w-[257px] 3xl:w-[308px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={PieData} dataKey="c0" nameKey="name" label>
                    {PieData.map((_, index) => (
                      <Cell
                        key={"cell_" + index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <RechartsLegend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Column>
          <Text className="font-medium lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_50 w-[auto]">
            Purchased Stock
          </Text>
          <List
            className="font-spacegrotesk lg:gap-[21px] xl:gap-[24px] gap-[28px] 3xl:gap-[33px] grid grid-cols-4 min-h-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
            orientation="horizontal"
          >
            {apiData?.results?.map((apiDataResultsEle) => {
              return (
                <Column className="bg-gray_901 lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius12 w-[100%]">
                  <Row className="items-center w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      ISIN Number :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.isin}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Title :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.isin_title}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Date of order :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[100%]">
                      {moment(apiDataResultsEle?.created_at).format("DD/MM/YYYY h:mm:A")}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Estimated Price :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                    €{apiDataResultsEle?.estimated_price}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Quantity :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.quantity}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Total Price :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                    €{apiDataResultsEle?.estimated_price_total}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Venue :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.venue}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Status :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.status}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Executed Price :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.executed_price}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Total Executed Price :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiDataResultsEle?.executed_price_total}
                    </Text>
                  </Row>
                </Column>
              );
            })}
          </List>
        </Column>
        <footer className="bg-gray_900 xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
          <Row className="justify-center mx-[auto] lg:my-[21px] xl:my-[24px] my-[27px] 3xl:my-[32px] w-[73%]">
            <Column className="lg:pr-[145px] xl:pr-[166px] pr-[187px] 3xl:pr-[224px] w-[38%]">
              <Row className="items-center w-[81%]">
                <Img
                  src="images/img_group.png"
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  alt="Group"
                />
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Stocky
                </Text>
              </Row>
              <Text className="font-normal ml-[2px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Connect on
              </Text>
              <Img
                src="images/img_group94.png"
                className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] ml-[3px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[54%]"
                alt="Group94"
              />
              <Text className="font-normal ml-[3px] lg:mt-[52px] xl:mt-[59px] mt-[67px] 3xl:mt-[80px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 w-[auto]">
                2022 Stocky all rights reserved
              </Text>
            </Column>
            <Column className="lg:mb-[59px] xl:mb-[67px] mb-[76px] 3xl:mb-[91px] lg:pr-[145px] xl:pr-[166px] pr-[187px] 3xl:pr-[224px] w-[25%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]">
                Company
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                About
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Careers
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Writers
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Blog
              </Text>
            </Column>
            <Column className="mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] lg:pr-[145px] xl:pr-[166px] pr-[187px] 3xl:pr-[224px] w-[25%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]">
                Contact
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Advertise
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Market
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                News letter
              </Text>
            </Column>
            <Column className="mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] w-[12%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]">
                Help
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                FAQs
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Terms & Conditions
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                Privacy Policy
              </Text>
            </Column>
          </Row>
        </footer>
      </Column>

      <ToastContainer />
    </>
  );
};

export default OrderDetailsPage;
