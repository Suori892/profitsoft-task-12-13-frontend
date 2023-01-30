import React, {Component} from "react";
import Button from '@mui/material/Button';

class KeyBoardComponent extends Component {
    render() {
        return (
            <div className="button">
                <Button variant="contained" name="(" onClick={e => this.props.onClick(e.target.name)}>(</Button>
                <Button variant="contained" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                <Button variant="contained" name=")" onClick={e => this.props.onClick(e.target.name)}>)</Button>
                <Button variant="contained" name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button><br/>


                <Button variant="contained" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button variant="contained" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button variant="contained" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button variant="contained" name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>


                <Button variant="contained" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button variant="contained" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button variant="contained" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button variant="contained" name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>

                <Button variant="contained" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button variant="contained" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button variant="contained" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button variant="contained" name="*" onClick={e => this.props.onClick(e.target.name)}>*</Button><br/>


                <Button variant="contained" name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button variant="contained" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button variant="contained" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                <Button variant="contained" name="/" onClick={e => this.props.onClick(e.target.name)}>/</Button><br/>
            </div>
        );
    }
}

export default KeyBoardComponent;