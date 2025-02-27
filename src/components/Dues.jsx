import React, { useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";

const PrintableComponent = React.forwardRef((props, ref) => (
  <div ref={ref} className="p-4 border rounded bg-white">
    <h1 className="text-xl font-bold">Customer Details</h1>
    <p>Name: John Doe</p>
    <p>Email: john.doe@example.com</p>
  </div>
));

const Dues = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
    onBeforeGetContent: () => console.log("Preparing to print..."),
    onPrintError: (error) => console.error("Print Error:", error),
  });

  return (
    <div className="flex flex-col items-center space-y-4">
      <PrintableComponent ref={componentRef} />
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-blue-500 text-white rounded">
          Print This Page
      </button>
    </div>
  );
};

export default Dues;
