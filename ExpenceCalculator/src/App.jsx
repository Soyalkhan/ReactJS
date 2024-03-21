import { useEffect, useRef, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import "./App.css";

function App() {
  const [line, setLine] = useState();
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState("");
  const [date, setDate] = useState("");
  const [salary,setSalary] = useState()
  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("total");
    return savedTotal ? parseInt(savedTotal) : 0;
  });

  const [expList, setExpList] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(()=>{
    setSalary(40000)
  })
  // const inputRef = useRef(null);
  const idCounter = useRef(1); //to provide unique id's

  useEffect(()=>{
    if(total > salary){
      setLine("Your budget is higher then you salary!!")
    }
  },[total])
  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(total));
  }, [total]);

  useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expList));
  }, [expList]);

 
  function handleAdd(e) {
    if (salary < 0) {
      setLine("Your budget is over then your salary");
    }
    if (amount === "" || cat === "" || date === "") {
      alert("Enter all value !");
    } else {
      e.preventDefault();
      const newExpense = {
        id: idCounter.current,
        amount: parseInt(amount), // Convert amount to integer for proper addition
        cat: cat,
        date: date,
      };
      setExpList([...expList, newExpense]);
      idCounter.current++;
      setTotal(parseInt(amount) + total); // Update total amount spent
      setAmount("");
      setCat("");
      setDate("");
    }
  }

  function handleDelete(id) {
    const deletedExpense = expList.find((expense) => expense.id === id);
    if (deletedExpense) {
      const deletedAmount = deletedExpense.amount;
      setExpList(expList.filter((expense) => expense.id !== id));
      setTotal((prevTotal) => prevTotal - deletedAmount); // Subtract deleted amount from total
    }
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
            <p className=" text-gray-800 font-bold text-2xl">
            <span>Your salar is : <span className="text-red-900 font-bold text-2xl"> {salary}</span></span>
              {" "}
              <br></br>Total Spent :{" "}
              <span className="total text-red-900 font-bold text-2xl">
                {total}
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
                className="w-full sm:w-3/5 p-4 bg-[#FDF0D1] text-[#AC7D88] text-2xl placeholder-gray-400 rounded-lg border-2 border-red-700 font-semibold"
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
            <div
              className="clr bg-red-600 p-2 text-white rounded-lg w-20 ml-6 cursor-pointer"
              onClick={() =>{
                localStorage.clear();
                setTotal(0)
              }
            }
            >
              clear all
            </div>
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
