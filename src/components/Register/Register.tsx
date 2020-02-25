import React, {Component} from "react";
import './Register.scss';
export default class Register extends Component {
    state = {
        item:[],
    }
    // componentDidMount(): void {
    //     fetch('/api/customer/')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({item: data})
    //         });
    // }

    render() {
        return (
            <div className='register-wrap'>
                {this.state.item.map(i => <div>{i['firstName']}</div>)}
            </div>
        )
    }
}