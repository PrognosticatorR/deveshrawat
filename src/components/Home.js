import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/';

const Title = styled.p({
    fontWeight: 100,
    fontSize: 80,
    alignSelf: 'center',
    color: 'white',
    justifySelf: 'center'
});
const SubTitle = styled.p({
    fontWeight: 200,
    fontSize: 20,
    alignSelf: 'center',
    color: '#F7474E',
    margin: 30
});
const Wrapper = styled.div({
    alignItems: 'space-around',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#292929',
    backgroundSize: 100,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
});

const Home = () => {
    return (
        <Wrapper>
            <SubTitle>Fullstack/Blockchain Development and Design</SubTitle>
            <Title>Devesh Rawat</Title>
            <SubTitle>A Full-Stack developer who, increasing his knowlade and experience regularly.</SubTitle>

            {/* <div>
                <h1>Devesh Rawat</h1>
                <p>A Full-Stack developer who, increasing his knowlade and experience regularly.</p>
            </div> */}
        </Wrapper>
    );
};

export default Home;
