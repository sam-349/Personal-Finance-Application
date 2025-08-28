import React, { useEffect } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";


import Gold from "../Gold";
import Stocks from "../Stocks";
import MutualFunds from "../MutualFunds";
import Transactions from "../Transactions";
import Savings from "../Savings";
import Notes from "../Notes";

const componentsList = [
  { id: "notes", component: <Notes />, w: 4, h: 3, x: 0, y: 0 },
  { id: "gold", component: <Gold />, w: 4, h: 2, x: 4, y: 0 },
  { id: "savings", component: <Savings />, w: 4, h: 2, x: 8, y: 0 },
  { id: "stocks", component: <Stocks />, w: 4, h: 2, x: 0, y: 3 },
  { id: "mutualfunds", component: <MutualFunds />, w: 4, h: 2, x: 4, y: 3 },
  { id: "transactions", component: <Transactions />, w: 4, h: 2, x: 8, y: 3 }
];

export default function Home() {
  useEffect(() => {
    GridStack.init({
      cellHeight: 150,
      disableOneColumnMode: true,
      float: false, // Keep items organized
      alwaysShowResizeHandle: false,
      resizable: { handles: "e, se, s, sw, w" },
      draggable: { handle: ".grid-stack-item-content" }
    });
  }, []);

  return (
    <div
      className="grid-stack"
      style={{ background: "#f5f5f5", minHeight: "100vh" }}
    >
      {componentsList.map((item) => (
        <div
          key={item.id}
          className="grid-stack-item"
          gs-x={item.x}
          gs-y={item.y}
          gs-w={item.w}
          gs-h={item.h}
        >
          <div className="grid-stack-item-content">{item.component}</div>
        </div>
      ))}
    </div>
  );
}
