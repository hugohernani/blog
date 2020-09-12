import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'd3-transition';

import React, { useCallback, useMemo } from 'react';
import ReactWordCloud, {
  Word,
  CallbacksProp as WordCloudCallbackProps,
  OptionsProp as WordCloudOptions,
} from 'react-wordcloud';

import { select } from 'd3-selection';
import wordsSource from './words';

const WordCloud: React.FC = () => {
  const words = useMemo(
    () =>
      wordsSource.map(({ text, value }) => ({
        text: text.charAt(0).toUpperCase() + text.slice(1),
        value,
      })),
    [],
  );

  const rangeColors = useMemo(() => ['#ff0000', '#fdfe02', '#00ff00', '#eeeeee', '#000000'], []);

  const options = useMemo<WordCloudOptions>(
    () => ({
      enableTooltip: false,
      rotations: 0,
      rotationAngles: [0, 90],
      colors: rangeColors,
      fontFamily: 'Impact, Charcoal, sans-serif',
      fontSizes: [30, 100],
      fontWeight: 'bold',
      tooltipOptions: {},
      scale: 'log',
      spiral: 'archimedean',
      svgAttributes: {
        role: 'list',
      },
      transitionDuration: 300,
    }),
    [rangeColors],
  );

  const mouseActionCallback = useCallback(
    (callbackName: string) => {
      return (word: Word, event?: MouseEvent) => {
        const isActive = callbackName !== 'onWordMouseOut';
        const element = event?.target as HTMLElement;
        const d3Element = select(element);
        if (isActive) {
          d3Element.attr('defaultColor', d3Element.attr('fill'));
        }
        const _rangeColors = rangeColors.filter((c) => c !== d3Element.attr('defaultColor'));
        d3Element
          .interrupt()
          .transition()
          .attr(
            'fill',
            isActive ? _rangeColors[Math.floor(Math.random() * _rangeColors.length)] : d3Element.attr('defaultColor'),
          )
          .attr('font-size', isActive ? '70' : '50')
          .attr('text-decoration', isActive ? 'underline' : 'none');
      };
    },
    [rangeColors],
  );

  const wordCloudCallbacks = useMemo<WordCloudCallbackProps>(
    () => ({
      onWordMouseOut: mouseActionCallback('onWordMouseOut'),
      onWordMouseOver: mouseActionCallback('onWordMouseOver'),
    }),
    [mouseActionCallback],
  );

  return useMemo(() => <ReactWordCloud words={words} options={options} callbacks={wordCloudCallbacks} />, [
    words,
    options,
    wordCloudCallbacks,
  ]);
};

export default WordCloud;
