import React, { memo } from "react";
import { useSelector } from "react-redux";
import { selectData, isFetchingData } from "../selectors";
import Loader from "./loader";
import AddCard from "./addCard";
import { useCallback } from "react/cjs/react.development";

const DataCardHOC = ({ enableAddTodo, name, view }) => {
  return function Card() {
    const data = useSelector(state => selectData(state, name));
    const isFetching = useSelector(state => isFetchingData(state, name));

    const renderContents = useCallback((titleProps, object) => {
      if (!Array.isArray(titleProps)) {
        return object[titleProps];
      }
      return (<>
        {
          titleProps.map(prop => {
            if (typeof prop === "string") {
              return <p key={prop}>{object[prop]}</p>;
            } else if (typeof prop === "object") {
              const key = Object.keys(prop)[0];
              const propsValues = prop[key];
              return propsValues.map(p => <p key={`${key}-${p}`}>{object[key][p]}</p>)
            }
          })
        }
      </>
      )
    })
    if (isFetching) {
      return <Loader />
    }
    return (
      <div className="page-content">
        {enableAddTodo && <AddCard name={name} />}
        <div className="cards">
          {
            data.map((eachOption) => {
              return (
                <div className="card" key={eachOption.id}>
                  <h3>{renderContents(view[0].props, eachOption)}</h3>
                  <div>{view.length > 1 && renderContents(view[1].props, eachOption)}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default DataCardHOC;