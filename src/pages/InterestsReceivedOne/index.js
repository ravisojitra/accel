import React from "react";

import { Img, Text, Input, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const InterestsReceivedOnePage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[270px]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-indigo_900 flex flex-col h-[1044px] md:h-[auto] sm:h-[auto] items-start justify-start px-[12px] py-[10px] w-[100%]">
              <div className="flex flex-col h-[100%] items-start justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start pb-[16px] pl-[12px] pt-[20px] w-[246px]">
                  <Img
                    src="images/img_image1.png"
                    className="h-[34px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[169px]"
                    alt="imageOne"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start px-[12px] py-[8px] w-[246px]"
                    onClick={() => navigate("/allcompanies")}
                  >
                    <Text
                      className="font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      All Companies
                    </Text>
                  </div>
                  <Text
                    className="bg-black_900_26 font-semibold px-[12px] py-[8px] rounded-radius8 text-left text-white_A700 w-[246px]"
                    as="h5"
                    variant="h5"
                  >
                    Interests Received
                  </Text>
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
        <div className="flex flex-1 flex-col gap-[30px] h-[100%] items-start justify-start p-[30px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-end w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
              wrapClassName="flex gap-[8px] sm:w-[100%] w-[240px]"
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
            <SelectBox
              className="sm:flex-1 font-normal leading-[normal] not-italic px-[12px] text-[15px] text-gray_500 text-left sm:w-[100%] w-[13%]"
              placeholderClassName="text-gray_500"
              name="FrameFourteen"
              placeholder="Filter by"
              isSearchable={false}
              isMulti={false}
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    src="images/img_menu.svg"
                    className="h-[20px] mr-[6px] w-[20px]"
                    alt="menu"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[16px] w-[16px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
          </div>
          <List
            className="flex-col gap-[10px] grid h-[100%] items-start w-[100%]"
            orientation="vertical"
          >
            <div
              className="common-pointer bg-white_A700 border border-gray_200 border-solid flex flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-start justify-start my-[0] p-[8px] rounded-radius12 w-[100%]"
              onClick={() => navigate("/interestsreceived")}
            >
              <Img
                src="images/img_niibrjp1.png"
                className="h-[80px] md:h-[auto] sm:h-[auto] object-cover w-[80px]"
                alt="nIIBRJPOne"
              />
              <div className="flex flex-1 flex-row gap-[3px] h-[100%] items-center justify-between p-[10px] w-[100%]">
                <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    DhiWise
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    23 Interested Investors
                  </Text>
                </div>
                <Img
                  src="images/img_arrowright_bluegray_700.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-white_A700 border border-gray_200 border-solid flex flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-start justify-start my-[0] p-[8px] rounded-radius12 w-[100%]"
              onClick={() => navigate("/interestsreceived")}
            >
              <Img
                src="images/img_niibrjp1.png"
                className="h-[80px] md:h-[auto] sm:h-[auto] object-cover w-[80px]"
                alt="nIIBRJPOne One"
              />
              <div className="flex flex-1 flex-row gap-[3px] h-[100%] items-center justify-between p-[10px] w-[100%]">
                <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    DhiWise
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    23 Interested Investors
                  </Text>
                </div>
                <Img
                  src="images/img_arrowright_bluegray_700.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright One"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-white_A700 border border-gray_200 border-solid flex flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-start justify-start my-[0] p-[8px] rounded-radius12 w-[100%]"
              onClick={() => navigate("/interestsreceived")}
            >
              <Img
                src="images/img_niibrjp1.png"
                className="h-[80px] md:h-[auto] sm:h-[auto] object-cover w-[80px]"
                alt="nIIBRJPOne Two"
              />
              <div className="flex flex-1 flex-row gap-[3px] h-[100%] items-center justify-between p-[10px] w-[100%]">
                <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    DhiWise
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    23 Interested Investors
                  </Text>
                </div>
                <Img
                  src="images/img_arrowright_bluegray_700.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright Two"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default InterestsReceivedOnePage;
