import React from "react";
import useSwr from "swr";
import { fetcher } from "../utils/fetcher";
import { HomeListEntry } from "../components/HomeListEntry";

export default function Home() {
  const { data, mutate } = useSwr(
    import.meta.env.VITE_API_URL + "api/teacher",
    fetcher
  );
  const [open, setOpen] = React.useState(0);
  return (
    <div className="home__container">
      <div className="home__container__header">
        <div className="home__container__header__search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="home__container__header__search__field"
            placeholder="Search"
          />
        </div>
        <button className="home__container__header__button">Add Teacher</button>
      </div>
      <div className="home__container__label">
        <div className="home__container__label__entry"></div>
        <div className="home__container__label__entry">Teacher ID</div>
        <div className="home__container__label__entry">Working Days</div>
      </div>
      {data?.map((item, i) => (
        <HomeListEntry
          index={i}
          data={item}
          open={open}
          setOpen={setOpen}
          mutate={mutate}
        />
      ))}
    </div>
  );
}
