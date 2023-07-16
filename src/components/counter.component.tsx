import * as React from "react";
import Counter from "../models/counter-view-model";

export interface CounterProps {
  counter: Counter;
  onInCrement: any;
  onDecrement: any;
  onDelete: any;
}

export interface CounterState {}

function CounterComponent (props: CounterProps) {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-1">
            <span
              className="badge badge-warning badge-sm"
              style={{ margin: 5 }}
            >
              {formatCount()}
            </span>
          </div>
          <div className="col-md-10">
            <button
              style={{ marginRight: 10 }}
              className="btn btn-primary btn-sm"
              onClick={() => props.onInCrement(props.counter)}
            >
              InCrement
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              disabled={props.counter.value === 0 ? true : false}
              onClick={() => props.onDecrement(props.counter)}
            >
              Decrement
            </button>
            <button
              className="btn btn-danger btn-sm "
              onClick={() => props.onDelete(props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );

function formatCount() {
    const value = props.counter.value;
    return value === 0 ? <h6>Zero</h6> : <h6>{value}</h6>;
  }
}

export default CounterComponent;
