import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import draw from 'actions/draw';
import { getCurrentPlayer, getOpponent } from 'reducers';

const DrawButton = () => {
  const dispatch = useDispatch();

  const currentPlayer = useSelector(state => getCurrentPlayer(state));
  const gameSlug = useSelector(state => state.gameSlug);
  const openDrawOffer = useSelector(state => state.openDrawOffer);
  const opponent = useSelector(state => getOpponent(state));

  const request = () => {
    dispatch(draw.request({ gameSlug, username: currentPlayer.name }));
  };

  const reject = () => {
    dispatch(draw.reject({ gameSlug, username: currentPlayer.name }));
  };

  const cancel = () => {
    dispatch(draw.cancel({ gameSlug, username: currentPlayer.name }));
  };

  const accept = () => {
    dispatch(draw.accept({ gameSlug, username: currentPlayer.name }));
  };

  const renderButton = () => (
    <Button onClick={request}>
      <Icon fitted name="handshake outline" />
    </Button>
  );

  const renderCancelButton = () => (
    <Button color="red" icon labelPosition="left" onClick={cancel}>
      <Icon name="handshake outline" />
      Cancel
    </Button>
  );

  const renderAcceptOrRejectButton = () => (
    <Button.Group>
      <Button compact>
        <Icon name="handshake outline" />
      </Button>
      <Button color="green" onClick={accept}>
        Accept
      </Button>
      <Button color="red" onClick={reject}>
        Reject
      </Button>
    </Button.Group>
  );

  if (openDrawOffer === currentPlayer.name) return renderCancelButton();
  if (openDrawOffer === opponent.name) return renderAcceptOrRejectButton();
  return renderButton();
};

export default DrawButton;
