import React from "react";

import { useNavigate } from "react-router-dom";
import { get } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import BuyPopupModal from "modals/BuyPopup";
import { ToastContainer, toast } from "react-toastify";
import { Column, Row, Img, Text, Line, Grid, List, Button } from "components";

const DesktopPage = () => {
  const [apiData4, setapiData4] = React.useState();
  React.useEffect(() => {
    callApi4();
  }, []);
  const navigate = useNavigate();
  const [isOpenBuyPopupModal, setBuyPopupModal] = React.useState(false);
  const [isin, setIsin] = React.useState();
  function callApi4() {
    const req = {};
    get(req)
      .then((res) => {
        setapiData4(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load Stocks.");
      });
  }
  function handleNavigate5() {
    navigate("/orderdetails");
  }
  function handleNavigate6() {
    navigate("/accountdetails");
  }
  function handleOpenBuyPopupModal(isin) {
    setIsin(isin);
    setBuyPopupModal(true);
  }
  function handleCloseBuyPopupModal() {
    setBuyPopupModal(false);
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
              <Text className="font-medium lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                Stocky
              </Text>
              <Column className="items-center lg:ml-[259px] xl:ml-[297px] ml-[334px] 3xl:ml-[401px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[6%]">
                <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
                  Desktop
                </Text>
                <Line className="bg-cyan_400 h-[2px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[96%]" />
              </Column>
              <Text
                className="common-pointer font-medium lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                onClick={handleNavigate6}
              >
                Account Details
              </Text>
              <Text
                className="common-pointer font-medium lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                onClick={handleNavigate5}
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
          <Text className="font-medium ml-[2px] lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px] text-bluegray_50 w-[auto]">
            Stocks
          </Text>

          <Grid className="lg:gap-[21px] xl:gap-[24px] gap-[28px] 3xl:gap-[33px] grid grid-cols-4 lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[100%]">
            {apiData4?.results?.map((apiData4ResultsEle) => {
              return (
                <Column className="bg-gray_901 lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius12 w-[100%]">
                  <Row className="items-center w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Name :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiData4ResultsEle?.name}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Title :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiData4ResultsEle?.title}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      ISIN Number :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiData4ResultsEle?.isin}
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Type :
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      {apiData4ResultsEle?.type}
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <List
                      className="gap-[0] min-h-[auto] lg:pr-[29px] xl:pr-[33px] pr-[38px] 3xl:pr-[45px] w-[68%]"
                      orientation="vertical"
                    >
                      <Text className="font-medium xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]">
                        Venue Details
                      </Text>
                      {apiData4ResultsEle?.venues?.map((venueDetail) => {
                        return <div>
                          {" "}
                          <Row className="items-center xl:my-[3px] lg:my-[3px] my-[4px] w-[100%]">
                            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[100%]">
                              Name :
                            </Text>
                            <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[100%]">
                              {venueDetail?.name}
                            </Text>
                          </Row>
                          <Row className="items-center xl:my-[3px] lg:my-[3px] my-[4px] w-[100%]">
                            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                              Title :
                            </Text>
                            <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                            {venueDetail?.title}
                            </Text>
                          </Row>
                          <Row className="items-center xl:my-[3px] lg:my-[3px] my-[4px] w-[69%]">
                            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                              Mic :
                            </Text>
                            <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                            {venueDetail?.mic}
                            </Text>
                          </Row>
                          <Row className="items-center xl:my-[3px] lg:my-[3px] my-[4px] w-[74%]">
                            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                              Is Open :
                            </Text>
                            {venueDetail?.is_open ? 
                            <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-green_300 w-[auto]">
                            yes
                            </Text> : <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-red-500 w-[auto]">
                            No
                            </Text> }
                          </Row>
                          <Row className="items-center xl:my-[3px] lg:my-[3px] my-[4px] w-[89%]">
                            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                              Tradeable :
                            </Text>
                            {venueDetail?.tradable ? 
                            <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-green_300 w-[auto]">
                            yes
                            </Text> : <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-red-500 w-[auto]">
                            No
                            </Text> }
                          </Row>
                          <Row className="items-center xl:my-[3px] lg:my-[3px] my-[4px] w-[89%]">
                            <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                              Currency :
                            </Text>
                            <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                            {venueDetail?.currency}
                            </Text>
                          </Row>
                        </div>
                      })}
                    </List>
                    <Button
                      className="common-pointer font-medium lg:mt-[155px] xl:mt-[177px] mt-[200px] 3xl:mt-[240px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center w-[32%]"
                      onClick={() =>
                        handleOpenBuyPopupModal(apiData4ResultsEle?.isin)
                      }
                    >
                      Buy now
                    </Button>
                  </Row>
                </Column>
              );
            })}
          </Grid>
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
      {isOpenBuyPopupModal ? (
        <BuyPopupModal
          isin={isin}
          isOpen={isOpenBuyPopupModal}
          onRequestClose={handleCloseBuyPopupModal}
        />
      ) : null}
    </>
  );
};

export default DesktopPage;
