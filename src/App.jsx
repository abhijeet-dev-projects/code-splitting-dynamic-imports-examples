import React from 'react';

import Header from './components/Header';
//import Test from './components/Test';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Test: null
        }
    }
    
    async componentDidMount() {
        const { Test } = await import(
            /* webpackChunkName: "async-Test" */
            './components/Test');
            this.setState({
                Test
            })
            
    }

    render() {
        if(!this.state.Test) {
            return null;
        }

        const { Test } = this.state;

        return (
            <div>
               <Header />
               <Test />
               {this.props.children}
            </div>
        );
    }
}
        
export default App;

