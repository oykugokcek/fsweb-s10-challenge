import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSilAPI } from "../actions";

export default function Post({ item }) {
  const dispatch = useDispatch();
  function handleSil() {
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
    dispatch(notSilAPI(item.id));
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        onClick={handleSil}
        className="text-xs text-amber-600 mt-4 underline"
      >
        Bu notu sil
      </button>
    </div>
  );
}
