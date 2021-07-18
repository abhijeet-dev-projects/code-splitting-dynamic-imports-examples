import React from 'react';

export const loadAsyncComponent = (promise, props) => {

    class ComposedComponent extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                AsyncComponent: null
            }
        }

        async componentDidMount() {
            console.log('spiderman')
            const { About } = await promise;

            this.setState({
                AsyncComponent: About
            });
        }

        render() {
            if(!this.state.AsyncComponent){
                return null;
            }

            const { AsyncComponent } = this.state;
            console.log(this.props,'check props')
            return <AsyncComponent />
        }
    }

    return <ComposedComponent {...props}/>
}