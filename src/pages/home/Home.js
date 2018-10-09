import React,{ Component} from 'react';

export default class Home extends Component{
    constructor(){
        super();
        fetch('https://api.github.com/users/chriscoyier/repos')
            .then(response => {
                console.log(response);
            })
    }
    render(){
        return (
            <div>
                <h1>主页</h1>
            </div>
        )
    }
}