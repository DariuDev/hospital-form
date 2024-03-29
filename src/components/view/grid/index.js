import React from "react";
import "./style.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Grid = ({ data, base64 }) => {
  const nameData = [0, 0.2, 0.4, 0.6, 0.8, 1];

  const fragilityData = data?.fragility?.map((item, index) => ({
    name: nameData[index] || 0,
    collapse: item?.collapse || 0,
    extensive: item?.extensive || 0,
    moderate: item?.moderate || 0,
    slight: item?.slight || 0,
  }));

  const nameValuesSecondData = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5];
  const hazardData =
    data && data.hazard
      ? data.hazard.map((item, index) => ({
          name: nameValuesSecondData[index] || 0,
          amplifiedHazard: item.amplifiedHazard || null,
          hazard: item.hazard || null,
        }))
      : [];

  const medicalData =
    data && data.medical
      ? data.medical.map((item, index) => ({
          name: nameData[index] || 0,
          slight: item.slight || null,
          moderate: item.moderate || null,
        }))
      : [];
  const architecturalData =
    data && data.architectural
      ? data.architectural.map((item, index) => ({
          name: nameData[index] || 0,
          slight: item.slight || null,
          moderate: item.moderate || null,
        }))
      : [];

  const lifelineData =
    data && data.lifeline
      ? data.lifeline.map((item, index) => ({
          name: nameData[index] || 0,
          slight: item.slight || null,
          moderate: item.moderate || null,
        }))
      : [];

  const nscData =
    data && data.nsc
      ? data.nsc.map((item, index) => ({
          name: nameData[index] || 0,
          slight: item.slight || null,
          moderate: item.moderate || null,
        }))
      : [];

  const structuralData =
    data && data.structural
      ? data.structural.map((item, index) => ({
          name: nameData[index] || 0,
          collapse: item?.collapse || 0,
          extensive: item?.extensive || 0,
          moderate: item?.moderate || 0,
          slight: item?.slight || 0,
        }))
      : [];

  const combinedData =
    data && data.combined
      ? data.combined.map((item, index) => ({
          name: nameData[index] || 0,
          collapse: item?.collapse || 0,
          extensive: item?.extensive || 0,
          moderate: item?.moderate || 0,
          slight: item?.slight || 0,
        }))
      : [];

  console.log(base64, "base64base64");

  return (
    <section className="chart">
      {!data ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col col-6">
              <ResponsiveContainer height={300}>
                {/* <LineChart data={fragilityData}>
                  <CartesianGrid strokeDasharray="0 1" />
                  <XAxis
                    dataKey="name"
                    type="number"
                    scale="pow"
                    domain={["auto", "auto"]}
                  />
                  <YAxis type="number" scale="pow" domain={[0, 1]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="collapse"
                    stroke="#A3CC4A"
                    name="collapse"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="extensive"
                    stroke="#2BA90F"
                    strokeDasharray="3 2"
                    name="extensive"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="moderate"
                    stroke="#7A00C4"
                    strokeDasharray="3 2"
                    name="moderate"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="slight"
                    stroke="#C40000"
                    name="slight"
                    strokeWidth={2}
                  />
                </LineChart> */}
                <img src={base64.hazar_plot} alt="Base64 Image" />
              </ResponsiveContainer>
              <div className="container-fluid">
                <div className="row">
                  {/* <div className="col col-4">
                    <span className="title"></span>
                    <ResponsiveContainer height={300}>
                      <LineChart data={medicalData}>
                        <CartesianGrid strokeDasharray="0 3" />
                        <XAxis
                          dataKey="name"
                          type="number"
                          scale="pow"
                          domain={[0, 1]}
                        />
                        <YAxis type="number" scale="pow" domain={[0, 1]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="slight"
                          stroke="#C40000"
                          name="slight"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="moderate"
                          stroke="#3532C8"
                          name="moderate"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="col col-4">
                    <span className="title"></span>
                    <ResponsiveContainer height={300}>
                      <LineChart data={architecturalData}>
                        <CartesianGrid strokeDasharray="0 3" />
                        <XAxis
                          dataKey="name"
                          type="number"
                          scale="pow"
                          domain={[0, 1]}
                        />
                        <YAxis type="number" scale="pow" domain={[0, 1]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="slight"
                          stroke="#C40000"
                          name="slight"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="moderate"
                          stroke="#3532C8"
                          name="moderate"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="col col-4">
                    <span className="title"></span>
                    <ResponsiveContainer height={300}>
                      <LineChart data={lifelineData}>
                        <CartesianGrid strokeDasharray="0 3" />
                        <XAxis
                          dataKey="name"
                          type="number"
                          scale="pow"
                          domain={[0, 1]}
                        />
                        <YAxis type="number" scale="pow" domain={[0, 1]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="slight"
                          stroke="#C40000"
                          name="slight"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="moderate"
                          stroke="#3532C8"
                          name="moderate"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div> */}
                  <ResponsiveContainer height={300}>
               
               <img src={base64.risk_plot} alt="Base64 Image" />
               </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="col col-6">
              <ResponsiveContainer height={300}>
                {/* <LineChart data={hazardData}>
                  <CartesianGrid strokeDasharray="0 1" />
                  <XAxis
                    dataKey="name"
                    type="number"
                    scale="pow"
                    domain={["auto", "auto"]}
                  />
                  <YAxis type="number" scale="pow" domain={[0, 1]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amplifiedHazard"
                    stroke="#068800"
                    name="Amplified Hazard"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="hazard"
                    stroke="#C40000"
                    name="Hazard"
                    strokeWidth={2}
                  />
                </LineChart> */}

                <img src={base64.fragility_plot} alt="Base64 Image" />
              </ResponsiveContainer>
              <ResponsiveContainer height={300}>
               
              <img src={base64.nsc_plot} alt="Base64 Image" />
              </ResponsiveContainer>
              <div className="container-fluid">
                <div className="row">
                {/*  <div className="col col-4">
                    <span className="title"></span>
                    <ResponsiveContainer height={300}>

                      {/* <LineChart data={nscData}>
                        <CartesianGrid strokeDasharray="0 3" />
                        <XAxis
                          dataKey="name"
                          type="number"
                          scale="pow"
                          domain={[0, 1]}
                        />
                        <YAxis type="number" scale="pow" domain={[0, 1]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="slight"
                          stroke="#C40000"
                          name="slight"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="moderate"
                          stroke="#3532C8"
                          name="moderate"
                          strokeWidth={2}
                        />
                      </LineChart> 
                    </ResponsiveContainer>
                  </div>*/}
                  {/* <div className="col col-4">
                    <span className="title"></span>
                    <ResponsiveContainer height={300}>
                      <LineChart data={structuralData}>
                        <CartesianGrid strokeDasharray="0 1" />
                        <XAxis
                          dataKey="name"
                          type="number"
                          scale="pow"
                          domain={["auto", "auto"]}
                        />
                        <YAxis type="number" scale="pow" domain={[0, 1]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="collapse"
                          stroke="#A3CC4A"
                          name="collapse"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="extensive"
                          stroke="#2BA90F"
                          strokeDasharray="3 2"
                          name="extensive"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="moderate"
                          stroke="#7A00C4"
                          strokeDasharray="3 2"
                          name="moderate"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="slight"
                          stroke="#C40000"
                          name="slight"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="col col-4">
                    <span className="title"></span>
                    <ResponsiveContainer height={300}>
                      <LineChart data={combinedData}>
                        <CartesianGrid strokeDasharray="0 1" />
                        <XAxis
                          dataKey="name"
                          type="number"
                          scale="pow"
                          domain={["auto", "auto"]}
                        />
                        <YAxis type="number" scale="pow" domain={[0, 1]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="collapse"
                          stroke="#A3CC4A"
                          name="collapse"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="extensive"
                          stroke="#2BA90F"
                          strokeDasharray="3 2"
                          name="extensive"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="moderate"
                          stroke="#7A00C4"
                          strokeDasharray="3 2"
                          name="moderate"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="slight"
                          stroke="#C40000"
                          name="slight"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Grid;
