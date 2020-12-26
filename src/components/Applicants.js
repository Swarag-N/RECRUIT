import React, { Component } from 'react';
import { List, Typography } from 'antd';
import './Applicants.less'

class Applicants extends Component {
    constructor (props){
        super(props)
    }

    render() {
        let {shortlist} = this.props
        return (
            <>
            <List
                size="large"
                bordered
                dataSource={shortlist}
                renderItem={item => (
                <List.Item>
                    <div>{item.Name}</div> 
                    <Typography.Text code >{item.RegNo}</Typography.Text>
                </List.Item>
                )
            }
            className="Applicants"/>
            </>
        );
    }
}

export default Applicants;