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
  //   cuando no sepas que tipo de valor es dejar que lo infiera vscode
};

export default function TipPorcenttageForm({ setTip }: TipPorcenttageForm) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form action="">
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor="tip.id">{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
              //   al poner el signo mas + cambia el tipo de valor de tipo string a tipo numero
            />
          </div>
        ))}
      </form>
    </div>
  );
}
