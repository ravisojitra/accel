import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, ReactTable, Button, List } from "components";
import { createColumnHelper } from "@tanstack/react-table";

const InterestsReceivedModal = (props) => {
  const tableData = React.useRef([
    { rowname: "Ankush Jain", rowcompany: "Akto", rowtype: "Large Fund" },
    { rowname: "Ankita", rowcompany: "Akto.io", rowtype: "Large Fund" },
    { rowname: "Rahul Gupta", rowcompany: "Mymandir", rowtype: "Large Fund" },
    { rowname: "Sanjay Bhat", rowcompany: "Anar", rowtype: "Large Fund" },
    { rowname: "Phanindra Sama", rowcompany: "redBus", rowtype: "Large Fund" },
    { rowname: "Jesal Mehta", rowcompany: "Aavenir", rowtype: "Large Fund" },
    { rowname: "Akash Venkat", rowcompany: "Kluster", rowtype: "Large Fund" },
    { rowname: "Vivek", rowcompany: "4TiGO", rowtype: "Large Fund" },
    { rowname: "Baskar S", rowcompany: "amagi", rowtype: "Large Fund" },
    {
      rowname: "Tejas Gawande",
      rowcompany: "Chronicle",
      rowtype: "Large Fund",
    },
    {
      rowname: "Revant Bhate",
      rowcompany: "Mosaic Wellness",
      rowtype: "Large Fund",
    },
    {
      rowname: "Suman Gopalan",
      rowcompany: "Freshworks Inc.",
      rowtype: "Large Fund",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowname", {
      cell: (info) => (
        <Text
          className="font-semibold pb-[8px] pl-[16px] pt-[16px] text-gray_900 text-left"
          as="h5"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-start min-w-[395px] p-[10px] md:w-[100%] sm:w-[100%] w-[36%]">
          <Text
            className="text-black_900 text-left uppercase w-[auto]"
            as="h6"
            variant="h6"
          >
            Name
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowcompany", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[8px] pt-[16px] text-gray_700 text-left"
          as="h5"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-center min-w-[379px] pr-[10px] py-[10px] md:w-[100%] sm:w-[100%] w-[34%]">
          <Text
            className="text-black_900 text-left uppercase w-[auto]"
            as="h6"
            variant="h6"
          >
            Company
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowtype", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[7px] pt-[16px] text-gray_700 text-left"
          as="h5"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-center min-w-[385px] pr-[10px] py-[10px] md:w-[100%] sm:w-[100%] w-[35%]">
          <Text
            className="text-black_900 text-left uppercase w-[auto]"
            as="h6"
            variant="h6"
          >
            Type
          </Text>
        </div>
      ),
    }),
  ];

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[85%]"
        overlayClassName="bg-gray_900_54 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="md:h-[auto] sm:h-[auto] max-h-[97vh] overflow-y-auto md:w-[100%] sm:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start max-w-[1224px] mx-[auto] p-[32px] md:px-[20px] sm:px-[20px] rounded-radius8 w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Email Sent
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="common-pointer h-[40px] rounded-radius50 w-[40px]"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                </div>
                <div className="flex flex-col gap-[36px] items-start justify-start w-[100%]">
                  <div className="overflow-auto outline outline-[1px] outline-gray_200 rounded-radius8 w-[100%]">
                    <ReactTable
                      columns={column}
                      data={tableData.current}
                      rowClass={"border-bw"}
                      headerClass="bg-gray_50 border border-gray_200"
                    />
                  </div>
                  <div className="flex flex-row gap-[24px] items-start justify-center w-[100%]">
                    <div className="border border-gray_200_7e border-solid flex flex-col h-[36px] md:h-[auto] sm:h-[auto] items-center justify-center p-[10px] rounded-radius8 w-[64px]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowleft"
                      />
                    </div>
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                      <Button
                        className="cursor-pointer font-semibold h-[36px] leading-[normal] text-[14px] text-center text-indigo_900 w-[36px]"
                        variant="FillDeeppurple50"
                      >
                        1
                      </Button>
                      <div className="flex flex-col h-[36px] md:h-[auto] sm:h-[auto] items-center justify-center p-[10px] w-[36px]">
                        <Text
                          className="font-semibold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="border border-gray_200 border-solid flex flex-col h-[36px] md:h-[auto] sm:h-[auto] items-center justify-center p-[10px] rounded-radius8 w-[64px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Feedback Received
                </Text>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start outline outline-[1px] outline-gray_200 rounded-radius8 w-[100%]">
                    <List
                      className="bg-gray_50 border-b-[1px] border-gray_200 border-solid sm:flex-col flex-row gap-[10px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start px-[16px] py-[10px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Text
                          className="text-black_900 text-left uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Name
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Text
                          className="text-black_900 text-left uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Company
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <Text
                          className="text-black_900 text-left uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feedback
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="gap-[10px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start p-[16px] w-[100%]">
                        <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Peeyush Ranjan
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_700 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Google
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_700 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Love it, reminds me of a startup I had been part of
                            20 years ago :)
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default InterestsReceivedModal;
