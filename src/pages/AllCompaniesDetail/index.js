import React from "react";

import { Img, Text, Button } from "components";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const AllCompaniesDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[270px]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-indigo_900 flex flex-col h-[1814px] md:h-[auto] sm:h-[auto] items-start justify-start px-[12px] py-[10px] w-[100%]">
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
                    className="common-pointer bg-black_900_26 font-semibold px-[12px] py-[8px] rounded-radius8 text-left text-white_A700 w-[246px]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/allcompanies")}
                  >
                    All Companies
                  </Text>
                  <div className="flex flex-col items-start justify-start px-[12px] py-[8px] w-[246px]">
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
        <div className="flex flex-1 flex-col gap-[28px] h-[100%] items-start justify-start md:px-[20px] sm:px-[20px] px-[32px] py-[24px] w-[100%]">
          <Img
            src="images/img_ib074z21.png"
            className="h-[200px] sm:h-[auto] object-cover rounded-radius12 w-[100%]"
            alt="ib074zTwentyOne"
          />
          <div className="flex flex-row gap-[2px] items-center justify-start w-[auto]">
            <Text
              className="font-normal not-italic text-gray_700 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              All Companies
            </Text>
            <Img
              src="images/img_arrowright_bluegray_700.svg"
              className="h-[14px] w-[14px]"
              alt="arrowright"
            />
            <Text
              className="font-semibold text-bluegray_800 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              DhiWise
            </Text>
          </div>
          <div className="bg-white_A700 border border-gray_200 border-solid flex md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-start p-[10px] rounded-radius12 w-[100%]">
            <Img
              src="images/img_niibrjp1.png"
              className="h-[192px] md:h-[auto] sm:h-[auto] object-cover w-[192px]"
              alt="nIIBRJPOne"
            />
            <div className="flex flex-1 flex-col gap-[3px] h-[100%] items-start justify-center w-[100%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                DhiWise
              </Text>
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[129px] text-[14px] text-center text-white_A700 w-[auto]">
                Show Website
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 border border-gray_200 border-solid flex flex-col gap-[10px] items-start justify-start p-[32px] sm:px-[20px] rounded-radius12 w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Founders
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start sm:w-[100%] w-[auto]">
              <div className="bg-gray_100 flex flex-col gap-[10px] items-start justify-start p-[10px] rounded-radius12 w-[255px]">
                <Img
                  src="images/img_copyofceovishal.png"
                  className="h-[235px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[235px]"
                  alt="CopyofCEOVishal"
                />
                <div className="flex flex-col items-start justify-start p-[10px] w-[100%]">
                  <Text
                    className="text-indigo_900 text-left uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Vishal Virani
                  </Text>
                </div>
              </div>
              <div className="bg-gray_100 flex flex-col gap-[10px] items-start justify-start p-[10px] rounded-radius12 w-[255px]">
                <Img
                  src="images/img_copyofctorahuk.png"
                  className="h-[235px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[235px]"
                  alt="CopyofCTORahuk"
                />
                <div className="flex flex-col items-start justify-start p-[10px] w-[100%]">
                  <Text
                    className="text-indigo_900 text-left uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Rahul Shingala
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[28px] h-[822px] md:h-[auto] sm:h-[auto] items-start justify-start w-[100%]">
            <Text
              className="font-semibold text-gray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Pitch Video
            </Text>
            <div className="h-[678px] w-[100%]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=U34V7ziWvDc&ab_channel=DhiWise"
                controls
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex flex-row gap-[12px] items-start justify-center p-[10px] w-[100%]">
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[91px] text-[14px] text-center text-white_A700 w-[auto]">
                Previous
              </Button>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[167px] text-[14px] text-bluegray_800 text-center w-[auto]"
                variant="OutlineGray200_1"
              >
                View All Companies
              </Button>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[64px] text-[14px] text-bluegray_800 text-center w-[auto]"
                variant="OutlineGray200_1"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCompaniesDetailPage;
