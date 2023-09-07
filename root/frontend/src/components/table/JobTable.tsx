import React from "react";
import { MyData } from "../../pages/layout/homeLayout";
import Card from "react-bootstrap/Card";

interface TableProps {
  modelData: MyData[];
}

const DynamicTable: React.FC<TableProps> = ({ modelData }) => {
  console.log("model keys", modelData[0]);

  return (
    <Card style={{ width: "18rem", borderColor: "white" }}>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Title>Records</Card.Title>
        <Card.Text>{modelData[0]?.created_at}</Card.Text>
        <Card.Text>{modelData[0]?.first_name}</Card.Text>
        <Card.Text>{modelData[0]?.last_name}</Card.Text>
        <Card.Text>{modelData[0]?.email}</Card.Text>
        <Card.Text>{modelData[0]?.phone}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DynamicTable;
