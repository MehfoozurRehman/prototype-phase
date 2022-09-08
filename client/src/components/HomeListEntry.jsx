import React from "react";
import useSwr from "swr";
import axios from "axios";
import { fetcher } from "../utils/fetcher";

export function HomeListEntry({ index, open, setOpen, data, mutate }) {
  const { data: timetable } = useSwr(
    import.meta.env.VITE_API_URL + "api/timetable",
    fetcher
  );
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
            onClick={() => {
              axios.delete(
                import.meta.env.VITE_API_URL + "api/teacher/" + data._id
              );
              mutate();
            }}
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
        <div className="home__container__list__entry">{data.t_id}</div>
        <div className="home__container__list__entry">
          {data.working_days.map((item, i) =>
            i + 1 < data.working_days.length ? item + ", " : item
          )}
        </div>
      </button>
      {open === index ? (
        <div className="home__container__list__content">
          <div className="home__container__list__content__header">
            <div className="home__container__list__entry">Day</div>
            <div className="home__container__list__entry">Month</div>
            <div className="home__container__list__entry">Hour</div>
          </div>
          {timetable
            ?.filter((item) => item.t_id === data.t_id)
            .map((item) => (
              <div className="home__container__list__content__body">
                <div className="home__container__list__entry">{item.day}</div>
                <div className="home__container__list__entry">{item.month}</div>
                <div className="home__container__list__entry">{item.hour}</div>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}
