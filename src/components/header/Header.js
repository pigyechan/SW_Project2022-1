import { SearchBar } from "./Header.style";
import { useState, useEffect } from "react";
import { Head, Search, BackgroundDate, DisplayDate } from "./Header.style";
import { useHistory } from "react-router-dom";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdSearch,
} from "react-icons/md";

function Header() {
  let [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(now);
  }, []);

  return (
    <Head style={{ borderBottom: "1px solid #930a1a" }}>
      <MdOutlineArrowBackIos
        style={{
          color: "#ffffff",
          marginLeft: "1vw",
          fontSize: "5vh",
        }}
      />
      <MdOutlineArrowForwardIos
        style={{
          color: "#ffffff",
          marginLeft: "1vw",
          marginRight: "0vw",
          fontSize: "5vh",
        }}
      />
      <SearchBar>
        <MdSearch
          style={{
            color: "white",
            fontSize: "4vh",
            position: "relative",
            marginLeft: "1vw",
          }}
        />
        <Search type="text" placeholder="검색할 내용을 입력해 주세요." />
      </SearchBar>

      <BackgroundDate>
        <DisplayDate>
          {now.getFullYear()} / {now.getMonth() + 1} / {now.getDate()}
        </DisplayDate>
        <DisplayDate>
          {now.getHours()} : {now.getMinutes()} : {now.getSeconds()}
        </DisplayDate>
      </BackgroundDate>
    </Head>
  );
}

export default Header;
