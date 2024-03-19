import { useEffect, useRef, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { LuFileEdit } from "react-icons/lu";
import { PieChart } from "react-minimal-pie-chart";
import "./App.css";

function App() {
  const [line,setLine] = useState();
  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem("income");
    return savedIncome || "35000";
  });
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState("");
  const [date, setDate] = useState("");
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance || income;
  });
  const [expList, setExpList] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const inputRef = useRef(null);
  const idCounter = useRef(1); //to provide unique id's

  useEffect(() => {
    localStorage.setItem("income", income);
  }, [income]);

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expList));
  }, [expList]);

  function handleClick() {
    inputRef.current.focus();
  }

  function handleAdd(e) {
    if(balance < 0){
      setLine("Your budget is over then your salary")
    }

    e.preventDefault();
    const newExpense = {
      id: idCounter.current,
      amount: amount,
      cat: cat,
      date: date,
    };
    setExpList([...expList, newExpense]);
    idCounter.current++;
    setBalance(prevBalance => prevBalance - amount);
    setAmount("");
    setCat("");
    setDate("");
  }

  function handleDelete(id) {
    setExpList(expList.filter((expense) => expense.id !== id));
  }

  function handleChange(e) {
    setAmount(e.target.value);
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
                value={income} // Value controlled by React state
                onChange={(e) => setIncome(e.target.value)}
                className="salary w-28 bg-[#AC7D88] text-red-900 font-bold text-2xl"
              />
            </h3>{" "}
            {"  "}
            <CiEdit
              onClick={handleClick}
              className="bg-[#643843] rounded-lg cursor-pointer text-2xl mr-4 ml-3 text-white"
            />
            <p className=" text-gray-800 font-bold text-2xl">
              {" "}
              Balance :{" "}
              <span className="balance text-red-900 font-bold text-2xl">
                {balance}
              </span>
            </p>
            
          </div>
        
          <div className="adding-area mb-10 ml-5 mr-5">
            <div className="add-amt">
              <input
                onChange={handleChange}
                value={amount}
                type="number"
                placeholder="Amount here."
                className="w-full sm:w-3/5 p-4 bg-[#FDF0D1] text-[#AC7D88] text-2xl placeholder-gray-400 rounded-lg border-2 border-red-700"
              />
            </div>
            <div className="task  text-black">
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="rounded-lg w-full sm:w-3/5 mt-5 text-2xl p-4 border-2 border-red-700"
              >
                <option value="Select Category">Select Category</option>
                <option value="College Fee">College Fee</option>
                <option value="Personal">Personal</option>
                <option value="Family">Family</option>
                <option value="Electronic">Electronic</option>
                <option value="Recharge">Recharge</option>
                <option value="Ration or Rent">Ration or Rent</option>
              </select>
            </div>
            <div className="date">
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className=" date-input w-full sm:w-3/5 p-4 text-2xl rounded-lg mt-5 text-black border-2 border-red-700"
              />
            </div>
            <div className="submit-expense">
              <button
                onClick={handleAdd}
                className="bg-[#FDF0D1] text-red-600 text-2xl p-3 rounded-2xl mt-5 w-full sm:w-3/5 border-2 border-red-700 hover:bg-red-200"
              >
                Submit
              </button>
             
              <p className="msg-text text-red-700 p-3 rounded-lg">{line}</p>
              
           
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
                        {console.log()}
                        {expList.map((item, id) => (
                          <tr
                            key={id}
                            className="border-b border-neutral-200 dark:border-white/10"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {item.date}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.cat}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.amount}
                            </td>
                            <td className="flex gap-3 whitespace-nowrap px-6 py-4 cursor-pointer text-2xl content-center text-red-700">
                              <CiTrash onClick={() => handleDelete(item.id)} />
                              {/* <LuFileEdit onClick={handleEdit} /> */}
                            </td>
                          </tr>
                        ))}
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



