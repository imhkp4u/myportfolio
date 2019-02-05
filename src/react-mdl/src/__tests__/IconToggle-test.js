/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, renderDOM } from './render';
import IconToggle from '../IconToggle';
import Icon from '../Icon';

describe('IconToggle', () => {
    it('should render an input checkbox inside a <label> ', () => {
        const output = render(<IconToggle name="add" />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-icon-toggle')
            .toInclude('mdl-js-icon-toggle');

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.type).toBe('checkbox');
    });

    it('should render an Icon inside the <label> ', () => {
        const output = render(<IconToggle name="add" />);

        expect(output.type).toBe('label');
        expect(output.props.className)
            .toInclude('mdl-icon-toggle')
            .toInclude('mdl-js-icon-toggle');

        const icon = output.props.children[1];
        expect(icon.type).toBe(Icon);
        expect(icon.props.name).toBe('add');
    });

    it('should be unchecked by default', () => {
        const output = render(<IconToggle name="add" />);

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toNotExist();
    });

    it('should be checked when specified', () => {
        const output = render(<IconToggle name="add" checked />);

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.checked).toBe(true);
    });

    it('should be disabled when specified', () => {
        const output = render(<IconToggle name="add" disabled />);

        const input = output.props.children[0];
        expect(input.type).toBe('input');
        expect(input.props.disabled).toBe(true);
    });

    it('should add ripple when specified', () => {
        const output = render(<IconToggle name="add" ripple />);

        expect(output.type).toBe('label');
        expect(output.props.className).toInclude('mdl-js-ripple-effect');
    });

    describe('should update the IconToggle after the first render', () => {
        it('when `checked` has changed', () => {
            const el = renderDOM(<IconToggle name="add" />);

            expect(el.className).toExclude('is-checked');

            ReactDOM.render(<IconToggle name="add" checked />, el.parentNode);
            expect(el.className).toInclude('is-checked');
            ReactDOM.render(<IconToggle name="add" />, el.parentNode);
            expect(el.className).toExclude('is-checked');
        });

        it('when `disable` has changed', () => {
            const el = renderDOM(<IconToggle name="add" />);

            expect(el.className).toExclude('is-disabled');
            ReactDOM.render(<IconToggle name="add" disabled />, el.parentNode);
            expect(el.className).toInclude('is-disabled');
            ReactDOM.render(<IconToggle name="add" />, el.parentNode);
            expect(el.className).toExclude('is-disabled');
        });
    });
});
