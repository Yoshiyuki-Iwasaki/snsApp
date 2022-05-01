import React, { FC } from "react";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({ state, method }) => {
  return (
    <button data-testid="button" onClick={method}>
      {state ? "フォロー削除" : "フォロー"}
    </button>
  );
};

export default Presenter;
