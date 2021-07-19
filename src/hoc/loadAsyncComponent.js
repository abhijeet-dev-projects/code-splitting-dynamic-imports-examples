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
            //const { About } = await promise;
            const component = await promise;
            //  console.log(obj, 'spiderman')

            this.setState({
                AsyncComponent: component.default
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