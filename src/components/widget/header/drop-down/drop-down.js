import React, {Component} from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: 'monthly'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handeChange = this.handeChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handeChange(event, value) {
    this.setState({ value, open: false });
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const value = this.state.value;

    return (
      <div>
        <div className="dropdown" onClick={this.handleClick}>
          <span>
            { value.charAt(0).toUpperCase() + value.slice(1) }
          </span>
          <img src="/images/arrowdown.svg" alt=""/>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>
          <Menu onChange={this.handeChange}>
            <MenuItem value="monthly" primaryText="Monthly" />
            <MenuItem value="weekly" primaryText="Weekly" />
            <MenuItem value="daily" primaryText="Daily" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default DropDown;