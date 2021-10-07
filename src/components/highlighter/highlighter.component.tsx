import { Paragraph } from 'grommet';
import { getParagraphStyles } from '../../utils/render-data';

type Props = {
  terms: string[],
  text: string,
  isDesktop: boolean,
};

const updateText = (text: string, terms: string[]): string => (
  terms.reduce((oldText, term) => oldText.replaceAll(term, `<b>${term}</b>`), text)
);

const HighlightedParagraph = ({ terms, text, isDesktop }: Props) => (
  <Paragraph
    style={getParagraphStyles(isDesktop)}
    dangerouslySetInnerHTML={{ __html: updateText(text, terms) }}
    fill
  />
);

export default HighlightedParagraph;
