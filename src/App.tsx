import React from "react";

function App() {
  const [weight, setWeight] = React.useState(0);
  const useWeightDeferred = React.useDeferredValue(weight);
  const [weightWarn, setWeightWarn] = React.useState<boolean>(false);

  const [reps, setReps] = React.useState<number>(1);
  const useRepsDeferred = React.useDeferredValue(reps);
  const [repsWarn, setRepsWarn] = React.useState<boolean>(false);

  const [max, setMax] = React.useState<number | string>(0);

  function handleWeightChange(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.target as unknown as { value: number };
    if (value > 1000) {
      setWeightWarn(true);
      setWeight(1000);
    } else {
      setWeightWarn(false);
      setWeight(Number(value));
    }
  }

  function handleRepsChange(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.target as unknown as { value: number };
    if (value > 15) {
      setRepsWarn(true);
      setReps(15);
    } else {
      setRepsWarn(false);
      setReps(Number(value));
    }
  }

  React.useEffect(() => {
    const maxFormula: number = useWeightDeferred / (1.0278 - 0.0278 * useRepsDeferred);
    setMax(maxFormula.toFixed(2));
  }, [useWeightDeferred, useRepsDeferred]);

  return (
    <div className="container mx-auto max-w-[460px] ">
      <h1 className="mt-5 text-center text-2xl font-bold text-gray-900 sm:text-3xl">One Rep Max Calculator</h1>
      <h2 className="mt-1.5 text-sm text-gray-500">Simple calculator for calculating your one rep max. Just enter your weight and repetitions done with it.</h2>

      <div className="mx-auto mt-10 flex max-w-[260px] flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="weight" className="block text-xs font-medium text-gray-700">
            Weight (kg)
          </label>
          {weightWarn && <div className="block text-xs font-medium text-red-700">Max weight is 1000kg</div>}
          <input
            step={2.5}
            pattern="[0-9]*"
            id="weight"
            name="weight"
            type="number"
            className="mt-1 w-full rounded-md border p-3 shadow-sm  sm:text-sm"
            onChange={handleWeightChange}
            value={useWeightDeferred}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="reps" className="block text-xs font-medium text-gray-700">
            Repetitions
          </label>
          {repsWarn && <div className="block text-xs font-medium text-red-700">Max repetition is 15</div>}
          <input
            pattern="[0-9]*"
            id="reps"
            name="reps"
            type="number"
            className="mt-1 w-full rounded-md border p-3 shadow-sm  sm:text-sm"
            onChange={handleRepsChange}
            value={useRepsDeferred}
          />
        </div>
      </div>

      <div className="mt-5">
        <h3 className=" text-center font-bold uppercase">Your one rep max is:</h3>
        <div className="text-center text-5xl font-bold text-gray-900 sm:text-4xl">{max}</div>
      </div>
    </div>
  );
}

export default App;
