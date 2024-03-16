import { useState } from "react";
import { CiTrash } from "react-icons/ci";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="heading">
        <h1 className="bg-[#643843] p-5 text-[#FDF0D1] text-4xl text-center font-extrabold">
          Expance Manager
        </h1>
      </div>
      <div className="ms2 grid grid-cols-2  bg-[#AC7D88] h-screen ">
        <div className="left border-solid border-r-2 border-[#643843]">
          <div className="head p-5">
            <h1 className="budget text-4xl font-bold text-[#FDF0D1]">
              Your Net Income :{" "}
              <span className="text-red-900 font-bold text-3xl">32000</span>
              <hr />
              <br />
              <input
                type="number"
                placeholder="dddd"
                className="p-2 bg-[#85586F] text-[#AC7D88] focus:bg-neutral-50"
              />
              <select name="" id="" className="bg-none">
                <option value="Fee">1200</option>
                <option value="Fee">1200</option>
                <option value="Fee">1200</option>
              </select>
            </h1>
          </div>
        </div>
        <div className="right">
          <div className="data p-5">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center text-sm font-light text-surface dark:text-white">
                      <thead class="border-b border-neutral-200 bg-[#FDF0D1] font-medium dark:border-white/10 dark:text-neutral-800">
                        <tr>
                          <th scope="col" class=" px-6 py-4">
                            Date
                          </th>
                          <th scope="col" class=" px-6 py-4">
                            Source
                          </th>
                          <th scope="col" class=" px-6 py-4">
                            Spent
                          </th>
                          <th scope="col" class=" px-6 py-4">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-neutral-200 dark:border-white/10">
                          <td class="whitespace-nowrap  px-6 py-4 font-medium">
                            17/02/2024
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            Collage Fee
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">7500</td>
                          <td class="whitespace-nowrap  px-6 py-4 cursor-pointer text-2xl content-center">
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
    </>
  );
}

export default App;
