import styled from "styled-components";

export const Canvas = styled.div`
  background: #444;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex-grow: 1;
  padding: 50px;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  background: #eee;
  max-width: 960px;
  min-width: 360px;
  width: 100%;
  min-height: 480;
  border: 1px solid grey;
  padding: 1em;
  -webkit-box-shadow: 0px 3px 16px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 16px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 16px 2px rgba(0, 0, 0, 0.75);
`;
