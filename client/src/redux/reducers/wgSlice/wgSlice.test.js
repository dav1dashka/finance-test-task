import wgSlice, { setWgData } from './wgSlice';

describe('wgSlice reducers', () => {
  test('set isChanged correctly', () => {
    const initialState = { isChanged: false, };

    const action = setWgData(true);
    const newState = wgSlice(initialState, action);

    expect(newState.isChanged).toEqual(true);
  });
});
