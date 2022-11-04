/** @jsxImportSource @emotion/react */
import { Button, css, Stack, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import ContactList from "../components/board/ContactList";
import LeftSideBar from "../components/board/LeftSideBar";
import IMBox from "../components/board/IMBox";
import RightSideBar from "../components/board/RightSideBar";

export default function Board() {
  return (
    <Fragment>
      <Stack direction="row" height={"100vh"}>
        <LeftSideBar></LeftSideBar>
        <ContactList></ContactList>
        <IMBox></IMBox>
        {/*<RightSideBar></RightSideBar>*/}
      </Stack>
    </Fragment>
  );
}
