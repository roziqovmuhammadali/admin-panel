import React, { useState } from "react";
import LoginForm from "./LoginPages/LoginForm";
import DataTable from "./components/DataTable";
import { LuShoppingCart } from "react-icons/lu";
import {
  MdOutlinePeople,
  MdRadioButtonChecked,
  MdInsertChartOutlined,
} from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { IoSettingsSharp } from "react-icons/io5";
import Marketing from "./components/Marketing";

//left box
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, color: "blue" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Delever", "Акции", "Баннеры", "Отзывы", "Рассылка"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ),
        )}
      </List>
    </Box>
  );

  return (
    <div className="flex w-full items-center justify-center bg-white">
      <div className="fixed left-0 top-0 flex h-full w-14  flex-col items-center justify-between border-r-2 bg-white p-5">
        <div className="flex flex-col items-center justify-center">
          <div>
            <Button onClick={toggleDrawer(true)}>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#3593F9] text-[18px] font-bold text-white">
                D
              </div>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
          <div className="mt-4 flex w-10 flex-col items-center rounded-lg bg-[#717377] p-3">
            <button
              className={`mb-4 text-lg text-white ${selectedOption === "DataTable" ? "text-blue-500" : ""}`}
              onClick={() => handleOptionClick("DataTable")}
            >
              <LuShoppingCart />
            </button>
            <button
              className={`mb-4 text-lg text-white ${selectedOption === "option2" ? "text-blue-700" : ""}`}
              onClick={() => handleOptionClick("option2")}
            >
              <MdOutlinePeople />
            </button>
            <button
              className={`mb-4 text-lg text-white ${selectedOption === "Marketing" ? "text-blue-500" : ""}`}
              onClick={() => handleOptionClick("Marketing")}
            >
              <MdRadioButtonChecked />
            </button>
            <button
              className={`mb-4 text-lg text-white ${selectedOption === "LoginForm" ? "text-blue-500" : ""}`}
              onClick={() => handleOptionClick("LoginForm")}
            >
              <MdInsertChartOutlined />
            </button>
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center gap-5">
          <button className="text-lg ">
            <IoIosNotifications />
          </button>
          <button className="text-lg ">
            <IoSettingsSharp />
          </button>
          <button className="text-lg ">
            <Avatar alt="Remy Sharp" src="/public/avatar.jpg" />
          </button>
        </div>
      </div>
      <div className="flex w-[93%] items-center justify-center  ">
        {selectedOption && (
          <div className="w-full">
            {selectedOption === "Marketing" && <Marketing />}
            {selectedOption === "DataTable" && <DataTable />}
            {selectedOption === "LoginForm" && <LoginForm />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
