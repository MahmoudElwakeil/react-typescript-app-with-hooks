import * as React from 'react';
import Counter from '../models/counter-view-model';
import CounterComponent from './counter.component';

export interface CountersProps {
}

export interface CountersState {
    counters: Counter[];
}

class Counters extends React.Component<CountersProps, CountersState> {
    state = {
        counters: [
            { id: 1, value: 2 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }


    handleInCrement = (counter: Counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        //counters[index] = { ...counter };
        counters[index].value++;

        this.setState({ counters });
    };

    handleDecrement = (counter: Counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value--;
        this.setState({ counters });
    };

    handleDelete = (counterId: number) => {
        this.setState({
            counters: this.state.counters.filter((c) => c.id !== counterId),
        });
    };

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <CounterComponent
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onInCrement={this.handleInCrement}
                        onDecrement={this.handleDecrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;