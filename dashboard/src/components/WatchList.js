import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";

import { KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { BarChartOutlined } from "@mui/icons-material";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index}></WatchListItem>;
        })}
        ;
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchLustActions, setShowWatchListActions] = useState(false);

  // This handles the event when the user hovers over an item
  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  //This handles the event when the use cursor leaves the hover of an item
  const handleMouseExit = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchLustActions && <WatchListActions uid={stock.name}></WatchListActions>}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span style = {{display:"flex"}}>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action"><BarChartOutlined className = "icon" /></button>
          
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className = "icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
