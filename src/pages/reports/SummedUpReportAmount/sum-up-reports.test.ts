import { describe, test, expect } from "vitest";
import sumUpReports from "./sum-up-reports";
import Report from "../../../interfaces/Report";

const reports = [
  {
    paymentId: "6149cf568b0a15b105ea1786",
    amount: 2493.1,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: ["rahej"],
    modified: "2021-06-22",
    created: "2021-07-29",
  },
  {
    paymentId: "6149cf568bfadcecbf2b40ec",
    amount: 1318.44,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: ["rahej"],
    modified: "2021-02-18",
    created: "2021-06-05",
  },
  {
    paymentId: "6149cf56c04649c6dde1057b",
    amount: 3398.51,
    projectId: "bgYhx",
    gatewayId: "i6ssp",
    userIds: ["rahej"],
    modified: "2021-05-23",
    created: "2021-06-06",
  },
] as Report[];

describe("A function to sum up the amounts found in an array of reports", () => {
  test("Adds all the amount values in a list of reports", () => {
    expect(sumUpReports(reports)).equal(7210.05);
  });

  test("Adds all the amount values in a list of empty reports", () => {
    expect(sumUpReports([])).equal(0);
  });

  test("Gives the correct amount if there's only one report in the list", () => {
    const onlyOne = [
      {
        paymentId: "6149cf56c04649c6dde1057b",
        amount: 3398.51,
        projectId: "bgYhx",
        gatewayId: "i6ssp",
        userIds: ["rahej"],
        modified: "2021-05-23",
        created: "2021-06-06",
      },
    ];
    expect(sumUpReports(onlyOne)).equal(3398.51);
  });
});
