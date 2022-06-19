import React from "react";

const AllFun = () => {
  const All = document.querySelector("#All")?.checked;
  return All;
};
const LannisterFun = () => {
  const Lannisters = document.querySelector("#Lannisters")?.checked;
  return Lannisters;
};
const TargaryenFun = () => {
  const Targaryen = document.querySelector("#Targaryen")?.checked;
  return Targaryen;
};
const GreyjoyFun = () => {
  const Greyjoy = document.querySelector("#Greyjoy")?.checked;
  return Greyjoy;
};
const StarkFun = () => {
  const Stark = document.querySelector("#Stark")?.checked;
  return Stark;
};
const BaratheonFun = () => {
  const Baratheon = document.querySelector("#Baratheon")?.checked;
  return Baratheon;
};
const FreyFun = () => {
  const Frey = document.querySelector("#Frey")?.checked;
  return Frey;
};
const TullyFun = () => {
  const Tully = document.querySelector("#Tully")?.checked;
  return Tully;
};
const MartellFun = () => {
  const Martell = document.querySelector("#Martell")?.checked;
  return Martell;
};
const MormontFun = () => {
  const Mormont = document.querySelector("#Mormont")?.checked;
  return Mormont;
};
const TyrellFun = () => {
  const Tyrell = document.querySelector("#Tyrell")?.checked;
  return Tyrell;
};
const UmberFun = () => {
  const Umber = document.querySelector("#Umber")?.checked;
  return Umber;
};
const TarlyFun = () => {
  const Tarly = document.querySelector("#Tarly")?.checked;
  return Tarly;
};

const Filter = () => {
  return (
    <div className="filter">
      <h3>House name</h3>
      <div className="all_house_name">
        <div className="house_name">
          <input
            type="radio"
            id="All"
            value={"All"}
            name="filter"
            defaultChecked
          />
          <label for="All" className="label">
            All
          </label>
        </div>
        <div className="house_name">
          <input
            type="radio"
            id="Lannisters"
            value={"Lannisters"}
            name="filter"
          />
          <label for="Lannisters" className="label">
            Lannisters
          </label>
        </div>
        <div className="house_name">
          <input
            type="radio"
            id="Targaryen"
            value={"Targaryen"}
            name="filter"
          />
          <label for="Targaryen" className="label">
            Targaryen
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Greyjoy" value={"Greyjoy"} name="filter" />
          <label for="Greyjoy" className="label">
            Greyjoy
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Stark" value={"Stark"} name="filter" />
          <label for="Stark" className="label">
            Stark
          </label>
        </div>
        <div className="house_name">
          <input
            type="radio"
            id="Baratheon"
            value={"Baratheon"}
            name="filter"
          />
          <label for="Baratheon" className="label">
            Baratheon
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Frey" value={"Frey"} name="filter" />
          <label for="Frey" className="label">
            Frey
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Tully" value={"Tully"} name="filter" />
          <label for="Tully" className="label">
            Tully
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Martell" value={"Martell"} name="filter" />
          <label for="Martell" className="label">
            Martell
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Mormont" value={"Mormont"} name="filter" />
          <label for="Mormont" className="label">
            Mormont
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Tyrell" value={"Tyrell"} name="filter" />
          <label for="Tyrell" className="label">
            Tyrell
          </label>
        </div>
        <div className="house_name">
          <input type="radio" id="Umber" value={"Umber"} name="filter" />
          <label for="Umber" className="label">
            Umber
          </label>
        </div>

        <div className="house_name">
          <input type="radio" id="Tarly" value={"Tarly"} name="filter" />
          <label for="Tarly" className="label">
            Tarly
          </label>
        </div>
      </div>
    </div>
  );
};

export {
  AllFun,
  LannisterFun,
  TargaryenFun,
  GreyjoyFun,
  StarkFun,
  BaratheonFun,
  FreyFun,
  TullyFun,
  MartellFun,
  MormontFun,
  TyrellFun,
  UmberFun,
  TarlyFun,
};

export default Filter;
