import React, { Component } from 'react';
import Select from 'react-select';

export default class SelectWrapper extends Component {
    render() {
        const { options, onChange } = this.props;

        return (
            <Select options={options} onChange={onChange} />
        );
    }
}
