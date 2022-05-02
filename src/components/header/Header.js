import { SearchBar } from "./Header.style";
import { Head, Search, BackgroundDate, DisplayDate } from "./Header.style";
import { useHistory } from "react-router-dom";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdSearch,
} from "react-icons/md";

function Header() {
  let history = useHistory();
  let now = new Date();
  return (
    <Head style={{ borderBottom: "1px solid #930a1a" }}>
      <MdOutlineArrowBackIos
        style={{
          color: "#720B1E",
          marginLeft: "1vw",
          fontSize: "5vh",
        }}
      />
      <MdOutlineArrowForwardIos
        style={{
          color: "#720B1E",
          marginLeft: "1vw",
          fontSize: "5vh",
        }}
      />
      <SearchBar>
        <Search type="text" placeholder="검색할 내용을 입력해 주세요." />
        <MdSearch
          style={{
            color: "white",
            marginLeft: "1vw",
            fontSize: "4vh",
            position: "absolute",
          }}
        />
      </SearchBar>

      <BackgroundDate>
        <DisplayDate>
          {now.getFullYear()} / {now.getMonth()} / {now.getDate()}
        </DisplayDate>
        <DisplayDate>
          {now.getHours()} : {now.getMinutes()}
        </DisplayDate>
      </BackgroundDate>
    </Head>
  );
}

export default Header;
