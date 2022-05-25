import Tab from './PlayersList/index';

function Playerss(){
    
    return(
        <div style={{
            width: "87vw",
          }}>
            <div
                style={{
                    height: "5%",
                    padding: "20px",
                    borderBottom: "1px solid #930A1A",
                    display: "flex",
                    alignItems: "center",
                    color: 'white',
                    fontSize:"3.5vh",
                    justifyContent: "center",
                  }}>선수단</div>
            <Tab/>
        </div>
    );
}

export default Playerss;