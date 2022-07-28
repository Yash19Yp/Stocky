import React from "react";
import ModalProvider from "react-modal";

import { post, postMessages, getTrade } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import useForm from "simple-react-hook-form";
import * as BuyStock from "constants/BuyStock";
import { ToastContainer, toast } from "react-toastify";
import { Column, Text, Input, Datepicker, Row, Button } from "components";
import { useNavigate } from "react-router-dom";

const BuyPopupModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const form = useForm({ isin: "", expires_at: "", quantity: "", venue: "" });
  const [apiData2, setapiData2] = React.useState();
  const navigate = useNavigate();
  function callApi2(data) {
    console.log("data",data?.results)
    const req = {
      data: new URLSearchParams({
        Body: `${data?.results?.quantity} stocks of isin ${data?.results?.isin} at Rs. ${data?.results?.estimated_price} are bought successfully.
      Order ID: ${data?.results?.id}
      Total Price: Rs. ${data?.results?.estimated_price_total}`,
        From: "+17752426669",
        To: "+918000464745",
      }),
    };
    postMessages(req)
      .then((res) => {
        setapiData2(res);
        toast.success("Success");
        props.onRequestClose()
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi1(data) {
    const req = { data: { ...data, side: BuyStock.Side } };
    post(req)
      .then((res) => {
        setapiData1(res);

        callApi2(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Cannot purchase this Stock.");
      });
  }
  function callApi() {
    const req = { params: { isin: props?.isin } };
    getTrade(req)
      .then((res) => {
        setapiData(res);
        form.handleChange("price", res?.results?.[0]?.p);
        form.handleChange("volumn", res?.results?.[0]?.v);
        form.handleChange("isin", res?.results?.[0]?.isin);
        form.handleChange("venue", res?.results?.[0]?.mic);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  React.useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <ModalProvider
        className="m-[auto] w-[29%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-gray_901 items-center lg:mb-[261px] xl:mb-[298px] mb-[336px] 3xl:mb-[403px] lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius12 w-[100%]">
            <Text className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_50 w-[auto]">
              Buy Stocks
            </Text>
            <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[96%]">
              {apiData?.results?.map((apiData2ResultsEle) => {
                return (
                  <div>
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      ISIN Number
                    </Text>
                    <Input
                      disabled
                      value={apiData2ResultsEle?.isin}
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="Group10198"
                      placeholder="Enter ISIN Number"
                    ></Input>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Price
                    </Text>
                    <Input
                      disabled
                      value={apiData2ResultsEle?.p}
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="Group10198"
                      placeholder="Price"
                    ></Input>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Volume
                    </Text>
                    <Input
                      disabled
                      value={apiData2ResultsEle?.v}
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="Group10198"
                      placeholder="Volume"
                    ></Input>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Venue
                    </Text>
                    <Input
                      disabled
                      value={apiData2ResultsEle?.mic}
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="Group10198"
                      placeholder="Venue"
                    ></Input>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Expiry Date
                    </Text>
                    <Datepicker
                      className="placeholder:bg-transparent bg-transparent font-medium mt-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      onChange={(e) => {
                        form.handleChange("expires_at", e);
                      }}
                      value={form?.values?.expires_at}
                      name="Group10198"
                      placeholder="Expiry Date"
                    ></Datepicker>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Side
                    </Text>
                    <Input
                      disabled
                      value={BuyStock.Side}
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="Group10198"
                      placeholder="Side"
                    ></Input>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]">
                      Quantity
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-medium p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      onChange={(e) => {
                        form.handleChange("quantity", e.target.value);
                      }}
                      value={form?.values?.quantity}
                      name="Group10198"
                      placeholder="Quantity"
                      size="sm"
                    ></Input>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Button
                        className="common-pointer font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center w-[48%]"
                        onClick={props.onRequestClose}
                        size="md"
                        variant="OutlineBluegray901"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="common-pointer font-medium lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center w-[48%]"
                        onClick={() => {
                          form.handleSubmit(callApi1);
                        }}
                        size="md"
                      >
                        Buy now
                      </Button>
                    </Row>
                  </div>
                );
              })}
            </Column>
          </Column>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default BuyPopupModal;
