import React, { Component } from 'react';
import { Collapse, Spin , BackTop} from 'antd';
import Applicants from './Applicants'
import DATA from '../data/shortlist.csv'

const { Panel } = Collapse;
const csv =require("csvtojson");
class Results extends Component {

    constructor(props){
        super(props)
        this.state={
            SHORTLISTED:[],
            loading:true
        }
        this.getShortlistStudents = this.getShortlistStudents.bind(this)
    }

    getShortlistStudents = ()=>{
        fetch(DATA).then(r => r.text())
        .then(async( text) => {
            const RAW_SHORTLIST = await csv().fromString(text);
            console.table(RAW_SHORTLIST)
            let SHORTLISTED = RAW_SHORTLIST.reduce((r,applicant)=>{
                const {Name,RegNo,Department} = applicant
                r[Department] = [...r[Department]||[],{
                    Name,RegNo
                }]
                return r
            },{});
            this.setState({SHORTLISTED})
        });
    }

    componentDidMount(){
        this.getShortlistStudents()
        this.setState({loading:false})
    }

    
    render() {
        let {loading,SHORTLISTED} = this.state
        let body;
        if(loading){
            body=<Spin tip="Loading..."></Spin>
        }else{
            body=<>
            <Collapse style={{width:"50%"}} accordion>
                {
                    Object.keys(SHORTLISTED).map((dep,idx)=>{
                        return <Panel header={dep} key={idx}>
                            <Applicants shortlist={SHORTLISTED[dep]}/>
                            </Panel>
                    })
                }
            </Collapse></>
        }
        return (
            <>
            {body}
            <BackTop/>
            </>
        );
    }
}

export default Results;