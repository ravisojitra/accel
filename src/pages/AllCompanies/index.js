import React from "react";

import { Img, Text, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";
import { getCompanies } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllCompaniesPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};

    getCompanies(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Can not retrieve companies.");
      });
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[270px]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-indigo_900 flex flex-col h-[1841px] md:h-[auto] sm:h-[auto] items-start justify-start px-[12px] py-[10px] w-[100%]">
              <div className="flex flex-col h-[100%] items-start justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start pb-[16px] pl-[12px] pt-[20px] w-[246px]">
                  <Img
                    src="images/img_image1.png"
                    className="h-[34px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[169px]"
                    alt="imageOne"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                  <Text
                    className="bg-black_900_26 font-semibold px-[12px] py-[8px] rounded-radius8 text-left text-white_A700 w-[246px]"
                    as="h5"
                    variant="h5"
                  >
                    All Companies
                  </Text>
                  <div
                    className="common-pointer flex flex-col items-start justify-start px-[12px] py-[8px] w-[246px]"
                    onClick={() => navigate("/interestsreceivedone")}
                  >
                    <Text
                      className="font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Interests Received
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start px-[12px] py-[8px] w-[246px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Request Support
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[100%]">
                <Text
                  className="bg-cyan_50 flex font-normal h-[24px] items-center justify-center not-italic rounded-radius50 text-center text-cyan_A700 w-[24px]"
                  as="h4"
                  variant="h4"
                >
                  v
                </Text>
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Vishal Virani
                </Text>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-[28px] items-start justify-start pb-[56px] pt-[24px] md:px-[20px] sm:px-[20px] px-[32px] md:self-stretch sm:self-stretch w-[100%]">
          <div className="flex flex-col items-start justify-start w-[100%]">
            <Img
              src="images/img_screenshot20221012.png"
              className="h-[617px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[1098px]"
              alt="Screenshot20221012"
            />
          </div>
          <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="flex flex-row gap-[16px] items-start justify-end max-w-[1108px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="flex gap-[8px] w-[240px]"
                name="Search"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[8px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#969da6"
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder8"
                size="smSrc"
                variant="srcOutlineGray200"
              ></Input>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[80px] text-[14px] text-bluegray_800 text-center w-[auto]"
                variant="OutlineGray200"
              >
                Search
              </Button>
            </div>
            <List
              className="flex-col gap-[10px] grid items-start w-[100%]"
              orientation="vertical"
            >
              {apiData?.map((apiDataResponseEle, index) => {
                return (
                  <React.Fragment key={`apiDataResponseEle${index}`}>
                    <div
                      className="common-pointer bg-white_A700 border border-gray_200 border-solid flex flex-1 flex-col items-start justify-start my-[0] p-[8px] w-[100%]"
                      onClick={() => navigate("")}
                    >
                      <div className="flex md:flex-col sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                        <Img
                          src={apiDataResponseEle?.["company_image_url"]}
                          className="h-[80px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[80px]"
                          alt="ocHKn9vOne"
                        />
                        <div className="flex flex-1 md:flex-col sm:flex-col flex-row gap-[32px] items-center justify-start p-[10px] md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-1 flex-col gap-[3px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                            <Text
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              {apiDataResponseEle?.["company_name"]}
                            </Text>
                            <Text
                              className="font-normal leading-[20.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[924px] not-italic text-gray_700 text-left"
                              as="h5"
                              variant="h5"
                            >
                              A full-stack construction material aggregator,
                              leveraging technology to provide transparency,
                              traceability, and an overall improved procurement
                              experience for both supply and demand.
                            </Text>
                          </div>
                          <Img
                            src="images/img_arrowright_bluegray_700.svg"
                            className="common-pointer h-[20px] w-[20px]"
                            onClick={() => navigate("/allcompaniesdetail")}
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </List>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AllCompaniesPage;
