import { FC, useState } from "react";
import { Button } from "../ui/button/Button";
import { Quantity } from "../quantity/Quantity";
import { Time } from "../time/Time";

export const Config: FC = () => {
  const [flagConfig, setFlagConfig] = useState<boolean>(true);
  return (
    <div className="config">
      <Button
        onClick={() => setFlagConfig(true)}
        textButton={true}
        textButtunActive={flagConfig}
      >
        time
      </Button>
      <Button
        onClick={() => setFlagConfig(false)}
        textButton={true}
        textButtunActive={!flagConfig}
        disabled
      >
        quantity
      </Button>
      {!flagConfig ? <Quantity /> : <Time />}
    </div>
  );
};
