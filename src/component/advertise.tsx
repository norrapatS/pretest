import React from "react";
import { Card } from "react-bootstrap";
const Advertise: React.FC = () => {
  return (
    <div className="advertise">
      <div className="row">
        <div className="col">
          <Card style={{ height: "600px" }}>
            <Card.Img
              src="../image/reserve-coffee-2-1200x800.jpg"
              alt=""
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
