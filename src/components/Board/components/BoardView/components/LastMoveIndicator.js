import styled from '@emotion/styled';
import { fillParentElement } from 'commonStyles';

const LAST_MOVE_COLOR = 'rgba(201,255,229,1.0)';

const LastMoveIndicator = styled.div({
  backgroundColor: LAST_MOVE_COLOR,
  borderRadius: '50%',
  zIndex: '-1',
  ...fillParentElement,
});

export default LastMoveIndicator;