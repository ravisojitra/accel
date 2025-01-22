import React from "react";

import { Text, Input, Button, Line } from "components";

const LoginPage = () => {

  return (
    <>
      <div className="bg-indigo_900 flex flex-col font-inter gap-[20px] items-center justify-center mx-[auto] px-[20px] py-[283px] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start md:px-[20px] sm:px-[20px] w-[auto]">
          <Text
            className="font-bold text-left text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Atoms Demo Day
          </Text>
        </div>
        <div className="bg-white_A700 flex flex-col items-start justify-start p-[48px] md:px-[20px] sm:px-[20px] rounded-radius12 sm:w-[100%] w-[429px]">
          <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[333px]">
            <Text
              className="font-bold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Log in to Atoms Demo Day
            </Text>
            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Please enter your email address
              </Text>
              <Input
                className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                wrapClassName="w-[100%]"
                type="email"
                name="FrameSeventyTwo"
                placeholder="Enter your email"
              ></Input>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Please enter your password
              </Text>
              <Input
                className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                wrapClassName="w-[100%]"
                type="password"
                name="FrameSeventyTwo One"
                placeholder="Enter your password"
              ></Input>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] text-[14px] text-center text-white_A700 w-[100%]"
           
            >
              Continue
            </Button>
            <Line className="bg-gray_100 h-[1px] w-[100%]" />
            <div
              className="common-pointer bg-white_A700 border border-gray_100 border-solid flex flex-col items-center justify-center px-[16px] py-[10px] rounded-radius8 w-[100%]"
       
            >
              <div
                className="common-pointer flex flex-row gap-[10px] items-center justify-center w-[auto]"
       
              >
                <Img
                  src="images/img_googleglogo.png"
                  className="h-[20px] md:h-[auto] sm:h-[auto] object-cover w-[20px]"
                  alt="GoogleGLogo"
                />
                <Text
                  className="font-semibold text-bluegray_800 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Continue with Google
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
