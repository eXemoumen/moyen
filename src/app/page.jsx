'use client'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useState ,useEffect} from "react";
export default function Home() { 
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Chimie org",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 3,
    },
    {
      id: 2,
      name: "Chimie gnrl",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 3,
    },
    {
      id: 3,
      name: "Biologie",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 3,
    },
    {
      id: 4,
      name: "Anatomie",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 2,
    },
    {
      id: 5,
      name: "Physio",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 2,
    },
    {
      id: 6,
      name: "Botanique",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 2,
    },
    {
      id: 7,
      name: "Biophysique",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 2,
    },
    {
      id: 8,
      name: "Français",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 1,
    },
    {
      id: 9,
      name: "Histoire",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 1,
    },
    {
      id: 10,
      name: "Math",
      inputValues: { input1: "", input2: "", input3: "", input4: "" },
      result: 0,
      multiplier: 3,
    },
  ]);

  const handleInputChange = (rowId, e) => {
    const { name, value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? { ...row, inputValues: { ...row.inputValues, [name]: value } }
          : row
      )
    );
  };

  const handleMultiplierChange = (rowId, e) => {
    const value = parseFloat(e.target.value);
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? { ...row, multiplier: isNaN(value) ? 0 : value }
          : row
      )
    );
  };
  
  useEffect(() => {
    const calculateResults = () => {
      setRows((prevRows) =>
        prevRows.map((row) => {
          const { inputValues, multiplier } = row;
          let sum = 0;
          let count = 0;

          Object.keys(inputValues).forEach((key) => {
            const num = parseFloat(inputValues[key]);
            if (!isNaN(num) && inputValues[key].trim() !== "") {
              sum += num;
              count += 1;
            }
          });

          let result = 0;

          if (row.name === "Biologie") {
            const sum123 = ["input1", "input2", "input3"].reduce((acc, key) => {
              const num = parseFloat(inputValues[key]);
              return acc + (isNaN(num) ? 0 : num);
            }, 0);
            const numInput4 = parseFloat(inputValues.input4);
            const validInput4 = isNaN(numInput4) ? 0 : numInput4;
            result = (((sum123 / 3) * 2 + validInput4) / 3)*3;
          } else {
            const average = count > 0 ? sum / count : 0;
            result = average * multiplier;
            rows.re
          }

          return { ...row, result };
        })
        
      );
    };
    

    calculateResults();
  }, [rows]);

  console.log()
  return (
    <>
      {/* Web application to calculate the average of the semester */}
     
      <div className="border rounded-lg w-full">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead> © moumen.mz </TableHead>
                <TableHead>1EMD</TableHead>
                <TableHead>2EMD</TableHead>
                <TableHead>3EMD</TableHead>
                <TableHead>TP/TD</TableHead>
                <TableHead>Moyenne du module</TableHead>
                <TableHead>coefficient </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <p>{row.name}</p>
                  </TableCell>
                  <TableCell>
                    <Input
                      name="input1"
                      value={row.inputValues.input1}
                      onChange={(e) => handleInputChange(row.id, e)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="input2"
                      value={row.inputValues.input2}
                      onChange={(e) => handleInputChange(row.id, e)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="input3"
                      value={row.inputValues.input3}
                      onChange={(e) => handleInputChange(row.id, e)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="input4"
                      value={row.inputValues.input4}
                      onChange={(e) => handleInputChange(row.id, e)}
                    />
                  </TableCell>
                  <TableCell>
                    <p>{row.result.toFixed(2)}</p>{" "}
                    {/* Display the final result to two decimal places */}
                  </TableCell>
                  <TableCell>
                    <p>{row.multiplier}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h1 className="text-xl font-bold mt-4">
            Moyenne general:{" "}
            {rows.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.result;
            }, 0) / 22}
          </h1>
        </div>
      </div>
    </>
  );
}
