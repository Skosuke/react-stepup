import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InlineStyle } from './components/inlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { EmotionJsx } from './components/Emotion';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <EmotionJsx />
    </div>
  );
}

export default App;
