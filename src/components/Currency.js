import React, { Component } from 'react';
import Props from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";

const Container = styled.div`
    margin: 5px 20px;
    display: flex;

    @media (min-width: 768px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const ResizeableTextField = styled(TextField)`
    & label, & label.Mui-disabled {
        color: #1C1F30;
    }

    & fieldset, & .MuiOutlinedInput-root.Mui-disabled fieldset {
        border-color: #1C1F30;
    }

    & input {
        color: #1C1F30;
        padding: 10.5px 14px;
    }

    &:first-child {
        margin-right: 10px;
    }

    @media (min-width: 768px) {
        & input {
            padding: 18.5px 14px;
        }
    }
`;

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
    } = this.props;

    const { numberValue } = this.state;

    return (
        <Container>
            <ResizeableTextField
                label={title}
                value={numberValue}
                onChange={this.onChangeValue}
                margin="normal"
                variant="outlined"
            />
            <ResizeableTextField
                label="USD"
                value={numberValue * currencyExchangeValue}
                disabled
                margin="normal"
                variant="outlined"
            />
        </Container>
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

export default Currency;
