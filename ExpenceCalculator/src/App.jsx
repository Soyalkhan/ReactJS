import { useRef, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { PieChart } from "react-minimal-pie-chart";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  function handleClick(){
    inputRef.current.disable
    inputRef.current.focus();
  }
  return (
    <>
      <div className="heading">
        <h1 className="bg-[#643843] p-5 text-[#FDF0D1] text-4xl text-center font-extrabold">
          Expense Manager
        </h1>
      </div>
      <div className="ms2 grid grid-cols-1 sm:grid-cols-2 bg-[#AC7D88] mb-10">
        <div className="left sm:border-solid sm:border-r-2 sm:border-[#643843]">
          <div className="heading p-5 flex ">
            <h3 className="budget text-2xl font-bold text-[#FDF0D1]">
              Income :{" "}
              <input
                type="text"
                ref={inputRef}
                value={35000}
                className="salary w-28 bg-[#AC7D88] text-red-900 font-bold text-2xl"
                disabled
              />
            </h3>
            <CiEdit className="bg-[#643843] rounded-lg cursor-pointer text-2xl mr-4 text-white"/>
            
            <h3 className="budget text-2xl font-bold text-[#FDF0D1]">
              Balance :{" "}
              <input
                type="text"
                value={20000}
                className="balace w-28 bg-[#AC7D88] text-red-900 font-bold text-2xl"
                disabled
              />
            </h3>
          </div>
          <div className="adding-area mb-10 ml-5 mr-5">
            <div className="add-amt">
              <input
                type="text"
                placeholder="Amount here."
                className="w-full sm:w-3/5 p-4 bg-[#FDF0D1] text-[#AC7D88] text-2xl placeholder-gray-400 rounded-lg border-2 border-red-700"
              />
            </div>
            <div className="task  text-black">
              <select
                name=""
                id=""
                className="rounded-lg w-full sm:w-3/5 mt-5 text-2xl p-4 border-2 border-red-700"
              >
                <option value="Fee">College Fee</option>
                <option value="Fee">Personal</option>
                <option value="Fee">Family</option>
                <option value="Fee">Electronic</option>
                <option value="Fee">Recharge</option>
                <option value="Fee">Ration or Rent</option>
              </select>
            </div>
            <div className="date">
              <input
                type="date"
                name=""
                className="w-full sm:w-3/5 p-4 text-2xl rounded-lg mt-5 text-black border-2 border-red-700"
              />
            </div>
            <div className="submit-expense">
              <button className="bg-[#FDF0D1] text-red-600 text-2xl p-3 rounded-2xl mt-5 w-full sm:w-3/5 border-2 border-red-700 hover:bg-red-200">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="data p-5">
            <div className="flex flex-col ">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-2">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                      <thead className="border-b border-neutral-200 bg-[#FDF0D1] font-medium dark:border-white/10 dark:text-neutral-800">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Source
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Spent
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            17/02/2024
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            College Fee
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">7500</td>
                          <td className="whitespace-nowrap px-6 py-4 cursor-pointer text-2xl content-center">
                            <CiTrash />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="chart">
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
          className="w-1/4"
          width={400}
          height={200}
        />
        ;
      </div> */}
    </>
  );
}

export default App;
