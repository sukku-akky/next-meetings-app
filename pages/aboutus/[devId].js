import React from "react";
import { useRouter } from "next/router";
let details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const DevDetails = () => {
  const router = useRouter();

  const { devId } = router.query;
  console.log(devId);
  const devDetails = details.find((dev) => dev.id === Number(devId));

  if (!devDetails) {
    return "no details found";
  }

  return (
    <div>
      <h1>Developer Details</h1>
      <p>
        <strong>Name:</strong> {devDetails.name}
      </p>
      <p>
        <strong>Role:</strong> {devDetails.role}
      </p>
    </div>
  );
};

export default DevDetails;
