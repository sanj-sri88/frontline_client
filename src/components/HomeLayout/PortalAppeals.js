import React from "react";
import { List, Badge } from "antd";
import { getStringAttr } from "@utils/Parser/strUtils";

const renderRow = (rowData) => {
  return (
    <span>
      <strong>{getStringAttr(rowData)}</strong>
    </span>
  );
};

const PortalAppeals = (props) => {
  const RenderItem = (data) => {
    return (
      <List.Item
        onClick={() => props.appealClick(data._id)}
        style={{ cursor: "pointer" }}
      >
        <Badge status="processing" />
        We need the following supplies,
        <div>{renderRow(data.services.medical)}</div>
        <div>{renderRow(data.services.nonmedical)}</div>
        at {data.region}
      </List.Item>
    );
  };
  return (
    <div>
      <h2 className="appeals-header">Appeals</h2>
      <div
        style={{
          textAlign: "left",
          maxHeight: "450px",
          overflowY: "auto",
          fontSize: "12px",
        }}
        className="appeals-data"
      >
        <List
          size="small"
          dataSource={props.appealsData}
          renderItem={(item) => RenderItem(item)}
        />
      </div>
    </div>
  );
};

export default PortalAppeals;