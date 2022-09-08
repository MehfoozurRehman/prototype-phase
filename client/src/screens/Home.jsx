import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(0);
  const arrayof1to100 = Array.from(Array(50).keys());
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
      {arrayof1to100.map((item, i) => (
        <HomeListEntry index={i} open={open} setOpen={setOpen} />
      ))}
    </div>
  );
}

function HomeListEntry({ index, open, setOpen }) {
  return (
    <div className="home__container__list">
      <button
        className="home__container__list__header"
        onClick={() => {
          setOpen(index);
        }}
      >
        <div className="home__container__list__entry">
          <button className="home__container__list__entry__button" title="Edit">
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
              class="feather feather-edit-2"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </button>
          <button
            className="home__container__list__entry__button home__container__list__entry__button__reverse"
            title="Delete"
          >
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
              class="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
        <div className="home__container__list__entry">Teacher Id</div>
        <div className="home__container__list__entry">Working Days</div>
      </button>
      {open === index ? (
        <div className="home__container__list__content">
          <div className="home__container__list__content__header">
            <div className="home__container__list__entry">Working Day</div>
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
          <div className="home__container__list__content__body">
            <div className="home__container__list__entry">Working Day</div>
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
          <div className="home__container__list__content__body">
            <div className="home__container__list__entry">Working Day</div>
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
          <div className="home__container__list__content__body">
            <div className="home__container__list__entry">Working Day</div>
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
          <div className="home__container__list__content__body">
            <div className="home__container__list__entry">Working Day</div>
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
          <div className="home__container__list__content__body">
            <div className="home__container__list__entry">Working Day</div>
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
