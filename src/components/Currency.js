import React, { Component } from 'react';
import Props from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  currency: {
    marginRight: 10,
  },
};

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberValue: 0,
    };
  }

  componentDidUpdate(prevProps) {
    const { currencyExchangeValue, calculateTotal, exchange: { key } } = this.props;
    const { currencyExchangeValue: prevValue } = prevProps;
    const { numberValue } = this.state;

    if (currencyExchangeValue !== prevValue) {
      calculateTotal(numberValue * currencyExchangeValue, key);
    }
  }

  onChangeValue = (event) => {
    const { calculateTotal, currencyExchangeValue, exchange: { key } } = this.props;
    this.setState({
      numberValue: event.target.value,
    });
    calculateTotal(event.target.value * currencyExchangeValue, key);
  }

  render() {
    const {
      currencyExchangeValue,
      exchange: { title },
      classes,
    } = this.props;

    const { numberValue } = this.state;

    return (
      <div className={classes.container}>
        <TextField
          label={title}
          value={numberValue}
          onChange={this.onChangeValue}
          margin="normal"
          variant="outlined"
          className={classes.currency}
        />
        <TextField
          label="USD"
          value={numberValue * currencyExchangeValue}
          disabled
          margin="normal"
          variant="outlined"
          className={classes.currency}
        />
      </div>
    );
  }
}

Currency.propTypes = {
  exchange: Props.shape({}),
  currencyExchangeValue: Props.number,
};

Currency.defaultTypes = {
  exchange: {},
  currencyExchangeValue: '',
};

export default withStyles(styles)(Currency);
