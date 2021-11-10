import React from "react";
import s from "./Filter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/app/app-actions";
import { getFilter } from "../../redux/app/app-selectors";
import PropTypes from "prop-types";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <label className={s.filterBox}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
