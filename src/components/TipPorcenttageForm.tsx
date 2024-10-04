import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPorcenttageForm = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
  //   cuando no sepas que tipo de valor es dejar que lo infiera vscode
};

export default function TipPorcenttageForm({
  setTip,
  tip,
}: TipPorcenttageForm) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form action="">
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className="flex gap-2">
            <label htmlFor="tip.id">{tipOptions.label}</label>
            <input
              id={tipOptions.id}
              type="radio"
              name="tip"
              value={tipOptions.value}
              onChange={(e) => setTip(+e.target.value)}
              //   al poner el signo mas + cambia el tipo de valor de tipo string a tipo numero
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
