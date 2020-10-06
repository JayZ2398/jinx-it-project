import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  SiteLayout,
  PrimaryButton,
  SecondaryButton,
  useUser,
  DarkTheme,
  HeaderBar,
  Routes,
} from "jinxui";

const SiteHeader = styled.header`
  margin-bottom: 1.45rem;
`;

const HeaderDiv = styled.div`
  max-width: 90%;
  padding: 0.6rem 0.5rem 0.2rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
`;

const TopBlockDiv = styled.div`
  background: #1c1c1c;
  text-align: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: auto;
`;

const StyledLogin = styled(SecondaryButton)`
  margin-top: 0px;
  margin-right: 30px;
  margin-left: 20px;
  margin-bottom: 0px;
  height: 30px;
`;

const LogoDiv = styled.div`
  text-align: center;
`;

const JinxLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 340px;
  height: 340px;
  object-fit: cover;
`;

const BodyDiv = styled.div`
  background: #434343;
  color: #eeeeee;
  overflow: auto;
`;

const JinxName = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 130px;
  line-height: 192px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3em;
  margin: 0;
`;

const CatchPhrase = styled.h3`
  font-family: "Heebo", sans-serif;
  font-weight: 100;
  font-size: 36px;
  line-height: 53px;
  align-items: center;
  text-align: center;
  color: #eeeeee;
`;

const SampleBody = styled.p`
  padding-top: 20px;
  font-family: "Heebo", sans-serif;
  font-weight: 80;
  font-size: 18px;
  line-height: 30px;

  text-align: justify;
  letter-spacing: 0.1em;
`;

const Home = () => {
  const { userData } = useUser();

  return (
    <div>
      <ThemeProvider theme={DarkTheme}>
        <BodyDiv>
          <TopBlockDiv>
            <SiteHeader>
              <HeaderDiv>
                <HeaderBar title="">
                  <StyledLink
                      href={userData.authenticated ? Routes.PORTFOLIO_DISPLAY : Routes.LOGIN}
                  >
                    <StyledLogin>Login</StyledLogin>
                  </StyledLink>
                </HeaderBar>
              </HeaderDiv>
            </SiteHeader>
            <LogoDiv>
              <JinxLogo src={require("images/Logo_Main.png")} />
            </LogoDiv>
            <JinxName>Jinx</JinxName>
            <CatchPhrase>Your portfolio, made simple</CatchPhrase>
            <StyledLink href="/signup">
              <PrimaryButton>JOIN TODAY</PrimaryButton>
            </StyledLink>
          </TopBlockDiv>

          <SiteLayout>
            <SampleBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SampleBody>
          </SiteLayout>
        </BodyDiv>
      </ThemeProvider>
    </div>
  );
};

export default Home;