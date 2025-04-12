import React, { useEffect, useState } from "react";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(20);
  const [timeComplexity, setTimeComplexity] = useState("");
  const [isSorting, setIsSorting] = useState(false);

  const generateNewArray = () => {
    setTimeComplexity("");
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 50) + 1);
    setArray(newArray);
  };

  useEffect(() => {
    generateNewArray();
  }, [size]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    setTimeComplexity("O(n²)");
    const arrCopy = [...array];
    let n = arrCopy.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arrCopy[j] > arrCopy[j + 1]) {
          [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
          setArray([...arrCopy]);
          await delay(100);
        }
      }
    }
    setIsSorting(false);
  };

  const mergeSort = async () => {
    setIsSorting(true);
    setTimeComplexity("O(n log n)");
    const arrCopy = [...array];

    const merge = async (arr, left, mid, right) => {
      const temp = [...arr];
      let i = left;
      let j = mid + 1;
      let k = left;

      while (i <= mid && j <= right) {
        if (temp[i] <= temp[j]) {
          arr[k] = temp[i];
          i++;
        } else {
          arr[k] = temp[j];
          j++;
        }
        k++;
        setArray([...arr]);
        await delay(100);
      }

      while (i <= mid) {
        arr[k] = temp[i];
        i++;
        k++;
        setArray([...arr]);
        await delay(100);
      }

      while (j <= right) {
        arr[k] = temp[j];
        j++;
        k++;
        setArray([...arr]);
        await delay(100);
      }
    };

    let n = arrCopy.length;
    for (let currSize = 1; currSize < n; currSize *= 2) {
      for (let left = 0; left < n; left += 2 * currSize) {
        const mid = Math.min(left + currSize - 1, n - 1);
        const right = Math.min(left + 2 * currSize - 1, n - 1);
        await merge(arrCopy, left, mid, right);
      }
    }
    setIsSorting(false);
  };

  const shellSort = async () => {
    setIsSorting(true);
    setTimeComplexity("O(n²)");
    const arrCopy = [...array];
    let n = arrCopy.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i++) {
        let temp = arrCopy[i];
        let j = i;

        while (j >= gap && arrCopy[j - gap] > temp) {
          arrCopy[j] = arrCopy[j - gap];
          j -= gap;
          setArray([...arrCopy]);
          await delay(100);
        }

        arrCopy[j] = temp;
        setArray([...arrCopy]);
        await delay(100);
      }
    }
    setIsSorting(false);
  };

  const quickSort = async () => {
    setIsSorting(true);
    setTimeComplexity("O(n²)");
    const arrCopy = [...array];

    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        const pivotIndex = await partition(arr, low, high);
        await quickSortHelper(arr, low, pivotIndex - 1);
        await quickSortHelper(arr, pivotIndex + 1, high);
      }
    };

    const partition = async (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await delay(100);
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      await delay(100);

      return i + 1;
    };

    await quickSortHelper(arrCopy, 0, arrCopy.length - 1);
    setIsSorting(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sorting Algorithm Visualizer</h1>
      
      <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-6">
        <div className="flex justify-center items-end h-80 gap-1 mb-4">
          {array.map((value, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="text-xs font-medium text-gray-600 mb-1">{value}</div>
              <div
                className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-sm transition-all duration-150"
                style={{ height: `${value * 6}px` }}
              />
            </div>
          ))}
        </div>
        
        {timeComplexity && (
          <div className="text-center text-lg font-medium text-gray-700 mb-2">
            Time Complexity: <span className="text-blue-600">{timeComplexity}</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg shadow">
            <span className="text-sm font-medium text-gray-700">Array Size</span>
            <input
              type="range"
              min={5}
              max={50}
              value={size}
              onChange={(e) => setSize(e.target.value)}
              disabled={isSorting}
              className="w-32 accent-amber-500"
            />
            <span className="text-sm font-semibold text-gray-800">{size}</span>
          </div>

          <button
            onClick={generateNewArray}
            disabled={isSorting}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Array
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={bubbleSort}
            disabled={isSorting}
            className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Bubble Sort
          </button>
          <button
            onClick={mergeSort}
            disabled={isSorting}
            className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Merge Sort
          </button>
          <button
            onClick={shellSort}
            disabled={isSorting}
            className="px-5 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Shell Sort
          </button>
          <button
            onClick={quickSort}
            disabled={isSorting}
            className="px-5 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Quick Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingVisualizer;