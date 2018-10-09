import React,{ Component} from 'react';

export default class About extends Component{
    constructor(){
        super();

        let content = {
            currentPage: 1,
            pageSize: 20,
            searchField: ''
        };
        fetch("/roomManager/getRoomList", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(content)
        }).then((res)=>{
            console.log(res, "res");
        });
    }
    render(){
        return (
            <div>
                <h1>关于</h1>
            </div>
        )
    }
}