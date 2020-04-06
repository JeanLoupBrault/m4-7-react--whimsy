import React from 'react';
import styled, { keyframes } from 'styled-components';
import Particle from '../Particle';
import { random, range, sample } from '../../utils';

const ConfettiPiece = ({ angle, distance, color }) => {
    const size = 10;

    return (
        <CenteredWithinParent>
            <Particle
                angle={angle}
                starDistance={distance * 0.55}
                endDistance={distance}
            >

                <Circle style={{
                    width: size,
                    height: size,
                    background: color,
                }}
                />
                <Circle
                    keyframeId={sample(['warm', 'mid', 'cool'])}
                    style={{
                        width: size,
                        height: size,
                    }}
                />
            </Particle>
        </CenteredWithinParent>
    );
};

const warmKeyframe = keyframes`
  0% { background: pink; }
  50% { background: yellow; }
  100% { background: pink; }
`;
const midKeyframe = keyframes`
  0% { background: blue; }
  50% { background: hotpink; }
  100% { background: blue; }
`;
const coolKeyframe = keyframes`
  0% { background: turquoise; }
  50% { background: violet; }
  100% { background: turquoise; }
`;

const getKeyframeForId = id => {
    switch (id) {
        case 'warm':
            return warmKeyframe;
        case 'mid':
            return midKeyframe;
        case 'cool':
            return coolKeyframe;
        default:
        // do nothing
    }
};

const CenteredWithinParent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, 50%);
`;

const Circle = styled.div`
border-radius: 50%;
animation: ${props => getKeyframeForId(props.keyframeId)} 1000ms infinite;
`;

export default ConfettiPiece;