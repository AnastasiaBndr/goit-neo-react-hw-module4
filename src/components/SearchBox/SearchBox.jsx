import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
      <div className={css["searchbox-container"]}>
      <label className={css.label} htmlFor="searchBox">Find contact by name</label>
      <input
        id="searchBox"
        type="text"
              value={value}
              className={css.field}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </div>
  );
}
