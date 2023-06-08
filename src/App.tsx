import React from "react";
interface AppProps {
  children: React.ReactNode | React.ReactNode[];
}

function App({ children }: AppProps) {
  return (
    <div className="container mx-auto max-w-[768px] ">
      <h1 className="mt-5 text-center font-bold">One Rep Max Calculator</h1>
      <h2>Simple calculator for calculating your one rep max. Just enter your weight and repetitions done with it.</h2>
      {children}
    </div>
  );
}

export default App;
