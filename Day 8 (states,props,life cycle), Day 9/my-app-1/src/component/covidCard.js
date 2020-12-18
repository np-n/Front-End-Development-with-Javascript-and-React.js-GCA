import React,{Component} from 'react'

class CovidCard extends Component{
    render(){
        let item = this.props.data
        return(
        <div style={{background:'#f5f5f5' ,padding:20,marginBottom:20}}>
            <div style={{textAlign:'center',fontSize:'25px',fontWeight:'bold',color:'#2280ff',marginBottom:25}}>
                {item.country}</div>

            <div style={{display:'flex',justifyContent:'space-between',padding:10}}>
                <div style={{color:'blue'}}>Todays Cases</div>
                <div style={{color:'red'}}>Todays Deaths</div>
                <div style={{color:'#f922bb'}}>Criticals</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',padding:10}}>
                <div style={{color:'blue'}}>{item.todayCases}</div>
                <div style={{color:'red'}}>{item.todayDeaths}</div>
                <div style={{color:'#f922bb'}}>{item.critical}</div>
            </div>

            <div style={{marginTop:20,marginBottom:20}}>
            <hr/>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',padding:10}}>
                <div style={{color:'blue'}}>Total Cases</div>
                <div style={{color:'red'}}>Total Deaths</div>
                <div style={{color:'#33b5b1'}}>Active</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',padding:10}}>
                <div style={{color:'blue'}}>{item.cases}</div>
                <div style={{color:'red'}}>{item.deaths}</div>
                <div style={{color:'#33b5b1'}}>{item.active}</div>
            </div>

            <div style={{marginTop:15,marginBottom:15}}>
            <hr/>
            </div>

            <div style={{textAlign:'center' ,marginBottom:10,color:'green'}}>Total Recovered</div>
        <div style={{textAlign:'center',color:'green'}}>{item.recovered}</div>

        </div>
            

        )
    }
}

export {CovidCard}