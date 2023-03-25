import React from "react";
import { FountainTable } from "../components/FountainTable";

function AddAdminPage() {
  return (
    <div>
      <FountainTable fountains={mockList} />
    </div>
  );
}

const mockList = [
  {
    name: "Temp",
    fountainId: "E4-0A-C6-DF-D9-C7",
    address: "32071 Sheridan Way",
    latitude: 11.9924294,
    longitude: 105.4645408,
  },
  {
    name: "Prodder",
    fountainId: "9E-67-FD-C2-D3-B2",
    address: "2 Prairieview Center",
    latitude: 49.6638396,
    longitude: 6.0744284,
  },
  {
    name: "Greenlam",
    fountainId: "0C-D2-86-43-FF-48",
    address: "06816 Fuller Drive",
    latitude: -21.2370782,
    longitude: -45.7592067,
  },
  {
    name: "Subin",
    fountainId: "3C-49-13-EF-B8-CC",
    address: "38 Evergreen Parkway",
    latitude: 40.2980046,
    longitude: 43.765332,
  },
  {
    name: "Fix San",
    fountainId: "E5-5A-52-C4-9E-FD",
    address: "442 Pond Street",
    latitude: 42.52444,
    longitude: 20.28083,
  },
  {
    name: "Namfix",
    fountainId: "2A-6F-7D-9B-B3-CE",
    address: "16 Monument Drive",
    latitude: 47.949239,
    longitude: 126.276226,
  },
  {
    name: "Tempsoft",
    fountainId: "1A-FE-24-B1-DA-40",
    address: "811 Scoville Hill",
    latitude: -8.4508069,
    longitude: 122.9860159,
  },
  {
    name: "Trippledex",
    fountainId: "34-6C-9D-B1-1D-9A",
    address: "4424 Nova Crossing",
    latitude: -8.241702,
    longitude: 123.769227,
  },
  {
    name: "Quo Lux",
    fountainId: "BE-91-EB-8A-4F-C6",
    address: "3948 Namekagon Center",
    latitude: -9.113585,
    longitude: -37.119659,
  },
  {
    name: "Tin",
    fountainId: "90-07-5F-4F-9C-8B",
    address: "9263 Stone Corner Lane",
    latitude: 38.7360496,
    longitude: -9.1418159,
  },
  {
    name: "Tin",
    fountainId: "90-07-5F-4F-9C-8B",
    address: "9263 Stone Corner Lane",
    latitude: 38.7360496,
    longitude: -9.1418159,
  },
];

export default AddAdminPage;
