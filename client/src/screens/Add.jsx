import React from "react";

export default function Add() {
  return (
    <>
      <div className="add__teacher__id__wraper">
        <div className="add__teacher__id">
          <div className="add__teacher__id__heading">Add Teacher ID</div>
          <div className="home__container__header__search">
            <input
              type="text"
              className="home__container__header__search__field"
              placeholder="Teacher"
            />
          </div>
        </div>
        <div className="add__teacher__add__btn">
          <button className="home__container__header__button">
            Save Schedule
          </button>
        </div>
      </div>

      <div className="home__container__label">
        <div className="home__container__label__entry"></div>
        <div className="home__container__label__entry">
          Teacher Time Table Add form
        </div>
        <div className="home__container__label__entry"></div>
      </div>
      <div className="input__form__wraper">
        <div className="input__form__container">
          <div className="home__container__header__search">
            <input
              type="text"
              className="home__container__header__search__field"
              placeholder="Day"
            />
          </div>
          <div className="home__container__header__search">
            <input
              type="text"
              className="home__container__header__search__field"
              placeholder="Month"
            />
          </div>
          <div className="home__container__header__search">
            <input
              type="text"
              className="home__container__header__search__field"
              placeholder="Date"
            />
          </div>
          <div className="home__container__header__search">
            <input
              type="text"
              className="home__container__header__search__field"
              placeholder="Hour"
            />
          </div>

          <button className="home__container__header__button">Add</button>
        </div>
      </div>
    </>
  );
}
