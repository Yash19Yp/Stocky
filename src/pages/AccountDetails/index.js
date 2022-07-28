import React from "react";

import { Column, Row, Img, Text, Line, Input } from "components";
import { useNavigate } from "react-router-dom";
import { get1 } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AccountDetailsPage = () => {
  const [apiData3, setapiData3] = React.useState();
  React.useEffect(() => {
    callApi3();
  }, []);
  const navigate = useNavigate();

  function callApi3() {
    const req = {};
    get1(req)
      .then((res) => {
        setapiData3(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate3() {
    navigate("/orderdetails");
  }
  function handleNavigate4() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-black_900 font-spacegrotesk items-center justify-end mx-[auto] lg:pt-[23px] xl:pt-[26px] pt-[30px] 3xl:pt-[36px] w-[100%]">
        <header className="w-[88%]">
          <Row className="w-[100%]">
            <Img
              src="images/img_group.png"
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] my-[3px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="Group"
            />
            <Text onClick={handleNavigate4} className="common-pointer font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
              Stocky
            </Text>
            <Text
              className="common-pointer font-medium lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[259px] xl:ml-[297px] ml-[334px] 3xl:ml-[401px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
              onClick={handleNavigate4}
            >
              Desktop
            </Text>
            <Column className="items-center lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[11%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
                Account Details
              </Text>
              <Line className="bg-cyan_400 h-[2px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]" />
            </Column>
            <Text
              className="common-pointer font-medium lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
              onClick={handleNavigate3}
            >
              Order Details
            </Text>
            <Img
              src="images/hanuman.jpg"
              className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[261px] xl:ml-[298px] ml-[336px] 3xl:ml-[403px] rounded-radius50 w-[auto]"
              alt="ProfileImgLarg"
            />
          </Row>
        </header>
        <Column className="lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] w-[38%]">
          <Row className="items-center justify-between w-[100%]">
            <Column className="w-[49%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                First Name
              </Text>
              <Input
                value={apiData3?.results?.firstname}
                className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="mt-[4px] w-[100%]"
                name="Group10198"
                placeholder="Jenny"
                size="sm"
              ></Input>
            </Column>
            <Column className="w-[49%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                Last Name
              </Text>
              <Input
                value={apiData3?.results?.lastname}
                className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="mt-[4px] w-[100%]"
                name="Group10198"
                placeholder="Wilson"
                size="sm"
              ></Input>
            </Column>
          </Row>
          <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
            Email
          </Text>
          <Input
            value={apiData3?.results?.email}
            className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="mt-[4px] w-[100%]"
            name="email"
            placeholder="jenny@gmail.com"
            size="sm"
          ></Input>
          <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
            Phone number
          </Text>
          <Input
            value={apiData3?.results?.phone}
            className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="mt-[4px] w-[100%]"
            name="Group10198"
            placeholder="+1 432 2322 333"
            size="sm"
          ></Input>
          <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
            Mode
          </Text>
          <Input
            value={apiData3?.results?.mode}
            className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="mt-[4px] w-[100%]"
            name="Group10198"
            placeholder="Mode"
            size="sm"
          ></Input>
          <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
            Balance
          </Text>
          <Input
            value={apiData3?.results?.balance}
            className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="mt-[4px] w-[100%]"
            name="price"
            placeholder="$43443"
            size="sm"
          ></Input>
          <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
            Cash to invest
          </Text>
          <Input
            value={apiData3?.results?.cash_to_invest}
            className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="mt-[4px] w-[100%]"
            name="price"
            placeholder="$43443"
            size="sm"
          ></Input>
          <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
            Amount bought intraday
          </Text>
          <Input
            value={apiData3?.results?.amount_bought_intraday}
            className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="mt-[4px] w-[100%]"
            name="price"
            placeholder="$43443"
            size="sm"
          ></Input>
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

export default AccountDetailsPage;
