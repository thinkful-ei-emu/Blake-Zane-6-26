import React from 'react';


class RouletteGun extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        };
    }



    clickEventHandler = () => {
        console.log(`our chamber ${this.props.bulletInChamber}`)
        this.setState({
            spinningTheChamber: true
            
        });
        console.log('spinning the chamber');
         setTimeout(() => {
            console.log('Set Timeout Ran')
            let randomNumber=Math.ceil(Math.random() * 8);
            this.setState({
                spinningTheChamber:false,
                chamber:randomNumber
        });

        }, 2000);
        

        console.log(`completed, ${this.state.chamber}`);

    }
    render() {
        return (
            <div>
                {this.state.spinningTheChamber&&<p>spinning the chamber and pulling the trigger!</p>}
                {this.state.chamber===this.props.bulletInChamber&&!this.state.spinningTheChamber&&<p>BANG!!!!</p>}
                {this.state.chamber!==this.props.bulletInChamber&&!this.state.spinningTheChamber&&<p>you're safe</p>}
                <button onClick={this.clickEventHandler}>Pull the trigger!</button>

            </div>
        )
    }
}


export default RouletteGun;
