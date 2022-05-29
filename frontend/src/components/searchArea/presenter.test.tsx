import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

const searchText = {
  content: 'test',
};

describe('Input', () => {
  it('renders correctly', () => {
    render(
      <Presenter
        search={searchText}
        handleInputChange={() => {}}
        handleSearch={() => {}}
      />
    );
    const search_button: any = screen.getByTestId('button');
    const search_input: any = screen.getByTestId('input');

    expect(search_button).toBeTruthy();
    expect(search_input).toBeTruthy();
  });

  it('update on change', () => {
    render(
      <Presenter
        search={test}
        handleInputChange={() => {}}
        handleSearch={() => {}}
      />
    );
    const search_input: any = screen.getByTestId('input');
    userEvent.type(search_input, 'test');
    expect(search_input.value).toBe('test');
  });
});
