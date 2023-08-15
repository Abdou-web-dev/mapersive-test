import { Input } from "antd";
import "./sections_styles.scss";
const { Search } = Input;

export const MobilingHeaderInput = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <>
      <div className="mobiling-header-container">
        <h1>Best Car For Your Performance</h1>
        <p>
          We will serve you to get dream car here easily and quickly that is
          reliable
        </p>
        <Search
          className="mobiling-search-input"
          // style={{ width: "20%" }}
          placeholder="Search"
          onSearch={onSearch}
          enterButton
        />
      </div>
    </>
  );
};
