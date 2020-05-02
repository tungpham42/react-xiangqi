import actions from 'actions';
import makeMove from 'actions/makeMove';

test('make a move', async () => {
  // eslint-disable-next-line no-undef
  const store = mockStore({});

  await store.dispatch(makeMove({ move: 'a1a2' }));

  expect(store.getActions()).toStrictEqual([
    actions.game.positions.add({ move: 'a1a2' }),
    actions.game.selectedPosition.set(null),
    actions.game.showConfirmMoveMenu.set(true),
  ]);
});