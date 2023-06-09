import React from 'react';
import AnimationBlock from './AnimationBlock';

const ProcessesContent = () => {
  return (
    <section className="processes">
      <p className="blocks-title">Processes</p>
      <h2
        className="blocks-description blocks-description-border"
        style={{ borderBottom: '1px solid #b8b8b8' }}
      >
        Harnessing cutting-edge analytics techniques, Korax AI
        synergistically combines them to exceptionally powerful
        effective trading algorithms that yield impressive results in
        the competitive market environment.
      </h2>
      <AnimationBlock />
    </section>
  );
};

export default ProcessesContent;
