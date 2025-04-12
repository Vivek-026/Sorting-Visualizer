# Sorting Algorithm Visualizer


A responsive web application that visually demonstrates how different sorting algorithms work by animating the sorting process step-by-step.

## Features

- **Visualize Sorting**: Watch real-time animations of four sorting algorithms
- **Interactive Controls**: Adjust array size and generate new arrays
- **Algorithm Comparison**: See time complexity differences in action
- **Responsive Design**: Works on desktop and mobile devices

## Supported Algorithms

| Algorithm       | Time Complexity | Visualization |
|-----------------|-----------------|---------------|
| Bubble Sort     | O(n²)           | ✅            |
| Merge Sort      | O(n log n)      | ✅            |
| Shell Sort      | O(n²)           | ✅            |
| Quick Sort      | O(n²)           | ✅            |

## Technologies Used

- React.js (Functional components with Hooks)
- Tailwind CSS (Styling)
- JavaScript ES6+
- CSS Transitions (Animations)

## Installation

1. Clone the repository:
  
   git clone https://github.com/your-username/sorting-visualizer.git
Navigate to the project directory:


cd sorting-visualizer
Install dependencies:

npm install
Start the development server:

npm start
Open your browser and visit:


http://localhost:3000
Usage
Adjust the array size using the slider

Click "Generate Array" to create a new random array

Select any sorting algorithm to begin visualization:

Bubble Sort

Merge Sort

Shell Sort

Quick Sort

Project Structure
Copy
sorting-visualizer/
├── src/
│   ├── components/
│   │   └── SortingVisualizer.js  # Main component
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── index.css
├── public/
├── package.json
└── README.md
Customization
You can modify the visualization by changing these values in the code:

Animation Speed: Adjust the delay(100) value in the sorting functions

Bar Colors: Modify the Tailwind gradient classes (from-amber-400 to-amber-300)

Array Size Range: Change the slider's min and max values (currently 5-50)

