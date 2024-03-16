import { useState } from "react";
import { CiTrash } from "react-icons/ci";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="heading">
        <h1 className="bg-[#643843] p-5 text-[#FDF0D1] text-4xl text-center font-extrabold">
          Expense Manager
        </h1>
      </div>
      <div className="ms2 grid grid-cols-1 sm:grid-cols-2 bg-[#AC7D88] mb-10">
        <div className="left sm:border-solid sm:border-r-2 sm:border-[#643843]">
          <div className="head p-5">
            <h1 className="budget text-4xl font-bold text-[#FDF0D1]">
              Income :{" "}
              <span className="text-red-900 font-bold text-3xl">32000</span>
              <hr />
              <br />
             
              <div className="add">
              <input
                type="text"
                placeholder="Amount here."
                className="w-full sm:w-3/5 p-4 bg-[#FDF0D1] text-[#AC7D88] text-2xl placeholder-gray-900 rounded-lg"
              />
              </div>
              <div className="task  text-black">
              <select name="" id="" className="rounded-lg w-full sm:w-3/5 mt-5 text-2xl p-4">
                <option value="Fee">College Fee</option>
                <option value="Fee">Personal</option>
                <option value="Fee">Family</option>
                <option value="Fee">Electronic</option>
                <option value="Fee">Recharge</option>
                <option value="Fee">Ration or Rent</option>
              </select>
              </div>
              <div className="date">
                <input type="date" name="" className="w-full sm:w-3/5 p-4 text-2xl rounded-lg mt-5 text-black" />
              </div>

              <div className="submit-expense">
              <button className="bg-[#FDF0D1] text-red-600 text-2xl p-3 rounded-2xl mt-5 w-full sm:w-3/5">Submit</button>
              </div>
            
            </h1>
          </div>
        </div>
        <div className="right">
          <div className="data p-5">
            <div class="flex flex-col ">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-2">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center text-sm font-light text-surface dark:text-white">
                      <thead class="border-b border-neutral-200 bg-[#FDF0D1] font-medium dark:border-white/10 dark:text-neutral-800">
                        <tr>
                          <th scope="col" class="px-6 py-4">
                            Date
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Source
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Spent
                          </th>
                          <th scope="col" class="px-6 py-4">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-neutral-200 dark:border-white/10">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            17/02/2024
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            College Fee
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">7500</td>
                          <td class="whitespace-nowrap px-6 py-4 cursor-pointer text-2xl content-center">
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
