import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { ALL_PIECES } from 'services/logic/constants';
import * as styles from 'commonStyles';
import getImageByCode from './images';

const isMoving = ({ moveX, moveY }) => moveX !== 0 || moveY !== 0;

const cssTransform = (squareSize, { moveX, moveY }) => {
  const xTranslate = `calc(${squareSize} * ${moveX})`;
  const yTranslate = `calc(${squareSize} * ${moveY})`;

  return `transform: translate(${xTranslate}, ${yTranslate})`;
};

const Wrapper = styled.img`
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  max-height: 80%;
  max-width: 80%;
  display: block;
  margin: auto;
  z-index: ${props => (isMoving(props) ? 100 : 0)};
  transition: transform 50ms ease-in-out;
  ${styles.MEDIA_TINY} {
    ${props => cssTransform(styles.SQUARE_SIZE_TINY, props)};
  }
  ${styles.MEDIA_SMALL} {
    ${props => cssTransform(styles.SQUARE_SIZE_SMALL, props)};
  }
  ${styles.MEDIA_MEDIUM} {
    ${props => cssTransform(styles.SQUARE_SIZE_MEDIUM, props)};
  }
  ${styles.MEDIA_LARGE} {
    ${props => cssTransform(styles.SQUARE_SIZE_LARGE, props)};
  }
`;

const Piece = ({ code, moveX, moveY }) => (
  <Wrapper
    alt=""
    className="Piece"
    moveX={moveX}
    moveY={moveY}
    src={getImageByCode(code)}
  />
);

Piece.propTypes = {
  code: PropTypes.oneOf(ALL_PIECES).isRequired,
  moveX: PropTypes.number,
  moveY: PropTypes.number,
};

Piece.defaultProps = {
  moveX: 0,
  moveY: 0,
};

export default Piece;
