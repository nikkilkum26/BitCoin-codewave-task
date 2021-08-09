import React from "react";
import "./LeftNavBar.css";
import SmallCard from "./SmallCard";
import { Paper, Tabs, Tab, Grid } from "@material-ui/core";

const LeftNavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="searchBar">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search" />
        </div>

        <div className="card">
          <h5 className="">Trending 🔥</h5>
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2px",
              }}
            >
              <Paper
                square
                style={{
                  position: "relative",
                  backgroundColor: "rgb(235 235 243 / 29%)",
                }}
              >
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                >
                  <Tab label="Price" />
                  <Tab label="Volume" />
                </Tabs>
              </Paper>
            </div>
          </>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
            <div className="card-bar">
              <SmallCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNavBar;
