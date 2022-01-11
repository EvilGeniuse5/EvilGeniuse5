import { useState } from "react";

const TeamCard: React.FC = () => {
  const axios = require("axios").default;

  const [orgName, setOrgName] = useState(null);

  // Make a request for a user with a given ID
  axios
    .get("https://api.github.com/orgs/evilgeniuse5")
    .then(function (response: any) {
      // handle success
      console.log(response);
      setOrgName(response.data);
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary">{orgName}</h1>
      </div>
    </>
  );
};

export default TeamCard;
